import { usePluginData } from "@docusaurus/useGlobalData";
import { Integrations, integrationsSchema } from "./schema";

const pluginKey = "ngrok-parse-integrations" as const;

export function useIntegrations(): Integrations {
	const rawData = usePluginData(pluginKey);
	try {
		return integrationsSchema.parse(rawData);
	} catch (error) {
		console.error(error);
		return [];
	}
}

export function useIntegration(name: string) {
	const integrations = useIntegrations();

	// case insensitive search
	return integrations.find(
		(item) => item.name.toLowerCase() === name.toLowerCase(),
	);
}
