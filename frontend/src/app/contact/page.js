import { contact } from "@/lib/siteData";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { SiGooglescholar, SiResearchgate } from "react-icons/si";

const socialBadgeStyles = {
  Facebook: { color: "#4b63bf", icon: FaFacebookF },
  LinkedIn: { color: "#1178c7", icon: FaLinkedinIn },
  ResearchGate: { color: "#22c6b6", icon: SiResearchgate },
  "Google Scholar": { color: "#4f8ee8", icon: SiGooglescholar },
};

const FALLBACK_BADGE_COLOR = "#4f8ee8";

export default function ContactPage() {
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
            {contact.title}
          </h1>
          <div className="mt-3 h-[4px] w-16 bg-[#2f67a6]" />

          <div className="mt-12">
            <h2
              className="text-[1.35rem] font-bold text-[#1a1a1a] sm:text-[1.5rem]"
              style={{
                fontFamily:
                  '"Arial Narrow", "Roboto Condensed", "Helvetica Neue", Arial, sans-serif',
              }}
            >
              {contact.getInTouch.heading}
            </h2>

            <ul className="mt-4 space-y-2 text-[1rem] leading-[1.7] text-[#4d4d4d]">
              {contact.getInTouch.list.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-[#2f67a6]" />
                  {item}
                </li>
              ))}
            </ul>

            {contact.getInTouch.links && (
              <div className="mt-8 flex flex-wrap gap-4">
                {contact.getInTouch.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center border border-[#5d5d5d] bg-white px-6 py-3 text-[1rem] font-medium text-[#2a2a2a] transition hover:bg-[#f5f5f5] sm:min-w-[180px] sm:text-[1.05rem]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {contact.getInTouch.socialLinks && (
              <div className="mt-10">
                <h3 className="text-[1.05rem] font-semibold text-[#2a2a2a]">
                  Connect
                </h3>
                <div className="mt-4 flex flex-wrap gap-4">
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
                        style={{ backgroundColor: FALLBACK_BADGE_COLOR }}
                      >
                        ?
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
