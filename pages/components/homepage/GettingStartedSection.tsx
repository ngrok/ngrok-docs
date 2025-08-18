import { Link } from "@components/Link";
import { Icon } from "@ngrok/mantle/icon";
import { 
	QuestionIcon, 
	LightbulbIcon, 
	CheckCircleIcon,
	FileJsIcon,
	CodeIcon,
	GearIcon,
	BracketsSquareIcon
} from "@phosphor-icons/react";
import type { ComponentType } from "react";

interface QuickstartItem {
	name: string;
	href: string;
	icon: ComponentType;
	description?: string;
}

// New to ngrok? - Concepts and basics
const conceptItems: QuickstartItem[] = [
	{
		name: "What is ngrok",
		href: "/docs/getting-started/what-is-ngrok",
		icon: QuestionIcon,
		description: "Learn the basics",
	},
	{
		name: "How ngrok works",
		href: "/docs/getting-started/how-ngrok-works",
		icon: LightbulbIcon,
		description: "Architecture overview",
	},
	{
		name: "Why ngrok",
		href: "/docs/getting-started/why-ngrok",
		icon: CheckCircleIcon,
		description: "Benefits and use cases",
	},
];

// Quick Setup - Language-specific guides
const quickSetupItems: QuickstartItem[] = [
	{
		name: "CLI",
		href: "/docs/getting-started/agent-cli",
		icon: FileJsIcon,
		description: "Setup and connect any application.",
	},
	{
		name: "JavaScript / Typescript",
		href: "/docs/getting-started/javascript",
		icon: FileJsIcon,
		description: "Setup and connect your JavaScript / TypeScript applications.",
	},
	{
		name: "Python",
		href: "/docs/getting-started/python",
		icon: BracketsSquareIcon,
		description: "Setup and connect your Python applications.",
	},
	{
		name: "Go",
		href: "/docs/getting-started/go",
		icon: CodeIcon,
		description: "Setup and connect your Go applications.",
	},
	{
		name: "Rust",
		href: "/docs/getting-started/rust",
		icon: GearIcon,
		description: "Setup and connect your Rust applications.",
	},
];

export default function GettingStartedSection() {
	return (
		<>
			{/* Quick Setup */}
			<section className="mb-16">
				<div className="mb-8">
					<h2 className="text-2xl font-bold text-gray-900 mb-4">
						Quick Setup
					</h2>
					<p className="text-gray-600">
						Choose your language to get up and running quickly
					</p>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					{quickSetupItems.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="group p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
						>
							<div className="flex items-start space-x-3">
								<div className="flex-shrink-0">
									<Icon svg={<item.icon />} className="text-gray-700" />
									</div>
									<div>
										<h3 className="font-medium text-gray-900 group-hover:text-blue-600">
											{item.name}
										</h3>
										{item.description && (
											<p className="text-sm text-gray-500 mt-1">{item.description}</p>
										)}
									</div>
							</div>
						</Link>
					))}
				</div>
			</section>
	
			{/* New to ngrok? */}
			<section className="mb-16">
				<div className="mb-8">
					<h2 className="text-2xl font-bold text-gray-900 mb-4">
						New to ngrok?
					</h2>
					<p className="text-gray-600">
						Start here to understand what ngrok is and how it can help you
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{conceptItems.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="group p-6 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-200"
						>
							<div className="flex items-start space-x-3">
								<div className="flex-shrink-0">
									<Icon svg={<item.icon />} className="text-blue-600" />
								</div>
								<div>
									<h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
										{item.name}
									</h3>
									<p className="text-gray-600 text-sm leading-relaxed">
										{item.description}
									</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</section>
		</>
	);
}
