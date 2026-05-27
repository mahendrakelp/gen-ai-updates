const { Langfuse } = require("langfuse");

let client = null;
let initialized = false;

function getLangfuse() {
  if (initialized) return client;
  initialized = true;

  const { LANGFUSE_SECRET_KEY, LANGFUSE_PUBLIC_KEY, LANGFUSE_BASE_URL } = process.env;
  if (!LANGFUSE_SECRET_KEY || !LANGFUSE_PUBLIC_KEY) {
    console.warn("  Langfuse: keys not set, tracing disabled");
    return null;
  }

  client = new Langfuse({
    secretKey: LANGFUSE_SECRET_KEY,
    publicKey: LANGFUSE_PUBLIC_KEY,
    baseUrl: LANGFUSE_BASE_URL || "https://cloud.langfuse.com",
  });
  return client;
}

async function flushLangfuse() {
  if (client) {
    try { await client.flushAsync(); } catch (err) {
      console.warn(`  Langfuse flush warning: ${err.message}`);
    }
  }
}

// Wrap a Gemini generateContent call with a Langfuse generation.
// `params` is the same object you'd pass to client.models.generateContent.
// `meta` lets the caller set generation name and extra metadata.
async function tracedGeminiCall(trace, aiClient, params, meta = {}) {
  const generation = trace?.generation({
    name: meta.name || "gemini-generation",
    model: params.model,
    modelParameters: {
      temperature: params.config?.temperature,
      max_output_tokens: params.config?.maxOutputTokens,
      tools: params.config?.tools ? params.config.tools.map((t) => Object.keys(t)[0]) : undefined,
    },
    input: {
      contents: params.contents,
      systemInstruction: params.config?.systemInstruction,
    },
    metadata: meta.metadata,
  });

  try {
    const response = await aiClient.models.generateContent(params);
    const usage = response.usageMetadata || {};
    const groundingMetadata = response.candidates?.[0]?.groundingMetadata || null;

    generation?.end({
      output: response.text,
      usage: {
        input: usage.promptTokenCount || 0,
        output: usage.candidatesTokenCount || 0,
        total: usage.totalTokenCount || 0,
      },
      metadata: {
        groundingMetadata,
      },
    });
    return response;
  } catch (err) {
    generation?.end({
      level: "ERROR",
      statusMessage: err.message,
    });
    throw err;
  }
}

module.exports = { getLangfuse, flushLangfuse, tracedGeminiCall };
