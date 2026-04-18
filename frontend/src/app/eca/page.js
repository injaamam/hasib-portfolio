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
    headerClass: "bg-gradient-to-br from-[#1e1b4b] to-[#3730a3]",
    accentColor: "#4f46e5",
    checkClass: "text-[#4f46e5]",
    bgClass: "bg-[#eef2ff]",
  },
  {
    icon: HiCalendarDays,
    headerClass: "bg-gradient-to-br from-[#0e4a3a] to-[#1a7a5e]",
    accentColor: "#059669",
    checkClass: "text-[#059669]",
    bgClass: "bg-[#ecfdf5]",
  },
  {
    icon: HiSparkles,
    headerClass: "bg-gradient-to-br from-[#4a1a5a] to-[#7e22ce]",
    accentColor: "#7c3aed",
    checkClass: "text-[#7c3aed]",
    bgClass: "bg-[#f5f3ff]",
  },
];

export default function EcaPage() {
  return (
    <div className="bg-[#f3f4f6] text-[#1a1a2e]">
      {/* Hero — indigo/purple */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1e1b4b] to-[#4c1d95]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 40%, #a78bfa 0%, transparent 50%), radial-gradient(circle at 70% 60%, #818cf8 0%, transparent 50%)",
          }}
        />
        <div className="mx-auto flex min-h-[240px] max-w-[1180px] items-end px-6 pb-12 pt-16">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <HiUserGroup className="text-[1.6rem] text-[#c4b5fd]" />
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#c4b5fd]">
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
