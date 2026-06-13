# Frontier Production Model Catalog

_Last refreshed: 2026-06-13 by genai-model-catalog routine._

## Alibaba

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Qwen3.7-Plus (`qwen3.7-plus`) | ga | 2026-06-01 | 1M | $0.40 | $1.60 | Multimodal MoE with early-fusion vision-language training (parameters undisclosed) | Low-cost multimodal agent with vision and video | prev: qwen3-vl-plus |
| Qwen3.7-Max (`qwen3.7-max`) | ga | 2026-05-21 | 1M | $2.50 | $7.50 | Hybrid attention Mixture-of-Experts (~1.6T total parameters, active count undisclosed) | Flagship agentic reasoning and long-horizon coding | prev: qwen3-max |
| Qwen3-Coder-Next (`qwen3-coder-next`) | ga | 2026-02-04 | 262.1K | $0.11 | $0.80 | Sparse MoE (80B total, 3B active) | Open-weight agentic coding for local development | prev: qwen3-coder-flash |
| Qwen3-Coder-Plus (`qwen3-coder-plus`) | ga | 2025-09-23 | 1M | $1.00 | $5.00 | Sparse MoE (480B total, 35B active, 160 experts with 8 routed) | Repository-scale agentic coding with 1M context | prev: qwen2.5-coder |
| Qwen3-VL-Plus (`qwen3-vl-plus`) | ga | 2025-09-23 | 262.1K | $0.20 | $1.60 | Vision-language MoE (235B-A22B and dense 2B/4B/8B/32B variants) | Affordable multimodal understanding across image and video | prev: qwen2.5-vl → superseded by: qwen3.7-plus |
| Qwen3-235B-A22B-Thinking-2507 (`qwen3-235b-a22b-thinking-2507`) | ga | 2025-07-25 | 262.1K | $0.70 | $8.40 | Mixture-of-Experts (235B total, 22B activated) | Open-weights frontier reasoning and math/code | prev: qwen3-235b-a22b |
| Qwen3-Max (`qwen3-max`) | deprecated | 2025-09-23 | 262.1K | $0.78 | $3.90 | Dense and MoE hybrid (details undisclosed) | Prior-generation flagship reasoning (succeeded by 3.7-Max) | prev: qwen2.5-max → superseded by: qwen3.7-max |

## Amazon

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Amazon Nova 2 Lite (`amazon.nova-2-lite-v1:0`) | ga | 2025-12-02 | 1M | $0.30 | $2.50 | Multimodal reasoning transformer with adjustable extended thinking | Fast cost-effective multimodal reasoning at scale | prev: amazon.nova-lite-v1:0 |
| Amazon Nova 2 Sonic (`amazon.nova-2-sonic-v1:0`) | ga | 2025-12-02 | 1M | $3.00 | $12.00 | Unified speech-to-speech transformer with bidirectional streaming | Real-time conversational speech-to-speech AI | prev: amazon.nova-sonic-v1:0 |
| Amazon Nova 2 Pro (Preview) (`amazon.nova-2-pro-preview-20251202-v1:0`) | preview | 2025-12-02 | 1M | $2.19 | $17.50 | Multimodal reasoning transformer with adjustable reasoning effort (low/medium/high) | Complex agentic coding and long-range planning | prev: amazon.nova-pro-v1:0 |
| Amazon Nova Premier (`amazon.nova-premier-v1:0`) | deprecated | 2025-04-30 | 1M | $2.50 | $12.50 | Multimodal transformer | Legacy flagship multimodal teacher model | prev: amazon.nova-pro-v1:0 → superseded by: amazon.nova-2-pro-preview-20251202-v1:0 |
| Amazon Nova Lite (`amazon.nova-lite-v1:0`) | deprecated | 2024-12-05 | 300K | $0.06 | $0.24 | Transformer-based multimodal foundation model | Low-cost multimodal high-volume processing | superseded by: amazon.nova-2-lite-v1:0 |
| Amazon Nova Micro (`amazon.nova-micro-v1:0`) | deprecated | 2024-12-05 | 128K | $0.04 | $0.14 | Text-only transformer | Legacy ultra-low-cost text-only tasks | superseded by: amazon.nova-2-lite-v1:0 |
| Amazon Nova Pro (`amazon.nova-pro-v1:0`) | deprecated | 2024-12-05 | 300K | $0.80 | $3.20 | Multimodal transformer | Legacy multimodal text generation balanced workload | superseded by: amazon.nova-2-pro-preview-20251202-v1:0 |

## Anthropic

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Claude Fable 5 (`claude-fable-5`) | ga | 2026-06-09 | 1M | $10.00 | $50.00 | — | Most capable widely-released model for demanding work | prev: claude-opus-4-8 |
| Claude Opus 4.8 (`claude-opus-4-8`) | ga | 2026-05-28 | 1M | $5.00 | $25.00 | — | Complex reasoning and long-horizon agentic coding | prev: claude-opus-4-7 |
| Claude Opus 4.7 (`claude-opus-4-7`) | ga | 2026-04-16 | 1M | $5.00 | $25.00 | — | Agentic coding and multi-tool orchestration | prev: claude-opus-4-6 → superseded by: claude-opus-4-8 |
| Claude Sonnet 4.6 (`claude-sonnet-4-6`) | ga | 2026-02-17 | 1M | $3.00 | $15.00 | — | Balanced speed and intelligence for production workloads | prev: claude-sonnet-4-5 |
| Claude Opus 4.6 (`claude-opus-4-6`) | ga | 2026-02-05 | 1M | $5.00 | $25.00 | — | Established Opus production workloads | prev: claude-opus-4-5 → superseded by: claude-opus-4-8 |
| Claude Haiku 4.5 (`claude-haiku-4-5`) | ga | 2025-10-15 | 200K | $1.00 | $5.00 | — | Fast, low-cost inference and high-volume agents | prev: claude-haiku-3-5 |
| Claude Mythos 5 (`claude-mythos-5`) | preview | 2026-06-09 | 1M | $10.00 | $50.00 | — | Approved Project Glasswing cybersecurity workflows | prev: claude-mythos-preview |

## Cohere

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| North Mini Code 1.0 (`north-mini-code-1.0`) | ga | 2026-06-09 | 262.1K | — | — | Sparse Mixture-of-Experts — 30B total / 3B active | Open-weights agentic coding on a single H100 | — |
| Command A+ (`command-a-plus-05-2026`) | ga | 2026-05-20 | 128K | $2.50 | $10.00 | Decoder-only Sparse Mixture-of-Experts Transformer (128 experts, 8 active per token, 25B active / 218B total params) | Flagship open-weight multimodal agentic enterprise workflows | prev: command-a-reasoning-08-2025 |
| Command A Reasoning (`command-a-reasoning-08-2025`) | ga | 2025-08-21 | 256K | $2.50 | $10.00 | Dense decoder-only transformer, 111B parameters with reasoning toggle | Multi-step enterprise reasoning and deep research | prev: command-a-03-2025 → superseded by: command-a-plus-05-2026 |
| Command A Vision (`command-a-vision-07-2025`) | ga | 2025-07-31 | 128K | $2.50 | $10.00 | 112B-parameter multimodal transformer based on Command A | Enterprise document, chart, and OCR analysis | prev: command-a-03-2025 → superseded by: command-a-plus-05-2026 |
| Command A (`command-a-03-2025`) | ga | 2025-03-13 | 256K | $2.50 | $10.00 | Dense decoder-only transformer, 111B parameters | Enterprise RAG, tool use, and agentic tasks at 256K context | prev: command-r-plus-08-2024 → superseded by: command-a-plus-05-2026 |
| Command R7B (`command-r7b-12-2024`) | ga | 2024-12-13 | 128K | $0.04 | $0.15 | Dense decoder-only transformer, 7B parameters | Small, fast, low-cost RAG and tool-use workloads | — |
| Command R+ (08-2024) (`command-r-plus-08-2024`) | deprecated | 2024-08-30 | 128K | $2.50 | $10.00 | Dense decoder-only transformer, 104B parameters | Legacy enterprise RAG and tool-use workloads | prev: command-r-plus-04-2024 → superseded by: command-a-03-2025 |

## DeepSeek

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DeepSeek V4 Flash (`deepseek-v4-flash`) | ga | 2026-04-24 | 1M | $0.14 | $0.28 | Sparse MoE — 284B total / 13B active, hybrid CSA/HCA attention with mHC residuals | Cost-efficient high-volume chat, coding, and agents | prev: deepseek-v3.2 |
| DeepSeek V4 Pro (`deepseek-v4-pro`) | ga | 2026-04-24 | 1M | $0.43 | $0.87 | Sparse MoE — 1.6T total / 49B active, 384 routed + 1 shared expert, 61 layers, hybrid CSA/HCA attention | Frontier reasoning, agentic coding, complex SWE tasks | prev: deepseek-v3.2 |
| DeepSeek Chat (V4-Flash non-thinking alias) (`deepseek-chat`) | deprecated | 2025-12-01 | 1M | $0.14 | $0.28 | Alias routing to deepseek-v4-flash (Sparse MoE — 284B total / 13B active) | Legacy compatibility for non-thinking chat | prev: deepseek-v3.2 → superseded by: deepseek-v4-flash |
| DeepSeek Reasoner (V4-Flash thinking alias) (`deepseek-reasoner`) | deprecated | 2025-12-01 | 1M | $0.14 | $0.28 | Alias routing to deepseek-v4-flash thinking mode (Sparse MoE — 284B total / 13B active) | Legacy compatibility for thinking-mode reasoning | prev: deepseek-r1 → superseded by: deepseek-v4-pro |

## Google

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Gemini 3.5 Flash (`gemini-3.5-flash`) | ga | 2026-05-19 | 1.0M | $1.50 | $9.00 | Sparse mixture-of-experts transformer | Frontier agents and coding at Flash speed | prev: gemini-2.5-flash |
| Gemini 3.1 Flash-Lite (`gemini-3.1-flash-lite`) | ga | 2026-05-07 | 1.0M | $0.25 | $1.50 | Distilled sparse mixture-of-experts | Cost-efficient high-volume multimodal tasks | prev: gemini-2.5-flash-lite |
| Gemini 3.5 Pro (`gemini-3.5-pro-preview`) | preview | 2026-05-19 | 2.1M | — | — | — | Frontier reasoning and deep multimodal understanding | prev: gemini-3.1-pro-preview |
| Gemini Omni Flash (`gemini-omni-flash`) | preview | 2026-05-19 | — | — | — | Transformer with native multimodal text/vision/video/audio inputs, trained on TPUs | Any-to-video generative editing and creation | — |
| Gemini 3.1 Pro (`gemini-3.1-pro-preview`) | preview | 2026-02-19 | 1.0M | $2.00 | $12.00 | Sparse mixture-of-experts transformer with thinking | Deep reasoning, long-context, agentic coding | prev: gemini-3-pro-preview |
| Gemini 3.1 Flash Lite (`gemini-3.1-flash-lite-preview`) | deprecated | 2026-03-03 | 1.0M | $0.25 | $1.50 | Distilled sparse mixture-of-experts | Highest-volume, cost-sensitive multimodal tasks | prev: gemini-2.5-flash-lite → superseded by: gemini-3.1-flash-lite |
| Gemini 2.5 Flash-Lite (`gemini-2.5-flash-lite`) | deprecated | 2025-07-22 | 1.0M | $0.10 | $0.40 | Distilled sparse mixture-of-experts | Highest-volume, lowest-latency batch workloads | prev: gemini-2.0-flash-lite → superseded by: gemini-3.1-flash-lite-preview |
| Gemini 2.5 Flash (`gemini-2.5-flash`) | deprecated | 2025-06-17 | 1.0M | $0.30 | $2.50 | Sparse mixture-of-experts transformer | Legacy low-cost multimodal Flash workloads | prev: gemini-1.5-flash → superseded by: gemini-3.5-flash |
| Gemini 2.5 Pro (`gemini-2.5-pro`) | deprecated | 2025-06-17 | 1.0M | $1.25 | $10.00 | Sparse mixture-of-experts transformer | Legacy long-context reasoning workloads | prev: gemini-1.5-pro → superseded by: gemini-3.1-pro-preview |

## Meta

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Llama 4 Maverick (`llama-4-maverick`) | ga | 2025-04-05 | 1.0M | $0.15 | $0.60 | Mixture-of-Experts (400B total, 17B active, 128 routed + 1 shared expert) | High-quality multimodal chat and reasoning | prev: llama-3.3-70b |
| Llama 4 Scout (`llama-4-scout`) | ga | 2025-04-05 | 10M | $0.08 | $0.30 | Mixture-of-Experts (109B total, 17B active, 16 experts) | Long-context multimodal tasks on single GPU | prev: llama-3.3-70b |
| Llama 3.3 70B Instruct (`llama-3.3-70b`) | ga | 2024-12-06 | 128K | $0.23 | $0.40 | Dense transformer with Grouped-Query Attention (70B parameters) | Efficient open-weight multilingual text generation | prev: llama-3.1-70b → superseded by: llama-4-scout |
| Muse Spark (`muse-spark`) | preview | 2026-04-08 | 1M | — | — | — | Meta's frontier proprietary reasoning model | — |
| Llama 4 Behemoth (`llama-4-behemoth`) | preview | — | — | — | — | Mixture-of-Experts (~2T total, 288B active, 16 experts) | Teacher model for Scout and Maverick codistillation | — |

## Microsoft

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Phi-4-reasoning-vision-15B (`phi-4-reasoning-vision-15b`) | ga | 2026-03-04 | 16.4K | — | — | Dense decoder-only transformer with vision encoder | Open multimodal reasoning at compact size | prev: phi-4-reasoning |
| Phi-4-mini-flash-reasoning (`phi-4-mini-flash-reasoning`) | ga | 2025-07-09 | 64K | — | — | SambaY decoder-hybrid-decoder (3.8B params) | Edge math reasoning with high throughput | prev: phi-4-mini-reasoning |
| Phi-4-reasoning (`phi-4-reasoning`) | ga | 2025-04-30 | 32K | — | — | Dense decoder-only Transformer, 14B parameters, fine-tuned from Phi-4 | Step-by-step reasoning on math and science | prev: phi-4 |
| Phi-4-reasoning-plus (`phi-4-reasoning-plus`) | ga | 2025-04-30 | 32.8K | — | — | Dense decoder-only transformer | Open-weight reasoning for math and science | prev: phi-4 → superseded by: phi-4-reasoning-vision-15b |
| Phi-4-mini (`phi-4-mini-instruct`) | ga | 2025-02-26 | 128K | $0.07 | $0.23 | Dense decoder-only transformer | Lightweight on-device and edge deployment | prev: phi-3.5-mini |
| Phi-4-multimodal (`phi-4-multimodal-instruct`) | ga | 2025-02-26 | 131.1K | $0.05 | $0.10 | Dense decoder-only transformer with mixture-of-LoRAs | Compact unified text, vision, and speech model | — |
| Phi-4 (`phi-4`) | ga | 2024-12-12 | 16.4K | $0.07 | $0.14 | Dense decoder-only transformer | Cost-efficient small language model for general tasks | prev: phi-3.5 |
| MAI-Code-1-Flash (`mai-code-1-flash`) | preview | 2026-06-02 | 256K | $0.75 | $4.50 | Sparse Mixture-of-Experts transformer (~137B total / 5B active params) | Fast, low-cost coding inside Copilot and Foundry | — |
| MAI-Thinking-1 (`mai-thinking-1`) | preview | 2026-06-02 | 256K | — | — | Sparse Mixture-of-Experts transformer (~35B active / ~1T total params) | Advanced reasoning, math, and coding at lower cost | prev: mai-1-preview |
| MAI-Transcribe-1.5 (`mai-transcribe-1.5`) | preview | 2026-06-02 | — | — | — | Bidirectional audio encoder with transformer text decoder | Multilingual enterprise transcription | prev: mai-transcribe-1 |
| MAI-Voice-2 (`mai-voice-2`) | preview | 2026-06-02 | — | $22.00 | — | Neural text-to-speech model | Multilingual text-to-speech with voice cloning | prev: mai-voice-1 |
| MAI-Image-2.5 (`mai-image-2.5`) | preview | 2026-05-26 | — | $5.00 | $47.00 | Diffusion-based text-to-image | High-fidelity image generation and editing | prev: mai-image-2 |
| MAI-Image-2.5-Flash (`mai-image-2.5-flash`) | preview | 2026-05-26 | — | $1.75 | $19.50 | Diffusion-based text-to-image | Fast cost-efficient text-to-image generation and editing | prev: mai-image-2.5 |
| MAI-Image-2-Efficient (`mai-image-2-efficient`) | preview | 2026-04-14 | 32K | $5.00 | $19.50 | Diffusion-based text-to-image | Cost-efficient high-throughput image generation | prev: mai-image-2 → superseded by: mai-image-2.5 |
| MAI-Image-2 (`mai-image-2`) | preview | 2026-04-02 | 32K | $5.00 | $33.00 | Diffusion-based text-to-image | High-quality text-to-image generation | superseded by: mai-image-2-efficient |
| MAI-Transcribe-1 (`mai-transcribe-1`) | preview | 2026-04-02 | — | — | — | Bidirectional audio encoder with transformer text decoder | Multilingual speech-to-text transcription | superseded by: mai-transcribe-1.5 |
| MAI-1-preview (`mai-1-preview`) | preview | 2025-08-28 | — | — | — | Mixture-of-experts foundation model | Microsoft's first in-house foundation text model | — |
| MAI-Voice-1 (`mai-voice-1`) | preview | 2025-08-28 | — | $22.00 | — | Neural text-to-speech model | Expressive high-fidelity text-to-speech generation | superseded by: mai-voice-2 |

## Mistral

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Mistral Medium 3.5 (`mistral-medium-2604`) | ga | 2026-04-28 | 262.1K | $1.50 | $7.50 | Dense 128B parameter transformer with retrained vision encoder | Agentic, coding, and complex multi-step reasoning workloads | prev: mistral-medium-2508 |
| Mistral Small 4 (`mistral-small-2603`) | ga | 2026-03-16 | 262.1K | $0.15 | $0.60 | Mixture-of-Experts, 119B total / 6.5B active parameters (128 experts, 4 active) | Low-cost hybrid reasoning, vision, and coding workloads | prev: mistral-small-2506 |
| Mistral Large 3 (`mistral-large-2512`) | ga | 2025-12-02 | 262.1K | $0.50 | $1.50 | Granular Mixture-of-Experts, 675B total / 41B active parameters | Frontier open-weight multimodal reasoning and agentic tasks | prev: mistral-large-2411 |
| Magistral Medium 1.2 (`magistral-medium-2509`) | ga | 2025-09-18 | 131.1K | $2.00 | $5.00 | Reasoning model trained via reinforcement learning on Mistral Medium 3 | Math and code reasoning with image input support | prev: magistral-medium-2507 → superseded by: mistral-medium-2604 |
| Codestral 25.08 (`codestral-2508`) | ga | 2025-08-01 | 256K | $0.30 | $0.90 | Code-specialized dense transformer | Low-latency code completion, fill-in-the-middle, and tests | prev: codestral-2501 |

## Moonshot

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Kimi K2.7 Code (`kimi-k2.7-code`) | ga | 2026-06-12 | 262.1K | $0.95 | $4.00 | Sparse MoE — 1T total / 32B active (same as K2.5/K2.6) | Coding-focused agentic workflows with long-horizon task completion | prev: kimi-k2.6 |
| Kimi K2.6 (`kimi-k2.6`) | ga | 2026-04-20 | 262.1K | $0.95 | $4.00 | Sparse MoE — 1T total / 32B active | Open-weight agentic coding and tool use | prev: kimi-k2.5 → superseded by: kimi-k2.7-code |
| Kimi K2.5 (`kimi-k2.5`) | ga | 2026-01-27 | 262.1K | $0.60 | $3.00 | Sparse MoE — 1T total / 32B active | Cost-efficient open-weight multimodal agent | prev: kimi-k2-thinking → superseded by: kimi-k2.6 |
| Kimi K2 Thinking (`kimi-k2-thinking`) | deprecated | 2025-11-06 | 256K | $0.60 | $2.50 | Sparse MoE — 1T total / 32B active | Legacy text-only reasoning workloads | prev: kimi-k2-0905-preview → superseded by: kimi-k2.5 |

## NVIDIA

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Nemotron 3 Ultra (`nvidia/nemotron-3-ultra-550b-a55b`) | ga | 2026-06-04 | 1M | $0.50 | $2.50 | Hybrid Mamba-Transformer Mixture-of-Experts (LatentMoE) | Long-running agentic reasoning and orchestration at frontier scale | prev: nvidia/llama-3.1-nemotron-ultra-253b-v1 |
| Nemotron 3.5 ASR Streaming Multilingual (`nvidia/nemotron-3.5-asr-streaming-0.6b`) | ga | 2026-06-04 | — | — | — | Cache-Aware FastConformer-RNNT, 600M parameters | Low-latency multilingual streaming speech recognition | — |
| Nemotron 3.5 Content Safety (`nvidia/nemotron-3.5-content-safety`) | ga | 2026-06-04 | 128K | $0.00 | $0.00 | Gemma 3 4B IT fine-tuned for multimodal safety reasoning | Multimodal multilingual content safety moderation | — |
| Nemotron 3 Nano Omni 30B A3B Reasoning (`nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`) | ga | 2026-04-28 | 256K | $0.07 | $0.30 | Hybrid Mamba-Transformer MoE multimodal (30B total, 3B active) | Unified multimodal agentic perception across documents, audio and video | prev: nvidia/nvidia-nemotron-nano-9b-v2 |
| Nemotron 3 Nano 4B (`nvidia/nemotron-3-nano-4b`) | ga | 2026-03-16 | 262.1K | — | — | Hybrid Mamba-2 + MLP with 4 Attention layers (dense, compressed from Nano 9B v2) | Edge and on-device agentic AI (Jetson, DGX Spark, RTX) including gaming NPCs and local voice assistants | prev: nvidia/nvidia-nemotron-nano-9b-v2 |
| Nemotron 3 Nano 30B A3B (`nvidia/nemotron-3-nano-30b-a3b`) | ga | 2026-03-11 | 1M | $0.05 | $0.20 | Hybrid Mamba-Transformer MoE (128 experts, top-6 routing) | Efficient high-volume agentic reasoning | prev: nvidia/nvidia-nemotron-nano-9b-v2 |
| Nemotron 3 Super 120B A12B (`nvidia/nemotron-3-super-120b-a12b`) | ga | 2026-03-11 | 1M | $0.10 | $0.50 | Hybrid Mamba-Transformer MoE with LatentMoE | Mid-tier agentic reasoning, coding, planning | prev: nvidia/llama-3.3-nemotron-super-49b-v1 |
| Nemotron Nano 9B v2 (`nvidia/nvidia-nemotron-nano-9b-v2`) | ga | 2025-09-05 | 131.1K | $0.04 | $0.16 | Hybrid Mamba-Transformer dense model | Edge and on-device reasoning and code generation | superseded by: nvidia/nemotron-3-nano-4b |
| Llama 3.1 Nemotron Ultra 253B v1 (`nvidia/llama-3.1-nemotron-ultra-253b-v1`) | deprecated | 2025-04-07 | 131.1K | $0.60 | $1.80 | Dense transformer (Llama 3.1 base, NAS-pruned) | Legacy Llama-based Nemotron reasoning | superseded by: nvidia/nemotron-3-ultra-550b-a55b |
| Llama 3.3 Nemotron Super 49B v1 (`nvidia/llama-3.3-nemotron-super-49b-v1`) | deprecated | 2025-03-18 | 131.1K | $0.10 | $0.40 | Dense transformer (Llama 3.3 base, NAS-pruned) | Legacy mid-tier Nemotron reasoning | superseded by: nvidia/nemotron-3-super-120b-a12b |

## OpenAI

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GPT-5.5 Instant (`gpt-5.5-instant`) | ga | 2026-05-05 | 1M | $5.00 | $30.00 | — | Fast default chat for ChatGPT-style workloads | prev: gpt-5.3-instant |
| GPT-5.5 Pro (`gpt-5.5-pro`) | ga | 2026-04-24 | 1.1M | $30.00 | $180.00 | — | Highest-stakes reasoning and expert engineering | prev: gpt-5.4-pro |
| GPT-5.5 (`gpt-5.5`) | ga | 2026-04-23 | 1M | $5.00 | $30.00 | — | Agentic coding and complex reasoning | prev: gpt-5.4 |
| GPT-5.4 mini (`gpt-5.4-mini`) | ga | 2026-03-17 | 400K | $0.75 | $4.50 | — | Cost-effective coding and agentic subagent tasks | prev: gpt-5-mini |
| GPT-5.4 nano (`gpt-5.4-nano`) | ga | 2026-03-17 | 400K | $0.20 | $1.25 | — | Classification, extraction, and high-volume subagents | prev: gpt-5-nano |
| GPT-5.4 (`gpt-5.4`) | ga | 2026-03-05 | 1.1M | $2.50 | $15.00 | — | Balanced flagship coding and reasoning | prev: gpt-5.2 → superseded by: gpt-5.5 |
| GPT-5 (`gpt-5`) | ga | 2025-08-07 | 400K | $1.25 | $10.00 | — | General-purpose reasoning and multimodal tasks | prev: gpt-4o → superseded by: gpt-5.4 |
| gpt-oss-120b (`gpt-oss-120b`) | ga | 2025-08-05 | 131.1K | — | — | Mixture-of-Experts (128 experts, 4 active per token; 5.1B active / 117B total params) | Open-weight reasoning deployment on single GPU | — |

## Perplexity

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Sonar Pro Search (`sonar-pro-search`) | ga | 2025-10-30 | 200K | $3.00 | $15.00 | Search-grounded agentic LLM with multi-step tool use | Agentic multi-step search with tool use | prev: sonar-pro |
| Sonar Pro (`sonar-pro`) | ga | 2025-03-07 | 200K | $3.00 | $15.00 | Perplexity proprietary search-augmented LLM (Llama-derived) | Complex multi-step grounded research queries | prev: sonar |
| Sonar Reasoning Pro (`sonar-reasoning-pro`) | ga | 2025-03-07 | 128K | $2.00 | $8.00 | Powered by DeepSeek R1 with chain-of-thought | Chain-of-thought reasoning over live web | prev: sonar-reasoning |
| Sonar Deep Research (`sonar-deep-research`) | ga | 2025-02-14 | 128K | $2.00 | $8.00 | Multi-step agentic research pipeline over Sonar search stack | Long-form autonomous multi-source research reports | — |
| Sonar (`sonar`) | ga | 2025-01-27 | 128K | $1.00 | $1.00 | Built on Llama 3.3 70B (fine-tuned by Perplexity) | Lightweight grounded web search Q&A | — |
| Sonar Reasoning (`sonar-reasoning`) | deprecated | 2025-01-21 | 127K | $1.00 | $5.00 | Reasoning-tuned Sonar model with chain-of-thought over web search results | Legacy real-time reasoning with web search | superseded by: sonar-reasoning-pro |

## xAI

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Grok 4.3 (`grok-4.3`) | ga | 2026-04-30 | 1M | $1.25 | $2.50 | Pre-trained model at Grok 4.20 scale with improved architecture, December 2025 knowledge cutoff | Flagship reasoning and agentic workflows | prev: grok-4.20 |
| Grok Voice Think Fast 1.0 (`grok-voice-think-fast-1.0`) | ga | 2026-04-23 | — | — | — | Voice-native model with background reasoning for real-time conversation | Full-duplex voice agents for customer support, sales, and enterprise workflows | — |
| Grok Build 0.1 (`grok-build-0.1`) | preview | 2026-05-20 | 256K | $1.00 | $2.00 | Coding-specialized model with always-on reasoning | Agentic software engineering and coding tasks | prev: grok-code-fast-1 |
| Grok 4.20 Multi-Agent Beta (`grok-4.20-multi-agent-beta-0309`) | preview | 2026-03-09 | 2M | $2.00 | $6.00 | Four-agent collaborative architecture (Grok, Harper, Benjamin, Lucas) | Collaborative multi-agent reasoning tasks | prev: grok-4.20 |
| Grok 4.20 (`grok-4.20`) | deprecated | 2026-03-10 | 2M | $2.00 | $6.00 | Multi-variant LLM with reasoning, non-reasoning, and multi-agent modes | Long-context reasoning over 2M tokens | prev: grok-4-0709 → superseded by: grok-4.3 |
| Grok 4.1 Fast (`grok-4-1-fast`) | deprecated | 2025-11-19 | 2M | $0.20 | $0.50 | Compact fast variant of Grok 4.1 | Low-cost high-throughput inference | prev: grok-3-mini → superseded by: grok-4.3 |
