import { eca } from "@/lib/siteData";
import {
  HiUserGroup,
  HiCalendarDays,
  HiSparkles,
  HiCheckCircle,
} from "react-icons/hi2";

const narrowFont = {
  fontFamily:
    '"Arial Narrow", "Roboto Condensed", "Helvetica Neue", Arial, sans-serif',
};

const columnStyles = [
  {
    icon: HiUserGroup,
    headerClass: "bg-gradient-to-br from-[#0f2744] to-[#2f67a6]",
    accentColor: "#2f67a6",
    checkClass: "text-[#2f67a6]",
    bgClass: "bg-[#eef4ff]",
  },
  {
    icon: HiCalendarDays,
    headerClass: "bg-gradient-to-br from-[#0f2744] to-[#1a5296]",
    accentColor: "#1a5296",
    checkClass: "text-[#1a5296]",
    bgClass: "bg-[#eef4ff]",
  },
  {
    icon: HiSparkles,
    headerClass: "bg-gradient-to-br from-[#1a3a6c] to-[#2f67a6]",
    accentColor: "#1a3a6c",
    checkClass: "text-[#1a3a6c]",
    bgClass: "bg-[#eef4ff]",
  },
];

export default function EcaPage() {
  return (
    <div className="bg-[#f5f5f2] text-[#262626]">
      {/* Hero — navy/blue */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2744] to-[#1f4570]">
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
              <HiUserGroup className="text-[1.6rem] text-[#a3bed8]" />
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#a3bed8]">
                Beyond the Classroom
              </span>
            </div>
            <h1
              className="text-[2.8rem] font-bold leading-none text-white sm:text-[4rem]"
              style={narrowFont}
            >
              {eca.title}
            </h1>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-6 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {eca.sections.map((section, idx) => {
            const style = columnStyles[idx] ?? columnStyles[0];
            const Icon = style.icon;

            return (
              <div
                key={idx}
                className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
              >
                {/* Column header */}
                <div className={`${style.headerClass} px-6 py-5`}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20">
                      <Icon size={18} className="text-white" />
                    </div>
                    <h2
                      className="text-[1rem] font-bold text-white sm:text-[1.1rem]"
                      style={narrowFont}
                    >
                      {section.heading}
                    </h2>
                  </div>
                  <div className="mt-3 h-0.5 w-8 rounded-full bg-white/30" />
                </div>

                {/* Items */}
                {section.list && (
                  <ul className="flex flex-1 flex-col gap-0 divide-y divide-[#f0f0f0] px-5 py-2">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 py-4">
                        <HiCheckCircle
                          size={18}
                          className={`mt-0.5 shrink-0 ${style.checkClass}`}
                        />
                        <span className="text-[0.9rem] leading-[1.6] text-[#4b5563]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
