import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

// Knowledge Hub articles. The EPCMst Content Operations hub publishes each
// approved article as one Markdown file in src/content/resources/<slug>.md,
// using exactly the front matter below (from EPCMst's "Publish New Article"
// guide, 9 Oct 2026). A file that doesn't match fails the build, so a broken
// article can never go live.
const postCollection = defineCollection({
  loader: glob({ pattern: ['*.md'], base: 'src/content/resources' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updateDate: z.coerce.date().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    category: z.string().default('Market Analysis'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    author: z.string().default('EPCMst Technical Services'),

    metadata: metadataDefinition(),
  }),
});

export const collections = {
  post: postCollection,
};
