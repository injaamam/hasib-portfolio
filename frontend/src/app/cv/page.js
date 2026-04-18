import { cv, home, education } from "@/lib/siteData";
import {
  HiDocumentText,
  HiArrowDownTray,
  HiAcademicCap,
  HiBookOpen,
  HiBriefcase,
} from "react-icons/hi2";

const narrowFont = {
  fontFamily:
    '"Arial Narrow", "Roboto Condensed", "Helvetica Neue", Arial, sans-serif',
};

const statIcons = [HiAcademicCap, HiBookOpen, HiBriefcase];

export default function CvPage() {
  const downloadHref =
    cv.sections[0]?.links[0]?.href ?? "/hasib-cheragee-cv.pdf";
  const downloadLabel =
    cv.sections[0]?.links[0]?.label ?? "Download CV in PDF format";

  return (
    <div className="min-h-[calc(100vh-72px-57px)] bg-white text-[#1a1a2e]">
      {/* Top gradient accent */}
      <div className="h-1.5 bg-gradient-to-r from-[#0f2744] via-[#2f67a6] to-[#a3bed8]" />

      <div className="mx-auto flex max-w-[760px] flex-col items-center px-6 py-20 text-center">
        {/* Document icon */}
        <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-[#eef4ff] to-[#dce8f8] shadow-[0_8px_32px_rgba(47,103,166,0.18)]">
          <HiDocumentText size={54} className="text-[#2f67a6]" />
        </div>

        <h1
          className="mt-7 text-[2.4rem] font-bold text-[#0f2744] sm:text-[3rem]"
          style={narrowFont}
        >
          {cv.title}
        </h1>
        <p className="mt-2 text-[1rem] font-semibold text-[#4a6a8a]">
          {home.hero.title}
        </p>
        <p className="mt-1 text-[0.88rem] text-[#8a9ab0]">
          {home.hero.subtitle}
        </p>

        <div className="mt-8 h-px w-16 bg-[#c8d8ec]" />

        {/* Stats row */}
        <div className="mt-8 grid w-full max-w-[440px] grid-cols-3 gap-4">
          {cv.stats.map(({ value, label }, i) => {
            const Icon = statIcons[i] ?? HiDocumentText;
            return (
              <div key={label} className="rounded-xl bg-[#f0f6ff] px-3 py-5">
                <Icon size={22} className="mx-auto text-[#2f67a6]" />
                <div
                  className="mt-2 text-[1.4rem] font-bold text-[#0f2744]"
                  style={narrowFont}
                >
                  {value}
                </div>
                <div className="text-[0.72rem] leading-[1.4] text-[#6b7a90]">
                  {label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Download CTA */}
        <a
          href={downloadHref}
          target="_blank"
          rel="noreferrer"
          className="mt-12 flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#0f2744] to-[#2f67a6] px-10 py-4 text-[1.05rem] font-semibold text-white shadow-[0_4px_20px_rgba(47,103,166,0.35)] transition hover:brightness-110 hover:shadow-[0_6px_28px_rgba(47,103,166,0.5)]"
        >
          <HiArrowDownTray size={22} />
          {downloadLabel}
        </a>

        <p className="mt-4 text-[0.78rem] text-[#aab4c4]">
          {cv.subtitleNote}
        </p>

        {/* Decorative divider */}
        <div className="mt-16 flex w-full max-w-[440px] items-center gap-4">
          <div className="h-px flex-1 bg-[#e8eef6]" />
          <span className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#a0aec0]">
            {education.degrees[0]?.heading
              ?.split(" ")
              .slice(0, 3)
              .join(" ")}
            &nbsp;&amp; more inside
          </span>
          <div className="h-px flex-1 bg-[#e8eef6]" />
        </div>
      </div>
    </div>
  );
}
