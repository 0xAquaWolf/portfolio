import { format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import Image from 'next/image';

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <article className="mx-auto max-w-xl py-8 text-white">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-white">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="mt-2 text-sm text-gray-300">{post.description}</p>
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={1000}
          height={1000}
        />
        <div className="mt-4 flex justify-center space-x-4 text-xs text-gray-400">
          <span>{post.readTime}</span>
          <span>By 0xAquaWolf</span>
        </div>
      </div>
      <div
        className="[&>*:last-child]:mb-0 [&>*]:mb-3"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </article>
  );
};

export default PostLayout;
