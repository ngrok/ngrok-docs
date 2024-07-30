import type { Config } from "@docusaurus/types";
import dotenv from "dotenv";
import * as prismReactRenderer from "prism-react-renderer";

dotenv.config();

const lightCodeTheme = prismReactRenderer.themes.github;
const darkCodeTheme = prismReactRenderer.themes.dracula;

const docsRepo = "https://github.com/ngrok/ngrok-docs";

const isProduction = /production/i.test(process.env.NODE_ENV || "development");

const fontHrefs = [
	"https://cdn.ngrok.com/static/fonts/euclid-square/EuclidSquare-Regular-WebS.woff",
	"https://cdn.ngrok.com/static/fonts/euclid-square/EuclidSquare-RegularItalic-WebS.woff",
	"https://cdn.ngrok.com/static/fonts/euclid-square/EuclidSquare-Medium-WebS.woff",
	"https://cdn.ngrok.com/static/fonts/euclid-square/EuclidSquare-Semibold-WebS.woff",
	"https://cdn.ngrok.com/static/fonts/euclid-square/EuclidSquare-MediumItalic-WebS.woff",
	"https://cdn.ngrok.com/static/fonts/ibm-plex-mono/IBMPlexMono-Text.woff",
	"https://cdn.ngrok.com/static/fonts/ibm-plex-mono/IBMPlexMono-TextItalic.woff",
	"https://cdn.ngrok.com/static/fonts/ibm-plex-mono/IBMPlexMono-SemiBold.woff",
	"https://cdn.ngrok.com/static/fonts/ibm-plex-mono/IBMPlexMono-SemiBoldItalic.woff",
] as const;

const ketchTagId = isProduction ? "ngrok_ketch_tag" : "ngrok_ketch_tag_local";

const config = {
	title: "ngrok documentation",
	tagline: "online in one line",
	url: "https://ngrok.com",
	baseUrl: "/docs/",
	onBrokenAnchors: "warn",
	onBrokenLinks: "warn",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	trailingSlash: true,

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "ngrok", // Usually your GitHub org/user name.
	projectName: "ngrok-docs", // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	// i18n: {
	//   defaultLocale: 'en',
	//   locales: ['en'],
	// },

	plugins: [
		"./src/plugins/ngrok-parse-integrations",
		"@stackql/docusaurus-plugin-hubspot",
		"@docusaurus/theme-mermaid",
		"./src/plugins/tailwindcss",
	],
	headTags: [
		...fontHrefs.map((href) => ({
			tagName: "link",
			attributes: {
				rel: "preload",
				href,
				as: "font",
				type: "font/woff",
				crossorigin: "anonymous",
			},
		})),
	],

	scripts: [
		{
			src: "/docs/scripts/ketch.js",
		},
		{
			src: `https://global.ketchcdn.com/web/v2/config/ngrok/${ketchTagId}/boot.js`,
			async: true,
			defer: true,
		},
		{
			src: "/docs/scripts/fix-redirect.js",
			async: true,
		},
		{
			src: "/docs/scripts/anchor-scroll-to.js",
			async: true,
		},
		{
			src: "https://tag.clearbitscripts.com/v1/pk_1caf9e9fb3222466245fb17c8f807837/tags.js",
		},
	],
	staticDirectories: ["static"],

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			{
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					routeBasePath: "/",
					editUrl: `${docsRepo}/edit/main`,
					showLastUpdateAuthor: true,
					showLastUpdateTime: true,
				},
				blog: false,
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
				googleTagManager: {
					containerId: "GTM-P4F37ZW",
				},
				sitemap: {
					changefreq: "hourly",
					priority: 0.5,
					ignorePatterns: ["/docs/tags/**", "/docs/**/toc/**"],
					filename: "sitemap.xml",
				},
			},
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		{
			metadata: [
				{
					name: "keywords",
					content:
						"ngrok, documentation, api, errors, reference, getting started, tutorials",
				},
			],
			image: "img/ngrok-docs-opengraph.png",
			navbar: {
				logo: {
					alt: "ngrok",
					src: "img/ngrok-black.svg",
					srcDark: "img/ngrok-white.svg",
					href: "https://ngrok.com",
				},
				items: [
					{
						label: "Platform",
						to: "https://ngrok.com/product/platform",
						position: "left",
					},
					{
						label: "Use cases",
						to: "https://ngrok.com/use-cases",
						position: "left",
					},
					{
						label: "Blog",
						to: "https://ngrok.com/blog",
						position: "left",
					},
					{
						label: "Resources",
						to: "https://ngrok.com/resources",
						position: "left",
					},
					{
						label: "Docs",
						to: "/docs",
						position: "left",
					},
					{
						label: "Pricing",
						to: "https://ngrok.com/pricing",
						position: "left",
					},
					{
						label: "Get ngrok",
						to: "https://ngrok.com/download",
						position: "left",
					},
					{
						label: "Log in",
						to: "https://dashboard.ngrok.com/login",
						position: "right",
						className: "dev-portal-login dev-portal-link",
					},
					{
						label: "Sign Up",
						to: "https://ngrok.com/signup",
						position: "right",
						className: "dev-portal-signup dev-portal-link",
					},
				],
			},
			algolia: {
				// The application ID provided by Algolia
				appId: "8D7MHVMLBR",

				// Public API key: it is safe to commit it
				apiKey: "d96d859b21bb7d3d9afe6349baedff3e",

				indexName: "ngrok",

				// Optional: see doc section below
				contextualSearch: true,

				// Optional: path for search page that enabled by default (`false` to disable it)
				searchPagePath: false,

				//... other Algolia params
			},
			hubspot: {
				accountId: 21124867,
			},
			footer: {
				style: "light",
				links: [
					{
						title: "ngrok Service",
						items: [
							{
								label: "Get Started",
								to: "/getting-started",
							},
							{
								label: "Sign up",
								to: "https://dashboard.ngrok.com/signup",
							},
							{
								label: "Log in",
								to: "https://dashboard.ngrok.com/login",
							},
							{
								label: "Download",
								to: "https://ngrok.com/download",
							},
							{
								label: "Docs",
								to: "https://ngrok.com/docs",
							},
							{
								label: "Status",
								to: "https://status.ngrok.com",
							},
						],
					},
					{
						title: "ngrok.com",
						items: [
							{
								label: "Product",
								to: "https://ngrok.com/product",
							},
							{
								label: "Pricing",
								to: "https://ngrok.com/pricing",
							},
							{
								label: "Customers",
								to: "https://ngrok.com/customers",
							},
							{
								label: "Solutions",
								to: "https://ngrok.com/solutions",
							},
							{
								label: "Partners",
								to: "https://ngrok.com/partners",
							},
							{
								label: "Trust Portal",
								to: "https://trust.ngrok.com",
							},
						],
					},
					{
						title: "Legal",
						items: [
							{
								label: "Abuse",
								to: "https://ngrok.com/abuse",
							},
							{
								label: "DPA",
								to: "https://ngrok.com/dpa",
							},
							{
								label: "Privacy",
								to: "https://ngrok.com/privacy",
							},
							{
								label: "Security",
								to: "https://ngrok.com/security",
							},
							{
								label: "Terms of service",
								to: "https://ngrok.com/tos",
							},
							{
								label: "Privacy Preferences",
								to: "https://ngrok.com/privacy-preferences",
							},
						],
					},
					{
						title: "More",
						items: [
							{
								label: "Careers",
								to: "https://ngrok.com/careers",
							},
							{
								label: "Blog",
								to: "https://blog.ngrok.com",
							},
							{
								label: "Community",
								to: "https://ngrok.com/slack",
							},
							{
								label: "Twitter",
								to: "https://twitter.com/ngrokHQ",
							},
							{
								label: "LinkedIn",
								to: "https://www.linkedin.com/company/ngrok",
							},
							{
								label: "GitHub",
								to: "https://github.com/ngrok",
							},
						],
					},
				],
				copyright: `© ngrok ${new Date().getFullYear()}`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
				additionalLanguages: ["hcl", "rust", "http", "bash"],
			},
			docs: {
				sidebar: {
					autoCollapseCategories: true,
				},
			},
		},
} satisfies Config;

export default config;
