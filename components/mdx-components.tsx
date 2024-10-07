"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as runtime from "react/jsx-runtime";
import { Callout } from "@/components/mdx-components/callout";
import { Youtube } from "@/components/mdx-components/youtube";
import { cn } from "@/lib/utils";
import CodeBlockWithCopy from "@/components/mdx-components/copyCode";
import SectionSeparator from "@/components/mdx-components/seperator";
import { TableOfContents } from "@/components/mdx-components/toc"; // Import the TableOfContents component
import Carousel from "@/components/mdx-components/carousel";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const Heading = ({ as: Component = "h1", children, ...props }: any) => {
  const styles = {
    h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8",
    h2: "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 mt-12 mb-4",
    h3: "scroll-m-20 text-2xl font-semibold tracking-tight mt-8 mb-4",
    h4: "scroll-m-20 text-xl font-semibold tracking-tight mt-6 mb-3",
    h5: "scroll-m-20 text-lg font-semibold tracking-tight mt-6 mb-2",
    h6: "scroll-m-20 text-base font-semibold tracking-tight mt-6 mb-2",
  };

  return (
    <Component
      className={cn(
        "group relative flex items-center gap-2",
        styles[Component as keyof typeof styles],
        "prose prose-slate dark:prose-invert"
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

const components = {
  Image: (props: any) => (
    <Image className="rounded-lg border shadow-sm" {...props} alt="Blog Image" />
  ),
  Callout,
  Youtube,
  SectionSeparator,
  Carousel,
  h1: (props: any) => <Heading as="h1" {...props} />,
  h2: (props: any) => <Heading as="h2" {...props} />,
  h3: (props: any) => <Heading as="h3" {...props} />,
  h4: (props: any) => <Heading as="h4" {...props} />,
  h5: (props: any) => <Heading as="h5" {...props} />,
  h6: (props: any) => <Heading as="h6" {...props} />,
  // ... rest of your components stay the same

  a: ({ className, ...props }: any) => {
    const hasImage =
      props.children &&
      Array.isArray(props.children) &&
      props.children.some((child: any) => child.type);

    if (hasImage) {
      return (
        <Link
          className={cn(
            "inline-flex items-center gap-1 font-medium text-white hover:text-white/80 underline underline-offset-4",
            className
          )}
          {...props}
        >
          {props.children.map((child: any, index: number) => {
            if (child.type) {
              return (
                <Image
                  key={index}
                  src={child.props.src}
                  alt={child.props.alt}
                  width={25}
                  height={25}
                  className="inline-block rounded"
                />
              );
            }
            return child;
          })}
        </Link>
      );
    }

    return (
      <Link
        className={cn(
          "font-medium text-primary hover:text-primary/80 underline underline-offset-4",
          className
        )}
        {...props}
      />
    );
  },
  p: ({ className, ...props }: any) => (
    <p
      className={cn(
        "leading-5 my-2 [&:not(:first-child)]:mt-2 prose-p:text-base prose-p:text-slate-700 dark:prose-p:text-slate-300",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: any) => (
    <ul
      className={cn(
        "my-1 md:my-2 ml-6 list-disc prose-li:marker:text-slate-500 dark:prose-li:marker:text-slate-400",
        className
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }: any) => (
    <ol
      className={cn(
        "my-1 md:my-2 ml-6 list-decimal prose-li:marker:text-slate-500 dark:prose-li:marker:text-slate-400",
        className
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }: any) => (
    <li
      className={cn("mt-2 text-slate-700 dark:text-slate-300", className)}
      {...props}
    />
  ),
  blockquote: ({ className, ...props }: any) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800 dark:border-slate-700 dark:text-slate-200",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={cn("rounded-lg border shadow-sm my-1 md:my-4", className)}
      alt={alt}
      {...props}
    />
  ),
  hr: ({ ...props }) => <hr className="my-8 border-muted" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-1 md:my-2 w-full overflow-y-auto">
      <table
        className={cn("w-full border-collapse text-sm", className)}
        {...props}
      />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn(
        "m-0 border-t p-0 border-muted even:bg-muted/45",
        className
      )}
      {...props}
    />
  ),
  th: ({ className, ...props }: any) => (
    <th
      className={cn(
        "border border-muted px-4 py-2 text-left font-semibold",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: any) => (
    <td
      className={cn("border border-muted px-4 py-2 text-left", className)}
      {...props}
    />
  ),
  pre: ({ className, children, ...props }: any) => {
    const code = children?.props?.children || "";

    return (
      <CodeBlockWithCopy code={code} className={className}>
        <pre
          className={cn(
            "my-2 overflow-x-auto rounded-lg",
            "scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-100",
            className
          )}
          {...props}
        >
          {children}
        </pre>
      </CodeBlockWithCopy>
    );
  },
  code: ({ className, ...props }: any) => (
    <code
      className={cn(
        "relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    />
  ),
  strong: (props: any) => (
    <strong
      className="font-semibold text-slate-900 dark:text-slate-100"
      {...props}
    />
  ),
  em: (props: any) => (
    <em className="italic text-slate-800 dark:text-slate-200" {...props} />
  ),
  del: (props: any) => (
    <del
      className="line-through text-slate-600 dark:text-slate-400"
      {...props}
    />
  ),
};

interface MDXComponentProps {
  code: string;
  title: string; // Add title prop to filter out the file name
}

export default function MDXComponent({ code, title }: MDXComponentProps) {
  const Component = useMDXComponent(code);
  const [headings, setHeadings] = useState<
    Array<{ id: string; text: string; level: number }>
  >([]);

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("h1, h2"));
    const newHeadings = headingElements
      .map((heading) => ({
        id: heading.id,
        text: heading.textContent || "",
        level: parseInt(heading.tagName[1] || ""), // Get the heading level (1 for h1, 2 for h2)
      }))
      .filter(
        (heading) =>
          heading.text !== "Table of Contents" &&
          heading.text !== "Blog Name" &&
          heading.text !== title // Exclude the file name (title)
      ); // Exclude unwanted headings

    setHeadings(newHeadings);
  }, [code, title]); // Add title to the dependency array

  return (
    <article className="prose prose-slate max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-primary prose-pre:bg-slate-950">
      <TableOfContents headings={headings} /> {/* Render the TableOfContents */}
      <Component components={components} />
    </article>
  );
}