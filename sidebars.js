/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs - render a sidebar for each doc of that
 group - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	// By default, Docusaurus generates a sidebar from the docs folder structure
	docs: [
		"overview/index",
		"what-is-ngrok",
		"how-ngrok-works",
		"why-ngrok",
		"whats-new",
		{
			label: "Pricing & Limits",
			type: "category",
			link: { type: "doc", id: "pricing-limits/index" },
			items: ["pricing-limits/free-plan-limits"],
		},
		{
			label: "Getting Started",
			type: "category",
			collapsible: false,
			className: "menu__list-item--category",

			link: { type: "doc", id: "getting-started/index" },
			items: [
				{
					id: "getting-started/index",
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
					label: "Kubernetes",
					type: "category",
					link: { type: "doc", id: "getting-started/kubernetes/ingress" },
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
						// Commented out edges here as they're deprecated.
						// "universal-gateway/edges",
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
							type: "category",
							link: { type: "doc", id: "universal-gateway/types" },
							items: [
								{
									label: "Cloud Endpoints",
									type: "category",
									link: {
										type: "doc",
										id: "universal-gateway/cloud-endpoints/index",
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
							link: { type: "doc", id: "universal-gateway/endpoint-pooling" },
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
						{ type: "autogenerated", dirName: "universal-gateway/examples" },
					],
				},
			],
		},
		{
			label: "Traffic Policy",
			type: "category",
			collapsible: false,
			className: "menu__list-item--category",
			link: { type: "doc", id: "traffic-policy/index" },
			items: [
				"traffic-policy/index",
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
					link: { type: "doc", id: "traffic-policy/concepts/index" },
					items: [
						{
							type: "autogenerated",
							dirName: "traffic-policy/concepts",
						},
					],
				},
				// When authentication is fleshed out this should be done.
				// {
				// 	label: "Identity",
				// 	type: "category",
				// 	link: { type: "doc", id: "traffic-policy/identity/index" },
				// 	items: [
				// 		{
				// 			type: "autogenerated",
				// 			dirName: "traffic-policy/identity",
				// 		},
				// 	],
				// },
				{
					label: "Actions",
					type: "category",
					link: { type: "doc", id: "traffic-policy/actions/index" },
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
					id: "traffic-policy/macros/index",
				},
				{
					label: "Secrets",
					type: "doc",
					id: "traffic-policy/secrets",
				},
				{
					label: "Variables",
					type: "category",
					link: { type: "doc", id: "traffic-policy/variables/index" },
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
					link: { type: "doc", id: "traffic-policy/examples/index" },
					items: [
						{
							type: "autogenerated",
							dirName: "traffic-policy/examples",
						},
					],
				},
				// For later.
				// "traffic-policy/pricing-limits",
			],
		},
		{
			label: "Kubernetes",
			type: "category",
			collapsible: false,
			className: "menu__list-item--category",
			link: { type: "doc", id: "k8s/index" },
			items: [
				"k8s/index",
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
					link: { type: "doc", id: "k8s/crds/index" },
					items: [
						"k8s/crds/index",
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
		{
			label: "Traffic Observability",
			type: "category",
			collapsible: false,
			className: "menu__list-item--category",
			link: { type: "doc", id: "obs/index" },
			items: [
				"obs/index",
				"obs/traffic-inspection",
				{
					type: "category",
					label: "Events",
					link: { type: "doc", id: "obs/events/index" },
					items: [
						{ id: "obs/events/index", type: "doc", label: "Overview" },
						"obs/events/reference",
					],
				},
			],
		},
		{
			label: "Secure Tunnels",
			type: "category",
			link: { type: "doc", id: "agent/index" },
			className: "menu__list-item--category",
			collapsible: false,
			items: [
				{
					label: "Agent",
					type: "category",
					link: { type: "doc", id: "agent/index" },
					items: [
						"agent/index",
						"agent/web-inspection-interface",
						"agent/cli",
						"agent/cli-api",
						{
							label: "Configuration file",
							type: "category",
							link: { type: "doc", id: "agent/config/index" },
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
					link: { type: "doc", id: "agent-sdks/index" },
					items: [{ type: "autogenerated", dirName: "agent-sdks" }],
				},
			],
		},
		{
			label: "Identity & Access",
			type: "category",
			collapsible: false,
			className: "menu__list-item--category",
			link: { type: "doc", id: "iam/index" },
			items: [
				"iam/index",
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
		{
			type: "html",
			value: "<div class='menu__section'>Platform</div>",
		},
		{
			label: "API",
			type: "category",
			link: { type: "doc", id: "api/index" },
			items: [
				"api/index",
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
		{
			label: "Errors",
			type: "category",
			link: { type: "doc", id: "errors/index" },
			items: ["errors/index", "errors/reference"],
		},
		{
			type: "html",
			value: "<div class='menu__section'>Guides</div>",
		},
		{
			label: "API Gateway",
			type: "category",
			items: [
				"guides/api-gateway/get-started",
				"guides/api-gateway/kubernetes",
				"guides/api-gateway/multicloud",
				"guides/api-gateway/monitor-ngrok",
			],
		},
		{
			label: "Device Gateway",
			type: "category",
			items: [{ type: "autogenerated", dirName: "guides/device-gateway" }],
		},
		{
			label: "Identity Aware Proxy",
			type: "category",
			items: [
				{ type: "autogenerated", dirName: "guides/identity-aware-proxy" },
			],
		},
		{
			label: "Security Best Practices",
			type: "category",
			link: { type: "doc", id: "guides/security-best-practices/index" },
			items: [
				"guides/security-best-practices/securing-your-tunnels",
				"guides/security-best-practices/hipaa-compliance",
			],
		},

		{
			label: "Site-to-Site Connectivity",
			type: "category",
			link: { type: "doc", id: "guides/site-to-site-connectivity/index" },
			items: ["guides/site-to-site-connectivity/end-customers"],
		},
		"guides/running-behind-firewalls",
		"guides/ssh-rdp/index",
		{
			label: "Using ngrok with",
			type: "category",
			items: [{ type: "autogenerated", dirName: "using-ngrok-with" }],
		},
		{
			label: "Integrations",
			type: "category",
			link: { type: "doc", id: "integrations/index" },
			items: [{ type: "autogenerated", dirName: "integrations" }],
		},
		{
			type: "html",
			value: "<div class='menu__section'></div>",
		},
		"faq/faq",
	],
};

module.exports = sidebars;
