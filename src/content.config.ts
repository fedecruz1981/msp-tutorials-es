import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const tutorials = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/tutoriales' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.string(),
    order: z.number(),
    slug: z.string(),
    originalUrl: z.string(),
    patcherUrl: z.string().optional(),
    images: z.array(z.string()).optional(),
  }),
});

export const collections = { tutorials };