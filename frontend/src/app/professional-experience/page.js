import { professionalExperience, home } from "@/lib/siteData";

const narrowFont = {
  fontFamily: '"Arial Narrow", "Roboto Condensed", "Helvetica Neue", Arial, sans-serif',
};

export default function ProfessionalExperiencePage() {
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
            {professionalExperience.title}
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-[1080px] px-6 py-12 sm:py-16">
        <div className="space-y-10">
          {professionalExperience.sections.map((section, idx) => (
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

              {section.meta && (
                <p className="mt-2 text-[0.9rem] italic text-[#666666] sm:text-[0.95rem]">
                  {section.meta}
                </p>
              )}

              {section.paragraphs && (
                <div className="mt-4 space-y-3 text-[1rem] leading-[1.7] text-[#4d4d4d]">
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              )}

              {section.list && (
                <ul className="mt-4 space-y-2 pl-5 text-[1rem] leading-[1.7] text-[#4d4d4d]">
                  {section.list.map((item, i) => (
                    <li key={i} className="list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
