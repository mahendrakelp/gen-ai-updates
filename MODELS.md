# Frontier Production Model Catalog

_Last refreshed: 2026-10-22 by genai-model-catalog routine._

## Alibaba

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Qwen3.8-LiveTranslate-Flash-Realtime (`qwen3.8-livetranslate-flash-realtime`) | ga | 2026-09-19 | — | $7.50 | $20.00 | Interleave real-time interpretation architecture | Real-time simultaneous interpretation across 60 languages | prev: qwen3.5-livetranslate-flash-realtime |
| Qwen3.8-Omni-Flash (`qwen3.8-omni-flash`) | ga | 2026-09-18 | 1M | $0.15 | $0.47 | Native omnimodal MoE built on Qwen3.8-Flash-Next architecture | Cheap omni-modal understanding (audio/video/image/text) | prev: qwen3-omni-flash |
| Qwen3.8-Max (2026-09-02 snapshot) (`qwen3.8-max-0902`) | ga | 2026-09-02 | 1M | $2.00 | $6.00 | Mixture-of-Experts (~2.4T total) | Pinned Qwen3.8-Max snapshot for reproducibility | prev: qwen3.8-max |
| Qwen3.8-Max-0902 (`qwen3.8-max-2026-09-02`) | ga | 2026-09-02 | 1M | — | — | — | Engineering-scale coding and multi-tool agent orchestration | prev: qwen3.8-max |
| Qwen3.8-Flash (`qwen3.8-flash`) | ga | 2026-08-26 | 1M | $0.15 | $0.47 | MoE 125B total / 6B active per token (plus 51B n-gram embedding component) | Fast cheap multimodal coding and agents | prev: qwen-flash |
| Qwen3.8-27B (`qwen3.8-27b`) | ga | 2026-08-14 | 262K | $0.40 | $3.00 | Qwen3.8 27B dense/MoE (official repo) | Open-weight general purpose model under 30B | prev: qwen3.6-27b |
| Qwen3.8-2.4T-A95B (`qwen3.8-2.4t-a95b`) | ga | 2026-08-12 | 1M | — | — | Mixture-of-Experts, 2.4T total / 95B active | Open-weight Qwen-Max-class release | prev: Qwen3-235B-A22B |
| Qwen3.8-Max (`qwen3.8-max`) | ga | 2026-08-03 | 1M | $2.00 | $6.00 | Sparse MoE — 2.4T total / 95B active parameters | Frontier reasoning, agentic workflows, and multimodal tasks | prev: qwen3-max |
| Qwen3.7-Flash (`qwen3.7-flash`) | ga | 2026-07-27 | 1M | $0.03 | $0.13 | Sparse Mixture-of-Experts vision-language model | Cheap high-volume classification, extraction, subagents | prev: qwen3.5-flash |
| Qwen3.7-Plus (`qwen3.7-plus`) | ga | 2026-05-26 | 1M | $0.40 | $1.60 | Hybrid-thinking MoE (parameter count not disclosed) | Cost-effective multimodal agent workloads | prev: qwen3.6-plus |
| Qwen3.7-Max (`qwen3.7-max`) | ga | 2026-05-21 | 1M | $2.50 | $7.50 | Sparse MoE | Previous-gen Max flagship for reasoning | prev: qwen3-max → superseded by: qwen3.8-max |
| Qwen3.6-27B (`qwen3.6-27b`) | ga | 2026-04-22 | 262K | $0.60 | $3.60 | Dense decoder-only Transformer, 27B parameters | Open-weight dense flagship for coding and agents | — |
| Qwen3.6-Flash (`qwen3.6-flash`) | ga | 2026-04-15 | 1M | $0.19 | $1.13 | MoE vision-language model | Cheap high-throughput vision plus agentic coding | prev: qwen3.5-flash |
| Qwen3.5-Omni-Flash (`qwen3.5-omni-flash`) | ga | 2026-03-30 | 262K | $0.10 | $0.80 | Thinker-Talker Mixture-of-Experts, natively end-to-end omni-modal | Realtime omnimodal voice and video interaction | prev: qwen3-omni-flash |
| Qwen3.5-Omni-Plus (`qwen3.5-omni-plus`) | ga | 2026-03-30 | 256K | $0.43 | $4.80 | MoE — 30B total / 3B active | Real-time omnimodal I/O with speech output | prev: qwen3-omni-30b-a3b |
| Qwen3-Coder-Next (`qwen3-coder-next`) | ga | 2026-02-04 | 262K | $0.11 | $0.80 | Sparse MoE (80B total / 3B active, hybrid attention) | Cost-efficient coding-agent workloads with self-hostable open weights | prev: qwen3-coder-plus |
| Qwen3.5-Flash (`qwen3.5-flash`) | ga | 2026-02-01 | 262K | $0.10 | $0.40 | Mixture-of-experts (Qwen3.5 family, up to 397B/17B active) | Ultra-cheap high-throughput Qwen tier | prev: qwen3-flash |
| Qwen3.5-Plus (`qwen3.5-plus`) | ga | 2026-02-01 | 262K | $0.40 | $2.40 | MoE — 397B total / 17B active (Qwen3.5-397B-A17B) | Balanced Qwen3.5 tier for production workloads | prev: qwen-plus |
| Qwen3-Max-Thinking (`qwen3-max-thinking`) | ga | 2026-01-23 | 262K | $1.20 | $6.00 | Sparse MoE, >1T total parameters, reasoning variant | Hard reasoning, math, coding, agentic tool use | prev: qwen3-max |
| Qwen3 Max (`qwen3-max`) | ga | 2025-09-23 | 262K | $1.20 | $6.00 | Mixture-of-Experts (MoE) | Flagship agentic coding and tool use | prev: qwen2.5-max → superseded by: qwen3.8-max |
| Qwen3 VL Max (`qwen3-vl-max`) | ga | 2025-09-23 | 131K | — | — | — | Flagship vision-language reasoning | — |
| Qwen3-Coder-Plus (`qwen3-coder-plus`) | ga | 2025-09-23 | 1M | $1.00 | $5.00 | Sparse MoE (proprietary variant of Qwen3-Coder 480B / 35B active) | Agentic coding, long-context repository-level development | prev: qwen3-coder-plus-2025-07-22 → superseded by: qwen3.8-max |
| Qwen3-Coder-Plus (`qwen3-coder-plus-2025-09-23`) | ga | 2025-09-23 | 262K | — | — | MoE 480B total / 35B active per token (Qwen3-Coder-480B-A35B backbone) | Agentic coding, repo-scale edits, function calling | prev: qwen3-coder-plus-2025-07-22 |
| Qwen3-VL 235B A22B Instruct (`qwen3-vl-235b-a22b-instruct`) | ga | 2025-09-23 | 262K | — | — | Qwen3-VL MoE, 235B total / 22B active | Open-weight multimodal vision-language flagship | prev: qwen-vl-max |
| Qwen3-VL-Plus (`qwen3-vl-plus`) | ga | 2025-09-23 | 262K | $0.20 | $1.60 | Qwen3 base with vision encoder (closed weights) | Cost-efficient multimodal vision and video understanding | prev: qwen-vl-plus → superseded by: qwen3.5-plus |
| Qwen3-Omni (`qwen3-omni`) | ga | 2025-09-22 | 66K | — | — | Thinker-Talker Mixture-of-Experts; multi-codebook speech codec with causal ConvNet decoder | End-to-end multimodal (text, image, audio, video) | prev: qwen2.5-omni |
| Qwen3-Omni-30B-A3B-Instruct (`qwen3-omni-30b-a3b-instruct`) | ga | 2025-09-22 | 66K | $0.25 | $0.97 | Sparse MoE — 30B total / 3B active parameters, native omni-modal | Open-weights native omni-modal (text/vision/audio/video) | prev: qwen2.5-omni |
| Qwen3-Coder-Flash (`qwen3-coder-flash`) | ga | 2025-09-17 | 1M | $0.20 | $0.98 | Mixture-of-Experts (MoE) | Fast, low-cost autonomous coding agents | — |
| Qwen3-Omni Flash (`qwen3-omni-flash`) | ga | 2025-09-15 | 66K | $0.15 | $0.47 | Qwen3-Omni unified multimodal | Any-to-any multimodal with audio I/O | prev: qwen2.5-omni |
| Qwen3-Next-80B-A3B-Instruct (`qwen3-next-80b-a3b-instruct`) | ga | 2025-09-11 | 262K | — | — | Hybrid Gated DeltaNet + Gated Attention ultra-sparse MoE, 80B params with 3B active | Ultra-efficient long-context inference | prev: qwen3-32b |
| Qwen-Flash (`qwen-flash`) | ga | 2025-07-28 | 1.0M | $0.05 | $0.40 | Qwen3 small MoE | Fast low-cost Qwen tier for high-volume | prev: qwen-turbo |
| Qwen-Flash (`qwen-flash-2025-07-28`) | ga | 2025-07-28 | 1M | — | — | Mixture-of-Experts (MoE) | Cost-effective low-latency simple tasks | prev: qwen-turbo |
| Qwen-Plus (`qwen-plus-2025-07-28`) | ga | 2025-07-28 | 1M | — | — | Mixture-of-Experts (MoE), hybrid reasoning | Balanced performance, speed, and cost | prev: qwen-plus |
| Qwen3-235B-A22B-Thinking-2507 (`qwen3-235b-a22b-thinking-2507`) | ga | 2025-07-25 | 262K | $0.70 | $8.40 | MoE, 235B total / 22B active parameters | Open-weights deep reasoning, math, science | prev: qwen3-235b-a22b |
| Qwen3-Coder-480B-A35B-Instruct (`qwen3-coder-480b-a35b-instruct`) | ga | 2025-07-23 | 262K | $1.00 | $5.00 | Sparse MoE — 480B total / 35B active | Open-weight agentic coding, browser-use and tool-use | prev: qwen2.5-coder-32b-instruct |
| Qwen3-235B-A22B-Instruct-2507 (`qwen3-235b-a22b-instruct-2507`) | ga | 2025-07-21 | 262K | $0.70 | $2.80 | Sparse MoE — 235B total / 22B active | Open-weight flagship MoE for self-hosting and fine-tuning | prev: qwen3-235b-a22b → superseded by: qwen3-max |
| Qwen-Turbo (`qwen-turbo`) | ga | 2025-04-29 | 1M | $0.05 | $0.20 | Dense Transformer (undisclosed) | High-throughput, low-latency, long-context chat | → superseded by: qwen-flash |
| Qwen-Plus (`qwen-plus-2025-04-28`) | ga | 2025-04-28 | 129K | $0.40 | $1.20 | Dense/MoE Transformer (undisclosed) | Balanced cost and performance for general tasks | prev: qwen-plus-2025-01-25 |
| Qwen3 Plus (`qwen-plus`) | ga | 2025-04-28 | 131K | $0.40 | $1.20 | Mixture-of-Experts (MoE) | Balanced price-performance workhorse | prev: qwen2.5-plus |
| Qwen3-235B-A22B-Instruct (`qwen3-235b-a22b-instruct`) | ga | 2025-04-28 | 131K | $0.09 | $0.10 | Mixture-of-Experts, 235B total / 22B active | Open-weight MoE with thinking mode | prev: qwen2.5-72b-instruct |
| QwQ-32B (`qwq-32b`) | ga | 2025-03-06 | 131K | — | — | 32B dense transformer based on Qwen2.5-32B, RL-trained for reasoning | Open-weight reasoning at 32B scale | prev: qwq-32b-preview |
| Qwen-VL-Max (`qwen-vl-max`) | ga | 2025-02-01 | 131K | $0.80 | $3.20 | Vision-language transformer | Flagship vision-language understanding | prev: qwen-vl-plus → superseded by: qwen3-vl-plus |
| Qwen Text Embedding v4 (`text-embedding-v4`) | ga | — | 33K | $0.02 | $0.00 | Dense transformer embedding model (Qwen3-Embedding family) | multilingual embeddings and retrieval | prev: text-embedding-v3 |
| Qwen3.5-Omni-Flash-Realtime (`qwen3.5-omni-flash-realtime`) | ga | — | — | $0.55 | $4.50 | End-to-end omni-modal transformer | real-time voice and video chat | prev: qwen3.5-omni-flash |
| Qwen3.8-Flash-Next (`qwen3.8-flash-next`) | preview | 2026-08-26 | 262K | $0.16 | $0.47 | MoE (125B total, 6B active) | Preview of Qwen4 architecture, cost-efficient agents | — |
| Qwen3.8-Max-Preview (`qwen3.8-max-preview`) | deprecated | 2026-07-19 | 984K | — | — | Sparse MoE (~2.4T total parameters, multimodal) | Next-gen flagship reasoning and agentic tasks | prev: qwen3.7-max → superseded by: qwen3.8-max |
| Qwen2.5 Max (`qwen-max`) | deprecated | 2025-01-28 | 33K | $1.60 | $6.40 | Mixture-of-Experts (MoE) | Previous flagship, superseded | → superseded by: qwen3-max |
| Qwen3.6-Plus (`qwen3.6-plus`) | GA | 2026-03-30 | 1M | $0.33 | $1.95 | Hybrid linear attention + sparse MoE | plus tier | prev: qwen3.5-plus |

## Amazon

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Nova 2.5 Sonic (`amazon.nova-2-5-sonic-v1:0`) | ga | 2026-10-05 | 262K | — | — | — | Speech-to-speech voice agents with async tool calling | prev: amazon.nova-2-sonic-v1:0 |
| Amazon Nova 2 Lite (`amazon.nova-2-lite-v1:0`) | ga | 2025-12-02 | 1M | $0.30 | $2.50 | Multimodal foundation model with extended-thinking reasoning | Fast cost-effective agentic reasoning | prev: amazon.nova-lite-v1:0 |
| Amazon Nova Sonic (`amazon.nova-sonic-v1:0`) | ga | 2025-12-02 | — | $0.33 | $2.75 | Unified speech-to-speech foundation model | Real-time speech-to-speech conversational AI | prev: amazon.nova-sonic-v1:0 → superseded by: amazon.nova-2-sonic-v1:0 |
| Nova 2 Sonic (`amazon.nova-2-sonic-v1:0`) | ga | 2025-12-02 | 1M | $0.33 | $2.75 | Speech-to-speech multimodal foundation model | Real-time natural speech-to-speech conversational AI | prev: amazon.nova-sonic-v1:0 → superseded by: amazon.nova-2-5-sonic-v1:0 |
| Nova Premier (`amazon.nova-premier-v1:0`) | ga | 2025-04-30 | 1M | $2.50 | $12.50 | multimodal foundation model | Complex reasoning and distillation teacher | prev: amazon.nova-pro-v1:0 → superseded by: amazon.nova-2-lite-v1:0 |
| Amazon Nova Canvas (`amazon.nova-canvas-v1:0`) | ga | 2024-12-03 | — | — | — | Diffusion image generation model | Studio-quality image generation and editing | — |
| Nova Lite (`amazon.nova-lite-v1:0`) | ga | 2024-12-03 | 300K | $0.06 | $0.24 | Multimodal foundation model | Low-cost multimodal workloads | → superseded by: amazon.nova-2-lite-v1:0 |
| Nova Micro (`amazon.nova-micro-v1:0`) | ga | 2024-12-03 | 128K | $0.04 | $0.14 | Text-only foundation model | Fast, cheapest text-only Nova tier | → superseded by: amazon.nova-2-lite-v1:0 |
| Nova Pro (`amazon.nova-pro-v1:0`) | ga | 2024-12-03 | 300K | $0.80 | $3.20 | Multimodal foundation model | Balanced accuracy, speed and cost | → superseded by: amazon.nova-2-pro-preview-20251202-v1:0 |
| Amazon Titan Text Embeddings V2 (`amazon.titan-embed-text-v2:0`) | ga | 2024-04-30 | 8K | $0.02 | — | — | cost-effective text embeddings for RAG | prev: amazon.titan-embed-text-v1 |
| Amazon Nova 2 Pro (`amazon.nova-2-pro-preview-20251202-v1:0`) | preview | 2025-12-02 | 1M | $2.19 | $17.50 | Multimodal foundation model (Nova 2 family) | Complex multi-step agentic reasoning | prev: amazon.nova-pro-v1:0 |
| Nova 2 Omni (Preview) (`amazon.nova-2-omni-preview-20251202-v1:0`) | preview | 2025-12-02 | 1M | $0.30 | $2.50 | Any-to-any omnimodal reasoning model | Unified multimodal reasoning and image generation | — |
| Nova 2 Pro (`us.amazon.nova-2-pro-preview-20251202-v1:0`) | preview | 2025-12-02 | 1M | $2.19 | $17.50 | Multimodal reasoning transformer with adjustable-depth thinking | Frontier multistep agentic reasoning with thinking | prev: amazon.nova-premier-v1:0 |
| Nova 2 Pro (Preview) (`amazon.nova-2-pro-v1:0`) | preview | 2025-12-02 | 1M | $2.19 | $17.50 | Multimodal foundation model with extended-thinking reasoning | Highly complex multistep agentic tasks | prev: amazon.nova-pro-v1:0 |

## Anthropic

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Claude Haiku 5.5 (`claude-haiku-5-5`) | ga | 2026-10-07 | 200K | $0.10 | $0.50 | — | Fast, cheap high-volume workloads | prev: claude-haiku-4-5 |
| Claude Sonnet 5.5 (`claude-sonnet-5-5`) | ga | 2026-09-28 | 1M | $2.00 | $10.00 | — | Balanced reasoning and coding at scale | prev: claude-sonnet-5 |
| Claude Opus 5.5 (`claude-opus-5-5`) | ga | 2026-09-22 | 1M | $4.00 | $20.00 | — | Long-running agentic coding and knowledge work | prev: claude-opus-5 |
| Claude Fable 5.1 (`claude-fable-5-1`) | ga | 2026-09-01 | 500K | $1.00 | $5.00 | Adaptive-thinking transformer with new tokenizer | Creative writing and narrative generation | prev: claude-fable-5 |
| Claude Opus 5 (`claude-opus-5`) | ga | 2026-07-24 | 1M | $5.00 | $25.00 | Adaptive-thinking transformer | Frontier coding and knowledge work | prev: claude-opus-4-8 → superseded by: claude-opus-5-5 |
| Claude Sonnet 5 (`claude-sonnet-5`) | ga | 2026-06-30 | 1M | $2.00 | $10.00 | Adaptive-thinking transformer with new tokenizer | High-volume agentic coding and enterprise workflows | prev: claude-sonnet-4-6 → superseded by: claude-sonnet-5-5 |
| Claude Fable 5 (`claude-fable-5`) | ga | 2026-06-09 | 1M | $10.00 | $50.00 | Hybrid reasoning model with adaptive thinking | Highest-capability workloads before Fable 5.1 | prev: claude-opus-4-8 → superseded by: claude-fable-5-1 |
| Claude Opus 4.7 (`claude-opus-4-7`) | ga | 2026-04-16 | 1M | $5.00 | $25.00 | — | Legacy flagship for coding and agentic work | prev: claude-opus-4-6 → superseded by: claude-opus-5-5 |
| Claude Haiku 4.5 (`claude-haiku-4-5`) | ga | 2025-10-15 | 200K | $1.00 | $5.00 | Extended-thinking transformer | Fastest Claude with near-frontier intelligence at low cost | prev: claude-haiku-3-5 |
| Claude Haiku 4.5 (`claude-haiku-4-5-20251001`) | ga | 2025-10-15 | 200K | $1.00 | $5.00 | Haiku-tier compact model | Fastest model with near-frontier intelligence | prev: claude-haiku-3-5 |
| Claude Opus 4.5 (`claude-opus-4-5`) | ga | — | 1M | $5.00 | $25.00 | — | Legacy Opus tier (still available) | prev: claude-opus-4-1 → superseded by: claude-opus-5-5 |
| Claude Sonnet 4.5 (`claude-sonnet-4-5`) | ga | — | 1M | $3.00 | $15.00 | — | Legacy Sonnet tier (still available) | → superseded by: claude-sonnet-5-5 |
| Claude Mythos 5.1 (`claude-mythos-5-1`) | preview | 2026-09-01 | 1M | $10.00 | $50.00 | Same base as Claude Fable 5.1 with reduced classifier gating | Defensive cybersecurity and dual-use workflows | prev: claude-mythos-5 |
| Claude Mythos 5 (`claude-mythos-5`) | preview | 2026-06-09 | 1M | $10.00 | $50.00 | Same underlying model as Claude Fable 5; uses the newer tokenizer introduced with Opus 4.7 | Defensive cybersecurity workflows | prev: claude-mythos-preview → superseded by: claude-mythos-5-1 |
| Claude Opus 4.8 (`claude-opus-4-8`) | deprecated | 2026-05-28 | 1M | $5.00 | $25.00 | Transformer LLM using the newer tokenizer introduced with Claude Opus 4.7 | Legacy Opus tier, superseded by Opus 5 | prev: claude-opus-4-7 → superseded by: claude-opus-5 |
| Claude Sonnet 4.6 (`claude-sonnet-4-6`) | deprecated | 2026-02-17 | 1M | $3.00 | $15.00 | Transformer | Legacy Sonnet tier, superseded by Sonnet 5 | prev: claude-sonnet-4-5 → superseded by: claude-sonnet-5 |
| Claude Opus 4.6 (`claude-opus-4-6`) | deprecated | 2026-02-05 | 1M | $5.00 | $25.00 | — | Legacy Opus tier, superseded by Opus 4.7 | prev: claude-opus-4-5 → superseded by: claude-opus-4-7 |
| Claude Opus 4.5 (`claude-opus-4-5-20251101`) | deprecated | 2025-11-01 | 200K | $5.00 | $25.00 | — | Legacy Opus tier, superseded by Opus 4.6 | prev: claude-opus-4-1 → superseded by: claude-opus-4-6 |
| Claude Sonnet 4.5 (`claude-sonnet-4-5-20250929`) | deprecated | 2025-09-29 | 200K | $3.00 | $15.00 | — | Legacy Sonnet tier, superseded by Sonnet 4.6 | prev: claude-sonnet-4 → superseded by: claude-sonnet-4-6 |

## Cohere

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| North Small Translate (`north-small-translate-1-0`) | ga | 2026-09-09 | 16K | — | — | MoE 218B total / 25B active | Machine translation across 50+ languages | — |
| Parse 5 (`parse-v5.0`) | ga | 2026-08-27 | 8K | — | — | 2.3B parameter multimodal vision-language model | Document parsing to structured Markdown | — |
| Cohere Transcribe Arabic (`cohere-transcribe-arabic-07-2026`) | ga | 2026-07-07 | — | — | — | 2B encoder-decoder transformer fine-tuned from Cohere Transcribe for Arabic ASR | Arabic speech-to-text with dialect coverage | prev: cohere-transcribe-03-2026 |
| North Mini Code (`north-mini-code-1-0`) | ga | 2026-06-17 | 256K | — | — | MoE 30B total / 3B active | Agentic coding for developers | — |
| North Mini Code (`north-mini-code-1.0`) | ga | 2026-06-09 | 256K | $0.00 | $0.00 | Sparse Mixture-of-Experts, 30B total parameters / 3B active per token | Agentic software engineering, code generation, and terminal/CLI tasks; local-hardware coding agents | — |
| Command A+ (`command-a-plus`) | ga | 2026-05-20 | 192K | $0.30 | $1.50 | sparse mixture-of-experts (218B total parameters, ~25B active) | unified flagship for agentic enterprise workloads | prev: command-a-03-2025 → superseded by: command-a-plus-05-2026 |
| Command A+ (`command-a-plus-05-2026`) | ga | 2026-05-20 | 128K | $2.50 | $10.00 | Mixture of Experts (MoE); 25B active parameters, 218B total parameters | Enterprise agentic workflows, reasoning, vision, translation | prev: command-a-03-2025 |
| Cohere Transcribe (`cohere-transcribe-03-2026`) | ga | 2026-03-26 | — | — | — | 2B encoder-decoder transformer with Fast-Conformer encoder (>90% params in encoder) | Real-time enterprise speech-to-text and meetings | — |
| Rerank 4 Fast (`rerank-v4.0-fast`) | ga | 2025-12-11 | 32K | — | — | cross-encoder reranker optimized for low latency | Low-latency, high-throughput multilingual reranking for production RAG | prev: rerank-v3.5 |
| Rerank 4 Pro (`rerank-v4.0`) | ga | 2025-12-11 | 33K | — | — | Cross-encoder reranker | Enterprise RAG and search reranking | prev: rerank-v3.5 → superseded by: rerank-v4.0-pro |
| Rerank 4 Pro (`rerank-v4.0-pro`) | ga | 2025-12-11 | 32K | $0.05 | — | cross-encoder reranker | High-accuracy semantic reranking for enterprise RAG | prev: rerank-v3.5 |
| Command A Translate (`command-a-translate-08-2025`) | ga | 2025-08-28 | 8K | $2.50 | $10.00 | Dense transformer, 111B parameters, translation-specialized | High-quality enterprise translation across 23 languages | prev: command-a-03-2025 → superseded by: command-a-plus-05-2026 |
| Command A Reasoning (`command-a-reasoning-08-2025`) | ga | 2025-08-21 | 256K | $2.50 | $10.00 | 111B parameter hybrid reasoning transformer | Enterprise reasoning and agentic planning | prev: command-a-03-2025 → superseded by: command-a-plus-05-2026 |
| Command A Vision (`command-a-vision-07-2025`) | ga | 2025-07-31 | 128K | $2.50 | $10.00 | Vision-language transformer, 112B parameters | Document and image understanding for enterprise | prev: command-a-03-2025 → superseded by: command-a-plus-05-2026 |
| Command A Reasoning (`command-a-reasoning`) | ga | 2025-06-17 | 256K | — | — | Dense transformer, 111B parameters | Agentic reasoning and tool orchestration | prev: command-a-03-2025 → superseded by: command-a-plus-05-2026 |
| Embed 4 (`embed-v4.0`) | ga | 2025-04-15 | 128K | $0.12 | $0.47 | Multimodal embedding model with Matryoshka representation learning | multimodal enterprise search and RAG embeddings | prev: embed-english-v3.0 |
| Command A (`command-a-03-2025`) | ga | 2025-03-13 | 256K | $2.50 | $10.00 | 111B parameter dense transformer | Agentic enterprise workflows | prev: command-r-plus-08-2024 → superseded by: command-a-plus-05-2026 |
| Command R7B (`command-r7b-12-2024`) | ga | 2024-12-13 | 128K | $0.04 | $0.15 | Dense 7B transformer | Smallest, cheapest Command tier for on-device/edge | prev: command-r-08-2024 |
| Rerank 3.5 (`rerank-v3.5`) | ga | 2024-12-03 | 4K | — | — | Transformer reranker optimised for multilingual retrieval | cross-lingual search result reranking | prev: rerank-v3.0 → superseded by: rerank-v4-pro |
| Aya Expanse 32B (`c4ai-aya-expanse-32b`) | ga | 2024-10-24 | 128K | $0.50 | $1.50 | Dense decoder-only transformer | Multilingual research and understanding | prev: aya-23-35b |
| Command R (08-2024) (`command-r-08-2024`) | ga | 2024-08-30 | 128K | $0.15 | $0.60 | Dense 32B transformer | Low-cost RAG and summarization | prev: command-r → superseded by: command-a-03-2025 |
| Command R+ (08-2024) (`command-r-plus-08-2024`) | deprecated | 2024-08-30 | 128K | $2.50 | $10.00 | 104B parameter dense transformer | Legacy enterprise RAG workflows | prev: command-r-plus-04-2024 → superseded by: command-a-03-2025 |

## DeepSeek

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DeepSeek V4.1 Flash (`deepseek-flash`) | ga | 2026-09-10 | 1.0M | $0.30 | $1.20 | Sparse MoE — ~552B total parameters with ~8B active per prompt token (16B per decode token); 1 shared + 384 routed experts, 6 activated per token; DeepSeek Sparse Attention | Fast, cheap long-context chat with native vision | prev: deepseek-v4-flash |
| DeepSeek V4.1 Flash (open weights) (`deepseek-ai/DeepSeek-V4.1-Flash`) | ga | 2026-09-10 | 1.0M | — | — | 552B-param Mixture-of-Experts with Causal Encoder-Decoder (CED); 40-layer Transformer (20 encoder + 20 decoder); CSA2 hierarchical sparse indexer; FP4 main KV cache; +196B sparse Engram memory (total ~748B) | Multimodal reasoning and self-hosted inference | prev: deepseek-ai/DeepSeek-V4-Flash |
| DeepSeek V4.1-Flash (`deepseek-v4.1-flash`) | ga | 2026-09-10 | 1.0M | $0.30 | $1.20 | Multimodal Sparse MoE — 552B total / ~8B active (prefill), ~16B (decode); 40-layer Causal Encoder-Decoder; 1 shared + 384 routed experts, 6 activated per token; DeepSeek-ViT vision tower | Multimodal, cost-efficient high-throughput agentic workloads | prev: deepseek-v4-flash |
| DeepSeek V4 Pro 0813 (`deepseek-v4-pro-0813`) | ga | 2026-08-13 | 1M | $1.32 | $3.96 | MoE, ~1.6T total params | Max-quality open-weight reasoning | prev: deepseek-v4-pro |
| DeepSeek V4-Pro (`deepseek-v4-pro`) | ga | 2026-08-13 | 1.0M | $0.43 | $0.87 | Sparse MoE — 1.6T total / ~49B active, hybrid Compressed Sparse Attention + Heavily Compressed Attention, pre-trained on 32T+ tokens | Flagship reasoning, coding, long-context agentic tasks | prev: deepseek-v3 → superseded by: deepseek-v4-pro-0813 |
| DeepSeek V4 Pro 0423 (`deepseek-v4-pro-0423`) | ga | 2026-04-24 | 1M | — | — | Sparse Mixture-of-Experts, 1.6T total | Prior-generation frontier reasoning | → superseded by: deepseek-v4-pro |
| DeepSeek V3.2 Exp (`deepseek-chat`) | ga | 2025-12-01 | 128K | $0.27 | $1.10 | Sparse MoE — 671B total / 37B active | Cost-efficient general chat completion | prev: deepseek-v3.1 → superseded by: deepseek-v4-flash |
| DeepSeek V3.2 Speciale (`deepseek-v3.2-speciale`) | ga | 2025-12-01 | 164K | $0.28 | $0.42 | Sparse MoE — 671B total / 37B active per token, specialized post-training on math and code reasoning | Olympiad-grade math and competitive programming | prev: deepseek-v3.2 |
| DeepSeek R1 (`deepseek-reasoner`) | ga | 2025-01-20 | 128K | $0.55 | $2.19 | Sparse MoE — 671B total / 37B active | Open-weights reasoning for math and code | prev: deepseek-r1 → superseded by: deepseek-v4-flash |
| DeepSeek V4-Flash Vision (experimental) (`deepseek-v4-flash-vision-exp`) | deprecated | 2026-08-21 | 1.3M | $0.22 | $0.66 | Sparse MoE, 284B total / 13B active per token, with vision encoder | Legacy image-in variant of V4 Flash | prev: deepseek-v4-flash → superseded by: deepseek-flash |
| DeepSeek V4-Flash (`deepseek-v4-flash`) | deprecated | 2026-07-31 | 1.0M | $0.14 | $0.28 | Sparse MoE — 284B total parameters, Compressed Sparse Attention | High-volume text workloads, legacy deepseek-chat/reasoner alias target | prev: deepseek-v3 → superseded by: deepseek-v4.1-flash |
| DeepSeek V4-Flash-0731 (`deepseek-v4-flash-0731`) | deprecated | 2026-07-31 | 1.0M | $0.22 | $0.66 | Mixture-of-Experts, 284B total / 13B active per token, Compressed Sparse Attention | Cost-efficient workhorse with agentic and coding gains | prev: deepseek-v4-flash → superseded by: deepseek-flash |
| DeepSeek-V3.2 (`deepseek-v3.2`) | deprecated | 2026-02-01 | 128K | $0.28 | $0.42 | Sparse MoE decoder-only transformer | Legacy DeepSeek general chat and reasoning | prev: deepseek-v3.1 → superseded by: deepseek-v4-flash |
| DeepSeek V3.2 (`deepseek-ai/DeepSeek-V3.2`) | deprecated | 2025-12-01 | 164K | $0.21 | $0.31 | Sparse MoE — 671B total / 37B active | Verified-baseline reasoning model with efficient sparse attention | prev: deepseek-v3.2 → superseded by: deepseek-v4-flash |
| DeepSeek V3.2 Exp (`deepseek-v3.2-exp`) | deprecated | 2025-09-29 | 164K | $0.28 | $0.42 | DeepSeek Sparse Attention variant built on V3.1-Terminus | legacy deepseek-chat / deepseek-reasoner endpoint compatibility | prev: deepseek-v3.1-terminus → superseded by: deepseek-v4-flash |
| DeepSeek-V3.1 (`deepseek-v3.1`) | deprecated | 2025-08-21 | 128K | $0.56 | $1.68 | Sparse MoE, 671B total / 37B active parameters, hybrid think/non-think dual-mode via chat template | First hybrid think / non-think DeepSeek model | prev: deepseek-chat (V3) → superseded by: deepseek-chat |
| DeepSeek-R1-0528 (`deepseek-r1-0528`) | deprecated | 2025-05-28 | 128K | $0.55 | $2.19 | Sparse MoE, 671B total / 37B active parameters, RL-trained reasoning model built on DeepSeek-V3 | Historical open-weights o1-class reasoning | prev: deepseek-r1 → superseded by: deepseek-reasoner |
| DeepSeek-R1 (`deepseek-r1`) | deprecated | 2025-01-20 | 66K | $0.55 | $2.19 | Sparse MoE - 671B total / 37B active, reinforcement-learning post-training for reasoning | Legacy chain-of-thought reasoning (open weights) | prev: deepseek-r1 → superseded by: deepseek-v4-pro |

## Google

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Gemini 4 Argon (`gemini-4-argon`) | ga | 2026-10-13 | 1.0M | $2.00 | $10.00 | Sparse mixture-of-experts transformer (Gemini 4 family) | Frontier reasoning, agentic coding, long-horizon tasks | prev: gemini-3.8-flash |
| Gemini Nano Banana 2.1 (`gemini-nano-banana-2.1`) | ga | 2026-10-06 | 131K | — | — | — | Conversational image generation and editing | prev: gemini-3.1-flash-lite-image |
| Gemini 3.1 Flash-Lite Image (Nano Banana 2 Lite) (`gemini-3.1-flash-lite-image`) | ga | 2026-09-16 | — | — | — | — | Ultra-low-latency, cheap image generation | — |
| Gemini Omni 1.1 Flash (`gemini-omni-1.1-flash`) | ga | 2026-09-16 | — | — | — | — | Conversational video generation and editing | prev: gemini-omni-flash-preview |
| Gemini 3.5 Transcribe (`gemini-3.5-transcribe`) | ga | 2026-09-15 | 96K | — | — | — | High-accuracy multilingual speech-to-text | — |
| Gemini 3.8 Live (`gemini-3.8-live`) | ga | 2026-09-15 | 128K | — | — | Native audio-to-audio Live model (Gemini 3.8 family) | Low-latency real-time voice agents | prev: gemini-omni-flash |
| Gemini 3.8 Live Extended Thinking (`gemini-3.8-live-extended-thinking`) | ga | 2026-09-15 | 128K | — | — | Native audio-to-audio Live model with extended reasoning (Gemini 3.8 family) | Real-time voice with deep reasoning | prev: gemini-3.8-live |
| Gemini 3.8 Flash (`gemini-3.8-flash`) | ga | 2026-09-02 | 1.0M | $0.75 | $3.75 | Sparse mixture-of-experts transformer (Gemini 3 family) | Fast, low-cost multimodal workhorse | prev: gemini-3.7-flash |
| Gemini 3.6 Flash (`gemini-3.6-flash`) | ga | 2026-08-13 | 1M | $0.75 | $3.75 | Natively multimodal reasoning model | General workhorse Flash with token-efficient planning | prev: gemini-3.5-flash → superseded by: gemini-3.7-flash |
| Gemini 3.7 Flash (`gemini-3.7-flash`) | ga | 2026-08-13 | 1.0M | $0.75 | $3.75 | Sparse Mixture-of-Experts, natively multimodal transformer | Coding and agent workloads at Flash price point | prev: gemini-3.6-flash → superseded by: gemini-3.8-flash |
| Gemini 3.5 Flash-Lite (`gemini-3.5-flash-lite`) | ga | 2026-07-21 | 1.0M | $0.30 | $2.50 | Sparse mixture-of-experts transformer (Gemini 3.5 family) | Highest throughput, lowest cost production tasks | prev: gemini-3.1-flash-lite |
| Gemma 4 12B (`gemma-4-12b`) | ga | 2026-06-03 | 262K | $0.00 | $0.00 | dense | Multimodal open model for laptops | — |
| Gemini 3.5 Flash (`gemini-3.5-flash`) | ga | 2026-05-19 | 1.0M | $1.50 | $9.00 | Distilled multimodal transformer | Pro-level reasoning at Flash latency, agentic workloads | prev: gemini-3-flash-preview → superseded by: gemini-3.8-flash |
| Gemini 3.1 Flash-Lite (`gemini-3.1-flash-lite`) | ga | 2026-05-11 | 1.0M | $0.25 | $1.50 | Compact distilled multimodal transformer | Cheapest high-volume multimodal inference | prev: gemini-2.5-flash-lite → superseded by: gemini-3.5-flash-lite |
| Gemma 4 (27B / MoE / dense family) (`gemma-4`) | ga | 2026-04-02 | 262K | — | — | Family: dense and mixture-of-experts open-weight multimodal transformers | Self-hosted open-weight multimodal deployment on-device or on-prem | prev: gemma-3 |
| Gemma 4 26B A4B Instruct (`gemma-4-26b-a4b-it`) | ga | 2026-04-02 | 262K | — | — | Mixture-of-Experts transformer, 25.2B total / 3.8B active parameters | Local and self-hosted multimodal deployments | prev: gemma-3-27b-it |
| Gemma 4 31B (`gemma-4-31b`) | ga | 2026-04-02 | 262K | — | — | Dense 31B decoder-only multimodal transformer | Open-weights self-hosted multimodal deployment | prev: gemma-3-27b-it |
| Gemma 4 31B Instruct (`gemma-4-31b-it`) | ga | 2026-04-02 | 262K | $0.15 | $0.60 | Dense decoder-only transformer; sibling MoE variant (Gemma 4 26B A4B) in the same family | Open-weight flagship for on-prem, fine-tuning and local inference | prev: gemma-3-27b-it |
| Gemini 3.1 Ultra (`gemini-3.1-ultra`) | ga | 2026-03-01 | 2M | $25.00 | $100.00 | Natively multimodal transformer with extended long-context attention | Frontier reasoning with 2M-token long context | prev: gemini-2.5-pro |
| Gemini 3 Flash (`gemini-3-flash`) | ga | 2026-01-15 | 1.0M | $0.50 | $4.00 | Sparse mixture-of-experts transformer optimized for throughput | High-throughput multimodal tasks at low cost | prev: gemini-2.5-flash → superseded by: gemini-3.5-flash |
| Gemini 3 Pro (`gemini-3-pro`) | ga | 2025-11-18 | 1.0M | $2.00 | $12.00 | Sparse mixture-of-experts transformer with native multimodal input | Advanced reasoning and multimodal agentic workflows | prev: gemini-2.5-pro → superseded by: gemini-3.1-pro-preview |
| Gemini 2.5 Flash-Lite (`gemini-2.5-flash-lite`) | ga | 2025-07-22 | 1.0M | $0.10 | $0.40 | Sparse mixture-of-experts transformer optimized for latency | Lowest-latency and lowest-cost multimodal | prev: gemini-2.0-flash-lite → superseded by: gemini-3.1-flash-lite-preview |
| Gemini 2.5 Flash (`gemini-2.5-flash`) | ga | 2025-06-17 | 1.0M | $0.30 | $2.50 | Sparse mixture-of-experts transformer optimized for throughput | Cost-efficient multimodal at scale | prev: gemini-1.5-flash → superseded by: gemini-3-flash |
| Gemini 2.5 Pro (`gemini-2.5-pro`) | ga | 2025-06-17 | 1.0M | $1.25 | $10.00 | Sparse mixture-of-experts transformer with native multimodal input | Complex reasoning and long-context analysis | prev: gemini-1.5-pro → superseded by: gemini-3-pro |
| Gemma 3 27B Instruct (`gemma-3-27b-it`) | ga | 2025-03-12 | 131K | $0.00 | $0.00 | Decoder-only transformer with 5:1 local-to-global attention | Open-weights multimodal model for self-hosting | prev: gemma-2-27b-it → superseded by: gemma-4 |
| Gemini 3.5 Transcribe Live (`gemini-3.5-transcribe-live`) | preview | 2026-09-15 | 96K | — | — | — | Low-latency bidirectional streaming ASR | — |
| Gemini Robotics ER 2 (`gemini-robotics-er-2-preview`) | preview | 2026-09-15 | — | — | — | — | Embodied reasoning for robotics | — |
| Gemini 3.8 Flash Cyber (`gemini-3.8-flash-cyber`) | preview | 2026-09-02 | 1M | — | — | — | Authorized cybersecurity defense workflows | prev: gemini-3.5-flash-cyber |
| Gemini 3.5 Flash Cyber (`gemini-3.5-flash-cyber`) | preview | 2026-07-21 | 1.0M | — | — | — | Security vulnerability discovery and fixes | prev: gemini-3.5-flash |
| Gemini 3.5 Pro (Preview) (`gemini-3.5-pro-preview`) | preview | 2026-05-19 | 2M | — | — | Sparse Mixture-of-Experts transformer with Deep Think reasoning | Limited enterprise preview of next flagship | prev: gemini-3.1-pro |
| Gemini Omni Flash (`gemini-omni-flash`) | preview | 2026-05-19 | — | — | — | Transformer with native multimodal text/vision/video/audio inputs | Consumer video generation and editing | → superseded by: gemini-omni-flash-preview |
| Gemini 3.1 Pro (`gemini-3.1-pro`) | preview | 2026-02-20 | 1M | $2.00 | $12.00 | Sparse mixture-of-experts multimodal transformer | Most advanced Gemini reasoning across multimodal inputs | prev: gemini-3-pro → superseded by: gemini-3.1-ultra |
| Gemini 3.1 Pro (`gemini-3.1-pro-preview`) | preview | 2026-02-19 | 1.0M | $2.00 | $12.00 | Sparse mixture-of-experts transformer (Gemini 3 family) | Top-tier reasoning, agentic workflows, multimodal | prev: gemini-3-pro-preview → superseded by: gemini-3.1-pro |
| Gemini 3 Deep Think (`gemini-3-deep-think`) | preview | 2026-02-12 | 131K | — | — | Gemini 3 with extended-thinking inference | Deep deliberative reasoning on hard problems | — |
| Gemini 3 Flash (`gemini-3-flash-preview`) | preview | 2025-12-17 | 1.0M | $0.50 | $3.00 | Sparse mixture-of-experts transformer with thinking | High-throughput multimodal with low latency | prev: gemini-2.5-flash → superseded by: gemini-3.5-flash |
| Gemini 3 Pro Preview (`gemini-3-pro-preview`) | preview | 2025-11-18 | 1.0M | $2.00 | $12.00 | Sparse Mixture-of-Experts transformer built on the Pathways framework | Reasoning-first flagship with deliberative thinking | prev: gemini-2.5-pro → superseded by: gemini-3.1-pro-preview |
| Gemini Omni Flash (Preview) (`gemini-omni-flash-preview`) | deprecated | 2026-06-30 | — | $1.50 | $17.50 | Unified natively-multimodal model without separate encoders | API video generation and editing | prev: gemini-omni-flash → superseded by: gemini-omni-1.1-flash |
| Gemini 3.1 Flash (`gemini-3.1-flash`) | deprecated | 2026-03-19 | 1.0M | $0.50 | $3.00 | Sparse mixture-of-experts transformer with thinking | Superseded workhorse Flash | prev: gemini-3-flash → superseded by: gemini-3.5-flash |
| Gemini 3.1 Flash-Lite (Preview) (`gemini-3.1-flash-lite-preview`) | deprecated | 2026-03-03 | 1.0M | $0.25 | $1.50 | Distilled sparse mixture-of-experts | Retired preview endpoint | prev: gemini-2.5-flash-lite → superseded by: gemini-3.1-flash-lite |
| Gemini 2.0 Flash (`gemini-2.0-flash`) | deprecated | 2025-02-05 | 1.0M | $0.15 | $0.60 | — | Legacy low-cost multimodal workhorse | prev: gemini-1.5-flash → superseded by: gemini-2.5-flash |

## Meta

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Muse Spark Open (`meta-models/Muse-Spark-Open-816B-A42B`) | ga | 2026-10-15 | 1M | — | — | Mixture-of-Experts (256 experts/MoE layer, 8 active) | Open-weight frontier multimodal MoE | — |
| Muse Wonder (`muse-wonder`) | ga | 2026-10-12 | 1M | $4.00 | $20.00 | — | Frontier multimodal agentic reasoning | prev: muse-spark-1.3 |
| Muse Wonder (`muse-wonder-1.0`) | ga | 2026-10-12 | 1M | $4.00 | $20.00 | — | Frontier agentic coding and computer use | — |
| Muse Wonder Full (`muse-wonder-full`) | ga | 2026-10-12 | 1M | — | — | — | Top-tier Muse via Muse Code subscription | prev: muse-spark-1.3 |
| Muse Spark 1.3 (`muse-spark-1.3`) | ga | 2026-09-02 | 1M | $1.25 | $4.25 | Proprietary multimodal reasoning model (Meta Superintelligence Labs) | Reasoning and long-horizon agentic coding | prev: muse-spark-1.2 |
| Muse Glimmer 30B (`meta-models/Muse-Glimmer-30B`) | ga | 2026-08-12 | 131K | — | — | Dense causal transformer (52 layers, GQA, SwiGLU, ViT-G/14 encoder) | Local on-device agentic workflows | — |
| Muse Glimmer 30B (`meta/muse-glimmer-30b`) | ga | 2026-08-10 | 131K | — | — | Dense decoder-only multimodal transformer — 30B (28B text decoder + 2B vision encoder) | On-device agentic tasks — tool use, multi-step reasoning, and multimodal understanding on consumer GPUs | prev: meta-llama/Llama-4-Scout-17B-16E-Instruct |
| Muse Glimmer 30B (`muse-glimmer-30b`) | ga | 2026-08-10 | 131K | $0.35 | $1.50 | 30B dense transformer | Mid-tier open-weights general text | — |
| Muse Spark 1.2 (`meta/muse-spark-1.2`) | ga | 2026-08-05 | 1.0M | $1.25 | $4.25 | Proprietary — undisclosed (goal-conditioned agentic multimodal model) | Frontier agentic coding, long-horizon software engineering, and multimodal reasoning | prev: meta/muse-spark-1.1 |
| Muse Spark 1.2 (`muse-spark-1.2`) | ga | 2026-08-05 | 1.0M | $1.25 | $4.25 | Proprietary multimodal reasoning model (Meta Superintelligence Labs) | Meta's default proprietary multimodal API model | prev: muse-spark-1.1 → superseded by: muse-spark-1.3 |
| Muse Spark 1.1 (`muse-spark-1.1`) | ga | 2026-07-09 | 1.0M | $1.25 | $4.25 | Closed-weights multimodal reasoning model from Meta Superintelligence Labs | Agentic multimodal reasoning via Meta Model API | prev: muse-spark-1.0 → superseded by: muse-spark-1.3 |
| Muse Image (`muse-image`) | ga | 2026-07-07 | — | — | — | Agentic image generation model | Image generation, editing, composition | — |
| Llama Guard 4 (`llama-guard-4-12b`) | ga | 2025-04-30 | 128K | — | — | Dense early-fusion transformer safety classifier, 12B parameters, pruned from the Llama 4 Scout pre-trained model | Multimodal input/output safety classification | prev: llama-guard-3-8b |
| Llama Guard 4 12B (`meta-llama/Llama-Guard-4-12B`) | ga | 2025-04-30 | 164K | $0.20 | $0.20 | Dense transformer pruned from Llama 4 Scout - 12B parameters | Multimodal input/output safety classification | prev: meta-llama/Llama-Guard-3-8B |
| Llama Prompt Guard 2 86M (`meta-llama/Llama-Prompt-Guard-2-86M`) | ga | 2025-04-30 | 512 | — | — | Small encoder-based classifier (~86M parameters) fine-tuned for prompt-injection detection | Detecting prompt injection and jailbreak attempts | prev: meta-llama/Prompt-Guard-86M |
| Llama 4 Maverick (`llama-4-maverick`) | ga | 2025-04-05 | 1.0M | $0.19 | $0.60 | Sparse MoE — 400B total / 17B active with 128 experts | Open-weight flagship general-purpose chat and reasoning | prev: llama-3.1-405b-instruct → superseded by: muse-spark-1.2 |
| Llama 4 Maverick (`llama-4-maverick-17b-128e`) | ga | 2025-04-05 | 1.0M | $0.19 | $0.60 | Mixture-of-experts transformer with 128 experts, 17B active parameters | Open-weights flagship for chat, coding, reasoning | prev: llama-3.3-70b-instruct → superseded by: meta-llama/Llama-4-Maverick-17B-128E-Instruct |
| Llama 4 Maverick (`llama-4-maverick-17b-128e-instruct`) | ga | 2025-04-05 | 1M | $0.50 | $0.77 | Sparse Mixture-of-Experts — 400B total / 17B active with 128 experts, multimodal (text + vision) | Open-weight multimodal flagship for assistants | prev: meta-llama/Llama-3.3-70B-Instruct → superseded by: muse-spark-1.2 |
| Llama 4 Maverick (`meta-llama/Llama-4-Maverick-17B-128E-Instruct`) | ga | 2025-04-05 | 1M | $0.55 | $2.19 | Sparse Mixture-of-Experts — 400B total / 17B active parameters, 128 experts; natively multimodal with early-fusion vision | Multimodal assistants and long-context reasoning tasks | prev: meta-llama/Llama-3.1-405B-Instruct |
| Llama 4 Scout (`llama-4-scout`) | ga | 2025-04-05 | 10.5M | $0.08 | $0.30 | Sparse MoE — 109B total / 17B active with 16 experts | Open-weight long-context multimodal on single GPU | prev: llama-3.3-70b-instruct → superseded by: muse-glimmer-30b |
| Llama 4 Scout (`llama-4-scout-17b-16e`) | ga | 2025-04-05 | 10.5M | $0.08 | $0.30 | Mixture-of-experts transformer with 16 experts, 17B active parameters | Long-context open-weights multimodal workloads | prev: llama-3.2-11b-vision-instruct → superseded by: meta-llama/Llama-4-Scout-17B-16E-Instruct |
| Llama 4 Scout (`llama-4-scout-17b-16e-instruct`) | ga | 2025-04-05 | 10M | $0.11 | $0.34 | Sparse Mixture-of-Experts — 109B total / 17B active with 16 experts, multimodal (text + vision) | Long-context open-weight multimodal reasoning | prev: meta-llama/Llama-3.3-70B-Instruct → superseded by: meta-llama/Llama-4-Scout-17B-16E-Instruct |
| Llama 4 Scout (`meta-llama/Llama-4-Scout-17B-16E-Instruct`) | ga | 2025-04-05 | 10M | $0.18 | $0.59 | Sparse Mixture-of-Experts — 109B total / 17B active parameters, 16 experts; natively multimodal with early-fusion vision | Efficient long-context multimodal single-GPU deployment | prev: meta-llama/Llama-3.3-70B-Instruct |
| Llama 3.3 70B Instruct (`llama-3-3-70b`) | ga | 2024-12-06 | 128K | — | — | Dense 70B auto-regressive transformer, SFT + RLHF | Text-only assistant near 405B quality at 70B cost | prev: llama-3-1-70b → superseded by: llama-4-scout |
| Llama 3.3 70B Instruct (`llama-3.3-70b`) | ga | 2024-12-06 | 128K | $0.59 | $0.79 | Dense 70B-parameter transformer, instruction-tuned | Cost-efficient text generation at near-flagship quality | prev: llama-3.1-70b → superseded by: llama-4-scout |
| Llama 3.3 70B Instruct (`llama-3.3-70b-instruct`) | ga | 2024-12-06 | 131K | $0.59 | $0.79 | Dense decoder-only transformer, 70B parameters | Open-weight dense model for text-only workloads | prev: llama-3.1-70b-instruct → superseded by: llama-4-maverick |
| Llama 3.3 70B Instruct (`meta-llama/Llama-3.3-70B-Instruct`) | ga | 2024-12-06 | 128K | $0.88 | $0.88 | Dense transformer, 70B parameters | Cost-efficient open text-only instruct model | prev: meta-llama/Llama-3.1-70B-Instruct → superseded by: meta-llama/Llama-4-Scout-17B-16E-Instruct |
| Llama 3.2 11B Vision Instruct (`llama-3.2-11b-vision-instruct`) | ga | 2024-09-25 | 128K | — | — | Llama 3.1 8B language model + separately trained vision adapter | Efficient consumer-GPU multimodal reasoning | → superseded by: llama-4-scout-17b-16e-instruct |
| Llama 3.2 90B Vision Instruct (`llama-3.2-90b-vision-instruct`) | ga | 2024-09-25 | 128K | — | — | Llama 3.1 70B language model + separately trained vision adapter | Large-scale image reasoning: charts, documents, captioning | → superseded by: llama-4-maverick-17b-128e-instruct |
| Llama 3.1 405B Instruct (`llama-3.1-405b-instruct`) | ga | 2024-07-23 | 128K | $3.50 | $3.50 | Dense decoder-only transformer with Grouped-Query Attention (GQA), 405B parameters | Largest open dense model for frontier text tasks | prev: llama-3-70b-instruct → superseded by: llama-4-maverick-17b-128e-instruct |
| Llama 3.1 405B Instruct (`meta-llama/Llama-3.1-405B-Instruct`) | ga | 2024-07-23 | 128K | — | — | Dense transformer decoder — 405B parameters | Large-scale open-weight reasoning, synthetic data generation, and distillation | → superseded by: meta-llama/Llama-3.3-70B-Instruct |
| Muse Spark 1.2 Contributor (`muse-spark-1.2-contributor`) | ga | — | 1.0M | $0.10 | $0.20 | — | Discount Muse Spark tier for budget workloads | — |
| Muse Video (`muse-video`) | preview | 2026-07-07 | — | — | — | Video generation model with native audio | Text-to-video generation with native audio | — |
| Llama 4 Behemoth (`llama-4-behemoth`) | preview | — | — | — | — | Sparse MoE — approximately 2T total / 288B active | High-capacity teacher model distilling Scout and Maverick | prev: meta-llama/Llama-3.1-405B-Instruct → superseded by: muse-spark-1.1 |
| Llama 4 Behemoth (`meta-llama/Llama-4-Behemoth`) | preview | — | — | — | — | Mixture-of-Experts: ~288B active parameters, ~2T total, 16 experts | Teacher model for Llama 4 distillation | prev: meta-llama/Meta-Llama-3.1-405B-Instruct → superseded by: meta/muse-spark-1.2 |
| Muse Spark (`muse-spark`) | deprecated | 2026-04-08 | 1M | — | — | Proprietary — undisclosed | First Meta Superintelligence Labs closed-weight flagship | prev: meta-llama/Llama-4-Maverick-17B-128E-Instruct → superseded by: muse-spark-1.1 |
| Llama 4 Maverick (`llama-4-maverick-17b-128e-instruct-fp8`) | deprecated | 2025-04-05 | 1.0M | $0.20 | $0.60 | Sparse MoE - 400B total / 17B active / 128 experts | Flagship multimodal open-weights inference at scale | prev: llama-3.3-70b-instruct |

## Microsoft

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MAI-Image-2.5-Pro (`mai-image-2.5-pro`) | ga | 2026-07-15 | — | $5.00 | $106.00 | Diffusion-based image generation and editing model | High-quality text-to-image generation and editing | prev: mai-image-2 |
| MAI-Voice-2-Flash (`mai-voice-2-flash`) | ga | 2026-07-15 | — | $15.00 | $15.00 | Text-to-speech generative model | High-fidelity multilingual text-to-speech generation | prev: mai-voice-2 → superseded by: mai-voice-2.1-flash |
| MAI-Voice-2 (`mai-voice-2`) | ga | 2026-06-02 | — | $22.00 | — | Neural text-to-speech with expressive prosody model | Multilingual high-quality speech synthesis with voice cloning | prev: mai-voice-1 → superseded by: mai-voice-2.1 |
| Phi-4 Reasoning Vision 15B (`microsoft/phi-4-reasoning-vision-15b`) | ga | 2026-03-04 | 16K | $0.07 | $0.14 | Mid-fusion multimodal: Phi-4-Reasoning backbone + SigLIP-2 vision encoder, 15B parameters | Compact open multimodal reasoning for vision+text | prev: microsoft/phi-4-reasoning |
| Phi-4-Reasoning-Vision-15B (`Phi-4-reasoning-vision-15B`) | ga | 2026-03-04 | 128K | — | — | Dense decoder-only transformer with vision encoder (15B) | Compact multimodal reasoning | prev: phi-4-reasoning |
| MAI-Image-1 (`MAI-Image-1`) | ga | 2025-10-13 | — | — | — | text-to-image diffusion model | First-party text-to-image generation in Copilot and Bing | → superseded by: MAI-Image-2 |
| Phi-4-mini-flash-reasoning (`microsoft/phi-4-mini-flash-reasoning`) | ga | 2025-07-09 | — | — | — | Dense transformer, mini variant tuned for flash reasoning | Fast on-device reasoning for edge deployment | — |
| Phi-4-mini-flash-reasoning (`phi-4-mini-flash-reasoning`) | ga | 2025-07-09 | 66K | $0.08 | $0.32 | 3.8B-parameter decoder-hybrid-decoder SambaY architecture with Gated Memory Units for cross-layer representation sharing | Fast small-model reasoning for math workloads | prev: phi-4-mini-reasoning |
| Phi-4-reasoning (`microsoft/Phi-4-reasoning`) | ga | 2025-05-01 | 32K | — | — | 14B parameter dense decoder-only Transformer, supervised fine-tuned on reasoning-dense data | Open-weight reasoning on math and code | prev: microsoft/phi-4 → superseded by: microsoft/Phi-4-reasoning-vision-15B |
| Phi-4 Mini Reasoning (`phi-4-mini-reasoning`) | ga | 2025-04-30 | 128K | $0.07 | $0.23 | 3.8B parameter dense decoder-only Transformer fine-tuned for reasoning | Edge and on-device step-by-step reasoning | prev: phi-4-mini-instruct |
| Phi-4 Reasoning Plus (`Phi-4-reasoning-plus`) | ga | 2025-04-30 | 128K | $0.13 | $0.50 | 14B dense decoder transformer with reasoning fine-tuning | Open-weight small reasoning model with long context | prev: Phi-4 → superseded by: phi-4-reasoning-vision-15b |
| Phi-4-reasoning (`phi-4-reasoning`) | ga | 2025-04-30 | 32K | $0.13 | $0.50 | Dense decoder-only transformer fine-tuned from Phi-4 for reasoning | small open-weight reasoning model | prev: phi-4 |
| Phi-4-reasoning-plus (`microsoft/Phi-4-reasoning-plus`) | ga | 2025-04-30 | 33K | — | — | 14B dense transformer fine-tuned for reasoning with RL | Open-weight reasoning for math and science | prev: microsoft/phi-4 → superseded by: microsoft/phi-4-reasoning-vision |
| MAI-DS-R1 (`mai-ds-r1`) | ga | 2025-04-20 | 128K | $1.35 | $5.40 | MoE reasoning transformer, post-trained from DeepSeek-R1 | Microsoft's post-trained DeepSeek-R1 for enterprise | — |
| Phi-4 Mini Instruct (`phi-4-mini-instruct`) | ga | 2025-02-26 | 128K | $0.07 | $0.30 | Dense decoder-only Transformer with grouped-query attention, 3.8B parameters | Lightweight 3.8B model for edge and low-latency apps | prev: phi-3-mini → superseded by: phi-4-mini-flash-reasoning |
| Phi-4-mini (`phi-4-mini`) | ga | 2025-02-26 | 131K | $0.07 | $0.30 | 3.8B dense transformer | On-device and edge text generation | prev: phi-3-mini |
| Phi-4-mini-instruct (`microsoft/Phi-4-mini-instruct`) | ga | 2025-02-26 | 128K | $0.07 | $0.23 | 3.8B dense transformer | On-device and edge instruction-following | prev: microsoft/Phi-3.5-mini-instruct |
| Phi-4-multimodal-instruct (`microsoft/Phi-4-multimodal-instruct`) | ga | 2025-02-26 | 128K | $0.08 | $0.32 | 5.6B multimodal transformer with mixture-of-LoRAs adapters | Compact text, image, and speech understanding | prev: microsoft/Phi-3.5-vision-instruct → superseded by: microsoft/Phi-4-reasoning-vision-15B |
| Phi-4-multimodal-instruct (`phi-4-multimodal`) | ga | 2025-02-26 | 128K | — | — | 5.6B parameters, mixture-of-LoRAs on a Phi-4-mini backbone | Compact text, image, and speech understanding | prev: phi-3.5-vision |
| Phi-4-multimodal-instruct (`phi-4-multimodal-instruct`) | ga | 2025-02-26 | 131K | $0.08 | $0.32 | 5.6B-parameter unified multimodal Transformer (text, vision, speech) | Unified small multimodal (text, vision, audio) model | prev: phi-3.5-vision-instruct |
| Phi-4-mini (`microsoft/phi-4-mini`) | ga | 2025-02-01 | 128K | — | — | — | Document classification and routing at production scale | — |
| Phi-4 (`microsoft/phi-4`) | ga | 2025-01-08 | 16K | $0.07 | $0.14 | 14B parameter dense decoder-only Transformer, trained on 9.8T tokens | Strong open-weight reasoning in a small 14B model | prev: microsoft/Phi-3-medium → superseded by: microsoft/Phi-4-reasoning |
| Phi-4 (`phi-4`) | ga | 2024-12-12 | 16K | $0.13 | $0.50 | Dense decoder-only transformer (14B) | Compact open-weight general model | prev: phi-3.5-mini-instruct → superseded by: Phi-4-reasoning-plus |
| MAI-Transcribe-2-Streaming (`mai-transcribe-2-streaming`) | preview | 2026-10-01 | — | — | — | — | Low-latency real-time multilingual speech-to-text | prev: mai-transcribe-2 |
| MAI-Voice-2.1 (`mai-voice-2.1`) | preview | 2026-10-01 | — | — | — | Neural text-to-speech with expressive prosody model | Multilingual expressive text-to-speech | prev: mai-voice-2 |
| MAI-Voice-2.1-Flash (`mai-voice-2.1-flash`) | preview | 2026-10-01 | — | — | — | Text-to-speech generative model (latency-optimised) | Low-latency multilingual text-to-speech | prev: mai-voice-2-flash |
| MAI-Image-2.6 (`MAI-Image-2.6`) | preview | 2026-09-04 | — | $5.00 | $38.00 | Diffusion image generation and editing model (MAI-Image family) | Production image generation and complex edits | prev: MAI-Image-2.5 |
| MAI-Image-2.6-Flash (`MAI-Image-2.6-Flash`) | preview | 2026-09-04 | — | $1.75 | $19.00 | Diffusion image generation model — Flash tier of MAI-Image-2.6 | Low-latency, low-cost image generation at scale | prev: mai-image-2.5-flash |
| MAI-Transcribe-2 (`mai-transcribe-2`) | preview | 2026-09-03 | — | — | — | — | Fast, accurate multilingual speech-to-text | prev: mai-transcribe-1 |
| MAI-Code-1.1-Flash (`mai-code-1.1-flash`) | preview | 2026-08-11 | 256K | $0.20 | $1.20 | Sparse mixture-of-experts | updated efficient coding assistant | prev: mai-code-1-flash |
| MAI-Cyber-1-Flash (`mai-cyber-1-flash`) | preview | 2026-07-27 | 256K | — | — | Sparse MoE — 137B total / 5B active (fine-tuned from MAI-Code-1-Flash) | Autonomous vulnerability discovery and remediation | prev: mai-code-1-flash |
| MAI-Image-2.5 (`mai-image-2.5`) | preview | 2026-07-23 | 32K | $5.00 | $47.00 | Diffusion-based generative model, ~20B non-embedding parameters | High-quality text-to-image and image editing | prev: mai-image-2 |
| MAI-Code-1-Flash (`mai-code-1-flash`) | preview | 2026-06-02 | 256K | $0.75 | $4.50 | ~5B-parameter coding-tuned transformer (vendor-stated) | fast first-party coding assistance | → superseded by: mai-code-1.1-flash |
| MAI-Image-2.5-Flash (`mai-image-2.5-flash`) | preview | 2026-06-02 | — | $1.75 | $33.00 | Diffusion-based text-to-image (efficient variant) | Faster, cheaper image generation and editing for high-volume workloads | prev: mai-image-2.5 |
| MAI-Thinking-1 (`MAI-Thinking-1`) | preview | 2026-06-02 | 200K | $2.00 | $8.00 | Sparse Mixture-of-Experts, ~35B active / ~1T total parameters | Microsoft in-house reasoning model | prev: mai-1-preview |
| MAI-Image-2-Efficient (`mai-image-2-efficient`) | preview | 2026-04-14 | 32K | $5.00 | $19.50 | Diffusion-based text-to-image | Cost-efficient high-throughput image generation | prev: mai-image-2 → superseded by: mai-image-2.5 |
| MAI-Image-2 (`MAI-Image-2`) | preview | 2026-04-02 | 32K | $5.00 | $33.00 | Proprietary diffusion-based text-to-image model, trained in-house by Microsoft AI | High-fidelity text-to-image generation | prev: mai-image-1 → superseded by: mai-image-2.5-pro |
| MAI-Transcribe-1 (`MAI-Transcribe-1`) | preview | 2026-04-02 | — | — | — | Bidirectional audio encoder with transformer text decoder | Multilingual speech-to-text transcription | → superseded by: mai-transcribe-1.5 |
| MAI-Voice-1 (`MAI-Voice-1`) | preview | 2026-04-02 | — | $22.00 | $22.00 | Proprietary neural speech synthesis model, trained in-house by Microsoft AI | Expressive speech synthesis from text | → superseded by: mai-voice-2 |
| Phi-4-Reasoning-Vision (`microsoft/phi-4-reasoning-vision`) | preview | 2026-03-04 | — | — | — | Dense transformer, 15B parameters, vision-language model | Multimodal reasoning with high-fidelity vision | prev: microsoft/phi-4-reasoning-plus |
| MAI-1-preview (`mai-1-preview`) | preview | 2025-08-28 | — | — | — | Mixture-of-experts text model | First-generation in-house text model for Copilot | → superseded by: mai-thinking-1 |
| MAI-Transcribe-1.5 (`mai-transcribe-1.5`) | deprecated | 2026-06-02 | — | — | — | Multilingual speech-to-text encoder-decoder | Production-grade multilingual speech-to-text with context biasing | prev: mai-transcribe-1 → superseded by: mai-transcribe-2 |

## Mistral

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Mistral OCR 4.1 (`mistral-ocr-4-1`) | ga | 2026-07-16 | — | — | — | — | Multilingual document OCR with structured blocks | prev: mistral-ocr-4-0 |
| Mistral OCR 4 (`mistral-ocr-4-0`) | ga | 2026-06-23 | — | — | — | Purpose-built OCR / document understanding model | Document OCR with bounding boxes | prev: mistral-ocr-3 → superseded by: mistral-ocr-4-1 |
| Mistral Medium 3.5 (`mistral-medium-2604`) | ga | 2026-04-30 | 262K | $1.50 | $7.50 | Dense multimodal model with adjustable reasoning, Modified MIT | Balanced price-to-performance proprietary tier | prev: mistral-medium-2508 |
| Mistral Medium 3.5 (`mistral-medium-3.5`) | ga | 2026-04-30 | 256K | $1.50 | $7.50 | Dense, 128B params | balanced mid-tier general chat with vision | prev: mistral-medium-3 |
| Mistral Medium 3.5 (`mistral-medium-latest`) | ga | 2026-04-30 | 256K | $1.50 | $7.50 | Dense 128B instruction-following model (hybrid instruct + reasoning + code) | Frontier multimodal with hybrid reasoning | prev: mistral-medium-2508 |
| Mistral Medium 3.5 (`mistral-medium-2504`) | ga | 2026-04-29 | 256K | $1.50 | $7.50 | 128B-parameter dense transformer | mid-tier reasoning, coding and vision in one model | prev: mistral-medium-2505 |
| Mistral Medium 3.5 (`mistral-medium-3-5`) | ga | 2026-04-28 | 256K | $1.50 | $7.50 | 128B dense multimodal model unifying instruct, reasoning, and coding capabilities | Balanced reasoning with large context window | prev: mistral-medium-3 |
| Mistral Medium 3.5 (`mistral-medium-3-5-26-04`) | ga | 2026-04-28 | 256K | $1.50 | $7.50 | 128B dense transformer | Instruction-following, reasoning, coding hybrid | prev: mistral-medium-3-25-05 |
| Voxtral Mini TTS (`voxtral-mini-tts-2603`) | ga | 2026-03-26 | 4K | — | — | 4B parameter TTS model | TTS with zero-shot voice cloning | — |
| Mistral Small 4 (`mistral-small-2603`) | ga | 2026-03-16 | 256K | $0.15 | $0.60 | Mixture-of-Experts with 119B total and ~6.5B active parameters per token | Low-cost multimodal reasoning and agentic coding | prev: mistral-small-2506 |
| Mistral Small 4 (`mistral-small-4`) | ga | 2026-03-16 | 128K | $0.15 | $0.60 | Unified model consolidating prior Magistral, Pixtral, and Devstral capabilities | High-volume low-latency text tasks | prev: mistral-small-3 |
| Mistral Small 4 (`mistral-small-latest`) | ga | 2026-03-16 | 256K | $0.15 | $0.60 | Mixture-of-Experts, 119B total parameters, 6.5B active, 128 experts | Affordable multimodal with reasoning option | prev: mistral-small-2506 |
| Voxtral Mini Transcribe 2 (`voxtral-mini-2602`) | ga | 2026-02-04 | — | — | — | — | Batch ASR with diarization and timestamps | — |
| Voxtral Mini Transcribe Realtime (`voxtral-mini-transcribe-realtime-2602`) | ga | 2026-02-04 | — | — | — | 4B parameter streaming ASR | Low-latency streaming ASR | — |
| Mistral OCR 3 (`mistral-ocr-2512`) | ga | 2025-12-19 | — | — | — | — | Document OCR with structure-preserving Markdown output | prev: mistral-ocr-2505 |
| Devstral 2 (`devstral-2512`) | ga | 2025-12-10 | 262K | $0.40 | $2.00 | Dense transformer — 123B parameters | Open-weight agentic coding model | prev: devstral-medium-2507 → superseded by: devstral-2-25-12 |
| Devstral 2 (`devstral-2`) | ga | 2025-12-09 | 256K | $0.40 | $2.00 | Dense transformer, 123B params | Open-weight coding and agentic developer tasks | prev: codestral-25.08 |
| Devstral 2 (`devstral-2-25-12`) | ga | 2025-12-09 | 256K | $0.40 | $2.00 | 123B dense transformer | Agentic software engineering | prev: devstral-medium-2507 |
| Devstral 2 (`devstral-latest`) | ga | 2025-12-09 | 256K | $0.40 | $2.00 | 123B parameter coding-specialized model | Open coding agent for autonomous software tasks | prev: devstral-small-2507 |
| Ministral 3 14B (`ministral-14b-2512`) | ga | 2025-12-02 | 262K | $0.20 | $0.20 | 14B parameter dense transformer with image understanding | Edge and local deployment with vision | prev: ministral-8b-2410 |
| Ministral 3 14B (`ministral-14b-instruct-2512`) | ga | 2025-12-02 | 262K | $0.20 | $0.20 | Dense 14B transformer | Edge and on-device deployment | prev: ministral-8b-2410 |
| Ministral 3 14B (`ministral-3-14b-2512`) | ga | 2025-12-02 | 256K | $0.20 | $0.20 | Dense 14B parameters | Edge / on-device multimodal with reasoning variant | prev: ministral-8b-2410 |
| Ministral 3 3B (`ministral-3b-2512`) | ga | 2025-12-02 | 128K | $0.10 | $0.10 | Dense 3B parameter transformer (Mistral 3 family) | Cheapest edge model for high-volume tasks | prev: ministral-3b-2410 |
| Ministral 3 3B (`ministral-3b-latest`) | ga | 2025-12-02 | 131K | $0.10 | $0.10 | 3B dense transformer with vision encoder | Edge and on-device deployment | prev: ministral-3b-2410 |
| Ministral 3 8B (`ministral-3-8b-2512`) | ga | 2025-12-02 | 256K | $0.15 | $0.15 | 8B dense model with vision encoder | Edge and on-device deployments | prev: ministral-8b-2410 |
| Ministral 3 8B (`ministral-8b-2512`) | ga | 2025-12-02 | 128K | $0.15 | $0.15 | Dense 8B parameter transformer (Mistral 3 family) | Edge and on-device deployment | prev: ministral-8b-2410 |
| Mistral Large 3 (`mistral-large-2512`) | ga | 2025-12-02 | 262K | $0.50 | $1.50 | Sparse MoE — 675B total / 41B active | Flagship open-weight general reasoning and tool use | prev: mistral-large-2411 |
| Mistral Large 3 (`mistral-large-3-25-12`) | ga | 2025-12-02 | 262K | $0.50 | $1.50 | sparse mixture-of-experts, 675B total / 41B active parameters | Flagship open-weight multimodal MoE | prev: mistral-large-2411 |
| Mistral Large 3 (`mistral-large-latest`) | ga | 2025-12-02 | 256K | $0.50 | $1.50 | Mixture-of-Experts, 675B total parameters, 41B active parameters | Flagship general-purpose multimodal tasks | prev: mistral-large-2411 |
| Devstral 2 (`devstral-2-2512`) | ga | 2025-12-01 | 256K | $0.40 | $2.00 | Dense transformer, 123B parameters | Agentic software engineering and multi-file coding | prev: devstral-small-2507 → superseded by: devstral-2-25-12 |
| Devstral Small 2 (`devstral-small-2-2512`) | ga | 2025-12-01 | 262K | $0.40 | $2.00 | 24B dense transformer | Agentic coding and codebase exploration | prev: devstral-small-2507 → superseded by: mistral-small-2603 |
| Ministral 3 8B (`ministral-3-8b`) | ga | 2025-12-01 | 262K | $0.10 | $0.10 | Dense transformer, 8.4B LM + 0.4B vision encoder (~8.8B total), GQA, 256K context | on-device and edge multimodal inference | prev: ministral-8b-2410 |
| Mistral Large 3 (`mistral-large-3`) | ga | 2025-12-01 | 128K | $0.50 | $1.50 | — | Reasoning and multilingual enterprise flagship | prev: mistral-large-2 → superseded by: mistral-large-4 |
| Magistral Small 1.2 (`magistral-small-2509`) | ga | 2025-09-18 | 131K | $0.50 | $1.50 | 24B dense transformer with vision encoder | Open-weight multilingual chain-of-thought reasoning | prev: magistral-small-2507 |
| Magistral Small 1.2 (`magistral-small-latest`) | ga | 2025-09-18 | 131K | $0.50 | $1.50 | 24B dense transformer with vision encoder | Open-weight multilingual chain-of-thought reasoning | prev: magistral-small-2507 |
| Magistral Medium 1.2 (`magistral-medium-2509`) | ga | 2025-09-01 | 40K | $2.00 | $5.00 | Dense transformer with reasoning fine-tuning | Chain-of-thought reasoning for math and logic | prev: magistral-medium-2507 → superseded by: mistral-medium-2604 |
| Mistral Medium 3.1 (`mistral-medium-2508`) | ga | 2025-08-12 | 131K | $0.40 | $2.00 | — | Balanced enterprise generalist with multimodal input | prev: mistral-medium-2505 → superseded by: mistral-medium-2604 |
| Codestral 25.08 (`codestral-25-08`) | ga | 2025-08-01 | 256K | $0.30 | $0.90 | — | Low-latency code completion and FIM | prev: codestral-2501 |
| Codestral 25.08 (`codestral-latest`) | ga | 2025-08-01 | 256K | $0.30 | $0.90 | Dense Transformer (22B parameters) | Low-latency code completion and FIM | prev: codestral-2501 |
| Codestral 2508 (`codestral-2508`) | ga | 2025-08-01 | 256K | $0.30 | $0.90 | Dense code-specialized transformer with FIM support | Low-latency code completion and FIM | prev: codestral-2501 |
| Voxtral Small (`voxtral-small-24b-2507`) | ga | 2025-07-15 | 33K | — | — | 24B multimodal transformer with audio encoder | open-source speech transcription and audio understanding | — |
| Devstral Medium (`devstral-medium-latest`) | ga | 2025-07-10 | 131K | $0.40 | $2.00 | 123B dense transformer | Agentic coding escalation tier for harder edits | prev: devstral-small-2507 |
| Magistral Medium (`magistral-medium-2507`) | ga | 2025-07-01 | 128K | $2.00 | $5.00 | — | Chain-of-thought reasoning on math and STEM | — |
| Mistral Small 3.2 (`mistral-small-2506`) | ga | 2025-06-20 | 131K | $0.10 | $0.30 | — | Fast, cheap open-weight general-purpose model | prev: mistral-small-2503 |
| Magistral Medium (`magistral-medium-latest`) | ga | 2025-06-10 | 128K | $2.00 | $5.00 | Frontier-class multimodal reasoning model | Chain-of-thought reasoning and transparent problem solving | prev: magistral-medium-2507 → superseded by: mistral-medium-latest |
| Magistral Medium 2506 (`magistral-medium-2506`) | ga | 2025-06-10 | 41K | $2.00 | $5.00 | Dense reasoning model with chain-of-thought training | Chain-of-thought reasoning tasks in enterprise | → superseded by: mistral-small-2603 |
| Codestral 2 (`codestral-2`) | ga | 2025-01-01 | 256K | $0.30 | $0.90 | — | Code completion and IDE workflows | prev: codestral-2501 |
| Magistral Small 1.2 (`magistral-small-1-2`) | ga | — | — | $0.50 | $1.50 | — | Affordable reasoning | — |
| Mistral Large 4 (`mistral-large-4`) | preview | 2026-10-06 | 1M | $1.36 | $4.18 | Granular Mixture-of-Experts with 52B active and 1.05T total parameters, plus a 1.6B vision encoder | Frontier multimodal reasoning and agentic workflows | prev: mistral-large-3 |
| Mistral Large 4 (`mistral-large-4-0`) | preview | 2026-10-06 | 1M | $0.68 | $2.09 | Mixture-of-Experts, ~1.05T total / 52B active, multimodal with vision encoder | Frontier multimodal reasoning and agentic workloads | prev: mistral-large-2512 |
| Leanstral 1.5 (`leanstral-1-5`) | deprecated | 2026-06-30 | 262K | $0.00 | $0.00 | Sparse Mixture-of-Experts (~6.5B active / 119B total, 128 experts / 4 active per token) | Lean 4 formal proof engineering, automated theorem proving, and autoformalization | prev: leanstral |
| Devstral Medium (`devstral-medium-2507`) | deprecated | 2025-07-11 | 131K | $0.40 | $2.00 | Code-and-agent specialized transformer | Agentic coding and software engineering agents | prev: devstral-medium-2505 → superseded by: devstral-2-25-12 |
| Mistral Medium 3 (`mistral-medium-2505`) | deprecated | 2025-05-07 | 131K | $0.40 | $2.00 | — | Balanced cost/performance for coding and STEM | → superseded by: mistral-medium-2604 |
| Pixtral Large (`pixtral-large-2411`) | deprecated | 2024-11-18 | 128K | $2.00 | $6.00 | Dense transformer, 124B parameters, native multimodal | Legacy large-scale vision-language workloads | prev: pixtral-12b-2409 → superseded by: mistral-medium-2604 |
| Ministral 8B (`ministral-8b-2410`) | deprecated | 2024-10-16 | 131K | $0.10 | $0.10 | Dense 8B transformer with interleaved sliding-window attention | On-device and edge deployment | → superseded by: ministral-8b-2512 |
| Ministral 8B (`ministral-8b-latest`) | GA | 2024-10-16 | 131K | $0.10 | $0.10 | Dense Transformer (8B parameters) | On-device and edge deployments, cheap high-volume classification, extraction, routing, and local agent runners | prev: mistral-7b → superseded by: ministral-8b-2512 |

## Moonshot

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Kimi K3 (`kimi-k3`) | ga | 2026-07-16 | 1.0M | $3.00 | $15.00 | Sparse MoE — 2.8T total parameters; Kimi Delta Attention (KDA), Attention Residuals, Stable LatentMoE; activates 16 of 896 experts per token | Frontier reasoning and long-context agentic workloads | prev: kimi-k2.6 |
| Kimi K2.7 Code (`kimi-k2.7-code`) | ga | 2026-06-12 | 262K | $1.50 | $6.00 | Sparse MoE code-specialized | Agentic coding at long context | prev: kimi-k2.6 → superseded by: kimi-k2.8-preview |
| Kimi K2.6 (`kimi-k2.6`) | ga | 2026-04-20 | 262K | $0.95 | $4.00 | Sparse MoE | General chat and tool use at low cost | prev: kimi-k2-thinking → superseded by: kimi-k3 |
| Kimi K2 Thinking (`kimi-k2-thinking`) | ga | 2025-11-06 | 262K | $0.60 | $2.50 | Sparse MoE with reasoning fine-tune | Open-weight long-form reasoning | prev: kimi-k2-0905-preview → superseded by: kimi-k2.6 |
| Kimi K2 Thinking Turbo (`kimi-k2-thinking-turbo`) | ga | 2025-11-06 | 256K | $1.15 | $8.00 | Sparse mixture-of-experts, 1T total / 32B active parameters | Faster hosted variant of K2 Thinking | prev: kimi-k2-thinking |
| Kimi K2 Instruct 0905 (`kimi-k2-0905`) | ga | 2025-09-05 | 262K | — | — | Sparse Mixture-of-Experts — 1T total / 32B active, 384 experts (8 selected + 1 shared) | Reflex-grade general chat and agentic use (no long thinking) | prev: kimi-k2 → superseded by: kimi-k2-thinking |
| Kimi K2 Instruct 0905 (`kimi-k2-instruct-0905`) | ga | 2025-09-05 | 262K | $0.60 | $2.50 | Sparse MoE — 1T total / 32B active parameters | autonomous coding and agentic tool-calling workflows | prev: kimi-k2-instruct → superseded by: kimi-k2-thinking |
| Kimi K2.7 Code Highspeed (`kimi-k2.7-code-highspeed`) | ga | — | 262K | $1.90 | $8.00 | MoE (K2 family, highspeed variant) | Latency-sensitive coding workflows | — |
| Kimi Latest (`kimi-latest`) | ga | — | 131K | $0.95 | $4.00 | — | Auto-updating Kimi for chat and vision tasks | — |
| Kimi K2.8 Preview (`kimi-k2.8-preview`) | preview | 2026-09-11 | 1M | $1.00 | $4.00 | Sparse MoE (K2 lineage, undisclosed exact totals; multimodal encoder-decoder) | Lower-cost multimodal (text, image, audio) with near-K3 quality and 1M context | prev: kimi-k2.7-code → superseded by: kimi-k3 |
| Kimi K2.5 (`kimi-k2.5`) | preview | 2026-01-27 | 262K | $0.60 | $3.00 | Mixture-of-Experts | next-generation Kimi preview | prev: kimi-k2-thinking → superseded by: kimi-k2.6 |
| Kimi K2 Instruct 0905 (`kimi-k2-0905-preview`) | preview | 2025-09-04 | 262K | $0.60 | $2.50 | Sparse MoE transformer — 1T total / 32B active parameters, 384 experts | general chat and coding with long context | prev: kimi-k2-0711-preview → superseded by: kimi-k2-thinking |
| Kimi K2 Turbo Preview (`kimi-k2-turbo-preview`) | preview | — | 262K | — | — | Serving-optimized variant of Kimi K2 MoE | Low-latency serving of Kimi K2 for production | — |
| Kimi K2 Instruct 0711 (`kimi-k2-0711-preview`) | deprecated | 2025-07-11 | 131K | $0.60 | $2.50 | Sparse MoE transformer — 1T total / 32B active parameters | legacy Kimi K2 agentic tasks | → superseded by: kimi-k2-0905-preview |
| Moonshot v1 128K (`moonshot-v1-128k`) | deprecated | 2024-01-31 | 131K | $2.00 | $5.00 | Dense transformer (closed-weights, commercial) | Legacy closed-weights long-context chat | prev: moonshot-v1-32k → superseded by: kimi-k2.5 |
| Moonshot v1 32K (`moonshot-v1-32k`) | deprecated | — | 33K | — | — | — | Legacy compatibility for existing moonshot-v1 integrations | → superseded by: moonshot-v1-128k |

## NVIDIA

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Nemotron 3.5 Super VL (`nvidia/nemotron-3.5-super-vl-120b-a12b`) | ga | 2026-10-15 | 1M | — | — | Hybrid Mamba-Transformer Mixture-of-Experts (120B total / 12B active) with vision encoder; multi-token prediction layers | Multimodal long-running agentic reasoning | prev: nvidia/nemotron-3-super-120b-a12b |
| Nemotron 3.5 Lightning (`nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16`) | ga | 2026-08-11 | 1M | — | — | Hybrid Mamba-2 + Attention + MoE with MTP (30B total, 3B active) | Low-latency always-on agents and high-volume tool calls | prev: nvidia/NVIDIA-Nemotron-3-Nano-30B-A3B-BF16 |
| Nemotron 3.5 Lightning (`nvidia/nemotron-3.5-lightning-30b-a3b`) | ga | 2026-08-11 | 128K | $0.05 | $0.20 | Hybrid Mamba-Transformer Mixture-of-Experts (30B total / 3B active) | Fast open-weight reasoning on single-GPU | prev: nvidia/nemotron-3-nano-30b-a3b |
| Nemotron 3.5 Lightning 30B A3B (`nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B`) | ga | 2026-08-11 | 1M | — | — | Mamba-2 + MoE + attention hybrid (30B total, 3B active) | High-throughput agent execution layer | prev: nvidia/nemotron-3-nano-30b-a3b |
| Nemotron 3 Embed 1B (`nvidia/nemotron-3-embed-1b`) | ga | 2026-07-17 | 33K | — | — | Pruned/distilled dense (~1.14B) | High-efficiency production embedding retrieval | — |
| Nemotron 3 Embed 1B (BF16) (`nvidia/nemotron-3-embed-1b-bf16`) | ga | 2026-07-17 | 33K | $0.00 | $0.00 | Transformer encoder with bidirectional attention masking, average pooling | Efficient production-scale dense retrieval where a smaller footprint than the 8B is needed | — |
| Nemotron 3 Embed 1B (NVFP4) (`nvidia/nemotron-3-embed-1b-nvfp4`) | ga | 2026-07-17 | 33K | $0.00 | $0.00 | Transformer encoder with bidirectional attention masking, NVFP4 (4-bit) quantized from Nemotron-3-Embed-1B-BF16 | Blackwell-optimized 4-bit deployment for high-throughput embedding on GB200 / RTX PRO 6000 | prev: nvidia/nemotron-3-embed-1b-bf16 |
| Nemotron 3 Embed 8B (`nvidia/nemotron-3-embed-8b-bf16`) | ga | 2026-07-17 | 33K | $0.00 | $0.00 | Transformer encoder with bidirectional attention masking (adapted from Ministral-3-8B-Instruct-2512 causal decoder), average pooling over token representations | Accuracy-first multilingual dense retrieval for production RAG, agentic retrieval, code retrieval, and agent memory | — |
| Nemotron 3 Embed 8B (`nvidia/nemotron-3-embed-8b`) | ga | 2026-07-16 | 33K | — | — | Transformer encoder (~8B, hidden 4096) | Frontier retrieval accuracy for agentic RAG | prev: nvidia/llama-embed-nemotron-8b |
| Nemotron 3 Ultra (`nemotron-3-ultra-550b-a55b`) | ga | 2026-06-04 | 1M | $0.50 | $2.20 | Hybrid Mamba-Transformer Mixture-of-Experts (550B total / 55B active) | Flagship open reasoning for enterprise agents | prev: nemotron-ultra-253b |
| Nemotron 3 Ultra (`nvidia/nemotron-3-ultra`) | ga | 2026-06-04 | 1M | $0.50 | $2.20 | Hybrid Mamba-Transformer MoE, 550B total / 55B active | frontier reasoning and multi-agent orchestration | prev: nvidia/llama-3.1-nemotron-ultra-253b-v1 |
| Nemotron 3 Ultra (`nvidia/nemotron-3-ultra-550b-a55b`) | ga | 2026-06-04 | 256K | $0.50 | $2.20 | Sparse Mixture-of-Experts (550B total / 55B active) | Flagship open-weight reasoning | prev: nvidia/nemotron-3-super-120b-a12b |
| Nemotron 3 Ultra 550B A55B (`nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16`) | ga | 2026-06-04 | 1M | — | — | Hybrid Transformer-Mamba Mixture-of-Experts (550B total / 55B active) with LatentMoE and Multi-Token Prediction | Frontier reasoning and long-running agent orchestration | prev: nvidia/Llama-3_1-Nemotron-Ultra-253B-v1 |
| Nemotron 3.5 ASR Streaming Multilingual (`nvidia/nemotron-3.5-asr-streaming-0.6b`) | ga | 2026-06-04 | — | — | — | Streaming multilingual ASR model, 0.6B parameters | Low-latency multilingual streaming speech recognition | — |
| Nemotron 3.5 Content Safety (`nvidia/nemotron-3.5-content-safety`) | ga | 2026-06-04 | 128K | $0.00 | $0.00 | Gemma 3 4B IT fine-tuned (LoRA merged) for multimodal safety reasoning | Multimodal multilingual content safety moderation | prev: nvidia/nemotron-3-content-safety |
| Cosmos 3 (`nvidia/cosmos-3`) | ga | 2026-06-01 | — | — | — | Mixture-of-transformers omnimodel with native vision reasoning and multimodal generation across text, image, video, ambient sound and action; Nano 16B and Super 64B sizes | World simulation and synthetic data for physical AI | prev: nvidia/cosmos-1 |
| Cosmos 3 Super (`nvidia/cosmos3-super`) | ga | 2026-06-01 | 128K | — | — | Mixture-of-Transformers omnimodel / 64B total / 32B dense LLM backbone | Physical AI world modeling, robotics and autonomous vehicle synthetic data | prev: nvidia/cosmos-reason1-7b |
| Nemotron-Labs-3-Elastic 30B-A3B (`nvidia/nemotron-labs-3-elastic-30b-a3b`) | ga | 2026-05-07 | 131K | — | — | Hybrid Mamba2-Transformer MoE with elastic post-training; 52-layer parent (23 Mamba-2 + MoE layers, 6 attention layers, 128 experts + 1 shared, 6 activated per token); nested 30B / 23B / 12B submodels sharing the same layer structure, 32 attention heads and 64 Mamba heads | Elastic 3-in-1 reasoning checkpoint sliced to 30B/23B/12B for cost-adaptive deployment | prev: nvidia/nemotron-3-nano-30b-a3b |
| Nemotron 3 Nano Omni (`nvidia/nemotron-3-nano-omni`) | ga | 2026-04-28 | 262K | — | — | 30B-A3B hybrid Mamba-Transformer MoE with unified vision/audio/text encoders | Efficient multimodal agents unifying vision, audio, text | prev: nvidia/nemotron-3-nano-30b-a3b |
| Nemotron 3 Nano Omni 30B A3B Reasoning (`nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16`) | ga | 2026-04-28 | 300K | — | — | Hybrid MoE Transformer-Mamba (30B / ~3B active) with Conv3D video layers and Efficient Video Sampling | Multimodal perception sub-agent for enterprise agents | prev: nvidia/NVIDIA-Nemotron-Nano-9B-v2 |
| Nemotron 3 Nano Omni 30B-A3B (`nvidia/nemotron-3-nano-omni-30b-a3b`) | ga | 2026-04-28 | 300K | — | — | Hybrid MoE Transformer-Mamba with Conv3D video layers (30B total, 3B active) | Multimodal perception sub-agent for enterprise | prev: nvidia/nemotron-3-nano-30b-a3b |
| Nemotron 3 Nano Omni Reasoning (`nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`) | ga | 2026-04-28 | 256K | $0.07 | $0.30 | Hybrid MoE Transformer-Mamba with Conv3D vision, 30B total / 3B active | Multimodal perception sub-agent for enterprise | prev: nvidia/llama-3.1-nemotron-nano-vl-8b-v1 |
| NVIDIA Nemotron 3 Nano Omni (`nemotron-3-nano-omni-30b-a3b-reasoning`) | ga | 2026-04-27 | 1M | — | — | Hybrid Mixture-of-Experts (30B total / ~3B active) with integrated vision and audio encoders on top of the Nemotron 3 Nano backbone | Multimodal document, video and audio agent reasoning | — |
| Nemotron-Cascade 2 30B-A3B (`nvidia/nemotron-cascade-2-30b-a3b`) | ga | 2026-03-20 | 262K | — | — | Hybrid Mamba-Transformer Mixture-of-Experts, 30B total / 3B active, 52 layers, 128 routable + 1 shared expert, 6 experts activated per token, post-trained from Nemotron-3-Nano-30B-A3B-Base via Cascade RL | High-intelligence-density open reasoning at 3B active parameters for math, code, and agentic workflows with single-GPU deployment | prev: nvidia/nemotron-3-nano-30b-a3b |
| Nemotron 3 Nano 4B (`nvidia/nemotron-3-nano-4b`) | ga | 2026-03-16 | 262K | — | — | Hybrid Mamba-Transformer (Mamba-2 + MLP + small number of attention layers), 3.97B parameters, dense | On-device / edge deployment on Jetson, DGX Spark, and RTX GPUs where privacy, latency, and offline operation matter | prev: nvidia/nvidia-nemotron-nano-9b-v2 |
| Nemotron 3 Super (`nemotron-3-super-120b-a12b`) | ga | 2026-03-11 | 1M | — | — | Hybrid latent Mixture-of-Experts (120B total / 12B active) | Mid-tier agentic reasoning NIM | prev: nemotron-super-49b |
| Nemotron 3 Super 120B-A12B (`nvidia/NVIDIA-Nemotron-3-Super-120B-A12B-BF16`) | ga | 2026-03-11 | 1M | — | — | Hybrid Mamba-Transformer Mixture-of-Experts (120B total, 12B active) | High-throughput agentic reasoning and coding | prev: nvidia/Llama-3_3-Nemotron-Super-49B-v1_5 |
| Nemotron 3 Super (`nvidia/nemotron-3-super-120b-a12b`) | ga | 2026-03-10 | 128K | $0.09 | $0.40 | Sparse Mixture-of-Experts (120B total / 12B active) | Mid-tier open-weight reasoning | prev: nvidia/nemotron-3-nano-30b-a3b → superseded by: nvidia/nemotron-3.5-super-vl-120b-a12b |
| Llama Nemotron Embed VL 1B v2 (`nvidia/llama-nemotron-embed-vl-1b-v2`) | ga | 2026-02-10 | 8K | — | — | Fine-tuned Llama 3.2 1B with SigLip2 400M vision encoder, 16 layers, 2048 embedding size | multimodal retrieval over text, images, and charts | — |
| Cosmos Reason 2 8B (`nvidia/cosmos-reason2-8b`) | ga | 2025-12-19 | 256K | — | — | Vision-language model post-trained from Qwen3-VL-8B-Instruct | Physical AI planning and robotics reasoning | prev: nvidia/cosmos-reason1-7b |
| Nemotron 3 Nano (`nemotron-3-nano-30b-a3b`) | ga | 2025-12-15 | 1M | — | — | Hybrid Transformer-Mamba Mixture-of-Experts (31.6B total / 3.2B active) | Efficient agentic inference on single GPU | prev: nemotron-nano-9b → superseded by: nemotron-3.5-lightning-30b-a3b |
| Nemotron 3 Nano (`nvidia/nemotron-3-nano-30b-a3b`) | ga | 2025-12-15 | 128K | $0.05 | $0.20 | Sparse Mixture-of-Experts (30B total / 3B active) | Compact open-weight reasoning | prev: nvidia/nemotron-nano-9b-v2 → superseded by: nvidia/nemotron-3.5-lightning-30b-a3b |
| Nemotron 3 Nano 30B-A3B (`nvidia/NVIDIA-Nemotron-3-Nano-30B-A3B-BF16`) | ga | 2025-12-15 | 1M | — | — | Hybrid Mamba-2 + Transformer Mixture-of-Experts (30B total, 3.5B active; 128 experts + 1 shared, top-5 routing) | Cost-efficient edge and multi-agent deployments | prev: nvidia/Llama-3_1-Nemotron-Nano-8B-v1 |
| Nemotron Nano 2 VL (`nvidia/nvidia-nemotron-nano-12b-v2-vl`) | ga | 2025-11-06 | 128K | — | — | CRadioV2-H vision encoder + Nemotron Nano 12B v2 hybrid Mamba-Transformer | Document, image, and video understanding | — |
| Nemotron Nano 12B v2 VL (`nemotron-nano-12b-v2-vl`) | ga | 2025-10-28 | 128K | — | — | C-RADIOv2-H vision encoder with Nemotron Nano 12B v2 hybrid Mamba-Transformer backbone | Document intelligence and multi-image/video understanding | — |
| Nemotron Nano 12B v2 VL (`nvidia/nemotron-nano-12b-v2-vl`) | ga | 2025-10-28 | 131K | — | — | Hybrid Transformer–Mamba vision-language, 12B | Small open-weight vision-language reasoning | prev: nvidia/nemotron-nano-9b-v2 → superseded by: nvidia/nemotron-3-nano-omni-30b-a3b-reasoning |
| Llama Embed Nemotron 8B (`nvidia/llama-embed-nemotron-8b`) | ga | 2025-10-21 | 33K | — | — | LlamaBidirectionalModel bi-encoder (8B) | Multilingual retrieval and RAG embeddings | — |
| Llama 3.3 Nemotron Super 49B v1.5 (`nvidia/llama-3_3-nemotron-super-49b-v1_5`) | ga | 2025-10-10 | 131K | $0.10 | $0.40 | Neural Architecture Search compression of Meta Llama-3.3-70B-Instruct with reasoning post-training | single-GPU reasoning and tool-calling on Llama base | prev: nvidia/llama-3.3-nemotron-super-49b-v1 → superseded by: nvidia/nemotron-3-super-120b-a12b |
| NVIDIA Nemotron Nano 9B v2 (`nvidia-nemotron-nano-9b-v2`) | ga | 2025-08-21 | 128K | — | — | Hybrid Nemotron-H architecture: predominantly Mamba-2 and MLP layers with 4 self-attention layers, compressed from a 12B base pretrained on 20T tokens with FP8 recipe | Efficient reasoning on a single GPU with 128K context | → superseded by: nemotron-3-nano-30b-a3b |
| Nemotron Nano 9B v2 (`nvidia/nemotron-nano-9b-v2`) | ga | 2025-08-18 | 128K | $0.04 | $0.16 | Hybrid Transformer–Mamba, 9B dense | Cheap, high-throughput reasoning on a single A10G | prev: nvidia/llama-3.1-nemotron-nano-8b-v1 → superseded by: nvidia/nemotron-3.5-lightning-30b-a3b |
| NVIDIA Nemotron Nano 9B v2 (`nvidia/nvidia-nemotron-nano-9b-v2`) | ga | 2025-08-18 | 128K | $0.04 | $0.16 | Hybrid Mamba2-Transformer trained from scratch by NVIDIA | Efficient small-model reasoning with thinking budget | → superseded by: nvidia/nemotron-3-nano-30b-a3b |
| Llama 3.3 Nemotron Super 49B v1.5 (`llama-3.3-nemotron-super-49b-v1.5`) | ga | 2025-07-25 | 131K | — | — | Dense decoder-only transformer derived from Meta Llama-3.3-70B-Instruct with NAS-optimized architecture | Dense Llama-based reasoning and tool-use agent | prev: llama-3.3-nemotron-super-49b-v1 → superseded by: nemotron-3-super-120b-a12b |
| Llama 3.3 Nemotron Super 49B v1.5 (`nvidia/llama-3.3-nemotron-super-49b-v1.5`) | ga | 2025-07-25 | 131K | $0.10 | $0.40 | Dense 49B transformer (NAS-reduced from Llama 3.3 70B) | Reasoning on a single H100/H200 at moderate cost | prev: nvidia/llama-3.3-nemotron-super-49b-v1 → superseded by: nvidia/nemotron-3-super-120b-a12b |
| Llama 3.1 Nemotron Ultra 253B v1 (`nvidia/llama-3.1-nemotron-ultra-253b-v1`) | ga | 2025-04-07 | 131K | $0.60 | $1.80 | Dense 253B transformer derived from Llama 3.1 | Largest Nemotron for highest-quality reasoning | prev: nvidia/llama-3.1-nemotron-70b-instruct → superseded by: nvidia/nemotron-3-ultra-550b-a55b |
| Llama 3.2 NV EmbedQA 1B v2 (`nvidia/llama-3.2-nv-embedqa-1b-v2`) | ga | 2024-11-15 | 8K | — | — | Llama-3.2 1B-based bi-encoder with Matryoshka output projection | Multilingual retrieval and RAG embeddings | prev: nvidia/llama-3.2-nv-embedqa-1b-v1 |
| Nemotron-4 340B Instruct (`nvidia/nemotron-4-340b-instruct`) | ga | 2024-06-14 | 4K | — | — | Dense decoder-only Transformer | Synthetic data generation for model training | — |
| NVIDIA Nemotron 3.5 Lightning (`nemotron-3.5-lightning-30b-a3b`) | ga | — | 1M | — | — | Hybrid MoE with interleaved Mamba-2 and MoE layers plus select Attention layers, plus MTP layers; 30B total / 3B active | Fast specialized task execution inside long-running agents | prev: nemotron-3-nano-30b-a3b |
| Nemotron-Labs-Audex 2B (`nvidia/nemotron-labs-audex-2b`) | preview | 2026-07-07 | — | — | — | Dense 2B decoder LLM with extended vocabulary for discrete audio tokens and an audio encoder for speech and general audio inputs | Compact 2B audio-text LLM for on-device speech understanding and TTS | — |
| Nemotron-Labs-Audex 30B-A3B (`nvidia/nemotron-labs-audex-30b-a3b`) | preview | 2026-07-07 | — | — | — | Single MoE Transformer decoder with 30B total / 3B active parameters; hybrid Mamba-Transformer backbone (Nemotron-Cascade-2-30B-A3B, 52 layers, 128 routable + shared experts, 6 activated per token) extended with audio encoder and vocabulary for discrete audio output tokens | Unified audio-text MoE for ASR, TTS, translation, and speech-to-speech | prev: nvidia/nemotron-cascade-2-30b-a3b |
| Nemotron-Labs-TwoTower 30B-A3B (`nvidia/nemotron-labs-twotower-30b-a3b`) | preview | 2026-07-01 | 131K | — | — | Block-wise autoregressive diffusion: frozen Nemotron-3-Nano-30B-A3B AR context tower + trainable bidirectional diffusion denoiser tower (~60B total, ~3B active per tower) | High-throughput diffusion language generation research | prev: nvidia/nemotron-3-nano-30b-a3b |
| Nemotron 3 VoiceChat (`nvidia/nemotron-voicechat`) | preview | 2026-03-18 | — | — | — | Unified speech-to-speech: Parakeet audio encoder + Nemotron Nano v2 9B LLM backbone + TTS decoder (~12B total) | Full-duplex real-time conversational voice agents | — |
| Llama 3.3 Nemotron Super 49B v1 (`nvidia/llama-3.3-nemotron-super-49b-v1`) | deprecated | 2025-03-18 | 131K | $0.10 | $0.40 | Dense transformer derived from Llama-3.3-70B-Instruct via Neural Architecture Search | Legacy single-GPU reasoning agent model | → superseded by: nvidia/llama-3.3-nemotron-super-49b-v1.5 |

## OpenAI

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GPT-6.1 Sol (`gpt-6.1-sol`) | ga | 2026-09-29 | 1.1M | $2.00 | $10.00 | — | Complex coding, agentic computer use | prev: gpt-6-sol |
| GPT-6 Luna (`gpt-6-luna`) | ga | 2026-09-22 | 1.1M | $0.10 | $0.50 | — | Cost-efficient high-volume workloads | prev: gpt-5.6-luna |
| GPT-6 Sol (`gpt-6-sol`) | ga | 2026-09-22 | 1M | $2.00 | $10.00 | — | Balanced reasoning for everyday work | prev: gpt-5.6-sol → superseded by: gpt-6.1-sol |
| GPT-6 Astra (`gpt-6-astra`) | ga | 2026-09-03 | 1M | $10.00 | $50.00 | Frontier reasoning model with variable reasoning effort levels | Hardest reasoning and research tasks | prev: gpt-5.6-terra |
| GPT-Live-Transcribe (`gpt-live-transcribe`) | ga | 2026-07-29 | — | — | — | — | Low-latency streaming speech-to-text | prev: gpt-4o-transcribe |
| GPT-Transcribe (`gpt-transcribe`) | ga | 2026-07-29 | — | — | — | — | Async batch transcription of recorded audio | prev: whisper-large-v3 |
| GPT-5.6 Luna (`gpt-5.6-luna`) | ga | 2026-07-09 | 1.1M | $0.20 | $1.20 | Fast, low-cost tier of GPT-5.6 family | High-volume, cost-sensitive workloads | prev: gpt-5.5-nano → superseded by: gpt-6-luna |
| GPT-5.6 Sol (`gpt-5.6-sol`) | ga | 2026-07-09 | 1M | $4.00 | $20.00 | Frontier reasoning tier of GPT-5.6 family | Prior flagship reasoning model, replacement for o3-pro | prev: gpt-5.5-pro → superseded by: gpt-6.1-sol |
| GPT-5.6 Terra (`gpt-5.6-terra`) | ga | 2026-07-09 | 1.1M | $2.00 | $12.00 | Balanced tier of GPT-5.6 family | Balance of intelligence and cost for production workloads | prev: gpt-5.5-mini |
| GPT-Realtime 2.1 (`gpt-realtime-2.1`) | ga | 2026-07-06 | 128K | $4.00 | $24.00 | Realtime speech-to-speech transformer with configurable reasoning tokens | Production voice agents and realtime audio | prev: gpt-realtime-2 |
| GPT-Realtime-2.1 mini (`gpt-realtime-2.1-mini`) | ga | 2026-07-06 | 128K | $0.60 | $2.40 | Distilled speech-to-speech realtime reasoning model | Low-cost realtime voice agents at scale | prev: gpt-realtime-mini |
| GPT Realtime 2 (`gpt-realtime-2`) | ga | 2026-05-07 | 128K | $4.00 | $24.00 | — | Low-latency speech-to-speech voice agents | prev: gpt-realtime |
| GPT-5.5 Instant (`gpt-5.5-instant`) | ga | 2026-05-05 | 1M | $5.00 | $30.00 | — | Fast default chat for ChatGPT-style workloads | prev: gpt-5.3-instant |
| GPT-5.5 (`gpt-5.5`) | ga | 2026-04-24 | 1M | $5.00 | $30.00 | First full retrain since GPT-4.5; frontier reasoning model | Flagship agentic workloads with long context | prev: gpt-5 → superseded by: gpt-6-astra |
| GPT-5.5 Pro (`gpt-5.5-pro`) | ga | 2026-04-24 | 1M | $30.00 | $180.00 | GPT-5.5 advanced reasoning variant | Maximum-reliability reasoning on hardest problems | prev: gpt-5-pro → superseded by: gpt-5.6-sol |
| GPT-5.4 mini (`gpt-5.4-mini`) | ga | 2026-03-17 | 400K | $0.75 | $4.50 | — | Cost-efficient reasoning and tool use | prev: gpt-5-mini → superseded by: gpt-5.6-terra |
| GPT-5.4 nano (`gpt-5.4-nano`) | ga | 2026-03-17 | 400K | $0.20 | $1.25 | — | Fastest, cheapest GPT-5.4 for latency-sensitive workloads | prev: gpt-5-nano → superseded by: gpt-5.6-luna |
| GPT-5.4 (`gpt-5.4`) | ga | 2026-03-05 | 1.1M | $2.50 | $15.00 | — | Cost-balanced professional work and coding | prev: gpt-5 → superseded by: gpt-5.5 |
| GPT-5.3-Codex (`gpt-5.3-codex`) | ga | 2026-02-24 | 400K | $1.75 | $14.00 | — | Agentic coding, long-running software engineering tasks | prev: gpt-5.2-codex → superseded by: gpt-6-sol |
| GPT-5.1 (`gpt-5.1`) | ga | 2025-11-12 | 400K | $1.25 | $10.00 | — | Balanced general-purpose reasoning and coding | prev: gpt-5 |
| GPT Realtime (`gpt-realtime`) | ga | 2025-08-28 | 32K | $4.00 | $16.00 | — | Low-latency voice and realtime audio apps | prev: gpt-4o-realtime-preview |
| GPT-5 (`gpt-5`) | ga | 2025-08-07 | 400K | $1.25 | $10.00 | Unified system with real-time router between fast and deeper-reasoning variants | General-purpose flagship reasoning at lower cost | prev: o3 → superseded by: gpt-5.5 |
| GPT-5 mini (`gpt-5-mini`) | ga | 2025-08-07 | 400K | $0.25 | $2.00 | — | Cost-efficient high-volume agentic tasks | prev: o4-mini → superseded by: gpt-6-luna |
| GPT-5 nano (`gpt-5-nano`) | ga | 2025-08-07 | 400K | $0.05 | $0.40 | — | Ultra-low-cost classification and summarization | — |
| gpt-oss-120b (`gpt-oss-120b`) | ga | 2025-08-05 | 131K | $0.15 | $0.60 | Sparse Mixture-of-Experts - 117B total / 5.1B active per token, 128 experts, 4 active per token | Self-hosted open-weight reasoning | — |
| text-embedding-3-large (`text-embedding-3-large`) | ga | 2024-01-25 | 8K | $0.13 | — | — | high-quality semantic search and retrieval embeddings | prev: text-embedding-ada-002 |
| GPT-5.6 Cyber (`gpt-5.6-cyber`) | preview | 2026-08-10 | 400K | $12.50 | $75.00 | Cybersecurity-specialized post-training on GPT-5.6 Sol | Authorized offensive-security workflows | prev: gpt-5.5-cyber |
| o3-pro (`o3-pro`) | deprecated | 2025-06-10 | 200K | $20.00 | $80.00 | o-series reasoning model, high-compute variant of o3 | Deep reasoning (deprecated — shutdown 2026-12-11) | prev: o3 → superseded by: gpt-5.6-sol |
| o3 (`o3`) | deprecated | 2025-04-16 | 200K | $2.00 | $8.00 | o-series reasoning model with chain-of-thought | Legacy reasoning workloads prior to GPT-6 migration | prev: o1 → superseded by: gpt-5.6-sol |
| o4-mini (`o4-mini`) | deprecated | 2025-04-16 | 200K | $1.10 | $4.40 | small o-series reasoning model | Low-cost reasoning (deprecated — shutdown 2026-10-23) | prev: o3-mini → superseded by: gpt-5.6-terra |

## Perplexity

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Agent API — fast (`fast`) | ga | 2026-08-13 | — | — | — | Preset over Perplexity Agent API infrastructure | Single-fact lookups, definitions, quick summaries | prev: sonar |
| Agent API — high (`high`) | ga | 2026-08-13 | — | — | — | Preset over Perplexity Agent API infrastructure | Expert-level reasoning and exhaustive source coverage | prev: sonar-deep-research |
| Agent API — medium (`medium`) | ga | 2026-08-13 | — | — | — | Preset over Perplexity Agent API infrastructure | Multi-hop browsing, wide aggregation across sources | prev: sonar-reasoning-pro |
| Agent API — wide-research (`wide-research`) | ga | 2026-08-13 | — | — | — | Preset over Perplexity Agent API infrastructure | Large evidence-backed collections with per-item research | — |
| Agent API — xhigh (`xhigh`) | ga | 2026-08-13 | — | — | — | Preset over Perplexity Agent API infrastructure | Open-ended agentic tasks with sandbox code execution | — |
| Agent API Preset: Low (`low`) | ga | 2026-08-13 | — | — | — | Preset wrapping a frontier model on the Agent API | Balanced research; replaces sonar-pro | prev: sonar-pro |
| Sonar Reasoning Pro (`sonar-reasoning-pro`) | ga | 2025-03-07 | 127K | $2.00 | $8.00 | Proprietary Sonar search-augmented LLM with reasoning fine-tune (Pro tier) | Deep grounded reasoning with search | prev: sonar-reasoning → superseded by: sonar |
| Sonar Deep Research (`sonar-deep-research`) | ga | 2025-02-14 | 127K | $2.00 | $8.00 | Proprietary Sonar search-augmented LLM with autonomous research agent | Autonomous multi-step research reports | prev: sonar-reasoning-pro → superseded by: sonar |
| Sonar Reasoning (`sonar-reasoning`) | ga | 2025-01-29 | 127K | $1.00 | $5.00 | Proprietary Sonar search-augmented LLM with reasoning fine-tune | Grounded reasoning with web search | prev: sonar → superseded by: sonar-reasoning-pro |
| Sonar (`sonar`) | ga | 2025-01-21 | 127K | $1.00 | $1.00 | Proprietary Sonar search-augmented LLM | Baseline grounded web search answers | prev: llama-3.1-sonar-small-128k-online → superseded by: sonar-fast |
| Sonar Pro (`sonar-pro`) | ga | 2025-01-21 | 200K | $3.00 | $15.00 | Proprietary Sonar search-augmented LLM (Pro tier) | Flagship grounded search with longer context | prev: sonar → superseded by: sonar |
| Sonar Pro Search (`sonar-pro-search`) | deprecated | 2025-10-30 | 200K | $3.00 | $15.00 | Agentic search-grounded LLM | Agentic research; migrate to Agent API | prev: sonar-pro → superseded by: low |

## xAI

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Grok 4.7 (`grok-4-7`) | ga | 2026-09-21 | 500K | $2.00 | $6.00 | Reasoning transformer with configurable effort (low/medium/high/xhigh) | Frontier coding, agentic tasks, knowledge work | prev: grok-4-6 |
| Grok 4.7 (`grok-4.7`) | ga | 2026-09-21 | 500K | $2.00 | $6.00 | Transformer with configurable reasoning (Grok 4 family) | Flagship reasoning across coding and knowledge work | prev: grok-4.6 |
| Grok 4 Fast (`grok-4-fast`) | ga | 2026-08-25 | 2M | $0.20 | $0.50 | Two API variants: grok-4-fast-reasoning and grok-4-fast-non-reasoning | Cost-efficient reasoning at 2M context | prev: grok-4 → superseded by: grok-4.3 |
| Grok 4.6 (`grok-4-6`) | ga | 2026-08-12 | 500K | $2.00 | $6.00 | Reasoning model with extended chain-of-thought (low/medium/high/xhigh effort) | Long-running agents, agentic coding, visual work | prev: grok-4-5 → superseded by: grok-4-7 |
| Grok 4.6 (`grok-4.6`) | ga | 2026-08-12 | 500K | $2.00 | $6.00 | Transformer with configurable reasoning (Grok 4 family) | Prior-generation flagship reasoning model | prev: grok-4.5 → superseded by: grok-4.7 |
| Grok Imagine Image 2.0 (`grok-imagine-image-2.0`) | ga | 2026-08-07 | — | — | — | — | Image generation and region-level editing | prev: grok-imagine-image |
| Grok Voice Think Fast 2.0 (`grok-voice-think-fast-2.0`) | ga | 2026-07-29 | — | — | — | Voice-native full-duplex speech-to-speech model with configurable reasoning effort (low/medium/high) | Real-time voice agents with improved speech reasoning and reliable tool-calling | prev: grok-voice-think-fast-1.0 |
| Grok 4.5 (`grok-4.5`) | ga | 2026-07-08 | 500K | $2.00 | $6.00 | V9 1.5-trillion-parameter foundation model | configurable-reasoning coding and agent model | prev: grok-4-0709 → superseded by: grok-4.6 |
| Grok Build 0.1 (`grok-build-0.1`) | ga | 2026-05-29 | 256K | $1.00 | $2.00 | Transformer tuned for agentic coding tasks | Agentic coding, web dev, and debugging | prev: grok-code-fast-1 |
| Grok Build 0.1 (`grok-build-0-1`) | ga | 2026-05-20 | 256K | $1.00 | $2.00 | — | Autonomous agentic software engineering | — |
| Grok 4.3 (`grok-4.3`) | ga | 2026-05-01 | 1M | $1.25 | $2.50 | Transformer with configurable reasoning (Grok 4 family) | Cost-efficient tier with 1M-token context | prev: grok-4 → superseded by: grok-4.5 |
| Grok 4.3 (`grok-4-3`) | ga | 2026-04-30 | 1M | $1.25 | $2.50 | Reasoning-centric model with always-on chain-of-thought | 1M context reasoning at mid-tier price | prev: grok-4-0709 → superseded by: grok-4-5 |
| Grok 4.20 (`grok-4.20`) | ga | 2026-03-31 | 1M | $1.25 | $2.50 | Native 4-agent collaborative architecture | High-throughput agentic tool calling | prev: grok-4 → superseded by: grok-4.3 |
| Grok 4.20 Multi Agent (`grok-4.20-multi-agent`) | ga | 2026-03-09 | 1M | $1.25 | $2.50 | 4-agent parallel council on shared weights and cached context | Multi-agent orchestration and collaborative workflows | prev: grok-4.20-multi-agent-beta-0309 |
| Grok 4.5 (`grok-4-5`) | ga | 2026-02-01 | 500K | $2.00 | $6.00 | — | Coding, agentic tasks, and knowledge work | prev: grok-4-3 → superseded by: grok-4-6 |
| Grok 4.1 Fast (`grok-4.1-fast`) | ga | 2025-11-19 | 2M | $0.20 | $0.50 | unified reasoning/non-reasoning single model | High-volume agentic tool calling and long-doc work | prev: grok-4-fast → superseded by: grok-4.3 |
| Grok 4.1 Fast (Reasoning) (`grok-4-1-fast-reasoning`) | ga | 2025-11-19 | 2M | $0.20 | $0.50 | Unified reasoning/non-reasoning weights steered by system prompt; RL in simulated tool environments | Cheap, fast, long-context reasoning | prev: grok-4-fast → superseded by: grok-4.3 |
| Grok 4 Fast Non-Reasoning (`grok-4-fast-non-reasoning`) | ga | 2025-09-19 | 2M | $0.20 | $0.50 | Unified architecture able to switch between reasoning and non-reasoning modes | Fast, cheap non-reasoning completions | prev: grok-4 → superseded by: grok-4.3 |
| Grok 4 Fast Reasoning (`grok-4-fast-reasoning`) | ga | 2025-09-19 | 2M | $0.20 | $0.50 | Unified architecture able to switch between reasoning and non-reasoning modes | High-throughput, cost-efficient reasoning | prev: grok-4 → superseded by: grok-4-1-fast-reasoning |
| Grok 4.1 Fast (`grok-4-1-fast`) | ga | 2025-09-19 | 2M | $0.20 | $0.50 | Fast tier with reasoning and non-reasoning variants | High-throughput long-context workflows on a budget | prev: grok-4-fast → superseded by: grok-4.3 |
| Grok Code Fast 1 (`grok-code-fast-1`) | ga | 2025-08-26 | 256K | $0.20 | $1.50 | 314B MoE reasoning model optimized for agentic coding | Low-cost agentic coding | → superseded by: grok-build-0.1 |
| Grok 4 (`grok-4`) | ga | 2025-07-09 | 256K | $3.00 | $15.00 | — | Frontier reasoning with native tool use | prev: grok-3 → superseded by: grok-4.5 |
| Grok Imagine Video 1.5 Preview (`grok-imagine-video-1.5-preview`) | preview | 2026-06-03 | — | — | — | Imagine video diffusion model with integrated audio generation | Image-to-video generation with native audio | prev: grok-imagine-video |
| Grok 4.20 Multi-Agent Beta 0309 (`grok-4.20-multi-agent-beta-0309`) | preview | 2026-04-07 | 1M | $1.25 | $2.50 | Multi-agent orchestration over Grok 4.20 | Realtime multi-agent deep research orchestration | prev: grok-4.20 → superseded by: grok-4.20-multi-agent |
| Grok Voice Think Fast 1.0 (`grok-voice-think-fast-1.0`) | deprecated | 2026-04-23 | — | — | — | Voice-native full-duplex model with background reasoning for real-time conversation | real-time voice agents with reasoning (legacy) | → superseded by: grok-voice-think-fast-2.0 |
| Grok 4.20 (dashed alias) (`grok-4-20`) | deprecated | 2026-03-10 | 2M | $2.00 | $6.00 | — | Non-canonical alias for grok-4.20; use canonical dotted form | prev: grok-4.3 → superseded by: grok-4.20 |
| Grok 4.1 Fast (`grok-4.1-fast-reasoning`) | deprecated | 2025-11-19 | 2M | $0.20 | $0.50 | Efficient transformer trained with RL in simulated tool environments | High-throughput agentic tool-calling and long-context workflows | prev: grok-4-fast-reasoning → superseded by: grok-4.3 |
| Grok 4.1 Fast Non-Reasoning (`grok-4-1-fast-non-reasoning`) | deprecated | 2025-11-19 | 2M | $0.20 | $0.50 | Unified reasoning/non-reasoning weights steered by system prompt | Low-latency high-throughput chat and extraction | prev: grok-4-fast-non-reasoning → superseded by: grok-4.3 |
| Grok 4.1 Fast Non-Reasoning (`grok-4.1-fast-non-reasoning`) | deprecated | 2025-11-19 | 2M | $0.20 | $0.50 | — | Low-latency, high-throughput agent tool loops | prev: grok-4-fast-non-reasoning → superseded by: grok-4.3 |
| Grok 4 (0709) (`grok-4-0709`) | deprecated | 2025-07-09 | 256K | $3.00 | $15.00 | — | Complex synthesis, analysis, and instruction following | prev: grok-3 → superseded by: grok-4.5 |
| Grok 3 (`grok-3`) | deprecated | 2025-02-17 | 131K | $3.00 | $15.00 | — | Prior-gen chat and reasoning model | prev: grok-2 → superseded by: grok-4 |

