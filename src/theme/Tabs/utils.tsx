const commonLabels = [
	{ searchTerm: new RegExp("kubernetes", "i"), label: "Kubernetes Controller" },
	{
		searchTerm: new RegExp("kubernetes-endpoint", "i"),
		label: "Kubernetes Controller",
	},
	{
		searchTerm: new RegExp("kubernetes-controller", "i"),
		label: "Kubernetes Controller",
	},
	{ searchTerm: new RegExp("k8s", "i"), label: "Kubernetes Controller" },
	{
		searchTerm: new RegExp("k8s-controller", "i"),
		label: "Kubernetes Controller",
	},
	{
		searchTerm: new RegExp("k8s-endpoint", "i"),
		label: "Kubernetes Controller",
	},
	{ searchTerm: new RegExp("agent-config", "i"), label: "Agent Config" },
	{ searchTerm: new RegExp("agent-endpoint", "i"), label: "Agent Endpoint" },
	{ searchTerm: new RegExp("cloud-endpoint", "i"), label: "Cloud Endpoint" },
];

export function getCommonLabel(value: string) {
	return commonLabels.find((item) => item.searchTerm.test(value))?.label;
}
