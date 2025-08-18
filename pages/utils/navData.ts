import {
	CubeIcon,
	ShieldCheckIcon,
	GearIcon,
	GlobeIcon,
	RocketLaunchIcon,
	CloudArrowUpIcon,
	EyeIcon,
	UsersIcon,
	BookOpenIcon,
	CodeIcon,
	TerminalIcon,
	WrenchIcon,
	FileCodeIcon,
	ArticleIcon,
	CurrencyDollarIcon,
} from "@phosphor-icons/react";
import type { SidebarItemData } from "./sidebarGeneration";

export type NavCategory = {
	label: string;
	type: "category";
	items: SidebarItemData[];
	noDropdown?: boolean;
};
export const navData: NavCategory[] = [
	{
		label: "Start",
		type: "category",
		noDropdown: true,
		items: [
			{
				label: "Getting Started3",
				type: "category",
				collapsible: false,
				className: "menu__list-item--category",
				link: { type: "doc", id: "getting-started/agent-cli" },
				items: [
					"getting-started/what-is-ngrok",
					"getting-started/how-ngrok-works",
					"getting-started/why-ngrok",
					"whats-new",
					{
						label: "Quickstarts",
						type: "category",
						link: { type: "doc", id: "getting-started/agent-cli" },
						items: [
							{
								type: "category",
								label: "Agent CLI",
								link: { type: "doc", id: "getting-started/agent-cli" },
							},
							{
								id: "getting-started/cloud-endpoints-quickstart",
								type: "doc",
								label: "Cloud Endpoints",
							},
							{
								label: "SDKs",
								type: "category",
								items: [
									{
										type: "link",
										label: "JavaScript",
										href: "/docs/getting-started/javascript",
									},
									{
										type: "link",
										label: "Go",
										href: "/docs/getting-started/go",
									},
									{
										type: "link",
										label: "Python",
										href: "/docs/getting-started/python",
									},
									{
										type: "link",
										label: "Rust",
										href: "getting-started/rust",
									},
								],
							},
							{
								label: "Kubernetes Operator",
								type: "category",
								link: { type: "doc", id: "" },
								items: [
									{
										type: "link",
										label: "Ingress",
										href: "/docs/getting-started/kubernetes/ingress",
									},
									{
										type: "link",
										label: "Gateway API",
										href: "/docs/getting-started/kubernetes/gateway-api",
									},
									{
										type: "link",
										label: "Custom Resources",
										href: "/docs/getting-started/kubernetes/crds",
									},
									{
										type: "link",
										label: "Endpoints",
										href: "/docs/getting-started/kubernetes/endpoints",
									},
								],
							},
						],
					},
				],
			},
		],
	},
	{
		label: "Products",
		type: "category",
		items: [
			{
				label: "Universal Gateway",
				id: "universal-gateway/overview",
				type: "doc",
				icon: CubeIcon,
				items: [
					{
						label: "Universal Gateway",
						type: "category",
						collapsible: false,
						className: "menu__list-item--category",
						link: { type: "doc", id: "universal-gateway/overview" },
						items: [
							"universal-gateway/overview",
							{
								label: "Concepts",
								type: "category",
								items: [
									{
										link: { type: "doc", id: "universal-gateway/domains" },
										type: "category",
										label: "Domains",
										items: ["universal-gateway/custom-domains"],
									},
									{
										id: "universal-gateway/tcp-addresses",
										type: "doc",
										label: "TCP Addresses",
									},
									"universal-gateway/tls-certificates",
								],
							},
							{
								label: "Endpoints",
								type: "category",
								link: { type: "doc", id: "universal-gateway/endpoints" },
								items: [
									{
										id: "universal-gateway/endpoints",
										type: "doc",
										label: "Overview",
									},
									{
										label: "Types",
										type: "subcategory",
										link: { type: "doc", id: "universal-gateway/types" },
										items: [
											{
												label: "Cloud Endpoints",
												type: "category",
												link: {
													type: "doc",
													id: "universal-gateway/cloud-endpoints/",
												},
												items: [
													"universal-gateway/cloud-endpoints/change-domain-endpoint",
													{
														label: "Forwarding Traffic",
														type: "category",
														link: {
															type: "doc",
															id: "universal-gateway/cloud-endpoints/forwarding-and-load-balancing",
														},
														items: [
															"universal-gateway/cloud-endpoints/routing-and-policy-decentralization",
														],
													},
												],
											},
											{
												id: "universal-gateway/agent-endpoints",
												type: "doc",
												label: "Agent Endpoints",
											},
										],
									},
									{
										label: "Protocols",
										type: "category",
										link: { type: "doc", id: "universal-gateway/protocols" },
										items: [
											{
												id: "universal-gateway/http",
												type: "doc",
												label: "HTTP/S",
											},
											{
												id: "universal-gateway/tls",
												type: "doc",
												label: "TLS",
											},
											{
												id: "universal-gateway/tcp",
												type: "doc",
												label: "TCP",
											},
										],
									},
									{
										label: "Bindings",
										type: "category",
										link: { type: "doc", id: "universal-gateway/bindings" },
										items: [
											{
												id: "universal-gateway/public-endpoints",
												type: "doc",
												label: "Public",
											},
											{
												id: "universal-gateway/internal-endpoints",
												type: "doc",
												label: "Internal",
											},
											{
												id: "universal-gateway/kubernetes-endpoints",
												type: "doc",
												label: "Kubernetes",
											},
										],
									},
									{
										label: "Pooling",
										type: "category",
										link: {
											type: "doc",
											id: "universal-gateway/endpoint-pooling",
										},
										items: ["universal-gateway/load-balancing-multiple-clouds"],
									},
								],
							},
							{
								label: "Network",
								type: "category",
								link: {
									type: "doc",
									id: "universal-gateway/global-load-balancer",
								},
								items: [
									"universal-gateway/global-load-balancer",
									"universal-gateway/tls-termination",
									"universal-gateway/ddos-protection",
									"universal-gateway/ip-addresses",
									"universal-gateway/points-of-presence",
								],
							},
							{
								label: "Examples",
								type: "category",
								link: { type: "doc", id: "universal-gateway/examples" },
								items: [
									"universal-gateway/examples",
									{
										type: "autogenerated",
										dirName: "universal-gateway/examples",
									},
								],
							},
						],
					},
				],
			},
			{
				label: "Traffic Policy",
				id: "traffic-policy",
				type: "doc",
				icon: ShieldCheckIcon,
				items: [
					{
						label: "Traffic Policy",
						type: "category",
						collapsible: false,
						className: "menu__list-item--category",
						link: { type: "doc", id: "traffic-policy" },
						items: [
							"traffic-policy",
							{
								label: "Getting Started",
								type: "category",
								link: {
									type: "doc",
									id: "traffic-policy/getting-started/agent-endpoints/cli",
								},
								items: [
									{
										type: "autogenerated",
										dirName: "traffic-policy/getting-started",
									},
								],
							},
							{
								label: "Concepts",
								type: "category",
								link: { type: "doc", id: "traffic-policy/concepts" },
								items: [
									{
										type: "autogenerated",
										dirName: "traffic-policy/concepts",
									},
								],
							},
							{
								label: "Actions",
								type: "category",
								link: { type: "doc", id: "traffic-policy/actions" },
								items: [
									{
										type: "autogenerated",
										dirName: "traffic-policy/actions",
									},
								],
							},
							{
								label: "Macros",
								type: "doc",
								id: "traffic-policy/macros",
							},
							{
								label: "Variables",
								type: "category",
								link: { type: "doc", id: "traffic-policy/variables" },
								items: [
									{
										type: "autogenerated",
										dirName: "traffic-policy/variables",
									},
								],
							},
							{
								label: "Resources",
								type: "category",
								link: { type: "doc", id: "traffic-policy/identities" },
								items: ["traffic-policy/identities"],
							},
							{
								label: "Examples",
								type: "category",
								link: { type: "doc", id: "traffic-policy/examples" },
								items: [
									{
										type: "autogenerated",
										dirName: "traffic-policy/examples",
									},
								],
							},
						],
					},
				],
			},
			{
				label: "Kubernetes Operator",
				id: "k8s",
				type: "doc",
				icon: GearIcon,
				items: [
					{
						label: "Kubernetes Operator",
						type: "category",
						collapsible: false,
						className: "menu__list-item--category",
						link: { type: "doc", id: "k8s" },
						items: [
							"k8s",
							{
								label: "How It Works",
								type: "category",
								link: { type: "doc", id: "k8s/how-it-works" },
								items: ["k8s/installation/architecture"],
							},
							"k8s/guides/local-cluster",
							{
								label: "Quickstarts",
								type: "category",
								link: { type: "doc", id: "getting-started/kubernetes/ingress" },
								items: [
									"getting-started/kubernetes/ingress",
									"getting-started/kubernetes/gateway-api",
									"getting-started/kubernetes/crds",
									"getting-started/kubernetes/endpoints",
								],
							},
							{
								label: "Manage",
								type: "category",
								link: { type: "doc", id: "k8s/installation/update" },
								items: ["k8s/installation/helm", "k8s/installation/uninstall"],
							},
							{
								label: "Load Balancing",
								type: "category",
								link: {
									type: "doc",
									id: "k8s/load-balancing/load-balancing-kubernetes",
								},
								items: [
									"k8s/load-balancing/load-balancing-kubernetes-clusters",
									"k8s/guides/using-loadbalancers",
								],
							},
							{
								label: "Usage Guides",
								type: "category",
								link: { type: "doc", id: "k8s/guides/using-crds" },
								items: [
									"k8s/guides/endpoint-types",
									"k8s/guides/bindings",
									"k8s/guides/pooling",
									"k8s/guides/custom-domain",
									"k8s/guides/using-crds",
									"k8s/guides/using-gwapi",
									"k8s/guides/using-ingresses",
									"k8s/guides/annotations",
									"k8s/guides/managed-resources",
									"k8s/guides/finalizers",
									"k8s/guides/troubleshooting",
									{
										label: "How do I?",
										type: "category",
										link: {
											type: "doc",
											id: "k8s/guides/how-to/request-routing",
										},
										items: [
											"k8s/guides/how-to/request-routing",
											"k8s/guides/how-to/tls-routing",
											"k8s/guides/how-to/tcp-routing",
											"k8s/guides/how-to/manipulate-headers",
											"k8s/guides/how-to/redirects",
											"k8s/guides/how-to/rewrite-url",
											"k8s/guides/how-to/static-response",
											"k8s/guides/how-to/terminate-tls",
											"k8s/guides/how-to/upstream-tls",
											"k8s/guides/how-to/rate-limiting",
											"k8s/guides/how-to/deny-requests",
											"k8s/guides/how-to/basic-auth",
											"k8s/guides/how-to/oauth",
											"k8s/guides/how-to/oidc",
											"k8s/guides/how-to/jwt-validation",
											"k8s/guides/how-to/restrict-ips",
											"k8s/guides/how-to/circuit-breaking",
											"k8s/guides/how-to/compress-response",
										],
									},
								],
							},
							{
								label: "Custom Resources",
								type: "category",
								link: { type: "doc", id: "k8s/crds" },
								items: [
									"k8s/crds",
									"k8s/crds/agentendpoint",
									"k8s/crds/cloudendpoint",
									"k8s/crds/ngroktrafficpolicy",
									"k8s/crds/boundendpoint",
									"k8s/crds/domain",
									"k8s/crds/kubernetesoperator",
									"k8s/crds/tunnel",
								],
							},
							{
								label: "Integrations & Platforms",
								link: { type: "doc", id: "k8s/integrations/argo-cd" },
								type: "category",
								items: [
									"k8s/integrations/argo-cd",
									"k8s/integrations/aws-eks",
									"k8s/integrations/microsoft-entra-id",
									"k8s/integrations/azure-aks",
									"k8s/integrations/consul",
									"k8s/integrations/digital-ocean",
									"k8s/integrations/gke",
									"k8s/integrations/linkerd",
									"k8s/integrations/microk8s",
									"k8s/integrations/rancher",
									"k8s/integrations/rayfay",
									"k8s/integrations/spectro-cloud",
									"k8s/integrations/vcluster",
								],
							},
							"k8s/changelog",
							"k8s/releasing",
						],
					},
				],
			},
			{
				label: "Secure Tunnels",
				id: "agent",
				type: "doc",
				icon: GlobeIcon,
				items: [
					{
						label: "Secure Tunnels",
						type: "category",
						link: { type: "doc", id: "agent" },
						className: "menu__list-item--category",
						collapsible: false,
						items: [
							{
								label: "Agent",
								type: "category",
								link: { type: "doc", id: "agent" },
								items: [
									"agent",
									"agent/web-inspection-interface",
									"agent/cli",
									"agent/cli-api",
									{
										label: "Configuration file",
										type: "category",
										link: { type: "doc", id: "agent/config" },
										items: ["agent/config/v2", "agent/config/v3"],
									},
									"agent/api",
									"agent/ssh-reverse-tunnel-agent",
									"agent/ingress",
									{
										label: "Agent TLS Termination",
										type: "category",
										link: { type: "doc", id: "agent/agent-tls-termination" },
										items: ["agent/agent-mutual-tls-termination"],
									},
									"agent/changelog",
									"agent/version-support-policy",
									"agent/diagnose",
									"agent/upgrade-v2-v3",
								],
							},
							{
								label: "Agent SDKs",
								type: "category",
								link: { type: "doc", id: "agent-sdks" },
								items: [
									"getting-started/javascript",
									"getting-started/go",
									"getting-started/python",
									"getting-started/rust",
								],
							},
						],
					},
				],
			},
			{
				label: "Traffic Observability",
				id: "obs",
				type: "doc",
				icon: EyeIcon,
				items: [
					{
						label: "Traffic Observability",
						type: "category",
						collapsible: false,
						className: "menu__list-item--category",
						link: { type: "doc", id: "obs" },
						items: [
							"obs",
							"obs/traffic-inspection",
							{
								type: "category",
								label: "Events",
								link: { type: "doc", id: "obs/events" },
								items: [
									{ id: "obs/events", type: "doc", label: "Overview" },
									"obs/events/reference",
								],
							},
						],
					},
				],
			},
			{
				label: "Identity & Access",
				id: "iam",
				type: "doc",
				icon: UsersIcon,
				items: [
					{
						label: "Identity & Access",
						type: "category",
						collapsible: false,
						className: "menu__list-item--category",
						link: { type: "doc", id: "iam" },
						items: [
							"iam",
							{
								type: "category",
								label: "Principals",
								link: { type: "doc", id: "iam/users" },
								items: ["iam/users", "iam/bot-users"],
							},
							{
								type: "category",
								label: "Account Governance",
								link: { type: "doc", id: "iam/sso" },
								items: ["iam/sso", "iam/rbac", "iam/domain-controls"],
							},
						],
					},
				],
			},
		],
	},
	{
		label: "Build",
		type: "category",
		items: [
			{
				label: "Guides",
				id: "guides/api-gateway/get-started",
				type: "doc",
				icon: BookOpenIcon,
				items: [
					{
						label: "Guides",
						type: "category",
						link: { type: "doc", id: "guides/api-gateway/get-started" },
						items: [
							{
								label: "API Gateway",
								type: "category",
								items: [
									"guides/api-gateway/get-started",
									"guides/api-gateway/kubernetes",
									"guides/api-gateway/multicloud",
								],
							},
							{
								label: "Device Gateway",
								type: "category",
								items: [
									{ type: "autogenerated", dirName: "guides/device-gateway" },
								],
							},
							{
								label: "Identity Aware Proxy",
								type: "category",
								items: [
									{
										type: "autogenerated",
										dirName: "guides/identity-aware-proxy",
									},
								],
							},
							{
								label: "Security Best Practices",
								type: "category",
								link: { type: "doc", id: "guides/security-dev-productivity" },
								items: [
									"guides/security-dev-productivity/securing-your-tunnels",
								],
							},
							{
								label: "Site-to-Site Connectivity",
								type: "category",
								link: { type: "doc", id: "guides/site-to-site-connectivity" },
								items: ["guides/site-to-site-connectivity/end-customers"],
							},
							"guides/running-behind-firewalls",
							"guides/ssh-rdp",
							{
								label: "Using ngrok with",
								type: "category",
								items: [{ type: "autogenerated", dirName: "using-ngrok-with" }],
							},
						],
					},
				],
			},
			{
				label: "Examples & Samples",
				id: "universal-gateway/examples",
				type: "doc",
				icon: CodeIcon,
				items: [
					{
						label: "Examples & Samples",
						type: "category",
						link: { type: "doc", id: "universal-gateway/examples" },
						items: [
							{ type: "autogenerated", dirName: "universal-gateway/examples" },
						],
					},
				],
			},
			{
				label: "Integrations",
				id: "integrations",
				type: "doc",
				icon: CloudArrowUpIcon,
				items: [
					{
						label: "Integrations",
						type: "category",
						link: { type: "doc", id: "integrations" },
						items: [{ type: "autogenerated", dirName: "integrations" }],
					},
				],
			},
		],
	},
	{
		label: "Manage",
		type: "category",
		items: [
			{
				label: "Traffic Observability",
				id: "obs",
				type: "doc",
				icon: EyeIcon,
				items: [
					{
						label: "Traffic Observability",
						type: "category",
						collapsible: false,
						className: "menu__list-item--category",
						link: { type: "doc", id: "obs" },
						items: [
							"obs",
							"obs/traffic-inspection",
							{
								type: "category",
								label: "Events",
								link: { type: "doc", id: "obs/events" },
								items: [
									{ id: "obs/events", type: "doc", label: "Overview" },
									"obs/events/reference",
								],
							},
						],
					},
				],
			},
			{
				label: "Identity & Access",
				id: "iam",
				type: "doc",
				icon: UsersIcon,
				items: [
					{
						label: "Identity & Access",
						type: "category",
						collapsible: false,
						className: "menu__list-item--category",
						link: { type: "doc", id: "iam" },
						items: [
							"iam",
							{
								type: "category",
								label: "Principals",
								link: { type: "doc", id: "iam/users" },
								items: ["iam/users", "iam/bot-users"],
							},
							{
								type: "category",
								label: "Account Governance",
								link: { type: "doc", id: "iam/sso" },
								items: ["iam/sso", "iam/rbac", "iam/domain-controls"],
							},
						],
					},
				],
			},
		],
	},
	{
		label: "Reference",
		type: "category",
		items: [
			{
				label: "SDKs",
				id: "getting-started/javascript",
				type: "doc",
				icon: CodeIcon,
				items: [
					{
						label: "SDKs",
						type: "category",
						items: [
							{
								type: "link",
								label: "JavaScript",
								href: "/docs/getting-started/javascript",
							},
							{
								type: "link",
								label: "Go",
								href: "/docs/getting-started/go",
							},
							{
								type: "link",
								label: "Python",
								href: "/docs/getting-started/python",
							},
							{
								type: "link",
								label: "Rust",
								href: "getting-started/rust",
							},
						],
					},
				],
			},
			{
				label: "API Documentation",
				id: "api",
				type: "doc",
				icon: FileCodeIcon,
				items: [
					{
						label: "API",
						type: "category",
						link: { type: "doc", id: "api" },
						items: [
							"api",
							{
								type: "category",
								label: "API Reference",
								items: [
									"api/reference",
									// Universal Gateway
									{
										type: "category",
										label: "Universal Gateway",
										items: [
											"api/resources/endpoints",
											"api/resources/reserved-addrs",
											"api/resources/reserved-domains",
											"api/resources/tls-certificates",
											"api/resources/kubernetes-operators",
											// Edges (deprecated)
											{
												type: "category",
												label: "Edges",
												items: [
													// HTTPS Edges
													{
														type: "category",
														label: "HTTPS Edges",
														items: [
															"api/resources/edges-https",
															"api/resources/edges-https-routes",
															"api/resources/https-edge-mutual-tls-module",
															"api/resources/edge-route-backend-module",
															"api/resources/edge-route-circuit-breaker-module",
															"api/resources/edge-route-compression-module",
															"api/resources/edge-route-ip-restriction-module",
															"api/resources/edge-route-o-auth-module",
															"api/resources/edge-route-oidc-module",
															"api/resources/edge-route-request-headers-module",
															"api/resources/edge-route-response-headers-module",
															"api/resources/edge-route-saml-module",
															"api/resources/edge-route-traffic-policy-module",
															"api/resources/edge-route-user-agent-filter-module",
															"api/resources/edge-route-webhook-verification-module",
															"api/resources/edge-route-websocket-tcp-converter-module",
															"api/resources/https-edge-tls-termination-module",
														],
													},
													// TCP Edges
													{
														type: "category",
														label: "TCP Edges",
														items: [
															"api/resources/edges-tcp",
															"api/resources/tcp-edge-backend-module",
															"api/resources/tcp-edge-ip-restriction-module",
															"api/resources/tcp-edge-traffic-policy-module",
														],
													},
													// TLS Edges
													{
														type: "category",
														label: "TLS Edges",
														items: [
															"api/resources/edges-tls",
															"api/resources/tls-edge-backend-module",
															"api/resources/tls-edge-ip-restriction-module",
															"api/resources/tls-edge-mutual-tls-module",
															"api/resources/tls-edge-tls-termination-module",
															"api/resources/tls-edge-traffic-policy-module",
														],
													},
													// Backends
													{
														type: "category",
														label: "Backends",
														items: [
															"api/resources/failover-backends",
															"api/resources/http-response-backends",
															"api/resources/tunnel-group-backends",
															"api/resources/weighted-backends",
														],
													},
												],
											},
										],
									},
									// Traffic Policy
									{
										type: "category",
										label: "Traffic Policy",
										items: [
											"api/resources/certificate-authorities",
											"api/resources/ip-policies",
											"api/resources/ip-policy-rules",
											"api/resources/application-users",
											"api/resources/application-sessions",
										],
									},
									// Secure Tunnels
									{
										type: "category",
										label: "Secure Tunnels",
										items: [
											"api/resources/agent-ingresses",
											"api/resources/tunnels",
											"api/resources/tunnel-sessions",
										],
									},
									// Observability
									{
										type: "category",
										label: "Observability",
										items: [
											"api/resources/event-destinations",
											"api/resources/event-sources",
											"api/resources/event-subscriptions",
										],
									},
									// IAM
									{
										type: "category",
										label: "IAM",
										items: [
											"api/resources/ip-restrictions",
											"api/resources/api-keys",
											"api/resources/ssh-credentials",
											"api/resources/credentials",
											"api/resources/bot-users",
										],
									},
									// SSH Certificates
									{
										type: "category",
										label: "SSH Certificates",
										items: [
											"api/resources/ssh-certificate-authorities",
											"api/resources/ssh-host-certificates",
											"api/resources/ssh-user-certificates",
										],
									},
									// Partners (Abuse)
									{
										type: "category",
										label: "Partners",
										items: ["api/resources/abuse-reports"],
									},
								],
							},
						],
					},
				],
			},
			{
				label: "CLI Reference",
				id: "agent/cli",
				type: "doc",
				icon: TerminalIcon,
				items: [
					{
						label: "CLI Reference",
						type: "category",
						link: { type: "doc", id: "agent/cli" },
						items: ["agent/cli"],
					},
				],
			},
			{
				label: "Configuration",
				id: "agent/config",
				type: "doc",
				icon: WrenchIcon,
				items: [
					{
						label: "Configuration",
						type: "category",
						link: { type: "doc", id: "agent/config" },
						items: ["agent/config/v2", "agent/config/v3"],
					},
				],
			},
			{
				label: "Errors",
				id: "errors",
				type: "doc",
				icon: ArticleIcon,
				items: [
					{
						label: "Errors",
						type: "category",
						link: { type: "doc", id: "errors" },
						items: ["errors", "errors/reference"],
					},
				],
			},
		],
	},
	{
		label: "Resources",
		type: "category",
		items: [
			{
				label: "Getting Started",
				id: "getting-started",
				type: "doc",
				icon: RocketLaunchIcon,
				items: [
					{
						label: "Start",
						type: "category",
						items: [
							"getting-started/what-is-ngrok",
							"getting-started/how-ngrok-works",
							"getting-started/why-ngrok",
							{
								label: "Getting Started",
								type: "category",
								collapsible: false,
								className: "menu__list-item--category",
								link: { type: "doc", id: "getting-started" },
								items: [
									{
										id: "getting-started/agent-cli",
										type: "doc",
										label: "Agent CLI",
									},
									{
										id: "getting-started/cloud-endpoints-quickstart",
										type: "doc",
										label: "Cloud Endpoints",
									},
									{
										label: "SDKs",
										type: "category",
										items: [
											"getting-started/javascript",
											"getting-started/go",
											"getting-started/python",
											"getting-started/rust",
										],
									},
									{
										label: "Kubernetes Operator",
										type: "category",
										link: { type: "doc", id: "" },
										items: [
											{
												type: "link",
												label: "Ingress",
												href: "/docs/getting-started/kubernetes/ingress",
											},
											{
												type: "link",
												label: "Gateway API",
												href: "/docs/getting-started/kubernetes/gateway-api",
											},
											{
												type: "link",
												label: "Custom Resources",
												href: "/docs/getting-started/kubernetes/crds",
											},
											{
												type: "link",
												label: "Endpoints",
												href: "/docs/getting-started/kubernetes/endpoints",
											},
										],
									},
								],
							},
						],
					},
				],
			},
			{
				label: "Pricing & Limits",
				id: "pricing-limits",
				type: "doc",
				icon: CurrencyDollarIcon,
				items: [
					{
						label: "Pricing & Limits",
						type: "category",
						link: { type: "doc", id: "pricing-limits" },
						items: ["pricing-limits/free-plan-limits"],
					},
				],
			},
		],
	},
];

// Use this to associate a sidebar with a path and any subpaths by default.
// This allows you to render a specific sidebar for an entire group of pages
// Without them actually being in navData.
// For example, our individual error pages are not in navData, such as
// /docs/errors/err_ngrok_3200 for example
export const catchAllSidebars: {
	id: string;
	path: string;
}[] = [
	{
		id: "errors",
		path: "/docs/errors/",
	},
];
