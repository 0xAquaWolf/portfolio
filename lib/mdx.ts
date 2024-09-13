import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.(mdx)$/, '');
  const filePath = path.join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const { content: compiledContent } = await compileMDX({
    source: content,
    options: { parseFrontmatter: true },
  });

  return {
    slug: realSlug,
    frontmatter: data,
    content: compiledContent,
  };
}
