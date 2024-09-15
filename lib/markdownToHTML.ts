import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypePrettyCode from 'rehype-pretty-code';
import { transformerCopyButton } from '@rehype-pretty/transformers';
import rehypeRaw from 'rehype-raw';

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypePrettyCode, {
      theme: 'catppuccin-macchiato',
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3000,
        }),
      ],
    })
    .use(rehypeStringify as any)
    .process(markdown);

  return result.toString();
}
