import { contact, home } from "@/lib/siteData";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { SiGooglescholar, SiResearchgate } from "react-icons/si";

const socialBadgeStyles = {
  Facebook: { color: "#4b63bf", icon: FaFacebookF },
  LinkedIn: { color: "#1178c7", icon: FaLinkedinIn },
  Twitter: { color: "#3aa0e8", icon: FaTwitter },
  ResearchGate: { color: "#22c6b6", icon: SiResearchgate },
  "Google Scholar": { color: "#4f8ee8", icon: SiGooglescholar },
};

export default function HomePage() {
  return (
    <div className="bg-[#f5f5f2] text-[#262626]">
      <section className="relative min-h-[420px] overflow-hidden bg-gradient-to-br from-[#0f2744] to-[#1f3a5c] sm:min-h-[500px] lg:min-h-[560px]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,1) 39px, rgba(255,255,255,1) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,1) 39px, rgba(255,255,255,1) 40px)",
          }}
        />

        <div className="relative z-10 pt-[70px] pb-1 text-center">
          <p className="px-4 text-[1.05rem] leading-[1.9] sm:text-[1.15rem] lg:text-[1.2rem]">
            <span
              className="text-[#f3e8b0]"
              style={{ fontFamily: '"Hind Siliguri", sans-serif' }}
            >
              আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহি ওয়া বারাকাতুহু
            </span>
            <span className="mx-2 text-white/40">—</span>
            <span
              className="text-[#f3e8b0]"
              dir="rtl"
              style={{ fontFamily: '"Amiri", serif' }}
            >
              اَلسَلامُ عَلَيْكُم وَرَحْمَةُ اَللهِ وَبَرَكاتُهُ
            </span>
          </p>
          <p className="mt-1 px-4 text-[0.88rem] text-white/65 italic sm:text-[0.93rem]">
            May the peace, mercy, and blessings of Allah be upon you.
          </p>
          <div className="mx-auto mt-4 h-px w-[260px] bg-white/15 sm:w-[340px]" />
        </div>

        <div className="mx-auto flex min-h-[420px] max-w-[1180px] items-center justify-end px-6 py-16 sm:min-h-[500px] lg:min-h-[560px]">
          <div className="w-full max-w-[690px] xl:max-w-[920px]">
            <h1
              className="text-center text-[2.35rem] leading-none font-bold uppercase tracking-[0.01em] text-white sm:text-[2.8rem] lg:text-right lg:whitespace-nowrap lg:text-[3.3rem] xl:text-[3.8rem]"
              style={{
                fontFamily:
                  '"Arial Narrow", "Roboto Condensed", "Helvetica Neue", Arial, sans-serif',
              }}
            >
              {home.hero.title}
            </h1>
            <div className="mx-auto mt-5 h-[8px] w-full max-w-[820px] bg-[#a3bed8] lg:mr-0" />
            <p
              className="mt-5 text-center text-[1.35rem] font-semibold uppercase tracking-[0.02em] text-white sm:text-[1.6rem] lg:text-right lg:text-[1.9rem]"
              style={{
                fontFamily:
                  '"Arial Narrow", "Roboto Condensed", "Helvetica Neue", Arial, sans-serif',
              }}
            >
              {home.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1080px] px-6 py-12 sm:py-14 lg:py-16">
          <div className="grid items-start gap-10 md:grid-cols-[240px_1fr] lg:grid-cols-[290px_1fr] lg:gap-12">
            <div className="mx-auto w-full max-w-[290px]">
              <img
                src={home.hero.portraitImage}
                alt="Portrait of Hasib Cheragee"
                className="block h-auto w-full object-cover shadow-[0_2px_12px_rgba(0,0,0,0.18)]"
              />
            </div>

            <div>
              <h2
                id="hello-heading"
                className="text-[2.1rem] leading-none font-bold uppercase tracking-[0.01em] text-[#1f1f1f] sm:text-[2.5rem]"
                style={{
                  fontFamily:
                    '"Arial Narrow", "Roboto Condensed", "Helvetica Neue", Arial, sans-serif',
                }}
              >
                {home.hello.heading}
              </h2>

              <div className="mt-6 space-y-5 text-[1.04rem] leading-[1.7] text-[#4d4d4d] sm:text-[1.12rem]">
                {home.hello.paragraphs.map((paragraph) => {
                  return <p key={paragraph}>{paragraph}</p>;
                })}
              </div>

              <div className="mt-10 grid items-center gap-4 text-center md:grid-cols-[1fr_auto_auto] md:text-left">
                <h3 className="text-[1.05rem] font-semibold text-[#2a2a2a] sm:text-[1.15rem]">
                  {home.cv.heading}
                </h3>

                {home.cv.links.map((link) => (
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
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#efefef] px-6 py-12 text-center sm:py-14">
        <div className="mx-auto max-w-[1080px]">
          <h2
            id="interests-heading"
            className="text-[2.2rem] leading-none font-bold uppercase tracking-[0.01em] text-[#111111] sm:text-[3rem]"
            style={{
              fontFamily:
                '"Arial Narrow", "Roboto Condensed", "Helvetica Neue", Arial, sans-serif',
            }}
          >
            {home.researchInterests.heading}
          </h2>

          <div className="mt-7 space-y-3 text-[1rem] leading-[1.8] text-[#4a4a4a] sm:text-[1.15rem]">
            <p>{home.researchInterests.list.join(" • ")}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-[1080px]">
          <h2
            className="text-center text-[2.1rem] leading-none font-bold text-[#111111] sm:text-[2.7rem]"
            style={{
              fontFamily:
                '"Arial Narrow", "Roboto Condensed", "Helvetica Neue", Arial, sans-serif',
            }}
          >
            {home.updates.heading}
          </h2>

          <div className="mt-10 border-l-[3px] border-[#2f67a6] pl-6 sm:pl-10">
            <div className="home-updates-scroll max-h-[360px] overflow-y-auto pr-4">
              {home.updates.years.map((year) => (
                <div key={year.year} className="pb-9 last:pb-0">
                  <h3 className="text-[1.7rem] font-bold text-[#2a65ad]">
                    {year.year}
                  </h3>

                  <div className="mt-5 space-y-5 text-[1rem] leading-[1.7] text-[#303030] sm:text-[1.05rem]">
                    {year.items.map((item) => {
                      return (
                        <p key={item.text}>
                          <span className="font-bold text-[#161616]">
                            {item.date}:
                          </span>{" "}
                          {item.text}
                        </p>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-16 h-[2px] max-w-[950px] bg-[#6f8ea7]" />
        </div>
      </section>

      <section className="bg-[#efefef] px-6 py-12 text-center sm:py-14">
        <div className="mx-auto max-w-[1080px]">
          <h2
            id="contact-heading"
            className="inline-block border-b-[3px] border-[#1a1a1a] pb-1 text-[2rem] leading-none font-bold uppercase tracking-[0.01em] text-[#111111] sm:text-[2.8rem]"
            style={{
              fontFamily:
                '"Arial Narrow", "Roboto Condensed", "Helvetica Neue", Arial, sans-serif',
            }}
          >
            {contact.getInTouch.heading}
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            {contact.getInTouch.socialLinks.map((badge) => {
              const badgeStyle = socialBadgeStyles[badge.label];
              const Icon = badgeStyle?.icon;
              const badgeClassName =
                "flex h-12 w-12 items-center justify-center rounded-full text-[1.1rem] font-bold text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5";

              if (badge.href && badgeStyle && Icon) {
                return (
                  <a
                    key={badge.label}
                    href={badge.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={badge.label}
                    className={badgeClassName}
                    style={{ backgroundColor: badgeStyle.color }}
                  >
                    <Icon size={20} />
                  </a>
                );
              }

              return (
                <div
                  key={badge.label}
                  aria-label={badge.label}
                  className={badgeClassName}
                  style={{ backgroundColor: "#4f8ee8" }}
                >
                  ?
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
