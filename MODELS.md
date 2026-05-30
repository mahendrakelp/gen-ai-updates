# Frontier Production Model Catalog

_Last refreshed: 2026-05-30 by genai-model-catalog routine._

## Alibaba

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Qwen3.7-Max (`qwen3.7-max`) | ga | 2026-05-20 | 1M | $2.50 | $7.50 | Mixture-of-Experts (closed) | Long-horizon agent workflows and autonomous coding | prev: qwen3-max |
| Qwen3-Coder-Plus (`qwen3-coder-plus`) | ga | 2025-09-23 | 1M | $0.65 | $3.25 | MoE (Qwen3-Coder family, 480B total / 35B active basis) | Agentic coding across full codebases | prev: qwen2.5-coder-plus |
| Qwen3-VL-Plus (`qwen3-vl-plus`) | ga | 2025-09-23 | 262K | $0.20 | $1.60 | Qwen3-VL MoE (235B-A22B family) | Mid-tier vision-language reasoning and document/video understanding | prev: qwen-vl-plus → superseded by: qwen3.7-plus |
| Qwen3-235B-A22B-Thinking-2507 (`qwen3-235b-a22b-thinking-2507`) | ga | 2025-07-25 | 262K | $0.70 | $8.40 | Mixture-of-Experts (235B total, 22B activated) | Open-weights frontier reasoning and math/code | prev: qwen3-235b-a22b |
| Qwen3.7-Plus (`qwen3.7-plus`) | preview | 2026-05-20 | 1M | — | — | Mixture-of-Experts (closed, multimodal) | High-volume multimodal workloads with vision input | prev: qwen3-vl-plus |
| Qwen3-Max (`qwen3-max`) | deprecated | 2025-09-23 | 262K | $0.78 | $3.90 | Mixture-of-Experts (closed) | General-purpose flagship chat (legacy tier) | prev: qwen2.5-max → superseded by: qwen3.7-max |

## Amazon

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Nova 2 Lite (`amazon.nova-2-lite-v1:0`) | ga | 2025-12-02 | 1M | $0.30 | $2.50 | Transformer-based multimodal foundation model with extended thinking | Fast cost-effective multimodal reasoning at scale | prev: amazon.nova-lite-v1:0 |
| Nova Micro (`amazon.nova-micro-v1:0`) | ga | 2024-12-05 | 128K | $0.04 | $0.14 | Transformer-based text-only foundation model | Lowest-latency text-only tasks at minimal cost | — |
| Nova 2 Pro (Preview) (`amazon.nova-2-pro-preview-20251202-v1:0`) | preview | 2025-12-02 | 1M | $2.19 | $17.50 | Transformer-based multimodal foundation model with extended thinking | Highly complex multistep agentic reasoning tasks | prev: amazon.nova-pro-v1:0 |
| Nova Premier (`amazon.nova-premier-v1:0`) | deprecated | 2025-04-30 | 1M | $2.50 | $12.50 | Transformer-based multimodal foundation model | Teacher model for distillation and complex tasks | prev: amazon.nova-pro-v1:0 → superseded by: amazon.nova-2-pro-preview-20251202-v1:0 |
| Nova Lite (`amazon.nova-lite-v1:0`) | deprecated | 2024-12-05 | 300K | $0.06 | $0.24 | Transformer-based multimodal foundation model | Low-cost multimodal high-volume processing | → superseded by: amazon.nova-2-lite-v1:0 |
| Nova Pro (`amazon.nova-pro-v1:0`) | deprecated | 2024-12-05 | 300K | $0.80 | $3.20 | Transformer-based multimodal foundation model | Balanced accuracy speed cost for multimodal tasks | → superseded by: amazon.nova-2-pro-preview-20251202-v1:0 |

## Anthropic

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Claude Opus 4.8 (`claude-opus-4-8`) | ga | 2026-05-28 | 1M | $5.00 | $25.00 | — | Most complex reasoning and agentic coding | prev: claude-opus-4-7 |
| Claude Opus 4.7 (`claude-opus-4-7`) | ga | 2026-04-16 | 1M | $5.00 | $25.00 | — | Complex reasoning and agentic coding | prev: claude-opus-4-6 → superseded by: claude-opus-4-8 |
| Claude Sonnet 4.6 (`claude-sonnet-4-6`) | ga | 2026-02-17 | 1M | $3.00 | $15.00 | — | Balanced speed and intelligence for everyday tasks | prev: claude-sonnet-4-5 |
| Claude Haiku 4.5 (`claude-haiku-4-5`) | ga | 2025-10-15 | 200K | $1.00 | $5.00 | — | Fast, low-cost high-volume real-time tasks | prev: claude-haiku-3-5 |
| Claude Opus 4.6 (`claude-opus-4-6`) | deprecated | 2026-02-05 | 1M | $5.00 | $25.00 | — | Long-horizon agentic tasks | prev: claude-opus-4-5 → superseded by: claude-opus-4-7 |

## Cohere

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Command A+ (`command-a-plus-05-2026`) | ga | 2026-05-20 | 128K | $2.50 | $10.00 | 218B sparse MoE (25B active, 128 experts, 8 active per token) | Enterprise agentic workflows with multimodal reasoning | prev: command-a-03-2025 |
| Command A Reasoning (`command-a-reasoning-08-2025`) | ga | 2025-08-21 | 256K | $2.50 | $10.00 | 111B dense transformer with reasoning training | Enterprise reasoning, agents, and tool use | prev: command-a-03-2025 |
| Command A Vision (`command-a-vision-07-2025`) | ga | 2025-07-31 | 128K | $2.50 | $10.00 | 112B multimodal transformer (vision adapter on Command A backbone) | Enterprise document, chart, and image understanding | prev: command-a-03-2025 |
| Command A (`command-a-03-2025`) | ga | 2025-03-13 | 256K | $2.50 | $10.00 | 111B dense decoder-only transformer | Agentic, multilingual, and coding enterprise tasks | prev: command-r-plus-08-2024 → superseded by: command-a-plus-05-2026 |
| Command R7B (`command-r7b-12-2024`) | ga | 2024-12-13 | 128K | $0.04 | $0.15 | ~7-8B dense decoder-only transformer | High-throughput, latency-sensitive chatbots and assistants | — |
| Command R+ (08-2024) (`command-r-plus-08-2024`) | deprecated | 2024-08-30 | 128K | $2.50 | $10.00 | 104B dense decoder-only transformer | Legacy RAG and tool-use workloads | prev: command-r-plus-04-2024 → superseded by: command-a-03-2025 |

## DeepSeek

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DeepSeek V4 Flash (`deepseek-v4-flash`) | preview | 2026-04-24 | 1M | $0.14 | $0.28 | Mixture-of-Experts, 284B total / 13B activated parameters, dual thinking/non-thinking modes | High-throughput, low-cost production text workloads | prev: deepseek-chat |
| DeepSeek V4 Pro (`deepseek-v4-pro`) | preview | 2026-04-24 | 1M | $0.43 | $0.87 | Mixture-of-Experts, 1.6T total / 49B activated parameters, dual thinking/non-thinking modes | Frontier reasoning, agentic coding, complex tasks | prev: deepseek-reasoner |
| DeepSeek Chat (V3.2 legacy alias) (`deepseek-chat`) | deprecated | 2025-12-01 | 1M | $0.14 | $0.28 | Mixture-of-Experts (DeepSeek V3 family routed to V4-Flash) | Legacy general chat; migrate to V4 Flash | → superseded by: deepseek-v4-flash |
| DeepSeek Reasoner (V3.2 legacy alias) (`deepseek-reasoner`) | deprecated | 2025-12-01 | 1M | $0.55 | $2.19 | Reasoning-tuned MoE (DeepSeek R1 family routed to V4-Flash) | Legacy thinking-mode reasoning; migrate to V4 Pro | → superseded by: deepseek-v4-pro |

## Google

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Gemini 3.5 Flash (`gemini-3.5-flash`) | ga | 2026-05-19 | 1M | $1.50 | $9.00 | Sparse mixture-of-experts transformer | Fast agentic and coding tasks at scale | prev: gemini-3-flash |
| Gemini 3.1 Flash Lite (`gemini-3.1-flash-lite-preview`) | preview | 2026-03-03 | 1M | $0.25 | $1.50 | Distilled sparse mixture-of-experts | High-volume, cost-sensitive inference workloads | prev: gemini-2.5-flash-lite |
| Gemini 3.1 Pro (`gemini-3.1-pro-preview`) | preview | 2026-02-19 | 1M | $2.00 | $12.00 | Sparse mixture-of-experts transformer with thinking | Frontier reasoning, complex science and engineering | prev: gemini-3-pro |
| Gemini 2.5 Flash-Lite (`gemini-2.5-flash-lite`) | deprecated | 2025-07-22 | 1M | $0.10 | $0.40 | Distilled sparse mixture-of-experts | Highest-volume, lowest-latency batch workloads | prev: gemini-2.0-flash-lite → superseded by: gemini-3.1-flash-lite-preview |
| Gemini 2.5 Flash (`gemini-2.5-flash`) | deprecated | 2025-06-17 | 1M | $0.30 | $2.50 | Sparse mixture-of-experts transformer | Cost-effective general-purpose multimodal tasks | prev: gemini-1.5-flash → superseded by: gemini-3.5-flash |
| Gemini 2.5 Pro (`gemini-2.5-pro`) | deprecated | 2025-06-17 | 1M | $1.25 | $10.00 | Sparse mixture-of-experts transformer | Legacy production workloads pending migration | prev: gemini-1.5-pro → superseded by: gemini-3.1-pro-preview |

## Meta

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Llama 4 Maverick (`llama-4-maverick`) | ga | 2025-04-05 | 1M | $0.15 | $0.60 | Mixture-of-Experts, 17B active / 400B total params, 128 experts, natively multimodal | Multimodal chat and assistant workloads | prev: llama-3.3-70b |
| Llama 4 Scout (`llama-4-scout`) | ga | 2025-04-05 | 10M | $0.08 | $0.30 | Mixture-of-Experts, 17B active / 109B total params, 16 experts, natively multimodal | Long-context multimodal tasks on single GPU | prev: llama-3.3-70b |
| Llama 3.3 70B Instruct (`llama-3.3-70b`) | ga | 2024-12-06 | 128K | — | — | Dense transformer, 70B parameters, instruction-tuned | Text-only general-purpose dense model deployment | prev: llama-3.1-70b → superseded by: llama-4-scout |
| Llama 4 Behemoth (`llama-4-behemoth`) | preview | — | — | — | — | Mixture-of-Experts, 288B active / ~2T total params, 16 experts, teacher model | Teacher model for distilling smaller Llama 4 variants | — |

## Microsoft

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Phi-4-Reasoning-Vision-15B (`phi-4-reasoning-vision-15b`) | ga | 2026-03-04 | 16K | — | — | Mid-fusion multimodal: Phi-4-Reasoning backbone + SigLIP-2 vision encoder, 15B parameters | Multimodal reasoning over charts, diagrams, GUIs | prev: phi-4-reasoning |
| Phi-4-mini-flash-reasoning (`phi-4-mini-flash-reasoning`) | ga | 2025-07-09 | 64K | — | — | SambaY decoder-hybrid-decoder (3.8B params) | Edge math reasoning with high throughput | prev: phi-4-mini-reasoning |
| Phi-4-reasoning (`phi-4-reasoning`) | ga | 2025-04-30 | 32K | — | — | Dense decoder-only Transformer, 14B parameters, fine-tuned from Phi-4 | Step-by-step reasoning on math and science | prev: phi-4 |
| Phi-4-reasoning-plus (`phi-4-reasoning-plus`) | ga | 2025-04-30 | 33K | — | — | Dense decoder-only transformer (14B, RoPE, MHA) | Open-weight math, science, code reasoning at 14B | prev: phi-4 → superseded by: phi-4-reasoning-vision-15b |
| Phi-4-mini (`phi-4-mini-instruct`) | ga | 2025-02-26 | 128K | — | — | Dense decoder-only Transformer with grouped-query attention, 3.8B parameters, 200K vocabulary | Efficient edge deployment with function calling | prev: phi-3.5-mini |
| Phi-4-multimodal (`phi-4-multimodal-instruct`) | ga | 2025-02-26 | 128K | — | — | Multimodal transformer with mixture-of-LoRAs integrating speech, vision, and text, 5.6B parameters | Unified text, vision, and audio understanding | — |
| Phi-4 (`phi-4`) | ga | 2024-12-12 | 16K | — | — | Dense decoder-only Transformer, 14B parameters | Complex reasoning on math and STEM tasks | prev: phi-3 |
| MAI-Image-2.5 (`mai-image-2.5`) | preview | 2026-05-26 | — | — | — | Diffusion-based text-to-image | High-quality text-to-image with sharp in-image text | prev: mai-image-2-efficient |
| MAI-Image-2-Efficient (`mai-image-2-efficient`) | preview | 2026-04-14 | 32K | $5.00 | $19.50 | Diffusion-based text-to-image | Cost-efficient high-throughput image generation | prev: mai-image-2 → superseded by: mai-image-2.5 |
| MAI-Transcribe-1 (`mai-transcribe-1`) | preview | 2026-04-02 | — | — | — | Bidirectional audio encoder with transformer text decoder | Multilingual speech-to-text transcription | — |
| MAI-1-preview (`mai-1-preview`) | preview | 2025-08-28 | — | — | — | Mixture-of-experts foundation model | Consumer instruction-following and everyday queries | — |
| MAI-Voice-1 (`mai-voice-1`) | preview | 2025-08-28 | — | $22.00 | — | Neural text-to-speech model | Expressive high-fidelity text-to-speech generation | — |

## Mistral

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Mistral Medium 3.5 (`mistral-medium-2604`) | ga | 2026-04-29 | 262K | $1.50 | $7.50 | Dense 128B parameters | Agentic coding and enterprise reasoning workflows | prev: mistral-medium-2508 |
| Mistral Small 4 (`mistral-small-2603`) | ga | 2026-03-16 | 262K | $0.15 | $0.60 | Sparse Mixture-of-Experts, 119B total / ~6B active (128 experts, 4 active) | Cost-efficient multimodal reasoning and coding | prev: mistral-small-2506 |
| Mistral Large 3 (`mistral-large-2512`) | ga | 2025-12-02 | 262K | $0.50 | $1.50 | Sparse Mixture-of-Experts, 41B active / 675B total parameters | Frontier open-weight general-purpose reasoning and agents | prev: mistral-large-2411 |
| Magistral Medium 1.2 (`magistral-medium-2509`) | ga | 2025-09-18 | 131K | $2.00 | $5.00 | Reasoning model with vision encoder | Enterprise multilingual chain-of-thought reasoning | prev: magistral-medium-2507 |
| Codestral 25.08 (`codestral-2508`) | ga | 2025-08-01 | 256K | $0.30 | $0.90 | Code-specialized transformer | Low-latency code completion and fill-in-the-middle | prev: codestral-2501 |

## Moonshot

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Kimi K2.6 (`kimi-k2.6`) | ga | 2026-04-20 | 262K | $0.95 | $4.00 | 1T-parameter MoE, 32B active per token, MoonViT 400M vision encoder, MLA attention | Agentic coding and long-horizon multi-agent workflows | prev: kimi-k2.5 |
| Kimi K2.5 (`kimi-k2.5`) | ga | 2026-01-27 | 262K | $0.60 | $2.50 | 1T-parameter MoE, 32B active, 61 layers (1 dense + 60 MoE), 384 experts, MLA attention with 64 heads | Cost-efficient multimodal agent and coding tasks | prev: kimi-k2-thinking → superseded by: kimi-k2.6 |
| Kimi K2 Thinking (`kimi-k2-thinking`) | deprecated | 2025-11-06 | 256K | $0.60 | $2.50 | 1T-parameter MoE, 32B active per token, post-trained on Kimi K2 base | Legacy reasoning agent with long tool-call chains | prev: kimi-k2-0905-preview → superseded by: kimi-k2.5 |

## NVIDIA

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Nemotron 3 Nano Omni 30B A3B Reasoning (`nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`) | ga | 2026-04-28 | 256K | — | — | Hybrid Mamba2-Transformer MoE (128 experts, 6 active + shared); 30B total / 3B active | Efficient multimodal agent reasoning on a single GPU | prev: nvidia/nvidia-nemotron-nano-9b-v2 |
| Nemotron 3 Super 120B A12B (`nvidia/nemotron-3-super-120b-a12b`) | ga | 2026-03-11 | 1M | — | — | Hybrid Mamba2-Transformer Latent MoE with Multi-Token Prediction; 120B total / 12B active | Multi-agent software, cybersecurity, long-context reasoning | prev: nvidia/llama-3.3-nemotron-super-49b-v1 |
| Nemotron Nano 9B v2 (`nvidia/nvidia-nemotron-nano-9b-v2`) | ga | 2025-09-05 | 131K | $0.04 | $0.16 | Hybrid Mamba-Transformer dense model | Edge and on-device reasoning and code generation | → superseded by: nvidia/nemotron-3-nano-30b-a3b |
| Nemotron 3 Ultra (`nvidia/nemotron-3-ultra-500b-a50b`) | preview | — | 1M | — | — | Hybrid Mamba2-Transformer Latent MoE; ~500B total / ~50B active | Flagship reasoning for complex agentic workflows | prev: nvidia/llama-3.1-nemotron-ultra-253b-v1 |
| Llama 3.1 Nemotron Ultra 253B v1 (`nvidia/llama-3.1-nemotron-ultra-253b-v1`) | deprecated | 2025-04-07 | 131K | $0.60 | $1.80 | Dense transformer derived from Llama 3.1 405B via Neural Architecture Search | Reasoning, RAG, and tool-calling on Llama base | → superseded by: nvidia/nemotron-3-super-120b-a12b |
| Llama 3.3 Nemotron Super 49B v1 (`nvidia/llama-3.3-nemotron-super-49b-v1`) | deprecated | 2025-03-18 | 131K | $0.10 | $0.40 | Dense transformer derived from Llama 3.3 70B Instruct via NAS | Mid-size reasoning, RAG, and tool calling | → superseded by: nvidia/nemotron-3-super-120b-a12b |

## OpenAI

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GPT-5.5 Instant (`gpt-5.5-instant`) | ga | 2026-05-05 | — | — | — | — | Default ChatGPT chat; fast everyday responses | prev: gpt-5.3-instant |
| GPT-5.5 (`gpt-5.5`) | ga | 2026-04-24 | 1M | $5.00 | $30.00 | — | Flagship coding, research, agentic workflows | prev: gpt-5.4 |
| GPT-5.5 Pro (`gpt-5.5-pro`) | ga | 2026-04-24 | 1M | $30.00 | $180.00 | — | Hardest reasoning, research, professional work | prev: gpt-5.4-pro |
| GPT-5.4 mini (`gpt-5.4-mini`) | ga | 2026-03-17 | 400K | $0.75 | $4.50 | — | Cost-efficient mid-tier coding and agents | prev: gpt-5-mini |
| GPT-5.4 nano (`gpt-5.4-nano`) | ga | 2026-03-17 | 400K | $0.20 | $1.25 | — | Cheapest classification, extraction, sub-agents | prev: gpt-5-nano |
| GPT-5.4 (`gpt-5.4`) | ga | 2026-03-05 | 1M | $2.50 | $15.00 | — | Balanced flagship coding and reasoning | prev: gpt-5.2 → superseded by: gpt-5.5 |
| GPT-5 (`gpt-5`) | ga | 2025-08-07 | 400K | $1.25 | $10.00 | — | General-purpose reasoning and multimodal tasks | prev: gpt-4o → superseded by: gpt-5.4 |

## Perplexity

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Sonar Deep Research (`sonar-deep-research`) | ga | 2025-03-07 | 128K | $2.00 | $8.00 | Multi-step agentic research pipeline over Sonar search stack | Exhaustive multi-step autonomous research reports | — |
| Sonar Pro (`sonar-pro`) | ga | 2025-03-07 | 200K | $3.00 | $15.00 | Perplexity proprietary search-augmented LLM (Llama-derived) | Complex multi-source grounded search queries | prev: sonar |
| Sonar (`sonar`) | ga | 2025-01-21 | 128K | $1.00 | $1.00 | Fine-tuned Llama 3.3 70B with proprietary retrieval pipeline | Fast factual lookups with live web search | — |
| Sonar Reasoning Pro (`sonar-reasoning-pro`) | ga | — | 128K | $2.00 | $8.00 | Powered by DeepSeek R1 with Perplexity search grounding | Analytical chain-of-thought reasoning with search | prev: sonar-reasoning |
| Sonar Reasoning (`sonar-reasoning`) | deprecated | — | 127K | $1.00 | $5.00 | Reasoning-tuned Sonar model with chain-of-thought over web search results | Chain-of-thought search-grounded reasoning | → superseded by: sonar-reasoning-pro |

## xAI

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Grok 4.3 (`grok-4.3`) | ga | 2026-04-30 | 1M | $1.25 | $2.50 | — | Cost-efficient frontier reasoning with video input | prev: grok-4.20 |
| Grok 4.20 (`grok-4.20`) | ga | 2026-03-10 | 2M | $2.00 | $6.00 | — | Prior-generation reasoning workloads still in production | prev: grok-4-0709 → superseded by: grok-4.3 |
| Grok Build 0.1 (`grok-build-0.1`) | preview | 2026-05-01 | 256K | $1.00 | $2.00 | — | Agentic coding and multi-step software engineering | prev: grok-code-fast-1 |
