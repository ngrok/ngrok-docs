export type Term = {
	titles: string[];
	meaning: string;
	link?: string;
};

export const terms: Term[] = [
	{
		titles: ["CIDR", "IP CIDR"],
		meaning:
			"Classless Inter-Domain Routing is a method used to allocate IP addresses more efficiently and route IP packets more flexibly than the older class-based system.",
		link: "https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing",
	},
	{
		titles: ["SCIM", "SCIM provisioning"],
		meaning:
			"SSO SCIM Provisioning refers to the combination of two identity management technologies: Single Sign-On (SSO) and System for Cross-domain Identity Management (SCIM). Together, they automate user account creation, updates, and removal across different systems.",
		link: "https://en.wikipedia.org/wiki/System_for_Cross-domain_Identity_Management",
	},
	{
		titles: ["JIT", "JIT provisioning"],
		meaning:
			"Just-In-Time Single Sign-On Provisioning is a user account provisioning method that automatically creates (or updates) user accounts at the time of login via Single Sign-On, rather than pre-creating all user accounts in advance.",
		link: "https://en.wikipedia.org/wiki/System_for_Cross-domain_Identity_Management",
	},
	{
		titles: ["K8s", "K8"],
		meaning: "K8s is an industry-standard abbreviation for Kubernetes.",
	},
	{
		titles: ["Ingress"],
		meaning:
			"An ingress is an entry point into a network for traffic from outside of the network.",
	},
	{
		titles: ["TCP KeepAlive", "TCP Keep-Alive", "TCP Keep Alive"],
		meaning:
			"TCP KeepAlive enables TCP connections to remain active even when no data is exchanged between the connected endpoints.",
		link: "https://en.wikipedia.org/wiki/Keepalive",
	},
	{
		titles: ["SaaS"],
		meaning:
			"SaaS is an industry-standard abbreviation of the term Software as a Service.",
	},
	{
		titles: ["v3"],
		meaning: "v3 is shorthand for the third major version of the ngrok Agent.",
		link: "/docs/guides/other-guides/upgrade-v2-v3/",
	},
];
