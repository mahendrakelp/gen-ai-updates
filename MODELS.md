# Frontier Production Model Catalog

_Last refreshed: 2026-07-21 by genai-model-catalog routine._

## Alibaba

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Qwen3.7-Plus (`qwen3.7-plus`) | ga | 2026-06-01 | 1M | $0.40 | $1.60 | MoE (hybrid Gated DeltaNet + MoE with native vision encoder) | Cost-efficient multimodal agent workloads with vision and video understanding at scale | prev: qwen3.6-plus |
| Qwen3.7-Max (`qwen3.7-max`) | ga | 2026-05-19 | 1M | $2.50 | $7.50 | MoE (proprietary Max tier extending hybrid Gated DeltaNet… | Long-horizon agentic reasoning, autonomous multi-hour sessions, deep tool-calling workflows, and frontier-tier coding/reasoning | prev: qwen3-max |
| Qwen-Flash (`qwen-flash`) | ga | 2026-04-27 | 1M | $0.05 | $0.40 | Hybrid linear attention with sparse MoE | Low-cost high-throughput classification and Q&A | prev: qwen-turbo |
| Qwen3.6-Flash (`qwen3.6-flash`) | ga | 2026-04-27 | 1M | $0.19 | $1.13 | MoE (Gated DeltaNet linear attention + sparse MoE with vi… | High-volume, low-latency multimodal processing, long-document tasks, and cost-sensitive automation | prev: qwen3.5-flash |
| Qwen3.6-27B (`qwen3.6-27b`) | ga | 2026-04-22 | 262.1K | $0.60 | $3.60 | Dense decoder-only Transformer, 27B parameters | Open-weight dense flagship for coding and agents | — |
| Qwen3.5-Omni-Flash (`qwen3.5-omni-flash`) | ga | 2026-03-30 | 262.1K | $0.10 | $0.80 | Thinker-Talker MoE 30B total / 3B active with Hybrid-Atte… | Real-time omni-modal input with speech output | prev: qwen3-omni-30b-a3b |
| Qwen3.5-Omni-Plus (`qwen3.5-omni-plus`) | ga | 2026-03-30 | 262.1K | $0.40 | $4.80 | Thinker-Talker Hybrid-Attention MoE (30B total, 3B active) | Native omni-modal understanding and speech output | prev: qwen3-omni |
| Qwen3-Coder-Next (`qwen3-coder-next`) | ga | 2026-02-04 | 262.1K | $0.11 | $0.80 | Sparse MoE (80B total / 3B active, 512 experts with 10 ro… | Open-weight agentic coding for local development | prev: qwen3-coder-flash |
| Qwen3-Max (`qwen3-max`) | ga | 2025-09-23 | 262.1K | $0.78 | $3.90 | MoE (hybrid Gated DeltaNet + MoE) | General-purpose frontier text reasoning, complex language tasks, and enterprise workloads needing high quality at moderate cost | prev: qwen-max → superseded by: qwen3.7-max |
| Qwen3-VL-Plus (`qwen3-vl-plus`) | ga | 2025-09-23 | 262.1K | $0.20 | $1.60 | MoE 235B total / 22B active with Interleaved-MRoPE and De… | Document, chart, and GUI visual understanding | prev: qwen-vl-plus → superseded by: qwen3.7-plus |
| Qwen3-235B-A22B-Thinking-2507 (`qwen3-235b-a22b-thinking-2507`) | ga | 2025-07-25 | 262.1K | $0.70 | $8.40 | Mixture-of-Experts (235B total / 22B active parameters) | Open-weights frontier reasoning and math/code | prev: qwen3-235b-a22b |
| Qwen3-Coder (`qwen3-coder-480b-a35b-instruct`) | ga | 2025-07-22 | 1.0M | $0.22 | $1.80 | MoE (480B total, 35B active) | Open-weight agentic coding at scale | — |
| Qwen3-Coder-Plus (`qwen3-coder-plus`) | ga | 2025-07-22 | 1M | $0.65 | $3.25 | MoE (proprietary variant of Qwen3-Coder-480B-A35B MoE lin… | Agentic coding, function calling, tool use, and long-context reasoning over large repositories | prev: qwen-coder-plus → superseded by: qwen3-coder-next |
| Qwen-VL-Max (`qwen-vl-max`) | ga | 2025-02-01 | 131.1K | $0.52 | $2.08 | Multimodal vision-language | High-quality vision-language tasks including OCR, document understanding, chart/diagram analysis, and image reasoning | superseded by: qwen3-vl-plus |
| Qwen3.8-Max-Preview (`qwen3.8-max-preview`) | preview | 2026-07-19 | 983.6K | — | — | Sparse Mixture-of-Experts (2.4T total parameters, multimo… | Frontier multimodal reasoning and long-context agentic workflows during preview | prev: qwen3.7-max |

## Amazon

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Nova 2 Lite (`amazon.nova-2-lite-v1:0`) | ga | 2025-12-02 | 1M | $0.30 | $2.50 | Decoder-only Transformer with long-context extensions | Fast, cost-effective reasoning for high-volume everyday workloads: document processing, customer support, automation, and RAG at scale | prev: amazon.nova-lite-v1:0 |
| Nova 2 Sonic (`amazon.nova-2-sonic-v1:0`) | ga | 2025-12-02 | 1M | $3.00 | $12.00 | Speech-to-speech Transformer | Real-time, low-latency speech-to-speech conversational AI: voice agents, customer service bots, and interactive assistants | prev: amazon.nova-sonic-v1:0 |
| Amazon Nova Lite (`amazon.nova-lite-v1:0`) | ga | 2024-12-05 | 300K | $0.06 | $0.24 | Transformer-based multimodal foundation model | Low-cost multimodal high-volume processing | superseded by: amazon.nova-2-lite-v1:0 |
| Nova Pro (`amazon.nova-pro-v1:0`) | ga | 2024-12-03 | 300K | $0.80 | $3.20 | Multimodal foundation model | Balanced multimodal price-performance | superseded by: amazon.nova-2-pro-preview-20251202-v1:0 |
| Nova 2 Omni (Preview) (`amazon.nova-2-omni-preview-20251202-v1:0`) | preview | 2025-12-02 | 1M | $0.30 | $2.50 | Unified multimodal reasoning and generation transformer | Unified multimodal reasoning and image generation workflows requiring text, image, video, and speech understanding with text and image outputs in a single model | — |
| Nova 2 Pro (`amazon.nova-2-pro-v1:0`) | preview | 2025-12-02 | 1M | — | — | Multimodal foundation model | Complex multistep agentic tasks | prev: amazon.nova-pro-v1:0 |
| Nova 2 Pro (Preview) (`amazon.nova-2-pro-preview-20251202-v1:0`) | preview | 2025-12-02 | 1M | $1.25 | $10.00 | Decoder-only Transformer with long-context extensions | Highly complex, multistep agentic workflows requiring frontier-level accuracy, long-range planning, and sophisticated multimodal reasoning | prev: amazon.nova-premier-v1:0 |
| Nova Premier (`amazon.nova-premier-v1:0`) | deprecated | 2025-04-30 | 1M | $2.50 | $12.50 | Decoder-only Transformer | Complex reasoning tasks over long documents, agentic workflows, and use as a teacher model for distilling smaller custom Nova variants | prev: amazon.nova-pro-v1:0 → superseded by: amazon.nova-2-pro-preview-20251202-v1:0 |
| Nova Micro (`amazon.nova-micro-v1:0`) | deprecated | 2024-12-03 | 128K | $0.04 | $0.14 | Text-only foundation model | Ultra-high-volume, low-latency text-only tasks: classification, routing, extraction, guardrails, and cheap first-pass triage layers | superseded by: amazon.nova-2-lite-v1:0 |

## Anthropic

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Claude Sonnet 5 (`claude-sonnet-5`) | ga | 2026-06-30 | 1M | $3.00 | $15.00 | Transformer with extended thinking | best combination of speed and intelligence | prev: claude-sonnet-4-6 |
| Claude Fable 5 (`claude-fable-5`) | ga | 2026-06-09 | 1M | $10.00 | $50.00 | Transformer with extended thinking | long-horizon agentic reasoning and coding | prev: claude-opus-4-8 |
| Claude Opus 4.8 (`claude-opus-4-8`) | ga | 2026-05-28 | 1M | $5.00 | $25.00 | Transformer with extended thinking | complex agentic coding and enterprise work | prev: claude-opus-4-7 → superseded by: claude-fable-5 |
| Claude Opus 4.7 (`claude-opus-4-7`) | ga | 2026-04-16 | 1M | $5.00 | $25.00 | — | Agentic coding and multi-tool orchestration | prev: claude-opus-4-6 → superseded by: claude-opus-4-8 |
| Claude Sonnet 4.6 (`claude-sonnet-4-6`) | ga | 2026-02-17 | 1M | $3.00 | $15.00 | Transformer | Stable mid-tier production tasks | prev: claude-sonnet-4-5 → superseded by: claude-sonnet-5 |
| Claude Opus 4.6 (`claude-opus-4-6`) | ga | 2026-02-05 | 1M | $5.00 | $25.00 | — | Established Opus production workloads | prev: claude-opus-4-5 → superseded by: claude-opus-4-8 |
| Claude Haiku 4.5 (`claude-haiku-4-5`) | ga | 2025-10-15 | 200K | $1.00 | $5.00 | Transformer | fastest model with near-frontier intelligence | prev: claude-haiku-3-5 |
| Claude Mythos 5 (`claude-mythos-5`) | preview | 2026-06-09 | 1M | $10.00 | $50.00 | — | defensive cybersecurity workflows (Project Glasswing) | prev: claude-mythos-preview |

## Cohere

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Cohere Transcribe Arabic (`cohere-transcribe-arabic-07-2026`) | ga | 2026-07-07 | — | — | — | 2B encoder-decoder transformer fine-tuned from Cohere Tra… | Arabic speech-to-text with dialect coverage | prev: cohere-transcribe-03-2026 |
| North Mini Code (`north-mini-code-1.0`) | ga | 2026-06-09 | 256K | $0.00 | $0.00 | Sparse Mixture-of-Experts, 30B total parameters / 3B acti… | Agentic software engineering, code generation, and terminal/CLI tasks; local-hardware coding agents | — |
| Command A+ (`command-a-plus-05-2026`) | ga | 2026-05-20 | 128K | $2.50 | $10.00 | Sparse Mixture-of-Experts, 218B total parameters / 25B ac… | Enterprise agentic, multimodal, multilingual (48 languages incl. all EU), RAG, and reasoning-heavy workloads; unifies capabilities of prior Command A family models | prev: command-a-03-2025 |
| Cohere Transcribe (`cohere-transcribe-03-2026`) | ga | 2026-03-26 | — | — | — | 2B encoder-decoder transformer with Fast-Conformer encode… | Real-time enterprise speech-to-text and meetings | — |
| Command A Translate (`command-a-translate-08-2025`) | ga | 2025-08-28 | 16K | — | — | Dense 111B-parameter transformer fine-tuned for translation | Private, secure enterprise translation across 23 languages | prev: command-a-03-2025 |
| Command A Reasoning (`command-a-reasoning-08-2025`) | ga | 2025-08-21 | 256K | $2.50 | $10.00 | Dense 111B parameter transformer | Complex multi-step reasoning, agentic workflows, and multilingual reasoning across 23 languages with toggleable reasoning mode | prev: command-a-03-2025 → superseded by: command-a-plus-05-2026 |
| Command A Vision (`command-a-vision-07-2025`) | ga | 2025-07-31 | 128K | $2.50 | $10.00 | Dense 112B parameter multimodal transformer built on Comm… | Enterprise document analysis, chart interpretation, OCR, and multilingual image understanding | prev: command-a-03-2025 → superseded by: command-a-plus-05-2026 |
| Command A (`command-a-03-2025`) | ga | 2025-03-13 | 256K | $2.50 | $10.00 | Dense 111B parameter transformer | Enterprise RAG, tool use, agents, and multilingual applications requiring long context on modest GPU footprint | prev: command-r-plus-08-2024 → superseded by: command-a-plus-05-2026 |
| Command R7B (`command-r7b-12-2024`) | ga | 2024-12-13 | 128K | $0.04 | $0.15 | Dense 7B parameter transformer | High-throughput, latency-sensitive applications like chatbots, code assistants, and on-device inference | prev: command-r-plus-08-2024 |
| Command A+ (`command-a-plus`) | deprecated | 2026-04-15 | 256K | — | — | Mixture of Experts | Enterprise agentic workflows across 48 languages | prev: command-a-03-2025 → superseded by: command-a-plus-05-2026 |
| Command R+ (08-2024) (`command-r-plus-08-2024`) | deprecated | 2024-08-01 | 128K | $2.50 | $10.00 | Dense transformer | RAG and tool-use for enterprise workflows (legacy) | prev: command-r-plus → superseded by: command-a-03-2025 |

## DeepSeek

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DeepSeek V4 Flash (`deepseek-v4-flash`) | ga | 2026-04-24 | 1M | $0.14 | $0.28 | Mixture-of-Experts (MoE), 284B total parameters, 13B acti… | Cost-effective default model for general-purpose tasks with fast inference and high-throughput workloads while retaining strong reasoning and coding performance. | prev: deepseek-chat |
| DeepSeek V4 Pro (`deepseek-v4-pro`) | ga | 2026-04-24 | 1.0M | $0.43 | $0.87 | Mixture-of-Experts (MoE), 1.6T total parameters, 49B acti… | Flagship reasoning and coding specialist for complex agentic tasks, long-horizon reasoning, and hard software engineering workloads. | prev: deepseek-reasoner |
| DeepSeek Reasoner (`deepseek-reasoner`) | deprecated | 2025-01-20 | 131.1K | $0.14 | $0.28 | MoE (DeepSeek R1 family) | Legacy alias mapped to thinking mode of deepseek-v4-flash; kept only for backwards compatibility until scheduled deprecation on 2026-07-24 15:59 UTC. | prev: deepseek-r1 → superseded by: deepseek-v4-flash |
| DeepSeek Chat (`deepseek-chat`) | deprecated | 2024-12-26 | 131.1K | $0.14 | $0.28 | MoE (DeepSeek V3 family) | Legacy alias mapped to non-thinking mode of deepseek-v4-flash; kept only for backwards compatibility until scheduled deprecation on 2026-07-24 15:59 UTC. | prev: deepseek-v3.2 → superseded by: deepseek-v4-flash |

## Google

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Gemini 3.5 Flash-Lite (`gemini-3.5-flash-lite`) | ga | 2026-07-21 | 1.0M | $0.30 | $2.50 | Distilled sparse mixture-of-experts | high-volume low-latency Flash-tier workloads | prev: gemini-3.1-flash-lite |
| Gemini 3.6 Flash (`gemini-3.6-flash`) | ga | 2026-07-21 | 1.0M | $1.50 | $7.50 | Sparse mixture-of-experts transformer with thinking | cost-efficient agentic coding and multimodal workhorse | prev: gemini-3.5-flash |
| Gemini 3.5 Flash (`gemini-3.5-flash`) | ga | 2026-05-19 | 1.0M | $1.50 | $9.00 | Multimodal transformer | fast agentic and coding workflows | prev: gemini-3-flash-preview → superseded by: gemini-3.6-flash |
| Gemini 3.1 Flash-Lite (`gemini-3.1-flash-lite`) | ga | 2026-05-07 | 1.0M | $0.25 | $1.50 | Multimodal transformer | high-volume low-latency multimodal tasks | prev: gemini-3-flash-preview |
| Gemini 3.5 Pro (Preview) (`gemini-3.5-pro-preview`) | preview | 2026-05-19 | 2M | — | — | Sparse mixture-of-experts transformer with thinking | Frontier reasoning with Deep Think and 2M context | prev: gemini-3.1-pro |
| Gemini Omni Flash (`gemini-omni-flash`) | preview | 2026-05-19 | — | — | — | Transformer with native multimodal text/vision/video/audi… | Any-to-video generative editing and creation | — |
| Gemini Omni Flash (Preview) (`gemini-omni-flash-preview`) | preview | 2026-05-19 | — | $1.50 | $9.00 | Transformer with native multimodal text/vision/video/audi… | Any-to-any multimodal video generation and editing | — |
| Gemini 3.1 Pro (`gemini-3.1-pro`) | preview | 2026-02-19 | 1.0M | $2.00 | $12.00 | Multimodal transformer | Top-end multimodal reasoning across long contexts | prev: gemini-3-pro → superseded by: gemini-3.5-pro-preview |
| Gemini 3.1 Pro (`gemini-3.1-pro-preview`) | preview | 2026-02-19 | 1.0M | $2.00 | $12.00 | Transformer-based Mixture-of-Experts | flagship reasoning and complex multimodal tasks | prev: gemini-3-pro-preview |
| Gemini 3 Flash (`gemini-3-flash`) | deprecated | 2026-06-22 | 1.0M | $0.50 | $3.00 | Multimodal transformer | Low-cost multimodal at 1M context | prev: gemini-2.5-flash → superseded by: gemini-3.6-flash |
| Gemini 3.1 Flash (`gemini-3.1-flash`) | deprecated | 2026-03-19 | 1.0M | $0.50 | $3.00 | Sparse mixture-of-experts transformer with thinking | Balanced Flash tier for cost-efficient reasoning | prev: gemini-3-flash-preview → superseded by: gemini-3.6-flash |
| Gemini 3.1 Flash Lite (Preview) (`gemini-3.1-flash-lite-preview`) | deprecated | 2026-03-03 | 1.0M | $0.25 | $1.50 | Distilled sparse mixture-of-experts | Legacy preview endpoint - migrate to gemini-3.1-flash-lite GA | prev: gemini-2.5-flash-lite → superseded by: gemini-3.1-flash-lite |
| Gemini 3 Flash Preview (`gemini-3-flash-preview`) | deprecated | 2025-12-17 | 1.0M | $0.50 | $3.00 | Sparse mixture-of-experts transformer with thinking | balanced multimodal reasoning at Flash cost | prev: gemini-2.5-flash → superseded by: gemini-3.6-flash |
| Gemini 2.5 Flash-Lite (`gemini-2.5-flash-lite`) | deprecated | 2025-07-22 | 1.0M | $0.10 | $0.40 | Distilled sparse mixture-of-experts | Highest-volume, lowest-latency legacy batch workloads | prev: gemini-2.0-flash-lite → superseded by: gemini-3.1-flash-lite |
| Gemini 2.5 Flash (`gemini-2.5-flash`) | deprecated | 2025-06-17 | 1.0M | $0.30 | $2.50 | Sparse mixture-of-experts transformer | legacy low-cost multimodal workhorse | prev: gemini-1.5-flash → superseded by: gemini-3.5-flash |
| Gemini 2.5 Pro (`gemini-2.5-pro`) | deprecated | 2025-06-17 | 1.0M | $1.25 | $10.00 | Transformer-based Mixture-of-Experts | legacy long-context multimodal reasoning | prev: gemini-1.5-pro → superseded by: gemini-3.1-pro-preview |

## Meta

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Llama 4 Maverick (`meta-llama/Llama-4-Maverick-17B-128E-Instruct`) | ga | 2025-04-05 | 1.0M | — | — | Mixture-of-Experts (17B active, 128 experts + 1 shared ex… | Open-weight flagship multimodal workhorse for chat, coding, and agents | prev: llama-3.3-70b |
| Llama 4 Maverick (`llama-4-maverick-17b-128e-instruct`) | ga | 2025-04-05 | 1.0M | $0.20 | $0.80 | Mixture-of-experts with 17B active parameters, 128 expert… | Flagship multimodal chat and production assistants | prev: llama-3.3-70b → superseded by: meta-llama/Llama-4-Maverick-17B-128E-Instruct |
| Llama 4 Scout (`meta-llama/Llama-4-Scout-17B-16E-Instruct`) | ga | 2025-04-05 | 10M | — | — | Mixture-of-Experts (17B active, 16 experts, ~109B total) … | Ultra-long-context single-GPU multimodal inference | prev: llama-3.3-70b |
| Llama 4 Scout (`llama-4-scout-17b-16e-instruct`) | ga | 2025-04-05 | 10.5M | $0.10 | $0.30 | Mixture-of-experts with 17B active parameters, 16 experts… | Long-context multimodal reading and retrieval | prev: llama-3.3-70b → superseded by: meta-llama/Llama-4-Scout-17B-16E-Instruct |
| Llama 3.3 70B Instruct (`llama-3.3-70b`) | ga | 2024-12-06 | 128K | $0.10 | $0.32 | Dense auto-regressive transformer with 70B parameters | Cost-efficient text-only instruction following | prev: llama-3.1-70b → superseded by: llama-4-scout-17b-16e-instruct |
| Muse Spark 1.1 (`muse-spark-1.1`) | preview | 2026-07-09 | 1.0M | $1.25 | $4.25 | Natively multimodal reasoning model, agentic tool-use opt… | Agentic multimodal reasoning with tool orchestration | prev: muse-spark |
| Llama 4 Behemoth (`llama-4-behemoth`) | preview | — | — | — | — | MoE with ~2T total parameters, 288B active, 16 experts, n… | Teacher / distillation model for the Llama 4 herd | prev: llama-3.1-405b → superseded by: muse-spark-1.1 |
| Muse Spark (`muse-spark`) | deprecated | 2026-04-08 | 262.1K | — | — | Natively multimodal reasoning model | Natively multimodal reasoning across text, image, audio | prev: llama-4-maverick-17b-128e-instruct → superseded by: muse-spark-1.1 |
| Llama 4 Maverick (legacy ID) (`llama-4-maverick-17b-128e`) | deprecated | 2025-04-05 | 1M | $0.19 | $0.60 | MoE, 17B active / ~400B total parameters, 128 routed expe… | Open-weight flagship multimodal chat, coding, and agents | prev: llama-3.3-70b → superseded by: meta-llama/Llama-4-Maverick-17B-128E-Instruct |
| Llama 4 Maverick (legacy short ID) (`llama-4-maverick`) | deprecated | 2025-04-05 | 1M | $0.19 | $0.60 | MoE, 17B active / ~400B total parameters, 128 routed expe… | Open-weight flagship for coding and multimodal tasks | prev: llama-3.3-70b → superseded by: meta-llama/Llama-4-Maverick-17B-128E-Instruct |
| Llama 4 Scout (legacy ID) (`llama-4-scout-17b-16e`) | deprecated | 2025-04-05 | 10M | $0.08 | $0.30 | MoE, 17B active / ~109B total parameters, 16 experts, nat… | Long-context document analysis and multimodal serving on a single GPU | prev: llama-3.3-70b → superseded by: meta-llama/Llama-4-Scout-17B-16E-Instruct |
| Llama 4 Scout (legacy short ID) (`llama-4-scout`) | deprecated | 2025-04-05 | 10M | $0.08 | $0.30 | MoE, 17B active / ~109B total parameters, 16 experts, nat… | Long-context document analysis and multimodal serving | prev: llama-3.3-70b → superseded by: meta-llama/Llama-4-Scout-17B-16E-Instruct |

## Microsoft

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MAI-Code-1-Flash (`mai-code-1-flash`) | ga | 2026-06-02 | 256K | $0.75 | $4.50 | Sparse Mixture-of-Experts (137B total / 5B active) | Fast agentic coding in GitHub Copilot workflows with tool use and impossible-problem detection | — |
| MAI-Voice-1 (`mai-voice-1`) | ga | 2026-04-02 | — | $22.00 | $22.00 | Speech-generation transformer (deployed via Azure Speech … | Expressive, low-latency text-to-speech and voice cloning | superseded by: mai-voice-2 |
| Phi-4-mini-flash-reasoning (`phi-4-mini-flash-reasoning`) | ga | 2025-07-09 | 64K | — | — | SambaY decoder-hybrid-decoder (3.8B params) | Edge math reasoning with high throughput | prev: phi-4-mini-reasoning |
| Phi-4-reasoning (`phi-4-reasoning`) | ga | 2025-04-30 | 32K | — | — | Dense decoder-only Transformer, 14B parameters, fine-tune… | Step-by-step reasoning on math and science | prev: phi-4 |
| Phi-4-reasoning-plus (`phi-4-reasoning-plus`) | ga | 2025-04-30 | 32.8K | — | — | Dense decoder-only transformer, 14B parameters, RoPE posi… | Open-weight reasoning at 14B scale for math, science, and coding with structured chain-of-thought | prev: phi-4-reasoning → superseded by: phi-4-reasoning-vision-15b |
| Phi-4-mini-instruct (`phi-4-mini-instruct`) | ga | 2025-02-27 | 128K | $0.07 | $0.23 | compact dense SLM with GQA and shared embedding | cheap reasoning, coding, long-context in tiny model | prev: phi-3.5-mini |
| Phi-4-multimodal-instruct (`phi-4-multimodal-instruct`) | ga | 2025-02-27 | 131.1K | $0.08 | $0.32 | Multimodal SLM (text + audio + vision) | Unified speech, vision, and text on a small model | — |
| Phi-4 (`phi-4`) | ga | 2024-12-12 | 16.4K | $0.07 | $0.14 | 14B dense decoder-only transformer, trained on ~9.8T toke… | Small dense general-purpose LLM base | prev: phi-3.5 → superseded by: phi-4-reasoning |
| MAI-Image-2.5 (`mai-image-2.5`) | preview | 2026-06-02 | — | $5.00 | $47.00 | Diffusion-based text-to-image with image-editing controls | High-quality text-to-image generation and precise, controllable image editing in production | prev: mai-image-2 |
| MAI-Image-2.5-Flash (`mai-image-2.5-flash`) | preview | 2026-06-02 | — | $1.75 | $33.00 | Diffusion-based text-to-image (efficient variant) | Faster, cheaper image generation and editing for high-volume workloads | prev: mai-image-2.5 |
| MAI-Thinking-1 (`mai-thinking-1`) | preview | 2026-06-02 | 256K | — | — | Sparse Mixture-of-Experts (~35B active / ~1T total) | Complex reasoning, math, code, and long-document analysis with transparent chain-of-thought | prev: mai-1-preview |
| MAI-Transcribe-1.5 (`mai-transcribe-1.5`) | preview | 2026-06-02 | — | — | — | Multilingual speech-to-text encoder-decoder | Production-grade multilingual speech-to-text with context biasing | prev: mai-transcribe-1 |
| MAI-Voice-2 (`mai-voice-2`) | preview | 2026-06-02 | — | $22.00 | — | Neural text-to-speech with expressive prosody model | High-fidelity, expressive multilingual text-to-speech with zero-shot voice cloning | prev: mai-voice-1 |
| MAI-Image-2-Efficient (`mai-image-2-efficient`) | preview | 2026-04-14 | 32K | $5.00 | $19.50 | Diffusion-based text-to-image | Cost-efficient high-throughput image generation | prev: mai-image-2 → superseded by: mai-image-2.5 |
| MAI-Image-2 (`mai-image-2`) | preview | 2026-04-02 | 32K | $5.00 | $33.00 | Diffusion-based text-to-image | High-quality text-to-image generation | superseded by: mai-image-2-efficient |
| MAI-Transcribe-1 (`mai-transcribe-1`) | preview | 2026-04-02 | — | — | — | Bidirectional audio encoder with transformer text decoder | Multilingual speech-to-text transcription | superseded by: mai-transcribe-1.5 |
| Phi-4-Reasoning-Vision-15B (`phi-4-reasoning-vision-15b`) | preview | 2026-03-04 | 32.8K | — | — | 15B-parameter multimodal transformer built on Phi-4 reaso… | Compact multimodal reasoning for charts, diagrams, UI | prev: phi-4-reasoning-plus |
| MAI-1 Preview (`mai-1-preview`) | preview | 2025-08-28 | — | — | — | Mixture-of-Experts | General instruction following and everyday queries as Microsoft's first internally trained foundation model | superseded by: mai-thinking-1 |

## Mistral

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Mistral OCR 4 (`mistral-ocr-4-0`) | ga | 2026-06-23 | — | — | — | Purpose-built OCR / document understanding model | Structure-aware document parsing and OCR | prev: mistral-ocr-2512 |
| Mistral Medium 3.5 (`mistral-medium-2604`) | ga | 2026-04-29 | 262.1K | $1.50 | $7.50 | Dense 128B-parameter multimodal transformer | Enterprise-grade unified model combining instruction-following, reasoning, and coding in one set of weights | prev: mistral-medium-2508 |
| Mistral Small 4 (`mistral-small-2603`) | ga | 2026-03-16 | 262.1K | $0.15 | $0.60 | Sparse Mixture-of-Experts, 119B total parameters (128 exp… | Cost-efficient unified small model handling reasoning, vision and agentic coding in one architecture with configurable reasoning effort | prev: mistral-small-2506 |
| Ministral 3 14B (`ministral-14b-2512`) | ga | 2025-12-02 | 262.1K | $0.20 | $0.20 | 13.5B dense transformer LM + 0.4B vision encoder (14B tot… | On-prem multimodal edge deployment with reasoning at 14B scale | — |
| Ministral 3 8B (`ministral-8b-2512`) | ga | 2025-12-02 | 262.1K | $0.15 | $0.15 | 8B-parameter dense transformer | Edge and on-device deployment where a compact multimodal model with long context is needed at very low cost | prev: ministral-8b-2410 |
| Mistral Large 3 (`mistral-large-2512`) | ga | 2025-12-02 | 262.1K | $0.50 | $1.50 | Sparse Mixture-of-Experts, 675B total parameters, 41B act… | Flagship multimodal reasoning, agentic workflows, long-context document analysis and enterprise general-purpose tasks | prev: mistral-large-2411 |
| Codestral 25.08 (`codestral-2508`) | ga | 2025-08-01 | 256K | $0.30 | $0.90 | Dense transformer optimized for code (parameter count not… | Low-latency, high-frequency code completion, fill-in-the-middle, code correction and test generation for IDE integration | prev: codestral-2501 |
| Ministral 3B (`ministral-3b-latest`) | ga | — | 131.1K | $0.10 | $0.10 | Dense 3B transformer with vision capabilities (Ministral … | Edge and on-device deployment | prev: ministral-3b-2410 |
| Leanstral 1.5 (`leanstral-1-5`) | preview | 2026-06-30 | 262.1K | $0.00 | $0.00 | Sparse Mixture-of-Experts (~6.5B active / 119B total, 128… | Lean 4 formal proof engineering, automated theorem proving, and autoformalization | prev: leanstral |
| Devstral 2 (`devstral-2-2512`) | deprecated | 2025-12-09 | 262.1K | $0.40 | $2.00 | Dense 123B transformer | Agentic coding - multi-file edits and long agents | prev: devstral-medium-2507 → superseded by: mistral-medium-2604 |
| Devstral 2 (`devstral-2512`) | deprecated | 2025-12-09 | 262.1K | $0.40 | $0.90 | Dense 123B transformer optimized for agentic coding | open agentic coding and multi-file editing | prev: devstral-medium-2507 → superseded by: mistral-medium-2604 |
| Devstral Small 2 (`devstral-small-2-2512`) | deprecated | 2025-12-09 | 262.1K | $0.10 | $0.30 | Dense 24B transformer | Local, on-device agentic coding on a single consumer GPU | prev: devstral-small-2507 → superseded by: mistral-medium-2604 |
| Magistral Medium 1.2 (`magistral-medium-2509`) | deprecated | 2025-09-01 | 128K | $2.00 | $5.00 | Dense transformer reasoning model with vision encoder, cl… | Complex multi-step reasoning, math and problem-solving where accuracy matters more than latency | prev: magistral-medium-2507 → superseded by: mistral-medium-2604 |
| Mistral Medium 3 (`mistral-medium-2505`) | deprecated | 2025-05-07 | 131K | $0.40 | $2.00 | — | Balanced cost/performance for coding and STEM | superseded by: mistral-medium-2604 |
| Magistral Medium (`magistral-medium-latest`) | deprecated | — | — | $2.00 | $5.00 | — | Chain-of-thought reasoning for complex problems | superseded by: mistral-medium-2604 |

## Moonshot

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Kimi K3 (`kimi-k3`) | ga | 2026-07-16 | 1.0M | $3.00 | $15.00 | 2.8T-parameter sparse Mixture-of-Experts with Kimi Delta … | Frontier open-weight reasoning, agentic long-horizon workflows, frontend/code generation, native multimodal document and vision understanding at 1M context | prev: kimi-k2.6 |
| Kimi K2.7 Code (`kimi-k2.7-code`) | ga | 2026-06-12 | 262.1K | $0.95 | $4.00 | 1T-parameter MoE (32B active) built on K2.6, 384 experts … | Long-horizon agentic coding across Rust/Go/Python/frontend/DevOps, MCP tool orchestration, code review workflows | prev: kimi-k2.6 |
| Kimi K2.6 (`kimi-k2.6`) | ga | 2026-04-20 | 262.1K | $0.95 | $4.00 | 1T-parameter sparse MoE (32B active), 61 layers, 384 expe… | General-purpose open-weight agentic model, multimodal document understanding, cost-efficient coding at scale (~8-10x cheaper than Claude Opus 4.7) | prev: kimi-k2.5 → superseded by: kimi-k3 |
| Kimi K2.5 (`kimi-k2.5`) | ga | 2026-01-27 | 262.1K | $0.60 | $2.50 | 1T-parameter sparse MoE (32B active), 384 experts (8 rout… | High-volume agentic workflows, cost-sensitive reasoning, agent swarm coordination, low-latency tool use at 256K context | prev: kimi-k2-thinking → superseded by: kimi-k2.6 |
| Kimi K2 Thinking (`kimi-k2-thinking`) | deprecated | 2025-11-06 | 262.1K | $0.60 | $2.50 | 1T-parameter sparse MoE (32B active), native INT4 quantiz… | Legacy long-horizon reasoning workloads still pinned to the K2 series; historical baseline for K2-family comparisons | prev: kimi-k2-0905-preview → superseded by: kimi-k2.5 |

## NVIDIA

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Nemotron 3 Embed 1B (BF16) (`nvidia/nemotron-3-embed-1b-bf16`) | ga | 2026-07-17 | 32.8K | $0.00 | $0.00 | Transformer encoder with bidirectional attention masking,… | Efficient production-scale dense retrieval where a smaller footprint than the 8B is needed | — |
| Nemotron 3 Embed 1B (NVFP4) (`nvidia/nemotron-3-embed-1b-nvfp4`) | ga | 2026-07-17 | 32.8K | $0.00 | $0.00 | Transformer encoder with bidirectional attention masking,… | Blackwell-optimized 4-bit deployment for high-throughput embedding on GB200 / RTX PRO 6000 | prev: nvidia/nemotron-3-embed-1b-bf16 |
| Nemotron 3 Embed 8B (`nvidia/nemotron-3-embed-8b-bf16`) | ga | 2026-07-17 | 32.8K | $0.00 | $0.00 | Transformer encoder with bidirectional attention masking … | Accuracy-first multilingual dense retrieval for production RAG, agentic retrieval, code retrieval, and agent memory | — |
| Nemotron 3 Ultra 550B A55B (`nvidia/nemotron-3-ultra-550b-a55b`) | ga | 2026-06-04 | 1M | $0.50 | $2.20 | Hybrid Mamba-Transformer Mixture-of-Experts, 550B total p… | Flagship open reasoning model for long-running enterprise agents, complex multi-step planning, and highest-accuracy agentic workflows with data residency needs | prev: nvidia/llama-3.1-nemotron-ultra-253b-v1 |
| Nemotron 3.5 ASR Streaming Multilingual (`nvidia/nemotron-3.5-asr-streaming-0.6b`) | ga | 2026-06-04 | — | — | — | Cache-Aware FastConformer-RNNT, 600M parameters | Low-latency multilingual streaming speech recognition | — |
| Nemotron 3.5 Content Safety (`nvidia/nemotron-3.5-content-safety`) | ga | 2026-06-04 | 128K | $0.00 | $0.00 | Gemma 3 4B IT fine-tuned (LoRA merged) for multimodal saf… | Multimodal multilingual content safety moderation | prev: nvidia/nemotron-3-content-safety |
| Nemotron-Labs-3-Elastic 30B-A3B (`nvidia/nemotron-labs-3-elastic-30b-a3b`) | ga | 2026-05-07 | 131.1K | — | — | Hybrid Mamba2-Transformer MoE with elastic post-training;… | Elastic 3-in-1 reasoning checkpoint sliced to 30B/23B/12B for cost-adaptive deployment | prev: nvidia/nemotron-3-nano-30b-a3b |
| Nemotron 3 Nano Omni 30B A3B Reasoning (`nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`) | ga | 2026-04-29 | 256K | $0.07 | $0.30 | Hybrid Mamba-Transformer MoE backbone (30B total / 3B act… | Multimodal agentic reasoning over documents, video, audio, and images in a single open model - document intelligence, transcription, and enterprise Q&A | prev: nvidia/nemotron-3-nano-30b-a3b |
| Nemotron 3 Nano Omni (`nvidia/nemotron-3-nano-omni-30b-a3b`) | ga | 2026-04-28 | 256K | — | — | Hybrid Mamba2-Transformer MoE (Nemotron 3 Nano 30B-A3B ba… | Unified multimodal agents across text, image, audio, video | — |
| Nemotron-Cascade 2 30B-A3B (`nvidia/nemotron-cascade-2-30b-a3b`) | ga | 2026-03-20 | 262.1K | — | — | Hybrid Mamba-Transformer Mixture-of-Experts, 30B total / … | High-intelligence-density open reasoning at 3B active parameters for math, code, and agentic workflows with single-GPU deployment | prev: nvidia/nemotron-3-nano-30b-a3b |
| Nemotron 3 Nano 4B (`nvidia/nemotron-3-nano-4b`) | ga | 2026-03-16 | 262.1K | — | — | Hybrid Mamba-Transformer (Mamba-2 + MLP + small number of… | On-device / edge deployment on Jetson, DGX Spark, and RTX GPUs where privacy, latency, and offline operation matter | prev: nvidia/nvidia-nemotron-nano-9b-v2 |
| Nemotron 3 Super 120B A12B (`nvidia/nemotron-3-super-120b-a12b`) | ga | 2026-03-11 | 1M | $0.09 | $0.45 | Hybrid Mamba-Attention Mixture-of-Experts with LatentMoE … | High-accuracy multi-agent applications, coding, planning, tool calling, and long-context analysis with strong price-performance ratio | prev: nvidia/llama-3_3-nemotron-super-49b-v1_5 |
| Nemotron 3 Nano 30B A3B (`nvidia/nemotron-3-nano-30b-a3b`) | ga | 2025-12-15 | 262.1K | $0.05 | $0.20 | Hybrid Mamba-Transformer Mixture-of-Experts, 31.6B total … | Cost-efficient reasoning at scale for high-volume agent workloads, RAG, and on-prem deployment on consumer/edge NVIDIA hardware | prev: nvidia/nvidia-nemotron-nano-9b-v2 |
| Llama 3.3 Nemotron Super 49B V1.5 (`nvidia/llama-3_3-nemotron-super-49b-v1_5`) | ga | 2025-10-10 | 131.1K | $0.10 | $0.40 | Dense 49B transformer derived from Llama-3.3-70B-Instruct… | Balanced reasoning/chat and agentic workflows (RAG, tool calling) where single-GPU H100/H200 deployment and reliable tool use matter | prev: nvidia/llama-3.3-nemotron-super-49b-v1 → superseded by: nvidia/nemotron-3-super-120b-a12b |
| Nemotron Nano 9B V2 (`nvidia/nvidia-nemotron-nano-9b-v2`) | ga | 2025-08-18 | 131.1K | $0.04 | $0.16 | Dense hybrid Mamba-Transformer (9B) | Small reasoning model with thinking budget control | superseded by: nvidia/nemotron-3-nano-30b-a3b |
| Llama 3.1 Nemotron Ultra 253B v1 (`nvidia/llama-3.1-nemotron-ultra-253b-v1`) | ga | 2025-04-08 | 128K | $0.60 | $1.80 | Dense 253B (Llama 3.1 base, NAS-optimized) | Highest-accuracy complex agentic tasks (legacy tier) | superseded by: nvidia/nemotron-3-super-120b-a12b |
| Nemotron-Labs-Audex 2B (`nvidia/nemotron-labs-audex-2b`) | preview | 2026-07-07 | — | — | — | Dense 2B decoder LLM with extended vocabulary for discret… | Compact 2B audio-text LLM for on-device speech understanding and TTS | — |
| Nemotron-Labs-Audex 30B-A3B (`nvidia/nemotron-labs-audex-30b-a3b`) | preview | 2026-07-07 | — | — | — | Single MoE Transformer decoder with 30B total / 3B active… | Unified audio-text MoE for ASR, TTS, translation, and speech-to-speech | prev: nvidia/nemotron-cascade-2-30b-a3b |
| Nemotron-Labs-TwoTower 30B-A3B (`nvidia/nemotron-labs-twotower-30b-a3b`) | preview | 2026-07-01 | 131.1K | — | — | Block-wise autoregressive diffusion: frozen Nemotron-3-Na… | High-throughput diffusion language generation research | prev: nvidia/nemotron-3-nano-30b-a3b |
| Nemotron 3 VoiceChat (`nvidia/nemotron-voicechat`) | preview | 2026-03-18 | — | — | — | Unified speech-to-speech: Parakeet audio encoder + Nemotr… | Full-duplex real-time conversational voice agents | — |
| Llama 3.3 Nemotron Super 49B v1 (`nvidia/llama-3.3-nemotron-super-49b-v1`) | deprecated | 2025-03-18 | 131.1K | $0.10 | $0.40 | Dense transformer (Llama 3.3 base, NAS-pruned) | Legacy mid-tier Nemotron reasoning | superseded by: nvidia/nemotron-3-super-120b-a12b |

## OpenAI

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GPT-5.6 Luna (`gpt-5.6-luna`) | ga | 2026-07-09 | 1.1M | $1.00 | $6.00 | Transformer reasoning model | High-volume, latency-sensitive, cost-optimized workloads | prev: gpt-5.4-mini |
| GPT-5.6 Sol (`gpt-5.6-sol`) | ga | 2026-07-09 | 1.1M | $5.00 | $30.00 | Transformer reasoning model | Frontier reasoning, coding, and agentic work | prev: gpt-5.5 |
| GPT-5.6 Terra (`gpt-5.6-terra`) | ga | 2026-07-09 | 1.1M | $2.50 | $15.00 | Transformer reasoning model | Balanced production workloads at half flagship price | prev: gpt-5.5 |
| GPT-Realtime-2.1 (`gpt-realtime-2.1`) | ga | 2026-07-06 | 128K | $4.00 | $24.00 | Speech-to-speech realtime reasoning model | Realtime voice agents with reasoning and tool use | prev: gpt-realtime |
| GPT-Realtime-2.1 mini (`gpt-realtime-2.1-mini`) | ga | 2026-07-06 | 128K | $0.60 | $2.40 | Distilled speech-to-speech realtime reasoning model | Low-cost realtime voice agents at scale | prev: gpt-realtime-mini |
| GPT-5.5 Instant (`gpt-5.5-instant`) | ga | 2026-05-05 | 1M | $5.00 | $30.00 | — | Fast default chat for ChatGPT-style workloads | prev: gpt-5.3-instant |
| GPT-5.5 (`gpt-5.5`) | ga | 2026-04-23 | 1.1M | $5.00 | $30.00 | Transformer reasoning model | general-purpose flagship writing, coding, analysis | prev: gpt-5 → superseded by: gpt-5.6-sol |
| GPT-5.5 Pro (`gpt-5.5-pro`) | ga | 2026-04-23 | 1.1M | $30.00 | $180.00 | — | Research-grade deep reasoning and complex professional workloads | prev: gpt-5.4 → superseded by: gpt-5.6-sol |
| GPT-5.4 mini (`gpt-5.4-mini`) | ga | 2026-03-17 | 400K | $0.75 | $4.50 | — | Cost-efficient production reasoning and sub-agent workloads | prev: o4-mini |
| GPT-5.4 nano (`gpt-5.4-nano`) | ga | 2026-03-17 | 272K | $0.20 | $1.25 | — | cheapest fastest option for high-volume simple tasks | prev: gpt-5-nano |
| GPT-5.4 (`gpt-5.4`) | ga | 2026-03-05 | 272K | $2.50 | $15.00 | — | reasoning with native computer-use and tool-heavy agents | prev: gpt-5.2 → superseded by: gpt-5.5 |
| GPT-5 (`gpt-5`) | ga | 2025-08-07 | 400K | $1.25 | $10.00 | — | General-purpose reasoning and multimodal tasks | prev: gpt-4o → superseded by: gpt-5.5 |
| gpt-oss-120b (`gpt-oss-120b`) | ga | 2025-08-05 | 131.1K | $0.03 | $0.15 | 117B-parameter Mixture-of-Experts with 5.1B active parame… | Self-hosted open-weight reasoning on single H100 | — |
| o4-mini (`o4-mini`) | deprecated | 2025-04-16 | 200K | $1.10 | $4.40 | — | cheap reasoning for STEM and coding | prev: o3-mini → superseded by: gpt-5.4-mini |

## Perplexity

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Sonar Pro Search (`sonar-pro-search`) | ga | 2025-10-30 | 200K | $3.00 | $15.00 | Search-grounded agentic LLM with multi-step tool use buil… | Agentic multi-step research workflows with automated tool orchestration | prev: sonar-pro |
| Sonar Deep Research (`sonar-deep-research`) | ga | 2025-03-07 | 128K | $2.00 | $8.00 | search-augmented deep research agent | Autonomous multi-step research reports with synthesis across many sources | — |
| Sonar Pro (`sonar-pro`) | ga | 2025-03-07 | 200K | $3.00 | $15.00 | search-augmented LLM | In-depth, multi-step web research with more citations and larger context | prev: sonar |
| Sonar Reasoning Pro (`sonar-reasoning-pro`) | ga | 2025-03-01 | 128K | $2.00 | $8.00 | Reasoning stack powered by DeepSeek-R1 | Complex analytical questions needing chain-of-thought plus richer web citations | prev: sonar-reasoning |
| Sonar (`sonar`) | ga | 2025-01-27 | 128K | $1.00 | $1.00 | search-augmented LLM | Fast, low-cost web-grounded Q&A with citations for lightweight search tasks | — |
| Sonar Reasoning (`sonar-reasoning`) | deprecated | 2025-01-21 | 128K | $1.00 | $5.00 | Reasoning-tuned Sonar model with chain-of-thought over we… | Chain-of-thought reasoning over web-grounded results at entry-level price | superseded by: sonar-reasoning-pro |

## xAI

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Grok 4.5 (`grok-4.5`) | ga | 2026-07-08 | 500K | $2.00 | $6.00 | V9 ninth-generation foundation model (~1.5T parameters), … | Frontier coding, agentic tasks, and complex knowledge work; trained alongside Cursor | prev: grok-4.3 |
| Grok 4.3 (`grok-4.3`) | ga | 2026-04-30 | 1M | $1.25 | $2.50 | reasoning-first transformer with always-on chain-of-thought | Reasoning-first workhorse for tool-calling, instruction following, and multimodal (including native video) inputs | prev: grok-4.20 → superseded by: grok-4.5 |
| Grok Voice Think Fast 1.0 (`grok-voice-think-fast-1.0`) | ga | 2026-04-23 | — | — | — | Voice-native full-duplex model with background reasoning … | Full-duplex voice agents for enterprise use | — |
| Grok 4.20 (`grok-4.20`) | ga | 2026-03-10 | 2M | $1.25 | $2.50 | reasoning transformer with configurable reasoning effort … | Long, multi-step agentic workflows over very long contexts with strict prompt adherence | prev: grok-4.1 → superseded by: grok-4.3 |
| Grok Imagine Video 1.5 Preview (`grok-imagine-video-1.5-preview`) | preview | 2026-05-30 | — | — | — | Imagine video diffusion model with integrated audio gener… | Cinematic image-to-video with synchronized audio | prev: grok-imagine-video |
| Grok Build 0.1 (`grok-build-0.1`) | preview | 2026-05-29 | 256K | $1.00 | $2.00 | coding-specialized transformer for agentic software engin… | agentic coding, IDE integrations, terminal coding agents | prev: grok-code-fast-1 |
| Grok 4.20 Multi-Agent Beta (`grok-4.20-multi-agent-beta-0309`) | preview | 2026-03-09 | 2M | $2.00 | $6.00 | Multi-agent collaborative orchestration built on Grok 4.2… | Collaborative multi-agent reasoning and deep research | prev: grok-4.20 |
| Grok 4.5 (dashed alias) (`grok-4-5`) | deprecated | 2026-07-08 | 500K | $2.00 | $6.00 | — | Non-canonical alias for grok-4.5; use canonical dotted form | prev: grok-4-3 → superseded by: grok-4.5 |
| Grok 4.3 (dashed alias) (`grok-4-3`) | deprecated | 2026-04-30 | 1M | $1.25 | $2.50 | Reasoning-centric model with always-on chain-of-thought | Non-canonical alias for grok-4.3; use canonical dotted form | prev: grok-4 → superseded by: grok-4.3 |
| Grok 4.20 (dashed alias) (`grok-4-20`) | deprecated | 2026-03-10 | 2M | $2.00 | $6.00 | — | Non-canonical alias for grok-4.20; use canonical dotted form | prev: grok-4.3 → superseded by: grok-4.20 |
| Grok 4.1 Fast (`grok-4-1-fast`) | deprecated | 2025-11-19 | 2M | $0.20 | $0.50 | Compact fast variant of Grok 4.1 | High-throughput agentic tool calling at low cost | prev: grok-3-mini → superseded by: grok-4.3 |
| Grok 4 Fast Non-Reasoning (`grok-4-fast-non-reasoning`) | deprecated | 2025-09-20 | 2M | $0.20 | $0.50 | — | Fast, cheap direct-response tasks like extraction, summarization, and classification over long contexts | superseded by: grok-4.3 |
| Grok 4 Fast Reasoning (`grok-4-fast-reasoning`) | deprecated | 2025-09-20 | 2M | $0.20 | $0.50 | — | High-throughput, low-cost reasoning over very long contexts (legacy migration path) | prev: grok-4-0709 → superseded by: grok-4.3 |
| Grok Code Fast 1 (`grok-code-fast-1`) | deprecated | 2025-08-26 | 256K | $0.20 | $1.50 | — | Speed- and cost-optimized agentic coding in IDEs and coding agents | superseded by: grok-build-0.1 |
| Grok 4 (`grok-4-0709`) | deprecated | 2025-07-09 | 256K | $3.00 | $15.00 | — | Complex synthesis, analysis, and instruction following | prev: grok-3 → superseded by: grok-4.3 |

