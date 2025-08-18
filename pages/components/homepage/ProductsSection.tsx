import { Link } from "@components/Link";
import { Icon } from "@ngrok/mantle/icon";
import {
	CubeIcon,
	EyeIcon,
	GlobeIcon,
	SubwayIcon,
	TrafficSignIcon,
} from "@phosphor-icons/react";
import type { ComponentType } from "react";

interface Product {
	name: string;
	description: string;
	href: string;
	icon: ComponentType;
}

const products: Product[] = [
	{
		name: "Universal Gateway",
		description:
			"Unified ingress layer with fine-grained authorization controls and instant global distribution",
		href: "/docs/universal-gateway/overview",
		icon: GlobeIcon,
	},
	{
		name: "Secure Tunnels",
		description:
			"Secure introspectable tunnels to localhost webhook development tool and debugging tool",
		href: "/docs/agent",
		icon: SubwayIcon,
	},
	{
		name: "Traffic Policy",
		description:
			"Define and enforce traffic policies for authentication, authorization, rate limiting, and more",
		href: "/docs/traffic-policy",
		icon: TrafficSignIcon,
	},
	{
		name: "Kubernetes Operator",
		description:
			"Expose Kubernetes services to the internet with ngrok's security and observability",
		href: "/docs/k8s",
		icon: CubeIcon,
	},
	{
		name: "Traffic Observability",
		description:
			"Monitor, analyze and debug your traffic with comprehensive logging and metrics",
		href: "/docs/obs",
		icon: EyeIcon,
	},
];

export default function ProductsSection() {
	return (
		<section className="mb-16">
			<div className="mb-8">
				<h2 className="text-2xl font-bold text-gray-900 mb-4">Core Products</h2>
				<p className="text-gray-600">
					Explore ngrok's suite of products for secure ingress and API
					management
				</p>
			</div>

			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{products.map((product) => (
					<Link
						key={product.name}
						href={product.href}
						className="group p-6 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-200"
					>
						<div className="flex items-start space-x-3">
							{product.icon && (
								<div className="flex-shrink-0">
									<Icon svg={<product.icon />} className="text-gray-600" />
								</div>
							)}
							<div>
								<h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
									{product.name}
								</h3>
								<p className="text-gray-600 text-sm leading-relaxed">
									{product.description}
								</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
}
