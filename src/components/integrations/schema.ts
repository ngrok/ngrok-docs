import { z } from "zod";

export const docFrontMatterSchema = z.object({
	description: z.string().optional(),
	sidebar_label: z.string().optional(),
	tags: z.array(z.string()).optional(),
	title: z.string().optional(),
});
export type DocFrontMatter = z.infer<typeof docFrontMatterSchema>;

export const integrationDocSchema = z.object({
	content: z.string().trim().min(1),
	contentTitle: z.string().trim().min(1),
	excerpt: z.string().trim().min(1),
	frontMatter: docFrontMatterSchema.optional(),
	path: z.string().trim().min(1),
});
export type IntegrationDoc = z.infer<typeof integrationDocSchema>;

export const IntegrationMetadataSchema = z.object({
	description: z.string().trim(),
	excerpt: z.string().trim().optional(),
	logo: z.string().trim().optional(),
	name: z.string().trim(),
	sidebar_label: z.string().trim(),
	title: z.string().trim(),
});
export type IntegrationMetadata = z.infer<typeof IntegrationMetadataSchema>;

export const integrationSchema = z.object({
	docs: z.array(integrationDocSchema),
	metadata: IntegrationMetadataSchema,
	name: z.string().trim().toLowerCase().min(1),
	path: z.string().trim().min(1),
});
export type Integration = z.infer<typeof integrationSchema>;

export const integrationsSchema = z.array(integrationSchema);
export type Integrations = z.infer<typeof integrationsSchema>;
