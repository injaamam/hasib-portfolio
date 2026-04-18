import { contact } from "@/lib/siteData";
import { HiEnvelope, HiMapPin, HiDocumentText } from "react-icons/hi2";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { SiGooglescholar, SiResearchgate } from "react-icons/si";

const narrowFont = {
  fontFamily:
    '"Arial Narrow", "Roboto Condensed", "Helvetica Neue", Arial, sans-serif',
};

const socialCardStyles = {
  Facebook: {
    bg: "bg-[#4b63bf]",
    hover: "hover:bg-[#3d54b0]",
    icon: FaFacebookF,
    description: "Connect on Facebook",
  },
  LinkedIn: {
    bg: "bg-[#1178c7]",
    hover: "hover:bg-[#0d6ab5]",
    icon: FaLinkedinIn,
    description: "Professional Network",
  },
  Twitter: {
    bg: "bg-[#3aa0e8]",
    hover: "hover:bg-[#2c90d8]",
    icon: FaTwitter,
    description: "Follow on Twitter",
  },
  ResearchGate: {
    bg: "bg-[#22c6b6]",
    hover: "hover:bg-[#18b5a6]",
    icon: SiResearchgate,
    description: "Research Profile",
  },
  "Google Scholar": {
    bg: "bg-[#4f8ee8]",
    hover: "hover:bg-[#3e7ed8]",
    icon: SiGooglescholar,
    description: "Scholar Profile",
  },
};

export default function ContactPage() {
  const emails = contact.getInTouch.list.filter((item) => item.includes("@"));
  const address = contact.getInTouch.list.find((item) => !item.includes("@"));

  return (
    <div className="bg-[#f5f5f2] text-[#1a1a2e]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#111827] to-[#1e3a5f]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 30%, #60a5fa 0%, transparent 50%)",
          }}
        />
        <div className="mx-auto flex min-h-[240px] max-w-[1180px] items-end px-6 pb-12 pt-16">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <HiEnvelope className="text-[1.6rem] text-[#93c5fd]" />
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#93c5fd]">
                Reach Out
              </span>
            </div>
            <h1
              className="text-[2.8rem] font-bold leading-none text-white sm:text-[4rem]"
              style={narrowFont}
            >
              {contact.title}
            </h1>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1080px] px-6 py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          {/* Left column — contact info */}
          <div className="space-y-5">
            <h2
              className="text-[1.5rem] font-bold text-[#111827]"
              style={narrowFont}
            >
              {contact.getInTouch.heading}
            </h2>

            {/* Email cards */}
            {emails.map((email, i) => (
              <a
                key={i}
                href={`mailto:${email}`}
                className="flex items-center gap-4 rounded-xl bg-white px-5 py-4 shadow-[0_2px_12px_rgba(0,0,0,0.07)] transition hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#eff6ff] text-[#2f67a6]">
                  <HiEnvelope size={20} />
                </div>
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[#9ca3af]">
                    {i === 0 ? "Institutional Email" : "Personal Email"}
                  </p>
                  <p className="text-[0.95rem] font-medium text-[#1a1a2e]">
                    {email}
                  </p>
                </div>
              </a>
            ))}

            {/* Address card */}
            {address && (
              <div className="flex items-start gap-4 rounded-xl bg-white px-5 py-4 shadow-[0_2px_12px_rgba(0,0,0,0.07)]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f0fdf4] text-[#16a34a]">
                  <HiMapPin size={20} />
                </div>
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[#9ca3af]">
                    Office Address
                  </p>
                  <p className="text-[0.95rem] font-medium leading-[1.5] text-[#1a1a2e]">
                    {address}
                  </p>
                </div>
              </div>
            )}

            {/* CV download */}
            {contact.getInTouch.links?.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl bg-gradient-to-r from-[#0f2744] to-[#2f67a6] px-5 py-4 shadow-[0_2px_12px_rgba(47,103,166,0.25)] transition hover:brightness-110"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/20">
                  <HiDocumentText size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-white/70">
                    Curriculum Vitae
                  </p>
                  <p className="text-[0.95rem] font-medium text-white">
                    {link.label}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Right column — social cards */}
          <div>
            <h2
              className="mb-5 text-[1.5rem] font-bold text-[#111827]"
              style={narrowFont}
            >
              Connect Online
            </h2>

            <div className="space-y-3">
              {contact.getInTouch.socialLinks.map((badge) => {
                const style = socialCardStyles[badge.label];
                if (!style) return null;
                const Icon = style.icon;
                return (
                  <a
                    key={badge.label}
                    href={badge.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-4 rounded-xl px-5 py-4 text-white shadow-[0_2px_12px_rgba(0,0,0,0.15)] transition hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.22)] ${style.bg} ${style.hover}`}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/20">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-white/70">
                        {style.description}
                      </p>
                      <p className="text-[0.97rem] font-semibold">
                        {badge.label}
                      </p>
                    </div>
                    <svg
                      className="ml-auto h-4 w-4 opacity-60"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
