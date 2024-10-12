import { defineConfig, defineCollection, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";
import { h } from "hastscript";
import remarkGfm from "remark-gfm"; // Import remark-gfm
import remarkToc from "remark-toc"; // Import remark-toc

function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readTime} min`;
}

const computedFields = <T extends { slug: string, body: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
  readTime: calculateReadTime(data.body),
});

const posts = defineCollection({
  name: "Post",
  pattern: "posts/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999),
      date: s.isodate(),
      imageUrl: s.string(),
      published: s.boolean().default(true),
      tags: s.array(s.string()).optional(),
      featured: s.boolean().default(false),
      readTime: s.string().default("1 min"),
      body: s.mdx(),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "catppuccin-macchiato",
          transformers: [],
        },
      ],
      [
        rehypeAutoLinkHeadings,
        {
          behavior: "append",
          properties: {
            className: ["anchor-link"],
            ariaLabel: "Link to section",
          },
          content: h("span", { className: "anchor-icon" }, "#"),
        },
      ],
    ],
    remarkPlugins: [
      remarkGfm, // Add remark-gfm
      remarkToc, // Add remark-toc
    ],
  },
});