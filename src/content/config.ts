import { defineCollection, z } from 'astro:content';

const docsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['settings', 'setup', 'guides', 'general']).optional(),
    order: z.number().optional(),
    lastUpdated: z.date().optional(),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    publishedDate: z.date(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  docs: docsCollection,
  blog: blogCollection,
};
