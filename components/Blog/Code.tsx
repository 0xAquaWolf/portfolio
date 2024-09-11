import { codeToHtml } from 'shiki';

export default function Code({ code }: { code: string }) {
  return (
    <main>
      <CodeBlock code={code} />
    </main>
  );
}

async function CodeBlock({ code }: { code: string }) {
  const out = await codeToHtml(code, {
    lang: 'ts',
    theme: 'catppuccin-mocha',
  });

  return <div className="text-lg" dangerouslySetInnerHTML={{ __html: out }} />;
}
