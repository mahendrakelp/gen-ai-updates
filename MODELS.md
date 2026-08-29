# Frontier Production Model Catalog

_Last refreshed: 2026-08-29 by genai-model-catalog routine._

## Alibaba

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Qwen3.8-27B (`qwen3.8-27b`) | ga | 2026-08-14 | 262.1K | $0.40 | $3.00 | Dense 27.78B-parameter model, 64 layers, hidden size 5120; hybrid attention alternating three Gated DeltaNet linear-attention layers with one Gated (full) Attention layer; native 262K context extendable toward ~1M via YaRN; Apache 2.0 | Open-weight dense VL for single-GPU deployment | prev: `qwen3.6-27b` |
| Qwen3.8-2.4T-A95B (`qwen3.8-2.4t-a95b`) | ga | 2026-08-13 | 262.1K | — | — | Open-weights Mixture-of-Experts checkpoint with 2.4T total / ~95B active parameters; hybrid Gated DeltaNet + Gated Attention layers; 512-expert MoE (10 routed + 1 shared per token); text-only base checkpoint | Open-weights Max-class reasoning and agentic work | prev: `qwen3.7-max` |
| Qwen3.8-Max (`qwen3.8-max`) | ga | 2026-08-03 | 1M | $2.00 | $6.00 | MoE (2.4T total, ~95B active) | Flagship reasoning, long-context multimodal agents | prev: `qwen3.7-max` |
| Qwen3.7-Flash (`qwen3.7-flash`) | ga | 2026-07-27 | 1M | $0.03 | $0.13 | Sparse Mixture-of-Experts vision-language model | Cheap high-volume classification, extraction, subagents | prev: `qwen3.5-flash` |
| Qwen-Plus (Qwen3.7-Plus) (`qwen-plus`) | ga | 2026-06-03 | 1M | $0.32 | $1.28 | Qwen3 mid-tier | Balanced performance, cost and speed | prev: `qwen3.5-plus` |
| Qwen3.7-Plus (`qwen3.7-plus`) | ga | 2026-06-03 | 1M | $0.40 | $1.60 | Mixture-of-Experts with hybrid linear plus full attention | Balanced general-purpose workhorse with vision | prev: `qwen3.6-plus` |
| Qwen3.7-Max (`qwen3.7-max`) | ga | 2026-05-20 | 262.1K | $1.25 | $3.75 | Mixture-of-Experts | Reasoning and agentic tasks at lower cost than flagship | prev: `qwen3-max` → superseded by: `qwen3.8-max` |
| Qwen3.6-27B (`qwen3.6-27b`) | ga | 2026-04-22 | 262.1K | $0.60 | $3.60 | Dense decoder-only Transformer, 27B parameters | Open-weight dense flagship for coding and agents | — |
| Qwen3.6-Flash (`qwen3.6-flash`) | ga | 2026-04-15 | 1M | $0.19 | $1.13 | MoE vision-language model | Cheap high-throughput vision plus agentic coding | prev: `qwen3.5-flash` |
| Qwen3.5-Omni-Flash (`qwen3.5-omni-flash`) | ga | 2026-03-30 | 262.1K | $0.10 | $0.80 | Thinker-Talker Mixture-of-Experts, natively end-to-end omni-modal | Realtime omnimodal voice and video interaction | prev: `qwen3-omni-flash` |
| Qwen3.5-Omni-Plus (`qwen3.5-omni-plus`) | ga | 2026-03-30 | 256K | $0.43 | $4.80 | MoE — 30B total / 3B active | Real-time omnimodal I/O with speech output | prev: `qwen3-omni-30b-a3b` |
| Qwen3.5-Flash (`qwen3.5-flash`) | ga | 2026-02-25 | 1M | $0.07 | $0.26 | Gated DeltaNet plus MoE, alternating linear and full attention in 3:1 ratio | High-volume cheap subagent and classification jobs | prev: `qwen3-flash` |
| Qwen3.5-Plus (`qwen3.5-plus`) | ga | 2026-02-24 | 1M | $0.40 | $2.40 | MoE — 397B total / 17B active (Qwen3.5-397B-A17B) | Value production workloads, unified text+vision | prev: `qwen-plus` |
| Qwen3-Coder-Next (`qwen3-coder-next`) | ga | 2026-02-04 | 262.1K | $0.11 | $0.80 | Sparse MoE (80B total / 3B active, hybrid attention) | Cost-efficient coding-agent workloads with self-hostable open weights | prev: `qwen3-coder-plus` |
| Qwen3-Coder-Plus (`qwen3-coder-plus`) | ga | 2025-09-23 | 1M | $0.65 | $3.25 | MoE (480B total, ~35B active) | Autonomous coding agents and tool use | prev: `qwen-coder-plus` → superseded by: `qwen3-coder-next` |
| Qwen3-Max (`qwen3-max`) | ga | 2025-09-23 | 262.1K | $1.20 | $6.00 | Dense/MoE >1T parameters (Qwen3 series) | Flagship general-purpose reasoning and agents | prev: `qwen2.5-max` → superseded by: `qwen3.7-max` |
| Qwen3-VL 235B Instruct (`qwen3-vl-235b-a22b-instruct`) | ga | 2025-09-23 | 262.1K | — | — | Mixture-of-Experts, 235B total / 22B active parameters | Multimodal vision, video, and GUI agent tasks | prev: `qwen2.5-vl-72b-instruct` |
| Qwen3-VL-Plus (`qwen3-vl-plus`) | ga | 2025-09-23 | 262.1K | $0.21 | $0.63 | MoE VLM — Qwen3-VL-235B-A22B backbone | Vision, video, GUI/agent multimodal reasoning | prev: `qwen-vl-plus` → superseded by: `qwen3.5-plus` |
| Qwen3-Omni 30B Instruct (`qwen3-omni-30b-a3b-instruct`) | ga | 2025-09-22 | 32.8K | — | — | MoE Thinker-Talker design, 30B total / 3B active parameters | End-to-end omni-modal chat with speech output | prev: `qwen2.5-omni-7b` |
| Qwen3-Omni-Flash (`qwen3-omni-flash`) | ga | 2025-09-22 | 65.5K | $0.43 | — | Sparse MoE — 30B total / 3B active (A3B) | Realtime multimodal speech, video, and text interaction | prev: `qwen2.5-omni` |
| Qwen3-Coder-Flash (`qwen3-coder-flash`) | ga | 2025-09-17 | 1M | $0.20 | $0.98 | Mixture-of-Experts (MoE) | Fast, low-cost autonomous coding agents | — |
| Qwen-Flash (Qwen3.7-Flash) (`qwen-flash`) | ga | 2025-07-28 | 1M | $0.03 | $0.13 | Mixture-of-Experts (MoE) | High-volume low-latency multimodal tasks | prev: `qwen3.5-flash` |
| Qwen3-235B-A22B-Thinking-2507 (`qwen3-235b-a22b-thinking-2507`) | ga | 2025-07-25 | 262.1K | $0.70 | $8.40 | MoE, 235B total / 22B active parameters | Open-weights deep reasoning, math, science | prev: `qwen3-235b-a22b` |
| Qwen3-Coder (`qwen3-coder-480b-a35b-instruct`) | ga | 2025-07-22 | 262.1K | $1.00 | $5.00 | Mixture-of-Experts, 480B total / 35B active | Agentic coding and repo-scale tasks | prev: `qwen2.5-coder-32b-instruct` |
| Qwen3-235B-A22B Instruct 2507 (`qwen3-235b-a22b-instruct-2507`) | ga | 2025-07-21 | 262.1K | $0.70 | $2.80 | Mixture-of-Experts, 235B total / 22B active parameters | Open-weights flagship text reasoning and generation | prev: `qwen2.5-72b-instruct` |
| Qwen3-235B-A22B-Instruct (`qwen3-235b-a22b-instruct`) | ga | 2025-04-28 | 131.1K | $0.09 | $0.10 | Mixture-of-Experts, 235B total / 22B active | Open-weight MoE with thinking mode | prev: `qwen2.5-72b-instruct` |
| Qwen-VL-Max (`qwen-vl-max`) | ga | 2025-02-01 | 131.1K | $0.52 | $2.08 | Multimodal vision-language | High-quality vision-language tasks including OCR, document understanding, chart/diagram analysis, and image reasoning | → superseded by: `qwen3-vl-plus` |
| Qwen Text Embedding v4 (`text-embedding-v4`) | ga | — | 32.8K | $0.02 | $0.0000 | Dense transformer embedding model (Qwen3-Embedding family) | multilingual embeddings and retrieval | prev: `text-embedding-v3` |
| Qwen-Turbo (`qwen-turbo`) | ga | — | 1M | $0.05 | $0.20 | Qwen3 lightweight | Ultra-cheap high-throughput text | → superseded by: `qwen-flash` |
| Qwen3.5-Omni-Flash-Realtime (`qwen3.5-omni-flash-realtime`) | ga | — | — | $0.55 | $4.50 | End-to-end omni-modal transformer | real-time voice and video chat | prev: `qwen3.5-omni-flash` |
| Qwen3.6-Plus (`qwen3.6-plus`) | ga | — | 1M | $0.33 | $1.95 | Hybrid linear-attention Mixture-of-Experts | Balanced price/performance mid-tier reasoning | prev: `qwen3.5-plus` |
| Qwen3.8-Flash-Next (`qwen3.8-flash-next`) | preview | 2026-08-26 | 262.1K | $0.16 | $0.47 | MoE (125B total, 6B active) | Preview of Qwen4 architecture, cost-efficient agents | — |
| Qwen3-Max-Thinking (`qwen3-max-thinking`) | preview | 2026-01-23 | 262.1K | $1.20 | $6.00 | Dense/MoE reasoning variant of Qwen3-Max | Deep multi-step reasoning for hard analytical problems | prev: `qwen3-max` |
| Qwen3.8-Max-Preview (`qwen3.8-max-preview`) | deprecated | 2026-07-19 | 983.6K | — | — | Sparse MoE (~2.4T total parameters, multimodal) | Next-gen flagship reasoning and agentic tasks | prev: `qwen3.7-max` → superseded by: `qwen3.8-max` |

## Amazon

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Amazon Nova 2 Lite (`amazon.nova-2-lite-v1:0`) | ga | 2025-12-02 | 1M | $0.30 | $2.50 | Multimodal reasoning foundation model | Fast, cost-effective multimodal reasoning agents | prev: `amazon.nova-lite-v1:0` |
| Amazon Nova 2 Sonic (`amazon.nova-2-sonic-v1:0`) | ga | 2025-12-02 | 1M | $0.33 | $2.75 | Unified speech-to-speech transformer | Real-time speech-to-speech conversational AI | prev: `amazon.nova-sonic-v1:0` |
| Nova Canvas (`amazon.nova-canvas-v1:0`) | ga | 2024-12-03 | — | — | — | Diffusion image generation model | Studio-quality image generation and editing | — |
| Nova 2 Omni (Preview) (`amazon.nova-2-omni-preview-20251202-v1:0`) | preview | 2025-12-02 | 1M | $0.30 | $2.50 | Any-to-any omnimodal reasoning model | Any-to-any multimodal reasoning and image generation | — |
| Nova 2 Pro (`amazon.nova-2-pro-v1:0`) | preview | 2025-12-02 | 1M | — | — | Multimodal foundation model | Most intelligent Nova for complex multistep tasks | prev: `amazon.nova-pro-v1:0` |
| Nova 2 Pro (Preview) (`amazon.nova-2-pro-preview-20251202-v1:0`) | preview | 2025-12-02 | 1M | $2.19 | $17.50 | Multimodal reasoning foundation model with dynamic extended-thinking | Frontier multimodal reasoning with extended thinking | prev: `amazon.nova-premier-v1:0` |
| Amazon Nova Premier (`amazon.nova-premier-v1:0`) | deprecated | 2025-04-30 | 1M | $2.50 | $12.50 | Multimodal transformer | Complex agentic tasks and model distillation teacher | prev: `amazon.nova-pro-v1:0` → superseded by: `amazon.nova-2-pro-preview-20251202-v1:0` |
| Amazon Nova Lite (`amazon.nova-lite-v1:0`) | deprecated | 2024-12-03 | 300K | $0.06 | $0.24 | Multimodal transformer | Low-cost multimodal at high throughput | → superseded by: `amazon.nova-2-lite-v1:0` |
| Amazon Nova Micro (`amazon.nova-micro-v1:0`) | deprecated | 2024-12-03 | 128K | $0.04 | $0.14 | Text transformer | Cheapest text-only latency-sensitive tasks | → superseded by: `amazon.nova-2-lite-v1:0` |
| Amazon Nova Pro (`amazon.nova-pro-v1:0`) | deprecated | 2024-12-03 | 300K | $0.80 | $3.20 | Multimodal transformer | Balanced multimodal accuracy-cost workhorse | → superseded by: `amazon.nova-2-lite-v1:0` |

## Anthropic

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Claude Opus 5 (`claude-opus-5`) | ga | 2026-07-24 | 1M | $5.00 | $25.00 | Opus-tier reasoning model with default thinking | Complex agentic coding and enterprise work | prev: `claude-opus-4-8` |
| Claude Sonnet 5 (`claude-sonnet-5`) | ga | 2026-06-30 | 1M | $2.00 | $10.00 | Sonnet-tier model with adaptive thinking | Best combination of speed and intelligence | prev: `claude-sonnet-4-6` |
| Claude Fable 5 (`claude-fable-5`) | ga | 2026-06-09 | 1M | $10.00 | $50.00 | Mythos-class frontier model with adaptive thinking | Next-generation intelligence for long-running agents | prev: `claude-opus-4-8` |
| Claude Haiku 4.5 (`claude-haiku-4-5`) | ga | 2025-10-15 | 200K | $1.00 | $5.00 | Haiku-class small model with extended thinking | Fastest model with near-frontier intelligence | prev: `claude-haiku-3-5` |
| Claude Haiku 4.5 (dated snapshot) (`claude-haiku-4-5-20251001`) | ga | 2025-10-15 | 200K | $1.00 | $5.00 | Haiku-tier compact model | Pinned production snapshot of Haiku 4.5 | prev: `claude-haiku-3-5` |
| Claude Mythos 5 (`claude-mythos-5`) | preview | 2026-06-09 | 1M | $10.00 | $50.00 | Same underlying model as Claude Fable 5; uses the newer tokenizer introduced with Opus 4.7 | Defensive cybersecurity workflows | prev: `claude-mythos-preview` |
| Claude Opus 4.8 (`claude-opus-4-8`) | deprecated | 2026-05-28 | 1M | $5.00 | $25.00 | Transformer LLM using the newer tokenizer introduced with Claude Opus 4.7 | Legacy Opus tier, superseded by Opus 5 | prev: `claude-opus-4-7` → superseded by: `claude-opus-5` |
| Claude Opus 4.7 (`claude-opus-4-7`) | deprecated | 2026-04-16 | 1M | $5.00 | $25.00 | — | Legacy Opus tier, superseded by Opus 4.8 | prev: `claude-opus-4-6` → superseded by: `claude-opus-4-8` |
| Claude Sonnet 4.6 (`claude-sonnet-4-6`) | deprecated | 2026-02-17 | 1M | $3.00 | $15.00 | Transformer | Legacy Sonnet tier, superseded by Sonnet 5 | prev: `claude-sonnet-4-5` → superseded by: `claude-sonnet-5` |
| Claude Opus 4.6 (`claude-opus-4-6`) | deprecated | 2026-02-05 | 1M | $5.00 | $25.00 | — | Legacy Opus tier, superseded by Opus 4.7 | prev: `claude-opus-4-5` → superseded by: `claude-opus-4-7` |
| Claude Opus 4.5 (`claude-opus-4-5-20251101`) | deprecated | 2025-11-01 | 200K | $5.00 | $25.00 | — | Legacy Opus tier, superseded by Opus 4.6 | prev: `claude-opus-4-1` → superseded by: `claude-opus-4-6` |
| Claude Sonnet 4.5 (`claude-sonnet-4-5-20250929`) | deprecated | 2025-09-29 | 200K | $3.00 | $15.00 | — | Legacy Sonnet tier, superseded by Sonnet 4.6 | prev: `claude-sonnet-4` → superseded by: `claude-sonnet-4-6` |

## Cohere

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Cohere Transcribe Arabic (`cohere-transcribe-arabic-07-2026`) | ga | 2026-07-07 | — | — | — | 2B encoder-decoder transformer fine-tuned from Cohere Transcribe for Arabic ASR | Arabic speech-to-text with dialect coverage | prev: `cohere-transcribe-03-2026` |
| North Mini Code (`north-mini-code-1-0`) | ga | 2026-06-17 | 256K | — | — | Sparse mixture-of-experts, 30B total / 3B active parameters | Agentic coding and terminal software engineering tasks | — |
| North Mini Code (`north-mini-code-1.0`) | ga | 2026-06-09 | 256K | $0.0000 | $0.0000 | Sparse Mixture-of-Experts, 30B total parameters / 3B active per token | Agentic software engineering, code generation, and terminal/CLI tasks; local-hardware coding agents | — |
| Command A+ (`command-a-plus-05-2026`) | ga | 2026-05-01 | 256K | $2.50 | $10.00 | Mixture-of-Experts, 25B active / 218B total parameters | Multimodal agentic reasoning at enterprise scale | prev: `command-a-reasoning-08-2025` |
| Cohere Transcribe (`cohere-transcribe-03-2026`) | ga | 2026-03-26 | — | — | — | 2B encoder-decoder transformer with Fast-Conformer encoder (>90% params in encoder) | Real-time enterprise speech-to-text and meetings | — |
| Rerank 4 Fast (`rerank-v4.0-fast`) | ga | 2025-12-11 | 32K | — | — | cross-encoder reranker optimized for low latency | Low-latency, high-throughput multilingual reranking for production RAG | prev: `rerank-v3.5` |
| Rerank 4 Pro (`rerank-v4.0-pro`) | ga | 2025-12-11 | 32K | $0.05 | — | cross-encoder reranker | High-accuracy semantic reranking for enterprise RAG | prev: `rerank-v3.5` |
| Command A Translate (`command-a-translate-08-2025`) | ga | 2025-08-28 | 16K | — | — | Dense transformer, 111B parameters, translation-specialized | Secure enterprise translation across 23 languages | prev: `command-a-03-2025` |
| Command A Reasoning (`command-a-reasoning-08-2025`) | ga | 2025-08-01 | 256K | $2.50 | $10.00 | Dense, 111B parameters | Controllable reasoning for enterprise agents | prev: `command-a-03-2025` → superseded by: `command-a-plus-05-2026` |
| Command A Vision (`command-a-vision-07-2025`) | ga | 2025-07-31 | 128K | $2.50 | $10.00 | Multimodal transformer based on Command A | Enterprise document, chart, and multilingual image understanding | prev: `command-a-03-2025` → superseded by: `command-a-plus-05-2026` |
| Embed v4.0 (`embed-v4.0`) | ga | 2025-04-15 | 128K | $0.12 | — | Multimodal multilingual embedding model | Multimodal multilingual embeddings for RAG | prev: `embed-english-v3.0` |
| Command A (`command-a-03-2025`) | ga | 2025-03-13 | 256K | $2.50 | $10.00 | Dense, 111B parameters | Enterprise RAG, tool use, multilingual agents | prev: `command-r-plus-08-2024` → superseded by: `command-a-reasoning-08-2025` |
| Rerank v3.5 (`rerank-v3.5`) | ga | 2024-12-03 | 4.1K | — | — | Cross-encoder reranking model | Reranking retrieval candidates for RAG | prev: `rerank-english-v3.0` → superseded by: `rerank-v4.0-pro` |
| Command R7B (`command-r7b-12-2024`) | ga | 2024-12-01 | 128K | $0.04 | $0.15 | Dense, ~8B parameters; sliding-window + global attention layers | Low-latency chatbots, on-device RAG and agents | prev: `command-r-08-2024` |
| Aya Expanse 32B (`c4ai-aya-expanse-32b`) | ga | 2024-10-24 | 128K | $0.50 | $1.50 | decoder-only dense Transformer (32B parameters), multilingual (23 languages) | Massively multilingual generation across 23 languages | — |
| Command R+ (`command-r-plus-08-2024`) | ga | 2024-08-01 | 128K | $2.50 | $10.00 | Dense, 104B parameters | Scalable RAG and multi-step tool use | prev: `command-r-plus-04-2024` → superseded by: `command-a-03-2025` |
| Command A+ (preview) (`command-a-plus`) | deprecated | 2026-04-15 | 256K | — | — | Mixture of Experts | Enterprise agentic workflows across 48 languages | prev: `command-a-03-2025` → superseded by: `command-a-plus-05-2026` |
| Rerank 4 (`rerank-v4.0`) | deprecated | 2025-12-11 | 32K | — | — | cross-encoder reranker | Reranking retrieved documents for search | prev: `rerank-v3.5` → superseded by: `rerank-v4.0-pro` |
| Command R (`command-r-08-2024`) | deprecated | 2024-08-30 | 128K | $0.15 | $0.60 | decoder-only dense Transformer (35B parameters) | Cost-efficient RAG and tool use at scale | prev: `command-r` → superseded by: `command-a-03-2025` |

## DeepSeek

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DeepSeek V4-Pro-0813 (`deepseek-v4-pro-0813`) | ga | 2026-08-13 | 1.0M | $0.66 | $1.98 | Mixture-of-Experts, 1.6T total / 49B active per token, hybrid Compressed Sparse Attention | Frontier reasoning and long-context agentic workflows | prev: `deepseek-v4-pro` |
| DeepSeek-V4-Pro (`deepseek-v4-pro`) | ga | 2026-08-13 | 1.0M | $1.32 | $3.96 | Sparse MoE — 1.6T total / 49B active | Frontier reasoning, agentic coding, long-context tasks | prev: `deepseek-v4-pro-preview` → superseded by: `deepseek-v4-pro-0813` |
| DeepSeek V4-Flash-0731 (`deepseek-v4-flash-0731`) | ga | 2026-07-31 | 1.0M | $0.22 | $0.66 | Mixture-of-Experts, 284B total / 13B active per token, Compressed Sparse Attention | Cost-efficient workhorse with agentic and coding gains | prev: `deepseek-v4-flash` |
| DeepSeek-V4-Flash (`deepseek-v4-flash`) | ga | 2026-07-31 | 1.0M | $0.44 | $1.32 | Sparse MoE — 284B total / 13B active | Cost-efficient default for chat, agents, and coding | prev: `deepseek-chat` → superseded by: `deepseek-v4-flash-0731` |
| DeepSeek-V4-Flash Vision (Experimental) (`deepseek-v4-flash-vision-exp`) | preview | 2026-07-31 | 1.0M | $0.44 | $1.32 | Sparse MoE — 284B total / 13B active (vision-adapted) | Image understanding at Flash-tier price | prev: `deepseek-v4-flash` |
| DeepSeek V3.2 (`deepseek-ai/DeepSeek-V3.2`) | deprecated | 2025-12-01 | 163.8K | $0.21 | $0.31 | Sparse MoE — 671B total / 37B active | Verified-baseline reasoning model with efficient sparse attention | prev: `deepseek-v3.2` → superseded by: `deepseek-v4-flash` |
| DeepSeek-V3.2 (`deepseek-chat`) | deprecated | 2025-12-01 | 131.1K | $0.14 | $0.28 | Sparse MoE — 671B total / 37B active with DSA | Prior-generation chat and reasoning (retired) | prev: `deepseek-v3.1-terminus` → superseded by: `deepseek-v4-flash` |
| DeepSeek V3.2-Exp (`deepseek-v3.2`) | deprecated | 2025-09-29 | 128K | $0.28 | $0.42 | Sparse MoE — 671B total / 37B active (DeepSeek Sparse Attention) | Long-context efficiency with sparse attention | prev: `deepseek-v3.1` → superseded by: `deepseek-ai/DeepSeek-V3.2` |
| DeepSeek Reasoner (V3.2 alias) (`deepseek-reasoner`) | deprecated | 2025-05-28 | 128K | $0.55 | $2.19 | Alias routed to DeepSeek-V3.2 thinking mode | Legacy reasoning alias, retired 2026-07-24 | prev: `deepseek-r1` → superseded by: `deepseek-v4-pro-0813` |

## Google

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Gemini 3.7 Flash (`gemini-3.7-flash`) | ga | 2026-08-13 | 1.0M | $0.75 | $3.75 | Gemini 3 Flash-tier transformer (MoE) | High-throughput coding, agents, multimodal | prev: `gemini-3.6-flash` |
| Gemini 3.5 Flash-Lite (`gemini-3.5-flash-lite`) | ga | 2026-07-21 | 1.0M | $0.30 | $2.50 | Distilled Flash-Lite multimodal | High-volume, low-latency agentic and extraction tasks | prev: `gemini-2.5-flash-lite` |
| Gemini 3.6 Flash (`gemini-3.6-flash`) | ga | 2026-07-21 | 1.0M | $1.50 | $7.50 | Natively multimodal reasoning model | Balanced Flash tier with computer-use tooling | prev: `gemini-3.5-flash` → superseded by: `gemini-3.7-flash` |
| Gemini 3.5 Flash (`gemini-3.5-flash`) | ga | 2026-05-19 | 1.0M | $1.50 | $9.00 | Sparse mixture-of-experts (MoE) transformer with thinking-levels; based on Gemini 3 Flash | Coding and agentic Flash workhorse | prev: `gemini-3.1-flash` → superseded by: `gemini-3.6-flash` |
| Gemini 3.1 Flash-Lite (`gemini-3.1-flash-lite`) | ga | 2026-05-07 | 1.0M | $0.25 | $1.50 | Natively multimodal reasoning model | Ultra-cheap lightweight multimodal workloads | prev: `gemini-2.5-flash-lite` → superseded by: `gemini-3.5-flash-lite` |
| Gemma 4 (`gemma-4`) | ga | 2026-04-02 | 256K | — | — | Mixture of Experts (26B MoE) and dense (31B) variants | On-device agentic open-weights AI | prev: `gemma-3-27b-it` |
| Gemma 4 31B (`gemma-4-31b`) | ga | 2026-04-02 | 262.1K | — | — | Dense 31B decoder-only multimodal transformer | Open-weights self-hosted multimodal deployment | prev: `gemma-3-27b-it` |
| Gemini 3 Pro (`gemini-3-pro`) | ga | 2025-11-18 | 1.0M | $2.00 | $12.00 | Sparse mixture-of-experts transformer (Gemini 3 family) | State-of-the-art reasoning, multimodal analysis, agentic coding | prev: `gemini-2.5-pro` → superseded by: `gemini-3.1-pro` |
| Gemini 2.5 Flash-Lite (`gemini-2.5-flash-lite`) | ga | 2025-07-22 | 1.0M | $0.10 | $0.40 | Gemini 2.5 lite transformer | Cheapest tier for high-volume, latency-sensitive tasks | prev: `gemini-2.0-flash-lite` → superseded by: `gemini-3.5-flash-lite` |
| Gemini 2.5 Flash (`gemini-2.5-flash`) | ga | 2025-06-17 | 1.0M | $0.30 | $2.50 | sparse mixture-of-experts | Cost-efficient multimodal workhorse at scale | prev: `gemini-2.0-flash` → superseded by: `gemini-3.7-flash` |
| Gemini 2.5 Pro (`gemini-2.5-pro`) | ga | 2025-06-17 | 1.0M | $1.25 | $10.00 | sparse mixture-of-experts | Reasoning-heavy tasks with stable GA SLA | prev: `gemini-1.5-pro` → superseded by: `gemini-3-pro` |
| Gemma 3 27B Instruct (`gemma-3-27b-it`) | ga | 2025-03-12 | 131.1K | — | — | dense decoder-only transformer with sliding-window + global attention; SigLIP vision encoder on 4B/12B/27B | Open-weights multimodal deployment | prev: `gemma-2-27b-it` → superseded by: `gemma-4` |
| Gemini 3.5 Flash Cyber (`gemini-3.5-flash-cyber`) | preview | 2026-07-21 | 1.0M | — | — | — | Security vulnerability discovery and fixes | prev: `gemini-3.5-flash` |
| Gemini Omni Flash (Preview) (`gemini-omni-flash-preview`) | preview | 2026-06-30 | — | $1.50 | $17.50 | Unified natively-multimodal model without separate encoders | API video generation and editing | prev: `gemini-omni-flash` |
| Gemini 3.5 Pro (Preview) (`gemini-3.5-pro-preview`) | preview | 2026-05-19 | 2M | — | — | Sparse Mixture-of-Experts transformer with Deep Think reasoning | Limited enterprise preview of next flagship | prev: `gemini-3.1-pro` |
| Gemini Omni Flash (`gemini-omni-flash`) | preview | 2026-05-19 | — | — | — | Transformer with native multimodal text/vision/video/audio inputs | Consumer video generation and editing | → superseded by: `gemini-omni-flash-preview` |
| Gemini 3.1 Pro (`gemini-3.1-pro`) | preview | 2026-02-19 | 1.0M | $2.00 | $12.00 | Sparse mixture-of-experts (MoE) transformer, natively multimodal; based on Gemini 3 Pro | Advanced reasoning and agentic tasks | prev: `gemini-3-pro` → superseded by: `gemini-3.5-pro-preview` |
| Gemini 3.1 Pro (`gemini-3.1-pro-preview`) | preview | 2026-02-19 | 1.0M | $2.00 | $12.00 | Natively multimodal reasoning model | Flagship reasoning, agentic coding, multimodal understanding | prev: `gemini-3-pro-preview` → superseded by: `gemini-3.1-pro` |
| Gemini 3 Flash (`gemini-3-flash`) | deprecated | 2026-06-22 | 1.0M | $0.50 | $3.00 | Multimodal transformer | Superseded Flash generation | prev: `gemini-2.5-flash` → superseded by: `gemini-3.5-flash` |
| Gemini 3.1 Flash (`gemini-3.1-flash`) | deprecated | 2026-03-19 | 1.0M | $0.50 | $3.00 | Sparse mixture-of-experts transformer with thinking | Superseded workhorse Flash | prev: `gemini-3-flash` → superseded by: `gemini-3.5-flash` |
| Gemini 3.1 Flash-Lite (Preview) (`gemini-3.1-flash-lite-preview`) | deprecated | 2026-03-03 | 1.0M | $0.25 | $1.50 | Distilled sparse mixture-of-experts | Retired preview endpoint | prev: `gemini-2.5-flash-lite` → superseded by: `gemini-3.1-flash-lite` |
| Gemini 3 Flash Preview (`gemini-3-flash-preview`) | deprecated | 2025-12-17 | 1.0M | $0.50 | $3.00 | Sparse mixture-of-experts transformer with thinking | Retired preview endpoint | prev: `gemini-2.5-flash` → superseded by: `gemini-3-flash` |
| Gemini 3 Pro Preview (`gemini-3-pro-preview`) | deprecated | 2025-11-18 | 1M | $2.00 | $12.00 | — | Retired preview endpoint | prev: `gemini-2.5-pro` → superseded by: `gemini-3-pro` |
| Gemini 2.0 Flash (`gemini-2.0-flash`) | deprecated | 2025-02-05 | 1.0M | $0.15 | $0.60 | — | Legacy low-cost multimodal workhorse | prev: `gemini-1.5-flash` → superseded by: `gemini-2.5-flash` |

## Meta

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Muse Glimmer 30B (`meta/muse-glimmer-30b`) | ga | 2026-08-10 | 131.1K | — | — | Dense decoder-only multimodal transformer — 30B (28B text decoder + 2B vision encoder) | On-device agentic tasks — tool use, multi-step reasoning, and multimodal understanding on consumer GPUs | prev: `meta-llama/Llama-4-Scout-17B-16E-Instruct` |
| Muse Glimmer 30B (`muse-glimmer-30b`) | ga | 2026-08-10 | 131.1K | — | — | Dense causal transformer — ~29.6B params, 52 layers, GQA, with ~1.8B ViT-G/14 vision encoder | Local multimodal agents on one consumer GPU | — |
| Muse Spark 1.2 (`muse-spark-1.2`) | ga | 2026-08-05 | 1M | $1.25 | $4.25 | Reasoning model from Meta Superintelligence Labs with 1M-token context | Frontier reasoning and agentic coding | prev: `muse-spark-1.1` |
| Muse Spark 1.2 (`meta/muse-spark-1.2`) | ga | 2026-08-05 | 1.0M | $1.25 | $4.25 | Proprietary — undisclosed (goal-conditioned agentic multimodal model) | Frontier agentic coding, long-horizon software engineering, and multimodal reasoning | prev: `meta/muse-spark-1.1` |
| Muse Image (`muse-image`) | ga | 2026-07-07 | — | — | — | Agentic image generation model | Agentic image generation and editing | — |
| Llama Guard 4 12B (`meta-llama/Llama-Guard-4-12B`) | ga | 2025-04-29 | 163.8K | $0.20 | $0.20 | Dense transformer decoder — 12B, safety classifier fine-tune | Input/output safety classification for LLM pipelines, multimodal | prev: `meta-llama/Llama-Guard-3-8B` |
| Llama Guard 4 12B (`llama-guard-4-12b`) | ga | 2025-04-29 | — | — | — | Dense 12B early-fusion transformer, pruned from Llama 4 Scout pretrained model | Multimodal safety classification of prompts and responses | prev: `llama-guard-3-11b-vision` |
| Llama 4 Maverick (`meta-llama/Llama-4-Maverick-17B-128E-Instruct`) | ga | 2025-04-05 | 1M | $0.22 | $0.88 | Sparse MoE — 400B total / 17B active, 128 experts, early-fusion multimodal | General-purpose multimodal assistant and Llama flagship for chat and code | prev: `meta-llama/Llama-3.1-405B-Instruct` |
| Llama 4 Maverick (`llama-4-maverick-17b-128e-instruct`) | ga | 2025-04-05 | 1M | $0.20 | $0.60 | MoE — 400B total / 17B active per token, 128 experts, early-fusion natively multimodal | High-end multimodal reasoning and coding at flagship tier | prev: `llama-3.1-405b-instruct` → superseded by: `meta-llama/Llama-4-Maverick-17B-128E-Instruct` |
| Llama 4 Maverick (`llama-4-maverick`) | ga | 2025-04-05 | 1M | $0.19 | $0.60 | Mixture-of-Experts (128 experts, 17B active / 400B total) | Flagship multimodal open-weight MoE chat | prev: `llama-3.1-405b-instruct` → superseded by: `muse-spark-1.2` |
| Llama 4 Scout (`meta-llama/Llama-4-Scout-17B-16E-Instruct`) | ga | 2025-04-05 | 10M | $0.11 | $0.34 | Sparse MoE — 109B total / 17B active, 16 experts, early-fusion multimodal | Long-context multimodal reasoning and document analysis on a single H100 | prev: `meta-llama/Llama-3.3-70B-Instruct` |
| Llama 4 Scout (`llama-4-scout-17b-16e-instruct`) | ga | 2025-04-05 | 10M | $0.11 | $0.34 | MoE — 109B total / 17B active per token, 16 experts, iRoPE, early-fusion natively multimodal | Very-long-context multimodal work on a single H100 | prev: `llama-3.3-70b-instruct` → superseded by: `meta-llama/Llama-4-Scout-17B-16E-Instruct` |
| Llama 4 Scout (`llama-4-scout`) | ga | 2025-04-05 | 10M | $0.08 | $0.30 | Mixture-of-Experts (16 experts, 17B active / 109B total) | Long-context multimodal on a single GPU | prev: `llama-3.3-70b` → superseded by: `muse-glimmer-30b` |
| Llama 3.3 70B Instruct (`llama-3.3-70b`) | ga | 2024-12-06 | 128K | $0.59 | $0.79 | Dense auto-regressive transformer with 70B parameters | Cost-efficient text-only instruction following | prev: `llama-3.1-70b` → superseded by: `llama-4-scout-17b-16e-instruct` |
| Llama 3.3 70B Instruct (`meta-llama/Llama-3.3-70B-Instruct`) | ga | 2024-12-06 | 128K | $0.90 | $0.90 | Dense transformer decoder — 70B parameters, GQA | Efficient open-weight assistant matching Llama 3.1 405B quality at 70B scale | prev: `meta-llama/Llama-3.1-70B-Instruct` → superseded by: `meta-llama/Llama-4-Scout-17B-16E-Instruct` |
| Llama 3.3 70B Instruct (`llama-3.3-70b-instruct`) | ga | 2024-12-06 | 131.1K | — | — | Dense decoder-only transformer, 70B parameters, GQA | Efficient dense 70B text model for multilingual chat | prev: `llama-3.1-70b-instruct` → superseded by: `llama-4-scout-17b-16e-instruct` |
| Llama 3.1 405B Instruct (`meta-llama/Llama-3.1-405B-Instruct`) | ga | 2024-07-23 | 128K | — | — | Dense transformer decoder — 405B parameters | Large-scale open-weight reasoning, synthetic data generation, and distillation | → superseded by: `meta-llama/Llama-3.3-70B-Instruct` |
| Muse Video (`muse-video`) | preview | 2026-07-07 | — | — | — | Video generation model with native audio | Text-to-video generation with native audio | — |
| Llama 4 Behemoth (`llama-4-behemoth`) | preview | — | — | — | — | 288B active / ~2T total Mixture-of-Experts with 16 experts | Internal teacher model for distillation | prev: `llama-3.1-405b-instruct` → superseded by: `muse-spark-1.1` |
| Llama 4 Behemoth (`meta-llama/Llama-4-Behemoth`) | preview | — | — | — | — | Sparse MoE — ~2T total / 288B active, 16 experts (previewed, in-training) | Teacher model for distillation into the rest of the Llama 4 herd | prev: `meta-llama/Meta-Llama-3.1-405B-Instruct` → superseded by: `meta/muse-spark-1.2` |
| Muse Spark 1.1 (`muse-spark-1.1`) | deprecated | 2026-07-09 | 1M | $1.25 | $4.25 | Proprietary — undisclosed | Prior Muse Spark generation via Meta Model API | prev: `muse-spark` → superseded by: `meta/muse-spark-1.2` |
| Muse Spark (`muse-spark`) | deprecated | 2026-04-08 | 1M | — | — | Proprietary — undisclosed | First Meta Superintelligence Labs closed-weight flagship | prev: `meta-llama/Llama-4-Maverick-17B-128E-Instruct` → superseded by: `muse-spark-1.1` |
| Llama 4 Maverick (legacy ID) (`llama-4-maverick-17b-128e`) | deprecated | 2025-04-05 | 1M | $0.19 | $0.60 | Sparse MoE — 400B total / 17B active, 128 experts | Legacy short-form ID for Llama 4 Maverick | prev: `llama-3.3-70b` → superseded by: `meta-llama/Llama-4-Maverick-17B-128E-Instruct` |
| Llama 4 Scout (legacy ID) (`llama-4-scout-17b-16e`) | deprecated | 2025-04-05 | 10M | $0.08 | $0.30 | Sparse MoE — 109B total / 17B active, 16 experts | Legacy short-form ID for Llama 4 Scout | prev: `llama-3.3-70b` → superseded by: `meta-llama/Llama-4-Scout-17B-16E-Instruct` |

## Microsoft

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MAI-Code-1.1-Flash (`mai-code-1.1-flash`) | ga | 2026-08-11 | 256K | $0.20 | $1.20 | Sparse Mixture-of-Experts, 138B total / 5B active parameters | Cost-efficient coding with vision in Copilot workflows | prev: `mai-code-1-flash` |
| MAI-Image-2.5-Pro (`mai-image-2.5-pro`) | ga | 2026-07-15 | — | $5.00 | $106.00 | Diffusion-based image generation and editing model | High-quality text-to-image generation and editing | prev: `mai-image-2` |
| MAI-Voice-2-Flash (`mai-voice-2-flash`) | ga | 2026-07-15 | — | $15.00 | $15.00 | Text-to-speech generative model | High-fidelity multilingual text-to-speech generation | prev: `mai-voice-2` |
| MAI-Voice-2 (`mai-voice-2`) | ga | 2026-06-02 | — | $22.00 | — | Neural text-to-speech with expressive prosody model | Multilingual high-quality speech synthesis with voice cloning | prev: `mai-voice-1` |
| Phi-4-reasoning-vision-15B (`phi-4-reasoning-vision-15b`) | ga | 2026-03-04 | 32.8K | — | — | Multimodal reasoning Transformer, 15B parameters | Compact multimodal reasoning for charts, diagrams, UI | prev: `phi-4-multimodal-instruct` |
| Phi-4-reasoning-vision-15B (`microsoft/Phi-4-reasoning-vision-15B`) | ga | 2026-03-04 | 16.4K | — | — | Phi-4-reasoning backbone + SigLIP-2 vision encoder, mid-fusion | Multimodal reasoning on charts, diagrams, UI | prev: `microsoft/Phi-4-multimodal-instruct` |
| Phi-4-mini-flash-reasoning (`phi-4-mini-flash-reasoning`) | ga | 2025-07-09 | 64K | — | — | SambaY decoder-hybrid-decoder (3.8B params) | Edge math reasoning with high throughput | prev: `phi-4-mini-reasoning` |
| Phi-4-mini-flash-reasoning (`microsoft/phi-4-mini-flash-reasoning`) | ga | 2025-07-09 | — | — | — | Dense transformer, mini variant tuned for flash reasoning | Fast on-device reasoning for edge deployment | — |
| Phi-4-reasoning-plus (`phi-4-reasoning-plus`) | ga | 2025-05-01 | 32K | — | — | 14B dense transformer fine-tuned from Phi-4 with RL | Open-weight reasoning for math, science, and code | prev: `phi-4-reasoning` → superseded by: `phi-4-reasoning-vision-15b` |
| Phi-4-reasoning (`phi-4-reasoning`) | ga | 2025-04-30 | 32.8K | — | — | 14B dense transformer, SFT + RL for reasoning | Small open-weights model with chain-of-thought reasoning | prev: `phi-4` |
| Phi-4-reasoning (`microsoft/Phi-4-reasoning`) | ga | 2025-04-30 | 32.8K | — | — | 14B dense transformer, SFT+DPO reasoning post-training | Compact chain-of-thought math and science | prev: `microsoft/phi-4` → superseded by: `microsoft/Phi-4-reasoning-vision-15B` |
| Phi-4-reasoning-plus (`microsoft/Phi-4-reasoning-plus`) | ga | 2025-04-30 | 32.8K | — | — | 14B dense Transformer fine-tuned from Phi-4 (SFT + RL) | Open-weight small-model reasoning for math and code | prev: `microsoft/phi-4` → superseded by: `microsoft/phi-4-reasoning-vision` |
| Phi-4-multimodal (`phi-4-multimodal`) | ga | 2025-02-27 | 131.1K | — | — | 5.6B multimodal foundation model with Mixture-of-LoRAs adapters | On-device multimodal text, vision and audio | prev: `phi-3.5-vision` |
| Phi-4-mini (`phi-4-mini`) | ga | 2025-02-26 | 128K | $0.07 | $0.23 | 3.8B dense decoder-only transformer | Edge/low-cost text generation with long context | prev: `phi-3.5-mini` |
| Phi-4-mini (`microsoft/Phi-4-mini-instruct`) | ga | 2025-02-26 | 131.1K | $0.07 | $0.23 | 3.8B parameter dense decoder-only Transformer | Cheap on-device / edge text and function-calling | prev: `microsoft/Phi-3.5-mini-instruct` |
| Phi-4-mini-instruct (`phi-4-mini-instruct`) | ga | 2025-02-26 | 128K | $0.07 | $0.30 | 3.8B dense decoder-only transformer | Edge and low-latency chat/reasoning | prev: `phi-3-mini` → superseded by: `phi-4-mini-flash-reasoning` |
| Phi-4-multimodal (`microsoft/Phi-4-multimodal-instruct`) | ga | 2025-02-26 | 128K | $0.08 | $0.32 | 5.6B unified transformer integrating speech, vision, and text with modality-specific adapters | Compact unified speech, vision, and text on-device | prev: `microsoft/Phi-3.5-vision-instruct` → superseded by: `microsoft/Phi-4-reasoning-vision-15B` |
| Phi-4-multimodal (`phi-4-multimodal-instruct`) | ga | 2025-02-26 | 128K | $0.08 | $0.32 | 5.6B dense multimodal transformer (speech, vision, text) | Compact multimodal text + vision + speech | prev: `phi-3.5-vision` |
| Phi-4-mini (`microsoft/phi-4-mini`) | ga | 2025-02-01 | 128K | — | — | — | Document classification and routing at production scale | — |
| Phi-4 (`phi-4`) | ga | 2024-12-12 | 16.4K | $0.12 | $0.50 | 14B dense decoder-only transformer | Small dense model for reasoning-heavy text tasks | prev: `phi-3.5` → superseded by: `phi-4-reasoning` |
| Phi-4 (`microsoft/phi-4`) | ga | 2024-12-12 | 16.4K | $0.12 | $0.50 | 14B dense decoder transformer | Small-model reasoning, math and code | prev: `microsoft/phi-3-medium` → superseded by: `microsoft/Phi-4-reasoning-plus` |
| MAI-Thinking-1 (`mai-thinking-1`) | preview | 2026-08-12 | 256K | $2.00 | $8.00 | Sparse MoE, ~1T total / ~35B active parameters | Frontier reasoning, math, agentic coding | prev: `mai-1-preview` |
| MAI-Cyber-1-Flash (`mai-cyber-1-flash`) | preview | 2026-07-27 | 256K | — | — | Sparse MoE — 137B total / 5B active (fine-tuned from MAI-Code-1-Flash) | Autonomous vulnerability discovery and remediation | prev: `mai-code-1-flash` |
| MAI-Image-2.5 (`mai-image-2.5`) | preview | 2026-07-23 | 32K | $5.00 | $47.00 | Diffusion-based generative model, ~20B non-embedding parameters | High-quality text-to-image and image editing | prev: `mai-image-2` |
| MAI-Image-2.5-Flash (`mai-image-2.5-flash`) | preview | 2026-06-02 | — | $1.75 | $33.00 | Diffusion-based text-to-image (efficient variant) | Faster, cheaper image generation and editing for high-volume workloads | prev: `mai-image-2.5` |
| MAI-Transcribe-1.5 (`mai-transcribe-1.5`) | preview | 2026-06-02 | — | — | — | Multilingual speech-to-text encoder-decoder | Production-grade multilingual speech-to-text with context biasing | prev: `mai-transcribe-1` |
| MAI-Code-1-Flash (`mai-code-1-flash`) | preview | 2026-05-19 | 256K | $0.75 | $4.50 | Sparse MoE, 137B total / 5B active parameters | Fast agentic coding inside Copilot workflows | → superseded by: `mai-code-1.1-flash` |
| MAI-Image-2-Efficient (`mai-image-2-efficient`) | preview | 2026-04-14 | 32K | $5.00 | $19.50 | Diffusion-based text-to-image | Cost-efficient high-throughput image generation | prev: `mai-image-2` → superseded by: `mai-image-2.5` |
| MAI-Image-2 (`mai-image-2`) | preview | 2026-04-02 | 32K | $5.00 | $33.00 | Diffusion-based text-to-image | High-quality text-to-image generation | → superseded by: `mai-image-2-efficient` |
| MAI-Transcribe-1 (`mai-transcribe-1`) | preview | 2026-04-02 | — | — | — | Bidirectional audio encoder with transformer text decoder | Multilingual speech-to-text transcription | → superseded by: `mai-transcribe-1.5` |
| MAI-Voice-1 (`mai-voice-1`) | preview | 2026-04-02 | — | $22.00 | $22.00 | Proprietary neural TTS | High-fidelity expressive speech synthesis | → superseded by: `mai-voice-2` |
| Phi-4-Reasoning-Vision (`microsoft/phi-4-reasoning-vision`) | preview | 2026-03-04 | — | — | — | Dense transformer, 15B parameters, vision-language model | Multimodal reasoning with high-fidelity vision | prev: `microsoft/phi-4-reasoning-plus` |
| MAI-1-preview (`mai-1-preview`) | preview | 2025-08-28 | — | — | — | Mixture-of-Experts foundation model (Microsoft AI, in-house) | Microsoft's first in-house foundation text model | → superseded by: `mai-thinking-1` |

## Mistral

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Mistral OCR 4 (`mistral-ocr-4-0`) | ga | 2026-06-23 | — | — | — | Purpose-built OCR / document understanding model | Document OCR with bounding boxes | prev: `mistral-ocr-3` |
| Mistral Medium 3.5 (`mistral-medium-latest`) | ga | 2026-04-29 | 262.1K | $1.50 | $7.50 | 128B dense multimodal transformer | Unified chat, reasoning, coding, and vision workhorse | prev: `mistral-medium-2508` |
| Mistral Medium 3.5 (`mistral-medium-3-5-26-04`) | ga | 2026-04-29 | 262.1K | $1.50 | $7.50 | 128B dense multimodal transformer | Unified chat, coding, and reasoning workhorse | prev: `mistral-medium-2508` |
| Mistral Medium 3.5 (`mistral-medium-3-5`) | ga | 2026-04-29 | 262.1K | $1.50 | $7.50 | 128B dense multimodal transformer | Balanced coding, reasoning, and vision tasks | prev: `mistral-medium-2508` |
| Mistral Medium 3.5 (`mistral-medium-2604`) | ga | 2026-04-29 | 262.1K | $1.50 | $7.50 | 128B dense multimodal transformer | Balanced multimodal agentic and coding workloads | prev: `mistral-medium-2505` |
| Mistral Small 4 (`mistral-small-latest`) | ga | 2026-03-16 | 262.1K | $0.15 | $0.60 | mixture-of-experts, 119B total / ~6B active parameters (128 experts, 4 active) | High-throughput unified small model for production | prev: `mistral-small-2506` |
| Mistral Small 4 (`mistral-small-2603`) | ga | 2026-03-16 | 262.1K | $0.15 | $0.60 | MoE 119B total / 6.5B active (128 experts) with Pixtral-style vision encoder | Efficient multimodal instruct+reasoning, local deployment | prev: `mistral-small-2501` |
| Devstral 2 (`devstral-2512`) | ga | 2025-12-09 | 256K | $0.40 | $2.00 | Dense 123B parameter transformer | Agentic software engineering and repo-scale coding | prev: `devstral-medium-2507` → superseded by: `devstral-2-25-12` |
| Devstral 2 (`devstral-2-25-12`) | ga | 2025-12-09 | 256K | $0.40 | $2.00 | 123B dense transformer | Agentic software engineering | prev: `devstral-medium-2507` |
| Devstral 2 (`devstral-medium-latest`) | ga | 2025-12-09 | 256K | $0.40 | $2.00 | 123B dense transformer | Agentic coding, shell use, and multi-step SWE tasks | prev: `devstral-medium-2507` |
| Ministral 3 14B (`ministral-14b-2512`) | ga | 2025-12-02 | 262.1K | $0.20 | $0.20 | 14B parameter dense transformer with image understanding | Edge and local deployment with vision | prev: `ministral-8b-2410` |
| Ministral 3 3B (`ministral-3b-latest`) | ga | 2025-12-02 | 131.1K | $0.10 | $0.10 | 3B dense transformer with vision encoder | Edge and on-device deployment | prev: `ministral-3b-2410` |
| Ministral 3 8B (`ministral-8b-2512`) | ga | 2025-12-02 | 262.1K | $0.15 | $0.15 | 8B dense transformer with vision encoder | Edge and on-device inference with reasoning | prev: `ministral-8b-2410` |
| Mistral Large 3 (`mistral-large-latest`) | ga | 2025-12-02 | 262.1K | $0.50 | $1.50 | sparse mixture-of-experts, 675B total / 41B active parameters | Flagship multimodal reasoning and agentic workflows | prev: `mistral-large-2411` |
| Mistral Large 3 (`mistral-large-3-25-12`) | ga | 2025-12-02 | 262.1K | $0.50 | $1.50 | sparse mixture-of-experts, 675B total / 41B active parameters | Flagship open-weight multimodal MoE | prev: `mistral-large-2411` |
| Mistral Large 3 (`mistral-large-2512`) | ga | 2025-12-02 | 262.1K | $0.50 | $1.50 | Granular Mixture-of-Experts, 675B total / 41B active with fused vision encoder | Flagship multimodal reasoning, enterprise agents, long-context | prev: `mistral-large-2411` |
| Devstral Small 2 (`devstral-small-2-2512`) | ga | 2025-12-01 | 262.1K | $0.40 | $2.00 | 24B dense transformer | Agentic coding and codebase exploration | prev: `devstral-small-2507` → superseded by: `mistral-small-2603` |
| Magistral Medium 1.2 (`magistral-medium-2509`) | ga | 2025-09-18 | 128K | $2.00 | $5.00 | Reasoning-tuned dense transformer (Mistral Medium base) | Chain-of-thought reasoning, math, research agents | prev: `magistral-medium-2507` → superseded by: `mistral-medium-2604` |
| Magistral Small 1.2 (`magistral-small-latest`) | ga | 2025-09-18 | 131.1K | $0.50 | $1.50 | 24B dense transformer with vision encoder | Open-weight multilingual chain-of-thought reasoning | prev: `magistral-small-2507` |
| Magistral Small 1.2 (`magistral-small-2509`) | ga | 2025-09-18 | 131.1K | $0.50 | $1.50 | 24B dense transformer with vision encoder | Open-weight multilingual chain-of-thought reasoning | prev: `magistral-small-2507` |
| Codestral 25.08 (`codestral-25-08`) | ga | 2025-08-01 | 256K | $0.30 | $0.90 | — | Low-latency code completion and FIM | prev: `codestral-2501` |
| Codestral 2508 (`codestral-latest`) | ga | 2025-08-01 | 256K | $0.30 | $0.90 | Dense transformer specialized for code | Low-latency code completion and fill-in-the-middle | prev: `codestral-2501` |
| Codestral 25.08 (`codestral-2508`) | ga | 2025-07-31 | 256K | $0.30 | $0.90 | Dense code-specialized transformer | Low-latency code completion, FIM, test generation | prev: `codestral-2501` |
| Magistral Medium (`magistral-medium-latest`) | ga | 2025-06-10 | 128K | $2.00 | $5.00 | — | Chain-of-thought reasoning for enterprise | → superseded by: `magistral-medium-2509` |
| Leanstral 1.5 (`leanstral-1-5`) | preview | 2026-06-30 | 262.1K | $0.0000 | $0.0000 | Sparse Mixture-of-Experts (~6.5B active / 119B total, 128 experts / 4 active per token) | Lean 4 formal proof engineering, automated theorem proving, and autoformalization | prev: `leanstral` |
| Devstral 2 (`devstral-2-2512`) | deprecated | 2025-12-09 | 262.1K | $0.40 | $2.00 | 123B dense transformer | Agentic coding - multi-file edits and long agents | prev: `devstral-medium-2507` → superseded by: `devstral-2-25-12` |
| Mistral Medium 3 (`mistral-medium-2508`) | deprecated | 2025-08-12 | 262.1K | $0.40 | $2.00 | — | Frontier-class agentic coding and multimodal | prev: `mistral-medium-2505` → superseded by: `mistral-medium-2604` |
| Devstral Medium (`devstral-medium-2507`) | deprecated | 2025-07-11 | 131.1K | $0.40 | $2.00 | Code-and-agent specialized transformer | Agentic coding and software engineering agents | prev: `devstral-medium-2505` → superseded by: `devstral-2-25-12` |
| Magistral Medium (`magistral-medium-2506`) | deprecated | 2025-06-10 | 41.0K | $2.00 | $5.00 | — | Chain-of-thought reasoning for legal, finance, and research | → superseded by: `magistral-medium-2509` |
| Mistral Medium 3 (`mistral-medium-2505`) | deprecated | 2025-05-07 | 131K | $0.40 | $2.00 | — | Balanced cost/performance for coding and STEM | → superseded by: `mistral-medium-2604` |
| Ministral 8B (`ministral-8b-latest`) | deprecated | 2024-10-16 | 128K | $0.10 | $0.10 | Dense 8B transformer | Edge and on-device inference at low cost | prev: `ministral-8b-2410` → superseded by: `ministral-8b-2512` |
| Ministral 8B (`ministral-8b-2410`) | deprecated | 2024-10-16 | 131.1K | $0.10 | $0.10 | Dense 8B transformer with interleaved sliding-window attention | On-device and edge deployment | → superseded by: `ministral-8b-2512` |

## Moonshot

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Kimi K3 (`kimi-k3`) | ga | 2026-07-16 | 1.0M | $3.00 | $15.00 | Sparse MoE — 2.8T total params, 16 of 896 experts active per token; Kimi Delta Attention + Attention Residuals + LatentMoE; native MXFP4 weights | Flagship long-context agentic reasoning and coding | prev: `kimi-k2.6` |
| Kimi K2.7 Code (`kimi-k2.7-code`) | ga | 2026-06-12 | 262.1K | $0.95 | $4.00 | Sparse MoE — 1T total / 32B active per token; native multimodal (text + image) | Cost-efficient long-horizon agentic coding | prev: `kimi-k2.6` |
| Kimi K2.6 (`kimi-k2.6`) | ga | 2026-04-20 | 262.1K | $0.95 | $4.00 | Sparse MoE — 1T total / 32B active per token; 384 experts (8 routed + 1 shared); 61 layers; Multi-head Latent Attention (MLA) | General-purpose agentic model with swarm orchestration | prev: `kimi-k2.5` → superseded by: `kimi-k3` |
| Kimi K2.5 (`kimi-k2.5`) | ga | 2026-01-27 | 262.1K | $0.60 | $3.00 | Mixture-of-Experts, 1T total parameters, ~32B active, continued pretraining over ~15T mixed visual+text tokens | Budget multimodal reasoning and agentic tool-calling | prev: `kimi-k2-thinking` → superseded by: `kimi-k2.6` |
| Kimi K2 Thinking (`kimi-k2-thinking`) | ga | 2025-11-06 | 262.1K | $0.60 | $2.50 | Sparse MoE — 1T total / 32B active per token; native int4 quantization | Interleaved reasoning with tool use at low cost | prev: `kimi-k2-0905-preview` → superseded by: `kimi-k3` |
| Kimi K2 Thinking Turbo (`kimi-k2-thinking-turbo`) | ga | 2025-11-06 | 262.1K | $1.15 | $8.00 | 1T-parameter Mixture-of-Experts (32B active per token) with always-on thinking; native INT4 inference | faster interleaved reasoning with tool use | prev: `kimi-k2-instruct-0905` |
| Kimi K2 Instruct 0905 (`kimi-k2-instruct-0905`) | ga | 2025-09-05 | 256K | $0.60 | $2.50 | Mixture-of-Experts, ~1T total / ~32B active parameters | General-purpose agentic coding and tool use | prev: `kimi-k2-0711-preview` → superseded by: `kimi-k2-thinking` |
| Kimi Latest (`kimi-latest`) | ga | — | 128K | — | — | — | Rolling alias tracking the current Kimi chat model | — |
| Kimi K2 (0711 preview) (`kimi-k2-0711-preview`) | deprecated | 2025-07-11 | 131.1K | — | — | Mixture-of-Experts, ~1T total / ~32B active parameters | Original K2 baseline for agentic workflows | → superseded by: `kimi-k2-instruct-0905` |
| Moonshot v1 128K (`moonshot-v1-128k`) | deprecated | 2024-01-31 | 128K | $2.00 | $5.00 | Dense transformer (not disclosed in detail) | Legacy long-context chat workloads | prev: `moonshot-v1-32k` → superseded by: `kimi-k3` |
| Moonshot v1 32K (`moonshot-v1-32k`) | deprecated | — | 32.8K | — | — | — | Legacy compatibility for existing moonshot-v1 integrations | → superseded by: `moonshot-v1-128k` |

## NVIDIA

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Nemotron 3.5 Lightning (`nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16`) | ga | 2026-08-11 | 1M | — | — | Hybrid Mamba-2 + Attention + MoE with MTP (30B total, 3B active) | Low-latency always-on agents and high-volume tool calls | prev: `nvidia/NVIDIA-Nemotron-3-Nano-30B-A3B-BF16` |
| Nemotron 3.5 Lightning 30B A3B (`nvidia/nemotron-3.5-lightning-30b-a3b`) | ga | 2026-08-11 | 1M | $0.05 | $0.20 | Hybrid Mamba-2 + MoE + Attention architecture; 30B total / 3B active parameters | Always-on agents with high-volume specialized tasks | prev: `nvidia/nemotron-3-nano-30b-a3b` |
| Nemotron 3.5 Lightning 30B A3B (`nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B`) | ga | 2026-08-11 | 1M | — | — | Mamba-2 + MoE + attention hybrid (30B total, 3B active) | High-throughput agent execution layer | prev: `nvidia/nemotron-3-nano-30b-a3b` |
| Nemotron 3 Embed 1B (`nvidia/nemotron-3-embed-1b`) | ga | 2026-07-17 | 8.2K | — | — | Nemotron 3 embedding model, 1B parameters | Multilingual retrieval and RAG embeddings | — |
| Nemotron 3 Embed 1B (BF16) (`nvidia/nemotron-3-embed-1b-bf16`) | ga | 2026-07-17 | 32.8K | $0.0000 | $0.0000 | Transformer encoder with bidirectional attention masking, average pooling | Efficient production-scale dense retrieval where a smaller footprint than the 8B is needed | — |
| Nemotron 3 Embed 1B (NVFP4) (`nvidia/nemotron-3-embed-1b-nvfp4`) | ga | 2026-07-17 | 32.8K | $0.0000 | $0.0000 | Transformer encoder with bidirectional attention masking, NVFP4 (4-bit) quantized from Nemotron-3-Embed-1B-BF16 | Blackwell-optimized 4-bit deployment for high-throughput embedding on GB200 / RTX PRO 6000 | prev: `nvidia/nemotron-3-embed-1b-bf16` |
| Nemotron 3 Embed 8B (`nvidia/nemotron-3-embed-8b-bf16`) | ga | 2026-07-17 | 32.8K | $0.0000 | $0.0000 | Transformer encoder with bidirectional attention masking (adapted from Ministral-3-8B-Instruct-2512 causal decoder), average pooling over token representations | Accuracy-first multilingual dense retrieval for production RAG, agentic retrieval, code retrieval, and agent memory | — |
| Nemotron 3 Embed 8B (`nvidia/nemotron-3-embed-8b`) | ga | 2026-07-16 | 32.8K | — | — | Nemotron 3 embedding model, 8B parameters | Multilingual retrieval embeddings for RAG | prev: `nvidia/llama-embed-nemotron-8b` |
| Nemotron 3 Ultra (`nvidia/nemotron-3-ultra`) | ga | 2026-06-04 | 1M | $0.50 | $2.20 | Hybrid Mamba-Transformer MoE, 550B total / 55B active | frontier reasoning and multi-agent orchestration | prev: `nvidia/llama-3.1-nemotron-ultra-253b-v1` |
| Nemotron 3 Ultra 550B A55B (`nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16`) | ga | 2026-06-04 | 1M | — | — | Hybrid Transformer-Mamba Mixture-of-Experts (550B total / 55B active) with LatentMoE and Multi-Token Prediction | Frontier reasoning and long-running agent orchestration | prev: `nvidia/Llama-3_1-Nemotron-Ultra-253B-v1` |
| Nemotron 3 Ultra 550B A55B (`nvidia/nemotron-3-ultra-550b-a55b`) | ga | 2026-06-04 | 1M | $0.50 | $2.20 | Hybrid Latent MoE with interleaved Mamba-2, MoE and select Attention layers, plus Multi-Token Prediction; 550B total / 55B active parameters, NVFP4 pretraining | Frontier reasoning for long-running agentic workflows | prev: `nvidia/llama-3.1-nemotron-ultra-253b-v1` |
| Nemotron 3.5 ASR Streaming Multilingual (`nvidia/nemotron-3.5-asr-streaming-0.6b`) | ga | 2026-06-04 | — | — | — | Streaming multilingual ASR model, 0.6B parameters | Low-latency multilingual streaming speech recognition | — |
| Nemotron 3.5 Content Safety (`nvidia/nemotron-3.5-content-safety`) | ga | 2026-06-04 | 128K | $0.0000 | $0.0000 | Gemma 3 4B IT fine-tuned (LoRA merged) for multimodal safety reasoning | Multimodal multilingual content safety moderation | prev: `nvidia/nemotron-3-content-safety` |
| Cosmos 3 (`nvidia/cosmos-3`) | ga | 2026-06-01 | — | — | — | Mixture-of-transformers omnimodel with native vision reasoning and multimodal generation across text, image, video, ambient sound and action; Nano 16B and Super 64B sizes | World simulation and synthetic data for physical AI | prev: `nvidia/cosmos-1` |
| Cosmos 3 Super (`nvidia/Cosmos3-Super`) | ga | 2026-06-01 | — | — | — | Mixture-of-Transformers (64B total: 32B autoregressive reasoner + 32B diffusion generator) for omni-modal input and generation | Physical-AI world modeling and synthetic data | prev: `nvidia/Cosmos-1.0` |
| Nemotron-Labs-3-Elastic 30B-A3B (`nvidia/nemotron-labs-3-elastic-30b-a3b`) | ga | 2026-05-07 | 131.1K | — | — | Hybrid Mamba2-Transformer MoE with elastic post-training; 52-layer parent (23 Mamba-2 + MoE layers, 6 attention layers, 128 experts + 1 shared, 6 activated per token); nested 30B / 23B / 12B submodels sharing the same layer structure, 32 attention heads and 64 Mamba heads | Elastic 3-in-1 reasoning checkpoint sliced to 30B/23B/12B for cost-adaptive deployment | prev: `nvidia/nemotron-3-nano-30b-a3b` |
| Nemotron 3 Nano 30B A3B (`nvidia/nemotron-3-nano-30b-a3b`) | ga | 2026-04-28 | 1M | $0.05 | $0.20 | Hybrid Mamba-Transformer MoE, 30B total / 3B active | efficient inference and local deployment | prev: `nvidia/nemotron-nano-9b-v2` → superseded by: `nvidia/nemotron-3-super-120b-a12b` |
| Nemotron 3 Nano Omni (`nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`) | ga | 2026-04-28 | 260K | $0.07 | $0.30 | Multimodal hybrid Mamba-Transformer MoE with reasoning; 30B total / 3B active parameters | Multimodal document, video and audio agents | prev: `nvidia/nemotron-nano-12b-v2-vl` |
| Nemotron 3 Nano Omni (`nvidia/nemotron-3-nano-omni`) | ga | 2026-04-28 | 262.1K | — | — | Nemotron 3 Nano 30B-A3B hybrid Mamba-Transformer MoE backbone + C-RADIOv4-H vision encoder + Parakeet-TDT audio encoder | Efficient omni-modal edge agents (vision, audio, video, text) | prev: `nvidia/nemotron-3-nano-30b-a3b` |
| Nemotron 3 Nano Omni 30B A3B (`nvidia/nemotron-3-nano-omni-30b-a3b`) | ga | 2026-04-28 | 256K | — | — | Hybrid Mamba-Transformer MoE omni encoder, 30B / 3B active | multimodal reasoning across text image audio | prev: `nvidia/nemotron-3-nano-30b-a3b` |
| Nemotron 3 Nano Omni 30B A3B Reasoning (`nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16`) | ga | 2026-04-28 | 300K | — | — | Hybrid MoE Transformer-Mamba (30B / ~3B active) with Conv3D video layers and Efficient Video Sampling | Multimodal perception sub-agent for enterprise agents | prev: `nvidia/NVIDIA-Nemotron-Nano-9B-v2` |
| Nemotron-Cascade 2 30B-A3B (`nvidia/nemotron-cascade-2-30b-a3b`) | ga | 2026-03-20 | 262.1K | — | — | Hybrid Mamba-Transformer Mixture-of-Experts, 30B total / 3B active, 52 layers, 128 routable + 1 shared expert, 6 experts activated per token, post-trained from Nemotron-3-Nano-30B-A3B-Base via Cascade RL | High-intelligence-density open reasoning at 3B active parameters for math, code, and agentic workflows with single-GPU deployment | prev: `nvidia/nemotron-3-nano-30b-a3b` |
| Nemotron 3 Nano 4B (`nvidia/nemotron-3-nano-4b`) | ga | 2026-03-16 | 262.1K | — | — | Hybrid Mamba-Transformer (Mamba-2 + MLP + small number of attention layers), 3.97B parameters, dense | On-device / edge deployment on Jetson, DGX Spark, and RTX GPUs where privacy, latency, and offline operation matter | prev: `nvidia/nvidia-nemotron-nano-9b-v2` |
| Nemotron 3 Super 120B A12B (`nvidia/NVIDIA-Nemotron-3-Super-120B-A12B-BF16`) | ga | 2026-03-11 | 1M | — | — | Hybrid Mamba-Transformer Mixture-of-Experts (120.6B total / 12.7B active) with LatentMoE, GQA, Multi-Token Prediction | Efficient multi-agent reasoning and tool calling | prev: `nvidia/Llama-3_3-Nemotron-Super-49B-v1` |
| Nemotron 3 Super 120B A12B (`nvidia/nemotron-3-super-120b-a12b`) | ga | 2026-03-11 | 1M | $0.09 | $0.40 | Hybrid Mamba-Transformer MoE, 120B total / 12B active | multi-agent collaborative systems | prev: `nvidia/llama-3.3-nemotron-super-49b-v1.5` → superseded by: `nvidia/nemotron-3-ultra-550b-a55b` |
| Nemotron 3 Nano 30B A3B (`nvidia/NVIDIA-Nemotron-3-Nano-30B-A3B-BF16`) | ga | 2025-12-14 | 1M | — | — | Hybrid Mamba-2 + Transformer Mixture-of-Experts (30B total / ~3.6B active) | Cost-efficient agentic reasoning sub-agents | prev: `nvidia/NVIDIA-Nemotron-Nano-9B-v2` |
| Nemotron Nano 2 VL (`nvidia/nemotron-nano-12b-v2-vl`) | ga | 2025-10-28 | 131.1K | — | — | Hybrid Transformer-Mamba multimodal model with RADIOv2.5 vision encoder, MLP connector, and Nemotron-Nano-12B-V2 LLM (Transformer blocks interleaved with Mamba-2 state-space layers) | open document intelligence and video understanding | prev: `nvidia/nvidia-nemotron-nano-9b-v2` → superseded by: `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning` |
| Llama Embed Nemotron 8B (`nvidia/llama-embed-nemotron-8b`) | ga | 2025-10-21 | 32.8K | — | — | Llama-based embedding model, 8B parameters | multilingual retrieval and semantic embeddings | — |
| Llama 3.3 Nemotron Super 49B v1.5 (`nvidia/llama-3_3-nemotron-super-49b-v1_5`) | ga | 2025-10-10 | 131.1K | $0.10 | $0.40 | Neural Architecture Search compression of Meta Llama-3.3-70B-Instruct with reasoning post-training | single-GPU reasoning and tool-calling on Llama base | prev: `nvidia/llama-3.3-nemotron-super-49b-v1` → superseded by: `nvidia/nemotron-3-super-120b-a12b` |
| Nemotron Nano 9B V2 (`nvidia/nvidia-nemotron-nano-9b-v2`) | ga | 2025-08-18 | 131.1K | $0.04 | $0.16 | Hybrid Mamba-Transformer | Dense small-model reasoning with thinking budget control | → superseded by: `nvidia/nemotron-3-nano-30b-a3b` |
| Nemotron Nano 9B v2 (`nvidia/nemotron-nano-9b-v2`) | ga | 2025-08-18 | 131.1K | — | — | Hybrid Mamba-2 / Transformer (Nemotron-H) | Efficient on-device reasoning with thinking budget | — |
| Llama 3.3 Nemotron Super 49B v1.5 (`nvidia/llama-3.3-nemotron-super-49b-v1.5`) | ga | 2025-07-25 | 128K | $0.10 | $0.40 | Llama-3.3-70B derivative with Neural Architecture Search pruning | reasoning RAG and agentic tool calling | prev: `nvidia/llama-3.3-nemotron-super-49b-v1` → superseded by: `nvidia/nemotron-3-super-120b-a12b` |
| Llama 3.1 Nemotron Ultra 253B v1 (`nvidia/llama-3.1-nemotron-ultra-253b-v1`) | ga | 2025-04-07 | 128K | $0.60 | $1.80 | Dense 253B decoder-only Transformer derived from Meta Llama-3.1-405B-Instruct, customized via Neural Architecture Search (NAS) | Dense open frontier reasoning on 8xH100 | → superseded by: `nvidia/nemotron-3-ultra-550b-a55b` |
| Llama 3.3 Nemotron Super 49B v1 (`nvidia/llama-3.3-nemotron-super-49b-v1`) | ga | 2025-03-18 | 131.1K | $0.10 | $0.40 | Dense Transformer derived from Llama-3.3-70B-Instruct via Neural Architecture Search | Reasoning and RAG in single-GPU footprint | → superseded by: `nvidia/llama-3.3-nemotron-super-49b-v1.5` |
| Nemotron-4 340B Instruct (`nvidia/nemotron-4-340b-instruct`) | ga | 2024-06-14 | 4.1K | — | — | Dense decoder-only Transformer | Synthetic data generation for model training | — |
| Nemotron-Labs-Audex 2B (`nvidia/nemotron-labs-audex-2b`) | preview | 2026-07-07 | — | — | — | Dense 2B decoder LLM with extended vocabulary for discrete audio tokens and an audio encoder for speech and general audio inputs | Compact 2B audio-text LLM for on-device speech understanding and TTS | — |
| Nemotron-Labs-Audex 30B-A3B (`nvidia/nemotron-labs-audex-30b-a3b`) | preview | 2026-07-07 | — | — | — | Single MoE Transformer decoder with 30B total / 3B active parameters; hybrid Mamba-Transformer backbone (Nemotron-Cascade-2-30B-A3B, 52 layers, 128 routable + shared experts, 6 activated per token) extended with audio encoder and vocabulary for discrete audio output tokens | Unified audio-text MoE for ASR, TTS, translation, and speech-to-speech | prev: `nvidia/nemotron-cascade-2-30b-a3b` |
| Nemotron-Labs-TwoTower 30B-A3B (`nvidia/nemotron-labs-twotower-30b-a3b`) | preview | 2026-07-01 | 131.1K | — | — | Block-wise autoregressive diffusion: frozen Nemotron-3-Nano-30B-A3B AR context tower + trainable bidirectional diffusion denoiser tower (~60B total, ~3B active per tower) | High-throughput diffusion language generation research | prev: `nvidia/nemotron-3-nano-30b-a3b` |
| Nemotron 3 VoiceChat (`nvidia/nemotron-voicechat`) | preview | 2026-03-18 | — | — | — | Unified speech-to-speech: Parakeet audio encoder + Nemotron Nano v2 9B LLM backbone + TTS decoder (~12B total) | Full-duplex real-time conversational voice agents | — |

## OpenAI

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GPT-Live-Transcribe (`gpt-live-transcribe`) | ga | 2026-07-29 | — | — | — | — | Low-latency streaming speech-to-text | prev: `gpt-4o-transcribe` |
| GPT-Transcribe (`gpt-transcribe`) | ga | 2026-07-29 | — | — | — | — | Async batch transcription of recorded audio | prev: `whisper-large-v3` |
| GPT-5.6 Luna (`gpt-5.6-luna`) | ga | 2026-07-09 | 1.1M | $0.20 | $1.20 | GPT-5.6 series cost-efficient model | High-volume, cost-sensitive, latency-sensitive workloads | prev: `gpt-5-nano` |
| GPT-5.6 Sol (`gpt-5.6-sol`) | ga | 2026-07-09 | 1.1M | $4.00 | $20.00 | GPT-5.6 series flagship reasoning model | Frontier reasoning, coding, agentic long-horizon workflows | prev: `gpt-5.5` |
| GPT-5.6 Terra (`gpt-5.6-terra`) | ga | 2026-07-09 | 1.1M | $2.00 | $12.00 | GPT-5.6 series balanced reasoning model | Balanced everyday work at mid-tier cost | prev: `gpt-5.5` |
| GPT-Realtime-2.1 mini (`gpt-realtime-2.1-mini`) | ga | 2026-07-06 | 128K | $0.60 | $2.40 | Distilled speech-to-speech realtime reasoning model | Low-cost realtime voice agents at scale | prev: `gpt-realtime-mini` |
| gpt-realtime-2.1 (`gpt-realtime-2.1`) | ga | 2026-07-06 | 128K | $4.00 | $24.00 | Realtime speech-to-speech transformer with configurable reasoning tokens | Low-latency voice and multimodal agents | prev: `gpt-realtime-2` |
| GPT-5.5 Instant (`gpt-5.5-instant`) | ga | 2026-05-05 | 1M | $5.00 | $30.00 | — | Fast default chat for ChatGPT-style workloads | prev: `gpt-5.3-instant` |
| GPT-5.5 Pro (`gpt-5.5-pro`) | ga | 2026-04-24 | 1.1M | $30.00 | $180.00 | GPT-5.5 advanced reasoning variant | Maximum-quality reasoning for Pro/Business tier | prev: `gpt-5.5` → superseded by: `gpt-5.6-sol` |
| GPT-5.5 (`gpt-5.5`) | ga | 2026-04-23 | 1.1M | $5.00 | $30.00 | First full retrain since GPT-4.5; frontier reasoning model | Prior-generation flagship for complex tasks | prev: `gpt-5.4` → superseded by: `gpt-5.6-sol` |
| GPT-5.4 mini (`gpt-5.4-mini`) | ga | 2026-03-17 | 400K | $0.75 | $4.50 | — | Everyday tasks with tool use at low cost | prev: `gpt-5-mini` → superseded by: `gpt-5.6-terra` |
| GPT-5.4 nano (`gpt-5.4-nano`) | ga | 2026-03-17 | 400K | $0.20 | $1.25 | — | Ultra-cheap high-volume classification and extraction | prev: `gpt-5-nano` → superseded by: `gpt-5.6-luna` |
| GPT-5.4 (`gpt-5.4`) | ga | 2026-03-05 | 1M | $2.50 | $15.00 | — | Integrated reasoning at mid-tier cost | prev: `gpt-5` → superseded by: `gpt-5.5` |
| GPT-5 (`gpt-5`) | ga | 2025-08-07 | 400K | $1.25 | $10.00 | Unified system with real-time router between fast and deeper-reasoning variants | General-purpose flagship reasoning and coding | prev: `gpt-4.1` → superseded by: `gpt-5.5` |
| gpt-oss-120b (`gpt-oss-120b`) | ga | 2025-08-05 | 128K | $0.03 | $0.15 | Mixture-of-Experts, 120B total / ~5.1B active parameters per token | Self-hosted open-weight reasoning and tool use | — |
| o4-mini (`o4-mini`) | ga | 2025-04-16 | 200K | $1.10 | $4.40 | small o-series reasoning model | Cost-effective deep reasoning at scale | prev: `o3-mini` → superseded by: `gpt-5.6-luna` |
| GPT-Realtime-2 (`gpt-realtime-2`) | ga | — | — | $4.00 | $24.00 | — | Low-latency speech-to-speech voice agents | prev: `gpt-realtime` |
| GPT-5.6 Cyber (`gpt-5.6-cyber`) | preview | 2026-08-10 | 400K | $12.50 | $75.00 | Cybersecurity-specialized post-training on GPT-5.6 Sol | Authorized offensive and defensive cybersecurity workflows | prev: `gpt-5.6-sol` |
| OpenAI o3-pro (`o3-pro`) | deprecated | 2025-06-10 | 200K | $20.00 | $80.00 | o-series reasoning model, high-compute variant of o3 | Hardest problems requiring extended-thinking reliability | prev: `o1-pro` → superseded by: `gpt-5.6-sol` |
| OpenAI o3 (`o3`) | deprecated | 2025-04-16 | 200K | $2.00 | $8.00 | o-series reasoning model with chain-of-thought | Legacy reasoning workloads on math, science, coding | prev: `o1` → superseded by: `gpt-5.6-sol` |

## Perplexity

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Sonar Reasoning Pro (`sonar-reasoning-pro`) | ga | 2025-03-07 | 128K | $2.00 | $8.00 | Perplexity post-training on DeepSeek R1 with chain-of-thought | Multi-step reasoning with live web citations | prev: `sonar-reasoning` → superseded by: `agent-api` |
| Sonar Pro (`sonar-pro`) | ga | 2025-03-01 | 200K | $3.00 | $15.00 | Perplexity proprietary post-training (Sonar family) with enhanced search stack | Complex multi-step search with deep citations | prev: `sonar` → superseded by: `agent-api` |
| Sonar Deep Research (`sonar-deep-research`) | ga | 2025-02-14 | 128K | $2.00 | $8.00 | Perplexity proprietary deep-research stack with reasoning post-training | Autonomous multi-source deep research reports | → superseded by: `agent-api` |
| Sonar (`sonar`) | ga | 2025-02-11 | 128K | $1.00 | $1.00 | Perplexity proprietary post-training on Llama 3.3 70B | Fast, cost-effective grounded web search answers | prev: `llama-3.1-sonar-small-128k-online` → superseded by: `agent-api` |
| Sonar Reasoning (`sonar-reasoning`) | ga | 2025-01-21 | 128K | $1.00 | $5.00 | DeepSeek-R1 fine-tuned with Perplexity real-time search | cheaper reasoning with web search | → superseded by: `sonar-reasoning-pro` |
| Sonar Pro Search (`sonar-pro-search`) | deprecated | 2025-10-30 | 200K | $3.00 | $15.00 | Agentic search-grounded LLM | Agentic research; migrate to Agent API | prev: `sonar-pro` → superseded by: `agent-api` |

## xAI

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Grok 4.6 (`grok-4.6`) | ga | 2026-08-12 | 500K | $2.00 | $6.00 | Dense/MoE transformer with configurable reasoning effort | Flagship reasoning, coding, agentic and knowledge work | prev: `grok-4.5` |
| Grok 4.6 (`grok-4-6`) | ga | 2026-08-12 | 500K | $2.00 | $6.00 | — | Frontier coding and long-running agents | prev: `grok-4-5` |
| Grok Imagine Image 2.0 (`grok-imagine-image-2.0`) | ga | 2026-08-07 | — | — | — | — | High-fidelity image generation and region editing | prev: `grok-imagine` |
| Grok Voice Think Fast 2.0 (`grok-voice-think-fast-2.0`) | ga | 2026-07-29 | — | — | — | Voice-native full-duplex speech-to-speech model with configurable reasoning effort (low/medium/high) | Real-time voice agents with improved speech reasoning and reliable tool-calling | prev: `grok-voice-think-fast-1.0` |
| Grok 4.5 (`grok-4.5`) | ga | 2026-07-08 | 500K | $2.00 | $6.00 | Mixture-of-Experts transformer | Prior flagship for coding and agentic tasks | prev: `grok-4.3` → superseded by: `grok-4.6` |
| Grok Build 0.1 (`grok-build-0.1`) | ga | 2026-05-20 | 256K | $1.00 | $2.00 | Coding-specialized agent model | Fast agentic coding, tool calling, MCP workflows | prev: `grok-code-fast-1` |
| Grok 4.3 (`grok-4.3`) | ga | 2026-05-06 | 1M | $1.25 | $2.50 | Reasoning-first transformer with prompt caching | High-context, low-cost workhorse with strong tool use | prev: `grok-4.20` → superseded by: `grok-4.5` |
| Grok 4.3 (`grok-4-3`) | ga | 2026-04-30 | 1M | $1.25 | $2.50 | Reasoning-centric model with always-on chain-of-thought | 1M context reasoning at mid-tier price | prev: `grok-4-0709` → superseded by: `grok-4-5` |
| Grok 4.20 (`grok-4.20`) | ga | 2026-03-31 | 2M | $1.25 | $2.50 | Native 4-agent collaborative architecture | Multi-agent tool calling with 2M-token context | prev: `grok-4` → superseded by: `grok-4.3` |
| Grok 4.20 Multi Agent (`grok-4.20-multi-agent`) | ga | 2026-03-09 | 1M | $1.25 | $2.50 | 4-agent parallel council on shared weights and cached context | Multi-agent orchestration and collaborative workflows | prev: `grok-4.20-multi-agent-beta-0309` |
| Grok 4.5 (`grok-4-5`) | ga | 2026-02-01 | 500K | $2.00 | $6.00 | — | Coding, agentic tasks, and knowledge work | prev: `grok-4-3` → superseded by: `grok-4-6` |
| Grok 4.1 Fast (`grok-4.1-fast`) | ga | 2025-11-19 | 2M | $0.20 | $0.50 | Dense/hybrid model with dual reasoning/non-reasoning modes | Low-latency agentic tool calling and deep research | prev: `grok-4-fast` |
| Grok 4.1 Fast (`grok-4-1-fast`) | ga | 2025-11-19 | 2M | $0.20 | $0.50 | Compact fast variant of Grok 4.1 | cheap high-throughput agents with 2M context | prev: `grok-4-fast` → superseded by: `grok-4.1-fast` |
| Grok 4.1 Fast (`grok-4.1-fast-reasoning`) | ga | 2025-11-19 | 2M | $0.20 | $0.50 | Efficient transformer trained with RL in simulated tool environments | High-throughput agentic tool-calling and long-context workflows | prev: `grok-4-fast-reasoning` |
| Grok 4.1 Fast Non-Reasoning (`grok-4-1-fast-non-reasoning`) | ga | 2025-11-19 | 2M | $0.20 | $0.50 | Unified reasoning/non-reasoning weights steered by system prompt | Low-latency high-throughput chat and extraction | prev: `grok-4-fast-non-reasoning` |
| Grok 4.1 Fast Non-Reasoning (`grok-4.1-fast-non-reasoning`) | ga | 2025-11-19 | 2M | $0.20 | $0.50 | — | Low-latency, high-throughput agent tool loops | prev: `grok-4-fast-non-reasoning` |
| Grok 4.1 Fast Reasoning (`grok-4-1-fast-reasoning`) | ga | 2025-11-19 | 2M | $0.20 | $0.50 | Unified reasoning/non-reasoning weights steered by system prompt | Fast, cheap tool-calling agents at scale | prev: `grok-4-fast-reasoning` |
| Grok 4 Fast (`grok-4-fast`) | ga | 2025-09-19 | 2M | $0.20 | $0.50 | — | High-volume agentic tool calling and long context | prev: `grok-3-mini` → superseded by: `grok-4.1-fast` |
| Grok 4 Fast (Non-Reasoning) (`grok-4-fast-non-reasoning`) | ga | 2025-09-19 | 2M | $0.20 | $0.50 | Non-reasoning mode of the Grok 4 Fast unified model | Low-latency chat and high-throughput tasks | prev: `grok-3` → superseded by: `grok-4.3` |
| Grok 4 Fast (Reasoning) (`grok-4-fast-reasoning`) | ga | 2025-09-19 | 2M | $0.20 | $0.50 | Unified fast model trained with heavy RL for tool-use | Cost-efficient reasoning at massive context | prev: `grok-3-mini` → superseded by: `grok-4.3` |
| Grok Code Fast 1 (`grok-code-fast-1`) | ga | 2025-08-26 | 256K | $0.20 | $1.50 | Speed-optimized reasoning transformer for coding tasks | Economical high-speed agentic coding assistants | → superseded by: `grok-4.3` |
| Grok 4 (`grok-4`) | ga | 2025-07-09 | 256K | $3.00 | $15.00 | — | original Grok 4 flagship, still available | prev: `grok-3` → superseded by: `grok-4.6` |
| Grok Imagine Video 1.5 Preview (`grok-imagine-video-1.5-preview`) | preview | 2026-06-03 | — | — | — | Imagine video diffusion model with integrated audio generation | Image-to-video generation with native audio | prev: `grok-imagine-video` |
| Grok 4.20 Multi Agent Beta 0309 (`grok-4.20-multi-agent-beta-0309`) | preview | 2026-03-09 | 2M | $1.25 | $2.50 | Beta 4-agent council with extended 2M context | Beta multi-agent with 2M context | prev: `grok-4.20` → superseded by: `grok-4.20-multi-agent` |
| Grok Voice Think Fast 1.0 (`grok-voice-think-fast-1.0`) | deprecated | 2026-04-23 | — | — | — | Voice-native full-duplex model with background reasoning for real-time conversation | real-time voice agents with reasoning (legacy) | → superseded by: `grok-voice-think-fast-2.0` |
| Grok 4.20 (dashed alias) (`grok-4-20`) | deprecated | 2026-03-10 | 2M | $2.00 | $6.00 | — | Non-canonical alias for grok-4.20; use canonical dotted form | prev: `grok-4.3` → superseded by: `grok-4.20` |
| Grok 4 (0709) (`grok-4-0709`) | deprecated | 2025-07-09 | 256K | $3.00 | $15.00 | — | Complex synthesis, analysis, and instruction following | prev: `grok-3` → superseded by: `grok-4.5` |
| Grok 3 (`grok-3`) | deprecated | 2025-02-17 | 131.1K | $3.00 | $15.00 | — | General-purpose enterprise chat | prev: `grok-2` → superseded by: `grok-4.3` |
