import { publicationsProjects } from "@/lib/siteData";
import { HiBookOpen, HiPresentationChartLine } from "react-icons/hi2";

const narrowFont = {
  fontFamily:
    '"Arial Narrow", "Roboto Condensed", "Helvetica Neue", Arial, sans-serif',
};

function parsePublication(item) {
  const match = item.match(/\(([^)]+)\)$/);
  if (!match) return { title: item, badge: null };
  return {
    title: item.replace(/\s*\([^)]+\)$/, "").trim(),
    badge: match[1],
  };
}

const sectionMeta = [
  {
    icon: HiBookOpen,
    accentClass: "from-[#0d3340] to-[#136680]",
    badgeClass: "bg-[#dbeafe] text-[#1d4ed8]",
    typeLabel: "Journal",
    typeBadgeClass: "bg-[#e0f2fe] text-[#0369a1]",
  },
  {
    icon: HiPresentationChartLine,
    accentClass: "from-[#1a3a1a] to-[#2a6a2a]",
    badgeClass: "bg-[#dcfce7] text-[#166534]",
    typeLabel: "Conference",
    typeBadgeClass: "bg-[#f0fdf4] text-[#15803d]",
  },
];

export default function PublicationsProjectsPage() {
  return (
    <div className="bg-[#f4f6f9] text-[#1a1a2e]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d3340] to-[#136680]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(255,255,255,1) 10px, rgba(255,255,255,1) 11px)",
          }}
        />
        <div className="mx-auto flex min-h-[240px] max-w-[1180px] items-end px-6 pb-12 pt-16">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <HiBookOpen className="text-[1.6rem] text-[#7dd3d8]" />
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#7dd3d8]">
                Research Output
              </span>
            </div>
            <h1
              className="text-[2.8rem] font-bold leading-none text-white sm:text-[4rem]"
              style={narrowFont}
            >
              {publicationsProjects.title}
            </h1>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1080px] px-6 py-14">
        {publicationsProjects.sections.map((section, sIdx) => {
          const meta = sectionMeta[sIdx] ?? sectionMeta[0];
          const SectionIcon = meta.icon;
          return (
            <div key={sIdx} className={sIdx > 0 ? "mt-14" : ""}>
              {/* Section header */}
              <div className="mb-6 flex items-center gap-3">
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${meta.accentClass} text-white`}
                >
                  <SectionIcon size={18} />
                </div>
                <h2
                  className="text-[1.4rem] font-bold text-[#1a1a2e]"
                  style={narrowFont}
                >
                  {section.heading}
                </h2>
                <span
                  className={`ml-1 rounded-full px-3 py-1 text-[0.72rem] font-semibold ${meta.typeBadgeClass}`}
                >
                  {meta.typeLabel}
                </span>
                <span className="rounded-full bg-[#e5e7eb] px-2.5 py-0.5 text-[0.72rem] font-semibold text-[#374151]">
                  {section.list?.length ?? 0}
                </span>
              </div>

              {/* Paper cards */}
              {section.list && (
                <div className="space-y-4">
                  {section.list.map((item, i) => {
                    const { title, badge } = parsePublication(item);
                    return (
                      <div
                        key={i}
                        className="flex gap-4 rounded-xl bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
                      >
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${meta.accentClass} text-[0.95rem] font-bold text-white`}
                        >
                          {i + 1}
                        </div>
                        <div className="min-w-0">
                          <p className="text-[0.97rem] font-medium leading-[1.5] text-[#1a1a2e]">
                            {title}
                          </p>
                          {badge && (
                            <span
                              className={`mt-2 inline-block rounded px-2.5 py-0.5 text-[0.73rem] font-semibold ${meta.badgeClass}`}
                            >
                              {badge}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
