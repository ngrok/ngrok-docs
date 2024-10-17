import { z } from "zod";

const docFrontMatterSchema = z.object({
	description: z.string().optional(),
	sidebar_label: z.string().optional(),
	tags: z.array(z.string()).optional(),
	title: z.string().optional(),
});

const integrationDocSchema = z.object({
	content: z.string().trim().min(1),
	contentTitle: z.string().trim().min(1),
	excerpt: z.string().trim().min(1).optional(),
	frontMatter: docFrontMatterSchema.optional(),
	path: z.string().trim().min(1),
});

const integrationMetadataSchema = z.object({
	description: z.string().trim(),
	excerpt: z.string().trim().optional(),
	logo: z.string().trim().optional(),
	name: z.string().trim(),
	sidebar_label: z.string().trim(),
	title: z.string().trim(),
});

const integrationSchema = z.object({
	docs: z.array(integrationDocSchema),
	metadata: integrationMetadataSchema,
	name: z.string().trim().toLowerCase().min(1),
	path: z.string().trim().min(1),
});
export type Integration = z.infer<typeof integrationSchema>;

const integrationsSchema = z.array(integrationSchema);
export type Integrations = z.infer<typeof integrationsSchema>;

export function parseIntegrations(data: unknown): Integrations {
	try {
		return integrationsSchema.parse(data);
	} catch (error) {
		console.error(error);
		return [];
	}
}
