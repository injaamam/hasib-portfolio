import { honorsAwards } from "@/lib/siteData";
import { HiTrophy, HiStar } from "react-icons/hi2";

const narrowFont = {
  fontFamily:
    '"Arial Narrow", "Roboto Condensed", "Helvetica Neue", Arial, sans-serif',
};

export default function HonorsAwardsPage() {
  return (
    <div className="bg-[#fdf9f0] text-[#1a1a0a]">
      {/* Hero — warm amber/gold */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#3a2000] to-[#7a4800]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% 50%, #ffd700 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, #ffaa00 0%, transparent 60%)",
          }}
        />
        <div className="mx-auto flex min-h-[240px] max-w-[1180px] items-end px-6 pb-12 pt-16">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <HiTrophy className="text-[1.6rem] text-[#fcd34d]" />
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#fcd34d]">
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
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#b45309] to-[#d97706] text-white">
                <HiTrophy size={18} />
              </div>
              <h2
                className="text-[1.4rem] font-bold text-[#1a1a0a]"
                style={narrowFont}
              >
                {section.heading}
              </h2>
            </div>

            {section.list && (
              <div className="space-y-4">
                {section.list.map((item, i) => {
                  const isFeatured = i < 2;
                  return (
                    <div
                      key={i}
                      className={`flex gap-4 rounded-2xl p-5 transition-shadow ${
                        isFeatured
                          ? "border border-[#f0c040]/40 bg-gradient-to-r from-[#fffbeb] to-[#fef3c7] shadow-[0_4px_20px_rgba(180,83,9,0.12)]"
                          : "bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_18px_rgba(0,0,0,0.1)]"
                      }`}
                    >
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                          isFeatured
                            ? "bg-gradient-to-br from-[#d97706] to-[#b45309] shadow-[0_2px_8px_rgba(180,83,9,0.35)]"
                            : "bg-[#f5f0e8]"
                        }`}
                      >
                        {isFeatured ? (
                          <HiTrophy
                            size={20}
                            className="text-white"
                          />
                        ) : (
                          <HiStar
                            size={18}
                            className="text-[#d97706]"
                          />
                        )}
                      </div>
                      <div>
                        {isFeatured && (
                          <span className="mb-1.5 inline-block rounded-full bg-[#d97706]/15 px-2.5 py-0.5 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-[#92400e]">
                            Featured Award
                          </span>
                        )}
                        <p
                          className={`text-[0.97rem] leading-[1.6] ${
                            isFeatured
                              ? "font-semibold text-[#78350f]"
                              : "font-medium text-[#374151]"
                          }`}
                        >
                          {item}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
