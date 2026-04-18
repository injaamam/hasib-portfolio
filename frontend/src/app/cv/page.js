import { cv } from "@/lib/siteData";

export default function CvPage() {
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
            {cv.title}
          </h1>
          <div className="mt-3 h-[4px] w-16 bg-[#2f67a6]" />

          <div className="mt-12 space-y-12">
            {cv.sections.map((section) => (
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
                {section.links && (
                  <div className="mt-6 flex flex-wrap gap-4">
                    {section.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-12 items-center justify-center border border-[#5d5d5d] bg-white px-6 py-3 text-[1rem] font-medium text-[#2a2a2a] transition hover:bg-[#f5f5f5] sm:min-w-[220px] sm:text-[1.05rem]"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
