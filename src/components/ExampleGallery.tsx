import React, { useEffect, useState } from 'react';
import { loadExamples, categoryConfig, ExampleMeta } from './loadExamples';
import ExampleHub from './ExampleHub';

export default function ExampleGallery() {
  const [examples, setExamples] = useState<ExampleMeta[]>([]);

  useEffect(() => {
    const loaded = loadExamples();
    setExamples(loaded);
  }, []);

  if (!examples.length) {
    return <p>Loading examples...</p>;
  }

  return <ExampleHub examples={examples} categories={extractCategories(examples)} />;
}

function extractCategories(examples: ExampleMeta[]) {
  const map = new Map<string, { id: string; name: string; color: string }>();

  for (const ex of examples) {
    for (const cat of ex.categories) {
      if (!map.has(cat)) {
        const config = categoryConfig[cat];
        map.set(cat, {
          id: cat,
          name: config?.name ?? toTitleCase(cat),
          color: config?.color ?? 'gray',
        });
      }
    }
  }

  return Array.from(map.values());
}

function toTitleCase(str: string) {
  return str.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

