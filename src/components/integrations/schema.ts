import { z } from "zod";

export const frontMatterSchema = z.object({
	title: z.string().optional(),
	description: z.string().optional(),
});

export type FrontMatter = z.infer<typeof frontMatterSchema>;

export const integrationDocSchema = z.object({
	path: z.string().trim().min(1),
	excerpt: z.string().trim().min(1),
	content: z.string().trim().min(1),
	contentTitle: z.string().trim().min(1),
	frontMatter: frontMatterSchema,
});

export type IntegrationDoc = z.infer<typeof integrationDocSchema>;

export const IntegrationMetadataSchema = z.object({
	name: z.string().trim(),
	title: z.string().trim(),
	sidebar_label: z.string().trim(),
	description: z.string().trim(),
	excerpt: z.string().trim(),
});

export type IntegrationMetadata = z.infer<typeof IntegrationMetadataSchema>;

export const integrationSchema = z.object({
	name: z.string().trim().min(1),
	path: z.string().trim().min(1),
	metadata: IntegrationMetadataSchema,
	docs: z.array(integrationDocSchema),
});

export type Integration = z.infer<typeof integrationSchema>;
