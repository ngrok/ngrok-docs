import React from "react";
import { useIntegrations } from "./integrations/use-integrations";
import NgrokCard from "./NgrokCard";

export default function IntegrationsList() {
	const integrations = useIntegrations();

	return (
		<ul className="m-0 mb-5 grid list-none grid-cols-2 gap-5 p-0" role="list">
			{integrations.map((integration) => (
				<li className="last-of-type:col-span-full" key={integration.name}>
					<NgrokCard
						to={integration.path}
						size="sm"
						img={integration.metadata?.logo}
						title={integration.metadata?.sidebar_label || integration.name}
						description={integration.metadata?.excerpt}
					/>
				</li>
			))}
		</ul>
	);
}
