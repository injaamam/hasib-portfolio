"use client";

import { useState } from "react";
import { higherStudyUSA } from "@/lib/higherStudyUSAData";
import {
  HiChevronDown,
  HiChevronUp,
  HiAcademicCap,
  HiMapPin,
  HiLightBulb,
  HiCheckCircle,
  HiXCircle,
  HiLink,
  HiCurrencyDollar,
  HiHeart,
} from "react-icons/hi2";

const narrowFont = {
  fontFamily: '"Arial Narrow", "Roboto Condensed", "Helvetica Neue", Arial, sans-serif',
};

const SECTION_ICONS = {
  profile: HiAcademicCap,
  journey: HiMapPin,
  suggestions: HiLightBulb,
};

// ─── Accordion wrapper ────────────────────────────────────────────────────────
function Accordion({ title, children, defaultOpen = false, accent = "#2f67a6", badge }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="overflow-hidden rounded-xl border border-[#e8e8e3] bg-white shadow-sm">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left transition-colors hover:bg-[#f9f9f7]"
      >
        <div className="flex items-center gap-3">
          <div className="h-4 w-1 shrink-0 rounded-full" style={{ backgroundColor: accent }} />
          <span className="text-[0.95rem] font-semibold text-[#1a1a1a]" style={narrowFont}>
            {title}
          </span>
          {badge && (
            <span className="rounded-full px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-white" style={{ backgroundColor: accent }}>
              {badge}
            </span>
          )}
        </div>
        {open ? (
          <HiChevronUp className="shrink-0 text-[#9ca3af]" size={18} />
        ) : (
          <HiChevronDown className="shrink-0 text-[#9ca3af]" size={18} />
        )}
      </button>
      {open && <div className="border-t border-[#f0f0f0] px-5 pb-5 pt-4">{children}</div>}
    </div>
  );
}

// ─── Field list (key-value pairs) ─────────────────────────────────────────────
function FieldList({ fields }) {
  return (
    <dl className="grid gap-3 sm:grid-cols-2">
      {fields.map((f, i) => (
        <div key={i} className="rounded-lg bg-[#f5f5f2] px-4 py-3">
          <dt className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#9ca3af]">{f.label}</dt>
          <dd className="mt-1 text-[0.88rem] font-medium text-[#1a1a1a]">{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}

// ─── Simple bullet list ────────────────────────────────────────────────────────
function BulletList({ items, numbered = false }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2 text-[0.88rem] text-[#444]">
          <span className="mt-[2px] shrink-0 font-semibold text-[#2f67a6]">
            {numbered ? `${i + 1}.` : "•"}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// ─── Paragraphs ────────────────────────────────────────────────────────────────
function Paragraphs({ items }) {
  return (
    <div className="space-y-3">
      {items.map((p, i) => (
        <p key={i} className="text-[0.88rem] leading-relaxed text-[#444]">
          {p}
        </p>
      ))}
    </div>
  );
}

// ─── Links list ────────────────────────────────────────────────────────────────
function LinksList({ links }) {
  return (
    <ul className="space-y-2">
      {links.map((lk, i) => (
        <li key={i} className="flex items-center gap-2">
          <HiLink className="shrink-0 text-[#2f67a6]" size={14} />
          <a
            href={lk.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.88rem] text-[#2f67a6] underline underline-offset-2 hover:text-[#1a3a6c]"
          >
            {lk.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

// ─── Conversation display ──────────────────────────────────────────────────────
function Conversation({ exchanges, note, outcome }) {
  return (
    <div>
      {note && <p className="mb-3 text-[0.8rem] italic text-[#888]">{note}</p>}
      <div className="space-y-2">
        {exchanges.map((ex, i) => (
          <div
            key={i}
            className={`flex gap-3 rounded-lg px-4 py-2.5 text-[0.88rem] ${
              ex.speaker === "Me" ? "bg-[#eef4ff]" : "bg-[#f5f5f2]"
            }`}
          >
            <span
              className={`w-8 shrink-0 font-bold ${
                ex.speaker === "Me" ? "text-[#2f67a6]" : "text-[#666]"
              }`}
            >
              {ex.speaker}:
            </span>
            <span className="text-[#333]">{ex.text}</span>
          </div>
        ))}
      </div>
      {outcome && (
        <p className="mt-3 text-[0.82rem] italic text-[#666]">[{outcome}]</p>
      )}
    </div>
  );
}

// ─── University list ───────────────────────────────────────────────────────────
function UniversityList({ note, usa, canada }) {
  return (
    <div>
      {note && <p className="mb-4 text-[0.88rem] text-[#555]">{note}</p>}
      <div className="space-y-5">
        {[
          { label: "USA", list: usa },
          { label: "Canada", list: canada },
        ].map(({ label, list }) => (
          <div key={label}>
            <p className="mb-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#9ca3af]">{label}</p>
            <div className="space-y-2">
              {list.map((u, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 rounded-lg border px-4 py-3 text-[0.88rem] ${
                    u.status === "accepted"
                      ? "border-[#bbdcbb] bg-[#f0faf0]"
                      : "border-[#f0d0d0] bg-[#fdf3f3]"
                  }`}
                >
                  {u.status === "accepted" ? (
                    <HiCheckCircle className="mt-0.5 shrink-0 text-[#3a9a3a]" size={16} />
                  ) : (
                    <HiXCircle className="mt-0.5 shrink-0 text-[#cc4444]" size={16} />
                  )}
                  <div>
                    <p className="font-semibold text-[#1a1a1a]">{u.name}</p>
                    <p className="text-[0.82rem] text-[#666]">{u.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Subsections-list (documents, etc.) ───────────────────────────────────────
function SubsectionsList({ items }) {
  return (
    <div className="space-y-5">
      {items.map((item, i) => (
        <div key={i}>
          <p className="mb-2 text-[0.78rem] font-bold uppercase tracking-[0.1em] text-[#2f67a6]">
            {item.subtitle}
          </p>
          <BulletList items={item.list} />
          {item.note && (
            <p className="mt-2 text-[0.82rem] italic text-[#888]">{item.note}</p>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Topic list (before-graduation style) ─────────────────────────────────────
function TopicList({ intro, items }) {
  return (
    <div>
      {intro && <p className="mb-4 text-[0.88rem] italic text-[#555]">{intro}</p>}
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="rounded-lg bg-[#f5f5f2] px-4 py-3">
            <p className="font-semibold text-[#1a1a1a] text-[0.9rem]" style={narrowFont}>
              {item.title}
            </p>
            {item.description && (
              <p className="mt-1 text-[0.85rem] text-[#555]">{item.description}</p>
            )}
            {item.list && (
              <ul className="mt-2 space-y-1">
                {item.list.map((li, j) => (
                  <li key={j} className="flex gap-2 text-[0.85rem] text-[#444]">
                    <span className="mt-[2px] shrink-0 text-[#2f67a6]">•</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Rich subsections (preparation/applying sections) ─────────────────────────
function SubsectionsRich({ intro, items }) {
  return (
    <div>
      {intro && <p className="mb-4 text-[0.88rem] text-[#555]">{intro}</p>}
      <div className="space-y-3">
        {items.map((item, idx) => (
          <Accordion key={item.id || idx} title={item.title} accent="#1a5296">
            {item.paragraphs && <Paragraphs items={item.paragraphs} />}
            {item.links && (
              <div className={item.paragraphs ? "mt-3" : ""}>
                <LinksList links={item.links} />
              </div>
            )}
            {item.type === "linked" && item.links && (
              <div className="space-y-2">
                {item.links.map((lk, i) => (
                  <a
                    key={i}
                    href={lk.href}
                    className="flex items-center gap-2 rounded-lg bg-[#eef4ff] px-4 py-3 text-[0.9rem] font-medium text-[#2f67a6] transition-colors hover:bg-[#ddeeff]"
                  >
                    <HiLink size={14} />
                    {lk.label}
                  </a>
                ))}
              </div>
            )}
            {item.sevisSteps && (
              <div className="mt-3">
                <p className="mb-2 text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#9ca3af]">
                  Steps to Pay SEVIS via EBL
                </p>
                <BulletList items={item.sevisSteps} numbered />
              </div>
            )}
            {item.subItems && (
              <div className={item.paragraphs || item.links ? "mt-4" : ""}>
                <SubsectionsList items={item.subItems} />
              </div>
            )}
          </Accordion>
        ))}
      </div>
    </div>
  );
}

// ─── Cost breakdown ────────────────────────────────────────────────────────────
function CostBreakdown({ intro, costs, summary, note, buyingDollarsNote }) {
  return (
    <div>
      {intro && <p className="mb-4 text-[0.88rem] text-[#555]">{intro}</p>}
      <div className="overflow-hidden rounded-xl border border-[#e8e8e3]">
        {costs.map((c, i) => (
          <div
            key={i}
            className={`flex flex-wrap items-center justify-between gap-2 px-5 py-3 text-[0.88rem] ${
              i % 2 === 0 ? "bg-white" : "bg-[#f9f9f7]"
            }`}
          >
            <span className="font-medium text-[#333]">{c.item}</span>
            <span className="flex items-center gap-1 font-semibold text-[#2f67a6]">
              <HiCurrencyDollar size={14} />
              {c.value}
            </span>
          </div>
        ))}
      </div>
      {summary && (
        <div className="mt-4 rounded-lg bg-[#eef4ff] px-5 py-3 text-[0.88rem] font-semibold text-[#1a3a6c]">
          {summary}
        </div>
      )}
      {note && <p className="mt-3 text-[0.82rem] italic text-[#888]">{note}</p>}
      {buyingDollarsNote && (
        <div className="mt-4 rounded-lg bg-[#f5f5f2] px-4 py-3 text-[0.83rem] text-[#666]">
          <p className="mb-1 font-semibold text-[#333]">Buying Dollars</p>
          {buyingDollarsNote}
        </div>
      )}
    </div>
  );
}

// ─── Render a subsection by type ──────────────────────────────────────────────
function SubsectionContent({ sub }) {
  switch (sub.type) {
    case "fields":
      return (
        <>
          <FieldList fields={sub.fields} />
          {sub.workExperience && (
            <div className="mt-4">
              <p className="mb-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#9ca3af]">Work Experience</p>
              <BulletList items={sub.workExperience} />
            </div>
          )}
        </>
      );
    case "numbered-list":
      return <BulletList items={sub.items} numbered />;
    case "paragraphs":
      return <Paragraphs items={sub.paragraphs} />;
    case "conversation":
      return <Conversation exchanges={sub.exchanges} note={sub.note} outcome={sub.outcome} />;
    case "university-list":
      return <UniversityList note={sub.note} usa={sub.usa} canada={sub.canada} />;
    case "subsections-list":
      return <SubsectionsList items={sub.items} />;
    default:
      return null;
  }
}

// ─── Section 1: Profile ────────────────────────────────────────────────────────
function ProfileSection({ section }) {
  return (
    <div className="space-y-3">
      {section.subsections.map((sub) => (
        <Accordion key={sub.id} title={sub.title} defaultOpen={sub.id === "visa-info"}>
          <SubsectionContent sub={sub} />
        </Accordion>
      ))}
    </div>
  );
}

// ─── Section 2: Journey ────────────────────────────────────────────────────────
function JourneySection({ section }) {
  const [expanded, setExpanded] = useState(false);
  const preview = section.paragraphs.slice(0, 3);
  const rest = section.paragraphs.slice(3);

  return (
    <div>
      {section.intro && (
        <p className="mb-5 text-[0.9rem] italic text-[#666]">{section.intro}</p>
      )}
      <Paragraphs items={preview} />
      {rest.length > 0 && (
        <>
          {expanded && (
            <div className="mt-3">
              <Paragraphs items={rest} />
            </div>
          )}
          <button
            onClick={() => setExpanded((o) => !o)}
            className="mt-4 flex items-center gap-1 text-[0.85rem] font-semibold text-[#2f67a6] hover:text-[#1a3a6c]"
          >
            {expanded ? (
              <>
                <HiChevronUp size={16} /> Show less
              </>
            ) : (
              <>
                <HiChevronDown size={16} /> Read the full journey ({rest.length} more paragraphs)
              </>
            )}
          </button>
        </>
      )}
    </div>
  );
}

// ─── Section 3: Suggestions ───────────────────────────────────────────────────
function SuggestionsSection({ section }) {
  return (
    <div>
      {section.intro && (
        <p className="mb-5 text-[0.9rem] italic text-[#555]">{section.intro}</p>
      )}
      <div className="space-y-3">
        {section.subsections.map((sub) => (
          <Accordion key={sub.id} title={sub.title} accent="#1a5296">
            {sub.type === "numbered-list" && <BulletList items={sub.items} numbered />}
            {sub.type === "topic-list" && (
              <TopicList intro={sub.intro} items={sub.items} />
            )}
            {sub.type === "subsections-rich" && (
              <SubsectionsRich intro={sub.intro} items={sub.items} />
            )}
            {sub.type === "links-section" && <LinksList links={sub.links} />}
            {sub.type === "costs" && (
              <CostBreakdown
                intro={sub.intro}
                costs={sub.costs}
                summary={sub.summary}
                note={sub.note}
                buyingDollarsNote={sub.buyingDollarsNote}
              />
            )}
            {sub.type === "paragraphs" && <Paragraphs items={sub.paragraphs} />}
          </Accordion>
        ))}
      </div>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function HigherStudyUSAPage() {
  const { title, subtitle, sections } = higherStudyUSA;
  const [activeSection, setActiveSection] = useState(sections[0].id);

  const sectionIcons = SECTION_ICONS;

  return (
    <div className="bg-[#f5f5f2] text-[#262626]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2744] to-[#1f3a5c]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,1) 39px, rgba(255,255,255,1) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,1) 39px, rgba(255,255,255,1) 40px)",
          }}
        />
        <div className="mx-auto flex min-h-[240px] max-w-[1180px] flex-col justify-end px-6 pb-12 pt-16">
          <div className="mb-3 flex items-center gap-2">
            <HiAcademicCap className="text-[1.4rem] text-[#a3bed8]" />
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#a3bed8]">
              Personal Guide
            </span>
          </div>
          <h1 className="text-[2.6rem] font-bold leading-none text-white sm:text-[3.8rem]" style={narrowFont}>
            {title}
          </h1>
          <p className="mt-3 max-w-2xl text-[0.9rem] leading-relaxed text-[#a3bed8]">{subtitle}</p>
        </div>
      </section>

      {/* Section tabs */}
      <div className="sticky top-[72px] z-10 border-b border-[#e0e0d8] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-[1080px] px-6">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-none">
            {sections.map((sec) => {
              const Icon = sectionIcons[sec.id] ?? HiAcademicCap;
              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveSection(sec.id)}
                  className={`flex shrink-0 items-center gap-2 rounded-lg px-4 py-2 text-[0.82rem] font-semibold transition-colors ${
                    activeSection === sec.id
                      ? "bg-[#0f2744] text-white"
                      : "text-[#555] hover:bg-[#f0f0ec]"
                  }`}
                >
                  <Icon size={14} />
                  <span className="hidden sm:inline">{sec.number}.</span>
                  {sec.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-[1080px] px-6 py-10">
        {sections.map((sec) => {
          if (sec.id !== activeSection) return null;
          return (
            <div key={sec.id}>
              {/* Section header */}
              <div className="mb-6 flex items-center gap-3">
                <span className="text-[2rem] font-black text-[#e0e0d8]" style={narrowFont}>
                  {sec.number}
                </span>
                <h2 className="text-[1.6rem] font-bold text-[#0f2744]" style={narrowFont}>
                  {sec.title}
                </h2>
              </div>

              {sec.id === "profile" && <ProfileSection section={sec} />}
              {sec.id === "journey" && <JourneySection section={sec} />}
              {sec.id === "suggestions" && <SuggestionsSection section={sec} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

