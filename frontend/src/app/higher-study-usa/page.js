import Link from "next/link";
import { higherStudyUSA } from "@/lib/higherStudyUSA";

// Converts a section/subsection title into a URL-safe anchor ID (e.g. "My Title" → "my-title")
function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Scans a plain text string for URLs and wraps each one in a styled external link.
// Non-URL fragments are returned as plain text nodes.
function renderText(text) {
  const urlRegex = /(https?:\/\/[^\s,]+)/g;
  const parts = text.split(urlRegex);
  return parts.map((part, i) =>
    /^https?:\/\//.test(part) ? (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="break-all text-[#2058a0] underline hover:text-[#0f2744]"
      >
        {part}
      </a>
    ) : (
      part
    ),
  );
}

// Renders an array of content strings as a bulleted list, with URLs auto-linked via renderText.
function ContentList({ content }) {
  return (
    <ul className="mt-2 space-y-2">
      {content.map((item, i) => (
        <li key={i} className="text-[0.9rem] leading-[1.7] text-[#444]">
          {renderText(item)}
        </li>
      ))}
    </ul>
  );
}

// Renders a single subsection block. Supports two nesting levels:
//   level 2 — direct child of a Section (larger indent, darker border)
//   level 3 — nested child of a level-2 subsection (deeper indent, lighter border)
// If the subsection has a `link` field, the title becomes a clickable internal link
// and a "→ Click to view" hint is shown below it.
function Subsection({ sub, level = 2 }) {
  const id = slugify(sub.title);
  // Different typography for level-2 vs level-3 titles to reinforce visual hierarchy
  const titleClass =
    level === 2
      ? "mb-2 text-[1rem] font-semibold text-[#1a3a6c]"
      : "mb-1 text-[0.85rem] font-semibold text-[#2058a0]";

  return (
    <div
      id={id}
      className={
        level === 3
          ? "mt-3 ml-6 pl-4 border-l-2 border-[#dde5f0] scroll-mt-[80px]"
          : "mt-7 ml-2 pl-4 border-l-2 border-[#b8c9e4] scroll-mt-[80px]"
      }
    >
      <h3 className={titleClass}>
        {sub.link ? (
          <Link href={sub.link} className="hover:underline">
            {sub.title}
          </Link>
        ) : (
          sub.title
        )}
      </h3>
      {sub.link && (
        <Link
          href={sub.link}
          className="mt-1 inline-block text-[0.82rem] text-[#2058a0] hover:underline"
        >
          → Click to view
        </Link>
      )}
      {sub.content && <ContentList content={sub.content} />}
      {sub.subsections &&
        sub.subsections.map((child, i) => (
          <Subsection key={i} sub={child} level={3} />
        ))}
    </div>
  );
}

// Renders a top-level section as a white card with an h2 heading and its subsections below.
function Section({ section }) {
  const id = slugify(section.title);
  return (
    <div id={id} className="rounded-xl bg-white p-6 shadow-sm scroll-mt-[80px]">
      <h2 className="text-[1.15rem] font-bold text-[#0f2744] border-b border-[#e5eaf3] pb-3 mb-4">
        {section.title}
      </h2>
      {section.content && <ContentList content={section.content} />}
      {section.subsections &&
        section.subsections.map((sub, i) => (
          <Subsection key={i} sub={sub} level={2} />
        ))}
    </div>
  );
}

// Recursively renders table-of-contents items as anchor links.
// depth=0 → top-level sections; depth>0 → indented subsection links.
function TocItems({ items, depth = 0 }) {
  const linkClass =
    depth === 0
      ? "block rounded px-2 py-1.5 text-[0.82rem] font-semibold leading-snug text-[#1a3a6c] transition hover:bg-[#eef2ff] hover:text-[#0f2744]"
      : "block rounded px-2 py-1 text-[0.78rem] leading-snug text-[#556080] transition hover:bg-[#eef2ff] hover:text-[#1a3a6c]";

  return (
    <ul
      className={
        depth > 0
          ? "ml-3 mt-0.5 space-y-0.5 border-l border-[#dde5f0] pl-2"
          : "space-y-0.5"
      }
    >
      {items.map((item, i) => (
        <li key={i}>
          <a href={`#${slugify(item.title)}`} className={linkClass}>
            {item.title}
          </a>
          {item.subsections && (
            <TocItems items={item.subsections} depth={depth + 1} />
          )}
        </li>
      ))}
    </ul>
  );
}

// Sticky sidebar shown on large screens listing all sections and subsections as anchor links.
function TableOfContents() {
  return (
    <aside className="hidden lg:block w-[220px] shrink-0">
      <div className="sticky top-[80px] max-h-[calc(100vh-96px)] overflow-y-auto pr-2">
        <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.15em] text-[#9ca3af]">
          Contents
        </p>
        <TocItems items={higherStudyUSA.sections} />
      </div>
    </aside>
  );
}

// Main page: hero banner at the top, then a two-column layout of TOC sidebar + section cards.
export default function HigherStudyUSAPage() {
  return (
    <div className="bg-[#f5f6fb] min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2744] to-[#1f4570] px-6 py-12">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1400px]">
          <h1 className="text-[2rem] font-bold text-white sm:text-[2.8rem]">
            Higher Study in USA
          </h1>
          <p className="mt-2 text-[0.9rem] text-[#a3bed8]">
            A comprehensive guide based on personal experience
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-6 py-10">
        <div className="flex gap-10">
          <TableOfContents />
          <div className="min-w-0 flex-1 space-y-6">
            {higherStudyUSA.sections.map((section, i) => (
              <Section key={i} section={section} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
