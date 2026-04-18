import { contact, home } from "@/lib/siteData";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { SiGooglescholar, SiResearchgate } from "react-icons/si";

const narrowFont = {
  fontFamily: '"Arial Narrow", "Roboto Condensed", "Helvetica Neue", Arial, sans-serif',
};

const socialBadgeStyles = {
  Facebook: { color: "#4b63bf", icon: FaFacebookF },
  LinkedIn: { color: "#1178c7", icon: FaLinkedinIn },
  Twitter: { color: "#3aa0e8", icon: FaTwitter },
  ResearchGate: { color: "#22c6b6", icon: SiResearchgate },
  "Google Scholar": { color: "#4f8ee8", icon: SiGooglescholar },
};

export default function ContactPage() {
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
            {contact.title}
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-[1080px] px-6 py-12 sm:py-16">
        <div className="border-l-[4px] border-[#2f67a6] bg-white px-7 py-7 shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
          <h2
            className="text-[1.25rem] font-bold text-[#1a1a1a] sm:text-[1.4rem]"
            style={narrowFont}
          >
            {contact.getInTouch.heading}
          </h2>

          <ul className="mt-5 space-y-3 text-[1rem] leading-[1.7] text-[#4d4d4d]">
            {contact.getInTouch.list.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-[6px] inline-block h-[6px] w-[6px] shrink-0 rounded-full bg-[#2f67a6]" />
                {item}
              </li>
            ))}
          </ul>

          {contact.getInTouch.links && contact.getInTouch.links.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-4">
              {contact.getInTouch.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center border border-[#5d5d5d] bg-white px-6 py-2.5 text-[1rem] font-medium text-[#2a2a2a] transition hover:bg-[#f5f5f5]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}

          <div className="mt-8">
            <p className="mb-4 text-[0.9rem] font-semibold uppercase tracking-[0.06em] text-[#888888]">
              Connect
            </p>
            <div className="flex flex-wrap gap-4">
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
        </div>
      </div>
    </div>
  );
}
