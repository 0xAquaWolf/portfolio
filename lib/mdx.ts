import { glob } from 'glob';
import { join } from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { writeFileSync } from 'fs';

const postsDirectory = join(process.cwd(), 'posts');
const cacheFile = join(process.cwd(), '.cache', 'readTimes.json');

interface PostData {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  featured: boolean;
  readTime: string;
  filepath: string;
  content: string;
  slug: string;
  [key: string]: any;
}

function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readTime} min`;
}

function loadCache(): Record<string, string> {
  if (fs.existsSync(cacheFile)) {
    return JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
  }
  return {};
}

function saveCache(cache: Record<string, string>) {
  const cacheDir = join(process.cwd(), '.cache');
  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir, { recursive: true });
  }
  fs.writeFileSync(cacheFile, JSON.stringify(cache, null, 2));
}

function log(message: string) {
  if (process.env.NODE_ENV !== 'production') {
    console.log(message);
  }
}

export function getPostSlugs() {
  return glob.sync('**/*.mdx', { cwd: postsDirectory });
}

export function getPost(filepath: string): PostData {
  const fullPath = join(postsDirectory, filepath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  let readTime = data.readTime;
  let updatedFrontMatter = false;

  if (!readTime) {
    log(`Calculating read time for: ${filepath}`);
    const cache = loadCache();
    if (cache[filepath]) {
      readTime = cache[filepath];
      log(`Read time found in cache: ${readTime}`);
    } else {
      readTime = calculateReadTime(content);
      cache[filepath] = readTime;
      saveCache(cache);
      log(`New read time calculated: ${readTime}`);
    }

    // Update front matter
    data.readTime = readTime;
    updatedFrontMatter = true;
  }

  if (updatedFrontMatter) {
    log(`Updating front matter for: ${filepath}`);
    const updatedFileContents = matter.stringify(content, data);
    writeFileSync(fullPath, updatedFileContents);
    log(`Front matter updated for: ${filepath}`);
  }

  return {
    ...data,
    content,
    filepath,
    slug: filepath.replace(/\.mdx$/, ''),
    readTime,
  } as PostData;
}

export function getPosts(limit: number = -1): PostData[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPost(slug))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return limit === -1 ? posts : posts.slice(0, limit);
}

export function getPostBySlug(slug: string): PostData | undefined {
  //   console.log({ slug });
  const allPosts = getPosts();
  return allPosts.find((post) => post.slug === slug);
}

export function getFeaturedPosts(limit: number = 8): PostData[] {
  const allPosts = getPosts();
  const featuredPosts = allPosts.filter((post) => Boolean(post.featured));
  return featuredPosts.slice(0, limit);
}
