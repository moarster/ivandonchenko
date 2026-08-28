import ReactMarkdown, { type ExtraProps } from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
}

/** A lyrical aside is a paragraph whose entire content is one `<em>`. CSS alone
    cannot tell that apart from a paragraph with an inline `*emphasis*` in it,
    because `:only-child` ignores text nodes. */
function isLyricalAside(node: ExtraProps["node"]): boolean {
  const meaningful = (node?.children ?? []).filter(
    (child) => child.type !== "text" || child.value.trim() !== "",
  );
  const [only] = meaningful;
  return (
    meaningful.length === 1 && only.type === "element" && only.tagName === "em"
  );
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="markdown-content">
      {/* Articles use raw HTML for `<details>` blocks and lyrical asides, which
          have no Markdown equivalent. The content is ours, so passing it through
          unsanitized is safe. */}
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          p: ({ node, children, ...props }) => (
            <p
              className={isLyricalAside(node) ? "lyrical-aside" : undefined}
              {...props}
            >
              {children}
            </p>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
