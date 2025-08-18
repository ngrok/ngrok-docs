import { Link } from "@components/Link";
import { Icon } from "@ngrok/mantle/icon";
import { CubeIcon, CodeIcon, GearIcon } from "@phosphor-icons/react";
import type { ComponentType } from "react";

interface ResourceCategory {
	title: string;
	icon?: ComponentType;
	items: {
		name: string;
		href: string;
		description?: string;
	}[];
}

const resourceCategories: ResourceCategory[] = [
	{
		title: "Kubernetes & Orchestration",
		icon: CubeIcon,
		items: [
			{ name: "Kubernetes Operator", href: "/docs/k8s", description: "Native K8s integration" },
			{ name: "Kubernetes Guide", href: "/docs/getting-started/kubernetes", description: "Setup and deployment" },
			{ name: "Using with Docker", href: "/docs/using-ngrok-with/docker", description: "Docker integration" },
		],
	},
	{
		title: "Developer Tools & APIs",
		icon: CodeIcon,
		items: [
			{ name: "Agent SDKs", href: "/docs/agent-sdks", description: "Client libraries for all languages" },
			{ name: "REST API", href: "/docs/api", description: "Complete API reference" },
			{ name: "CLI Reference", href: "/docs/agent/cli", description: "Command line interface docs" },
			{ name: "Examples & Samples", href: "/docs/integrations", description: "Code samples and examples" },
		],
	},
	{
		title: "Administration & Support",
		icon: GearIcon,
		items: [
			{ name: "User Management", href: "/docs/user-management", description: "Team and user administration" },
			{ name: "Configuration", href: "/docs/agent/config", description: "Configuration reference" },
			{ name: "Error Codes", href: "/docs/errors", description: "HTTP and API error codes" },
			{ name: "Pricing & Limits", href: "/docs/pricing-limits", description: "Plan details and limits" },
			{ name: "FAQ", href: "/docs/faq", description: "Frequently asked questions" },
		],
	},
];

export default function ResourcesSection() {
	return (
		<section className="mb-16">
			<div className="mb-8">
				<h2 className="text-2xl font-bold text-gray-900 mb-4">
					Advanced Use Cases
				</h2>
				<p className="text-gray-600">
					Deep dive into specialized deployments, developer tools, and administration
				</p>
			</div>

			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{resourceCategories.map((category) => (
					<div
						key={category.title}
						className="bg-white border border-gray-200 rounded-lg p-6"
					>
						<div className="flex items-center mb-4">
							{category.icon && (
								<div className="mr-2">
									<Icon svg={<category.icon />} className="text-gray-600" />
								</div>
							)}
							<h3 className="font-semibold text-gray-900">{category.title}</h3>
						</div>
						<ul className="space-y-2">
							{category.items.map((item) => (
								<li key={item.name}>
									<Link
										href={item.href}
										className="text-blue-600 hover:text-blue-800 text-sm"
									>
										{item.name}
									</Link>
									{item.description && (
										<p className="text-gray-500 text-xs mt-1">
											{item.description}
										</p>
									)}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
