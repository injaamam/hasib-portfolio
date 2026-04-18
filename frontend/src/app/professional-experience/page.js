import { professionalExperience } from "@/lib/siteData";

export default function ProfessionalExperiencePage() {
  return (
    <div className="bg-[#f5f5f2] text-[#262626]">
      <section className="bg-white px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-[860px]">
          <h1
            className="text-[2.4rem] leading-none font-bold uppercase tracking-[0.01em] text-[#111111] sm:text-[3rem]"
            style={{
              fontFamily:
                '"Arial Narrow", "Roboto Condensed", "Helvetica Neue", Arial, sans-serif',
            }}
          >
            {professionalExperience.title}
          </h1>
          <div className="mt-3 h-[4px] w-16 bg-[#2f67a6]" />

          <div className="mt-12 space-y-12">
            {professionalExperience.sections.map((section) => (
              <div key={section.heading} className="border-b border-[#e5e7eb] pb-12 last:border-0 last:pb-0">
                <h2
                  className="text-[1.35rem] font-bold text-[#1a1a1a] sm:text-[1.5rem]"
                  style={{
                    fontFamily:
                      '"Arial Narrow", "Roboto Condensed", "Helvetica Neue", Arial, sans-serif',
                  }}
                >
                  {section.heading}
                </h2>
                {section.meta && (
                  <p className="mt-2 text-[0.95rem] text-[#6b7280] sm:text-[1rem]">
                    {section.meta}
                  </p>
                )}
                {section.paragraphs && (
                  <div className="mt-4 space-y-3 text-[1rem] leading-[1.7] text-[#4d4d4d]">
                    {section.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                )}
                {section.list && (
                  <ul className="mt-4 space-y-2 text-[1rem] leading-[1.7] text-[#4d4d4d]">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-[#2f67a6]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
