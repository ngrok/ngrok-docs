import { usePluginData } from "@docusaurus/useGlobalData";
import { parseIntegrations } from "./schema";

const pluginKey = "ngrok-parse-integrations" as const;

export function useIntegrations() {
	const rawData = usePluginData(pluginKey);
	console.log("Raw Data:", rawData);
	return parseIntegrations(rawData);
}

export function useIntegration(name: string) {
	const integrations = useIntegrations();

	// case insensitive search
	return integrations.find(
		(item) => item.name.toLowerCase() === name.toLowerCase(),
	);
}
