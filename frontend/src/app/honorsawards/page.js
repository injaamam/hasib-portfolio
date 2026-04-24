import { honorsAwards } from "@/lib/siteData";
import { HiSparkles, HiTrophy } from "react-icons/hi2";

const narrowFont = {
  fontFamily:
    '"Arial Narrow", "Roboto Condensed", "Helvetica Neue", Arial, sans-serif',
};

export default function HonorsAwardsPage() {
  return (
    <div className="bg-[#f5f5f2] text-[#262626]">
      {/* Hero — navy/blue */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2744] to-[#1f4570]">
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
              <HiTrophy className="text-[1.6rem] text-[#a3bed8]" />
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#a3bed8]">
                Recognition &amp; Achievements
              </span>
            </div>
            <h1
              className="text-[2.8rem] font-bold leading-none text-white sm:text-[4rem]"
              style={narrowFont}
            >
              {honorsAwards.title}
            </h1>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1080px] px-6 py-14">
        {honorsAwards.sections.map((section) => (
          <div key={section.heading}>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#0f2744] to-[#2f67a6] text-white">
                <HiSparkles size={18} />
              </div>
              <h2
                className="text-[1.4rem] font-bold text-[#262626]"
                style={narrowFont}
              >
                {section.heading}
              </h2>
            </div>

            {section.list && (
              <div className="space-y-4">
                {section.list.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 rounded-2xl border border-[#a3bed8]/0 bg-gradient-to-r from-[#eef4ff] to-[#dce8f8] p-5 shadow-[0_4px_20px_rgba(47,103,166,0.12)] transition-shadow"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0f2744] to-[#2f67a6] shadow-[0_2px_8px_rgba(47,103,166,0.35)]">
                      <HiTrophy size={20} className="text-white" />
                    </div>
                    <div>
                      <span className="mb-1.5 inline-block rounded-full bg-[#2f67a6]/10 px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#1b3b61]">
                        Featured Award
                      </span>
                      <p className="text-[0.97rem] font-medium leading-[1.6] text-[#1b3b61]">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
