// components/MdxContent.tsx
import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';

const CopyButton = ({ code }: { code: string }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <button onClick={handleCopy} className="copy-button">
      Copy
    </button>
  );
};

const components = {
  pre: (props: React.ComponentProps<'pre'>) => {
    const code = React.Children.toArray(
      props.children,
    )[0] as React.ReactElement;
    return (
      <pre className="relative" {...props}>
        <CopyButton code={code.props.children} />
        {props.children}
      </pre>
    );
  },
};

export function CodeBlock({ source }: { source: string }) {
  return <MDXRemote source={source} components={components} />;
}
