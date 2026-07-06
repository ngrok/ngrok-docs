/*
 * This file owns the rendering and helper logic for the AI Gateway model catalog UI.
 *
 * scripts/build-ai-gateway-model-catalog.js does not regenerate this module. It only
 * replaces the catalog object between the generated data markers below.
 */

export const AIGatewayModelCatalogProvider = ({
  providerId,
  section,
  authorId,
}) => {
  const aiGatewayModelCatalog =
    //-- GENERATED PROVIDERS DATA START --//
  {
    "schema_version": 1,
    "generated_from": "data",
    "providers": [
      {
        "id": "openai",
        "slug": "openai",
        "display_name": "OpenAI",
        "base_url": "https://api.openai.com/v1/",
        "website": "https://openai.com/",
        "aliases": [
          "openAI",
          "open-ai",
          "open-AI"
        ],
        "provider_key_required": false,
        "description": "OpenAI is an AI research organization that develops advanced artificial intelligence models, including GPT, for natural language understanding, generation, and other AI applications.",
        "models": [
          {
            "id": "gpt-5.5-pro",
            "display_name": "GPT-5.5 Pro",
            "author_id": "openai",
            "released_at": "2026-04-23",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "gpt-5.5-pro-2026-04-23"
            ],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 1050000,
            "max_output_tokens": 128000
          },
          {
            "id": "gpt-5.5",
            "display_name": "GPT-5.5",
            "author_id": "openai",
            "released_at": "2026-04-23",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "gpt-5.5-2026-04-23"
            ],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 1050000,
            "max_output_tokens": 128000
          },
          {
            "id": "gpt-5.4-nano",
            "display_name": "GPT-5.4 Nano",
            "author_id": "openai",
            "released_at": "2026-03-17",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "gpt-5.4-nano-2026-03-17"
            ],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 400000,
            "max_output_tokens": 128000
          },
          {
            "id": "gpt-5.4-mini",
            "display_name": "GPT-5.4 Mini",
            "author_id": "openai",
            "released_at": "2026-03-17",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "gpt-5.4-mini-2026-03-17"
            ],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 400000,
            "max_output_tokens": 128000
          },
          {
            "id": "gpt-5.3-codex",
            "display_name": "GPT-5.3-Codex",
            "author_id": "openai",
            "released_at": "2026-03-05",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "GPT-5.3-Codex",
              "gpt-5.3-Codex",
              "gpt-5.3-codex-2026-03-05",
              "gpt5.3-codex"
            ],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 400000,
            "max_output_tokens": 128000
          },
          {
            "id": "gpt-5.4-pro",
            "display_name": "GPT-5.4 Pro",
            "author_id": "openai",
            "released_at": "2026-03-05",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "gpt-5.4-pro-2026-03-05"
            ],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 1050000,
            "max_output_tokens": 128000
          },
          {
            "id": "gpt-5.4",
            "display_name": "GPT-5.4",
            "author_id": "openai",
            "released_at": "2026-03-05",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "gpt-5.4-2026-03-05"
            ],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 1050000,
            "max_output_tokens": 128000
          },
          {
            "id": "gpt-5.2-codex",
            "display_name": "GPT-5.2-Codex",
            "author_id": "openai",
            "released_at": "2025-12-18",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "GPT-5.2-Codex",
              "gpt-5.2-Codex",
              "gpt5.2-codex"
            ],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 400000,
            "max_output_tokens": 128000
          },
          {
            "id": "gpt-5.2-pro",
            "display_name": "GPT-5.2 Pro",
            "author_id": "openai",
            "released_at": "2025-12-11",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "gpt-5.2-pro-2025-12-11"
            ],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 400000,
            "max_output_tokens": 100000
          },
          {
            "id": "gpt-5.1",
            "display_name": "GPT-5.1",
            "author_id": "openai",
            "released_at": "2025-11-12",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "GPT-5.1",
              "gpt-5.1-2025-11-13"
            ],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 400000,
            "max_output_tokens": 128000
          },
          {
            "id": "gpt-5-pro",
            "display_name": "GPT-5 Pro",
            "author_id": "openai",
            "released_at": "2025-10-06",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "gpt-5-pro-2025-10-06"
            ],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 400000,
            "max_output_tokens": 272000
          },
          {
            "id": "gpt-5.2-chat-latest",
            "display_name": "GPT-5.2 Chat Latest",
            "author_id": "openai",
            "released_at": "2025-10-01",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 400000,
            "max_output_tokens": 128000
          },
          {
            "id": "gpt-5.2",
            "display_name": "GPT-5.2",
            "author_id": "openai",
            "released_at": "2025-10-01",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 400000,
            "max_output_tokens": 128000
          },
          {
            "id": "gpt-5-chat-latest",
            "display_name": "GPT-5 Chat",
            "author_id": "openai",
            "released_at": "2025-08-07",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "GPT-5 Chat",
              "GPT-5-chat",
              "gpt-5-chat-latest-2025-08-07"
            ],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 400000,
            "max_output_tokens": 128000
          },
          {
            "id": "gpt-5-nano",
            "display_name": "GPT-5 Nano",
            "author_id": "openai",
            "released_at": "2025-08-07",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "GPT-5 nano",
              "GPT-5-nano",
              "gpt-5-nano",
              "gpt-5-nano-2025-08-07"
            ],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 400000,
            "max_output_tokens": 128000
          },
          {
            "id": "gpt-5-mini",
            "display_name": "GPT-5 Mini",
            "author_id": "openai",
            "released_at": "2025-08-07",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "GPT-5 mini",
              "GPT-5-mini",
              "gpt-5-mini",
              "gpt-5-mini-2025-08-07"
            ],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 400000,
            "max_output_tokens": 128000
          },
          {
            "id": "gpt-5",
            "display_name": "GPT-5",
            "author_id": "openai",
            "released_at": "2025-08-07",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "GPT-5",
              "gpt-5",
              "gpt-5-2025-08-07"
            ],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 400000,
            "max_output_tokens": 128000
          },
          {
            "id": "o4-mini-deep-research",
            "display_name": "O4-Mini-Deep-Research",
            "author_id": "openai",
            "released_at": "2025-06-26",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "o4-mini-deep-research",
              "o4-mini-deep-research-2025-06-26"
            ],
            "modalities": [
              "text"
            ],
            "max_context_window": 200000,
            "max_output_tokens": 100000
          },
          {
            "id": "o3-deep-research",
            "display_name": "O3-Deep-Research",
            "author_id": "openai",
            "released_at": "2025-06-25",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "o3-deep-research",
              "o3-deep-research-2025-06-25"
            ],
            "modalities": [
              "text"
            ],
            "max_context_window": 200000,
            "max_output_tokens": 100000
          },
          {
            "id": "o3-pro",
            "display_name": "O3-Pro",
            "author_id": "openai",
            "released_at": "2025-06-10",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "o3-pro",
              "o3-pro-2025-06-10"
            ],
            "modalities": [
              "text"
            ],
            "max_context_window": 128000,
            "max_output_tokens": 100000
          },
          {
            "id": "gpt-5.1-chat-latest",
            "display_name": "GPT-5.1 Chat Latest",
            "author_id": "openai",
            "released_at": "2025-06-01",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 256000,
            "max_output_tokens": 32768
          },
          {
            "id": "o3",
            "display_name": "O3",
            "author_id": "openai",
            "released_at": "2025-04-16",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "o3",
              "o3-2025-04-16"
            ],
            "modalities": [
              "text"
            ],
            "max_context_window": 128000,
            "max_output_tokens": 100000
          },
          {
            "id": "o4-mini",
            "display_name": "O4-Mini",
            "author_id": "openai",
            "released_at": "2025-04-16",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "o4-mini",
              "o4-mini-2025-04-16"
            ],
            "modalities": [
              "text"
            ],
            "max_context_window": 200000,
            "max_output_tokens": 100000
          },
          {
            "id": "gpt-4.1-nano",
            "display_name": "GPT-4.1 nano",
            "author_id": "openai",
            "released_at": "2025-04-14",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "GPT-4.1-nano",
              "gpt-4.1-nano",
              "gpt-4.1-nano-2025-04-14"
            ],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 1000000,
            "max_output_tokens": null
          },
          {
            "id": "gpt-4.1-mini",
            "display_name": "GPT-4.1 mini",
            "author_id": "openai",
            "released_at": "2025-04-14",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "GPT-4.1-mini",
              "gpt-4.1-mini",
              "gpt-4.1-mini-2025-04-14"
            ],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 1000000,
            "max_output_tokens": null
          },
          {
            "id": "gpt-4.1",
            "display_name": "GPT-4.1",
            "author_id": "openai",
            "released_at": "2025-04-14",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "GPT-4.1",
              "gpt-4.1",
              "gpt-4.1-2025-04-14"
            ],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 1000000,
            "max_output_tokens": null
          },
          {
            "id": "o3-mini",
            "display_name": "O3 Mini",
            "author_id": "openai",
            "released_at": "2025-01-31",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "o3-mini-2025-01-31"
            ],
            "modalities": [
              "text"
            ],
            "max_context_window": 200000,
            "max_output_tokens": 100000
          },
          {
            "id": "o1",
            "display_name": "O1",
            "author_id": "openai",
            "released_at": "2024-12-05",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "o1-2024-12-17"
            ],
            "modalities": [
              "text"
            ],
            "max_context_window": 128000,
            "max_output_tokens": 100000
          },
          {
            "id": "o1-pro",
            "display_name": "O1-Pro",
            "author_id": "openai",
            "released_at": "2024-12-05",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "o1-pro-2025-03-19"
            ],
            "modalities": [
              "text"
            ],
            "max_context_window": 200000,
            "max_output_tokens": 100000
          },
          {
            "id": "gpt-4o-mini",
            "display_name": "GPT-4o Mini",
            "author_id": "openai",
            "released_at": "2024-07-18",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "gpt-4o-mini-2024-07-18"
            ],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 128000,
            "max_output_tokens": 16384
          },
          {
            "id": "gpt-4o",
            "display_name": "GPT-4o",
            "author_id": "openai",
            "released_at": "2024-05-13",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "GPT-4o",
              "chatgpt-4o-latest",
              "gpt-4-omni",
              "gpt-4o",
              "gpt-4o-2024-08-06",
              "gpt-4o-2024-11-20"
            ],
            "modalities": [
              "text",
              "image",
              "audio"
            ],
            "max_context_window": 128000,
            "max_output_tokens": 16384
          },
          {
            "id": "gpt-4-turbo",
            "display_name": "GPT-4 Turbo",
            "author_id": "openai",
            "released_at": "2024-04-09",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "gpt-4-0125-preview",
              "gpt-4-1106-preview",
              "gpt-4-turbo-2024-04-09",
              "gpt-4-turbo-preview"
            ],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 128000,
            "max_output_tokens": 4096
          },
          {
            "id": "gpt-3.5-turbo-instruct",
            "display_name": "GPT-3.5 Turbo Instruct",
            "author_id": "openai",
            "released_at": "2023-09-19",
            "deprecated_at": "2025-09-26",
            "retired_at": null,
            "aliases": [],
            "modalities": [
              "text"
            ],
            "max_context_window": 4096,
            "max_output_tokens": 4096
          },
          {
            "id": "gpt-4",
            "display_name": "GPT-4",
            "author_id": "openai",
            "released_at": "2023-03-14",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "gpt-4-0314",
              "gpt-4-0613"
            ],
            "modalities": [
              "text"
            ],
            "max_context_window": 8192,
            "max_output_tokens": 8192
          },
          {
            "id": "gpt-3.5-turbo",
            "display_name": "GPT-3.5 Turbo",
            "author_id": "openai",
            "released_at": "2022-11-30",
            "deprecated_at": "2025-09-26",
            "retired_at": null,
            "aliases": [
              "gpt-3.5-turbo-0125",
              "gpt-3.5-turbo-16k"
            ],
            "modalities": [
              "text"
            ],
            "max_context_window": 16385,
            "max_output_tokens": 4096
          }
        ]
      },
      {
        "id": "anthropic",
        "slug": "anthropic",
        "display_name": "Anthropic",
        "base_url": "https://api.anthropic.com/v1/",
        "website": "https://anthropic.com/",
        "aliases": [
          "Anthropic"
        ],
        "provider_key_required": false,
        "description": "Anthropic is an AI safety startup focused on developing safe, beneficial AI systems. Known for the Claude family of large language models.",
        "models": [
          {
            "id": "claude-sonnet-5",
            "display_name": "Claude Sonnet 5",
            "author_id": "anthropic",
            "released_at": "2026-06-30",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "claude-sonnet-5-20260630",
              "claude-sonnet.5"
            ],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 1000000,
            "max_output_tokens": 128000
          },
          {
            "id": "claude-fable-5",
            "display_name": "Claude Fable 5",
            "author_id": "anthropic",
            "released_at": "2026-06-09",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "claude-fable-5-20260609",
              "claude-fable.5"
            ],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 1000000,
            "max_output_tokens": 128000
          },
          {
            "id": "claude-opus-4-8",
            "display_name": "Claude Opus 4.8",
            "author_id": "anthropic",
            "released_at": "2026-05-28",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "claude-opus-4-8-20260528",
              "claude-opus-4.8"
            ],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 1000000,
            "max_output_tokens": 128000
          },
          {
            "id": "claude-opus-4-7",
            "display_name": "Claude Opus 4.7",
            "author_id": "anthropic",
            "released_at": "2026-04-16",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "claude-opus-4-7-20260416",
              "claude-opus-4.7"
            ],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 1000000,
            "max_output_tokens": 128000
          },
          {
            "id": "claude-sonnet-4-6",
            "display_name": "Claude Sonnet 4.6",
            "author_id": "anthropic",
            "released_at": "2026-02-17",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "claude-sonnet-4-6-20260217",
              "claude-sonnet-4.6"
            ],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 1000000,
            "max_output_tokens": 64000
          },
          {
            "id": "claude-opus-4-6",
            "display_name": "Claude Opus 4.6",
            "author_id": "anthropic",
            "released_at": "2026-02-05",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "claude-opus-4-6-20260205",
              "claude-opus-4.6"
            ],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 1000000,
            "max_output_tokens": 128000
          },
          {
            "id": "claude-opus-4-5",
            "display_name": "Claude Opus 4.5",
            "author_id": "anthropic",
            "released_at": "2025-11-24",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "claude-opus-4-5-20251101",
              "claude-opus-4.5"
            ],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 200000,
            "max_output_tokens": 64000
          },
          {
            "id": "claude-haiku-4-5",
            "display_name": "Claude Haiku 4.5",
            "author_id": "anthropic",
            "released_at": "2025-10-01",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "claude-haiku-4-5-20251001",
              "claude-haiku-4.5"
            ],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 200000,
            "max_output_tokens": 64000
          },
          {
            "id": "claude-sonnet-4-5",
            "display_name": "Claude Sonnet 4.5",
            "author_id": "anthropic",
            "released_at": "2025-09-29",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "claude-sonnet-4-5-20250929",
              "claude-sonnet-4.5"
            ],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 200000,
            "max_output_tokens": 64000
          },
          {
            "id": "claude-opus-4-1",
            "display_name": "Claude Opus 4.1",
            "author_id": "anthropic",
            "released_at": "2025-08-05",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "claude-opus-4-1-20250805",
              "claude-opus-4.1"
            ],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 200000,
            "max_output_tokens": 32000
          }
        ]
      },
      {
        "id": "google",
        "slug": "google",
        "display_name": "Google",
        "base_url": "https://generativelanguage.googleapis.com/v1beta/openai/",
        "website": "https://aistudio.google.com/",
        "aliases": [
          "Google",
          "gemini"
        ],
        "provider_key_required": true,
        "description": "Google's AI services including Gemini models for natural language understanding, generation, and multimodal AI applications.",
        "models": [
          {
            "id": "gemini-3.5-flash",
            "display_name": "Gemini 3.5 Flash",
            "author_id": "google",
            "released_at": "2026-05-19",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [],
            "modalities": [
              "text",
              "image",
              "audio",
              "video",
              "file"
            ],
            "max_context_window": 1048576,
            "max_output_tokens": 65536
          },
          {
            "id": "gemini-3.1-flash-lite",
            "display_name": "Gemini 3.1 Flash-Lite",
            "author_id": "google",
            "released_at": "2026-05-07",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [],
            "modalities": [
              "text",
              "image",
              "audio",
              "video",
              "file"
            ],
            "max_context_window": 1048576,
            "max_output_tokens": 65536
          },
          {
            "id": "gemini-3.1-pro-preview",
            "display_name": "Gemini 3.1 Pro Preview",
            "author_id": "google",
            "released_at": "2026-02-19",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "gemini-3.1-pro"
            ],
            "modalities": [
              "text",
              "image",
              "audio",
              "video",
              "file"
            ],
            "max_context_window": 1048576,
            "max_output_tokens": 65536
          },
          {
            "id": "gemini-2.5-flash-lite",
            "display_name": "Gemini 2.5 Flash-Lite",
            "author_id": "google",
            "released_at": "2025-06-17",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [],
            "modalities": [
              "text",
              "image",
              "audio",
              "video",
              "file"
            ],
            "max_context_window": 1048576,
            "max_output_tokens": 65536
          },
          {
            "id": "gemini-2.5-flash",
            "display_name": "Gemini 2.5 Flash",
            "author_id": "google",
            "released_at": "2025-06-17",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [],
            "modalities": [
              "text",
              "image",
              "audio",
              "video",
              "file"
            ],
            "max_context_window": 1048576,
            "max_output_tokens": 65536
          },
          {
            "id": "gemini-2.5-pro",
            "display_name": "Gemini 2.5 Pro",
            "author_id": "google",
            "released_at": "2025-06-17",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "gemini-2.5-pro"
            ],
            "modalities": [
              "text",
              "image",
              "audio",
              "video",
              "file"
            ],
            "max_context_window": 1048576,
            "max_output_tokens": 65536
          }
        ]
      },
      {
        "id": "deepseek",
        "slug": "deepseek",
        "display_name": "DeepSeek",
        "base_url": "https://api.deepseek.com/v1",
        "website": "https://www.deepseek.com/",
        "aliases": [
          "DeepSeek",
          "deep-seek"
        ],
        "provider_key_required": true,
        "description": "DeepSeek is an AI company focused on advancing artificial general intelligence through cutting-edge research and development of large language models.",
        "models": [
          {
            "id": "deepseek-v4-flash",
            "display_name": "deepseek-v4-flash",
            "author_id": "deepseek",
            "released_at": "2026-04-24",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [],
            "modalities": [
              "text"
            ],
            "max_context_window": 1000000,
            "max_output_tokens": 384000
          },
          {
            "id": "deepseek-v4-pro",
            "display_name": "deepseek-v4-pro",
            "author_id": "deepseek",
            "released_at": "2026-04-24",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [],
            "modalities": [
              "text"
            ],
            "max_context_window": 1000000,
            "max_output_tokens": 384000
          }
        ]
      },
      {
        "id": "groq",
        "slug": "groq",
        "display_name": "Groq",
        "base_url": "https://api.groq.com/openai/v1",
        "website": "https://groq.com/",
        "aliases": [
          "Groq",
          "GroqCloud"
        ],
        "provider_key_required": true,
        "description": "Groq provides ultra-fast AI inference powered by their custom LPU (Language Processing Unit) hardware, offering the fastest token generation speeds for large language models.",
        "models": [
          {
            "id": "gpt-oss-safeguard-20b",
            "display_name": "Safety GPT OSS 20B",
            "author_id": "openai",
            "released_at": "2025-08-05",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [],
            "modalities": [
              "text"
            ],
            "max_context_window": 131072,
            "max_output_tokens": 65536
          },
          {
            "id": "gpt-oss-20b",
            "display_name": "GPT OSS 20B",
            "author_id": "openai",
            "released_at": "2025-08-05",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "GPT-OSS-20B",
              "gpt-oss-20b"
            ],
            "modalities": [
              "text"
            ],
            "max_context_window": 131072,
            "max_output_tokens": 65536
          },
          {
            "id": "gpt-oss-120b",
            "display_name": "GPT OSS 120B",
            "author_id": "openai",
            "released_at": "2025-08-05",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "GPT-OSS-120B",
              "gpt-oss-120b"
            ],
            "modalities": [
              "text"
            ],
            "max_context_window": 131072,
            "max_output_tokens": 131072
          },
          {
            "id": "qwen3-32b",
            "display_name": "Qwen3-32B",
            "author_id": "qwen",
            "released_at": "2025-04-29",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [],
            "modalities": [
              "text"
            ],
            "max_context_window": 131072,
            "max_output_tokens": 40960
          },
          {
            "id": "llama-prompt-guard-2-86m",
            "display_name": "Llama Prompt Guard 2 86M",
            "author_id": "meta-llama",
            "released_at": "2025-04-29",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [],
            "modalities": [
              "text"
            ],
            "max_context_window": 512,
            "max_output_tokens": 512
          },
          {
            "id": "llama-prompt-guard-2-22m",
            "display_name": "Llama Prompt Guard 2 22M",
            "author_id": "meta-llama",
            "released_at": "2025-04-29",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [],
            "modalities": [
              "text"
            ],
            "max_context_window": 512,
            "max_output_tokens": 512
          },
          {
            "id": "llama-4-scout-17b-16e-instruct",
            "display_name": "Llama 4 Scout 17B 16E Instruct",
            "author_id": "meta-llama",
            "released_at": "2025-04-05",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "llama-4-scout-17b-16e"
            ],
            "modalities": [
              "text",
              "image"
            ],
            "max_context_window": 131072,
            "max_output_tokens": 8192
          },
          {
            "id": "llama-3.3-70b-versatile",
            "display_name": "Llama 3.3 70B Versatile",
            "author_id": "meta-llama",
            "released_at": "2024-12-06",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "llama-3.3-70b"
            ],
            "modalities": [
              "text"
            ],
            "max_context_window": 131072,
            "max_output_tokens": 32768
          },
          {
            "id": "llama-3.1-8b-instant",
            "display_name": "Llama 3.1 8B Instant",
            "author_id": "meta-llama",
            "released_at": "2024-07-23",
            "deprecated_at": null,
            "retired_at": null,
            "aliases": [
              "llama-3.1-8b"
            ],
            "modalities": [
              "text"
            ],
            "max_context_window": 131072,
            "max_output_tokens": 131072
          }
        ]
      },
      {
        "id": "openrouter",
        "slug": "openrouter",
        "display_name": "OpenRouter",
        "base_url": "https://openrouter.ai/api/v1",
        "website": "https://openrouter.ai/",
        "aliases": [
          "OpenRouter",
          "open-router"
        ],
        "provider_key_required": true,
        "description": "OpenRouter is an AI model router that provides access to multiple AI providers and models through a unified API interface with competitive pricing.",
        "models": []
      },
      {
        "id": "hyperbolic",
        "slug": "hyperbolic",
        "display_name": "Hyperbolic",
        "base_url": "https://api.hyperbolic.xyz/v1",
        "website": "https://hyperbolic.xyz/",
        "aliases": [
          "Hyperbolic"
        ],
        "provider_key_required": true,
        "description": "Hyperbolic provides high-performance AI inference services with fast response times and competitive pricing for various language models.",
        "models": []
      },
      {
        "id": "inceptionlabs",
        "slug": "inceptionlabs",
        "display_name": "InceptionLabs",
        "base_url": "https://api.inceptionlabs.ai/v1",
        "website": "https://inceptionlabs.ai/",
        "aliases": [
          "InceptionLabs",
          "inception-labs",
          "inception"
        ],
        "provider_key_required": true,
        "description": "InceptionLabs provides AI infrastructure and model serving capabilities for various language models with focus on performance and reliability.",
        "models": []
      },
      {
        "id": "inference.net",
        "slug": "inference-net",
        "display_name": "Inference.net",
        "base_url": "https://api.inference.net/v1",
        "website": "https://inference.net/",
        "aliases": [
          "inference-net",
          "inference_net",
          "InferenceNet"
        ],
        "provider_key_required": true,
        "description": "Inference.net provides AI model inference services with competitive pricing and performance for various language models.",
        "models": []
      }
    ],
    "aliases": {
      "provider_aliases": [
        {
          "provider_id": "openai",
          "aliases": [
            "openAI",
            "open-ai",
            "open-AI"
          ]
        },
        {
          "provider_id": "anthropic",
          "aliases": [
            "Anthropic"
          ]
        },
        {
          "provider_id": "google",
          "aliases": [
            "Google",
            "gemini"
          ]
        },
        {
          "provider_id": "deepseek",
          "aliases": [
            "DeepSeek",
            "deep-seek"
          ]
        },
        {
          "provider_id": "groq",
          "aliases": [
            "Groq",
            "GroqCloud"
          ]
        },
        {
          "provider_id": "openrouter",
          "aliases": [
            "OpenRouter",
            "open-router"
          ]
        },
        {
          "provider_id": "hyperbolic",
          "aliases": [
            "Hyperbolic"
          ]
        },
        {
          "provider_id": "inceptionlabs",
          "aliases": [
            "InceptionLabs",
            "inception-labs",
            "inception"
          ]
        },
        {
          "provider_id": "inference.net",
          "aliases": [
            "inference-net",
            "inference_net",
            "InferenceNet"
          ]
        }
      ],
      "model_alias_groups": [
        {
          "author_id": "anthropic",
          "author_display_name": "Anthropic",
          "aliases": [
            {
              "alias": "claude-sonnet-5-20260630",
              "resolves_to": "claude-sonnet-5"
            },
            {
              "alias": "claude-sonnet.5",
              "resolves_to": "claude-sonnet-5"
            },
            {
              "alias": "claude-fable-5-20260609",
              "resolves_to": "claude-fable-5"
            },
            {
              "alias": "claude-fable.5",
              "resolves_to": "claude-fable-5"
            },
            {
              "alias": "claude-opus-4-8-20260528",
              "resolves_to": "claude-opus-4-8"
            },
            {
              "alias": "claude-opus-4.8",
              "resolves_to": "claude-opus-4-8"
            },
            {
              "alias": "claude-opus-4-7-20260416",
              "resolves_to": "claude-opus-4-7"
            },
            {
              "alias": "claude-opus-4.7",
              "resolves_to": "claude-opus-4-7"
            },
            {
              "alias": "claude-sonnet-4-6-20260217",
              "resolves_to": "claude-sonnet-4-6"
            },
            {
              "alias": "claude-sonnet-4.6",
              "resolves_to": "claude-sonnet-4-6"
            },
            {
              "alias": "claude-opus-4-6-20260205",
              "resolves_to": "claude-opus-4-6"
            },
            {
              "alias": "claude-opus-4.6",
              "resolves_to": "claude-opus-4-6"
            },
            {
              "alias": "claude-opus-4-5-20251101",
              "resolves_to": "claude-opus-4-5"
            },
            {
              "alias": "claude-opus-4.5",
              "resolves_to": "claude-opus-4-5"
            },
            {
              "alias": "claude-haiku-4-5-20251001",
              "resolves_to": "claude-haiku-4-5"
            },
            {
              "alias": "claude-haiku-4.5",
              "resolves_to": "claude-haiku-4-5"
            },
            {
              "alias": "claude-sonnet-4-5-20250929",
              "resolves_to": "claude-sonnet-4-5"
            },
            {
              "alias": "claude-sonnet-4.5",
              "resolves_to": "claude-sonnet-4-5"
            },
            {
              "alias": "claude-opus-4-1-20250805",
              "resolves_to": "claude-opus-4-1"
            },
            {
              "alias": "claude-opus-4.1",
              "resolves_to": "claude-opus-4-1"
            }
          ]
        },
        {
          "author_id": "google",
          "author_display_name": "Google",
          "aliases": [
            {
              "alias": "gemini-3.1-pro",
              "resolves_to": "gemini-3.1-pro-preview"
            }
          ]
        },
        {
          "author_id": "meta-llama",
          "author_display_name": "Meta",
          "aliases": [
            {
              "alias": "llama-4-scout-17b-16e",
              "resolves_to": "llama-4-scout-17b-16e-instruct"
            },
            {
              "alias": "llama-3.3-70b",
              "resolves_to": "llama-3.3-70b-versatile"
            },
            {
              "alias": "llama-3.1-8b",
              "resolves_to": "llama-3.1-8b-instant"
            }
          ]
        },
        {
          "author_id": "openai",
          "author_display_name": "OpenAI",
          "aliases": [
            {
              "alias": "gpt-5.5-pro-2026-04-23",
              "resolves_to": "gpt-5.5-pro"
            },
            {
              "alias": "gpt-5.5-2026-04-23",
              "resolves_to": "gpt-5.5"
            },
            {
              "alias": "gpt-5.4-nano-2026-03-17",
              "resolves_to": "gpt-5.4-nano"
            },
            {
              "alias": "gpt-5.4-mini-2026-03-17",
              "resolves_to": "gpt-5.4-mini"
            },
            {
              "alias": "gpt-5.3-codex-2026-03-05",
              "resolves_to": "gpt-5.3-codex"
            },
            {
              "alias": "gpt5.3-codex",
              "resolves_to": "gpt-5.3-codex"
            },
            {
              "alias": "gpt-5.4-pro-2026-03-05",
              "resolves_to": "gpt-5.4-pro"
            },
            {
              "alias": "gpt-5.4-2026-03-05",
              "resolves_to": "gpt-5.4"
            },
            {
              "alias": "gpt5.2-codex",
              "resolves_to": "gpt-5.2-codex"
            },
            {
              "alias": "gpt-5.2-pro-2025-12-11",
              "resolves_to": "gpt-5.2-pro"
            },
            {
              "alias": "gpt-5.1-2025-11-13",
              "resolves_to": "gpt-5.1"
            },
            {
              "alias": "gpt-5-pro-2025-10-06",
              "resolves_to": "gpt-5-pro"
            },
            {
              "alias": "GPT-5 Chat",
              "resolves_to": "gpt-5-chat-latest"
            },
            {
              "alias": "GPT-5-chat",
              "resolves_to": "gpt-5-chat-latest"
            },
            {
              "alias": "gpt-5-chat-latest-2025-08-07",
              "resolves_to": "gpt-5-chat-latest"
            },
            {
              "alias": "GPT-5 nano",
              "resolves_to": "gpt-5-nano"
            },
            {
              "alias": "gpt-5-nano-2025-08-07",
              "resolves_to": "gpt-5-nano"
            },
            {
              "alias": "GPT-5 mini",
              "resolves_to": "gpt-5-mini"
            },
            {
              "alias": "gpt-5-mini-2025-08-07",
              "resolves_to": "gpt-5-mini"
            },
            {
              "alias": "gpt-5-2025-08-07",
              "resolves_to": "gpt-5"
            },
            {
              "alias": "o4-mini-deep-research-2025-06-26",
              "resolves_to": "o4-mini-deep-research"
            },
            {
              "alias": "o3-deep-research-2025-06-25",
              "resolves_to": "o3-deep-research"
            },
            {
              "alias": "o3-pro-2025-06-10",
              "resolves_to": "o3-pro"
            },
            {
              "alias": "o3-2025-04-16",
              "resolves_to": "o3"
            },
            {
              "alias": "o4-mini-2025-04-16",
              "resolves_to": "o4-mini"
            },
            {
              "alias": "gpt-4.1-nano-2025-04-14",
              "resolves_to": "gpt-4.1-nano"
            },
            {
              "alias": "gpt-4.1-mini-2025-04-14",
              "resolves_to": "gpt-4.1-mini"
            },
            {
              "alias": "gpt-4.1-2025-04-14",
              "resolves_to": "gpt-4.1"
            },
            {
              "alias": "o3-mini-2025-01-31",
              "resolves_to": "o3-mini"
            },
            {
              "alias": "o1-2024-12-17",
              "resolves_to": "o1"
            },
            {
              "alias": "o1-pro-2025-03-19",
              "resolves_to": "o1-pro"
            },
            {
              "alias": "gpt-4o-mini-2024-07-18",
              "resolves_to": "gpt-4o-mini"
            },
            {
              "alias": "chatgpt-4o-latest",
              "resolves_to": "gpt-4o"
            },
            {
              "alias": "gpt-4-omni",
              "resolves_to": "gpt-4o"
            },
            {
              "alias": "gpt-4o-2024-08-06",
              "resolves_to": "gpt-4o"
            },
            {
              "alias": "gpt-4o-2024-11-20",
              "resolves_to": "gpt-4o"
            },
            {
              "alias": "gpt-4-0125-preview",
              "resolves_to": "gpt-4-turbo"
            },
            {
              "alias": "gpt-4-1106-preview",
              "resolves_to": "gpt-4-turbo"
            },
            {
              "alias": "gpt-4-turbo-2024-04-09",
              "resolves_to": "gpt-4-turbo"
            },
            {
              "alias": "gpt-4-turbo-preview",
              "resolves_to": "gpt-4-turbo"
            },
            {
              "alias": "gpt-4-0314",
              "resolves_to": "gpt-4"
            },
            {
              "alias": "gpt-4-0613",
              "resolves_to": "gpt-4"
            },
            {
              "alias": "gpt-3.5-turbo-0125",
              "resolves_to": "gpt-3.5-turbo"
            },
            {
              "alias": "gpt-3.5-turbo-16k",
              "resolves_to": "gpt-3.5-turbo"
            }
          ]
        }
      ]
    },
    "summary": {
      "provider_count": 9,
      "model_count": 62
    }
  }
  //-- GENERATED PROVIDERS DATA END --//;

  /*
   * Presentation-only copy overrides
   */
  const PROVIDER_COPY_OVERRIDES = Object.freeze({
    openai: "", // Previously manually updated page had no description
    anthropic: "", // Previously manually updated page had no description
    google: "", // Previously manually updated page had no description
    deepseek: "", // Previously manually updated page had no description
  });

  /*
   * Some model notes in the old hard-coded doc were hand-written rather than derivable
   * from the source catalog. Keep those doc-specific annotations here so we can preserve
   * reader-facing wording without teaching the build step about presentation concerns.
   */
  const MODEL_COPY_OVERRIDES = Object.freeze({
    "openai/gpt-3.5-turbo": {
      notes: ["deprecated", "retires September 28, 2026"],
    },
  });

  /*
   * These rows restore legacy models that were shown in the old hard-coded page but are
   * no longer present in the current generated catalog. They are intentionally manual and
   * component-local so docs can keep backward-looking context without mutating source data.
   */
  const EXTRA_MODELS_BY_PROVIDER = Object.freeze({
    anthropic: [
      {
        author_id: "anthropic",
        id: "claude-sonnet-4-0",
        display_name: "Claude Sonnet 4",
        max_context_window: 1000000,
        max_output_tokens: 64000,
        modalities: ["text", "image"],
      },
      {
        author_id: "anthropic",
        id: "claude-opus-4-0",
        display_name: "Claude Opus 4",
        max_context_window: 200000,
        max_output_tokens: 32000,
        modalities: ["text", "image"],
      },
      {
        author_id: "anthropic",
        id: "claude-3-haiku-20240307",
        display_name: "Claude Haiku 3",
        max_context_window: 200000,
        max_output_tokens: 4096,
        modalities: ["text", "image"],
        notes: ["deprecated", "retires April 20, 2026"],
      },
    ],
    google: [
      {
        author_id: "google",
        id: "gemini-2.0-flash",
        display_name: "Gemini 2.0 Flash",
        max_context_window: 1048576,
        max_output_tokens: 8192,
        modalities: ["text", "image", "audio", "video", "file"],
      },
      {
        author_id: "google",
        id: "gemini-2.0-flash-lite",
        display_name: "Gemini 2.0 Flash-Lite",
        max_context_window: 1048576,
        max_output_tokens: 8192,
        modalities: ["text", "image", "audio", "video", "file"],
      },
      {
        author_id: "google",
        id: "gemini-3-pro-preview",
        display_name: "Gemini 3 Pro Preview",
        max_context_window: 1000000,
        max_output_tokens: 65536,
        modalities: ["text", "image", "audio", "video", "file"],
      },
    ],
    deepseek: [
      {
        author_id: "deepseek",
        id: "deepseek-reasoner",
        display_name: "deepseek-reasoner",
        max_context_window: 128000,
        max_output_tokens: 64000,
        modalities: ["text"],
      },
      {
        author_id: "deepseek",
        id: "deepseek-chat",
        display_name: "deepseek-chat",
        max_context_window: 128000,
        max_output_tokens: 8192,
        modalities: ["text"],
      },
    ],
    groq: [
      {
        author_id: "meta-llama",
        id: "llama-guard-4-12b",
        display_name: "Llama Guard 4 12B",
        max_context_window: 131072,
        max_output_tokens: 1024,
        modalities: ["text", "image"],
      },
      {
        author_id: "meta-llama",
        id: "llama-4-maverick-17b-128e-instruct",
        display_name: "Llama 4 Maverick 17B 128E Instruct",
        max_context_window: 131072,
        max_output_tokens: 8192,
        modalities: ["text", "image"],
      },
      {
        author_id: "moonshotai",
        id: "moonshotai/kimi-k2-instruct-0905",
        display_name: "Kimi K2",
        max_context_window: 262144,
        max_output_tokens: 16384,
        modalities: ["text"],
      },
    ],
  });

  /*
   * These alias rows preserve legacy docs entries not present in the current catalog data.
   */
  const EXTRA_MODEL_ALIASES_BY_PROVIDER = Object.freeze({
    anthropic: [
      {
        alias: "claude-sonnet-4-20250514",
        resolves_to: "claude-sonnet-4-0",
      },
      {
        alias: "claude-sonnet-4",
        resolves_to: "claude-sonnet-4-0",
      },
      {
        alias: "claude-opus-4-20250514",
        resolves_to: "claude-opus-4-0",
      },
      {
        alias: "claude-opus-4",
        resolves_to: "claude-opus-4-0",
      },
      {
        alias: "claude-haiku-3",
        resolves_to: "claude-3-haiku-20240307",
      },
    ],
    google: [
      {
        alias: "gemini-3",
        resolves_to: "gemini-3-pro-preview",
      },
      {
        alias: "gemini-3-pro",
        resolves_to: "gemini-3-pro-preview",
      },
    ],
    "meta-llama": [
      {
        alias: "llama-4-maverick-17b-128e",
        resolves_to: "llama-4-maverick-17b-128e-instruct",
      },
    ],
    moonshotai: [
      {
        alias: "kimi-k2-instruct",
        resolves_to: "kimi-k2",
      },
      {
        alias: "kimi-k2-instruct-0905",
        resolves_to: "kimi-k2",
      },
      {
        alias: "moonshotai/kimi-k2-instruct-0905",
        resolves_to: "kimi-k2",
      },
    ],
  });

  const EXTRA_MODEL_ALIAS_DISPLAY_NAMES = Object.freeze({
    moonshotai: "Moonshot AI",
  });

  const PROVIDER_MODEL_DISPLAY_FORMAT = Object.freeze({
    default: "provider:author/model",
    openai: "author/model",
    anthropic: "author/model",
    google: "author/model",
    deepseek: "author/model",
  });

  function formatWebsiteLabel(website) {
    return String(website)
      .replace(/^https?:\/\//, "")
      .replace(/^www\./, "")
      .replace(/\/$/, "");
  }

  function formatLongDate(value) {
    const [year, month, day] = String(value).split("-").map(Number);
    return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString(
      "en-US",
      {
        day: "numeric",
        month: "long",
        timeZone: "UTC",
        year: "numeric",
      },
    );
  }

  function formatNumber(value) {
    if (value === null || value === undefined || value === "") {
      return "-";
    }

    return typeof value === "number"
      ? value.toLocaleString("en-US")
      : String(value);
  }

  function formatCanonicalModelId(authorId, modelId) {
    return modelId.startsWith(`${authorId}/`)
      ? modelId
      : `${authorId}/${modelId}`;
  }

  function getProviderModelDisplayFormat(providerId) {
    return (
      PROVIDER_MODEL_DISPLAY_FORMAT[providerId] ??
      PROVIDER_MODEL_DISPLAY_FORMAT.default
    );
  }

  function formatDisplayedModelId(providerId, authorId, modelId) {
    const canonicalModelId = formatCanonicalModelId(authorId, modelId);
    const displayFormat = getProviderModelDisplayFormat(providerId);

    if (displayFormat === "provider:author/model") {
      return `${providerId}:${canonicalModelId}`;
    }

    if (displayFormat === "author/model") {
      return canonicalModelId;
    }

    if (displayFormat === "model") {
      return modelId;
    }

    throw new Error(
      `Unknown provider model display format for ${providerId}: ${displayFormat}`,
    );
  }

  function parseQualifiedModelId(value) {
    const separatorIndex = value.indexOf(":");

    if (separatorIndex === -1) {
      return null;
    }

    const providerId = value.slice(0, separatorIndex);
    const canonicalModelId = value.slice(separatorIndex + 1);
    const slashIndex = canonicalModelId.indexOf("/");

    if (slashIndex === -1) {
      return {
        providerId,
        authorId: canonicalModelId,
        modelId: canonicalModelId,
      };
    }

    return {
      providerId,
      authorId: canonicalModelId.slice(0, slashIndex),
      modelId: canonicalModelId,
    };
  }

  function formatDisplayedAliasTarget(value) {
    const parsed = parseQualifiedModelId(value);

    if (!parsed) {
      return value;
    }

    return parsed.modelId;
  }

  function normalizeAliasEntry(entry) {
    const resolvesTo = formatDisplayedAliasTarget(entry.resolves_to);

    if (entry.alias.toLowerCase() === resolvesTo.toLowerCase()) {
      return null;
    }

    return {
      ...entry,
      resolves_to: resolvesTo,
    };
  }

  function buildPresentationModel(provider, model) {
    const override = MODEL_COPY_OVERRIDES[`${provider.id}/${model.id}`];
    const notes = [];

    if (model.deprecated_at) {
      notes.push("deprecated");
    }

    if (model.retired_at) {
      notes.push(`retires ${formatLongDate(model.retired_at)}`);
    }

    const presentationNotes = override?.notes ?? model.notes ?? notes;

    return {
      ...model,
      displayedId: formatDisplayedModelId(
        provider.id,
        model.author_id,
        model.id,
      ),
      contextWindow: formatNumber(model.max_context_window),
      outputTokens: formatNumber(model.max_output_tokens),
      notes: presentationNotes,
    };
  }

  function getExtraModels(provider) {
    const generatedModelIds = new Set(provider.models.map((model) => model.id));

    return (EXTRA_MODELS_BY_PROVIDER[provider.id] ?? [])
      .filter((model) => !generatedModelIds.has(model.id))
      .map((model) => buildPresentationModel(provider, model));
  }

  // Keep the component API tiny by turning a provider id into a render-ready view model.
  function getProvider(id) {
    const provider = aiGatewayModelCatalog.providers.find(
      (entry) => entry.id === id,
    );

    if (!provider) {
      throw new Error(`Unknown AI Gateway model catalog provider: ${id}`);
    }

    return {
      ...provider,
      guideHref: `/ai-gateway/providers/${provider.slug}`,
      websiteLabel: provider.website
        ? formatWebsiteLabel(provider.website)
        : null,
      copy: {
        description:
          PROVIDER_COPY_OVERRIDES[provider.id] ?? provider.description ?? "",
      },
      models: [
        ...provider.models.map((model) =>
          buildPresentationModel(provider, model),
        ),
        ...getExtraModels(provider),
      ],
    };
  }

  function getAliasesData() {
    const generatedGroups =
      aiGatewayModelCatalog.aliases?.model_alias_groups ?? [];
    const groupsByAuthorId = new Map(
      generatedGroups.map((group) => [
        group.author_id,
        {
          ...group,
          aliases: group.aliases
            .map(normalizeAliasEntry)
            .filter(Boolean),
        },
      ]),
    );

    for (const [authorId, aliases] of Object.entries(
      EXTRA_MODEL_ALIASES_BY_PROVIDER,
    )) {
      const group = groupsByAuthorId.get(authorId) ?? {
        author_id: authorId,
        author_display_name:
          EXTRA_MODEL_ALIAS_DISPLAY_NAMES[authorId] ?? authorId,
        aliases: [],
      };

      group.aliases.push(...aliases);
      group.aliases = [
        ...new Map(
          group.aliases
            .map(normalizeAliasEntry)
            .filter(Boolean)
            .map((entry) => [`${entry.alias}\u0000${entry.resolves_to}`, entry]),
        ).values(),
      ];

      groupsByAuthorId.set(authorId, group);
    }

    return {
      providerAliases: aiGatewayModelCatalog.aliases?.provider_aliases ?? [],
      modelAliasGroups: [...groupsByAuthorId.values()].sort(
        (left, right) =>
          left.author_display_name.localeCompare(right.author_display_name) ||
          left.author_id.localeCompare(right.author_id),
      ),
    };
  }

  if (section === "provider-aliases") {
    const aliases = getAliasesData();

    return (
      <>
        {aliases.providerAliases.length > 0 ? (
          <>
            <h3>Provider aliases</h3>
            <table>
              <thead>
                <tr>
                  <th>Provider ID</th>
                  <th>Aliases</th>
                </tr>
              </thead>
              <tbody>
                {aliases.providerAliases.map((provider) => (
                  <tr key={provider.provider_id}>
                    <td>
                      <code>{provider.provider_id}</code>
                    </td>
                    <td>
                      {provider.aliases.map((alias, index) => (
                        <span key={alias}>
                          {index > 0 ? ", " : null}
                          <code>{alias}</code>
                        </span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : null}
      </>
    );
  }

  if (section === "model-aliases") {
    const aliases = getAliasesData();
    const group = aliases.modelAliasGroups.find(
      (entry) => entry.author_id === authorId,
    );

    if (!group) {
      throw new Error(`Unknown AI Gateway model alias group: ${authorId}`);
    }

    return (
      <>
        <h3>{group.author_display_name} model aliases</h3>
        <table>
          <thead>
            <tr>
              <th>Alias</th>
              <th>Resolves to</th>
            </tr>
          </thead>
          <tbody>
            {group.aliases.map((entry) => (
              <tr key={`${entry.alias}:${entry.resolves_to}`}>
                <td>
                  <code>{entry.alias}</code>
                </td>
                <td>
                  <code>{formatDisplayedAliasTarget(entry.resolves_to)}</code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }

  const provider = getProvider(providerId);

  return (
    <>
      <h3 id={provider.slug}>{provider.display_name}</h3>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Provider ID</strong>
            </td>
            <td>
              <code>
                {provider.id === "inference.net" ? provider.slug : provider.id}
              </code>
            </td>
          </tr>
          {provider.aliases.length > 0 ? (
            <tr>
              <td>
                <strong>Aliases</strong>
              </td>
              <td>
                {provider.aliases.map((alias, index) => (
                  <span key={alias}>
                    {index > 0 ? ", " : null}
                    <code>{alias}</code>
                  </span>
                ))}
              </td>
            </tr>
          ) : null}
          {provider.base_url ? (
            <tr>
              <td>
                <strong>Base URL</strong>
              </td>
              <td>
                <code>{provider.base_url}</code>
              </td>
            </tr>
          ) : null}
          {provider.website ? (
            <tr>
              <td>
                <strong>Website</strong>
              </td>
              <td>
                <a href={provider.website}>{provider.websiteLabel}</a>
              </td>
            </tr>
          ) : null}
          <tr>
            <td>
              <strong>Provider key required</strong>
            </td>
            <td>{provider.provider_key_required ? "Yes" : "No"}</td>
          </tr>
        </tbody>
      </table>
      <p>
        <a href={provider.guideHref}>How to use {provider.display_name} →</a>
      </p>
      {provider.copy.description ? <p>{provider.copy.description}</p> : null}
      {provider.models.length > 0 ? (
        <>
          <h4>{provider.display_name} models</h4>
          {/* Keep lower-signal columns nearby for easy restoration if we decide
              the table can afford more width than long canonical IDs allow today. */}
          <table>
            <thead>
              <tr>
                <th>Model ID</th>
                {/* <th>Display Name</th> */}
                <th>Context Window</th>
                <th>Output Tokens</th>
                {/* <th>Modalities</th> */}
              </tr>
            </thead>
            <tbody>
              {provider.models.map((model) => (
                <tr key={model.id}>
                  <td>
                    <code>{model.displayedId}</code>
                  </td>
                  {/* <td>
                    {model.display_name}
                    {model.notes.length > 0 ? (
                      <>
                        {" "}
                        <em>({model.notes.join(", ")})</em>
                      </>
                    ) : null}
                  </td> */}
                  <td>{model.contextWindow}</td>
                  <td>{model.outputTokens}</td>
                  {/* <td>{model.modalities}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
    </>
  );
};

export const AIGatewayModelCatalogProviderAliases = () => (
  <AIGatewayModelCatalogProvider section="provider-aliases" />
);

export const AIGatewayModelCatalogModelAliases = ({ authorId }) => (
  <AIGatewayModelCatalogProvider section="model-aliases" authorId={authorId} />
);
