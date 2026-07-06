# Frontier Production Model Catalog

_Last refreshed: 2026-07-06 by genai-model-catalog routine._

## Alibaba

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Qwen3.7-Plus (`qwen3.7-plus`) | ga | 2026-06-01 | 1M | $0.40 | $1.60 | MoE hybrid attention with vision encoder | Balanced multimodal agent with screens and code | prev: `qwen3.6-plus` |
| Qwen3.7-Max (`qwen3.7-max`) | ga | 2026-05-19 | 1M | $2.50 | $7.50 | MoE ~1.6T total parameters | Flagship agentic reasoning and long-horizon workflows | prev: `qwen3-max` |
| Qwen-Flash (`qwen-flash`) | ga | 2026-04-27 | 1M | $0.05 | $0.40 | Hybrid linear attention with sparse MoE | Low-cost high-throughput classification and Q&A | prev: `qwen-turbo` |
| Qwen3.6-Flash (`qwen3.6-flash`) | ga | 2026-04-27 | 1M | $0.19 | $1.13 | Multimodal Mixture-of-Experts (35B total / 3B active for open-weight variant) | Ultra-low-latency multimodal workloads at scale | prev: `qwen3.5-flash` |
| Qwen3.5-Omni-Plus (`qwen3.5-omni-plus`) | ga | 2026-04-22 | 262.1K | $0.40 | $4.80 | Hybrid-Attention Mixture-of-Experts (30B total, 3B active) | Native omni-modal understanding and speech output | prev: `qwen3-omni` |
| Qwen3.5-Omni-Flash (`qwen3.5-omni-flash`) | ga | 2026-03-30 | 262.1K | $0.10 | $0.80 | Thinker-Talker MoE 30B total / 3B active with Hybrid-Attention | Real-time omni-modal input with speech output | prev: `qwen3-omni-30b-a3b` |
| Qwen3-Coder-Next (`qwen3-coder-next`) | ga | 2026-02-04 | 262.1K | $0.11 | $0.80 | Sparse MoE (80B total / 3B active, 512 experts with 10 routed + 1 shared) bui... | Open-weight agentic coding for local development | prev: `qwen3-coder-flash` |
| Qwen3-Coder-Plus (`qwen3-coder-plus`) | ga | 2025-09-23 | 1M | $1.00 | $5.00 | MoE 480B total / 35B active (Qwen3-Coder-480B-A35B) | Agentic coding and repository-scale refactors | prev: `qwen-coder-plus` |
| Qwen3-Max (`qwen3-max`) | ga | 2025-09-23 | 262.1K | $0.78 | $3.90 | Dense and MoE hybrid (details undisclosed) | Prior-generation flagship reasoning (still GA, superseded by 3.7-Max) | prev: `qwen2.5-max` → superseded by: `qwen3.7-max` |
| Qwen3-VL-Plus (`qwen3-vl-plus`) | ga | 2025-09-23 | 262.1K | $0.20 | $1.60 | MoE 235B total / 22B active with Interleaved-MRoPE and DeepStack | Document, chart, and GUI visual understanding | prev: `qwen-vl-plus` → superseded by: `qwen3.7-plus` |
| Qwen3-235B-A22B-Thinking-2507 (`qwen3-235b-a22b-thinking-2507`) | ga | 2025-07-25 | 262.1K | $0.70 | $8.40 | Mixture-of-Experts (235B total / 22B active parameters) | Open-weights frontier reasoning and math/code | prev: `qwen3-235b-a22b` |

## Amazon

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Nova 2 Lite (`amazon.nova-2-lite-v1:0`) | ga | 2025-12-02 | 1M | $0.30 | $2.50 | Multimodal reasoning transformer with extended thinking | Fast cost-effective reasoning at scale | prev: `amazon.nova-lite-v1:0` |
| Nova 2 Sonic (`amazon.nova-2-sonic-v1:0`) | ga | 2025-12-02 | 1M | $0.33 | $2.75 | End-to-end speech-to-speech foundation model | Real-time speech-to-speech conversational AI | prev: `amazon.nova-sonic-v1:0` |
| Nova Premier (`amazon.nova-premier-v1:0`) | ga | 2025-04-30 | 1M | $2.50 | $12.50 | Multimodal dense transformer | Complex reasoning and model distillation teacher | prev: `amazon.nova-pro-v1:0` → superseded by: `amazon.nova-2-pro-preview-20251202-v1:0` |
| Nova Micro (`amazon.nova-micro-v1:0`) | ga | 2024-12-03 | 128K | $0.04 | $0.14 | Text-only dense transformer | Ultra-low-latency and lowest-cost text tasks | superseded by: `amazon.nova-2-lite-v1:0` |
| Nova Pro (`amazon.nova-pro-v1:0`) | ga | 2024-12-03 | 300K | $0.80 | $3.20 | Multimodal dense transformer | Balanced multimodal workhorse for enterprise apps | superseded by: `amazon.nova-2-pro-preview-20251202-v1:0` |
| Amazon Nova 2 Omni (Preview) (`amazon.nova-2-omni-preview-20251202-v1:0`) | preview | 2025-12-02 | 1M | $0.30 | $2.50 | Unified multimodal reasoning and generation transformer | Unified multimodal reasoning with image generation | — |
| Nova 2 Pro (`amazon.nova-2-pro-preview-20251202-v1:0`) | preview | 2025-12-02 | 1M | $2.19 | $17.50 | Multimodal reasoning transformer with extended thinking | Complex multi-step agentic tasks and reasoning | prev: `amazon.nova-pro-v1:0` |
| Amazon Nova Lite (`amazon.nova-lite-v1:0`) | deprecated | 2024-12-05 | 300K | $0.06 | $0.24 | Transformer-based multimodal foundation model | Low-cost multimodal high-volume processing | superseded by: `amazon.nova-2-lite-v1:0` |

## Anthropic

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Claude Sonnet 5 (`claude-sonnet-5`) | ga | 2026-06-30 | 1M | $2.00 | $10.00 | — | Best combination of speed and intelligence | prev: `claude-sonnet-4-6` |
| Claude Fable 5 (`claude-fable-5`) | ga | 2026-06-09 | 1M | $10.00 | $50.00 | — | Next-gen intelligence for long-running agents | prev: `claude-opus-4-8` |
| Claude Opus 4.8 (`claude-opus-4-8`) | ga | 2026-05-28 | 1M | $5.00 | $25.00 | — | Complex agentic coding and enterprise work | prev: `claude-opus-4-7` → superseded by: `claude-fable-5` |
| Claude Opus 4.7 (`claude-opus-4-7`) | ga | 2026-04-16 | 1M | $5.00 | $25.00 | — | Agentic coding and multi-tool orchestration | prev: `claude-opus-4-6` → superseded by: `claude-opus-4-8` |
| Claude Sonnet 4.6 (`claude-sonnet-4-6`) | ga | 2026-02-17 | 1M | $3.00 | $15.00 | — | Balanced speed and intelligence for production workloads | prev: `claude-sonnet-4-5` → superseded by: `claude-sonnet-5` |
| Claude Opus 4.6 (`claude-opus-4-6`) | ga | 2026-02-05 | 1M | $5.00 | $25.00 | — | Established Opus production workloads | prev: `claude-opus-4-5` → superseded by: `claude-opus-4-8` |
| Claude Haiku 4.5 (`claude-haiku-4-5`) | ga | 2025-10-01 | 200K | $1.00 | $5.00 | — | Fastest model with near-frontier intelligence | prev: `claude-haiku-3-5` |
| Claude Mythos 5 (`claude-mythos-5`) | preview | 2026-06-09 | 1M | $10.00 | $50.00 | — | Defensive cybersecurity workflows (Project Glasswing) | prev: `claude-mythos-preview` |

## Cohere

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| North Mini Code (`north-mini-code-1.0`) | ga | 2026-06-09 | 256K | $0.00 | $0.00 | Sparse Mixture-of-Experts, 3B active / 30B total parameters | Local and terminal-based agentic coding | — |
| Command A+ (`command-a-plus-05-2026`) | ga | 2026-05-20 | 128K | $2.50 | $10.00 | Sparse Mixture-of-Experts, 25B active / 218B total parameters | Sovereign agentic workflows with vision and multilingual | prev: `command-a-03-2025` |
| Cohere Transcribe (`cohere-transcribe-03-2026`) | ga | 2026-03-26 | — | — | — | 2B encoder-decoder cross-attention transformer with Fast-Conformer encoder (>... | Real-time enterprise speech-to-text and meetings | — |
| Command A Translate (`command-a-translate-08-2025`) | ga | 2025-08-28 | 16K | — | — | Dense 111B-parameter transformer fine-tuned for translation | Private, secure enterprise translation across 23 languages | prev: `command-a-03-2025` |
| Command A Reasoning (`command-a-reasoning-08-2025`) | ga | 2025-08-21 | 256K | $2.50 | $10.00 | Dense 111B-parameter transformer with reasoning post-training | Enterprise multi-step research and agentic workflows | prev: `command-a-03-2025` → superseded by: `command-a-plus-05-2026` |
| Command A Vision (`command-a-vision-07-2025`) | ga | 2025-07-31 | 128K | $2.50 | $10.00 | Dense 112B-parameter multimodal transformer | Enterprise document, chart, and table understanding | prev: `command-a-03-2025` → superseded by: `command-a-plus-05-2026` |
| Command A (`command-a-03-2025`) | ga | 2025-03-13 | 256K | $2.50 | $10.00 | Dense 111B-parameter transformer | Enterprise agentic RAG on constrained hardware | prev: `command-r-plus-08-2024` → superseded by: `command-a-plus-05-2026` |
| Command R7B (`command-r7b-12-2024`) | ga | 2024-12-13 | 128K | $0.04 | $0.15 | Dense decoder-only transformer, 7B parameters | Small, fast, low-cost RAG and tool-use workloads | — |
| Command R+ (08-2024) (`command-r-plus-08-2024`) | deprecated | 2024-08-30 | 128K | $2.50 | $10.00 | Dense decoder-only transformer, 104B parameters | Legacy enterprise RAG and tool-use workloads | prev: `command-r-plus-04-2024` → superseded by: `command-a-03-2025` |

## DeepSeek

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DeepSeek-V4-Flash (`deepseek-v4-flash`) | preview | 2026-04-24 | 1M | $0.14 | $0.28 | MoE 285B total / 13B active | Cost-efficient high-throughput chat and agents | prev: `deepseek-chat` |
| DeepSeek-V4-Pro (`deepseek-v4-pro`) | preview | 2026-04-24 | 1M | $1.74 | $3.48 | MoE 1.6T total / 49B active with Multi-head Latent Attention | Flagship agentic reasoning and long-context coding | prev: `deepseek-reasoner` |
| DeepSeek Reasoner (legacy alias) (`deepseek-reasoner`) | deprecated | 2025-01-20 | 1M | $0.14 | $0.28 | Alias routed to deepseek-v4-flash thinking mode | Backward-compatible chain-of-thought reasoning endpoint | prev: `deepseek-r1` → superseded by: `deepseek-v4-flash` |
| DeepSeek Chat (legacy alias) (`deepseek-chat`) | deprecated | 2024-12-26 | 1M | $0.14 | $0.28 | Alias routed to deepseek-v4-flash non-thinking mode | Backward-compatible general chat endpoint | prev: `deepseek-v3.2` → superseded by: `deepseek-v4-flash` |

## Google

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Gemini 3.5 Flash (`gemini-3.5-flash`) | ga | 2026-05-20 | 1M | $1.50 | $9.00 | Sparse mixture-of-experts transformer with thinking | Fast frontier reasoning for agents and coding | prev: `gemini-3-flash-preview` |
| Gemini 3.1 Flash-Lite (`gemini-3.1-flash-lite`) | ga | 2026-05-08 | 1M | $0.25 | $1.50 | Distilled sparse mixture-of-experts | High-volume, low-latency, cost-sensitive workloads | prev: `gemini-2.5-flash-lite` |
| Gemini 3.1 Pro (`gemini-3.1-pro`) | ga | 2026-02-19 | 1M | $2.00 | $12.00 | Sparse mixture-of-experts transformer with thinking | Complex agentic workflows and reasoning-heavy coding | prev: `gemini-2.5-pro` → superseded by: `gemini-3.5-pro-preview` |
| Gemini 3.1 Flash (`gemini-3.1-flash`) | ga | — | 1M | $0.50 | $3.00 | Sparse mixture-of-experts transformer with thinking | Balanced Flash tier for cost-efficient reasoning | prev: `gemini-3-flash-preview` |
| Gemini 3 Flash (`gemini-3-flash`) | preview | 2026-06-22 | 1M | $0.50 | $3.00 | Sparse mixture-of-experts transformer with thinking | Cost-efficient frontier reasoning at Flash speed | prev: `gemini-2.5-flash` → superseded by: `gemini-3.5-flash` |
| Gemini 3.5 Pro (Preview) (`gemini-3.5-pro-preview`) | preview | 2026-05-19 | 2M | — | — | Sparse mixture-of-experts transformer with thinking | Frontier reasoning with Deep Think and 2M context | prev: `gemini-3.1-pro` |
| Gemini Omni Flash (`gemini-omni-flash`) | preview | 2026-05-19 | — | — | — | Transformer with native multimodal text/vision/video/audio inputs | Any-to-video generative editing and creation | — |
| Gemini Omni Flash (Preview) (`gemini-omni-flash-preview`) | preview | 2026-05-19 | — | $1.50 | $9.00 | Transformer with native multimodal text/vision/video/audio inputs and video o... | Any-to-any multimodal video generation and editing | — |
| Gemini 3 Flash (`gemini-3-flash-preview`) | preview | 2026-03-19 | 1M | $0.50 | $3.00 | Sparse mixture-of-experts transformer with thinking | Cost-efficient reasoning for everyday agentic tasks | prev: `gemini-2.5-flash` → superseded by: `gemini-3.5-flash` |
| Gemini 3.1 Pro (`gemini-3.1-pro-preview`) | preview | 2026-02-19 | 1M | $2.00 | $12.00 | Sparse mixture-of-experts transformer with thinking | Complex reasoning, agentic workflows, long context | prev: `gemini-3-pro-preview` |
| Gemini 3.1 Flash Lite (Preview) (`gemini-3.1-flash-lite-preview`) | deprecated | 2026-03-03 | 1M | $0.25 | $1.50 | Distilled sparse mixture-of-experts | Legacy preview endpoint - migrate to gemini-3.1-flash-lite GA | prev: `gemini-2.5-flash-lite` → superseded by: `gemini-3.1-flash-lite` |
| Gemini 2.5 Flash-Lite (`gemini-2.5-flash-lite`) | deprecated | 2025-07-22 | 1M | $0.10 | $0.40 | Distilled sparse mixture-of-experts | Highest-volume, lowest-latency legacy batch workloads | prev: `gemini-2.0-flash-lite` → superseded by: `gemini-3.1-flash-lite` |
| Gemini 2.5 Flash (`gemini-2.5-flash`) | deprecated | 2025-06-17 | 1M | $0.30 | $2.50 | Sparse mixture-of-experts transformer | Legacy low-cost multimodal Flash workloads | prev: `gemini-1.5-flash` → superseded by: `gemini-3.5-flash` |
| Gemini 2.5 Pro (`gemini-2.5-pro`) | deprecated | 2025-06-17 | 1M | $1.25 | $10.00 | Sparse mixture-of-experts transformer | Legacy long-context reasoning workloads | prev: `gemini-1.5-pro` → superseded by: `gemini-3.1-pro` |

## Meta

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Llama 4 Maverick (`llama-4-maverick`) | ga | 2025-04-05 | 1M | $0.19 | $0.60 | MoE, 17B active / ~400B total parameters, 128 routed experts + 1 shared exper... | Open-weight flagship for coding and multimodal tasks | prev: `llama-3.3-70b` → superseded by: `muse-spark` |
| Llama 4 Maverick (`llama-4-maverick-17b-128e`) | ga | 2025-04-05 | 1M | — | — | MoE 400B total / 17B active, 128 experts | Flagship open-weight multimodal chat and agents | prev: `llama-3.3-70b` |
| Llama 4 Scout (`llama-4-scout`) | ga | 2025-04-05 | 10M | $0.08 | $0.30 | MoE, 17B active / ~109B total parameters, 16 experts, natively multimodal ear... | Long-context document analysis and multimodal serving | prev: `llama-3.3-70b` |
| Llama 4 Scout (`llama-4-scout-17b-16e`) | ga | 2025-04-05 | 10M | — | — | MoE 109B total / 17B active, 16 experts | Long-context multimodal on a single GPU | prev: `llama-3.3-70b` |
| Llama 3.3 70B Instruct (`llama-3.3-70b`) | ga | 2024-12-06 | 128K | $0.20 | $0.20 | Dense transformer, 70B parameters | Dense 70B text model with strong instruction following | prev: `llama-3.1-70b` → superseded by: `llama-4-maverick-17b-128e` |
| Muse Spark (`muse-spark`) | preview | 2026-04-08 | 262.1K | — | — | Natively multimodal early-fusion frontier model (active/total parameters undi... | Frontier multimodal reasoning and health workloads | prev: `llama-4-maverick` |
| Llama 4 Behemoth (`llama-4-behemoth`) | preview | — | — | — | — | MoE with ~2T total parameters, 288B active, 16 experts, natively multimodal e... | Teacher / distillation model for Llama 4 herd | prev: `llama-3.1-405b` → superseded by: `muse-spark` |

## Microsoft

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MAI-Voice-1 (`mai-voice-1`) | ga | 2026-04-02 | — | $22.00 | $22.00 | Speech-generation transformer (deployed via Azure Speech SDK) | Expressive, low-latency text-to-speech and voice cloning | superseded by: `mai-voice-2` |
| Phi-4-reasoning-vision-15B (`phi-4-reasoning-vision-15b`) | ga | 2026-03-04 | 32.8K | — | — | Mid-fusion: SigLIP-2 vision encoder + Phi-4-Reasoning 14B backbone (~15B total) | Small-model multimodal reasoning and computer-use agents | prev: `phi-4-reasoning` |
| Phi-4-mini-flash-reasoning (`phi-4-mini-flash-reasoning`) | ga | 2025-07-09 | 64K | — | — | SambaY decoder-hybrid-decoder (3.8B params) | Edge math reasoning with high throughput | prev: `phi-4-mini-reasoning` |
| Phi-4-reasoning (`phi-4-reasoning`) | ga | 2025-04-30 | 32K | — | — | Dense decoder-only Transformer, 14B parameters, fine-tuned from Phi-4 | Step-by-step reasoning on math and science | prev: `phi-4` |
| Phi-4-reasoning-plus (`phi-4-reasoning-plus`) | ga | 2025-04-30 | 32.8K | — | — | Dense decoder-only transformer (14B parameters, RL post-trained) | Small-model math and science reasoning on commodity hardware | prev: `phi-4-reasoning` → superseded by: `phi-4-reasoning-vision-15b` |
| Phi-4-mini (`phi-4-mini-instruct`) | ga | 2025-02-26 | 128K | $0.07 | $0.23 | Dense decoder-only transformer | Lightweight on-device and edge deployment | prev: `phi-3.5-mini` |
| Phi-4-multimodal (`phi-4-multimodal-instruct`) | ga | 2025-02-26 | 131.1K | $0.08 | $0.32 | Dense decoder-only transformer with mixture-of-LoRAs (5.6B parameters) | Compact unified text, vision, and speech for edge | — |
| Phi-4 (`phi-4`) | ga | 2024-12-12 | 16.4K | $0.07 | $0.14 | Dense decoder-only Transformer, 14.7B parameters | On-device and small-footprint STEM and reasoning tasks | prev: `phi-3.5` → superseded by: `phi-4-reasoning` |
| MAI-Code-1-Flash (`mai-code-1-flash`) | preview | 2026-06-02 | 256K | $0.75 | $4.50 | Sparse Mixture-of-Experts, ~137B total / ~5B active parameters | Fast agentic coding and everyday developer workflows | — |
| MAI-Image-2.5 (`mai-image-2.5`) | preview | 2026-06-02 | — | $5.00 | $47.00 | Diffusion-based text-to-image with image-editing controls | Flagship image generation and precise image-to-image editing | prev: `mai-image-2` |
| MAI-Image-2.5-Flash (`mai-image-2.5-flash`) | preview | 2026-06-02 | — | $1.75 | $19.50 | Diffusion-based text-to-image (efficient variant) | Faster, cheaper image generation and editing for high-volume workloads | prev: `mai-image-2.5` |
| MAI-Thinking-1 (`mai-thinking-1`) | preview | 2026-06-02 | 256K | — | — | Sparse Mixture-of-Experts, ~35B active / ~1T total parameters | Frontier reasoning on math, science, and coding | prev: `mai-1-preview` |
| MAI-Transcribe-1.5 (`mai-transcribe-1.5`) | preview | 2026-06-02 | — | — | — | Multilingual speech-to-text encoder-decoder | Production-grade multilingual speech-to-text with context biasing | prev: `mai-transcribe-1` |
| MAI-Voice-2 (`mai-voice-2`) | preview | 2026-06-02 | — | $22.00 | — | Neural text-to-speech with expressive prosody model | Expressive multilingual text-to-speech | prev: `mai-voice-1` |
| MAI-Image-2-Efficient (`mai-image-2-efficient`) | preview | 2026-04-14 | 32K | $5.00 | $19.50 | Diffusion-based text-to-image | Cost-efficient high-throughput image generation | prev: `mai-image-2` → superseded by: `mai-image-2.5` |
| MAI-Image-2 (`mai-image-2`) | preview | 2026-04-02 | 32K | $5.00 | $33.00 | Diffusion-based text-to-image | High-quality text-to-image generation | superseded by: `mai-image-2-efficient` |
| MAI-Transcribe-1 (`mai-transcribe-1`) | preview | 2026-04-02 | — | — | — | Bidirectional audio encoder with transformer text decoder | Multilingual speech-to-text transcription | superseded by: `mai-transcribe-1.5` |
| MAI-1-preview (`mai-1-preview`) | preview | 2025-08-28 | — | — | — | Mixture-of-Experts (MoE), text-only | General instruction following and everyday assistant workloads | superseded by: `mai-thinking-1` |

## Mistral

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Mistral OCR 4 (`mistral-ocr-4-0`) | ga | 2026-06-23 | — | — | — | Purpose-built OCR / document understanding model | Structure-aware document parsing and OCR | prev: `mistral-ocr-2512` |
| Mistral Medium 3.5 (`mistral-medium-2604`) | ga | 2026-04-29 | 262.1K | $1.50 | $7.50 | Dense transformer, 128B parameters, native multimodal vision encoder | Agentic workflows, coding and complex reasoning | prev: `mistral-medium-2508` |
| Mistral Small 4 (`mistral-small-2603`) | ga | 2026-03-16 | 262.1K | $0.15 | $0.60 | Mixture-of-Experts, 119B total / 6.5B active parameters, native multimodal | Cost-efficient multimodal reasoning and coding | prev: `mistral-small-2506` |
| Devstral 2 (`devstral-2512`) | ga | 2025-12-09 | 262.1K | $0.40 | $2.00 | Dense transformer, 123B parameters | Agentic coding and SWE-bench-style repo tasks | prev: `devstral-medium-2507` |
| Devstral Small 2 (`devstral-small-2-2512`) | ga | 2025-12-09 | 262.1K | $0.10 | $0.30 | Dense 24B transformer | Local, on-device coding agents and tight feedback loops where a 24B model fits on consumer GPUs. | prev: `devstral-small-2507` |
| Mistral Large 3 (`mistral-large-2512`) | ga | 2025-12-01 | 262.1K | $0.50 | $1.50 | Sparse Mixture-of-Experts, 675B total / 41B active parameters, native vision ... | Flagship multimodal reasoning and agentic tasks | prev: `mistral-large-2411` |
| Magistral Medium 1.2 (`magistral-medium-2509`) | ga | 2025-09-01 | 41K | $2.00 | $5.00 | Dense transformer reasoning model, closed weights | Transparent multilingual chain-of-thought reasoning | prev: `magistral-medium-2507` → superseded by: `mistral-medium-2604` |
| Codestral 2508 (`codestral-2508`) | ga | 2025-08-01 | 262.1K | $0.30 | $0.90 | Dense transformer optimized for code (parameter count not disclosed) | Low-latency code completion and FIM across 80+ languages | prev: `codestral-2501` |
| Leanstral 1.5 (`leanstral-1-5`) | preview | 2026-06-30 | 262.1K | $0.00 | $0.00 | Sparse Mixture-of-Experts (~6.5B active / 119B total, 128 experts / 4 active ... | Lean 4 formal proof engineering, automated theorem proving, and autoformalization | prev: `leanstral` |
| Devstral 2 (`devstral-2-2512`) | deprecated | 2025-12-09 | 262.1K | $0.40 | $2.00 | Dense 123B transformer | Agentic coding - multi-file edits and long agents | prev: `devstral-medium-2507` → superseded by: `mistral-medium-2604` |

## Moonshot

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Kimi K2.7 Code (`kimi-k2.7-code`) | ga | 2026-06-12 | 262.1K | $0.95 | $4.00 | MoE 1T total / 32B active, 384 experts (8 routed + 1 shared), MLA attention, ... | long-horizon agentic software engineering | prev: `kimi-k2.6` |
| Kimi K2.6 (`kimi-k2.6`) | ga | 2026-04-20 | 262.1K | $0.95 | $4.00 | MoE 1T total / 32B active, 384 experts (8 routed + 1 shared), MLA attention | flagship multimodal agentic tasks and long-horizon coding | prev: `kimi-k2.5` → superseded by: `kimi-k2.7-code` |
| Kimi K2.5 (`kimi-k2.5`) | ga | 2026-01-27 | 262.1K | $0.60 | $3.00 | MoE 1T total / 32B active, 384 experts (8 routed), MLA attention, SwiGLU | cost-efficient multimodal agent workloads | prev: `kimi-k2-thinking` → superseded by: `kimi-k2.6` |
| Kimi K2 Thinking (`kimi-k2-thinking`) | deprecated | 2025-11-06 | 256K | $0.60 | $2.50 | Sparse MoE - 1T total / 32B active, native INT4 | Legacy text-only reasoning workloads | prev: `kimi-k2-0905-preview` → superseded by: `kimi-k2.5` |

## NVIDIA

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Nemotron 3 Ultra 550B-A55B (`nvidia/nemotron-3-ultra-550b-a55b`) | ga | 2026-06-04 | 1M | $0.50 | $2.20 | Hybrid Mamba-2 + Transformer Latent Mixture-of-Experts with Multi-Token Predi... | Frontier open reasoning and long-running agentic workflows | prev: `nvidia/llama-3_3-nemotron-super-49b-v1_5` |
| Nemotron 3.5 ASR Streaming Multilingual (`nvidia/nemotron-3.5-asr-streaming-0.6b`) | ga | 2026-06-04 | — | — | — | Cache-Aware FastConformer-RNNT, 600M parameters | Low-latency multilingual streaming speech recognition | — |
| Nemotron 3.5 Content Safety (`nvidia/nemotron-3.5-content-safety`) | ga | 2026-06-04 | 128K | $0.00 | $0.00 | Gemma 3 4B IT fine-tuned (LoRA merged) for multimodal safety reasoning | Multimodal multilingual content safety moderation | — |
| Nemotron 3 Nano Omni 30B-A3B Reasoning (`nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`) | ga | 2026-04-28 | 256K | $0.07 | $0.30 | Hybrid Mamba-2 + Transformer MoE with unified vision/audio/video encoders (30... | Unified multimodal agent perception across text audio image video | prev: `nvidia/nemotron-3-nano-30b-a3b` |
| Nemotron 3 Nano 4B (`nvidia/nemotron-3-nano-4b`) | ga | 2026-03-17 | 262.1K | — | — | Hybrid Mamba-2 + MLP with 4 attention layers (dense, ~3.97B params, compresse... | Edge and on-device agentic AI on Jetson and RTX | prev: `nvidia/nvidia-nemotron-nano-9b-v2` |
| Nemotron 3 Super 120B-A12B (`nvidia/nemotron-3-super-120b-a12b`) | ga | 2026-03-11 | 1M | $0.10 | $0.50 | Hybrid Mamba-2 + Transformer Latent Mixture-of-Experts (120B total / 12B active) | Efficient open agentic reasoning on single-node deployments | prev: `nvidia/llama-3_3-nemotron-super-49b-v1_5` |
| Nemotron 3 Nano 30B-A3B (`nvidia/nemotron-3-nano-30b-a3b`) | ga | 2025-12-15 | 1M | $0.05 | $0.20 | Hybrid Mamba-2 + Transformer Mixture-of-Experts (31.6B total / 3.2B active, 2... | Efficient on-device and edge agentic reasoning | prev: `nvidia/llama-3_1-nemotron-nano-8b-v1` |
| Nemotron Nano 9B v2 (`nvidia/nvidia-nemotron-nano-9b-v2`) | ga | 2025-09-05 | 131.1K | $0.04 | $0.16 | Hybrid Mamba-Transformer dense model | Edge and on-device reasoning and code generation | superseded by: `nvidia/nemotron-3-nano-4b` |
| Llama-3.3 Nemotron Super 49B v1.5 (`nvidia/llama-3_3-nemotron-super-49b-v1_5`) | ga | 2025-07-25 | 128K | — | — | Dense transformer derived from Meta Llama-3.3-70B-Instruct with Neural Archit... | Reasoning and agentic RAG on Llama-derived architecture | prev: `nvidia/llama-3_3-nemotron-super-49b-v1` → superseded by: `nvidia/nemotron-3-super-120b-a12b` |
| Nemotron 3 VoiceChat (`nvidia/nemotron-voicechat`) | preview | 2026-03-18 | — | — | — | Unified speech-to-speech: Parakeet audio encoder + Nemotron Nano v2 9B LLM ba... | Full-duplex real-time conversational voice agents | — |
| Llama 3.1 Nemotron Ultra 253B v1 (`nvidia/llama-3.1-nemotron-ultra-253b-v1`) | deprecated | 2025-04-07 | 131.1K | $0.60 | $1.80 | Dense transformer (Llama 3.1 base, NAS-pruned) | Legacy Llama-based Nemotron reasoning | superseded by: `nvidia/nemotron-3-ultra-550b-a55b` |
| Llama 3.3 Nemotron Super 49B v1 (`nvidia/llama-3.3-nemotron-super-49b-v1`) | deprecated | 2025-03-18 | 131.1K | $0.10 | $0.40 | Dense transformer (Llama 3.3 base, NAS-pruned) | Legacy mid-tier Nemotron reasoning | superseded by: `nvidia/nemotron-3-super-120b-a12b` |

## OpenAI

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GPT-5.5 Instant (`gpt-5.5-instant`) | ga | 2026-05-05 | 1M | $5.00 | $30.00 | — | Fast default chat for ChatGPT-style workloads | prev: `gpt-5.3-instant` |
| GPT-5.5 (`gpt-5.5`) | ga | 2026-04-23 | 1M | $5.00 | $30.00 | — | flagship complex reasoning and agentic coding | prev: `gpt-5.4` → superseded by: `gpt-5.6-sol` |
| GPT-5.5 Pro (`gpt-5.5-pro`) | ga | 2026-04-23 | 1M | $30.00 | $180.00 | — | highest-intelligence answers on the hardest problems | prev: `gpt-5.4-pro` → superseded by: `gpt-5.6-sol` |
| GPT-5.4 mini (`gpt-5.4-mini`) | ga | 2026-03-17 | 272K | $0.75 | $4.50 | — | fast cost-efficient reasoning for high-volume workloads | prev: `gpt-5-mini` |
| GPT-5.4 nano (`gpt-5.4-nano`) | ga | 2026-03-17 | 272K | $0.20 | $1.25 | — | cheapest fastest option for high-volume simple tasks | prev: `gpt-5-nano` |
| GPT-5.4 (`gpt-5.4`) | ga | 2026-03-05 | 272K | $2.50 | $15.00 | — | reasoning with native computer-use and tool-heavy agents | prev: `gpt-5.2` → superseded by: `gpt-5.5` |
| GPT-5 (`gpt-5`) | ga | 2025-08-07 | 400K | $1.25 | $10.00 | — | General-purpose reasoning and multimodal tasks | prev: `gpt-4o` → superseded by: `gpt-5.4` |
| gpt-oss-120b (`gpt-oss-120b`) | ga | 2025-08-05 | 131.1K | $0.03 | $0.15 | Mixture-of-Experts, 117B total parameters, 5.1B active per forward pass, nati... | Self-hostable open-weights reasoning at low cost | — |
| GPT-5.6 Luna (`gpt-5.6-luna`) | preview | 2026-06-26 | — | $1.00 | $6.00 | — | Fast, low-cost tier for high-volume workloads | prev: `gpt-5.4-mini` |
| GPT-5.6 Sol (`gpt-5.6-sol`) | preview | 2026-06-26 | 1.5M | $5.00 | $30.00 | — | Frontier reasoning, coding and agentic workflows | prev: `gpt-5.5-pro` |
| GPT-5.6 Terra (`gpt-5.6-terra`) | preview | 2026-06-26 | — | $2.50 | $15.00 | — | Balanced everyday model at half GPT-5.5 cost | prev: `gpt-5.5` |

## Perplexity

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Sonar Pro Search (`sonar-pro-search`) | ga | 2025-10-30 | 200K | $3.00 | $15.00 | Search-grounded agentic LLM with multi-step tool use | Agentic multi-step search with tool use | prev: `sonar-pro` |
| Sonar Reasoning Pro (`sonar-reasoning-pro`) | ga | 2025-03-07 | 128K | $2.00 | $8.00 | Perplexity post-trained DeepSeek-R1 (R1-1776) fine-tuned for search-grounded ... | Step-by-step analytical reasoning over the web | prev: `sonar-reasoning` |
| Sonar Deep Research (`sonar-deep-research`) | ga | 2025-02-14 | 128K | $2.00 | $8.00 | Perplexity agentic research pipeline over an internal reasoning LLM with iter... | Long-form multi-source research reports with citations | — |
| Sonar (`sonar`) | ga | 2025-01-21 | 128K | $1.00 | $1.00 | Perplexity in-house model fine-tuned on Llama 3.3 70B for web-grounded search | Lightweight, low-cost grounded web search answers | — |
| Sonar Pro (`sonar-pro`) | ga | 2025-01-21 | 200K | $3.00 | $15.00 | Proprietary Perplexity search-augmented LLM with expanded retrieval pipeline | Complex multi-step search with broad citations | prev: `sonar` |
| Sonar Reasoning (`sonar-reasoning`) | deprecated | 2025-01-21 | 127K | $1.00 | $5.00 | Reasoning-tuned Sonar model with chain-of-thought over web search results | Legacy real-time reasoning with web search | superseded by: `sonar-reasoning-pro` |

## xAI

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Grok 4.3 (`grok-4.3`) | ga | 2026-04-30 | 1M | $1.25 | $2.50 | reasoning-first transformer with always-on chain-of-thought | flagship reasoning and agentic enterprise workloads | prev: `grok-4.20` |
| Grok Voice Think Fast 1.0 (`grok-voice-think-fast-1.0`) | ga | 2026-04-23 | — | — | — | Voice-native full-duplex model with background reasoning for real-time conver... | Full-duplex voice agents for enterprise use | — |
| Grok 4.20 (`grok-4.20`) | ga | 2026-03-31 | 2M | $2.00 | $6.00 | reasoning transformer with configurable reasoning effort | long-context agentic tool calling at high throughput | prev: `grok-4.1` → superseded by: `grok-4.3` |
| Grok Imagine Video 1.5 Preview (`grok-imagine-video-1.5-preview`) | preview | 2026-05-30 | — | — | — | Imagine video diffusion model with integrated audio generation | Cinematic text/image-to-video with synced audio | prev: `grok-imagine-video` |
| Grok Build 0.1 (`grok-build-0.1`) | preview | 2026-05-20 | 256K | $1.00 | $2.00 | coding-specialized transformer for agentic software engineering | agentic coding, IDE integrations, terminal coding agents | prev: `grok-code-fast-1` |
| Grok 4.20 Multi-Agent Beta (`grok-4.20-multi-agent-beta-0309`) | preview | 2026-03-09 | 2M | $2.00 | $6.00 | Four-agent collaborative architecture (Grok, Harper, Benjamin, Lucas) orchest... | Collaborative multi-agent reasoning and deep research | prev: `grok-4.20` |
| Grok 4.1 Fast (`grok-4-1-fast`) | deprecated | 2025-11-19 | 2M | $0.20 | $0.50 | Compact fast variant of Grok 4.1 | Low-cost high-throughput inference | prev: `grok-3-mini` → superseded by: `grok-4.3` |
