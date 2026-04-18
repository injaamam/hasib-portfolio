import { professionalExperience } from "@/lib/siteData";
import { HiBriefcase, HiMapPin, HiCheckCircle } from "react-icons/hi2";

const narrowFont = {
  fontFamily:
    '"Arial Narrow", "Roboto Condensed", "Helvetica Neue", Arial, sans-serif',
};

const timelineColors = ["#2f67a6", "#1a7a5e", "#7a3f1a"];

export default function ProfessionalExperiencePage() {
  return (
    <div className="bg-[#f5f5f2] text-[#262626]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1c1c2e] to-[#2d3a50]">
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
              <HiBriefcase className="text-[1.6rem] text-[#7ba7d0]" />
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#7ba7d0]">
                Career History
              </span>
            </div>
            <h1
              className="text-[2.8rem] font-bold leading-none text-white sm:text-[4rem]"
              style={narrowFont}
            >
              {professionalExperience.title}
            </h1>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1080px] px-6 py-14">
        {/* Timeline */}
        <div className="relative pl-8 sm:pl-14">
          {/* Vertical line */}
          <div className="absolute left-[10px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-[#2f67a6] via-[#a3bed8] to-transparent sm:left-[18px]" />

          <div className="space-y-10">
            {professionalExperience.sections.map((section, idx) => {
              const parts = section.meta ? section.meta.split(" | ") : [];
              const dateRange = parts[0] ?? "";
              const institution = parts[1] ?? "";
              const isCurrent = dateRange.includes("Present");
              const color = timelineColors[idx] ?? "#2f67a6";

              return (
                <div key={idx} className="relative">
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-[22px] top-4 h-5 w-5 rounded-full border-[3px] border-white shadow-md sm:-left-[30px]"
                    style={{ backgroundColor: color }}
                  />

                  <div className="overflow-hidden rounded-2xl bg-white shadow-[0_2px_16px_rgba(0,0,0,0.07)]">
                    {/* Color accent strip */}
                    <div
                      className="h-1.5"
                      style={{ backgroundColor: color }}
                    />

                    <div className="px-6 py-5 sm:px-7">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <h2
                          className="text-[1.1rem] font-bold text-[#1a1a1a] sm:text-[1.25rem]"
                          style={narrowFont}
                        >
                          {section.heading}
                        </h2>
                        {isCurrent && (
                          <span className="shrink-0 rounded-full bg-[#dcfce7] px-3 py-1 text-[0.7rem] font-semibold text-[#166534]">
                            Current
                          </span>
                        )}
                      </div>

                      <div className="mt-3 flex flex-wrap items-center gap-3">
                        {dateRange && (
                          <span className="rounded-md bg-[#f0f4f8] px-3 py-1 text-[0.78rem] font-medium text-[#4a6a8a]">
                            {dateRange}
                          </span>
                        )}
                        {institution && (
                          <span className="flex items-center gap-1.5 text-[0.82rem] text-[#666]">
                            <HiMapPin
                              size={13}
                              style={{ color }}
                              className="shrink-0"
                            />
                            {institution}
                          </span>
                        )}
                      </div>

                      {section.paragraphs && (
                        <div className="mt-4 space-y-2 text-[0.95rem] leading-[1.7] text-[#4d4d4d]">
                          {section.paragraphs.map((p, i) => (
                            <p key={i}>{p}</p>
                          ))}
                        </div>
                      )}

                      {section.list && (
                        <ul className="mt-4 space-y-2">
                          {section.list.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2.5 text-[0.95rem] text-[#4d4d4d]"
                            >
                              <HiCheckCircle
                                size={18}
                                className="mt-0.5 shrink-0"
                                style={{ color }}
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
