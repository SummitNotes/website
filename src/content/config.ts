import { defineCollection, z } from 'astro:content';

const docsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['settings', 'setup', 'guides']).optional(),
    order: z.number().optional(),
    lastUpdated: z.date().optional(),
  }),
});

export const collections = {
  docs: docsCollection,
};
