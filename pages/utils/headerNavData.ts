/** Header navigation data structured for Start | Products | Build | Manage | Reference */

export interface HeaderNavigationItem {
	label: string;
	href: string;
}

export interface HeaderNavigationCategory {
	label: string;
	items?: HeaderNavigationItem[];
	href?: string; // For direct navigation without dropdown (like "Start")
}

export const headerNavData: HeaderNavigationCategory[] = [
	{
		label: "Start",
		href: "/docs/getting-started",
	},
	{
		label: "Products",
		items: [
			{ label: "Universal Gateway", href: "/docs/universal-gateway/overview" },
			{ label: "Traffic Policy", href: "/docs/traffic-policy" },
			{ label: "Kubernetes", href: "/docs/kubernetes" },
			{
				label: "Traffic Observability",
				href: "/docs/platform/traffic-observability",
			},
			{ label: "Identity & Access", href: "/docs/platform/identity-access" },
			{ label: "Performance & Scaling", href: "/docs/guides/scaling" },
		],
	},
	{
		label: "Build",
		items: [
			{ label: "Local Development", href: "/docs/guides/local-development" },
			{ label: "Webhook Integration", href: "/docs/guides/webhooks" },
			{ label: "Multi-cloud Deployment", href: "/docs/guides/multi-cloud" },
			{ label: "Examples & Samples", href: "/docs/universal-gateway/examples" },
			{ label: "Integrations", href: "/docs/integrations" },
		],
	},

	{
		label: "Reference",
		items: [
			{ label: "SDKs", href: "/docs/getting-started/javascript" },
			{ label: "API Documentation", href: "/docs/api" },
			{ label: "CLI Reference", href: "/docs/getting-started" },
			{ label: "Configuration", href: "/docs/config" },
			{ label: "Troubleshooting", href: "/docs/troubleshooting" },
		],
	},
];
