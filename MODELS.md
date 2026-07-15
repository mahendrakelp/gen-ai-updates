# Frontier Production Model Catalog

_Last refreshed: 2026-07-15 by genai-model-catalog routine._

## Alibaba

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Qwen3.7-Plus (`qwen3.7-plus`) | ga | 2026-06-01 | 1M | $0.40 | $1.60 | Mixture-of-Experts multimodal Transformer | Low-cost multimodal agent for screens and video | prev: qwen3.6-plus |
| Qwen3.7-Max (`qwen3.7-max`) | ga | 2026-05-19 | 1M | $2.50 | $7.50 | Mixture-of-Experts Transformer | Flagship reasoning and agentic coding at frontier level | prev: qwen3-max |
| Qwen-Flash (`qwen-flash`) | ga | 2026-04-27 | 1M | $0.05 | $0.40 | Hybrid linear attention with sparse MoE | Low-cost high-throughput classification and Q&A | prev: qwen-turbo |
| Qwen3.6-Flash (`qwen3.6-flash`) | ga | 2026-04-27 | 1M | $0.19 | $1.13 | Multimodal Mixture-of-Experts (35B total / 3B active for open-weight variant) | Ultra-low-latency multimodal workloads at scale | prev: qwen3.5-flash |
| Qwen3.6-27B (`qwen3.6-27b`) | ga | 2026-04-22 | 262.1K | $0.60 | $3.60 | Dense decoder-only Transformer, 27B parameters | Open-weight dense flagship for coding and agents | — |
| Qwen3.5-Omni-Flash (`qwen3.5-omni-flash`) | ga | 2026-03-30 | 262.1K | $0.10 | $0.80 | Thinker-Talker MoE 30B total / 3B active with Hybrid-Attention | Real-time omni-modal input with speech output | prev: qwen3-omni-30b-a3b |
| Qwen3.5-Omni-Plus (`qwen3.5-omni-plus`) | ga | 2026-03-30 | 262.1K | $0.40 | $4.80 | Thinker-Talker Hybrid-Attention MoE (30B total, 3B active) | Native omni-modal understanding and speech output | prev: qwen3-omni |
| Qwen3-Coder-Next (`qwen3-coder-next`) | ga | 2026-02-04 | 262.1K | $0.11 | $0.80 | Sparse MoE (80B total / 3B active, 512 experts with 10 routed + 1 shared) built on Qwen3-Next-80B-A3B-Base with Gated DeltaNet + Gated Attention hybrid | Open-weight agentic coding for local development | prev: qwen3-coder-flash |
| Qwen3-VL-Max (`qwen-vl-max`) | ga | 2025-09-23 | 131.1K | $0.52 | $2.08 | Multimodal vision-language | Advanced vision-language understanding | — |
| Qwen3-VL-Plus (`qwen3-vl-plus`) | ga | 2025-09-23 | 262.1K | $0.20 | $1.60 | MoE 235B total / 22B active with Interleaved-MRoPE and DeepStack | Document, chart, and GUI visual understanding | prev: qwen-vl-plus → superseded by: qwen3.7-plus |
| Qwen3-Coder-Plus (`qwen3-coder-plus`) | ga | 2025-08-01 | 1M | $0.65 | $3.25 | MoE (based on Qwen3-Coder-480B-A35B) | Agentic coding and repo-scale reasoning | prev: qwen-coder-plus |
| Qwen3-235B-A22B-Thinking-2507 (`qwen3-235b-a22b-thinking-2507`) | ga | 2025-07-25 | 262.1K | $0.70 | $8.40 | Mixture-of-Experts (235B total / 22B active parameters) | Open-weights frontier reasoning and math/code | prev: qwen3-235b-a22b |
| Qwen3-Coder (`qwen3-coder-480b-a35b-instruct`) | ga | 2025-07-22 | 1.0M | $0.22 | $1.80 | MoE (480B total, 35B active) | Open-weight agentic coding at scale | — |
| Qwen3-Max (`qwen3-max`) | deprecated | 2025-09-23 | 262.1K | $0.78 | $3.90 | Mixture-of-Experts Transformer, 1T+ parameters | Prior trillion-parameter flagship (Instruct and Thinking modes) | prev: qwen2.5-max → superseded by: qwen3.7-max |

## Amazon

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Nova 2 Sonic (`amazon.nova-2-sonic-v1:0`) | ga | 2026-01-15 | 1M | $0.33 | $2.75 | Speech-to-speech Transformer | Real-time speech-to-speech conversational AI | prev: amazon.nova-sonic-v1:0 |
| Nova 2 Lite (`amazon.nova-2-lite-v1:0`) | ga | 2025-12-02 | 1M | $0.30 | $2.50 | Decoder-only Transformer with long-context extensions | Fast, cost-effective multimodal reasoning at scale | prev: amazon.nova-lite-v1:0 |
| Amazon Nova Lite (`amazon.nova-lite-v1:0`) | ga | 2024-12-05 | 300K | $0.06 | $0.24 | Transformer-based multimodal foundation model | Low-cost multimodal high-volume processing | → superseded by: amazon.nova-2-lite-v1:0 |
| Nova Micro (`amazon.nova-micro-v1:0`) | ga | 2024-12-03 | 128K | $0.04 | $0.14 | Text-only foundation model | Ultra-low-cost text-only workloads | → superseded by: amazon.nova-2-lite-v1:0 |
| Nova Pro (`amazon.nova-pro-v1:0`) | ga | 2024-12-03 | 300K | $0.80 | $3.20 | Multimodal foundation model | Balanced multimodal price-performance | → superseded by: amazon.nova-2-pro-v1:0 |
| Amazon Nova 2 Omni (Preview) (`amazon.nova-2-omni-preview-20251202-v1:0`) | preview | 2025-12-02 | 1M | $0.30 | $2.50 | Unified multimodal reasoning and generation transformer | Unified multimodal reasoning with image generation | — |
| Nova 2 Pro (`amazon.nova-2-pro-preview-20251202-v1:0`) | preview | 2025-12-02 | 1M | $2.19 | $17.50 | Decoder-only Transformer with long-context extensions | Complex agentic tasks and multi-document reasoning | prev: amazon.nova-pro-v1:0 |
| Nova 2 Pro (`amazon.nova-2-pro-v1:0`) | preview | 2025-12-02 | 1M | — | — | Multimodal foundation model | Complex multistep agentic tasks | prev: amazon.nova-pro-v1:0 |
| Nova Premier (`amazon.nova-premier-v1:0`) | deprecated | 2025-04-30 | 1M | $2.50 | $12.50 | Decoder-only Transformer | Legacy flagship for complex reasoning and distillation | prev: amazon.nova-pro-v1:0 → superseded by: amazon.nova-2-pro-preview-20251202-v1:0 |

## Anthropic

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Claude Sonnet 5 (`claude-sonnet-5`) | ga | 2026-06-30 | 1M | $2.00 | $10.00 | Transformer with extended thinking | best speed-intelligence balance for production | prev: claude-sonnet-4-6 |
| Claude Fable 5 (`claude-fable-5`) | ga | 2026-06-09 | 1M | $10.00 | $50.00 | Transformer with extended thinking | next-gen intelligence for long-running agents | prev: claude-opus-4-8 |
| Claude Opus 4.8 (`claude-opus-4-8`) | ga | 2026-05-28 | 1M | $5.00 | $25.00 | Transformer with extended thinking | complex agentic coding and enterprise workloads | prev: claude-opus-4-7 → superseded by: claude-fable-5 |
| Claude Opus 4.7 (`claude-opus-4-7`) | ga | 2026-04-16 | 1M | $5.00 | $25.00 | — | Agentic coding and multi-tool orchestration | prev: claude-opus-4-6 → superseded by: claude-opus-4-8 |
| Claude Sonnet 4.6 (`claude-sonnet-4-6`) | ga | 2026-02-17 | 1M | $3.00 | $15.00 | Transformer | Stable mid-tier production tasks | prev: claude-sonnet-4-5 → superseded by: claude-sonnet-5 |
| Claude Opus 4.6 (`claude-opus-4-6`) | ga | 2026-02-05 | 1M | $5.00 | $25.00 | — | Established Opus production workloads | prev: claude-opus-4-5 → superseded by: claude-opus-4-8 |
| Claude Haiku 4.5 (`claude-haiku-4-5`) | ga | 2025-10-15 | 200K | $1.00 | $5.00 | Transformer | fastest model with near-frontier intelligence | prev: claude-haiku-3-5 |
| Claude Mythos 5 (`claude-mythos-5`) | preview | 2026-06-09 | 1M | $10.00 | $50.00 | — | Defensive cybersecurity workflows (Project Glasswing) | prev: claude-mythos-preview |

## Cohere

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Cohere Transcribe Arabic (`cohere-transcribe-arabic-07-2026`) | ga | 2026-07-07 | — | — | — | 2B encoder-decoder transformer fine-tuned from Cohere Transcribe for Arabic ASR | Arabic speech-to-text with dialect coverage | prev: cohere-transcribe-03-2026 |
| North Mini Code (`north-mini-code-1.0`) | ga | 2026-06-09 | 256K | $0.00 | $0.00 | Sparse Mixture-of-Experts, 3B active / 30B total parameters (128 experts, 8 active) | Local and terminal-based agentic coding | — |
| Command A+ (`command-a-plus-05-2026`) | ga | 2026-05-19 | 128K | $2.50 | $10.00 | Sparse MoE, 218B total parameters, 25B active per token | Sovereign enterprise multimodal + agentic workloads | prev: command-a-03-2025 |
| Command A+ (`command-a-plus`) | ga | 2026-04-15 | 256K | — | — | Mixture of Experts | Enterprise agentic workflows across 48 languages | prev: command-a-03-2025 |
| Cohere Transcribe (`cohere-transcribe-03-2026`) | ga | 2026-03-26 | — | — | — | 2B encoder-decoder transformer with Fast-Conformer encoder (>90% params in encoder) | Real-time enterprise speech-to-text and meetings | — |
| Command A Translate (`command-a-translate-08-2025`) | ga | 2025-08-28 | 16K | — | — | Dense 111B-parameter transformer fine-tuned for translation | Private, secure enterprise translation across 23 languages | prev: command-a-03-2025 |
| Command A Reasoning (`command-a-reasoning-08-2025`) | ga | 2025-08-21 | 256K | $2.50 | $10.00 | Dense 111B reasoning transformer | Advanced enterprise reasoning and tool use | prev: command-a-03-2025 → superseded by: command-a-plus-05-2026 |
| Command A Vision (`command-a-vision-07-2025`) | ga | 2025-07-31 | 128K | $2.50 | $10.00 | 112B multimodal, SigLIP2 vision encoder + Command A text tower | Enterprise document/chart/table understanding | prev: command-a-03-2025 → superseded by: command-a-plus-05-2026 |
| Command A (`command-a-03-2025`) | ga | 2025-03-13 | 256K | $2.50 | $10.00 | 111B parameter dense transformer | Agentic, multilingual, and coding enterprise use | prev: command-r-plus-08-2024 → superseded by: command-a-plus |
| Command R7B (`command-r7b-12-2024`) | ga | 2024-12-01 | 128K | $0.04 | $0.15 | 7B parameter dense transformer | Ultra-low-cost small-model deployments | — |
| Command R+ (08-2024) (`command-r-plus-08-2024`) | ga | 2024-08-01 | 128K | $2.50 | $10.00 | Dense transformer | RAG and tool-use for enterprise workflows | prev: command-r-plus → superseded by: command-a-03-2025 |

## DeepSeek

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DeepSeek V4 Flash (`deepseek-v4-flash`) | preview | 2026-04-24 | 1.0M | $0.14 | $0.28 | MoE, 284B total / 13B active | low-cost high-throughput reasoning and coding | prev: deepseek-chat |
| DeepSeek V4 Pro (`deepseek-v4-pro`) | preview | 2026-04-24 | 1.0M | $0.43 | $0.87 | MoE, 1.6T total / 49B active, 384 routed experts + 1 shared, CSA/HCA hybrid attention | frontier open-weight reasoning and agentic coding | prev: deepseek-reasoner |
| DeepSeek Reasoner (V3.2) (`deepseek-reasoner`) | deprecated | 2025-01-20 | 131.1K | $0.14 | $0.28 | MoE | legacy chain-of-thought reasoning, being retired | prev: deepseek-r1 → superseded by: deepseek-v4-pro |
| DeepSeek Chat (V3.2) (`deepseek-chat`) | deprecated | 2024-12-26 | 131.1K | $0.14 | $0.28 | MoE | legacy general chat, being retired | prev: deepseek-v3.2 → superseded by: deepseek-v4-flash |

## Google

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Gemini 3 Flash (`gemini-3-flash`) | ga | 2026-06-22 | 1.0M | $0.50 | $3.00 | Multimodal transformer | Low-cost multimodal at 1M context | prev: gemini-2.5-flash → superseded by: gemini-3.5-flash |
| Gemini 3.5 Flash (`gemini-3.5-flash`) | ga | 2026-05-19 | 1.0M | $1.50 | $9.00 | Multimodal transformer | Fast frontier-level agentic and coding workloads | prev: gemini-3-flash |
| Gemini 3.1 Flash-Lite (`gemini-3.1-flash-lite`) | ga | 2026-05-07 | 1.0M | $0.25 | $1.50 | Multimodal transformer | High-volume, low-latency multimodal workloads | prev: gemini-2.5-flash-lite |
| Gemini 3.1 Flash (`gemini-3.1-flash`) | ga | 2026-03-19 | 1.0M | $0.50 | $3.00 | Sparse mixture-of-experts transformer with thinking | Balanced Flash tier for cost-efficient reasoning | prev: gemini-3-flash-preview |
| Gemini 3.5 Pro (Preview) (`gemini-3.5-pro-preview`) | preview | 2026-05-19 | 2M | — | — | Sparse mixture-of-experts transformer with thinking | Frontier reasoning with Deep Think and 2M context | prev: gemini-3.1-pro |
| Gemini Omni Flash (`gemini-omni-flash`) | preview | 2026-05-19 | — | — | — | Transformer with native multimodal text/vision/video/audio inputs | Any-to-video generative editing and creation | — |
| Gemini Omni Flash (Preview) (`gemini-omni-flash-preview`) | preview | 2026-05-19 | — | $1.50 | $9.00 | Transformer with native multimodal text/vision/video/audio inputs and video output | Any-to-any multimodal video generation and editing | — |
| Gemini 3.1 Pro (`gemini-3.1-pro`) | preview | 2026-02-19 | 1.0M | $2.00 | $12.00 | Multimodal transformer | Top-end multimodal reasoning across long contexts | prev: gemini-3-pro → superseded by: gemini-3.5-pro-preview |
| Gemini 3.1 Pro (`gemini-3.1-pro-preview`) | preview | 2026-02-19 | 1.0M | $2.00 | $12.00 | Transformer-based Mixture-of-Experts | Frontier reasoning over long, multimodal contexts | prev: gemini-3-pro-preview |
| Gemini 3 Flash Preview (`gemini-3-flash-preview`) | deprecated | 2026-03-19 | 1M | $0.50 | $3.00 | Sparse mixture-of-experts transformer with thinking | Legacy preview endpoint; migrate to 3.1 Flash GA | prev: gemini-2.5-flash → superseded by: gemini-3.1-flash |
| Gemini 3.1 Flash Lite (Preview) (`gemini-3.1-flash-lite-preview`) | deprecated | 2026-03-03 | 1.0M | $0.25 | $1.50 | Distilled sparse mixture-of-experts | Legacy preview endpoint - migrate to gemini-3.1-flash-lite GA | prev: gemini-2.5-flash-lite → superseded by: gemini-3.1-flash-lite |
| Gemini 2.5 Flash-Lite (`gemini-2.5-flash-lite`) | deprecated | 2025-07-22 | 1.0M | $0.10 | $0.40 | Distilled sparse mixture-of-experts | Highest-volume, lowest-latency legacy batch workloads | prev: gemini-2.0-flash-lite → superseded by: gemini-3.1-flash-lite |
| Gemini 2.5 Flash (`gemini-2.5-flash`) | deprecated | 2025-06-17 | 1.0M | $0.30 | $2.50 | Sparse mixture-of-experts transformer | Legacy fast general-purpose workloads | prev: gemini-1.5-flash → superseded by: gemini-3.5-flash |
| Gemini 2.5 Pro (`gemini-2.5-pro`) | deprecated | 2025-03-25 | 1.0M | $1.25 | $10.00 | Transformer-based Mixture-of-Experts | Legacy high-accuracy reasoning workloads | prev: gemini-1.5-pro → superseded by: gemini-3.1-pro-preview |

## Meta

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Llama 4 Maverick (`llama-4-maverick`) | ga | 2025-04-05 | 1M | $0.19 | $0.60 | MoE, 17B active / ~400B total parameters, 128 routed experts + 1 shared expert, natively multimodal early-fusion | Open-weight flagship for coding and multimodal tasks | prev: llama-3.3-70b → superseded by: muse-spark-1.1 |
| Llama 4 Maverick (`llama-4-maverick-17b-128e`) | ga | 2025-04-05 | 1M | $0.19 | $0.60 | MoE, 17B active / ~400B total parameters, 128 routed experts + 1 shared expert, natively multimodal early-fusion | Open-weight flagship multimodal chat, coding, and agents | prev: llama-3.3-70b |
| Llama 4 Maverick (`llama-4-maverick-17b-128e-instruct`) | ga | 2025-04-05 | 1M | $0.15 | $0.60 | Mixture-of-Experts, 17B active / 400B total, 128 experts | Multimodal reasoning and general-purpose enterprise workloads | prev: llama-3.3-70b-instruct |
| Llama 4 Maverick (`meta-llama/Llama-4-Maverick-17B-128E-Instruct`) | ga | 2025-04-05 | 1.0M | — | — | Mixture-of-Experts (17B active, 128 experts, ~400B total) with early-fusion multimodality | Open-weight multimodal general-purpose workhorse | — |
| Llama 4 Scout (`llama-4-scout`) | ga | 2025-04-05 | 10M | $0.08 | $0.30 | MoE, 17B active / ~109B total parameters, 16 experts, natively multimodal early-fusion, iRoPE for long context | Long-context document analysis and multimodal serving | prev: llama-3.3-70b |
| Llama 4 Scout (`llama-4-scout-17b-16e`) | ga | 2025-04-05 | 10M | $0.08 | $0.30 | MoE, 17B active / ~109B total parameters, 16 experts, natively multimodal early-fusion, iRoPE for long context | Long-context document analysis and multimodal serving on a single GPU | prev: llama-3.3-70b |
| Llama 4 Scout (`llama-4-scout-17b-16e-instruct`) | ga | 2025-04-05 | 10M | $0.08 | $0.30 | Mixture-of-Experts, 17B active / 109B total, 16 experts | Long-context multimodal tasks on a single H100 | prev: llama-3.2-90b-vision-instruct |
| Llama 4 Scout (`meta-llama/Llama-4-Scout-17B-16E-Instruct`) | ga | 2025-04-05 | 10M | — | — | Mixture-of-Experts (17B active, 16 experts, ~109B total) with early-fusion multimodality | Ultra-long-context single-GPU multimodal inference | — |
| Llama 3.3 70B Instruct (`llama-3.3-70b`) | ga | 2024-12-06 | 128K | $0.20 | $0.20 | Dense transformer, 70B parameters, 128K context | Dense 70B text-only workhorse with strong instruction following | prev: llama-3.1-70b → superseded by: llama-4-maverick-17b-128e |
| Muse Spark 1.1 (`muse-spark-1.1`) | preview | 2026-07-09 | 1.0M | $1.25 | $4.25 | Natively multimodal reasoning model | Multimodal agentic reasoning and tool use | prev: muse-spark |
| Llama 4 Behemoth (`llama-4-behemoth`) | preview | — | — | — | — | MoE with ~2T total parameters, 288B active, 16 experts, natively multimodal early-fusion | Teacher / distillation model for Llama 4 herd | prev: llama-3.1-405b → superseded by: muse-spark-1.1 |
| Muse Spark (`muse-spark`) | deprecated | 2026-04-08 | 262.1K | — | — | Natively multimodal reasoning model | Initial Meta Superintelligence Labs closed model | prev: llama-4-maverick-17b-128e → superseded by: muse-spark-1.1 |

## Microsoft

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MAI-Voice-1 (`mai-voice-1`) | ga | 2026-04-02 | — | $22.00 | $22.00 | Speech-generation transformer (deployed via Azure Speech SDK) | Expressive, low-latency text-to-speech and voice cloning | → superseded by: mai-voice-2 |
| Phi-4-mini-flash-reasoning (`phi-4-mini-flash-reasoning`) | ga | 2025-07-09 | 64K | — | — | SambaY decoder-hybrid-decoder (3.8B params) | Edge math reasoning with high throughput | prev: phi-4-mini-reasoning |
| Phi-4-reasoning (`phi-4-reasoning`) | ga | 2025-04-30 | 32K | — | — | Dense decoder-only Transformer, 14B parameters, fine-tuned from Phi-4 | Step-by-step reasoning on math and science | prev: phi-4 |
| Phi-4-reasoning-plus (`phi-4-reasoning-plus`) | ga | 2025-04-30 | 32.8K | — | — | 14B dense decoder-only transformer, reasoning-tuned Phi-4 | Small open reasoning model rivaling much larger LLMs | prev: phi-4 → superseded by: phi-4-reasoning-vision-15b |
| Phi-4-mini-instruct (`phi-4-mini-instruct`) | ga | 2025-02-27 | 128K | $0.07 | $0.23 | compact dense SLM with GQA and shared embedding | cheap reasoning, coding, long-context in tiny model | prev: phi-3.5-mini |
| Phi-4-multimodal-instruct (`phi-4-multimodal-instruct`) | ga | 2025-02-27 | 131.1K | $0.08 | $0.32 | multimodal SLM (text + audio + vision) | unified speech, vision, and text on small model | — |
| Phi-4 (`phi-4`) | ga | 2024-12-12 | 16.4K | $0.07 | $0.14 | 14B dense decoder-only transformer, trained on ~9.8T tokens with heavy synthetic data | Small dense general-purpose LLM base | prev: phi-3.5 → superseded by: phi-4-reasoning |
| MAI-Code-1-Flash (`mai-code-1-flash`) | preview | 2026-06-02 | 262.1K | $0.75 | $4.50 | Small dense transformer (~5B), Copilot-tuned | Fast, cheap coding for GitHub Copilot workflows | — |
| MAI-Image-2.5 (`mai-image-2.5`) | preview | 2026-06-02 | — | $5.00 | $47.00 | Diffusion-based text-to-image with image-editing controls | Flagship image generation and precise image-to-image editing | prev: mai-image-2 |
| MAI-Image-2.5-Flash (`mai-image-2.5-flash`) | preview | 2026-06-02 | — | $1.75 | $33.00 | Diffusion-based text-to-image (efficient variant) | Faster, cheaper image generation and editing for high-volume workloads | prev: mai-image-2.5 |
| MAI-Thinking-1 (`mai-thinking-1`) | preview | 2026-06-02 | 262.1K | — | — | Sparse Mixture-of-Experts, ~1T total / 35B active parameters, trained from scratch | Microsoft first-party frontier reasoning at low token cost | prev: mai-1-preview |
| MAI-Transcribe-1.5 (`mai-transcribe-1.5`) | preview | 2026-06-02 | — | — | — | Multilingual speech-to-text encoder-decoder | Production-grade multilingual speech-to-text with context biasing | prev: mai-transcribe-1 |
| MAI-Voice-2 (`mai-voice-2`) | preview | 2026-06-02 | — | $22.00 | — | Neural text-to-speech with expressive prosody model | Expressive multilingual text-to-speech and voice cloning | prev: mai-voice-1 |
| MAI-Image-2-Efficient (`mai-image-2-efficient`) | preview | 2026-04-14 | 32K | $5.00 | $19.50 | Diffusion-based text-to-image | Cost-efficient high-throughput image generation | prev: mai-image-2 → superseded by: mai-image-2.5 |
| MAI-Image-2 (`mai-image-2`) | preview | 2026-04-02 | 32K | $5.00 | $33.00 | Diffusion-based text-to-image | High-quality text-to-image generation | → superseded by: mai-image-2-efficient |
| MAI-Transcribe-1 (`mai-transcribe-1`) | preview | 2026-04-02 | — | — | — | Bidirectional audio encoder with transformer text decoder | Multilingual speech-to-text transcription | → superseded by: mai-transcribe-1.5 |
| Phi-4-Reasoning-Vision-15B (`phi-4-reasoning-vision-15b`) | preview | 2026-03-04 | 32.8K | — | — | 15B-parameter multimodal transformer built on Phi-4 reasoning family | Compact multimodal reasoning for charts, diagrams, UI | prev: phi-4-reasoning-plus |
| MAI-1-preview (`mai-1-preview`) | preview | 2025-08-28 | — | — | — | Mixture-of-Experts, pre/post-trained on ~15,000 NVIDIA H100 GPUs | Instruction-following text tasks in Copilot | → superseded by: mai-thinking-1 |

## Mistral

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Mistral OCR 4 (`mistral-ocr-4-0`) | ga | 2026-06-23 | — | — | — | Purpose-built OCR / document understanding model | Structure-aware document parsing and OCR | prev: mistral-ocr-2512 |
| Mistral Medium 3.5 (`mistral-medium-2604`) | ga | 2026-04-29 | 256K | $1.50 | $7.50 | Dense 128B parameters | balanced enterprise workloads with reasoning and coding | prev: mistral-medium-2508 |
| Mistral Small 4 (`mistral-small-2603`) | ga | 2026-03-16 | 262.1K | $0.15 | $0.60 | Sparse Mixture-of-Experts, 119B total / 6B active parameters | high-volume agentic and coding at low cost | prev: mistral-small-2506 |
| Devstral 2 (`devstral-2512`) | ga | 2025-12-09 | 262.1K | $0.40 | $0.90 | Dense 123B transformer optimized for agentic coding | open agentic coding and multi-file editing | prev: devstral-medium-2507 |
| Devstral Small 2 (`devstral-small-2-2512`) | ga | 2025-12-09 | 262.1K | $0.10 | $0.30 | Dense 24B transformer | Local, on-device agentic coding on a single consumer GPU | prev: devstral-small-2507 |
| Mistral Large 3 (`mistral-large-2512`) | ga | 2025-12-02 | 262.1K | $2.00 | $6.00 | Sparse Mixture-of-Experts, 675B total / 41B active parameters | flagship multimodal agentic and coding tasks | prev: mistral-large-2411 |
| Magistral Medium 1.2 (`magistral-medium-2509`) | ga | 2025-09-18 | 131.1K | $2.00 | $5.00 | Dense transformer reasoning model with vision encoder, closed weights | Transparent multilingual chain-of-thought reasoning with vision | prev: magistral-medium-2507 → superseded by: mistral-medium-2604 |
| Codestral 2508 (`codestral-2508`) | ga | 2025-07-30 | 262.1K | $0.30 | $0.90 | Dense transformer optimized for code (parameter count not disclosed) | code completion, generation, and refactoring | prev: codestral-2501 |
| Mistral Medium 3 (`mistral-medium-2505`) | ga | 2025-05-07 | 131K | $0.40 | $2.00 | — | Balanced cost/performance for coding and STEM | — |
| Magistral Medium (`magistral-medium-latest`) | ga | — | — | $2.00 | $5.00 | — | Chain-of-thought reasoning for complex problems | — |
| Ministral 3B (`ministral-3b-latest`) | ga | — | 128K | $0.04 | $0.04 | — | Edge and on-device deployment | — |
| Leanstral 1.5 (`leanstral-1-5`) | preview | 2026-06-30 | 262.1K | $0.00 | $0.00 | Sparse Mixture-of-Experts (~6.5B active / 119B total, 128 experts / 4 active per token) | Lean 4 formal proof engineering, automated theorem proving, and autoformalization | prev: leanstral |
| Devstral 2 (`devstral-2-2512`) | deprecated | 2025-12-09 | 262.1K | $0.40 | $2.00 | Dense 123B transformer | Agentic coding - multi-file edits and long agents | prev: devstral-medium-2507 → superseded by: mistral-medium-2604 |

## Moonshot

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Kimi K2.7 Code (`kimi-k2.7-code`) | ga | 2026-06-12 | 262.1K | $0.95 | $4.00 | MoE, 1T total / 32B active, 384 experts (8+1 shared), 61 layers, MLA + MoonViT | agentic coding with lower reasoning-token overhead | prev: kimi-k2.6 |
| Kimi K2.6 (`kimi-k2.6`) | ga | 2026-04-20 | 262.1K | $0.95 | $4.00 | MoE, 1T total / 32B active, 384 experts (8+1 shared), 61 layers, MLA + MoonViT vision encoder | multimodal agentic coding and long-horizon agent swarms | prev: kimi-k2.5 → superseded by: kimi-k2.7-code |
| Kimi K2.5 (`kimi-k2.5`) | ga | 2026-01-27 | 262.1K | $0.60 | $3.00 | MoE, 1T total / 32B active, 384 experts, 61 layers, MLA | cost-tier multimodal agentic model | prev: kimi-k2 → superseded by: kimi-k2.6 |
| Kimi K2 Thinking (`kimi-k2-thinking`) | deprecated | 2025-11-06 | 256K | $0.60 | $2.50 | Sparse MoE - 1T total / 32B active, native INT4 | Legacy text-only reasoning workloads | prev: kimi-k2-0905-preview → superseded by: kimi-k2.5 |

## NVIDIA

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Nemotron 3 Ultra (`nvidia/nemotron-3-ultra-550b-a55b`) | ga | 2026-06-04 | 1M | $0.50 | $2.20 | Hybrid Mamba-Transformer LatentMoE, 550B total / 55B active, NVFP4 quantization, multi-token prediction | Frontier open-weight reasoning and long-running agents | prev: nvidia/nemotron-3-super-120b-a12b |
| Nemotron 3.5 ASR Streaming Multilingual (`nvidia/nemotron-3.5-asr-streaming-0.6b`) | ga | 2026-06-04 | — | — | — | Cache-Aware FastConformer-RNNT, 600M parameters | Low-latency multilingual streaming speech recognition | — |
| Nemotron 3.5 Content Safety (`nvidia/nemotron-3.5-content-safety`) | ga | 2026-06-04 | 128K | $0.00 | $0.00 | Gemma 3 4B IT fine-tuned (LoRA merged) for multimodal safety reasoning | Multimodal multilingual content safety moderation | — |
| Nemotron 3 Nano Omni (`nvidia/nemotron-3-nano-omni-30b-a3b`) | ga | 2026-04-28 | 1M | — | — | Hybrid MoE with unified text/image/audio/video encoders, 30B total / 3B active | Unified multimodal agents across text, image, audio, video | — |
| Nemotron 3 Nano Omni 30B-A3B Reasoning (`nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`) | ga | 2026-04-28 | 256K | $0.07 | $0.30 | Hybrid Mamba-2 + Transformer MoE with unified vision/audio/video encoders + Conv3D video layers (30B total / 3B active, 128 experts) | Unified multimodal agent perception across text, image, audio, and video | prev: nvidia/nemotron-3-nano-30b-a3b |
| Nemotron 3 Nano 4B (`nvidia/nemotron-3-nano-4b`) | ga | 2026-03-17 | 262.1K | — | — | Hybrid Mamba-2 + MLP with 4 attention layers (dense, ~3.97B params, compressed from Nano 9B v2) | Edge and on-device agentic AI on Jetson and RTX | prev: nvidia/nvidia-nemotron-nano-9b-v2 |
| Nemotron 3 Super (`nvidia/nemotron-3-super-120b-a12b`) | ga | 2026-03-11 | 1M | $0.15 | $0.65 | Hybrid Mamba2-Transformer LatentMoE, 120B total / 12B active, multi-token prediction | Efficient agentic workloads and complex multi-agent apps | prev: nvidia/nemotron-2-super |
| Nemotron 3 Nano (`nvidia/nemotron-3-nano-30b-a3b`) | ga | 2025-12-15 | 1M | $0.05 | $0.20 | Hybrid Mamba-Transformer MoE, 31.6B total / 3.6B active parameters | High-throughput edge and multi-agent inference | prev: nvidia/nemotron-2-nano |
| Nemotron Nano 9B V2 (`nvidia/nvidia-nemotron-nano-9b-v2`) | ga | 2025-08-18 | 131.1K | $0.04 | $0.16 | Dense hybrid Mamba-Transformer (9B) | Small reasoning model with thinking budget control | → superseded by: nvidia/nemotron-3-nano-30b-a3b |
| Llama-3.3 Nemotron Super 49B v1.5 (`nvidia/llama-3_3-nemotron-super-49b-v1_5`) | ga | 2025-07-25 | 128K | — | — | Dense transformer derived from Meta Llama-3.3-70B-Instruct with Neural Architecture Search compression (49B params) | Reasoning and agentic RAG on Llama-derived architecture | prev: nvidia/llama-3_3-nemotron-super-49b-v1 → superseded by: nvidia/nemotron-3-super-120b-a12b |
| Llama 3.1 Nemotron Ultra 253B v1 (`nvidia/llama-3.1-nemotron-ultra-253b-v1`) | ga | 2025-04-08 | 128K | $0.60 | $1.80 | Dense 253B (Llama 3.1 base, NAS-optimized) | Highest-accuracy complex agentic tasks (legacy tier) | → superseded by: nvidia/nemotron-3-super-120b-a12b |
| Nemotron-Labs-TwoTower 30B-A3B (`nvidia/nemotron-labs-twotower-30b-a3b`) | preview | 2026-07-01 | 131.1K | — | — | Block-wise autoregressive diffusion: frozen Nemotron-3-Nano-30B-A3B AR context tower + trainable bidirectional diffusion denoiser tower | High-throughput diffusion language generation research | prev: nvidia/nemotron-3-nano-30b-a3b |
| Nemotron 3 VoiceChat (`nvidia/nemotron-voicechat`) | preview | 2026-03-18 | — | — | — | Unified speech-to-speech: Parakeet audio encoder + Nemotron Nano v2 9B LLM backbone + TTS decoder (~12B total) | Full-duplex real-time conversational voice agents | — |
| Llama 3.3 Nemotron Super 49B v1 (`nvidia/llama-3.3-nemotron-super-49b-v1`) | deprecated | 2025-03-18 | 131.1K | $0.10 | $0.40 | Dense transformer (Llama 3.3 base, NAS-pruned) | Legacy mid-tier Nemotron reasoning | → superseded by: nvidia/nemotron-3-super-120b-a12b |

## OpenAI

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GPT-5.6 Luna (`gpt-5.6-luna`) | ga | 2026-07-09 | 1.1M | $1.00 | $6.00 | Transformer reasoning model | fast low-cost agentic and bulk workloads | prev: gpt-5.4-mini |
| GPT-5.6 Sol (`gpt-5.6-sol`) | ga | 2026-07-09 | 1.1M | $5.00 | $30.00 | Transformer reasoning model | frontier agentic coding and long-horizon reasoning | prev: gpt-5.5 |
| GPT-5.6 Terra (`gpt-5.6-terra`) | ga | 2026-07-09 | 1.1M | $2.50 | $15.00 | Transformer reasoning model | balanced everyday production workloads | prev: gpt-5.4 |
| GPT-5.5 Instant (`gpt-5.5-instant`) | ga | 2026-05-05 | 1M | $5.00 | $30.00 | — | Fast default chat for ChatGPT-style workloads | prev: gpt-5.3-instant |
| GPT-5.5 (`gpt-5.5`) | ga | 2026-04-23 | 1.1M | $5.00 | $30.00 | Transformer reasoning model | general-purpose flagship writing, coding, analysis | prev: gpt-5 → superseded by: gpt-5.6-sol |
| GPT-5.5 Pro (`gpt-5.5-pro`) | ga | 2026-04-23 | 1M | $30.00 | $180.00 | — | Highest-intelligence answers on the hardest problems | prev: gpt-5.4-pro → superseded by: gpt-5.6-sol |
| GPT-5.4 mini (`gpt-5.4-mini`) | ga | 2026-03-17 | 272K | $0.75 | $4.50 | — | fast cost-efficient reasoning for high-volume workloads | prev: gpt-5-mini |
| GPT-5.4 nano (`gpt-5.4-nano`) | ga | 2026-03-17 | 272K | $0.20 | $1.25 | — | cheapest fastest option for high-volume simple tasks | prev: gpt-5-nano |
| GPT-5.4 (`gpt-5.4`) | ga | 2026-03-05 | 272K | $2.50 | $15.00 | — | reasoning with native computer-use and tool-heavy agents | prev: gpt-5.2 → superseded by: gpt-5.5 |
| GPT-5 (`gpt-5`) | ga | 2025-08-07 | 400K | $1.25 | $10.00 | — | General-purpose reasoning and multimodal tasks | prev: gpt-4o → superseded by: gpt-5.4 |
| gpt-oss-120b (`gpt-oss-120b`) | ga | 2025-08-05 | 131.1K | $0.03 | $0.15 | Mixture-of-Experts, 117B total parameters, 5.1B active per forward pass, native MXFP4 quantization | Self-hostable open-weights reasoning at low cost | — |
| o4-mini (`o4-mini`) | ga | 2025-04-16 | 200K | $1.10 | $4.40 | — | cheap reasoning for STEM and coding | prev: o3-mini |

## Perplexity

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Sonar Pro Search (`sonar-pro-search`) | ga | 2025-10-30 | 200K | $3.00 | $15.00 | Search-grounded agentic LLM with multi-step tool use built on Sonar Pro | Agentic multi-step search with tool use | prev: sonar-pro |
| Sonar Deep Research (`sonar-deep-research`) | ga | 2025-03-07 | 128K | $2.00 | $8.00 | search-augmented deep research agent | Multi-source deep research reports | — |
| Sonar Reasoning Pro (`sonar-reasoning-pro`) | ga | 2025-03-01 | 128K | $2.00 | $8.00 | Reasoning stack powered by DeepSeek-R1 | Search-augmented chain-of-thought reasoning | prev: sonar-reasoning |
| Sonar (`sonar`) | ga | 2025-01-21 | 128K | $1.00 | $1.00 | search-augmented LLM | Lightweight grounded search with citations | — |
| Sonar Pro (`sonar-pro`) | ga | 2025-01-21 | 200K | $3.00 | $15.00 | search-augmented LLM | Complex multi-step search with deep retrieval | prev: sonar |
| Sonar Reasoning (`sonar-reasoning`) | deprecated | 2025-01-21 | 127K | $1.00 | $5.00 | Reasoning-tuned Sonar model with chain-of-thought over web search results | Legacy real-time reasoning with web search | → superseded by: sonar-reasoning-pro |

## xAI

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Grok 4.5 (`grok-4.5`) | ga | 2026-07-08 | 500K | $2.00 | $6.00 | V9 ninth-generation foundation model (~1.5T parameters), trained on Cursor developer session data for coding and agentic workloads | frontier coding, agentic engineering, and knowledge work | prev: grok-4.3 |
| Grok 4.5 (`grok-4-5`) | ga | 2026-07-08 | 500K | $2.00 | $6.00 | — | Flagship reasoning, coding, and agentic work | prev: grok-4-3 |
| Grok 4.3 (`grok-4.3`) | ga | 2026-04-30 | 1M | $1.25 | $2.50 | reasoning-first transformer with always-on chain-of-thought | flagship reasoning and agentic enterprise workloads at lower cost than 4.5 | prev: grok-4.20 → superseded by: grok-4.5 |
| Grok 4.3 (`grok-4-3`) | ga | 2026-04-30 | 1M | $1.25 | $2.50 | Reasoning-centric model with always-on chain-of-thought | Long-context reasoning and document/video analysis | prev: grok-4 → superseded by: grok-4-5 |
| Grok Voice Think Fast 1.0 (`grok-voice-think-fast-1.0`) | ga | 2026-04-23 | — | — | — | Voice-native full-duplex model with background reasoning for real-time conversation | Full-duplex voice agents for enterprise use | — |
| Grok 4.20 (`grok-4.20`) | ga | 2026-03-31 | 2M | $2.00 | $6.00 | reasoning transformer with configurable reasoning effort and 2M context | long-context agentic tool calling at high throughput | prev: grok-4.1 → superseded by: grok-4.3 |
| Grok 4.1 Fast (`grok-4-1-fast`) | ga | 2025-11-19 | 2M | $0.20 | $0.50 | Compact fast variant of Grok 4.1 | High-throughput agentic tool calling at low cost | prev: grok-3-mini → superseded by: grok-4.3 |
| Grok 4 (`grok-4-0709`) | ga | 2025-07-09 | 256K | $3.00 | $15.00 | — | Complex synthesis, analysis, and instruction following | prev: grok-3 → superseded by: grok-4-5 |
| Grok 4 Fast Non-Reasoning (`grok-4-fast-non-reasoning`) | ga | — | 2M | $0.20 | $0.50 | — | Cheap high-throughput non-reasoning tasks with 2M context | — |
| Grok 4 Fast Reasoning (`grok-4-fast-reasoning`) | ga | — | 2M | $0.20 | $0.50 | — | Fast, cheap reasoning with 2M context | — |
| Grok 4.20 (`grok-4-20`) | ga | — | 2M | $1.25 | $2.50 | — | Long-context agentic tool-calling at high speed | prev: grok-4.3 |
| Grok Imagine Video 1.5 Preview (`grok-imagine-video-1.5-preview`) | preview | 2026-05-30 | — | — | — | Imagine video diffusion model with integrated audio generation | Cinematic image-to-video with synchronized audio | prev: grok-imagine-video |
| Grok Build 0.1 (`grok-build-0.1`) | preview | 2026-05-29 | 256K | $1.00 | $2.00 | coding-specialized transformer for agentic software engineering (powers Grok Build CLI) | agentic coding, IDE integrations, terminal coding agents | prev: grok-code-fast-1 |
| Grok 4.20 Multi-Agent Beta (`grok-4.20-multi-agent-beta-0309`) | preview | 2026-03-09 | 2M | $2.00 | $6.00 | Multi-agent collaborative orchestration built on Grok 4.20 (4 or 16 agent configurations) | Collaborative multi-agent reasoning and deep research | prev: grok-4.20 |
| Grok Code Fast 1 (`grok-code-fast-1`) | deprecated | — | 256K | $0.20 | $1.50 | — | Agentic coding across TypeScript/Python/Go/Rust | → superseded by: grok-4-5 |

