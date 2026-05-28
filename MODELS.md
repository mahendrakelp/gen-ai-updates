# Frontier Production Model Catalog

_Last refreshed: 2026-05-28 by genai-model-catalog routine._

## Alibaba

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Qwen3.7-Max (`qwen3.7-max`) | ga | 2026-05-20 | 1M | $2.50 | $7.50 | Sparse MoE (parameters undisclosed) | Long-horizon agentic reasoning and coding | prev: `qwen3-max` |
| Qwen3-Coder-Plus (`qwen3-coder-plus`) | ga | 2025-09-23 | 1M | $0.65 | $3.25 | Sparse MoE based on Qwen3-Coder-480B-A35B | Autonomous coding agents and large repos | prev: `qwen2.5-coder-plus` |
| Qwen3-Max (`qwen3-max`) | ga | 2025-09-23 | 262.1K | $0.78 | $3.90 | Sparse MoE, ~1T total parameters | General-purpose reasoning and instruction following | prev: `qwen2.5-max` → superseded by: `qwen3.7-max` |
| Qwen3-VL-Plus (`qwen3-vl-plus`) | ga | 2025-09-23 | 262.1K | $0.20 | $1.60 | Sparse MoE multimodal (based on Qwen3-VL-235B-A22B family) | Multimodal vision, image, and video understanding | prev: `qwen-vl-plus` |
| Qwen3-235B-A22B-Thinking-2507 (`qwen3-235b-a22b-thinking-2507`) | ga | 2025-07-25 | 262.1K | — | — | Sparse MoE - 235B total / 22B active | Open-weights SOTA reasoning and math | prev: `qwen3-235b-a22b` |

## Amazon

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Nova 2 Lite (`amazon.nova-2-lite-v1:0`) | ga | 2025-12-02 | 1M | $0.30 | $2.50 | Transformer-based multimodal foundation model with extend... | Cost-effective reasoning for everyday agentic workloads | prev: `amazon.nova-lite-v1:0` |
| Nova Premier (`amazon.nova-premier-v1:0`) | ga | 2025-04-30 | 1M | $2.50 | $12.50 | Transformer-based multimodal foundation model | Most capable Nova 1 multimodal model and distillation teacher | prev: `amazon.nova-pro-v1:0` |
| Nova Lite (`amazon.nova-lite-v1:0`) | ga | 2024-12-05 | 300K | $0.06 | $0.24 | Transformer-based multimodal foundation model | Very low-cost multimodal at high speed | superseded by: `amazon.nova-2-lite-v1:0` |
| Nova Micro (`amazon.nova-micro-v1:0`) | ga | 2024-12-05 | 128K | $0.04 | $0.14 | Transformer-based text-only foundation model | Fastest, cheapest text-only Nova for simple tasks | — |
| Nova Pro (`amazon.nova-pro-v1:0`) | ga | 2024-12-05 | 300K | $0.80 | $3.20 | Transformer-based multimodal foundation model | Balanced multimodal accuracy, speed, and cost | superseded by: `amazon.nova-2-pro-preview-20251202-v1:0` |
| Nova 2 Pro (`amazon.nova-2-pro-preview-20251202-v1:0`) | preview | 2025-12-02 | 1M | $2.19 | $17.50 | Transformer-based multimodal foundation model with extend... | Most intelligent Nova for complex multistep agents | prev: `amazon.nova-pro-v1:0` |

## Anthropic

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Claude Opus 4.8 (`claude-opus-4-8`) | ga | 2026-05-28 | 1M | $5.00 | $25.00 | — | Frontier agentic coding and long-horizon work | prev: `claude-opus-4-7` |
| Claude Opus 4.7 (`claude-opus-4-7`) | ga | 2026-04-16 | 1M | $5.00 | $25.00 | — | Complex reasoning and agentic coding | prev: `claude-opus-4-6` → superseded by: `claude-opus-4-8` |
| Claude Sonnet 4.6 (`claude-sonnet-4-6`) | ga | 2026-02-17 | 1M | $3.00 | $15.00 | — | Balanced speed, intelligence, and cost | prev: `claude-sonnet-4-5` |
| Claude Haiku 4.5 (`claude-haiku-4-5`) | ga | 2025-10-15 | 200K | $1.00 | $5.00 | — | High-concurrency, low-latency, cost-sensitive tasks | prev: `claude-haiku-3-5` |
| Claude Opus 4.6 (`claude-opus-4-6`) | ga | — | 1M | $5.00 | $25.00 | — | Prior-generation flagship reasoning and coding | prev: `claude-opus-4-5` → superseded by: `claude-opus-4-7` |

## Cohere

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Command A+ (`command-a-plus-05-2026`) | ga | 2026-05-20 | 128K | $2.50 | $10.00 | Decoder-only Sparse Mixture-of-Experts Transformer, 218B ... | Enterprise agentic workflows with vision and reasoning | prev: `command-a-03-2025` |
| Command A Reasoning (`command-a-reasoning-08-2025`) | ga | 2025-08-21 | 256K | $2.50 | $10.00 | Dense 111B-parameter Transformer with hybrid reasoning mode | Complex agentic and multilingual reasoning tasks | prev: `command-a-03-2025` |
| Command A Vision (`command-a-vision-07-2025`) | ga | 2025-07-31 | 128K | $2.50 | $10.00 | 112B-parameter multimodal model: SigLIP2 vision encoder f... | Enterprise document, chart and OCR understanding | prev: `command-a-03-2025` |
| Command A (`command-a-03-2025`) | ga | 2025-03-13 | 256K | $2.50 | $10.00 | Dense 111B-parameter Transformer with sliding-window atte... | Enterprise tool use, RAG and multilingual agents | prev: `command-r-plus-08-2024` → superseded by: `command-a-plus-05-2026` |
| Command R7B (`command-r7b-12-2024`) | ga | 2024-12-13 | 128K | $0.04 | $0.15 | Dense 7B-parameter Transformer | Low-cost, fast RAG and tool use at edge scale | — |
| Command R+ (`command-r-plus-08-2024`) | ga | 2024-08-30 | 128K | $2.50 | $10.00 | — | Complex RAG and multi-step tool use workflows | superseded by: `command-a-03-2025` |

## DeepSeek

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DeepSeek-V4-Flash (`deepseek-v4-flash`) | preview | 2026-04-24 | 1M | $0.14 | $0.28 | Sparse MoE - 284B total / 13B active | Cost-efficient production code, RAG, tool calling | prev: `deepseek-chat` |
| DeepSeek-V4-Pro (`deepseek-v4-pro`) | preview | 2026-04-24 | 1M | $0.43 | $0.87 | Sparse MoE - 1.6T total / 49B active | Flagship reasoning, agentic coding, long-context | prev: `deepseek-reasoner` |
| DeepSeek Chat (V3.2 legacy alias) (`deepseek-chat`) | deprecated | 2025-12-01 | 1M | $0.14 | $0.28 | Sparse MoE - 284B total / 13B active (routed to V4-Flash) | Legacy compatibility, non-thinking general chat | superseded by: `deepseek-v4-flash` |
| DeepSeek Reasoner (V3.2 legacy alias) (`deepseek-reasoner`) | deprecated | 2025-12-01 | 1M | $0.14 | $0.28 | Sparse MoE - 284B total / 13B active (routed to V4-Flash) | Legacy compatibility, thinking-mode reasoning | superseded by: `deepseek-v4-pro` |

## Google

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Gemini 3.5 Flash (`gemini-3.5-flash`) | ga | 2026-05-19 | 1M | $1.50 | $9.00 | — | Agentic coding and long-horizon tool use | prev: `gemini-3.1-pro-preview` |
| Gemini 2.5 Flash-Lite (`gemini-2.5-flash-lite`) | ga | 2025-07-22 | 1M | $0.10 | $0.40 | — | Ultra-cheap classification, translation, high-volume tasks | prev: `gemini-2.0-flash-lite` |
| Gemini 2.5 Flash (`gemini-2.5-flash`) | ga | 2025-06-17 | 1M | $0.30 | $2.50 | — | High-throughput, low-latency multimodal workloads | prev: `gemini-2.0-flash` |
| Gemini 2.5 Pro (`gemini-2.5-pro`) | ga | 2025-06-17 | 1M | $1.25 | $10.00 | — | General-purpose reasoning, coding, multimodal analysis | prev: `gemini-1.5-pro` → superseded by: `gemini-3.1-pro-preview` |
| Gemini 3.1 Pro (`gemini-3.1-pro-preview`) | preview | 2026-02-19 | 1M | $2.00 | $12.00 | — | Frontier reasoning, agentic and multimodal tasks | prev: `gemini-3-pro-preview` |

## Meta

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Llama 4 Maverick (`llama-4-maverick`) | ga | 2025-04-05 | 1M | $0.15 | $0.60 | Sparse MoE - 400B total / 17B active / 128 experts, early... | Multimodal assistant and general-purpose chat | prev: `llama-3.3-70b` |
| Llama 4 Scout (`llama-4-scout`) | ga | 2025-04-05 | 10M | $0.08 | $0.30 | Sparse MoE - 109B total / 17B active / 16 experts, early-... | Long-context multimodal tasks on single GPU | prev: `llama-3.3-70b` |
| Llama 3.3 70B Instruct (`llama-3.3-70b`) | ga | 2024-12-06 | 128K | — | — | Dense transformer - 70B parameters, text-only | Text-only multilingual instruction following | prev: `llama-3.1-405b` → superseded by: `llama-4-scout` |

## Microsoft

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Phi-4-reasoning (`phi-4-reasoning`) | ga | 2025-04-30 | 32K | — | — | Dense decoder-only Transformer, 14B parameters, fine-tune... | Step-by-step reasoning on math and science | prev: `phi-4` |
| Phi-4-mini (`phi-4-mini-instruct`) | ga | 2025-02-26 | 128K | — | — | Dense decoder-only Transformer with grouped-query attenti... | Efficient edge deployment with function calling | prev: `phi-3.5-mini` |
| Phi-4-multimodal (`phi-4-multimodal-instruct`) | ga | 2025-02-26 | 128K | — | — | Multimodal transformer with mixture-of-LoRAs integrating ... | Unified text, vision, and audio understanding | — |
| Phi-4 (`phi-4`) | ga | 2024-12-12 | 16K | — | — | Dense decoder-only Transformer, 14B parameters | Complex reasoning on math and STEM tasks | prev: `phi-3` |
| MAI-1-preview (`mai-1-preview`) | preview | 2025-08-28 | — | — | — | Mixture-of-experts foundation model | Consumer instruction-following and everyday queries | — |
| MAI-Voice-1 (`mai-voice-1`) | preview | 2025-08-28 | — | $22.00 | — | Neural text-to-speech model | Expressive high-fidelity text-to-speech generation | — |

## Mistral

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Mistral Medium 3.5 (`mistral-medium-2604`) | ga | 2026-04-29 | 256K | $1.50 | $7.50 | Dense 128B parameter transformer | Agentic coding and tool-use workloads | prev: `mistral-medium-2505` |
| Mistral Small 4 (`mistral-small-2603`) | ga | 2026-03-16 | 262.1K | $0.15 | $0.60 | Mixture-of-Experts, 6B active / 119B total parameters, 12... | Cheap unified reasoning, vision, and coding | prev: `mistral-small-2506` |
| Mistral Large 3 (`mistral-large-2512`) | ga | 2025-12-02 | 262.1K | $0.50 | $1.50 | Mixture-of-Experts, 41B active / 675B total parameters | Flagship multimodal general-purpose tasks | prev: `mistral-large-2411` |
| Magistral Medium 1.2 (`magistral-medium-2509`) | ga | 2025-09-18 | 128K | $2.00 | $5.00 | Reasoning model with vision encoder | Transparent chain-of-thought reasoning | prev: `magistral-medium-2507` |
| Codestral 25.08 (`codestral-2508`) | ga | 2025-08-01 | 256K | $0.30 | $0.90 | Code-specialized transformer | Low-latency code completion and FIM | prev: `codestral-2501` |

## Moonshot

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Kimi K2.6 (`kimi-k2.6`) | ga | 2026-04-20 | 262.1K | $0.95 | $4.00 | Sparse MoE - 1T total / 32B active, 384 routed + 1 shared... | Long-horizon agentic coding and multimodal orchestration | prev: `kimi-k2.5` |
| Kimi K2.5 (`kimi-k2.5`) | ga | 2026-01-27 | 262.1K | $0.60 | $2.50 | Sparse MoE - 1T total / 32B active, 384 experts, 8 active... | Cost-efficient multimodal agentic intelligence | prev: `kimi-k2-0905-preview` → superseded by: `kimi-k2.6` |
| Kimi K2 Thinking (`kimi-k2-thinking`) | deprecated | 2025-11-06 | 262.1K | $0.60 | $2.50 | Sparse MoE - 1T total / 32B active, 384 experts, 8 active... | Open-weight reasoning with interleaved tool use | prev: `kimi-k2-0905-preview` → superseded by: `kimi-k2.6` |

## NVIDIA

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Nemotron 3 Nano Omni 30B A3B Reasoning (`nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`) | ga | 2026-04-28 | — | — | — | Hybrid Mamba-Transformer MoE with vision/audio encoders (... | Multimodal agent reasoning on a single GPU | prev: `nvidia/nvidia-nemotron-nano-9b-v2` |
| Nemotron 3 Super 120B A12B (`nvidia/nemotron-3-super-120b-a12b`) | ga | 2026-03-11 | 1M | — | — | Hybrid Mamba-Attention MoE (LatentMoE) | Agentic reasoning, coding, long-context analysis | prev: `nvidia/llama-3.3-nemotron-super-49b-v1` |
| NVIDIA Nemotron Nano 9B v2 (`nvidia/nvidia-nemotron-nano-9b-v2`) | ga | 2025-09-05 | 131.1K | — | — | Hybrid Mamba-Transformer | Efficient on-device reasoning and chat | superseded by: `nvidia/nemotron-3-nano-30b-a3b` |
| Llama 3.1 Nemotron Ultra 253B v1 (`nvidia/llama-3.1-nemotron-ultra-253b-v1`) | ga | 2025-04-07 | 131.1K | — | — | Dense decoder-only transformer (NAS-compressed from Llama... | Large-scale reasoning, RAG, and tool-calling | — |
| Llama 3.3 Nemotron Super 49B v1 (`nvidia/llama-3.3-nemotron-super-49b-v1`) | ga | 2025-03-18 | 131.1K | — | — | Dense decoder-only transformer (NAS-derived from Llama 3.... | Single-GPU reasoning and chat workloads | — |

## OpenAI

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GPT-5.5 (`gpt-5.5`) | ga | 2026-04-24 | 1M | $5.00 | $30.00 | — | Frontier agentic coding and complex reasoning | prev: `gpt-5.4` |
| GPT-5.5 Pro (`gpt-5.5-pro`) | ga | 2026-04-24 | 1M | $30.00 | $180.00 | — | Highest-accuracy complex reasoning tasks | prev: `gpt-5.5` |
| GPT-5.4 mini (`gpt-5.4-mini`) | ga | 2026-03-17 | 272K | $0.75 | $4.50 | — | Cost-efficient reasoning at production scale | prev: `gpt-5-mini` |
| GPT-5.4 nano (`gpt-5.4-nano`) | ga | 2026-03-17 | 272K | $0.20 | $1.25 | — | Ultra-cheap high-volume classification and routing | prev: `gpt-5-nano` |
| GPT-5.4 (`gpt-5.4`) | ga | 2026-03-05 | 272K | $2.50 | $15.00 | — | Enterprise agentic workflows and computer use | prev: `gpt-5.2` → superseded by: `gpt-5.5` |
| GPT-5 (`gpt-5`) | ga | 2025-08-07 | 400K | $1.25 | $10.00 | — | General-purpose reasoning and multimodal tasks | prev: `gpt-4o` → superseded by: `gpt-5.4` |

## Perplexity

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Sonar Deep Research (`sonar-deep-research`) | ga | 2025-03-07 | 128K | $2.00 | $8.00 | Agentic research model running iterative web searches and... | Autonomous multi-step deep research reports | — |
| Sonar Pro (`sonar-pro`) | ga | 2025-03-07 | 200K | $3.00 | $15.00 | Perplexity-developed LLM with real-time web search and ci... | Complex multi-step search-grounded queries | prev: `sonar` |
| Sonar (`sonar`) | ga | 2025-01-21 | 127K | $1.00 | $1.00 | Built on Llama 3.3 70B with Perplexity post-training for ... | Fast, low-cost search-grounded answers | — |
| Sonar Reasoning (`sonar-reasoning`) | ga | — | 127K | $1.00 | $5.00 | Reasoning-tuned Sonar model with chain-of-thought over we... | Chain-of-thought search-grounded reasoning | — |
| Sonar Reasoning Pro (`sonar-reasoning-pro`) | ga | — | 127K | $2.00 | $8.00 | Built on DeepSeek R1 with Chain-of-Thought, augmented wit... | Advanced reasoning with web-grounded citations | prev: `sonar-reasoning` |

## xAI

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Grok 4.3 (`grok-4.3`) | ga | 2026-04-30 | 1M | $1.25 | $2.50 | — | Flagship reasoning, agentic tool use, low hallucination | prev: `grok-4.20` |
| Grok 4.20 (`grok-4.20`) | ga | 2026-03-10 | 2M | $2.00 | $6.00 | — | Long-context reasoning and multi-agent orchestration | prev: `grok-4-0709` → superseded by: `grok-4.3` |
