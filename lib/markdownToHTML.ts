import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeShiki from '@shikijs/rehype';
import rehypeRaw from 'rehype-raw';

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeShiki, {
      theme: 'catppuccin-macchiato',
    })
    // .use(() => (tree) => {
    //   const visit = (node: any) => {
    //     if (node.tagName === 'pre' && node.children?.[0]?.tagName === 'code') {
    //       const codeContent = node.children[0].children[0].value;
    //       node.properties = {
    //         ...node.properties,
    //         'data-code-content': codeContent,
    //         style: 'position: relative;',
    //       };
    //       node.children.push({
    //         type: 'element',
    //         tagName: 'button',
    //         properties: {
    //           className: 'copy-button',
    //           onclick: 'copyToClipboard(this)',
    //           style: 'position: absolute; top: 0.5rem; right: 0.5rem;',
    //         },
    //         children: [{ type: 'text', value: 'Copy' }],
    //       });
    //     }
    //     if (node.children) node.children.forEach(visit);
    //   };
    //   visit(tree);
    // })
    .use(rehypeStringify as any)
    .process(markdown);

  const htmlWithScript = `
    ${result.toString()}
  `;

  return htmlWithScript;
}

null;
