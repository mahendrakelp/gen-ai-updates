# Frontier Production Model Catalog

_Last refreshed: 2026-08-01 by genai-model-catalog routine._

## Alibaba

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Qwen3.7 Flash (`qwen3.7-flash`) | ga | 2026-07-27 | 1M | $0.03 | $0.13 | Multimodal vision-language model | High-volume multimodal subagents at pennies | prev: qwen3.6-flash |
| Qwen3.7-Plus (`qwen3.7-plus`) | ga | 2026-06-01 | 1M | $0.40 | $1.60 | Sparse MoE (multimodal) | Low-cost multimodal agent for text, image, video | prev: qwen3-vl-plus |
| Qwen3.7-Max (`qwen3.7-max`) | ga | 2026-05-19 | 1M | $2.50 | $7.50 | Sparse MoE | Frontier agentic reasoning and long-horizon coding | prev: qwen3-max → superseded by: qwen3.8-max-preview |
| Qwen-Flash (`qwen-flash`) | ga | 2026-04-27 | 1M | $0.05 | $0.40 | Hybrid linear attention with sparse MoE | Low-cost high-throughput classification and Q&A | prev: qwen-turbo |
| Qwen3.6-Flash (`qwen3.6-flash`) | ga | 2026-04-27 | 1M | $0.19 | $1.13 | Sparse MoE (multimodal Flash tier) | High-volume, low-latency multimodal workloads | prev: qwen-flash |
| Qwen3.6-27B (`qwen3.6-27b`) | ga | 2026-04-22 | 262K | $0.60 | $3.60 | Dense decoder-only Transformer, 27B parameters | Open-weight dense flagship for coding and agents | — |
| Qwen3.5-Omni-Flash (`qwen3.5-omni-flash`) | ga | 2026-03-30 | 131K | $0.10 | $0.80 | Thinker-Talker MoE 30B total / 3B active with Hybrid-Attention | Low-cost end-to-end omni-modal apps with speech output | prev: qwen3-omni-flash |
| Qwen3.5-Omni-Plus (`qwen3.5-omni-plus`) | ga | 2026-03-30 | 262K | $0.40 | $4.80 | MoE (~30B total, ~3B active) with native omnimodal encoders | Unified any-to-any multimodal (text, audio, video) | prev: qwen3-omni |
| Qwen3-Coder-Next (`qwen3-coder-next`) | ga | 2026-02-04 | 262K | $0.11 | $0.80 | Sparse MoE (80B total / 3B active, hybrid attention) | Cost-efficient coding-agent workloads with self-hostable open weights | prev: qwen3-coder-plus |
| Qwen3-Max (`qwen3-max`) | ga | 2025-09-23 | 262K | $1.20 | $6.00 | Mixture-of-Experts (~1T total parameters) | Flagship frontier reasoning and agentic workflows | prev: qwen-max → superseded by: qwen3.7-max |
| Qwen3-VL (`qwen3-vl-plus`) | ga | 2025-09-23 | 262K | $0.20 | $1.60 | MoE 235B total / ~22B active | Multimodal image, document, and video understanding | prev: qwen-vl-max → superseded by: qwen3.7-plus |
| Qwen3-Omni (`qwen3-omni-flash`) | ga | 2025-09-22 | 66K | — | — | Omnimodal Thinker-Talker MoE | Real-time multimodal voice, audio, and video chat | — |
| Qwen3-Coder-Flash (`qwen3-coder-flash`) | ga | 2025-09-17 | 1M | $0.20 | $0.97 | Mixture-of-Experts (MoE) | cost-efficient agentic coding | — |
| Qwen3-235B-A22B-Thinking-2507 (`qwen3-235b-a22b-thinking-2507`) | ga | 2025-07-25 | 262K | $0.70 | $8.40 | Mixture-of-Experts (235B total / 22B active parameters) | Open-weights frontier reasoning and math/code | prev: qwen3-235b-a22b |
| Qwen3-Coder (`qwen3-coder-480b-a35b-instruct`) | ga | 2025-07-22 | 1M | $0.22 | $1.80 | MoE (480B total, 35B active) | Open-weight agentic coding at scale | — |
| Qwen3-Coder-Plus (`qwen3-coder-plus`) | ga | 2025-07-22 | 262K | $1.50 | $7.50 | MoE — 480B total / 35B active | Agentic coding and long-context repository reasoning | prev: qwen2.5-coder-plus → superseded by: qwen3-coder-next |
| Qwen-VL-Max (`qwen-vl-max`) | ga | 2025-02-01 | 131K | $0.52 | $2.08 | Multimodal vision-language | High-quality vision-language tasks including OCR, document understanding, chart/diagram analysis, and image reasoning | → superseded by: qwen3-vl-plus |
| Qwen Text Embedding v4 (`text-embedding-v4`) | ga | — | 33K | $0.02 | $0.00 | Dense transformer embedding model (Qwen3-Embedding family) | multilingual embeddings and retrieval | prev: text-embedding-v3 |
| Qwen-Plus (`qwen-plus`) | ga | — | 131K | $0.40 | $1.20 | — | Balanced cost and performance for general tasks | — |
| Qwen-Turbo (`qwen-turbo`) | ga | — | 1M | $0.05 | $0.20 | — | High-throughput, cost-sensitive workloads | → superseded by: qwen-flash |
| Qwen3.5-Omni-Flash-Realtime (`qwen3.5-omni-flash-realtime`) | ga | — | — | $0.55 | $4.50 | End-to-end omni-modal transformer | real-time voice and video chat | prev: qwen3.5-omni-flash |
| Qwen3.8-Max-Preview (`qwen3.8-max-preview`) | preview | 2026-07-19 | 984K | — | — | Sparse MoE (~2.4T total parameters, multimodal) | Next-gen flagship reasoning and agentic tasks | prev: qwen3.7-max |

## Amazon

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Amazon Nova 2 Sonic (`amazon.nova-2-sonic-v1:0`) | ga | 2025-12-02 | 1M | $0.33 | $2.75 | Bidirectional speech-to-speech foundation model | Real-time speech-to-speech conversational AI | prev: amazon.nova-sonic-v1:0 |
| Nova 2 Lite (`amazon.nova-2-lite-v1:0`) | ga | 2025-12-02 | 1M | $0.30 | $2.50 | Multimodal reasoning foundation model | Cost-effective multimodal reasoning at scale | prev: amazon.nova-lite-v1:0 |
| Nova Lite (`amazon.nova-lite-v1:0`) | ga | 2024-12-03 | 300K | $0.06 | $0.24 | Multimodal foundation model | Low-cost multimodal understanding | → superseded by: amazon.nova-2-lite-v1:0 |
| Nova Micro (`amazon.nova-micro-v1:0`) | ga | 2024-12-03 | 128K | $0.04 | $0.14 | Text-only foundation model | Cheapest text-only Bedrock chat | → superseded by: amazon.nova-2-lite-v1:0 |
| Nova Pro (`amazon.nova-pro-v1:0`) | ga | 2024-12-03 | 300K | $0.80 | $3.20 | Multimodal foundation model | Balanced multimodal accuracy and cost | → superseded by: amazon.nova-2-pro-preview-20251202-v1:0 |
| Amazon Nova 2 Omni (Preview) (`amazon.nova-2-omni-preview-20251202-v1:0`) | preview | 2025-12-02 | 1M | $0.30 | $2.50 | Unified multimodal foundation model | Unified any-to-any multimodal reasoning | — |
| Amazon Nova 2 Pro (Preview) (`amazon.nova-2-pro-preview-20251202-v1:0`) | preview | 2025-12-02 | 1M | $1.25 | $10.00 | Transformer, multimodal reasoning model | Complex multi-step reasoning and agentic tasks | prev: amazon.nova-premier-v1:0 |
| Nova 2 Pro (`amazon.nova-2-pro-v1:0`) | preview | 2025-12-02 | 1M | — | — | Multimodal foundation model | Most complex multistep reasoning and agentic tasks | prev: amazon.nova-premier-v1:0 |
| Nova Premier (`amazon.nova-premier-v1:0`) | deprecated | 2025-10-31 | 1M | $2.50 | $12.50 | Transformer, multimodal foundation model | Complex reasoning, agentic workflows, model distillation | prev: amazon.nova-pro-v1:0 → superseded by: amazon.nova-2-pro-v1:0 |

## Anthropic

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Claude Opus 5 (`claude-opus-5`) | ga | 2026-07-24 | 1M | $5.00 | $25.00 | hybrid reasoning | Serious coding and long-running AI agents | prev: claude-opus-4-8 |
| Claude Sonnet 5 (`claude-sonnet-5`) | ga | 2026-06-30 | 1M | $2.00 | $10.00 | hybrid reasoning | Real-time agents and high-volume agentic work | prev: claude-sonnet-4-6 |
| Claude Fable 5 (`claude-fable-5`) | ga | 2026-06-09 | 1M | $10.00 | $50.00 | hybrid reasoning | Frontier Mythos-class intelligence, safe general use | prev: claude-mythos-preview |
| Claude Opus 4.8 (`claude-opus-4-8`) | ga | 2026-05-28 | 1M | $5.00 | $25.00 | Transformer LLM using the newer tokenizer introduced with Claude Opus 4.7 | High-capability agentic workloads on prior Opus generation | prev: claude-opus-4-7 → superseded by: claude-opus-5 |
| Claude Opus 4.7 (`claude-opus-4-7`) | ga | 2026-04-16 | 1M | $5.00 | $25.00 | — | Agentic coding and multi-tool orchestration | prev: claude-opus-4-6 → superseded by: claude-opus-4-8 |
| Claude Sonnet 4.6 (`claude-sonnet-4-6`) | ga | 2026-02-17 | 1M | $3.00 | $15.00 | Transformer | Stable mid-tier production tasks | prev: claude-sonnet-4-5 → superseded by: claude-sonnet-5 |
| Claude Opus 4.6 (`claude-opus-4-6`) | ga | 2026-02-05 | 1M | $5.00 | $25.00 | — | Established Opus production workloads | prev: claude-opus-4-5 → superseded by: claude-opus-4-8 |
| Claude Haiku 4.5 (`claude-haiku-4-5`) | ga | 2025-10-15 | 200K | $1.00 | $5.00 | hybrid reasoning | Fastest, cheapest near-frontier coding model | prev: claude-haiku-3-5 |
| Claude Mythos 5 (`claude-mythos-5`) | preview | 2026-06-09 | 1M | $10.00 | $50.00 | Same underlying model as Claude Fable 5; uses the newer tokenizer introduced with Opus 4.7 | Defensive cybersecurity and biosecurity research (Project Glasswing) | prev: claude-mythos-preview |

## Cohere

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Cohere Transcribe Arabic (`cohere-transcribe-arabic-07-2026`) | ga | 2026-07-07 | — | — | — | 2B encoder-decoder transformer fine-tuned from Cohere Transcribe for Arabic ASR | Arabic speech-to-text with dialect coverage | prev: cohere-transcribe-03-2026 |
| North Mini Code (`north-mini-code-1.0`) | ga | 2026-06-09 | 256K | $0.00 | $0.00 | Sparse Mixture-of-Experts, 30B total parameters / 3B active per token | Agentic software engineering, code generation, and terminal/CLI tasks; local-hardware coding agents | — |
| Command A+ (`command-a-plus-05-2026`) | ga | 2026-05-20 | 128K | $2.50 | $10.00 | 218B sparse Mixture-of-Experts transformer with 25B active parameters (128 experts, 8 active per token, 1 shared) | Open-weight enterprise agentic workflows | prev: command-a-03-2025 |
| Cohere Transcribe (`cohere-transcribe-03-2026`) | ga | 2026-03-26 | — | — | — | 2B encoder-decoder transformer with Fast-Conformer encoder (>90% params in encoder) | Real-time enterprise speech-to-text and meetings | — |
| Rerank 4 Fast (`rerank-v4.0-fast`) | ga | 2025-12-11 | 33K | — | — | Distilled multilingual cross-encoder reranker with 32K context | Low-latency, high-throughput multilingual reranking for production RAG | prev: rerank-v3.5 |
| Rerank 4 Pro (`rerank-v4.0-pro`) | ga | 2025-12-11 | 33K | — | — | Multilingual cross-encoder reranker with 32K context | State-of-the-art multilingual enterprise reranking for complex agentic and semi-structured (JSON) retrieval | prev: rerank-v3.5 |
| Command A Translate (`command-a-translate-08-2025`) | ga | 2025-08-28 | 16K | — | — | Dense 111B-parameter transformer fine-tuned for translation | Private, secure enterprise translation across 23 languages | prev: command-a-03-2025 |
| Command A Reasoning (`command-a-reasoning-08-2025`) | ga | 2025-08-21 | 256K | $2.50 | $10.00 | 111B dense transformer (reasoning-tuned) | Deep enterprise reasoning and agentic research | prev: command-a-03-2025 → superseded by: command-a-plus-05-2026 |
| Command A Vision (`command-a-vision-07-2025`) | ga | 2025-07-31 | 128K | $2.50 | $10.00 | 112B multimodal (vision + text) | Enterprise document, chart, and OCR understanding | prev: command-a-03-2025 → superseded by: command-a-plus-05-2026 |
| Embed 4 (`embed-v4.0`) | ga | 2025-04-15 | 128K | $0.12 | — | Multimodal encoder producing unified text+image dense embeddings with Matryoshka representation | Multimodal enterprise search and agentic RAG over interleaved text, images, PDFs, charts and tables | prev: embed-english-v3.0 |
| Command A (`command-a-03-2025`) | ga | 2025-03-13 | 256K | $2.50 | $10.00 | 111B dense transformer | Enterprise RAG and tool-heavy agents | prev: command-r-plus-08-2024 → superseded by: command-a-plus-05-2026 |
| Command R7B (`command-r7b-12-2024`) | ga | 2024-12-13 | 128K | $0.04 | $0.15 | 7B dense transformer | Low-latency, high-throughput chat and code assist | prev: command-r-08-2024 |
| Rerank 3.5 (`rerank-v3.5`) | ga | 2024-12-02 | 4K | — | — | Multilingual cross-encoder reranker | Multilingual enterprise RAG reranking with reasoning over complex queries | prev: rerank-v3.0 → superseded by: rerank-v4.0-pro |
| Aya Expanse 32B (`c4ai-aya-expanse-32b`) | ga | 2024-10-24 | 128K | $0.50 | $1.50 | 32B dense transformer built on Command R base | Massively multilingual generation across 23 languages | — |
| Command R (`command-r-08-2024`) | ga | 2024-08-30 | 128K | $0.15 | $0.60 | Dense transformer, 35B parameters | low-latency RAG and tool use | — |
| Command R+ (`command-r-plus-08-2024`) | ga | 2024-08-30 | 128K | $2.50 | $10.00 | 104B dense transformer | Legacy RAG and tool-use workloads | prev: command-r-plus → superseded by: command-a-03-2025 |
| Command A+ (`command-a-plus`) | deprecated | 2026-04-15 | 256K | — | — | Mixture of Experts | Enterprise agentic workflows across 48 languages | prev: command-a-03-2025 → superseded by: command-a-plus-05-2026 |

## DeepSeek

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DeepSeek V4-Flash-0731 (`deepseek-v4-flash-0731`) | ga | 2026-07-31 | 1M | $0.14 | $0.28 | Sparse Mixture-of-Experts, 284B total / 13B active parameters | Cheap 1M-context reasoning at scale | prev: deepseek-v4-flash |
| DeepSeek V4 Flash (`deepseek-v4-flash`) | ga | 2026-04-24 | 1M | $0.14 | $0.28 | Mixture-of-Experts, 284B total / 13B active with Compressed Sparse Attention + Heavily Compressed Attention | High-throughput low-cost reasoning with 1M context | prev: deepseek-chat |
| DeepSeek V4 Pro (`deepseek-v4-pro`) | ga | 2026-04-24 | 1M | $0.43 | $0.87 | Sparse Mixture-of-Experts, 1.6T total / 49B active parameters | Frontier reasoning and long-horizon agentic tasks | prev: deepseek-v3.2 |
| DeepSeek Reasoner (legacy alias) (`deepseek-reasoner`) | deprecated | 2025-01-20 | 131K | $0.14 | $0.28 | Sparse MoE - 671B total / 37B active (DeepSeek-R1) | Legacy R1-style reasoning endpoint (retired July 24, 2026) | prev: deepseek-r1 → superseded by: deepseek-v4-pro |
| DeepSeek Chat (legacy alias) (`deepseek-chat`) | deprecated | 2024-12-26 | 131K | $0.14 | $0.28 | Sparse MoE - 671B total / 37B active (DeepSeek-V3) | Legacy V3 chat endpoint (retired July 24, 2026) | prev: deepseek-v3.2 → superseded by: deepseek-v4-flash |

## Google

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Gemini 3.6 Flash (`gemini-3.6-flash`) | ga | 2026-07-30 | 1M | $1.50 | $7.50 | Sparse Mixture-of-Experts transformer with native multimodal encoders | Fast frontier work at scale | prev: gemini-3.5-flash |
| Gemini 3.5 Flash-Lite (`gemini-3.5-flash-lite`) | ga | 2026-07-21 | 1M | $0.30 | $2.50 | Distilled Gemini 3.5 sparse Mixture-of-Experts transformer | Low-cost high-throughput subagent and extraction workloads | prev: gemini-3.1-flash-lite |
| Gemini 3.5 Flash (`gemini-3.5-flash`) | ga | 2026-05-01 | 1M | $1.50 | $9.00 | Sparse Mixture-of-Experts transformer with native multimodal encoders | Near-Pro intelligence at Flash cost | prev: gemini-3-flash-preview → superseded by: gemini-3.6-flash |
| Gemini 3.1 Flash-Lite (`gemini-3.1-flash-lite`) | ga | 2026-03-19 | 1M | $0.25 | $1.50 | Transformer-based Mixture-of-Experts | High-volume, low-latency workloads | prev: gemini-2.5-flash-lite → superseded by: gemini-3.5-flash-lite |
| Gemini 3.1 Pro (`gemini-3.1-pro`) | ga | 2026-02-19 | 1M | $2.00 | $12.00 | Sparse Mixture-of-Experts transformer with native multimodal encoders | GA flagship reasoning and long-context tasks | prev: gemini-3-pro → superseded by: gemini-3.5-pro-preview |
| Gemini Omni Flash (Preview) (`gemini-omni-flash-preview`) | preview | 2026-06-30 | — | $1.50 | $17.50 | Unified natively-multimodal model without separate encoders | Conversational video generation and editing | — |
| Gemini 3.5 Pro (Preview) (`gemini-3.5-pro-preview`) | preview | 2026-05-19 | 2M | — | — | Sparse Mixture-of-Experts transformer with Deep Think reasoning | Next-gen flagship with 2M context and Deep Think | prev: gemini-3.1-pro |
| Gemini Omni Flash (`gemini-omni-flash`) | preview | 2026-05-19 | — | — | — | Transformer with native multimodal text/vision/video/audio inputs | Any-to-video generative editing and creation | — |
| Gemini 3.1 Pro (`gemini-3.1-pro-preview`) | preview | 2026-03-19 | 1M | $2.00 | $12.00 | Transformer-based Mixture-of-Experts | Complex agentic and reasoning tasks | prev: gemini-3-pro |
| Gemini 3 Flash (`gemini-3-flash`) | deprecated | 2026-06-22 | 1M | $0.50 | $3.00 | Multimodal transformer | Low-cost multimodal at 1M context | prev: gemini-2.5-flash → superseded by: gemini-3.6-flash |
| Gemini 3.1 Flash (`gemini-3.1-flash`) | deprecated | 2026-03-19 | 1M | $0.50 | $3.00 | Sparse mixture-of-experts transformer with thinking | Balanced Flash tier for cost-efficient reasoning | prev: gemini-3-flash-preview → superseded by: gemini-3.6-flash |
| Gemini 3.1 Flash Lite (Preview) (`gemini-3.1-flash-lite-preview`) | deprecated | 2026-03-03 | 1M | $0.25 | $1.50 | Distilled sparse mixture-of-experts | Legacy preview endpoint - migrate to gemini-3.1-flash-lite GA | prev: gemini-2.5-flash-lite → superseded by: gemini-3.1-flash-lite |
| Gemini 3 Flash Preview (`gemini-3-flash-preview`) | deprecated | 2025-12-17 | 1M | $0.50 | $3.00 | Sparse mixture-of-experts transformer with thinking | balanced multimodal reasoning at Flash cost | prev: gemini-2.5-flash → superseded by: gemini-3.6-flash |
| Gemini 3 Pro (`gemini-3-pro-preview`) | deprecated | 2025-11-18 | 1M | $2.00 | $12.00 | — | Legacy Gemini 3 flagship, migrate to 3.1 Pro | prev: gemini-2.5-pro → superseded by: gemini-3.1-pro-preview |
| Gemini 2.5 Flash-Lite (`gemini-2.5-flash-lite`) | deprecated | 2025-07-22 | 1M | $0.10 | $0.40 | Distilled sparse mixture-of-experts | Highest-volume, lowest-latency legacy batch workloads | prev: gemini-2.0-flash-lite → superseded by: gemini-3.1-flash-lite |
| Gemini 2.5 Flash (`gemini-2.5-flash`) | deprecated | 2025-06-17 | 1M | $0.30 | $2.50 | Sparse mixture-of-experts transformer | legacy low-cost multimodal workhorse | prev: gemini-1.5-flash → superseded by: gemini-3.5-flash |
| Gemini 2.5 Pro (`gemini-2.5-pro`) | deprecated | 2025-06-17 | 1M | $1.25 | $10.00 | Transformer-based Mixture-of-Experts | legacy long-context multimodal reasoning | prev: gemini-1.5-pro → superseded by: gemini-3.1-pro-preview |

## Meta

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Llama Guard 4 12B (`meta-llama/Llama-Guard-4-12B`) | ga | 2025-04-29 | 131K | $0.20 | $0.20 | Dense 12B classifier fine-tuned from Llama 4 Scout backbone for hazard taxonomy content moderation | Multimodal content-safety classification and guardrails for Llama-family deployments | prev: meta-llama/Llama-Guard-3-8B |
| Llama 4 Maverick (`meta-llama/Llama-4-Maverick-17B-128E-Instruct`) | ga | 2025-04-05 | 1M | $0.19 | $0.85 | Alternating dense and MoE layers, 128 routed experts + 1 shared expert | Best-in-class multimodal open weights | prev: meta-llama/Llama-3.3-70B-Instruct |
| Llama 4 Maverick (`llama-4-maverick-17b-128e-instruct`) | ga | 2025-04-05 | 1M | $0.20 | $0.60 | Mixture-of-experts with 17B active parameters, 128 experts, 400B total parameters, early-fusion multimodality | Flagship multimodal chat and production assistants on Groq LPU inference | prev: llama-3.3-70b → superseded by: meta-llama/Llama-4-Maverick-17B-128E-Instruct |
| Llama 4 Maverick (`llama-4-maverick`) | ga | 2025-04-05 | 1M | $0.19 | $0.60 | Mixture-of-Experts (MoE), 128 experts, 17B active / ~400B total parameters | Open-weight generalist for reasoning and coding | prev: llama-3.3-70b → superseded by: meta-llama/Llama-4-Maverick-17B-128E-Instruct |
| Llama 4 Scout (`meta-llama/Llama-4-Scout-17B-16E-Instruct`) | ga | 2025-04-05 | 10M | $0.18 | $0.59 | Mixture-of-Experts, 17B active / 16 experts, natively multimodal | Long-context multimodal open-weight tasks | prev: meta-llama/Llama-3.3-70B-Instruct |
| Llama 4 Scout (`llama-4-scout-17b-16e-instruct`) | ga | 2025-04-05 | 10.5M | $0.11 | $0.34 | Mixture-of-experts with 17B active parameters, 16 experts, 109B total parameters, early-fusion multimodality | Long-context multimodal reading and retrieval on Groq LPU | prev: llama-3.3-70b → superseded by: meta-llama/Llama-4-Scout-17B-16E-Instruct |
| Llama 4 Scout (`llama-4-scout`) | ga | 2025-04-05 | 10.5M | $0.08 | $0.30 | Mixture-of-Experts (MoE), 16 experts, 17B active / ~109B total parameters | Long-document processing with open weights | prev: llama-3.3-70b → superseded by: meta-llama/Llama-4-Scout-17B-16E-Instruct |
| Llama 3.3 70B Instruct (`llama-3.3-70b`) | ga | 2024-12-06 | 128K | $0.59 | $0.79 | Dense auto-regressive transformer with 70B parameters | Cost-efficient text-only instruction following | prev: llama-3.1-70b → superseded by: llama-4-scout-17b-16e-instruct |
| Llama 3.3 70B Instruct (`meta-llama/Llama-3.3-70B-Instruct`) | ga | 2024-12-06 | 128K | $0.88 | $0.88 | Dense decoder-only transformer with GQA, 70B parameters | Multilingual dialogue and instruction following on Together AI serverless | prev: meta-llama/Llama-3.1-70B-Instruct → superseded by: meta-llama/Llama-4-Maverick-17B-128E-Instruct |
| Muse Image (`muse-image`) | preview | 2026-07-09 | — | — | — | Agentic image generation model with tool-use and self-refinement | Instruction-faithful image generation and editing | — |
| Muse Spark 1.1 (`muse-spark-1.1`) | preview | 2026-07-09 | 1M | $1.25 | $4.25 | Multimodal reasoning model with tool-use and multi-agent orchestration | Personal-agentic multi-tool orchestration | prev: muse-spark |
| Muse Video (`muse-video`) | preview | 2026-07-07 | — | — | — | — | Text-to-video with native audio | — |
| Llama 4 Behemoth (`llama-4-behemoth`) | preview | — | — | — | — | MoE with ~2T total parameters, 288B active, 16 experts, natively multimodal early-fusion | Teacher / distillation model for the Llama 4 herd | prev: llama-3.1-405b → superseded by: muse-spark-1.1 |
| Llama 4 Behemoth (`meta-llama/Llama-4-Behemoth`) | preview | — | — | — | — | Mixture-of-experts teacher model, ~288B active / ~2T total parameters | Teacher model for Llama 4 distillation | — |
| Muse Spark (`muse-spark`) | deprecated | 2026-04-08 | 1M | — | — | Natively multimodal reasoning model from Meta Superintelligence Labs | Meta AI assistant reasoning backbone | prev: meta-llama/Llama-4-Maverick-17B-128E-Instruct → superseded by: muse-spark-1.1 |
| Llama 4 Maverick (legacy ID) (`llama-4-maverick-17b-128e`) | deprecated | 2025-04-05 | 1M | $0.19 | $0.60 | MoE, 17B active / ~400B total parameters, 128 routed experts + 1 shared expert, natively multimodal early-fusion | Open-weight flagship multimodal chat, coding, and agents | prev: llama-3.3-70b → superseded by: meta-llama/Llama-4-Maverick-17B-128E-Instruct |
| Llama 4 Scout (legacy ID) (`llama-4-scout-17b-16e`) | deprecated | 2025-04-05 | 10M | $0.08 | $0.30 | MoE, 17B active / ~109B total parameters, 16 experts, natively multimodal early-fusion, iRoPE for long context | Long-context document analysis and multimodal serving on a single GPU | prev: llama-3.3-70b → superseded by: meta-llama/Llama-4-Scout-17B-16E-Instruct |

## Microsoft

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MAI-Code-1-Flash (`mai-code-1-flash`) | ga | 2026-06-02 | 256K | $0.75 | $4.50 | Sparse Mixture-of-Experts, 137B total / 5B active | Low-latency coding and Copilot-style completions | — |
| MAI-Image-2.5 (`mai-image-2.5`) | ga | 2026-06-02 | — | $5.00 | $47.00 | Diffusion-based text-to-image with image-editing controls | High-quality text-to-image with strong text rendering | prev: mai-image-2 |
| MAI-Voice-2 (`mai-voice-2`) | ga | 2026-06-02 | — | $22.00 | — | Neural text-to-speech with expressive prosody model | Multilingual high-quality speech synthesis with voice cloning | prev: mai-voice-1 |
| MAI-Voice-1 (`mai-voice-1`) | ga | 2026-04-02 | — | $22.00 | $22.00 | Speech-generation transformer (deployed via Azure Speech SDK) | High-fidelity expressive speech synthesis | → superseded by: mai-voice-2 |
| Phi-4-mini-flash-reasoning (`phi-4-mini-flash-reasoning`) | ga | 2025-07-09 | 64K | — | — | SambaY decoder-hybrid-decoder (3.8B params) | Edge math reasoning with high throughput | prev: phi-4-mini-reasoning |
| Phi-4-mini-flash-reasoning (`microsoft/phi-4-mini-flash-reasoning`) | ga | 2025-07-09 | — | — | — | Dense transformer, mini variant tuned for flash reasoning | Fast on-device reasoning for edge deployment | — |
| Phi-4-reasoning (`phi-4-reasoning`) | ga | 2025-04-30 | 32K | — | — | Dense decoder-only Transformer, 14B parameters, fine-tuned from Phi-4 | Step-by-step reasoning on math and science | prev: phi-4 |
| Phi-4-reasoning-plus (`phi-4-reasoning-plus`) | ga | 2025-04-30 | 33K | — | — | Dense small language model, RL fine-tuned from Phi-4 (~14B) | Small open-weight reasoning with chain-of-thought | prev: phi-4-reasoning → superseded by: phi-4-reasoning-vision-15b |
| Phi-4-reasoning-plus (`microsoft/phi-4-reasoning-plus`) | ga | 2025-04-30 | 33K | — | — | 14B dense decoder-only transformer, SFT + RL fine-tuned from Phi-4 | Open-weight small reasoning model for on-device | prev: phi-4-reasoning → superseded by: microsoft/phi-4-reasoning-vision |
| Phi-4-mini-instruct (`phi-4-mini-instruct`) | ga | 2025-02-26 | 131K | $0.07 | $0.23 | Dense small language model (~3.8B parameters) | Cheap, fast text tasks and on-device deployment | prev: phi-3.5-mini-instruct → superseded by: phi-4-mini-flash-reasoning |
| Phi-4-multimodal-instruct (`phi-4-multimodal-instruct`) | ga | 2025-02-26 | 131K | $0.08 | $0.32 | Dense small language model with vision and audio encoders | Small multimodal model with speech, vision, and text | prev: phi-3.5-vision-instruct |
| Phi-4-multimodal-instruct (`microsoft/phi-4-multimodal-instruct`) | ga | 2025-02-26 | 128K | $0.08 | $0.32 | 5.6B parameter unified multimodal transformer (text, vision, audio) | Unified text, vision, and audio in a small model | — |
| Phi-4 (`phi-4`) | ga | 2024-12-12 | 16K | $0.07 | $0.14 | 14B parameter dense decoder-only transformer | Compact, capable open-weight model for low-latency scenarios | prev: phi-3.5 → superseded by: phi-4-reasoning |
| Phi-4 (`microsoft/phi-4`) | ga | 2024-12-12 | 16K | — | — | Dense transformer, 14B parameters | Small language model for complex reasoning and math | → superseded by: microsoft/phi-4-reasoning-plus |
| MAI-Cyber-1-Flash (`mai-cyber-1-flash`) | preview | 2026-07-27 | 256K | — | — | Sparse MoE — 137B total / 5B active (fine-tuned from MAI-Code-1-Flash) | Autonomous vulnerability discovery and remediation | prev: mai-code-1-flash |
| MAI-Image-2.5 Pro (`mai-image-2.5-pro`) | preview | 2026-07-23 | — | $5.00 | $106.00 | Diffusion-based text-to-image, Pro tier of MAI-Image-2.5 | Maximum-fidelity image generation and creative control | prev: mai-image-2.5 |
| MAI-Voice-2 Flash (`mai-voice-2-flash`) | preview | 2026-07-23 | — | $15.00 | $15.00 | Neural text-to-speech, flash variant of MAI-Voice-2 | Low-latency multilingual text-to-speech for real-time apps | prev: mai-voice-2 |
| MAI-Image-2.5-Flash (`mai-image-2.5-flash`) | preview | 2026-06-02 | — | $1.75 | $33.00 | Diffusion-based text-to-image (efficient variant) | Faster, cheaper image generation and editing for high-volume workloads | prev: mai-image-2.5 |
| MAI-Thinking-1 (`mai-thinking-1`) | preview | 2026-06-02 | 256K | — | — | Sparse Mixture-of-Experts, ~1T total / 35B active | Enterprise reasoning and multi-step analytical workloads | prev: mai-1-preview |
| MAI-Transcribe-1.5 (`mai-transcribe-1.5`) | preview | 2026-06-02 | — | — | — | Multilingual speech-to-text encoder-decoder | Production-grade multilingual speech-to-text with context biasing | prev: mai-transcribe-1 |
| MAI-Image-2-Efficient (`mai-image-2-efficient`) | preview | 2026-04-14 | 32K | $5.00 | $19.50 | Diffusion-based text-to-image | Cost-efficient high-throughput image generation | prev: mai-image-2 → superseded by: mai-image-2.5 |
| MAI-Image-2 (`mai-image-2`) | preview | 2026-04-02 | 32K | $5.00 | $33.00 | Diffusion-based text-to-image | High-quality text-to-image generation | → superseded by: mai-image-2-efficient |
| MAI-Transcribe-1 (`mai-transcribe-1`) | preview | 2026-04-02 | — | — | — | Bidirectional audio encoder with transformer text decoder | Multilingual speech-to-text transcription | → superseded by: mai-transcribe-1.5 |
| Phi-4-Reasoning-Vision (`microsoft/phi-4-reasoning-vision`) | preview | 2026-03-04 | — | — | — | Dense transformer, 15B parameters, vision-language model | Multimodal reasoning with high-fidelity vision | prev: microsoft/phi-4-reasoning-plus |
| Phi-4-Reasoning-Vision-15B (`phi-4-reasoning-vision-15b`) | preview | 2026-03-04 | 33K | — | — | 15B-parameter multimodal transformer built on Phi-4 reasoning family with SigLIP-2 vision encoder (mid-fusion) | Compact multimodal reasoning for charts, diagrams, UI | prev: phi-4-reasoning-plus |
| MAI-1 Preview (`mai-1-preview`) | preview | 2025-08-28 | — | — | — | Mixture-of-Experts foundation model | General instruction following and everyday queries | → superseded by: mai-thinking-1 |

## Mistral

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Mistral OCR 4 (`mistral-ocr-4-0`) | ga | 2026-06-23 | — | — | — | Purpose-built OCR / document understanding model | Structure-aware document parsing and OCR | prev: mistral-ocr-2512 |
| Mistral Medium 3.5 (`mistral-medium-2604`) | ga | 2026-04-29 | 262K | $0.40 | $2.00 | Dense 128B parameters | Unified chat, reasoning, and code mid-tier | prev: mistral-medium-2506 |
| Mistral Medium 3.5 (`mistral-medium-latest`) | ga | 2026-04-29 | 262K | $1.50 | $7.50 | 128B dense multimodal transformer with configurable reasoning | Agentic coding and mid-tier multimodal work | prev: mistral-medium-2505 |
| Mistral Small 4 (`mistral-small-2603`) | ga | 2026-03-16 | 262K | $0.15 | $0.60 | Dense small model, unified capabilities | Unified small model: reasoning, vision, coding | prev: mistral-small-2503 |
| Mistral Small 4 (`mistral-small-latest`) | ga | 2026-03-16 | 262K | $0.15 | $0.60 | Mixture-of-experts, ~119B total / ~6B active parameters, multimodal with configurable reasoning | Low-cost multimodal reasoning and coding | prev: mistral-small-2506 |
| Ministral 3 8B (`ministral-8b-latest`) | ga | 2025-12-04 | 256K | $0.10 | $0.10 | 8B dense transformer, part of Ministral 3 edge family | edge and high-throughput classification, extraction, routing | prev: ministral-8b-2410 |
| Mistral Large 3 (`mistral-large-latest`) | ga | 2025-12-04 | 262K | $0.50 | $1.50 | Sparse mixture-of-experts, ~675B total / ~41B active parameters, multimodal | Flagship general-purpose multimodal MoE | prev: mistral-large-2411 |
| Ministral 3 14B (`ministral-14b-2512`) | ga | 2025-12-02 | 262K | $0.20 | $0.20 | Dense 14B transformer with vision encoder | Edge and on-device multimodal tasks | prev: ministral-8b-2410 |
| Ministral 3 8B (`ministral-8b-2512`) | ga | 2025-12-02 | 262K | $0.15 | $0.15 | 8B-parameter dense transformer | Edge and on-device deployment where a compact multimodal model with long context is needed at very low cost | prev: ministral-8b-2410 |
| Mistral Large 3 (`mistral-large-2512`) | ga | 2025-12-02 | 262K | $0.50 | $1.50 | Sparse Mixture-of-Experts, 675B total / 41B active parameters | Open-weight European flagship, multimodal reasoning | prev: mistral-large-2411 |
| Magistral Small 1.2 (`magistral-small-latest`) | ga | 2025-09-18 | 131K | $0.50 | $1.50 | 24B dense reasoning model with vision input | Open-weight multilingual chain-of-thought reasoning | prev: magistral-small-2507 |
| Codestral 25.08 (`codestral-latest`) | ga | 2025-08-01 | 256K | $0.30 | $0.90 | Dense transformer specialized for code | Low-latency code completion and FIM | prev: codestral-2501 |
| Codestral 2508 (`codestral-2508`) | ga | 2025-08-01 | 256K | $0.30 | $0.90 | Dense transformer specialized for code generation | Low-latency code completion, FIM and refactors | prev: codestral-2501 |
| Ministral 3B (`ministral-3b-latest`) | ga | — | 131K | $0.10 | $0.10 | Dense 3B transformer with vision capabilities (Ministral 3 generation) | Edge and on-device deployment | prev: ministral-3b-2410 |
| Leanstral 1.5 (`leanstral-1-5`) | preview | 2026-06-30 | 262K | $0.00 | $0.00 | Sparse Mixture-of-Experts (~6.5B active / 119B total, 128 experts / 4 active per token) | Lean 4 formal proof engineering, automated theorem proving, and autoformalization | prev: leanstral |
| Devstral 2 (`devstral-2-2512`) | deprecated | 2025-12-09 | 262K | $0.40 | $2.00 | Dense 123B transformer | Agentic coding - multi-file edits and long agents | prev: devstral-medium-2507 → superseded by: mistral-medium-2604 |
| Devstral 2 (`devstral-2512`) | deprecated | 2025-12-09 | 262K | $0.40 | $0.90 | Dense 123B transformer optimized for agentic coding | open agentic coding and multi-file editing | prev: devstral-medium-2507 → superseded by: mistral-medium-2604 |
| Devstral Small 2 (`devstral-small-2-2512`) | deprecated | 2025-12-09 | 262K | $0.10 | $0.30 | Dense 24B transformer | Local, on-device agentic coding on a single consumer GPU | prev: devstral-small-2507 → superseded by: mistral-medium-2604 |
| Magistral Medium 1.2 (`magistral-medium-2509`) | deprecated | 2025-09-01 | 128K | $2.00 | $5.00 | Dense transformer reasoning model with vision encoder, closed weights | Complex multi-step reasoning, math and problem-solving where accuracy matters more than latency | prev: magistral-medium-2507 → superseded by: mistral-medium-2604 |
| Mistral Medium 3 (`mistral-medium-2505`) | deprecated | 2025-05-07 | 131K | $0.40 | $2.00 | — | Balanced cost/performance for coding and STEM | → superseded by: mistral-medium-2604 |
| Magistral Medium (`magistral-medium-latest`) | deprecated | — | — | $2.00 | $5.00 | — | Chain-of-thought reasoning for complex problems | → superseded by: mistral-medium-2604 |

## Moonshot

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Kimi K3 (`kimi-k3`) | ga | 2026-07-16 | 1M | $3.00 | $15.00 | Sparse Mixture-of-Experts, 2.8T total / 104B active, 16 of 896 experts per token | Frontier open-weight reasoning, long context, agentic tasks | prev: kimi-k2.6 |
| Kimi K2.7 Code (`kimi-k2.7-code`) | ga | 2026-06-12 | 262K | $0.95 | $4.00 | Mixture-of-Experts, 1T total / 32B active | Coding and agentic development workflows | prev: kimi-k2.6 |
| Kimi K2.6 (`kimi-k2.6`) | ga | 2026-04-20 | 262K | $0.95 | $4.00 | Mixture-of-Experts, 1T total / 32B active | General-purpose multimodal chat, coding, long context | prev: kimi-k2-0905 → superseded by: kimi-k3 |
| Kimi K2 Thinking (`kimi-k2-thinking`) | ga | 2025-11-06 | 262K | $0.60 | $2.50 | Mixture-of-Experts, 1T total / 32B active, INT4 native | Long-horizon agentic reasoning with sustained tool use | prev: kimi-k2 → superseded by: kimi-k2.5 |
| Kimi K2.5 (`kimi-k2.5`) | deprecated | 2026-01-26 | 262K | $0.60 | $3.00 | Sparse MoE (1T total / 32B active) | Cost-efficient open agentic reasoning (sunsetting) | prev: kimi-k2-thinking → superseded by: kimi-k2.7-code |

## NVIDIA

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Nemotron 3 Embed 1B (BF16) (`nvidia/nemotron-3-embed-1b-bf16`) | ga | 2026-07-17 | 33K | $0.00 | $0.00 | Transformer encoder with bidirectional attention masking, average pooling | Efficient production-scale dense retrieval where a smaller footprint than the 8B is needed | — |
| Nemotron 3 Embed 1B (NVFP4) (`nvidia/nemotron-3-embed-1b-nvfp4`) | ga | 2026-07-17 | 33K | $0.00 | $0.00 | Transformer encoder with bidirectional attention masking, NVFP4 (4-bit) quantized from Nemotron-3-Embed-1B-BF16 | Blackwell-optimized 4-bit deployment for high-throughput embedding on GB200 / RTX PRO 6000 | prev: nvidia/nemotron-3-embed-1b-bf16 |
| Nemotron 3 Embed 8B (`nvidia/nemotron-3-embed-8b-bf16`) | ga | 2026-07-17 | 33K | $0.00 | $0.00 | Transformer encoder with bidirectional attention masking (adapted from Ministral-3-8B-Instruct-2512 causal decoder), average pooling over token representations | Accuracy-first multilingual dense retrieval for production RAG, agentic retrieval, code retrieval, and agent memory | — |
| Nemotron 3 Embed 8B (`nvidia/nemotron-3-embed-8b`) | ga | 2026-07-16 | 33K | — | — | Transformer text encoder with bidirectional attention, 4096-dim embeddings | Multilingual retrieval embeddings for RAG | — |
| Nemotron 3 Ultra 550B A55B (`nvidia/nemotron-3-ultra-550b-a55b`) | ga | 2026-06-04 | 1M | $0.50 | $2.20 | Hybrid Mamba-Transformer MoE (550B total, 55B active) | Frontier open reasoning and multi-agent orchestration | prev: nvidia/llama-3.1-nemotron-ultra-253b-v1 |
| Nemotron 3.5 ASR Streaming Multilingual (`nvidia/nemotron-3.5-asr-streaming-0.6b`) | ga | 2026-06-04 | — | — | — | Cache-Aware FastConformer-RNNT, 600M parameters | Low-latency multilingual streaming speech recognition | — |
| Nemotron 3.5 Content Safety (`nvidia/nemotron-3.5-content-safety`) | ga | 2026-06-04 | 128K | $0.00 | $0.00 | Gemma 3 4B IT fine-tuned (LoRA merged) for multimodal safety reasoning | Multimodal multilingual content safety moderation | prev: nvidia/nemotron-3-content-safety |
| Nemotron-Labs-3-Elastic 30B-A3B (`nvidia/nemotron-labs-3-elastic-30b-a3b`) | ga | 2026-05-07 | 131K | — | — | Hybrid Mamba2-Transformer MoE with elastic post-training; 52-layer parent (23 Mamba-2 + MoE layers, 6 attention layers, 128 experts + 1 shared, 6 activated per token); nested 30B / 23B / 12B submodels sharing the same layer structure, 32 attention heads and 64 Mamba heads | Elastic 3-in-1 reasoning checkpoint sliced to 30B/23B/12B for cost-adaptive deployment | prev: nvidia/nemotron-3-nano-30b-a3b |
| Nemotron 3 Nano Omni (`nvidia/nemotron-3-nano-omni-30b-a3b`) | ga | 2026-04-28 | 256K | — | — | Hybrid Mamba2-Transformer MoE (Nemotron 3 Nano 30B-A3B backbone) with C-RADIOv4-H vision encoder and Parakeet-TDT-0.6B-v2 audio encoder, 30B total / 3B active | Unified multimodal agents across text, image, audio, video | — |
| Nemotron 3 Nano Omni 30B A3B (`nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`) | ga | 2026-04-28 | 300K | $0.07 | $0.30 | Hybrid Mamba-Transformer MoE, omni-modal (30B total, 3B active) | Multimodal document, audio and video agents | prev: nvidia/nemotron-3-nano-30b-a3b |
| Nemotron-Cascade 2 30B-A3B (`nvidia/nemotron-cascade-2-30b-a3b`) | ga | 2026-03-20 | 262K | — | — | Hybrid Mamba-Transformer Mixture-of-Experts, 30B total / 3B active, 52 layers, 128 routable + 1 shared expert, 6 experts activated per token, post-trained from Nemotron-3-Nano-30B-A3B-Base via Cascade RL | High-intelligence-density open reasoning at 3B active parameters for math, code, and agentic workflows with single-GPU deployment | prev: nvidia/nemotron-3-nano-30b-a3b |
| Nemotron 3 Nano 4B (`nvidia/nemotron-3-nano-4b`) | ga | 2026-03-16 | 262K | — | — | Hybrid Mamba-Transformer (Mamba-2 + MLP + small number of attention layers), 3.97B parameters, dense | On-device / edge deployment on Jetson, DGX Spark, and RTX GPUs where privacy, latency, and offline operation matter | prev: nvidia/nvidia-nemotron-nano-9b-v2 |
| Nemotron 3 Super 120B A12B (`nvidia/nemotron-3-super-120b-a12b`) | ga | 2026-03-11 | 262K | $0.09 | $0.45 | Hybrid Mamba-Transformer MoE (~120B total, 12B active) | High-accuracy reasoning for multi-agent apps | prev: nvidia/llama-3_3-nemotron-super-49b-v1_5 |
| Nemotron 3 Nano 30B A3B (`nvidia/nemotron-3-nano-30b-a3b`) | ga | 2025-12-14 | 262K | $0.05 | $0.20 | Hybrid Mamba-Transformer MoE (30B total, 3B active) | Cost-efficient agentic workflows and coding | prev: nvidia/nvidia-nemotron-nano-9b-v2 |
| Nemotron Nano 2 VL (`nvidia/nemotron-nano-12b-v2-vl`) | ga | 2025-10-28 | 131K | — | — | Hybrid Transformer-Mamba VLM built on Nemotron Nano V2 12B with RADIOv2.5 vision encoder | open document intelligence and video understanding | prev: nvidia/nvidia-nemotron-nano-9b-v2 → superseded by: nvidia/nemotron-3-nano-omni-30b-a3b-reasoning |
| Llama 3.3 Nemotron Super 49B v1.5 (`nvidia/llama-3_3-nemotron-super-49b-v1_5`) | ga | 2025-10-10 | 131K | $0.10 | $0.40 | Neural Architecture Search compression of Meta Llama-3.3-70B-Instruct with reasoning post-training | single-GPU reasoning and tool-calling on Llama base | prev: nvidia/llama-3.3-nemotron-super-49b-v1 → superseded by: nvidia/nemotron-3-super-120b-a12b |
| Llama-3.3-Nemotron-Super-49B-v1.5 (`nvidia/llama-3.3-nemotron-super-49b-v1.5`) | ga | 2025-10-10 | 128K | — | — | Dense decoder-only transformer distilled from Llama-3.3-70B via Puzzle NAS (skip-attention, variable FFN widths) | Dense reasoning + tool-calling on single H100/H200 | prev: nvidia/llama-3.3-nemotron-super-49b-v1 → superseded by: nvidia/nemotron-3-super-120b-a12b |
| Nemotron Nano 9B V2 (`nvidia/nvidia-nemotron-nano-9b-v2`) | ga | 2025-08-18 | 131K | $0.04 | $0.16 | Dense hybrid Mamba-Transformer, 9B parameters | Dense small-model reasoning with thinking budget control | → superseded by: nvidia/nemotron-3-nano-30b-a3b |
| Llama 3.1 Nemotron Ultra 253B v1 (`nvidia/llama-3.1-nemotron-ultra-253b-v1`) | ga | 2025-04-08 | 128K | $0.60 | $1.80 | Dense 253B (Llama 3.1 base, NAS-optimized) | Highest-accuracy complex agentic tasks (legacy tier) | → superseded by: nvidia/nemotron-3-super-120b-a12b |
| Nemotron-Labs-Audex 2B (`nvidia/nemotron-labs-audex-2b`) | preview | 2026-07-07 | — | — | — | Dense 2B decoder LLM with extended vocabulary for discrete audio tokens and an audio encoder for speech and general audio inputs | Compact 2B audio-text LLM for on-device speech understanding and TTS | — |
| Nemotron-Labs-Audex 30B-A3B (`nvidia/nemotron-labs-audex-30b-a3b`) | preview | 2026-07-07 | — | — | — | Single MoE Transformer decoder with 30B total / 3B active parameters; hybrid Mamba-Transformer backbone (Nemotron-Cascade-2-30B-A3B, 52 layers, 128 routable + shared experts, 6 activated per token) extended with audio encoder and vocabulary for discrete audio output tokens | Unified audio-text MoE for ASR, TTS, translation, and speech-to-speech | prev: nvidia/nemotron-cascade-2-30b-a3b |
| Nemotron-Labs-TwoTower 30B-A3B (`nvidia/nemotron-labs-twotower-30b-a3b`) | preview | 2026-07-01 | 131K | — | — | Block-wise autoregressive diffusion: frozen Nemotron-3-Nano-30B-A3B AR context tower + trainable bidirectional diffusion denoiser tower (~60B total, ~3B active per tower) | High-throughput diffusion language generation research | prev: nvidia/nemotron-3-nano-30b-a3b |
| Nemotron 3 VoiceChat (`nvidia/nemotron-voicechat`) | preview | 2026-03-18 | — | — | — | Unified speech-to-speech: Parakeet audio encoder + Nemotron Nano v2 9B LLM backbone + TTS decoder (~12B total) | Full-duplex real-time conversational voice agents | — |
| Llama 3.3 Nemotron Super 49B v1 (`nvidia/llama-3.3-nemotron-super-49b-v1`) | deprecated | 2025-03-18 | 131K | $0.10 | $0.40 | Dense transformer (Llama 3.3 base, NAS-pruned) | Legacy mid-tier Nemotron reasoning | → superseded by: nvidia/nemotron-3-super-120b-a12b |

## OpenAI

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GPT-Live-Transcribe (`gpt-live-transcribe`) | ga | 2026-07-29 | — | — | — | — | Low-latency streaming speech-to-text | prev: gpt-4o-transcribe |
| GPT-Transcribe (`gpt-transcribe`) | ga | 2026-07-29 | — | — | — | — | Async batch transcription of recorded audio | prev: whisper-large-v3 |
| GPT-5.6 Luna (`gpt-5.6-luna`) | ga | 2026-07-09 | 1.1M | $0.20 | $1.20 | Mixture-of-experts transformer with dynamic routing and configurable reasoning effort | Fastest, cheapest GPT-5.6 for high-volume workloads | prev: gpt-5.4-nano |
| GPT-5.6 Sol (`gpt-5.6-sol`) | ga | 2026-07-09 | 1.1M | $5.00 | $30.00 | Mixture-of-experts transformer with dynamic routing and configurable reasoning effort | Frontier reasoning and long-horizon agentic work | prev: gpt-5.5 |
| GPT-5.6 Terra (`gpt-5.6-terra`) | ga | 2026-07-09 | 1.1M | $2.00 | $12.00 | Mixture-of-experts transformer with dynamic routing and configurable reasoning effort | Balanced capability, speed, and cost for everyday work | prev: gpt-5.5 |
| GPT-Realtime-2.1 (`gpt-realtime-2.1`) | ga | 2026-07-06 | 128K | $4.00 | $24.00 | Realtime speech-to-speech transformer with configurable reasoning tokens | Low-latency speech-to-speech voice agents | prev: gpt-realtime |
| GPT-Realtime-2.1 mini (`gpt-realtime-2.1-mini`) | ga | 2026-07-06 | 128K | $0.60 | $2.40 | Distilled speech-to-speech realtime reasoning model | Low-cost realtime voice agents at scale | prev: gpt-realtime-mini |
| GPT-5.5 Instant (`gpt-5.5-instant`) | ga | 2026-05-05 | 1M | $5.00 | $30.00 | — | Fast default chat for ChatGPT-style workloads | prev: gpt-5.3-instant |
| GPT-5.5 (`gpt-5.5`) | ga | 2026-04-24 | 1.1M | $5.00 | $30.00 | Unified system with router across fast and deep reasoning models | Complex professional work, prior-generation flagship | prev: gpt-5.4 → superseded by: gpt-5.6-sol |
| GPT-5.5 Pro (`gpt-5.5-pro`) | ga | 2026-04-24 | 1.1M | $30.00 | $180.00 | — | Deepest multi-step reasoning and highest-value tasks | prev: gpt-5 → superseded by: gpt-5.6-sol |
| GPT-5.4 mini (`gpt-5.4-mini`) | ga | 2026-03-17 | 400K | $0.75 | $4.50 | — | Cost-efficient production reasoning and sub-agent workloads | prev: o4-mini |
| GPT-5.4 nano (`gpt-5.4-nano`) | ga | 2026-03-17 | 272K | $0.20 | $1.25 | — | cheapest fastest option for high-volume simple tasks | prev: gpt-5-nano |
| GPT-5.4 (`gpt-5.4`) | ga | 2026-03-05 | 272K | $2.50 | $15.00 | — | reasoning with native computer-use and tool-heavy agents | prev: gpt-5.2 → superseded by: gpt-5.5 |
| GPT-5 (`gpt-5`) | ga | 2025-08-07 | 400K | $1.25 | $10.00 | — | General-purpose reasoning and multimodal tasks | prev: gpt-4o → superseded by: gpt-5.5 |
| gpt-oss-120b (`gpt-oss-120b`) | ga | 2025-08-05 | 131K | $0.03 | $0.15 | Sparse Mixture-of-Experts (117B total, 5.1B active per token, 128 experts, top-4 routing) | Self-hosted open-weight reasoning and tool use | — |
| o4-mini (`o4-mini`) | deprecated | 2025-04-16 | 200K | $1.10 | $4.40 | — | cheap reasoning for STEM and coding | prev: o3-mini → superseded by: gpt-5.4-mini |

## Perplexity

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Sonar Pro Search (`sonar-pro-search`) | ga | 2025-10-30 | 200K | $3.00 | $15.00 | Sonar Pro with agentic Pro Search orchestration for multi-step retrieval | Advanced agentic multi-step web search | prev: sonar-pro |
| Sonar Deep Research (`sonar-deep-research`) | ga | 2025-03-07 | 128K | $2.00 | $8.00 | Perplexity reasoning + deep multi-source retrieval pipeline | Long-form multi-source research reports | — |
| Sonar Reasoning Pro (`sonar-reasoning-pro`) | ga | 2025-03-07 | 128K | $2.00 | $8.00 | DeepSeek-R1 powered reasoning + Perplexity search stack | Multi-step reasoning with real-time web search | prev: sonar-reasoning |
| Sonar (`sonar`) | ga | 2025-01-21 | 128K | $1.00 | $1.00 | Search-augmented LLM | Lightweight grounded web search answers | — |
| Sonar Pro (`sonar-pro`) | ga | 2025-01-21 | 200K | $3.00 | $15.00 | Search-augmented LLM | Deep web research with rich citations | prev: sonar |
| Sonar Reasoning (`sonar-reasoning`) | deprecated | 2025-01-21 | 128K | $1.00 | $5.00 | Reasoning-tuned Sonar model with chain-of-thought over web search results | Legacy grounded reasoning (no longer callable) | → superseded by: sonar-reasoning-pro |

## xAI

| Model | Status | Released | Context | Input $/1M | Output $/1M | Architecture | Best for | Lineage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Grok Voice Think Fast 2.0 (`grok-voice-think-fast-2.0`) | ga | 2026-07-29 | — | — | — | Voice-native full-duplex speech-to-speech model with configurable reasoning effort (low/medium/high) | Real-time voice agents with improved speech reasoning and reliable tool-calling | prev: grok-voice-think-fast-1.0 |
| Grok 4.5 (`grok-4.5`) | ga | 2026-07-16 | 500K | $2.00 | $6.00 | 1.5T-parameter V9 foundation with configurable reasoning | Coding, agentic and knowledge work | prev: grok-4.3 |
| Grok Build 0.1 (`grok-build-0.1`) | ga | 2026-05-29 | 256K | $1.00 | $2.00 | Coding-specialized transformer trained for agentic tasks | Fast agentic coding and MCP-connected workflows | prev: grok-code-fast-1 |
| Grok 4.3 (`grok-4.3`) | ga | 2026-04-30 | 1M | $1.25 | $2.50 | Reasoning-first transformer with prompt caching | Primary chat, coding, and agentic reasoning with 1M context | prev: grok-4 → superseded by: grok-4.5 |
| Grok 4.20 (`grok-4.20`) | ga | 2026-03-10 | 2M | $1.25 | $2.50 | Reasoning transformer with 4-agent inference council | Fast reasoning over very long contexts | prev: grok-4-0709 → superseded by: grok-4.3 |
| Grok 4.20 Multi Agent (`grok-4.20-multi-agent`) | ga | 2026-03-09 | 1M | $1.25 | $2.50 | 4-agent parallel council on shared weights and cached context | Multi-agent orchestration and collaborative workflows | prev: grok-4.20-multi-agent-beta-0309 |
| Grok 4 Fast Reasoning (`grok-4-fast-reasoning`) | ga | 2025-09-20 | 2M | $0.20 | $0.50 | — | Cost-efficient reasoning at long context | prev: grok-4-0709 → superseded by: grok-4.3 |
| Grok Code Fast 1 (`grok-code-fast-1`) | ga | 2025-08-26 | 256K | $0.20 | $1.50 | 314B-parameter Mixture-of-Experts | Fast, economical agentic coding assistant | → superseded by: grok-build-0.1 |
| Grok Imagine Video 1.5 Preview (`grok-imagine-video-1.5-preview`) | preview | 2026-05-30 | — | — | — | Imagine video diffusion model with integrated audio generation | Cinematic image-to-video with synchronized audio | prev: grok-imagine-video |
| Grok 4.20 Multi Agent Beta 0309 (`grok-4.20-multi-agent-beta-0309`) | preview | 2026-03-09 | 2M | $1.25 | $2.50 | Beta 4-agent council with extended 2M context | Beta multi-agent with 2M context | prev: grok-4.20 → superseded by: grok-4.20-multi-agent |
| Grok 4.5 (dashed alias) (`grok-4-5`) | deprecated | 2026-07-08 | 500K | $2.00 | $6.00 | — | Non-canonical alias for grok-4.5; use canonical dotted form | prev: grok-4-3 → superseded by: grok-4.5 |
| Grok 4.3 (dashed alias) (`grok-4-3`) | deprecated | 2026-04-30 | 1M | $1.25 | $2.50 | Reasoning-centric model with always-on chain-of-thought | Non-canonical alias for grok-4.3; use canonical dotted form | prev: grok-4 → superseded by: grok-4.3 |
| Grok Voice Think Fast 1.0 (`grok-voice-think-fast-1.0`) | deprecated | 2026-04-23 | — | — | — | Voice-native full-duplex model with background reasoning for real-time conversation | real-time voice agents with reasoning (legacy) | → superseded by: grok-voice-think-fast-2.0 |
| Grok 4.20 (dashed alias) (`grok-4-20`) | deprecated | 2026-03-10 | 2M | $2.00 | $6.00 | — | Non-canonical alias for grok-4.20; use canonical dotted form | prev: grok-4.3 → superseded by: grok-4.20 |
| Grok 4.1 Fast (`grok-4-1-fast`) | deprecated | 2025-11-19 | 2M | $0.20 | $0.50 | Compact fast variant of Grok 4.1 | High-throughput agentic tool calling at low cost | prev: grok-3-mini → superseded by: grok-4.3 |
| Grok 4 Fast Non-Reasoning (`grok-4-fast-non-reasoning`) | deprecated | 2025-09-20 | 2M | $0.20 | $0.50 | — | Fast, cheap direct-response tasks like extraction, summarization, and classification over long contexts | → superseded by: grok-4.3 |
| Grok 4 (`grok-4-0709`) | deprecated | 2025-07-09 | 256K | $3.00 | $15.00 | — | Complex synthesis, analysis, and instruction following | prev: grok-3 → superseded by: grok-4.3 |
