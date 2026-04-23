import { higherStudyUSA } from "@/lib/higherStudyUSA";

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
    )
  );
}

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

function Subsection({ sub, level = 2 }) {
  const titleClass =
    level === 2
      ? "mb-2 text-[1rem] font-semibold text-[#1a3a6c]"
      : "mb-1 text-[0.9rem] font-semibold text-[#2058a0]";

  return (
    <div className={level === 3 ? "mt-4 pl-4 border-l-2 border-[#dde5f0]" : "mt-5"}>
      <h3 className={titleClass}>{sub.title}</h3>
      {sub.content && <ContentList content={sub.content} />}
      {sub.subsections &&
        sub.subsections.map((child, i) => (
          <Subsection key={i} sub={child} level={3} />
        ))}
    </div>
  );
}

function Section({ section }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
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

export default function HigherStudyUSAPage() {
  return (
    <div className="bg-[#f5f6fb] min-h-screen">
      <section className="bg-gradient-to-br from-[#0f2744] to-[#1f4570] px-6 py-12">
        <div className="mx-auto max-w-[860px]">
          <h1 className="text-[2rem] font-bold text-white sm:text-[2.8rem]">
            Higher Study in USA
          </h1>
          <p className="mt-2 text-[0.9rem] text-[#a3bed8]">
            A comprehensive guide based on personal experience
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[860px] px-6 py-10 space-y-6">
        {higherStudyUSA.sections.map((section, i) => (
          <Section key={i} section={section} />
        ))}
      </div>
    </div>
  );
}
