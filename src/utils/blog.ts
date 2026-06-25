import { parseFrontmatter } from "@/utils/frontmatter";

type Language = "en" | "ru";

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readTime: number;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

// `import.meta.glob` is a compile-time macro: the pattern and options must be
// inline literals so Vite can statically apply `?raw` and eager loading.
const enModules = import.meta.glob("/src/content/blog/*/index.en.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const ruModules = import.meta.glob("/src/content/blog/*/index.ru.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

// No-suffix `index.md` is treated as the Russian default (project convention).
const defaultModules = import.meta.glob("/src/content/blog/*/index.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

// Article-local images live in the submodule next to the markdown. Importing
// them as assets lets Vite emit them with hashed URLs instead of 404ing on the
// relative path the browser would otherwise resolve against the page route.
const imageModules = import.meta.glob(
  "/src/content/blog/**/*.{png,jpg,jpeg,gif,webp,svg,avif}",
  { import: "default", eager: true },
) as Record<string, string>;

type RawEntry = Partial<Record<Language, string>>;

const rawIndex = buildRawIndex();

function buildRawIndex(): Record<string, RawEntry> {
  const index: Record<string, RawEntry> = {};
  const register = (language: Language, modules: Record<string, string>) => {
    for (const [path, raw] of Object.entries(modules)) {
      const slug = slugFromPath(path);
      const entry = index[slug] ?? {};
      entry[language] = raw;
      index[slug] = entry;
    }
  };
  register("en", enModules);
  register("ru", defaultModules);
  // Explicit `.ru.md` wins over the no-suffix default.
  register("ru", ruModules);
  return index;
}

function slugFromPath(path: string): string {
  const segments = path.split("/");
  return segments[segments.length - 2];
}

function resolveRaw(slug: string, language: Language): string | undefined {
  const entry = rawIndex[slug];
  if (!entry) return undefined;
  return entry[language] ?? entry.en ?? entry.ru;
}

const WORDS_PER_MINUTE = 200;

function estimateReadTime(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

function extractTitle(body: string): { title: string; body: string } | null {
  const match = body.match(/^#\s+(.+?)\s*$/m);
  if (!match) return null;
  return {
    title: match[1].trim(),
    body: body.replace(/^#\s+.+?\s*$\r?\n?/m, ""),
  };
}

function normalizePath(path: string): string {
  const stack: string[] = [];
  for (const segment of path.split("/")) {
    if (segment === "" || segment === ".") continue;
    if (segment === "..") stack.pop();
    else stack.push(segment);
  }
  return `/${stack.join("/")}`;
}

function resolveImages(slug: string, body: string): string {
  const base = `/src/content/blog/${slug}/`;
  return body.replace(
    /(!\[[^\]]*\]\()([^)\s]+)(\s+"[^"]*")?(\))/g,
    (full, prefix, url, title, suffix) => {
      if (
        /^(https?:)?\/\//.test(url) ||
        url.startsWith("/") ||
        url.startsWith("data:")
      ) {
        return full;
      }
      const resolved = imageModules[normalizePath(base + url)];
      return resolved ? `${prefix}${resolved}${title ?? ""}${suffix}` : full;
    },
  );
}

function firstParagraph(body: string): string {
  for (const block of body.split(/\r?\n\s*\r?\n/)) {
    const text = block.trim();
    if (!text) continue;
    if (/^(#{1,6}\s|>|!\[|\||[-*+]\s|\d+\.\s|```)/.test(text)) continue;
    const collapsed = text.replace(/\s+/g, " ");
    return collapsed.length > 200
      ? `${collapsed.slice(0, 200).trimEnd()}…`
      : collapsed;
  }
  return "";
}

function toPost(slug: string, raw: string): BlogPost {
  const { data, content } = parseFrontmatter(raw);

  let body = content;
  let title = typeof data.title === "string" ? data.title : "";
  if (!title) {
    const extracted = extractTitle(body);
    if (extracted) {
      title = extracted.title;
      body = extracted.body;
    } else {
      title = slug;
    }
  }

  const description =
    typeof data.description === "string" && data.description
      ? data.description
      : firstParagraph(body);

  return {
    slug,
    title,
    date: typeof data.date === "string" ? data.date : "",
    description,
    tags: Array.isArray(data.tags) ? data.tags : [],
    readTime: estimateReadTime(content),
    content: resolveImages(slug, body),
  };
}

export function getBlogPosts(language: Language): BlogPostMeta[] {
  return Object.keys(rawIndex)
    .map((slug) => {
      const raw = resolveRaw(slug, language);
      return raw ? toPost(slug, raw) : null;
    })
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogPost(slug: string, language: Language): BlogPost | null {
  const raw = resolveRaw(slug, language);
  return raw ? toPost(slug, raw) : null;
}
