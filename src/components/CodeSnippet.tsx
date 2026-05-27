import { Highlight, themes } from 'prism-react-renderer';

interface CodeSnippetProps {
  code: string;
  caption: string;
}

export default function CodeSnippet({ code }: CodeSnippetProps) {
  return (
    <div>
      <div className="bg-primary rounded-xl overflow-hidden">
      <div className="px-4 py-2 border-b border-white/10 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-white/50 ml-2">automation.py</span>
      </div>
      <Highlight theme={themes.nightOwl} code={code} language="python">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${className} text-sm p-4 overflow-x-auto font-mono`} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span className="text-white/30 select-none w-8 inline-block text-right mr-4">
                  {i + 1}
                </span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      </div>
    </div>
  );
}
