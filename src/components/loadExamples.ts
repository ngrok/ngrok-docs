export type ExampleMeta = {
  slug: string;
  title: string;
  description: string;
  categories: string[];
  phases?: string[];
};

export const categoryConfig: Record<string, { name: string; color: string }> = {
  'use-ngrok-with': {
    name: 'Use ngrok with...',
    color: 'cyan',
  },
  'traffic-control': {
    name: 'Traffic Control',
    color: 'green',
  },
  'authn-authz': {
    name: 'Authentication & Authorization',
    color: 'rose',
  },
  fundamentals: {
    name: 'Fundamentals',
    color: 'yellow',
  },
};

export function loadExamples(): ExampleMeta[] {
  const context = require.context(
    '../../docs/universal-gateway/examples',
    false,
    /\.mdx$/
  );

  return context.keys().map((key) => {
    const mod = context(key);
    const frontMatter = mod.frontMatter;

		const slug = key.replace(/^\.\//, '').replace(/\.mdx$/, '');

    return {
      slug: slug,
      title: frontMatter.title,
      description: frontMatter.description,
      categories: frontMatter.categories ?? [],
      phases: frontMatter.phases ?? [],
    } satisfies ExampleMeta;
  });
}
