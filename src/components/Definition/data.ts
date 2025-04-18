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
];
