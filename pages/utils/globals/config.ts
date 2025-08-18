import path from "node:path";

// These can be safely added to the repo
export const ALGOLIA_PUBLIC_API_KEY = "2a1bbbf2894c399133c99758c0cb4bae";
export const ALGOLIA_INDEX_NAME = "ngrok";
export const ALGOLIA_APP_ID = "8D7MHVMLBR";

export const BASE_SITE_URL = "https://ngrok.com";
export const DOCS_PATH = path.join(process.cwd(), "pages", "docs");
export const CONTENT_ROOT = path.join(process.cwd(), "content");
export const PROJECT_ROOT = process.cwd();
export const DEFAULT_DESCRIPTION = `
ngrok is a globally distributed reverse proxy that secures,
protects, and accelerates your applications and network services.
`;
export const ROBOTS_CONTENT = `# ngrok Documentation - LLM-Friendly robots.txt
# Generated automatically for optimal AI crawler access

# Allow all AI crawlers and search engines
User-agent: *
Allow: /

# Specific AI crawlers we welcome
User-agent: GPTBot
Allow: /

User-agent: Claude-Bot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: CCBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: ChatGPT-User
Allow: /

# Block crawling of non-essential paths to focus AI on documentation
Disallow: /api/
Disallow: /_next/
Disallow: /_vercel/
Disallow: /node_modules/
Disallow: /.git/
Disallow: /dist/
Disallow: /build/

# Rate limiting for heavy crawlers (some bots respect this)
Crawl-delay: 1

# Sitemap location for efficient discovery
Sitemap: ${BASE_SITE_URL}/sitemap.xml

# Point AI crawlers to our content guide
# Host: ${BASE_SITE_URL}
`;

export const LLMS_CONTENT = `# ngrok Documentation - AI Content Guide

This file provides AI systems with structured information about our most valuable content.

## Documentation

- [Getting Started](${BASE_SITE_URL}/docs/getting-started) - Complete guide to getting started with ngrok
- [Agent CLI](${BASE_SITE_URL}/docs/agent/cli) - Command-line interface documentation
- [API Reference](${BASE_SITE_URL}/docs/api) - Complete API documentation
- [Traffic Policy](${BASE_SITE_URL}/docs/traffic-policy) - Advanced traffic management

## Platform Guides

- [Kubernetes](${BASE_SITE_URL}/docs/k8s) - ngrok Kubernetes operator documentation
- [Universal Gateway](${BASE_SITE_URL}/docs/universal-gateway) - Global application delivery platform
- [Agent SDKs](${BASE_SITE_URL}/docs/agent-sdks) - Embed ngrok in your applications

## Key Concepts

- [What is ngrok?](${BASE_SITE_URL}/docs/getting-started/what-is-ngrok) - Platform overview
- [Why ngrok?](${BASE_SITE_URL}/docs/getting-started/why-ngrok) - Benefits and use cases
- [Security](${BASE_SITE_URL}/docs/guides/security-dev-productivity/securing-your-tunnels) - Security best practices

## Integrations

- [Cloud Providers](${BASE_SITE_URL}/docs/integrations) - AWS, Azure, GCP integrations
- [Authentication](${BASE_SITE_URL}/docs/integrations/okta) - SSO and identity providers
- [Webhooks](${BASE_SITE_URL}/docs/integrations/github/webhooks) - Event handling examples

## Company Information

- [Pricing](${BASE_SITE_URL}/docs/pricing-limits) - Plans and pricing information
- [FAQ](${BASE_SITE_URL}/docs/faq) - Frequently asked questions
`;
