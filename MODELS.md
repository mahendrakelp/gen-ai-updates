# Frontier Production Model Catalog

_Last refreshed: 2026-08-21 by genai-model-catalog routine._

## Alibaba

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (`qwen3.8-27b`) | ga | 2026-08-14 | 262.1K | $0.40 | $3.00 | Dense 27B parameter vision-language transformer | Open-weight dense VL for single-GPU deployment | prev: qwen3.6-27b |
| Qwen3.8-2.4T-A95B (`qwen3.8-2.4t-a95b`) | ga | 2026-08-13 | 262.1K | — | — | Sparse MoE — 2.4T total / 95B active, 512 experts (10 routed + 1 shared per token), hybrid Gated DeltaNet linear attention interleaved with Gated Attention layers | Open-weights Max-class reasoning and agentic work | prev: qwen3.7-max |
| Qwen3.8-Max (`qwen3.8-max`) | ga | 2026-08-03 | 1M | $2.00 | $6.00 | Mixture-of-Experts with Gated DeltaNet linear attention plus Gated Attention layers, 512 experts, 2.4T total / 95B active parameters | Flagship agentic reasoning and multimodal tasks | prev: qwen3.7-max |
| Qwen3.7-Flash (`qwen3.7-flash`) | ga | 2026-07-27 | 1M | $0.05 | $0.40 | Sparse Mixture-of-Experts vision-language model | High-volume cheap multimodal and UI-agent tasks | prev: qwen-turbo |
| Qwen3.7-Plus (`qwen3.7-plus`) | ga | 2026-06-03 | 1M | $0.32 | $1.28 | Mixture-of-Experts with hybrid linear plus full attention | Balanced general-purpose workhorse with vision | prev: qwen3.6-plus |
| Qwen3.7-Max (`qwen3.7-max`) | ga | 2026-05-20 | 262.1K | $1.25 | $3.75 | Mixture-of-Experts | Reasoning and agentic tasks at lower cost than flagship | prev: qwen3-max → superseded by: qwen3.8-max |
| Qwen3.6-27B (`qwen3.6-27b`) | ga | 2026-04-22 | 262.1K | $0.60 | $3.60 | Dense decoder-only Transformer, 27B parameters | Open-weight dense flagship for coding and agents | — |
| Qwen3.6-Flash (`qwen3.6-flash`) | ga | 2026-04-15 | 1M | $0.19 | $1.13 | MoE vision-language model | Cheap high-throughput vision plus agentic coding | prev: qwen3.5-flash |
| Qwen3.5-Omni-Flash (`qwen3.5-omni-flash`) | ga | 2026-03-30 | 262.1K | $0.10 | $0.80 | Thinker-Talker Mixture-of-Experts, natively end-to-end omni-modal | Realtime omnimodal voice and video interaction | prev: qwen3-omni-flash |
| Qwen3.5-Omni-Plus (`qwen3.5-omni-plus`) | ga | 2026-03-30 | 262.1K | $0.43 | $4.80 | End-to-end multimodal Mixture-of-Experts | End-to-end speech and multimodal conversational agents | prev: qwen2.5-omni |
| Qwen3.5-Flash (`qwen3.5-flash`) | ga | 2026-02-25 | 1M | $0.07 | $0.26 | Gated DeltaNet plus MoE, alternating linear and full attention in 3:1 ratio | High-volume cheap subagent and classification jobs | prev: qwen3-flash |
| Qwen3-Coder-Next (`qwen3-coder-next`) | ga | 2026-02-04 | 262.1K | $0.11 | $0.80 | Sparse MoE (80B total / 3B active, hybrid attention) | Cost-efficient coding-agent workloads with self-hostable open weights | prev: qwen3-coder-plus |
| Qwen3-VL-Plus (`qwen3-vl-plus`) | ga | 2025-10-15 | 262.1K | $0.80 | $2.40 | Vision-Language MoE (Qwen3-VL series) | Multimodal vision, OCR, video, spatial reasoning | prev: qwen-vl-plus → superseded by: qwen3.7-plus |
| Qwen3-Coder-Plus (`qwen3-coder-plus`) | ga | 2025-09-23 | 1M | $1.00 | $5.00 | Mixture-of-Experts, proprietary variant of Qwen3-Coder 480B-A35B | Autonomous coding agents and repo-scale tasks | prev: qwen2.5-coder → superseded by: qwen3-coder-next |
| Qwen3-Max (`qwen3-max`) | ga | 2025-09-23 | 262.1K | $1.20 | $6.00 | Mixture-of-Experts (MoE), >1T total parameters | Flagship complex reasoning, coding, agents | prev: qwen-max-2025-01-25 → superseded by: qwen3.7-max |
| Qwen3-Omni (`qwen3-omni-flash`) | ga | 2025-09-22 | 65.5K | — | — | Omnimodal Thinker-Talker MoE | Real-time multimodal voice, audio, and video chat | — |
| Qwen3-Coder-Flash (`qwen3-coder-flash`) | ga | 2025-09-17 | 1M | $0.20 | $0.98 | Mixture-of-Experts (MoE) | Fast, low-cost autonomous coding agents | — |
| Qwen-Flash (`qwen-flash`) | ga | 2025-07-28 | 1.0M | $0.10 | $0.40 | MoE (Qwen3-Flash generation), replaces qwen-turbo | High-volume low-latency simple tasks | prev: qwen-turbo |
| Qwen-Plus (`qwen-plus`) | ga | 2025-07-28 | 1.0M | $0.40 | $1.20 | MoE (Qwen3-Plus generation) | Balanced cost/quality with hybrid thinking | prev: qwen-plus-2025-04-28 |
| Qwen3-235B-A22B-Thinking-2507 (`qwen3-235b-a22b-thinking-2507`) | ga | 2025-07-25 | 262.1K | $0.70 | $8.40 | MoE, 235B total / 22B active parameters | Open-weights deep reasoning, math, science | prev: qwen3-235b-a22b |
| Qwen3-235B-A22B-Instruct-2507 (`qwen3-235b-a22b-instruct-2507`) | ga | 2025-07-22 | 262.1K | $0.70 | $2.80 | MoE, 235B total / 22B active parameters | Open-weights general instruct, non-thinking | prev: qwen3-235b-a22b |
| Qwen3-Coder-480B-A35B-Instruct (`qwen3-coder-480b-a35b-instruct`) | ga | 2025-07-22 | 262.1K | $0.22 | $1.80 | MoE — 480B total / 35B active, 160 experts (8 active per token) | Open-weights agentic coding at frontier scale | prev: qwen2.5-coder-32b-instruct |
| Qwen-VL-Max (`qwen-vl-max`) | ga | 2025-02-01 | 131.1K | $0.52 | $2.08 | Multimodal vision-language | High-quality vision-language tasks including OCR, document understanding, chart/diagram analysis, and image reasoning | superseded by: qwen3-vl-plus |
| Qwen Text Embedding v4 (`text-embedding-v4`) | ga | — | 32.8K | $0.02 | $0.00 | Dense transformer embedding model (Qwen3-Embedding family) | multilingual embeddings and retrieval | prev: text-embedding-v3 |
| Qwen-Turbo (`qwen-turbo`) | ga | — | 1M | $0.05 | $0.20 | — | High-throughput, cost-sensitive workloads | superseded by: qwen-flash |
| Qwen3.5-Omni-Flash-Realtime (`qwen3.5-omni-flash-realtime`) | ga | — | — | $0.55 | $4.50 | End-to-end omni-modal transformer | real-time voice and video chat | prev: qwen3.5-omni-flash |
| Qwen3.6-Plus (`qwen3.6-plus`) | ga | — | 1M | $0.33 | $1.95 | Hybrid linear-attention Mixture-of-Experts | Balanced price/performance mid-tier reasoning | prev: qwen3.5-plus |
| Qwen3.8-Max-Preview (`qwen3.8-max-preview`) | deprecated | 2026-07-19 | 983.6K | — | — | Sparse MoE (~2.4T total parameters, multimodal) | Next-gen flagship reasoning and agentic tasks | prev: qwen3.7-max → superseded by: qwen3.8-max |

## Amazon

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Amazon Nova 2 Lite (`amazon.nova-2-lite-v1:0`) | ga | 2025-12-02 | 1M | $0.30 | $2.50 | Multimodal transformer with extended thinking | Fast cost-effective reasoning with extended thinking | prev: amazon.nova-lite-v1:0 |
| Amazon Nova 2 Sonic (`amazon.nova-2-sonic-v1:0`) | ga | 2025-12-02 | 1M | $3.00 | $12.00 | Unified speech-to-speech foundation model | Real-time speech-to-speech conversational AI | prev: amazon.nova-sonic-v1:0 |
| Amazon Nova Lite (`amazon.nova-lite-v1:0`) | ga | 2024-12-03 | 300K | $0.06 | $0.24 | Multimodal transformer | Very low-cost, fast multimodal processing | superseded by: amazon.nova-2-lite-v1:0 |
| Amazon Nova Micro (`amazon.nova-micro-v1:0`) | ga | 2024-12-03 | 128K | $0.04 | $0.14 | Text-only transformer | Lowest-latency, lowest-cost text-only tasks | superseded by: amazon.nova-2-lite-v1:0 |
| Amazon Nova Pro (`amazon.nova-pro-v1:0`) | ga | 2024-12-03 | 300K | $0.80 | $3.20 | Multimodal transformer | Balanced multimodal accuracy, speed, and cost | superseded by: amazon.nova-2-pro-preview-20251202-v1:0 |
| Amazon Nova 2 Pro (`amazon.nova-2-pro-preview-20251202-v1:0`) | preview | 2025-12-02 | 1M | $2.19 | $17.50 | Multimodal reasoning foundation model with extended thinking | Complex multistep reasoning and agentic workflows | prev: amazon.nova-premier-v1:0 |
| Nova 2 Omni (`amazon.nova-2-omni-preview-20251202-v1:0`) | preview | 2025-12-02 | 1M | $0.30 | $2.50 | Any-to-any multimodal foundation model | All-in-one multimodal understanding plus image generation | — |
| Nova 2 Pro (`amazon.nova-2-pro-v1:0`) | preview | 2025-12-02 | 1M | — | — | Multimodal foundation model | Most complex multistep reasoning and agentic tasks | prev: amazon.nova-premier-v1:0 |
| Amazon Nova Premier (`amazon.nova-premier-v1:0`) | deprecated | 2025-04-30 | 1M | $2.50 | $12.50 | Multimodal transformer | Complex agentic workflows and model-distillation teacher | prev: amazon.nova-pro-v1:0 → superseded by: amazon.nova-2-pro-preview-20251202-v1:0 |

## Anthropic

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Claude Opus 5 (`claude-opus-5`) | ga | 2026-07-24 | 1M | $5.00 | $25.00 | Opus-class model with adaptive thinking and effort control | Complex agentic coding and enterprise work | prev: claude-opus-4-8 |
| Claude Sonnet 5 (`claude-sonnet-5`) | ga | 2026-06-30 | 1M | $2.00 | $10.00 | Sonnet-class agentic model with adaptive thinking | Best speed-to-intelligence balance for everyday production | prev: claude-sonnet-4-6 |
| Claude Fable 5 (`claude-fable-5`) | ga | 2026-06-09 | 1M | $10.00 | $50.00 | Mythos-class frontier model with newer tokenizer | Most demanding reasoning and long-horizon agentic work | prev: claude-opus-4-8 |
| Claude Opus 4.8 (`claude-opus-4-8`) | ga | 2026-05-28 | 1M | $5.00 | $25.00 | Transformer LLM using the newer tokenizer introduced with Claude Opus 4.7 | Previous flagship Opus; drop-in for Opus 5 workloads | prev: claude-opus-4-7 → superseded by: claude-opus-5 |
| Claude Opus 4.7 (`claude-opus-4-7`) | ga | 2026-04-16 | 1M | $5.00 | $25.00 | — | Prior-generation Opus for stable pinned deployments | prev: claude-opus-4-6 → superseded by: claude-opus-4-8 |
| Claude Sonnet 4.6 (`claude-sonnet-4-6`) | ga | 2026-02-17 | 1M | $3.00 | $15.00 | Transformer | Stable mid-tier production tasks | prev: claude-sonnet-4-5 → superseded by: claude-sonnet-5 |
| Claude Opus 4.6 (`claude-opus-4-6`) | ga | 2026-02-05 | 1M | $5.00 | $25.00 | — | Established Opus production workloads | prev: claude-opus-4-5 → superseded by: claude-opus-4-8 |
| Claude Haiku 4.5 (`claude-haiku-4-5`) | ga | 2025-10-01 | 200K | $1.00 | $5.00 | Haiku-class small model with extended thinking | Fastest model with near-frontier intelligence | prev: claude-haiku-3-5 |
| Claude Haiku 4.5 (`claude-haiku-4-5-20251001`) | ga | 2025-10-01 | 200K | $1.00 | $5.00 | — | Fastest model with near-frontier intelligence | prev: claude-haiku-3-5 |
| Claude Mythos 5 (`claude-mythos-5`) | preview | 2026-06-09 | 1M | $10.00 | $50.00 | Same underlying model as Claude Fable 5; uses the newer tokenizer introduced with Opus 4.7 | Defensive cybersecurity and biosecurity research (Project Glasswing) | prev: claude-mythos-preview |

## Cohere

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Cohere Transcribe Arabic (`cohere-transcribe-arabic-07-2026`) | ga | 2026-07-07 | — | — | — | 2B encoder-decoder transformer fine-tuned from Cohere Transcribe for Arabic ASR | Arabic speech-to-text with dialect coverage | prev: cohere-transcribe-03-2026 |
| North Mini Code (`north-mini-code-1.0`) | ga | 2026-06-09 | 256K | $0.00 | $0.00 | Sparse Mixture-of-Experts, 30B total parameters / 3B active per token | Agentic software engineering, code generation, and terminal/CLI tasks; local-hardware coding agents | — |
| Command A+ (`command-a-plus-05-2026`) | ga | 2026-05-20 | 128K | $2.50 | $10.00 | Sparse mixture-of-experts (~218B params) | Flagship agentic, multimodal, multilingual enterprise workloads | prev: command-a-03-2025 |
| Cohere Transcribe (`cohere-transcribe-03-2026`) | ga | 2026-03-26 | — | — | — | 2B encoder-decoder transformer with Fast-Conformer encoder (>90% params in encoder) | Real-time enterprise speech-to-text and meetings | — |
| Rerank 4 Fast (`rerank-v4.0-fast`) | ga | 2025-12-11 | 32.8K | — | — | Distilled multilingual cross-encoder reranker with 32K context | Low-latency, high-throughput multilingual reranking for production RAG | prev: rerank-v3.5 |
| Rerank 4 Pro (`rerank-v4.0-pro`) | ga | 2025-12-11 | 32K | — | — | Multilingual cross-encoder reranker with 32K context | High-accuracy semantic reranking for enterprise RAG | prev: rerank-v3.5 |
| Command A Translate (`command-a-translate-08-2025`) | ga | 2025-08-28 | 16K | — | — | Dense 111B-parameter transformer fine-tuned for translation | Private, secure enterprise translation across 23 languages | prev: command-a-03-2025 |
| Command A Reasoning (`command-a-reasoning-08-2025`) | ga | 2025-08-21 | 256K | $2.50 | $10.00 | 111B dense transformer with hybrid reasoning | Enterprise agentic reasoning and tool use | prev: command-a-03-2025 → superseded by: command-a-plus-05-2026 |
| Command A Vision (`command-a-vision-07-2025`) | ga | 2025-07-31 | 128K | $2.50 | $10.00 | Dense vision-language transformer built on Command A | Multimodal document, chart, image understanding | prev: command-a-03-2025 → superseded by: command-a-plus-05-2026 |
| Embed v4 (`embed-v4.0`) | ga | 2025-04-15 | 128K | $0.12 | — | Multimodal embedding model with Matryoshka-style variable output dimensions | Multimodal semantic search and enterprise RAG | prev: embed-english-v3.0 |
| Command A (`command-a-03-2025`) | ga | 2025-03-01 | 256K | $2.50 | $10.00 | Dense transformer (~111B params) | Enterprise RAG, agents, tool use, multilingual | prev: command-r-plus-08-2024 → superseded by: command-a-plus-05-2026 |
| Command R7B (`command-r7b-12-2024`) | ga | 2024-12-13 | 128K | $0.04 | $0.15 | Dense transformer (~7B params) | Low-cost fast RAG, tool use, on-device deployment | prev: command-r-08-2024 |
| Rerank 3.5 (`rerank-v3.5`) | ga | 2024-12-02 | 4.1K | — | — | Cross-encoder reranking model | Multilingual reranking for retrieval and RAG | prev: rerank-english-v3.0 → superseded by: rerank-v4.0-fast |
| Aya Expanse 32B (`c4ai-aya-expanse-32b`) | ga | 2024-10-24 | 128K | $0.50 | $1.50 | 32B dense transformer built on Command R base | Massively multilingual generation across 23 languages | — |
| Command R (`command-r-08-2024`) | ga | 2024-08-30 | 128K | $0.15 | $0.60 | Dense 35B transformer | Cost-efficient RAG and tool use at scale | prev: command-r → superseded by: command-a-03-2025 |
| Command R+ (`command-r-plus-08-2024`) | ga | 2024-08-30 | 128K | $2.50 | $10.00 | Dense transformer (~104B params) | Legacy RAG, tool-use, multi-step agent workflows | prev: command-r-plus → superseded by: command-a-03-2025 |
| Rerank 4 Pro (`rerank-v4.0`) | ga | — | — | — | — | — | Reranking retrieved documents for search | prev: rerank-v3.5 |
| Command A+ (`command-a-plus`) | deprecated | 2026-04-15 | 256K | — | — | Mixture of Experts | Enterprise agentic workflows across 48 languages | prev: command-a-03-2025 → superseded by: command-a-plus-05-2026 |

## DeepSeek

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DeepSeek V4-Pro-0813 (`deepseek-v4-pro-0813`) | ga | 2026-08-13 | 1.0M | $1.74 | $3.48 | MoE 1.6T total / 49B active, DeepSeek Sparse Attention | Version-pinned V4 Pro snapshot for production | prev: deepseek-v4-pro |
| DeepSeek-V4-Pro (`deepseek-v4-pro`) | ga | 2026-08-13 | 1.0M | $1.32 | $3.96 | Sparse MoE — 1.6T total / 49B active parameters | Flagship agentic coding and complex reasoning | prev: deepseek-v4-pro-preview |
| DeepSeek V4-Flash-0731 (`deepseek-v4-flash-0731`) | ga | 2026-07-31 | 1.0M | $0.14 | $0.28 | MoE 284B total / 13B active, DeepSeek Sparse Attention | Pinned snapshot for cheap 1M-context inference | prev: deepseek-v4-flash |
| DeepSeek-V4-Flash (`deepseek-v4-flash`) | ga | 2026-07-31 | 1.0M | $0.44 | $1.32 | Sparse MoE — 284B total / 13B active parameters | High-throughput agents and cost-efficient long context | prev: deepseek-v3.2 |
| DeepSeek V3.2-Exp (`deepseek-v3.2`) | preview | 2025-09-29 | 128K | $0.28 | $0.42 | Sparse MoE — 671B total / 37B active with DeepSeek Sparse Attention (DSA) | Long-context efficiency with sparse attention | prev: deepseek-v3.1 → superseded by: deepseek-v4-flash |
| DeepSeek Reasoner (legacy alias) (`deepseek-reasoner`) | deprecated | 2025-05-28 | 128K | $0.55 | $2.19 | Sparse MoE — 685B total / 37B active | Legacy reasoning alias (retired) | prev: deepseek-r1 → superseded by: deepseek-v4-flash |
| DeepSeek Chat (legacy alias) (`deepseek-chat`) | deprecated | 2024-12-26 | 1.0M | $0.14 | $0.28 | Alias — routed to V4 Flash non-thinking mode | Legacy non-thinking chat (retired) | prev: deepseek-v3.2 → superseded by: deepseek-v4-flash |

## Google

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Gemini 3.7 Flash (`gemini-3.7-flash`) | ga | 2026-08-13 | 1.0M | $0.75 | $3.75 | Dense/sparse hybrid Flash-tier multimodal | Coding, web dev, and agentic workflows | prev: gemini-3.6-flash |
| Gemini 3.5 Flash-Lite (`gemini-3.5-flash-lite`) | ga | 2026-07-21 | 1.0M | $0.30 | $2.50 | Distilled Flash-Lite multimodal | Low-latency, high-volume automation | prev: gemini-3.1-flash-lite |
| Gemini 3.6 Flash (`gemini-3.6-flash`) | ga | 2026-07-21 | 1.0M | $0.75 | $3.75 | Sparse mixture-of-experts multimodal transformer with hybrid reasoning | General-purpose multimodal workhorse for agents and coding | prev: gemini-3.5-flash → superseded by: gemini-3.7-flash |
| Gemini 3.1 Flash-Lite (`gemini-3.1-flash-lite`) | ga | 2026-05-07 | 1.0M | $0.25 | $1.50 | Distilled Gemini 3-family mixture-of-experts | Cheapest GA tier for high-volume simple tasks | prev: gemini-2.5-flash-lite → superseded by: gemini-3.5-flash-lite |
| Gemini 3.5 Flash (`gemini-3.5-flash`) | ga | 2026-05-01 | 1M | $1.50 | $9.00 | Sparse mixture-of-experts (MoE) transformer with thinking-levels; based on Gemini 3 Flash | Frontier intelligence with action for agents | prev: gemini-3-flash → superseded by: gemini-3.6-flash |
| Gemini 3 Pro (`gemini-3-pro`) | ga | 2025-11-18 | 1.0M | $2.00 | $12.00 | Natively multimodal reasoning model | Complex multimodal reasoning and code repos | prev: gemini-2.5-pro → superseded by: gemini-3.1-pro-preview |
| Gemini 2.5 Flash-Lite (`gemini-2.5-flash-lite`) | ga | 2025-09-25 | 1.0M | $0.10 | $0.40 | Sparse mixture-of-experts transformer, most efficient of the 2.5 family | Ultra-cheap high-throughput classification and extraction | prev: gemini-2.0-flash-lite → superseded by: gemini-3.1-flash-lite |
| Gemini 2.5 Flash (`gemini-2.5-flash`) | ga | 2025-05-20 | 1.0M | $0.30 | $2.50 | Sparse mixture-of-experts transformer with hybrid reasoning (thinking on/off) | High-volume production workloads with hybrid reasoning | prev: gemini-2.0-flash → superseded by: gemini-3.6-flash |
| Gemma 3 27B Instruct (`gemma-3-27b-it`) | ga | 2025-03-12 | 131.1K | — | — | Dense decoder-only transformer | Self-hosted multimodal open-weights inference | prev: gemma-2-27b-it |
| Gemini 2.0 Flash (`gemini-2.0-flash`) | ga | 2025-02-05 | 1.0M | $0.15 | $0.60 | — | Low-cost, low-latency general purpose tasks | prev: gemini-1.5-flash → superseded by: gemini-2.5-flash |
| Gemma 4 (`gemma-4`) | ga | — | 256K | — | — | Mixture of Experts (26B MoE) and dense (31B) variants | Open-weight, self-hostable frontier-quality tasks | prev: gemma-3 |
| Gemini Omni Flash (Preview) (`gemini-omni-flash-preview`) | preview | 2026-06-30 | — | $1.50 | $17.50 | Unified natively-multimodal model without separate encoders | Conversational video generation and editing | — |
| Gemini 3.5 Pro (Preview) (`gemini-3.5-pro-preview`) | preview | 2026-05-19 | 2M | — | — | Sparse Mixture-of-Experts transformer with Deep Think reasoning | Next-gen flagship with 2M context and Deep Think | prev: gemini-3.1-pro |
| Gemini Omni Flash (`gemini-omni-flash`) | preview | 2026-05-19 | — | — | — | Transformer with native multimodal text/vision/video/audio inputs | Any-to-video generative editing and creation | — |
| Gemini 3.1 Pro (`gemini-3.1-pro`) | preview | 2026-03-01 | 1M | $2.00 | $12.00 | Sparse mixture-of-experts (MoE) transformer, natively multimodal; based on Gemini 3 Pro | Google's most advanced model for complex tasks | prev: gemini-3-pro → superseded by: gemini-3.5-pro-preview |
| Gemini 3.1 Pro (`gemini-3.1-pro-preview`) | preview | 2026-02-19 | 1.0M | $2.00 | $12.00 | Natively multimodal reasoning model (MoE, thinking) | Most advanced reasoning and agentic workflows | prev: gemini-3-pro |
| Gemini 3 Flash (`gemini-3-flash`) | deprecated | 2026-06-22 | 1.0M | $0.50 | $3.00 | Multimodal transformer | Low-cost multimodal at 1M context | prev: gemini-2.5-flash → superseded by: gemini-3.6-flash |
| Gemini 3.1 Flash (`gemini-3.1-flash`) | deprecated | 2026-03-19 | 1.0M | $0.50 | $3.00 | Sparse mixture-of-experts transformer with thinking | Balanced Flash tier for cost-efficient reasoning | prev: gemini-3-flash-preview → superseded by: gemini-3.6-flash |
| Gemini 3.1 Flash Lite (Preview) (`gemini-3.1-flash-lite-preview`) | deprecated | 2026-03-03 | 1.0M | $0.25 | $1.50 | Distilled sparse mixture-of-experts | Legacy preview endpoint - migrate to gemini-3.1-flash-lite GA | prev: gemini-2.5-flash-lite → superseded by: gemini-3.1-flash-lite |
| Gemini 3 Flash Preview (`gemini-3-flash-preview`) | deprecated | 2025-12-17 | 1.0M | $0.50 | $3.00 | Sparse mixture-of-experts transformer with thinking | balanced multimodal reasoning at Flash cost | prev: gemini-2.5-flash → superseded by: gemini-3.6-flash |
| Gemini 3 Pro (`gemini-3-pro-preview`) | deprecated | 2025-11-18 | 1M | $2.00 | $12.00 | — | Legacy Gemini 3 flagship, migrate to 3.1 Pro | prev: gemini-2.5-pro → superseded by: gemini-3.1-pro-preview |
| Gemini 2.5 Pro (`gemini-2.5-pro`) | deprecated | 2025-06-17 | 1.0M | $1.25 | $10.00 | Sparse MoE multimodal with thinking | Stable production workloads pre-migration | prev: gemini-1.5-pro → superseded by: gemini-3.1-pro-preview |

## Meta

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Muse Glimmer 30B (`meta/muse-glimmer-30b`) | ga | 2026-08-10 | 131.1K | — | — | 30B dense causal LM with ~1.8B perception encoder; hybrid attention (3 sliding-window layers per global layer); distilled from Muse Spark 1.2 | Local agentic workflows on consumer hardware | prev: meta-llama/Llama-4-Scout-17B-16E-Instruct |
| Muse Spark 1.2 (`muse-spark-1.2`) | ga | 2026-08-05 | 1.0M | $1.25 | $4.25 | Multimodal reasoning MoE from Meta Superintelligence Labs | Coding-centric agentic reasoning at 1M context | prev: muse-spark-1.1 |
| Muse Image (`muse-image`) | ga | 2026-07-07 | — | — | — | Agentic image generation model with tool-use and self-refinement | Instruction-following image generation and editing | — |
| Llama Guard 4 12B (`meta-llama/Llama-Guard-4-12B`) | ga | 2025-04-29 | 163.8K | $0.20 | $0.20 | Dense 12B early-fusion multimodal transformer | Multimodal input/output safety classification | prev: meta-llama/Llama-Guard-3-11B-Vision |
| Llama Guard 4 12B (`llama-guard-4-12b`) | ga | 2025-04-29 | — | — | — | Dense 12B early-fusion transformer, pruned from Llama 4 Scout pretrained model | Multimodal safety classification of prompts and responses | prev: llama-guard-3-11b-vision |
| Llama 4 Maverick (`meta-llama/Llama-4-Maverick-17B-128E-Instruct`) | ga | 2025-04-05 | 1M | $0.27 | $0.85 | Mixture-of-Experts, 17B active / 400B total, 128 experts, early-fusion native multimodality | Flagship multimodal reasoning and coding | prev: meta-llama/Llama-3.3-70B-Instruct |
| Llama 4 Maverick (`llama-4-maverick-17b-128e-instruct`) | ga | 2025-04-05 | 1M | $0.20 | $0.60 | Mixture-of-experts (128 experts, 17B active / 400B total) with early-fusion multimodality | Flagship multimodal reasoning, coding, and agentic tool use | prev: Llama-3.3-70B-Instruct → superseded by: meta-llama/Llama-4-Maverick-17B-128E-Instruct |
| Llama 4 Maverick (`llama-4-maverick`) | ga | 2025-04-05 | 1.0M | $0.19 | $0.60 | Mixture-of-Experts (MoE), 128 experts, 17B active / ~400B total parameters | Open-weight generalist for reasoning and coding | prev: llama-3.3-70b → superseded by: meta-llama/Llama-4-Maverick-17B-128E-Instruct |
| Llama 4 Scout (`meta-llama/Llama-4-Scout-17B-16E-Instruct`) | ga | 2025-04-05 | 10M | $0.10 | $0.30 | Mixture-of-Experts, 17B active / 109B total, 16 experts, early-fusion native multimodality | Long-context multimodal on a single GPU | prev: meta-llama/Llama-3.3-70B-Instruct |
| Llama 4 Scout (`llama-4-scout-17b-16e-instruct`) | ga | 2025-04-05 | 10M | $0.11 | $0.34 | Mixture-of-experts (16 experts, 17B active / 109B total) with early-fusion multimodality | Long-context multimodal tasks, efficient single-GPU deployment | prev: Llama-3.3-70B-Instruct → superseded by: meta-llama/Llama-4-Scout-17B-16E-Instruct |
| Llama 4 Scout (`llama-4-scout`) | ga | 2025-04-05 | 10.5M | $0.08 | $0.30 | Mixture-of-Experts (MoE), 16 experts, 17B active / ~109B total parameters | Long-document processing with open weights | prev: llama-3.3-70b → superseded by: meta-llama/Llama-4-Scout-17B-16E-Instruct |
| Llama 3.3 70B Instruct (`llama-3.3-70b`) | ga | 2024-12-06 | 128K | $0.59 | $0.79 | Dense auto-regressive transformer with 70B parameters | Cost-efficient text-only instruction following | prev: llama-3.1-70b → superseded by: llama-4-scout-17b-16e-instruct |
| Llama 3.3 70B Instruct (`meta-llama/Llama-3.3-70B-Instruct`) | ga | 2024-12-06 | 128K | $0.88 | $0.88 | Dense auto-regressive transformer with Grouped-Query Attention | Efficient multilingual text-only dialogue | prev: meta-llama/Llama-3.1-70B-Instruct → superseded by: meta-llama/Llama-4-Maverick-17B-128E-Instruct |
| Llama 3.3 70B Instruct (`Llama-3.3-70B-Instruct`) | ga | 2024-12-06 | 128K | — | — | Dense 70B decoder-only transformer with GQA | Text-only chat matching 405B quality at 70B cost | prev: Llama-3.1-70B-Instruct |
| Llama 3.1 405B Instruct (`meta-llama/Llama-3.1-405B-Instruct`) | ga | 2024-07-23 | 128K | — | — | Dense transformer, 405B parameters | Largest open-weight dense frontier model | superseded by: meta-llama/Llama-3.3-70B-Instruct |
| Muse Spark 1.2 (`meta/muse-spark-1.2`) | preview | 2026-08-05 | 1.0M | $1.25 | $4.25 | — | agentic multimodal reasoning and coding tasks | prev: meta/muse-spark-1.1 |
| Muse Video (`muse-video`) | preview | 2026-07-07 | — | — | — | Diffusion video model with native audio generation | Text-to-video with native audio | — |
| Llama 4 Behemoth (`llama-4-behemoth`) | preview | — | — | — | — | 288B active / ~2T total Mixture-of-Experts with 16 experts | Internal teacher model for distillation | prev: llama-3.1-405b-instruct → superseded by: muse-spark-1.1 |
| Llama 4 Behemoth (`meta-llama/Llama-4-Behemoth`) | preview | — | — | — | — | Mixture-of-Experts, 288B active / ~2T total, 16 experts | Frontier STEM reasoning teacher model | prev: meta-llama/Meta-Llama-3.1-405B-Instruct → superseded by: muse-spark-1.1 |
| Muse Spark 1.1 (`muse-spark-1.1`) | deprecated | 2026-07-09 | 1M | $1.25 | $4.25 | Multimodal reasoning model with tool-use and multi-agent orchestration | Agentic tool use, coding, and multimodal reasoning | prev: muse-spark → superseded by: muse-spark-1.2 |
| Muse Spark (`muse-spark`) | deprecated | 2026-04-08 | 1M | — | — | Natively multimodal reasoning model from Meta Superintelligence Labs | Meta AI assistant reasoning backbone | prev: meta-llama/Llama-4-Maverick-17B-128E-Instruct → superseded by: muse-spark-1.1 |
| Llama 4 Maverick (legacy ID) (`llama-4-maverick-17b-128e`) | deprecated | 2025-04-05 | 1M | $0.19 | $0.60 | MoE, 17B active / ~400B total parameters, 128 routed experts + 1 shared expert, natively multimodal early-fusion | Open-weight flagship multimodal chat, coding, and agents | prev: llama-3.3-70b → superseded by: meta-llama/Llama-4-Maverick-17B-128E-Instruct |
| Llama 4 Scout (legacy ID) (`llama-4-scout-17b-16e`) | deprecated | 2025-04-05 | 10M | $0.08 | $0.30 | MoE, 17B active / ~109B total parameters, 16 experts, natively multimodal early-fusion, iRoPE for long context | Long-context document analysis and multimodal serving on a single GPU | prev: llama-3.3-70b → superseded by: meta-llama/Llama-4-Scout-17B-16E-Instruct |

## Microsoft

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MAI-Code-1.1-Flash (`mai-code-1.1-flash`) | ga | 2026-07-15 | 256K | $0.20 | $1.20 | 5B active parameter agentic coding model | Inference-efficient agentic coding integrated with Copilot | prev: mai-code-1-flash |
| MAI-Image-2.5-Pro (`mai-image-2.5-pro`) | ga | 2026-07-15 | — | $5.00 | $106.00 | Diffusion-based image generation and editing model | High-quality text-to-image generation and editing | prev: mai-image-2 |
| MAI-Voice-2-Flash (`mai-voice-2-flash`) | ga | 2026-07-15 | — | $15.00 | $15.00 | Text-to-speech generative model | High-fidelity multilingual text-to-speech generation | prev: mai-voice-2 |
| MAI-Code-1-Flash (`mai-code-1-flash`) | ga | 2026-06-02 | 256K | $0.75 | $4.50 | 137B total / 5B active sparse Mixture-of-Experts | Low-latency coding in Copilot and IDEs | superseded by: mai-code-1.1-flash |
| MAI-Voice-2 (`mai-voice-2`) | ga | 2026-06-02 | — | $22.00 | — | Neural text-to-speech with expressive prosody model | Multilingual high-quality speech synthesis with voice cloning | prev: mai-voice-1 |
| Phi-4-reasoning-vision-15B (`microsoft/Phi-4-reasoning-vision-15B`) | ga | 2026-03-04 | 16.4K | — | — | Mid-fusion — SigLIP-2 Naflex vision encoder + Phi-4-Reasoning 15B backbone | Compact multimodal reasoning on math, science and UI grounding | prev: microsoft/Phi-4-reasoning |
| Phi-4-mini-flash-reasoning (`phi-4-mini-flash-reasoning`) | ga | 2025-07-09 | 64K | — | — | SambaY decoder-hybrid-decoder (3.8B params) | Edge math reasoning with high throughput | prev: phi-4-mini-reasoning |
| Phi-4-mini-flash-reasoning (`microsoft/phi-4-mini-flash-reasoning`) | ga | 2025-07-09 | — | — | — | Dense transformer, mini variant tuned for flash reasoning | Fast on-device reasoning for edge deployment | — |
| Phi-4-reasoning (`phi-4-reasoning`) | ga | 2025-04-30 | 32K | — | — | Dense decoder-only Transformer, 14B parameters, fine-tuned from Phi-4 | Step-by-step reasoning on math and science | prev: phi-4 |
| Phi-4-reasoning-plus (`phi-4-reasoning-plus`) | ga | 2025-04-30 | 32.8K | — | — | 14B dense reasoning-tuned transformer with RL | Small open reasoning model for math/code | prev: phi-4 → superseded by: phi-4-reasoning-vision-15b |
| Phi-4-reasoning-plus (`microsoft/phi-4-reasoning-plus`) | ga | 2025-04-30 | 32K | — | — | 14B dense transformer fine-tuned from Phi-4 for reasoning | efficient open-weight reasoning on math and code | prev: microsoft/phi-4 → superseded by: microsoft/phi-4-reasoning-vision |
| Phi-4-mini (`phi-4-mini`) | ga | 2025-02-26 | 128K | $0.07 | $0.23 | Dense ~3.8B parameter transformer | Cheap, high-throughput text tasks and routing tiers | — |
| Phi-4-mini-instruct (`phi-4-mini-instruct`) | ga | 2025-02-26 | 128K | $0.07 | $0.30 | 3.8B dense decoder-only transformer | Edge and low-latency chat/reasoning | prev: phi-3-mini → superseded by: phi-4-mini-flash-reasoning |
| Phi-4-multimodal-instruct (`phi-4-multimodal-instruct`) | ga | 2025-02-26 | 128K | $0.08 | $0.32 | 5.6B multimodal with mixture-of-LoRAs adapters | Compact multimodal text/vision/audio processing | prev: phi-3-vision |
| Phi-4-multimodal-instruct (`microsoft/phi-4-multimodal-instruct`) | ga | 2025-02-26 | 131.1K | $0.08 | $0.32 | 5.6B parameter multimodal transformer (speech + vision + text) | low-cost multimodal text/vision/audio tasks | prev: microsoft/phi-4 → superseded by: microsoft/Phi-4-reasoning-vision-15B |
| Phi-4-mini (`microsoft/phi-4-mini`) | ga | 2025-02-01 | 128K | — | — | — | Document classification and routing at production scale | — |
| Phi-4 (`phi-4`) | ga | 2024-12-12 | 16.4K | $0.07 | $0.14 | 14B dense decoder-only transformer | Efficient 14B SLM for math and reasoning | prev: phi-3 → superseded by: phi-4-reasoning |
| Phi-4 (`microsoft/phi-4`) | ga | 2024-12-12 | 16.4K | $0.12 | $0.50 | 14B decoder-only transformer | Small-model math, science and coding on device or cheap serverless | prev: microsoft/Phi-3-medium → superseded by: microsoft/phi-4-reasoning-plus |
| MAI-Thinking-1 (`mai-thinking-1`) | preview | 2026-08-12 | 256K | $2.00 | $8.00 | ~1T total / 35B active sparse Mixture-of-Experts | Frontier reasoning and agentic coding | prev: mai-1-preview |
| MAI-Cyber-1-Flash (`mai-cyber-1-flash`) | preview | 2026-07-27 | 256K | — | — | Sparse MoE — 137B total / 5B active (fine-tuned from MAI-Code-1-Flash) | Autonomous vulnerability discovery and remediation | prev: mai-code-1-flash |
| MAI-Image-2.5 (`mai-image-2.5`) | preview | 2026-07-23 | 32K | $5.00 | $47.00 | Diffusion-based generative model, ~20B non-embedding parameters | High-quality text-to-image and image editing | prev: mai-image-2 |
| MAI-Image-2.5-Flash (`mai-image-2.5-flash`) | preview | 2026-06-02 | — | $1.75 | $33.00 | Diffusion-based text-to-image (efficient variant) | Faster, cheaper image generation and editing for high-volume workloads | prev: mai-image-2.5 |
| MAI-Transcribe-1.5 (`mai-transcribe-1.5`) | preview | 2026-06-02 | — | — | — | Multilingual speech-to-text encoder-decoder | Production-grade multilingual speech-to-text with context biasing | prev: mai-transcribe-1 |
| MAI-Image-2-Efficient (`mai-image-2-efficient`) | preview | 2026-04-14 | 32K | $5.00 | $19.50 | Diffusion-based text-to-image | Cost-efficient high-throughput image generation | prev: mai-image-2 → superseded by: mai-image-2.5 |
| MAI-Image-2 (`mai-image-2`) | preview | 2026-04-02 | 32K | $5.00 | $33.00 | Diffusion-based text-to-image | High-quality text-to-image generation | superseded by: mai-image-2-efficient |
| MAI-Transcribe-1 (`mai-transcribe-1`) | preview | 2026-04-02 | — | — | — | Bidirectional audio encoder with transformer text decoder | Multilingual speech-to-text transcription | superseded by: mai-transcribe-1.5 |
| Phi-4-Reasoning-Vision (`microsoft/phi-4-reasoning-vision`) | preview | 2026-03-04 | — | — | — | Dense transformer, 15B parameters, vision-language model | Multimodal reasoning with high-fidelity vision | prev: microsoft/phi-4-reasoning-plus |
| Phi-4-Reasoning-Vision-15B (`phi-4-reasoning-vision-15b`) | preview | 2026-03-04 | 32.8K | — | — | 15B-parameter multimodal transformer built on Phi-4 reasoning family with SigLIP-2 vision encoder (mid-fusion) | Compact multimodal reasoning for charts, diagrams, UI | prev: phi-4-reasoning-plus |
| MAI-1-preview (`mai-1-preview`) | preview | 2025-08-28 | — | — | — | Mixture-of-Experts text foundation model | instruction following and everyday queries | superseded by: mai-thinking-1 |
| MAI-Voice-1 (`mai-voice-1`) | preview | 2025-08-28 | — | $22.00 | $22.00 | generative text-to-speech neural model | high-fidelity real-time text-to-speech | superseded by: mai-voice-2 |

## Mistral

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Mistral OCR 4 (`mistral-ocr-4-0`) | ga | 2026-06-23 | — | — | — | Purpose-built OCR / document understanding model | Structure-aware document parsing and OCR | prev: mistral-ocr-2512 |
| Mistral Medium 3.5 (`mistral-medium-2604`) | ga | 2026-04-29 | 262.1K | $1.50 | $7.50 | dense 128B parameter transformer | Unified chat, reasoning, and agentic coding | prev: mistral-medium-2508 |
| Mistral Medium 3.5 (`mistral-medium-latest`) | ga | 2026-04-29 | 262.1K | $1.50 | $7.50 | Dense Transformer, 128B parameters | Unified chat, reasoning, coding, and vision workhorse | prev: mistral-medium-3 |
| Mistral Medium 3.5 (`mistral-medium-3-5-26-04`) | ga | 2026-04-29 | 262.1K | $1.50 | $7.50 | Dense transformer, 128B parameters | Unified chat, coding, and reasoning workhorse | prev: mistral-medium-2508 |
| Mistral Medium 3.5 (`mistral-medium-3-5`) | ga | 2026-04-29 | 262.1K | $1.50 | $7.50 | 128B dense transformer with multimodal encoder | Balanced coding, reasoning, and vision tasks | prev: mistral-medium-3 |
| Mistral Small 4 (`mistral-small-2603`) | ga | 2026-03-16 | 256K | $0.15 | $0.60 | Mixture-of-Experts (128 experts, 4 active) with Pixtral-style vision encoder | Cost-efficient unified reasoning, coding, and vision | prev: mistral-small-2506 |
| Mistral Small 4 (`mistral-small-latest`) | ga | 2026-03-16 | 262.1K | $0.15 | $0.60 | Mixture-of-experts, ~119B total / ~6B active parameters, multimodal with configurable reasoning | High-throughput unified small model for production | prev: mistral-small-3.2 |
| Devstral 2 (`devstral-medium-latest`) | ga | 2025-12-09 | 256K | $0.40 | $2.00 | Dense Transformer, 123B parameters | Agentic coding, shell use, and multi-step SWE tasks | prev: devstral-medium-2507 |
| Ministral 3 14B (`ministral-14b-2512`) | ga | 2025-12-02 | 262.1K | $0.20 | $0.20 | dense 14B parameter transformer | Edge and on-device deployment | prev: ministral-8b-2410 |
| Ministral 3 8B (`ministral-8b-2512`) | ga | 2025-12-02 | 262.1K | $0.15 | $0.15 | 8B-parameter dense transformer | Edge and on-device deployment where a compact multimodal model with long context is needed at very low cost | prev: ministral-8b-2410 |
| Mistral Large 3 (`mistral-large-2512`) | ga | 2025-12-02 | 256K | $0.50 | $1.50 | Granular Mixture-of-Experts with fused 2.5B vision encoder | Flagship multimodal agentic and reasoning workloads | prev: mistral-large-2411 |
| Mistral Large 3 (`mistral-large-latest`) | ga | 2025-12-02 | 256K | $0.50 | $1.50 | Sparse Mixture-of-Experts, 41B active / 675B total parameters | Flagship multimodal reasoning and agentic workflows | prev: mistral-large-2411 |
| Devstral 2 (`devstral-2-25-12`) | ga | 2025-12-01 | 256K | — | — | Dense 123B-parameter transformer | Agentic software engineering | prev: devstral-medium-2507 |
| Mistral Large 3 (`mistral-large-3-25-12`) | ga | 2025-12-01 | 256K | $0.50 | $1.50 | Granular Mixture-of-Experts, 41B active / 675B total parameters, multimodal | Flagship open-weight multimodal MoE | prev: mistral-large-2411 |
| Magistral Small 1.2 (`magistral-small-latest`) | ga | 2025-09-18 | 131.1K | $0.50 | $1.50 | 24B dense reasoning model with vision input | Open-weight multilingual chain-of-thought reasoning | prev: magistral-small-2507 |
| Magistral Small 1.2 (`magistral-small-2509`) | ga | 2025-09-18 | 131.1K | $0.50 | $1.50 | 24B dense reasoning model with vision input | Open-weight multilingual chain-of-thought reasoning | prev: magistral-small-2507 |
| Mistral Medium 3 (`mistral-medium-2508`) | ga | 2025-08-12 | 262.1K | $0.40 | $2.00 | — | Frontier-class agentic coding and multimodal | prev: mistral-medium-2505 |
| Codestral 25.08 (`codestral-25-08`) | ga | 2025-08-01 | 256K | $0.30 | $0.90 | — | Low-latency code completion and FIM | prev: codestral-25-01 |
| Codestral 2508 (`codestral-latest`) | ga | 2025-08-01 | 256K | $0.30 | $0.90 | Dense transformer specialized for code | Low-latency code completion and fill-in-the-middle | prev: codestral-2501 |
| Codestral 25.08 (`codestral-2508`) | ga | 2025-07-30 | 256K | $0.30 | $0.90 | Code-specialized transformer | Low-latency code completion and fill-in-the-middle | prev: codestral-2501 |
| Devstral Medium (`devstral-medium-2507`) | ga | 2025-07-11 | 131.1K | $0.40 | $2.00 | Code-and-agent specialized transformer | Agentic coding and software engineering agents | prev: devstral-medium-2505 |
| Ministral 8B (`ministral-8b-latest`) | ga | 2024-10-16 | 128K | $0.10 | $0.10 | Dense 8B transformer | Edge and on-device inference at low cost | prev: ministral-8b-2410 |
| Ministral 8B (`ministral-8b-2410`) | ga | 2024-10-16 | 131.1K | $0.10 | $0.10 | Dense 8B transformer with interleaved sliding-window attention | On-device and edge deployment | superseded by: ministral-8b-2512 |
| Ministral 3B (`ministral-3b-latest`) | ga | — | 131.1K | $0.10 | $0.10 | Dense 3B transformer with vision capabilities (Ministral 3 generation) | Edge and on-device deployment | prev: ministral-3b-2410 |
| Leanstral 1.5 (`leanstral-1-5`) | preview | 2026-06-30 | 262.1K | $0.00 | $0.00 | Sparse Mixture-of-Experts (~6.5B active / 119B total, 128 experts / 4 active per token) | Lean 4 formal proof engineering, automated theorem proving, and autoformalization | prev: leanstral |
| Devstral 2 (`devstral-2-2512`) | deprecated | 2025-12-09 | 262.1K | $0.40 | $2.00 | Dense 123B transformer | Agentic coding - multi-file edits and long agents | prev: devstral-medium-2507 → superseded by: mistral-medium-2604 |
| Devstral 2 (`devstral-2512`) | deprecated | 2025-12-09 | 262.1K | $0.90 | $0.90 | Dense transformer, 123B parameters | Agentic multi-file coding and autonomous SWE tasks | prev: devstral-small-2507 → superseded by: mistral-medium-3-5-26-04 |
| Devstral Small 2 (`devstral-small-2-2512`) | deprecated | 2025-12-09 | 262.1K | $0.10 | $0.30 | Dense 24B transformer | Local, on-device agentic coding on a single consumer GPU | prev: devstral-small-2507 → superseded by: mistral-medium-2604 |
| Magistral Medium 1.2 (`magistral-medium-2509`) | deprecated | 2025-09-01 | 131.1K | $2.00 | $5.00 | Dense reasoning transformer with tokenized thinking chunks | Transparent multilingual chain-of-thought reasoning | prev: magistral-medium-2507 → superseded by: mistral-medium-3-5-26-04 |
| Magistral Medium (`magistral-medium-latest`) | deprecated | 2025-06-10 | — | $2.00 | $5.00 | — | Chain-of-thought reasoning for complex problems | superseded by: mistral-medium-2604 |
| Mistral Medium 3 (`mistral-medium-2505`) | deprecated | 2025-05-07 | 131K | $0.40 | $2.00 | — | Balanced cost/performance for coding and STEM | superseded by: mistral-medium-2604 |

## Moonshot

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Kimi K3 (`kimi-k3`) | ga | 2026-07-16 | 1.0M | $3.00 | $15.00 | Stable LatentMoE, ~2.8T total params, 896 experts (16 active) | Frontier reasoning, long-context coding and agents | prev: kimi-k2.6 |
| Kimi K2.7-Code (`kimi-k2.7-code`) | ga | 2026-06-12 | 262.1K | $0.95 | $4.00 | Native multimodal MoE (K2 family) | Long-horizon agentic coding at low cost | prev: kimi-k2.6 |
| Kimi K2.6 (`kimi-k2.6`) | ga | 2026-04-20 | 262.1K | $0.95 | $4.00 | 1T MoE, 32B activated, 384 experts (8+1 shared), 61 layers, MLA + 400M MoonViT vision encoder | General-purpose multimodal agentic workloads | prev: kimi-k2.5 → superseded by: kimi-k3 |
| Kimi K2 Thinking (`kimi-k2-thinking`) | ga | 2025-11-06 | 262.1K | $0.60 | $2.50 | Trillion-parameter MoE, 32B activated per forward pass | Persistent step-by-step reasoning with tools | prev: kimi-k2-instruct → superseded by: kimi-k3 |
| Kimi K2 Thinking Turbo (`kimi-k2-thinking-turbo`) | ga | 2025-11-06 | 262.1K | $1.15 | $8.00 | 1T-parameter MoE with 32B active parameters | faster interleaved reasoning with tool use | prev: kimi-k2-thinking |
| Kimi K2.5 (`kimi-k2.5`) | deprecated | 2026-01-27 | 262.1K | $0.60 | $3.00 | 1T MoE, native multimodal (K2 family) | Budget K2-family multimodal chat and coding | prev: kimi-k2-thinking → superseded by: kimi-k2.6 |
| Kimi K2 Instruct 0905 (`kimi-k2-instruct-0905`) | deprecated | 2025-09-09 | 256K | — | — | Mixture-of-Experts, 1T total / 32B active, 384 experts (8 selected + 1 shared), MLA attention | Legacy agentic coding and long-context workflows | superseded by: kimi-k2.6 |
| Moonshot v1 128K (`moonshot-v1-128k`) | deprecated | — | 131.1K | $2.00 | $5.00 | — | legacy chat/completion integrations | superseded by: kimi-k2.6 |
| Moonshot V1 32K (`moonshot-v1-32k`) | deprecated | — | 32.8K | — | — | — | Legacy compatibility for existing moonshot-v1 integrations | superseded by: kimi-k3 |

## NVIDIA

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Nemotron 3.5 Lightning 30B A3B (`nvidia/nemotron-3.5-lightning-30b-a3b`) | ga | 2026-08-11 | 1M | $0.05 | $0.20 | Hybrid Mamba2-Transformer MoE — 30B total / 3B active | Always-on agents with high-volume specialized tasks | prev: nvidia/nemotron-3-nano-30b-a3b |
| Nemotron 3.5 Lightning 30B A3B (`nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B`) | ga | 2026-08-11 | 1M | — | — | Mamba-2 + MoE + attention hybrid (30B total, 3B active) | High-throughput agent execution layer | prev: nvidia/nemotron-3-nano-30b-a3b |
| Nemotron 3.5 Lightning 30B A3B BF16 (`nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16`) | ga | 2026-08-11 | 1M | — | — | Hybrid Mamba2-Transformer MoE — 30B total / 3B active (BF16 reference) | Self-hosted BF16 checkpoint of Nemotron 3.5 Lightning | prev: nvidia/NVIDIA-Nemotron-3-Nano-30B-A3B-BF16 |
| Nemotron 3 Embed 1B (BF16) (`nvidia/nemotron-3-embed-1b-bf16`) | ga | 2026-07-17 | 32.8K | $0.00 | $0.00 | Transformer encoder with bidirectional attention masking, average pooling | Efficient production-scale dense retrieval where a smaller footprint than the 8B is needed | — |
| Nemotron 3 Embed 1B (NVFP4) (`nvidia/nemotron-3-embed-1b-nvfp4`) | ga | 2026-07-17 | 32.8K | $0.00 | $0.00 | Transformer encoder with bidirectional attention masking, NVFP4 (4-bit) quantized from Nemotron-3-Embed-1B-BF16 | Blackwell-optimized 4-bit deployment for high-throughput embedding on GB200 / RTX PRO 6000 | prev: nvidia/nemotron-3-embed-1b-bf16 |
| Nemotron 3 Embed 8B (`nvidia/nemotron-3-embed-8b-bf16`) | ga | 2026-07-17 | 32.8K | $0.00 | $0.00 | Transformer encoder with bidirectional attention masking (adapted from Ministral-3-8B-Instruct-2512 causal decoder), average pooling over token representations | Accuracy-first multilingual dense retrieval for production RAG, agentic retrieval, code retrieval, and agent memory | — |
| Nemotron 3 Embed 8B (`nvidia/nemotron-3-embed-8b`) | ga | 2026-07-16 | 32.8K | — | — | Transformer text encoder with bidirectional attention, 4096-dim embeddings | Multilingual retrieval embeddings for RAG | — |
| Nemotron 3 Ultra (`nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16`) | ga | 2026-06-04 | 1M | — | — | Hybrid Transformer-Mamba Mixture-of-Experts (LatentMoE) with MTP layers, 550B total / 55B active | Frontier agentic reasoning and orchestration | — |
| Nemotron 3 Ultra (`nvidia/nemotron-3-ultra-550b-a55b`) | ga | 2026-06-04 | 1M | $0.50 | $2.20 | Hybrid Mamba-2 + Transformer Mixture-of-Experts (550B total, 55B active) | Frontier agentic reasoning and long-context analytical workloads | prev: nvidia/nemotron-3-super-120b-a12b |
| Nemotron 3.5 ASR Streaming Multilingual (`nvidia/nemotron-3.5-asr-streaming-0.6b`) | ga | 2026-06-04 | — | — | — | Cache-Aware FastConformer-RNNT, 600M parameters | Low-latency multilingual streaming speech recognition | — |
| Nemotron 3.5 Content Safety (`nvidia/nemotron-3.5-content-safety`) | ga | 2026-06-04 | 128K | $0.00 | $0.00 | Gemma 3 4B IT fine-tuned (LoRA merged) for multimodal safety reasoning | Multimodal multilingual content safety moderation | prev: nvidia/nemotron-3-content-safety |
| Cosmos 3 (`nvidia/cosmos-3`) | ga | 2026-06-01 | — | — | — | Mixture-of-transformers omnimodel for physical AI | World simulation and synthetic data for physical AI | prev: nvidia/cosmos-1 |
| Nemotron-Labs-3-Elastic 30B-A3B (`nvidia/nemotron-labs-3-elastic-30b-a3b`) | ga | 2026-05-07 | 131.1K | — | — | Hybrid Mamba2-Transformer MoE with elastic post-training; 52-layer parent (23 Mamba-2 + MoE layers, 6 attention layers, 128 experts + 1 shared, 6 activated per token); nested 30B / 23B / 12B submodels sharing the same layer structure, 32 attention heads and 64 Mamba heads | Elastic 3-in-1 reasoning checkpoint sliced to 30B/23B/12B for cost-adaptive deployment | prev: nvidia/nemotron-3-nano-30b-a3b |
| Nemotron 3 Nano Omni 30B A3B Reasoning (`nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16`) | ga | 2026-04-29 | 262.1K | — | — | Nemotron 3 hybrid Mamba-Transformer Mixture-of-Experts backbone with C-RADIOv4-H vision encoder and Parakeet-TDT-0.6B-v2 audio encoder; 30B total / 3B active | Multimodal agent perception across vision, audio, video | — |
| Nemotron 3 Nano Omni (`nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`) | ga | 2026-04-28 | 260K | $0.07 | $0.30 | Nemotron 3 Nano hybrid Mamba-Transformer MoE backbone with multimodal encoders | Multimodal document, video and audio agents | prev: nvidia/nemotron-3-nano-30b-a3b |
| Nemotron 3 Nano Omni (`nvidia/nemotron-3-nano-omni`) | ga | 2026-04-28 | 262.1K | — | — | Nemotron 3 Nano 30B-A3B hybrid Mamba-Transformer MoE backbone + C-RADIOv4-H vision encoder + Parakeet-TDT audio encoder | Efficient omni-modal edge agents (vision, audio, video, text) | prev: nvidia/nemotron-3-nano-30b-a3b |
| Nemotron 3 Nano Omni 30B A3B (`nvidia/nemotron-3-nano-omni-30b-a3b`) | ga | 2026-04-28 | 256K | — | — | Hybrid mixture-of-experts omnimodal (30B total, 3B active, 6-of-128 expert routing) | Unified multimodal agents on edge devices | prev: nvidia/nemotron-3-nano-30b-a3b |
| Nemotron-Cascade 2 30B-A3B (`nvidia/nemotron-cascade-2-30b-a3b`) | ga | 2026-03-20 | 262.1K | — | — | Hybrid Mamba-Transformer Mixture-of-Experts, 30B total / 3B active, 52 layers, 128 routable + 1 shared expert, 6 experts activated per token, post-trained from Nemotron-3-Nano-30B-A3B-Base via Cascade RL | High-intelligence-density open reasoning at 3B active parameters for math, code, and agentic workflows with single-GPU deployment | prev: nvidia/nemotron-3-nano-30b-a3b |
| Nemotron 3 Nano 4B (`nvidia/nemotron-3-nano-4b`) | ga | 2026-03-16 | 262.1K | — | — | Hybrid Mamba-Transformer (Mamba-2 + MLP + small number of attention layers), 3.97B parameters, dense | On-device / edge deployment on Jetson, DGX Spark, and RTX GPUs where privacy, latency, and offline operation matter | prev: nvidia/nvidia-nemotron-nano-9b-v2 |
| Nemotron 3 Super (`nvidia/nemotron-3-super-120b-a12b`) | ga | 2026-03-11 | 1M | $0.09 | $0.45 | Hybrid LatentMoE: Mamba-2 + Attention + 512-expert MoE (22 active), 120B total / 12B active | High-accuracy multi-GPU agentic reasoning at balanced cost | prev: nvidia/nemotron-3-nano-30b-a3b → superseded by: nvidia/nemotron-3-ultra-550b-a55b |
| Nemotron 3 Super 120B A12B (`nvidia/NVIDIA-Nemotron-3-Super-120B-A12B-BF16`) | ga | 2026-03-11 | 262.1K | — | — | Hybrid Latent Mixture-of-Experts (LatentMoE) with Mamba-2, MoE, and Attention layers; MTP layers; NVFP4-trained; 120B total / 12B active | High-accuracy reasoning for multi-agent applications | — |
| Nemotron 3 Nano (`nvidia/nemotron-3-nano-30b-a3b`) | ga | 2025-12-15 | 1M | $0.05 | $0.20 | Hybrid Mamba-Transformer Mixture-of-Experts (30B total, 3B active) | Efficient single-GPU agentic reasoning and tool use | prev: nvidia/nemotron-nano-9b-v2 → superseded by: nvidia/nemotron-3-super-120b-a12b |
| Nemotron 3 Nano 30B A3B (`nvidia/NVIDIA-Nemotron-3-Nano-30B-A3B-BF16`) | ga | 2025-12-15 | 262.1K | — | — | Hybrid Mamba-Transformer Mixture-of-Experts; 23 Mamba-2 + MoE layers with 6 Attention layers; 128 experts + 1 shared, 5 activated per token; 30B total / 3.5B active | Compute-efficient reasoning and agent workflows | — |
| Nemotron Nano 2 VL (`nvidia/nemotron-nano-12b-v2-vl`) | ga | 2025-10-28 | 131.1K | — | — | Hybrid Transformer-Mamba VLM built on Nemotron Nano V2 12B with RADIOv2.5 vision encoder | open document intelligence and video understanding | prev: nvidia/nvidia-nemotron-nano-9b-v2 → superseded by: nvidia/nemotron-3-nano-omni-30b-a3b-reasoning |
| Llama Embed Nemotron 8B (`nvidia/llama-embed-nemotron-8b`) | ga | 2025-10-21 | 32.8K | — | — | Llama-3.1-8B decoder fine-tuned with bidirectional attention, 32 hidden layers, 4096-dim embeddings | multilingual retrieval and semantic embeddings | — |
| Llama 3.3 Nemotron Super 49B v1.5 (`nvidia/llama-3_3-nemotron-super-49b-v1_5`) | ga | 2025-10-10 | 131.1K | $0.10 | $0.40 | Neural Architecture Search compression of Meta Llama-3.3-70B-Instruct with reasoning post-training | single-GPU reasoning and tool-calling on Llama base | prev: nvidia/llama-3.3-nemotron-super-49b-v1 → superseded by: nvidia/nemotron-3-super-120b-a12b |
| Llama-3.3-Nemotron-Super-49B-v1.5 (`nvidia/llama-3.3-nemotron-super-49b-v1.5`) | ga | 2025-10-10 | 128K | — | — | Dense decoder-only transformer distilled from Llama-3.3-70B via Puzzle NAS (skip-attention, variable FFN widths) | Dense reasoning + tool-calling on single H100/H200 | prev: nvidia/llama-3.3-nemotron-super-49b-v1 → superseded by: nvidia/nemotron-3-super-120b-a12b |
| Nemotron Nano 9B V2 (`nvidia/nvidia-nemotron-nano-9b-v2`) | ga | 2025-08-18 | 131.1K | $0.04 | $0.16 | Dense hybrid Mamba-Transformer, 9B parameters | Dense small-model reasoning with thinking budget control | superseded by: nvidia/nemotron-3-nano-30b-a3b |
| Llama 3.1 Nemotron Ultra 253B v1 (`nvidia/llama-3.1-nemotron-ultra-253b-v1`) | ga | 2025-04-08 | 128K | $0.60 | $1.80 | Dense 253B (Llama 3.1 base, NAS-optimized) | Highest-accuracy complex agentic tasks (legacy tier) | superseded by: nvidia/nemotron-3-super-120b-a12b |
| Nemotron-Labs-Audex 2B (`nvidia/nemotron-labs-audex-2b`) | preview | 2026-07-07 | — | — | — | Dense 2B decoder LLM with extended vocabulary for discrete audio tokens and an audio encoder for speech and general audio inputs | Compact 2B audio-text LLM for on-device speech understanding and TTS | — |
| Nemotron-Labs-Audex 30B-A3B (`nvidia/nemotron-labs-audex-30b-a3b`) | preview | 2026-07-07 | — | — | — | Single MoE Transformer decoder with 30B total / 3B active parameters; hybrid Mamba-Transformer backbone (Nemotron-Cascade-2-30B-A3B, 52 layers, 128 routable + shared experts, 6 activated per token) extended with audio encoder and vocabulary for discrete audio output tokens | Unified audio-text MoE for ASR, TTS, translation, and speech-to-speech | prev: nvidia/nemotron-cascade-2-30b-a3b |
| Nemotron-Labs-TwoTower 30B-A3B (`nvidia/nemotron-labs-twotower-30b-a3b`) | preview | 2026-07-01 | 131.1K | — | — | Block-wise autoregressive diffusion: frozen Nemotron-3-Nano-30B-A3B AR context tower + trainable bidirectional diffusion denoiser tower (~60B total, ~3B active per tower) | High-throughput diffusion language generation research | prev: nvidia/nemotron-3-nano-30b-a3b |
| Nemotron 3 VoiceChat (`nvidia/nemotron-voicechat`) | preview | 2026-03-18 | — | — | — | Unified speech-to-speech: Parakeet audio encoder + Nemotron Nano v2 9B LLM backbone + TTS decoder (~12B total) | Full-duplex real-time conversational voice agents | — |
| Llama 3.3 Nemotron Super 49B v1 (`nvidia/llama-3.3-nemotron-super-49b-v1`) | deprecated | 2025-03-18 | 131.1K | $0.10 | $0.40 | Dense transformer (Llama 3.3 base, NAS-pruned) | Legacy mid-tier Nemotron reasoning | superseded by: nvidia/nemotron-3-super-120b-a12b |

## OpenAI

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GPT-Live-Transcribe (`gpt-live-transcribe`) | ga | 2026-07-29 | — | — | — | — | Low-latency streaming speech-to-text | prev: gpt-4o-transcribe |
| GPT-Transcribe (`gpt-transcribe`) | ga | 2026-07-29 | — | — | — | — | Async batch transcription of recorded audio | prev: whisper-large-v3 |
| GPT-5.6 Luna (`gpt-5.6-luna`) | ga | 2026-07-09 | 1.1M | $0.20 | $1.20 | Fast, cost-efficient variant of the GPT-5.6 family | High-volume, cost-sensitive workloads | prev: gpt-5.4-nano |
| GPT-5.6 Sol (`gpt-5.6-sol`) | ga | 2026-07-09 | 1.1M | $5.00 | $30.00 | Unified reasoning model with configurable reasoning effort and Pro mode | Frontier reasoning, coding, and complex agentic work | prev: gpt-5.5 |
| GPT-5.6 Terra (`gpt-5.6-terra`) | ga | 2026-07-09 | 1.1M | $2.00 | $12.00 | Mid-tier variant of the GPT-5.6 family | Balanced intelligence and cost for everyday work | prev: gpt-5.5 |
| gpt-realtime-2.1 (`gpt-realtime-2.1`) | ga | 2026-07-06 | 128K | $4.00 | $24.00 | Realtime speech-to-speech transformer with configurable reasoning tokens | Low-latency voice and multimodal agents | prev: gpt-realtime-2 |
| GPT-Realtime-2.1 mini (`gpt-realtime-2.1-mini`) | ga | 2026-07-06 | 128K | $0.60 | $2.40 | Distilled speech-to-speech realtime reasoning model | Low-cost realtime voice agents at scale | prev: gpt-realtime-mini |
| GPT-5.5 Instant (`gpt-5.5-instant`) | ga | 2026-05-05 | 1M | $5.00 | $30.00 | — | Fast default chat for ChatGPT-style workloads | prev: gpt-5.3-instant |
| GPT-5.5 (`gpt-5.5`) | ga | 2026-04-23 | 1M | $5.00 | $30.00 | First full retrain since GPT-4.5; frontier reasoning model | Prior-generation flagship reasoning workloads | prev: gpt-5 → superseded by: gpt-5.6-sol |
| GPT-5.5 Pro (`gpt-5.5-pro`) | ga | 2026-04-23 | 1.1M | $30.00 | $180.00 | Reasoning model with extended thinking | Highest-accuracy answers on hardest problems | prev: gpt-5-pro → superseded by: gpt-5.6-sol |
| GPT-5.4 mini (`gpt-5.4-mini`) | ga | 2026-03-17 | 400K | $0.75 | $4.50 | — | Cost-efficient production reasoning and sub-agent workloads | prev: o4-mini |
| GPT-5.4 nano (`gpt-5.4-nano`) | ga | 2026-03-17 | 272K | $0.20 | $1.25 | — | cheapest fastest option for high-volume simple tasks | prev: gpt-5-nano |
| GPT-5.4 (`gpt-5.4`) | ga | 2026-03-05 | 1M | $2.50 | $15.00 | — | Integrated reasoning at mid-tier cost | prev: gpt-5 → superseded by: gpt-5.5 |
| GPT-5 (`gpt-5`) | ga | 2025-08-07 | 400K | $1.25 | $10.00 | Unified system with real-time router between fast and deeper-reasoning variants | General-purpose flagship reasoning and coding | prev: gpt-4.1 → superseded by: gpt-5.5 |
| gpt-oss-120b (`gpt-oss-120b`) | ga | 2025-08-05 | 128K | $0.03 | $0.15 | Mixture-of-Experts, 120B total / ~5.1B active parameters per token | Self-hosted open-weight reasoning and tool use | — |
| o3-pro (`o3-pro`) | ga | 2025-06-10 | 200K | $20.00 | $80.00 | — | Highest-effort deep reasoning tasks | prev: o1-pro → superseded by: gpt-5.6-sol |
| o4-mini (`o4-mini`) | ga | 2025-04-16 | 200K | $1.10 | $4.40 | small o-series reasoning model | Fast efficient reasoning on coding and visual tasks | prev: o3-mini → superseded by: gpt-5.6-luna |
| GPT-Realtime-2 (`gpt-realtime-2`) | ga | — | — | $4.00 | $24.00 | — | Low-latency speech-to-speech voice agents | prev: gpt-realtime |
| GPT-5.6 Cyber (`gpt-5.6-cyber`) | preview | 2026-08-10 | 400K | $12.50 | $75.00 | Cybersecurity-specialized post-training on GPT-5.6 Sol | Authorized offensive and defensive cybersecurity workflows | prev: gpt-5.6-sol |
| OpenAI o3 (`o3`) | deprecated | 2025-04-16 | 200K | $2.00 | $8.00 | reasoning model with configurable effort levels | Chain-of-thought reasoning on math, science, and code | prev: o1 → superseded by: gpt-5.6-sol |

## Perplexity

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Sonar Deep Research (`sonar-deep-research`) | ga | 2025-03-07 | 128K | $2.00 | $8.00 | Perplexity deep-research agent with web search | Long-form multi-source research reports | superseded by: agent-api-high |
| Sonar Reasoning Pro (`sonar-reasoning-pro`) | ga | 2025-02-18 | 127K | $2.00 | $8.00 | DeepSeek-R1 1776 fine-tune with live web search | Top-tier reasoning with grounded search | prev: sonar-reasoning → superseded by: agent-api-medium |
| Sonar (`sonar`) | ga | 2025-01-27 | 128K | $1.00 | $1.00 | Perplexity fine-tuned model with live web search | Fast, cheap search-grounded Q&A | superseded by: agent-api-fast |
| Sonar Pro (`sonar-pro`) | ga | 2025-01-27 | 200K | $3.00 | $15.00 | Perplexity fine-tuned model with live web search | Complex search-grounded queries with citations | prev: sonar → superseded by: agent-api-low |
| Sonar Reasoning (`sonar-reasoning`) | ga | 2025-01-27 | 127K | $1.00 | $5.00 | DeepSeek-R1 (1776) fine-tune with live web search | Affordable chain-of-thought web search | superseded by: sonar-reasoning-pro |
| Sonar Pro Search (`sonar-pro-search`) | deprecated | 2025-10-30 | 200K | $3.00 | $15.00 | Agentic search-grounded LLM | Agentic research; migrate to Agent API | prev: sonar-pro → superseded by: agent-api |

## xAI

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Grok 4.6 (`grok-4.6`) | ga | 2026-08-12 | 500K | $2.00 | $6.00 | Mixture-of-experts foundation model with reasoning post-training | Frontier coding, agentic tasks, and knowledge work | prev: grok-4.5 |
| Grok 4.6 (`grok-4-6`) | ga | 2026-08-12 | 500K | $2.00 | $6.00 | — | Frontier coding and long-running agents | prev: grok-4-5 |
| Grok Imagine Image 2.0 (`grok-imagine-image-2.0`) | ga | 2026-08-07 | — | — | — | — | High-fidelity image generation and region editing | prev: grok-imagine |
| Grok Voice Think Fast 2.0 (`grok-voice-think-fast-2.0`) | ga | 2026-07-29 | — | — | — | Voice-native full-duplex speech-to-speech model with configurable reasoning effort (low/medium/high) | Real-time voice agents with improved speech reasoning and reliable tool-calling | prev: grok-voice-think-fast-1.0 |
| Grok 4.5 (`grok-4.5`) | ga | 2026-07-08 | 500K | $2.00 | $6.00 | 1.5T-parameter V9 mixture-of-experts foundation | Coding, agents, and knowledge work | prev: grok-4.3 → superseded by: grok-4.6 |
| Grok 4.3 (`grok-4.3`) | ga | 2026-04-30 | 1M | $1.25 | $2.50 | Reasoning-first transformer with prompt caching | Cost-efficient reasoning with 1M-token context | prev: grok-4.20 → superseded by: grok-4.5 |
| Grok 4.3 (`grok-4-3`) | ga | 2026-04-30 | 1M | $1.25 | $2.50 | Reasoning-centric model with always-on chain-of-thought | 1M context reasoning at mid-tier price | prev: grok-4-0709 → superseded by: grok-4-5 |
| Grok 4.20 (`grok-4.20`) | ga | 2026-03-31 | 2M | $1.25 | $2.50 | Native 4-agent collaborative architecture | Multi-agent tool calling with 2M-token context | prev: grok-4 → superseded by: grok-4.3 |
| Grok 4.20 Multi Agent (`grok-4.20-multi-agent`) | ga | 2026-03-09 | 1M | $1.25 | $2.50 | 4-agent parallel council on shared weights and cached context | Multi-agent orchestration and collaborative workflows | prev: grok-4.20-multi-agent-beta-0309 |
| Grok 4.5 (`grok-4-5`) | ga | 2026-02-01 | 500K | $2.00 | $6.00 | — | Coding, agentic tasks, and knowledge work | prev: grok-4-3 → superseded by: grok-4-6 |
| Grok 4.1 Fast (`grok-4.1-fast`) | ga | 2025-11-19 | 2M | $0.20 | $0.50 | Dense/hybrid model with dual reasoning/non-reasoning modes | Low-latency agentic tool calling and deep research | — |
| Grok 4.1 Fast (Reasoning) (`grok-4-1-fast-reasoning`) | ga | 2025-11-19 | 2M | $0.20 | $0.50 | — | High-throughput agentic tool calling at low cost | prev: grok-4-fast-reasoning |
| Grok 4.1 Fast Non-Reasoning (`grok-4.1-fast-non-reasoning`) | ga | 2025-11-19 | 2M | $0.20 | $0.50 | — | Low-latency, high-throughput agent tool loops | prev: grok-4-fast-non-reasoning |
| Grok 4.1 Fast Reasoning (`grok-4.1-fast-reasoning`) | ga | 2025-11-19 | 2M | $0.20 | $0.50 | — | High-volume agent workflows with tool calling | prev: grok-4-fast-reasoning |
| Grok 4 Fast (`grok-4-fast`) | ga | 2025-09-19 | 2M | $0.20 | $0.50 | — | High-volume agentic tool calling and long context | prev: grok-3-mini |
| Grok 4 Fast (Non-Reasoning) (`grok-4-fast-non-reasoning`) | ga | 2025-09-19 | 2M | $0.20 | $0.50 | Non-reasoning mode of the Grok 4 Fast unified model | Low-latency chat and high-throughput tasks | prev: grok-3 → superseded by: grok-4.3 |
| Grok 4 Fast (Reasoning) (`grok-4-fast-reasoning`) | ga | 2025-09-19 | 2M | $0.20 | $0.50 | Unified fast model trained with heavy RL for tool-use | Cost-efficient reasoning at massive context | prev: grok-3-mini → superseded by: grok-4.3 |
| Grok Code Fast 1 (`grok-code-fast-1`) | ga | 2025-08-28 | 256K | $0.20 | $1.50 | New from-scratch architecture pre-trained on programming-heavy corpus | Fast, cheap agentic coding workflows | superseded by: grok-4.3 |
| Grok 4 (`grok-4`) | ga | 2025-07-09 | 256K | $3.00 | $15.00 | — | Flagship reasoning, complex analysis, agentic tasks | prev: grok-3 |
| Grok 3 (`grok-3`) | ga | 2025-02-17 | 131.1K | $3.00 | $15.00 | — | General-purpose enterprise chat | prev: grok-2 → superseded by: grok-4 |
| Grok Imagine Video 1.5 Preview (`grok-imagine-video-1.5-preview`) | preview | 2026-06-03 | — | — | — | Imagine video diffusion model with integrated audio generation | Image-to-video generation with native audio | prev: grok-imagine-video |
| Grok Build 0.1 (`grok-build-0.1`) | preview | 2026-05-20 | 256K | $1.00 | $2.00 | Coding-specialized agent model | Agentic coding: web dev, debugging, multi-step workflows | prev: grok-code-fast-1 |
| Grok 4.20 Multi Agent Beta 0309 (`grok-4.20-multi-agent-beta-0309`) | preview | 2026-03-09 | 2M | $1.25 | $2.50 | Beta 4-agent council with extended 2M context | Beta multi-agent with 2M context | prev: grok-4.20 → superseded by: grok-4.20-multi-agent |
| Grok Voice Think Fast 1.0 (`grok-voice-think-fast-1.0`) | deprecated | 2026-04-23 | — | — | — | Voice-native full-duplex model with background reasoning for real-time conversation | real-time voice agents with reasoning (legacy) | superseded by: grok-voice-think-fast-2.0 |
| Grok 4.20 (dashed alias) (`grok-4-20`) | deprecated | 2026-03-10 | 2M | $2.00 | $6.00 | — | Non-canonical alias for grok-4.20; use canonical dotted form | prev: grok-4.3 → superseded by: grok-4.20 |
| Grok 4.1 Fast (`grok-4-1-fast`) | deprecated | 2025-11-19 | 2M | $0.20 | $0.50 | Compact fast variant of Grok 4.1 | High-throughput agentic tool calling at low cost | prev: grok-3-mini → superseded by: grok-4.3 |
| Grok 4 (`grok-4-0709`) | deprecated | 2025-07-09 | 256K | $3.00 | $15.00 | — | Complex synthesis, analysis, and instruction following | prev: grok-3 → superseded by: grok-4.3 |
