import { cv, home } from "@/lib/siteData";

const narrowFont = {
  fontFamily: '"Arial Narrow", "Roboto Condensed", "Helvetica Neue", Arial, sans-serif',
};

export default function CvPage() {
  return (
    <div className="bg-[#f5f5f2] text-[#262626]">
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.54), rgba(0,0,0,0.54)), url("${home.hero.heroImage}")`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto flex min-h-[200px] max-w-[1180px] items-center px-6 py-14">
          <h1
            className="text-[2.5rem] leading-none font-bold uppercase tracking-[0.01em] text-white sm:text-[3.2rem]"
            style={narrowFont}
          >
            {cv.title}
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-[1080px] px-6 py-12 sm:py-16">
        <div className="space-y-10">
          {cv.sections.map((section, idx) => (
            <div
              key={idx}
              className="border-l-[4px] border-[#2f67a6] bg-white px-7 py-7 shadow-[0_1px_8px_rgba(0,0,0,0.06)]"
            >
              <h2
                className="text-[1.25rem] font-bold text-[#1a1a1a] sm:text-[1.4rem]"
                style={narrowFont}
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
    </div>
  );
}
