import type { MDXComponents } from 'mdx/types';
import { CodeBlock, CodeBlockProps } from '@/components/CodeBlock';
import { isValidElement } from 'react';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: ({ children, ...props }) => {
      if (isValidElement(children) && children.type === 'code') {
        return <>{children}</>;
      }
      return <pre {...props}>{children}</pre>;
    },
    code: (props) => <CodeBlock {...(props as CodeBlockProps)} />,
    // Add other custom components here if needed
    h1: (props) => <h1 className="mb-4 text-3xl font-bold" {...props} />,
    h2: (props) => <h2 className="mb-3 text-2xl font-bold" {...props} />,
    h3: (props) => <h3 className="mb-2 text-xl font-bold" {...props} />,
    p: (props) => <p className="mb-4" {...props} />,
    ul: (props) => <ul className="mb-4 list-inside list-disc" {...props} />,
    ol: (props) => <ol className="mb-4 list-inside list-decimal" {...props} />,
    blockquote: (props) => (
      <blockquote
        className="mb-4 border-l-4 border-gray-300 pl-4 italic"
        {...props}
      />
    ),
  };
}
