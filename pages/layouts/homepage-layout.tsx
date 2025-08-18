import type React from "react";

interface HomepageLayoutProps {
	children: React.ReactNode;
}

export default function HomepageLayout({ children }: HomepageLayoutProps) {
	return (
		<div className="min-h-screen bg-surface-100">
			{/* Hero Section */}
			<div className="bg-background border-b border-border">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
					<div className="text-center">
						<h1 className="text-4xl font-bold text-foreground mb-4">
							ngrok Documentation
						</h1>
						<p className="text-xl text-foreground-muted max-w-3xl mx-auto">
							Learn how to get up and running with ngrok through tutorials, APIs
							and platform resources
						</p>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				{children}
			</div>
		</div>
	);
}
