import { education } from "@/lib/siteData";
import { HiAcademicCap, HiWrenchScrewdriver } from "react-icons/hi2";

const narrowFont = {
  fontFamily:
    '"Arial Narrow", "Roboto Condensed", "Helvetica Neue", Arial, sans-serif',
};

const degreeCardStyles = [
  {
    headerClass:
      "bg-gradient-to-r from-[#0f2744] via-[#1a3a5c] to-[#2f67a6]",
    badge: "PhD Fellow",
    badgeClass: "bg-white/20 text-white",
    dotClass: "bg-[#a3bed8]",
  },
  {
    headerClass:
      "bg-gradient-to-r from-[#1a3a6c] via-[#2258a0] to-[#3a82c4]",
    badge: "MSc",
    badgeClass: "bg-white/20 text-white",
    dotClass: "bg-[#3a82c4]",
  },
  {
    headerClass:
      "bg-gradient-to-r from-[#0e4a5a] via-[#18748c] to-[#2898a4]",
    badge: "BSc · 1st in Class",
    badgeClass: "bg-white/20 text-white",
    dotClass: "bg-[#2898a4]",
  },
];

export default function EducationPage() {
  const degreeSections = education.sections.filter((s) => s.meta);
  const skillsSection = education.sections.find((s) => s.list);

  return (
    <div className="bg-[#f0f4fa] text-[#1a1a2e]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2744] to-[#2058a0]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
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
          {degreeSections.map((section, idx) => {
            const style = degreeCardStyles[idx] ?? degreeCardStyles[0];
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.09)] transition-shadow hover:shadow-[0_8px_32px_rgba(0,0,0,0.14)]"
              >
                <div className={`${style.headerClass} px-7 py-6`}>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h2
                      className="text-[1.1rem] font-bold leading-snug text-white sm:text-[1.25rem]"
                      style={narrowFont}
                    >
                      {section.heading}
                    </h2>
                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-[0.7rem] font-semibold ${style.badgeClass}`}
                    >
                      {style.badge}
                    </span>
                  </div>
                  <p className="mt-2 text-[0.85rem] text-white/70">
                    {section.meta}
                  </p>
                </div>
                {section.paragraphs && (
                  <div className="flex flex-wrap gap-3 px-7 py-5">
                    {section.paragraphs[0].split(" | ").map((stat, i) => (
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
            );
          })}
        </div>

        {/* Skills section */}
        {skillsSection && (
          <div className="mt-14">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2f67a6] text-white">
                <HiWrenchScrewdriver size={18} />
              </div>
              <h2
                className="text-[1.4rem] font-bold text-[#1a1a2e]"
                style={narrowFont}
              >
                {skillsSection.heading}
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {skillsSection.list.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl bg-white px-5 py-3.5 shadow-sm"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#2f67a6]" />
                  <span className="text-[0.95rem] text-[#333]">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
