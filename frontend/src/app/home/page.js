import { contact, home } from "@/lib/siteData";

const emphasisVariants = {
  accent: "font-semibold italic text-[#e56a61]",
  italic: "italic text-[#4f4f4f]",
};

function renderEmphasisText(text, emphasis = []) {
  return emphasis.reduce(
    (nodes, item, itemIndex) => {
      return nodes.flatMap((node, nodeIndex) => {
        if (typeof node !== "string") {
          return [node];
        }

        const parts = node.split(item.text);
        if (parts.length === 1) {
          return [node];
        }

        return parts.flatMap((part, partIndex) => {
          if (partIndex === parts.length - 1) {
            return [part];
          }

          return [
            part,
            <span
              key={`${item.text}-${itemIndex}-${nodeIndex}-${partIndex}`}
              className={emphasisVariants[item.variant] ?? ""}
            >
              {item.text}
            </span>,
          ];
        });
      });
    },
    [text],
  );
}

function renderUpdateSegments(segments) {
  return segments.map((segment, index) => {
    if (segment.accent) {
      return (
        <span key={`${segment.text}-${index}`} className="text-[#2a65ad]">
          {segment.text}
        </span>
      );
    }

    return <span key={`${segment.text}-${index}`}>{segment.text}</span>;
  });
}

export default function HomePage() {
  const helloSection = home.sections[0];
  const cvSection = home.sections[1];
  const interestsSection = home.sections[2];
  const updatesSection = home.updates;
  const footerSection = home.footer;
  const contactSection = contact.sections[0];
  const socialBadges = contactSection.socialLinks ?? [];
  const interestRows = [
    interestsSection.list.slice(0, 3).join(" • "),
    interestsSection.list.slice(3).join(" • "),
  ];

  return (
    <div className="bg-[#f5f5f2] text-[#262626]">
      <section
        className="relative min-h-[420px] overflow-hidden sm:min-h-[500px] lg:min-h-[560px]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.42)), url("${home.media.heroImage}")`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto flex min-h-[420px] max-w-[1180px] items-center justify-end px-6 py-16 sm:min-h-[500px] lg:min-h-[560px]">
          <div className="w-full max-w-[690px]">
            <h1
              className="text-center text-[2.35rem] leading-none font-bold uppercase tracking-[0.01em] text-white sm:text-[3.1rem] lg:text-[4.2rem] lg:text-right"
              style={{
                fontFamily:
                  '"Arial Narrow", "Roboto Condensed", "Helvetica Neue", Arial, sans-serif',
              }}
            >
              {home.title}
            </h1>
            <div className="mx-auto mt-5 h-[8px] w-full max-w-[610px] bg-[#56708a] lg:mr-0" />
            <p
              className="mt-10 text-center text-[1.35rem] font-semibold uppercase tracking-[0.02em] text-white sm:text-[1.7rem] lg:text-right lg:text-[2rem]"
              style={{
                fontFamily:
                  '"Arial Narrow", "Roboto Condensed", "Helvetica Neue", Arial, sans-serif',
              }}
            >
              {home.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1080px] px-6 py-12 sm:py-14 lg:py-16">
          <div className="grid items-start gap-10 md:grid-cols-[240px_1fr] lg:grid-cols-[290px_1fr] lg:gap-12">
            <div className="mx-auto w-full max-w-[290px]">
              <img
                src={home.media.portraitImage}
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
                {helloSection.heading}
              </h2>

              <div className="mt-6 space-y-5 text-[1.04rem] leading-[1.7] text-[#4d4d4d] sm:text-[1.12rem]">
                {helloSection.paragraphs.map((paragraph, index) => (
                  <p key={`${paragraph.text}-${index}`}>
                    {renderEmphasisText(paragraph.text, paragraph.emphasis)}
                  </p>
                ))}
              </div>

              <div className="mt-10 grid items-center gap-4 text-center md:grid-cols-[1fr_auto_auto] md:text-left">
                <h3 className="text-[1.05rem] font-semibold text-[#2a2a2a] sm:text-[1.15rem]">
                  {cvSection.heading}
                </h3>

                {cvSection.links.map((link) => (
                  <a
                    key={link.href}
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
            {interestsSection.heading}
          </h2>

          <div className="mt-7 space-y-3 text-[1rem] leading-[1.8] text-[#4a4a4a] sm:text-[1.15rem]">
            {interestRows.map((row) => (
              <p key={row}>{row}</p>
            ))}
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
            {updatesSection.heading}
          </h2>

          <div className="mt-10 border-l-[3px] border-[#2f67a6] pl-6 sm:pl-10">
            <div className="home-updates-scroll max-h-[360px] overflow-y-auto pr-4">
              {updatesSection.years.map((year) => (
                <div key={year.year} className="pb-9 last:pb-0">
                  <h3 className="text-[1.7rem] font-bold text-[#2a65ad]">
                    {year.year}
                  </h3>

                  <div className="mt-5 space-y-5 text-[1rem] leading-[1.7] text-[#303030] sm:text-[1.05rem]">
                    {year.items.map((item) => (
                      <p key={`${year.year}-${item.date}`}>
                        <span className="font-bold text-[#161616]">
                          {item.date}:
                        </span>{" "}
                        {renderUpdateSegments(item.segments)}
                      </p>
                    ))}
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
            {contactSection.heading}
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            {socialBadges.map((badge) => {
              const badgeClassName =
                "flex h-12 w-12 items-center justify-center rounded-full text-[1.1rem] font-bold text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5";

              if (badge.href) {
                return (
                  <a
                    key={badge.label}
                    href={badge.href}
                    target={
                      badge.href.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel={
                      badge.href.startsWith("mailto:")
                        ? undefined
                        : "noreferrer"
                    }
                    aria-label={badge.label}
                    className={badgeClassName}
                    style={{ backgroundColor: badge.color }}
                  >
                    {badge.short}
                  </a>
                );
              }

              return (
                <div
                  key={badge.label}
                  aria-label={badge.label}
                  className={badgeClassName}
                  style={{ backgroundColor: badge.color }}
                >
                  {badge.short}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden px-6 py-8"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(88, 61, 134, 0.9), rgba(66, 96, 152, 0.86)), radial-gradient(circle at 22% 18%, rgba(255,255,255,0.16) 0, transparent 22%), radial-gradient(circle at 70% 38%, rgba(255,255,255,0.1) 0, transparent 20%), repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0 2px, transparent 2px 90px), repeating-linear-gradient(0deg, rgba(255,255,255,0.045) 0 2px, transparent 2px 70px)",
        }}
      >
        <div className="mx-auto flex max-w-[1180px] items-center justify-end">
          <div className="flex items-center gap-3 text-white">
            <span className="text-sm font-semibold uppercase tracking-[0.08em]">
              {footerSection.siteHitsLabel}
            </span>
            <div className="flex overflow-hidden border border-white/70 bg-white/10">
              {footerSection.siteHitDigits.map((digit, index) => (
                <span
                  key={`${digit}-${index}`}
                  className="border-l border-white/70 px-2 py-1 text-sm font-bold text-white first:border-l-0"
                >
                  {digit}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
