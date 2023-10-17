// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require("dotenv").config();

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const docsRepo = "https://github.com/ngrok/ngrok-docs";

const isProduction = /production/i.test(process.env.NODE_ENV || "development");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "ngrok documentation",
	tagline: "online in one line",
	url: "https://ngrok.com",
	baseUrl: "/docs/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "throw",
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
	],
	headTags: [
		{
			tagName: "meta",
			attributes: {
				name: "ketch-tag-id",
				content: isProduction ? "ngrok_ketch_tag" : "ngrok_ketch_tag_local",
			},
		},
	],

	scripts: [
		{
			src: "/docs/scripts/ketch.js",
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
			({
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
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
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
					width: "100%",
					height: "100%",
				},
				items: [
					{
						label: "Product",
						to: "https://ngrok.com/product",
						position: "left",
					},
					{
						label: "Solutions",
						to: "https://ngrok.com/solutions",
						position: "left",
					},
					{
						label: "Customers",
						to: "https://ngrok.com/customers",
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
						label: "Download",
						to: "https://ngrok.com/download",
						position: "left",
					},
					{
						type: "search",
						position: "right",
					},
					{
						label: "Login",
						to: "https://dashboard.ngrok.com/login",
						position: "right",
						className: "dev-portal-signup dev-portal-link",
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
				appId: "SPPRT3GDNI",
				apiKey: "e02fb8e0c4d8c7968396981d7ecb9fa8",
				indexName: (process.env.DEPLOY_ENV || "dev") + "_ngrok",
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
								label: "Login",
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
		}),
};

module.exports = config;
