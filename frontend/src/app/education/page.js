import { education } from "@/lib/siteData";
import { HiAcademicCap, HiWrenchScrewdriver, HiClipboardDocumentList } from "react-icons/hi2";

const narrowFont = {
  fontFamily:
    '"Arial Narrow", "Roboto Condensed", "Helvetica Neue", Arial, sans-serif',
};

const degreeAccentColors = ["#2f67a6", "#1a5296", "#0f2744"];

export default function EducationPage() {
  const { degrees, technicalSkills, standardizedTests } = education;

  return (
    <div className="bg-[#f5f5f2] text-[#262626]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2744] to-[#1f3a5c]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,1) 39px, rgba(255,255,255,1) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,1) 39px, rgba(255,255,255,1) 40px)",
          }}
        />
        <div className="mx-auto flex min-h-[240px] max-w-[1180px] items-end px-6 pb-12 pt-16">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <HiAcademicCap className="text-[1.6rem] text-[#a3bed8]" />
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#a3bed8]">
                Academic Credentials
              </span>
            </div>
            <h1
              className="text-[2.8rem] font-bold leading-none text-white sm:text-[4rem]"
              style={narrowFont}
            >
              {education.title}
            </h1>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1080px] px-6 py-14">
        {/* Degree cards */}
        <div className="space-y-6">
          {degrees.map((degree, idx) => {
            const accentColor = degreeAccentColors[idx] ?? degreeAccentColors[0];
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl bg-white shadow-[0_2px_16px_rgba(0,0,0,0.07)] transition-shadow hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
              >
                {/* Thin accent strip */}
                <div className="h-1.5" style={{ backgroundColor: accentColor }} />
                <div className="px-7 py-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h2
                      className="text-[1.1rem] font-bold leading-snug text-[#1a1a1a] sm:text-[1.25rem]"
                      style={narrowFont}
                    >
                      {degree.heading}
                    </h2>
                    <span
                      className="shrink-0 rounded-full px-3 py-1 text-[0.7rem] font-semibold text-white"
                      style={{ backgroundColor: accentColor }}
                    >
                      {degree.badge}
                    </span>
                  </div>
                  <p className="mt-2 text-[0.85rem] text-[#666]">
                    {degree.meta}
                  </p>
                  {degree.paragraphs && degree.paragraphs.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-3">
                      {degree.paragraphs[0].split(" | ").map((stat, i) => (
                        <span
                          key={i}
                          className="rounded-lg bg-[#eef4ff] px-4 py-2 text-[0.88rem] font-medium text-[#2058a0]"
                        >
                          {stat}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Skills */}
        {technicalSkills && (
          <div className="mt-14">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2f67a6] text-white">
                <HiWrenchScrewdriver size={18} />
              </div>
              <h2
                className="text-[1.4rem] font-bold text-[#262626]"
                style={narrowFont}
              >
                {technicalSkills.heading}
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {technicalSkills.categories.map((cat, ci) => (
                <div
                  key={ci}
                  className="rounded-xl bg-white px-5 py-4 shadow-sm"
                >
                  <p className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-[#2f67a6]">
                    {cat.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, ii) => (
                      <span
                        key={ii}
                        className="rounded-md bg-[#eef4ff] px-3 py-1 text-[0.82rem] font-medium text-[#1a3a6c]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Standardized Tests */}
        {standardizedTests && (
          <div className="mt-14">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2f67a6] text-white">
                <HiClipboardDocumentList size={18} />
              </div>
              <h2
                className="text-[1.4rem] font-bold text-[#262626]"
                style={narrowFont}
              >
                {standardizedTests.heading}
              </h2>
            </div>
            <div className="space-y-4">
              {standardizedTests.tests.map((test, ti) => (
                <div
                  key={ti}
                  className="overflow-hidden rounded-xl bg-white shadow-sm"
                >
                  <div className="h-1.5 bg-[#2f67a6]" />
                  <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4">
                    <span
                      className="text-[1.2rem] font-bold text-[#1a1a1a]"
                      style={narrowFont}
                    >
                      {test.name}
                    </span>
                    <span className="rounded-full bg-[#eef4ff] px-3 py-1 text-[0.78rem] font-semibold text-[#2058a0]">
                      Total: {test.score}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 border-t border-[#f0f0f0] px-6 py-4">
                    {test.breakdown.map((b, bi) => (
                      <div key={bi} className="text-center">
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[#9ca3af]">
                          {b.section}
                        </p>
                        <p className="text-[1.2rem] font-bold text-[#0f2744]">
                          {b.score}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
