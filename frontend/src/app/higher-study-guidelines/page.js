"use client";

import Link from "next/link";
import { useState } from "react";
import {
  profileData,
  journeyParagraphs,
  guidelinesData,
  usefulLinks,
} from "@/lib/higherStudyUSAData";
import {
  HiAcademicCap,
  HiChevronDown,
  HiChevronUp,
  HiCheckCircle,
  HiGlobeAlt,
  HiUser,
  HiMapPin,
  HiDocumentText,
  HiArrowTopRightOnSquare,
  HiLink,
} from "react-icons/hi2";

// ── Shared styles ────────────────────────────────────────────────────────────

const narrowFont = {
  fontFamily:
    '"Arial Narrow", "Roboto Condensed", "Helvetica Neue", Arial, sans-serif',
};

const ACCENT_COLORS = [
  "#2f67a6", "#1a5296", "#0f2744", "#1e6b8a", "#2a7a5e",
  "#7a4f2a", "#5a2a7a", "#7a2a3a", "#2a5a7a", "#3a6a2a",
  "#6a4a2a", "#4a2a6a", "#2a4a6a", "#5a7a2a",
];

// ── Shared primitives ────────────────────────────────────────────────────────

function SectionCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.07)] ${className}`}
    >
      {children}
    </div>
  );
}

function CardHeading({ children }) {
  return (
    <h3
      className="mb-4 text-[1.05rem] font-bold text-[#1a1a1a]"
      style={narrowFont}
    >
      {children}
    </h3>
  );
}

function BulletList({ items, color = "#2f67a6" }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <HiCheckCircle
            size={16}
            className="mt-0.5 shrink-0"
            style={{ color }}
          />
          <span className="text-[0.88rem] leading-[1.7] text-[#4b5563]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function ExternalLink({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-[0.88rem] text-[#2f67a6] underline decoration-dotted underline-offset-2 hover:text-[#0f2744]"
    >
      {label}
      <HiArrowTopRightOnSquare size={13} className="shrink-0" />
    </a>
  );
}

// ── Accordion for Guidelines ─────────────────────────────────────────────────

function Accordion({ title, idx, isOpen, onToggle, children }) {
  const color = ACCENT_COLORS[idx % ACCENT_COLORS.length];
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.07)] transition-shadow hover:shadow-[0_6px_24px_rgba(0,0,0,0.11)]">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <div
            className="h-5 w-1.5 shrink-0 rounded-full"
            style={{ backgroundColor: color }}
          />
          <span
            className="text-[1rem] font-bold text-[#1a1a1a]"
            style={narrowFont}
          >
            {title}
          </span>
        </div>
        <div
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: `${color}22` }}
        >
          {isOpen ? (
            <HiChevronUp size={16} style={{ color }} />
          ) : (
            <HiChevronDown size={16} style={{ color }} />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="border-t border-[#f0f0f0] px-6 pb-6 pt-5">
          {children}
        </div>
      )}
    </div>
  );
}

// ── Sub-accordion for nested subsections ─────────────────────────────────────

function SubAccordion({ title, isOpen, onToggle, children }) {
  return (
    <div className="overflow-hidden rounded-lg border border-[#e8eef5] bg-[#f8fafc]">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-3 px-5 py-3 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-[0.9rem] font-semibold text-[#1a3a5c]" style={narrowFont}>
          {title}
        </span>
        {isOpen ? (
          <HiChevronUp size={14} className="shrink-0 text-[#2f67a6]" />
        ) : (
          <HiChevronDown size={14} className="shrink-0 text-[#2f67a6]" />
        )}
      </button>
      {isOpen && (
        <div className="border-t border-[#e8eef5] px-5 pb-4 pt-4">
          {children}
        </div>
      )}
    </div>
  );
}

// ── ① My Profile & Visa Interview ────────────────────────────────────────────

function InfoGrid({ data }) {
  const fields = [
    { label: "Visa Type", value: data.visaInfo.type },
    { label: "Visa Status", value: data.visaInfo.status },
    { label: "University", value: data.visaInfo.university },
    { label: "Program", value: data.visaInfo.program },
    { label: "Session", value: data.visaInfo.session },
    { label: "Funding", value: data.visaInfo.funding },
  ];
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {fields.map(({ label, value }) => (
        <div key={label} className="rounded-xl border border-[#e8eef5] bg-white p-4">
          <p className="mb-1 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[#2f67a6]">
            {label}
          </p>
          <p className="text-[0.9rem] font-medium text-[#1a1a1a]">{value}</p>
        </div>
      ))}
    </div>
  );
}

function InterviewDetails({ data }) {
  const rows = [
    { label: "Appointment", value: data.interviewDetails.appointment },
    { label: "Priority", value: data.interviewDetails.priority },
    { label: "CEAC Status", value: data.interviewDetails.ceacStatus },
    { label: "Passport Collection", value: data.interviewDetails.passportCollection },
    { label: "Documents Checked", value: data.interviewDetails.documentsChecked },
  ];
  return (
    <SectionCard className="p-6">
      <CardHeading>Interview Appointment Details</CardHeading>
      <dl className="divide-y divide-[#f0f0f0]">
        {rows.map(({ label, value }) => (
          <div key={label} className="flex flex-col gap-0.5 py-2.5 sm:flex-row sm:gap-4">
            <dt className="w-44 shrink-0 text-[0.78rem] font-semibold text-[#9ca3af]">
              {label}
            </dt>
            <dd className="text-[0.88rem] text-[#374151]">{value}</dd>
          </div>
        ))}
      </dl>
    </SectionCard>
  );
}

function SecurityCheckpoints({ checkpoints }) {
  return (
    <SectionCard className="p-6">
      <CardHeading>Security Checkpoints</CardHeading>
      <ol className="space-y-3">
        {checkpoints.map((cp) => (
          <li key={cp.id} className="flex items-start gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0f2744] text-[0.72rem] font-bold text-white">
              {cp.id}
            </div>
            <div className="pt-1">
              <p className="text-[0.82rem] font-semibold text-[#1a3a5c]">
                {cp.location}
              </p>
              <p className="text-[0.84rem] text-[#4b5563]">{cp.check}</p>
            </div>
          </li>
        ))}
      </ol>
    </SectionCard>
  );
}

function InterviewConversation({ conversation }) {
  return (
    <SectionCard className="p-6">
      <CardHeading>Conversation with the Visa Officer</CardHeading>
      <p className="mb-4 text-[0.8rem] italic text-[#6b7280]">
        {conversation.note}
      </p>
      <div className="space-y-2">
        {conversation.exchanges.map((ex, i) => (
          <div
            key={i}
            className={`flex gap-2 ${ex.speaker === "Me" ? "flex-row-reverse" : "flex-row"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-[0.87rem] leading-[1.6] ${
                ex.speaker === "Me"
                  ? "rounded-tr-sm bg-[#0f2744] text-white"
                  : "rounded-tl-sm bg-[#eef4ff] text-[#1a1a1a]"
              }`}
            >
              <span className="mb-0.5 block text-[0.7rem] font-bold opacity-60">
                {ex.speaker === "Me" ? "Me" : "Visa Officer"}
              </span>
              {ex.text}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

function EducationScores({ education, testScores, workExperience }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {/* Education */}
      <SectionCard className="p-6">
        <CardHeading>Education</CardHeading>
        <dl className="space-y-2">
          {[
            { label: "Program", value: education.program },
            { label: "Graduated", value: education.graduated },
            { label: "CGPA", value: education.cgpa },
            { label: "Thesis", value: education.thesis },
            { label: "Institution", value: education.institution },
            { label: "Publications", value: education.publications },
          ].map(({ label, value }) => (
            <div key={label} className="flex gap-3">
              <dt className="w-28 shrink-0 text-[0.76rem] font-semibold text-[#9ca3af]">
                {label}
              </dt>
              <dd className="text-[0.87rem] text-[#374151]">{value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-4 border-t border-[#f0f0f0] pt-4">
          <p className="mb-2 text-[0.76rem] font-semibold uppercase tracking-[0.08em] text-[#9ca3af]">
            Work Experience
          </p>
          <ul className="space-y-1">
            {workExperience.map((w, i) => (
              <li key={i} className="text-[0.87rem] text-[#374151]">
                • {w}
              </li>
            ))}
          </ul>
        </div>
      </SectionCard>

      {/* Test Scores */}
      <SectionCard className="p-6">
        <CardHeading>Test Scores</CardHeading>
        <div className="space-y-5">
          {testScores.map((t) => (
            <div key={t.label}>
              <div className="mb-2 flex items-center justify-between">
                <span
                  className="text-[0.85rem] font-bold text-[#0f2744]"
                  style={narrowFont}
                >
                  {t.label}
                </span>
                <span className="rounded-full bg-[#0f2744] px-3 py-0.5 text-[0.78rem] font-bold text-white">
                  {t.overall}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {t.breakdown.map((b) => (
                  <div
                    key={b.name}
                    className="rounded-lg bg-[#f5f7fa] px-3 py-2"
                  >
                    <p className="text-[0.7rem] text-[#9ca3af]">{b.name}</p>
                    <p className="text-[0.88rem] font-semibold text-[#1a1a1a]">
                      {b.score}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}

function UniversityList({ universityList }) {
  return (
    <SectionCard className="p-6">
      <CardHeading>University Application Results</CardHeading>
      <p className="mb-5 text-[0.87rem] leading-[1.7] text-[#4b5563]">
        {universityList.intro}
      </p>
      <div className="grid gap-5 md:grid-cols-2">
        {[
          { label: "🇺🇸 USA", list: universityList.usa },
          { label: "🇨🇦 Canada", list: universityList.canada },
        ].map(({ label, list }) => (
          <div key={label}>
            <h4 className="mb-3 text-[0.82rem] font-bold uppercase tracking-[0.1em] text-[#6b7280]">
              {label}
            </h4>
            <ul className="space-y-2">
              {list.map((u) => (
                <li
                  key={u.name}
                  className={`rounded-xl border-l-4 px-4 py-3 ${
                    u.accepted
                      ? "border-[#2a7a5e] bg-[#f0faf5]"
                      : "border-[#d1d5db] bg-[#f9fafb]"
                  }`}
                >
                  <p
                    className="text-[0.88rem] font-semibold text-[#1a1a1a]"
                    style={narrowFont}
                  >
                    {u.name}
                  </p>
                  <p
                    className={`text-[0.82rem] font-semibold ${u.accepted ? "text-[#2a7a5e]" : "text-[#6b7280]"}`}
                  >
                    {u.outcome}
                  </p>
                  <p className="mt-0.5 text-[0.78rem] text-[#6b7280]">
                    {u.details}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-5 rounded-xl bg-[#eef4ff] px-4 py-3 text-[0.85rem] text-[#374151]">
        💡 {universityList.interviewQuestionsNote}{" "}
        <Link
          href={universityList.interviewQuestionsLink}
          className="font-semibold text-[#2f67a6] underline decoration-dotted"
        >
          Visit Miscellaneous
        </Link>
      </p>
    </SectionCard>
  );
}

function ProfileTab() {
  return (
    <div className="space-y-6">
      {/* Visa info grid */}
      <SectionCard className="p-6">
        <CardHeading>My Visa Profile</CardHeading>
        <InfoGrid data={profileData} />
      </SectionCard>

      {/* Interview details */}
      <InterviewDetails data={profileData} />

      {/* Documents in two columns */}
      <SectionCard className="p-6">
        <CardHeading>Documents Carried to the Embassy</CardHeading>
        <BulletList items={profileData.documentsCarried} />
      </SectionCard>

      {/* Security checkpoints */}
      <SecurityCheckpoints checkpoints={profileData.securityCheckpoints} />

      {/* Interview story */}
      <SectionCard className="p-6">
        <CardHeading>My Experience at the Embassy</CardHeading>
        <div className="space-y-4">
          {profileData.interviewStory.map((para, i) => (
            <p key={i} className="text-[0.9rem] leading-[1.8] text-[#4b5563]">
              {para}
            </p>
          ))}
        </div>
      </SectionCard>

      {/* Conversation */}
      <InterviewConversation conversation={profileData.conversation} />

      {/* Education + Scores */}
      <EducationScores
        education={profileData.education}
        testScores={profileData.testScores}
        workExperience={profileData.workExperience}
      />

      {/* University list */}
      <UniversityList universityList={profileData.universityList} />
    </div>
  );
}

// ── ② My Journey ─────────────────────────────────────────────────────────────

function JourneyTab() {
  return (
    <div className="space-y-5">
      <div className="rounded-2xl bg-gradient-to-br from-[#0f2744] to-[#2f67a6] px-7 py-6 text-white shadow-[0_4px_20px_rgba(15,39,68,0.25)]">
        <HiUser size={28} className="mb-3 opacity-70" />
        <p className="text-[1.05rem] font-semibold leading-[1.7]">
          A personal account of the journey — the struggles, the setbacks, and
          the triumph of pursuing higher studies abroad.
        </p>
      </div>
      <SectionCard className="p-8">
        <div className="space-y-5">
          {journeyParagraphs.map((para, i) => (
            <p key={i} className="text-[0.92rem] leading-[1.85] text-[#374151]">
              {para}
            </p>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}

// ── ③ Suggestions & Guidelines ───────────────────────────────────────────────

function Timeline({ timeline }) {
  return (
    <SectionCard className="p-6">
      <div className="mb-4">
        <h3 className="text-[1.05rem] font-bold text-[#1a1a1a]" style={narrowFont}>
          {timeline.title}
        </h3>
        <p className="text-[0.8rem] text-[#6b7280]">{timeline.subtitle}</p>
      </div>
      <ol className="space-y-2.5">
        {timeline.items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0f2744] text-[0.65rem] font-bold text-white">
              {i + 1}
            </span>
            <span className="text-[0.88rem] leading-[1.7] text-[#374151]">
              {item}
            </span>
          </li>
        ))}
      </ol>
    </SectionCard>
  );
}

function PointsList({ points, color = "#2f67a6" }) {
  return (
    <div className="space-y-3">
      {points.map((pt, i) => (
        <div key={i} className="rounded-lg bg-[#f8fafc] p-3.5">
          {pt.heading && (
            <p className="mb-1 text-[0.85rem] font-semibold text-[#1a3a5c]" style={narrowFont}>
              {pt.heading}
            </p>
          )}
          {pt.text && (
            <p className="text-[0.86rem] leading-[1.7] text-[#4b5563]">{pt.text}</p>
          )}
          {pt.items && <BulletList items={pt.items} color={color} />}
        </div>
      ))}
    </div>
  );
}

function CostTable({ costs }) {
  return (
    <div className="overflow-hidden rounded-xl border border-[#e8eef5]">
      <table className="w-full text-[0.87rem]">
        <thead>
          <tr className="bg-[#0f2744] text-white">
            <th className="px-4 py-2.5 text-left font-semibold">Item</th>
            <th className="px-4 py-2.5 text-right font-semibold">Estimated Cost</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#f0f0f0]">
          {costs.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"}>
              <td className="px-4 py-2.5 text-[#374151]">{row.item}</td>
              <td className="px-4 py-2.5 text-right font-semibold text-[#0f2744]">
                {row.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function GuidelineSection({ section, idx, isOpen, onToggle }) {
  const color = ACCENT_COLORS[idx % ACCENT_COLORS.length];
  const [openSubIdx, setOpenSubIdx] = useState(-1);
  const toggleSub = (i) => setOpenSubIdx(openSubIdx === i ? -1 : i);

  const renderContent = (content) =>
    content && content.length > 0 ? (
      <div className="mb-4 space-y-3">
        {content.map((para, i) => (
          <p key={i} className="text-[0.88rem] leading-[1.75] text-[#4b5563]">
            {para}
          </p>
        ))}
      </div>
    ) : null;

  const renderLinks = (links) =>
    links && links.length > 0 ? (
      <div className="mt-3 flex flex-wrap gap-3">
        {links.map((l, i) => (
          <ExternalLink key={i} href={l.href} label={l.label} />
        ))}
      </div>
    ) : null;

  return (
    <Accordion title={section.title} idx={idx} isOpen={isOpen} onToggle={onToggle}>
      {/* Intro paragraph */}
      {section.intro && (
        <p className="mb-4 text-[0.9rem] leading-[1.75] text-[#4b5563]">
          {section.intro}
        </p>
      )}

      {/* Simple points list (no subsections) */}
      {section.points && !section.subsections && (
        <PointsList points={section.points} color={color} />
      )}

      {/* Note at the bottom of section */}
      {section.note && !section.subsections && (
        <div className="mt-4 rounded-xl bg-[#fffbeb] px-4 py-3 text-[0.84rem] text-[#92400e]">
          ⚠️ {section.note}
        </div>
      )}

      {/* Cost table for monetary section */}
      {section.costs && (
        <>
          <CostTable costs={section.costs} />
          <p className="mt-4 text-[0.88rem] leading-[1.75] text-[#4b5563]">
            {section.summary}
          </p>
          <div className="mt-3 rounded-xl bg-[#eef4ff] px-4 py-3 text-[0.84rem] text-[#374151]">
            {section.buyingDollars}
          </div>
          <div className="mt-3 rounded-xl bg-[#f8fafc] px-4 py-3 text-[0.78rem] italic text-[#6b7280]">
            {section.note}
          </div>
        </>
      )}

      {/* Shopping links */}
      {section.links && !section.subsections && (
        <div className="space-y-2.5">
          {section.links.map((l, i) => (
            <div key={i}>
              <ExternalLink href={l.href} label={l.label} />
            </div>
          ))}
        </div>
      )}

      {/* Nested subsections */}
      {section.subsections && (
        <div className="space-y-2.5">
          {section.subsections.map((sub, si) => (
            <SubAccordion
              key={sub.id}
              title={sub.title}
              isOpen={openSubIdx === si}
              onToggle={() => toggleSub(si)}
            >
              {/* Link-only subsection */}
              {sub.isLink ? (
                <div className="flex items-center gap-3 rounded-xl bg-[#eef4ff] p-4">
                  <HiLink size={18} className="shrink-0 text-[#2f67a6]" />
                  <div>
                    <p className="text-[0.87rem] text-[#374151]">{sub.note}</p>
                    <Link
                      href={sub.link}
                      className="mt-1 inline-flex items-center gap-1 text-[0.85rem] font-semibold text-[#2f67a6] underline decoration-dotted"
                    >
                      Go to {sub.title} page
                      <HiArrowTopRightOnSquare size={13} />
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  {/* Intro label */}
                  {sub.intro && (
                    <p className="mb-3 text-[0.88rem] font-semibold italic text-[#2f67a6]">
                      {sub.intro}
                    </p>
                  )}

                  {/* Content paragraphs */}
                  {renderContent(sub.content)}

                  {/* Points */}
                  {sub.points && <PointsList points={sub.points} color={color} />}

                  {/* Sub-note */}
                  {sub.subNote && (
                    <div className="mt-4 rounded-xl border border-[#e0eaf4] bg-[#f5f9ff] p-4">
                      <p className="mb-1 text-[0.82rem] font-bold text-[#2f67a6]">
                        {sub.subNote.heading}
                      </p>
                      <p className="text-[0.86rem] leading-[1.7] text-[#374151]">
                        {sub.subNote.text}
                      </p>
                    </div>
                  )}

                  {/* Note banner */}
                  {sub.note && (
                    <div className="mt-4 rounded-xl bg-[#fffbeb] px-4 py-3 text-[0.84rem] text-[#92400e]">
                      ⚠️ {sub.note}
                    </div>
                  )}

                  {/* Step-numbered list */}
                  {sub.steps && (
                    <ol className="mt-3 space-y-2">
                      {sub.steps.map((step, si2) => (
                        <li key={si2} className="flex items-start gap-3">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2f67a6] text-[0.65rem] font-bold text-white">
                            {si2 + 1}
                          </span>
                          <span className="text-[0.86rem] leading-[1.7] text-[#374151]">
                            {step}
                          </span>
                        </li>
                      ))}
                    </ol>
                  )}

                  {/* Contacts list */}
                  {sub.contacts && (
                    <ul className="mt-3 space-y-1">
                      {sub.contacts.map((c, ci) => (
                        <li key={ci} className="text-[0.86rem] text-[#374151]">
                          • {c}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Links */}
                  {renderLinks(sub.links)}

                  {/* Single link */}
                  {sub.link && typeof sub.link === "object" && (
                    <div className="mt-3">
                      <ExternalLink href={sub.link.href} label={sub.link.label} />
                    </div>
                  )}
                </>
              )}
            </SubAccordion>
          ))}
        </div>
      )}
    </Accordion>
  );
}

function UsefulLinks({ links }) {
  return (
    <SectionCard className="p-6">
      <CardHeading>Useful Links</CardHeading>
      <ul className="grid gap-2.5 sm:grid-cols-2">
        {links.map((l, i) => (
          <li key={i}>
            <ExternalLink href={l.href} label={l.label} />
          </li>
        ))}
      </ul>
    </SectionCard>
  );
}

function GuidelinesTab() {
  const { intro, timeline, sections } = guidelinesData;
  const [openIdx, setOpenIdx] = useState(0);
  const toggle = (i) => setOpenIdx(openIdx === i ? -1 : i);

  return (
    <div className="space-y-5">
      {/* Intro banner */}
      <div className="rounded-2xl bg-gradient-to-br from-[#0f2744] to-[#2f67a6] px-7 py-6 text-white shadow-[0_4px_20px_rgba(15,39,68,0.25)]">
        <HiMapPin size={24} className="mb-3 opacity-70" />
        <p className="text-[0.97rem] leading-[1.8] text-white/90">{intro}</p>
      </div>

      {/* Timeline */}
      <Timeline timeline={timeline} />

      {/* Accordion sections */}
      <div className="space-y-3">
        {sections.map((section, idx) => (
          <GuidelineSection
            key={section.id}
            section={section}
            idx={idx}
            isOpen={openIdx === idx}
            onToggle={() => toggle(idx)}
          />
        ))}
      </div>

      {/* Useful links */}
      <UsefulLinks links={usefulLinks} />
    </div>
  );
}

// ── Coming Soon tab ───────────────────────────────────────────────────────────

function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#eef4ff]">
        <HiGlobeAlt size={32} className="text-[#2f67a6]" />
      </div>
      <h3 className="mb-3 text-[1.5rem] font-bold text-[#1a1a1a]" style={narrowFont}>
        Higher Study in Other Countries
      </h3>
      <p className="max-w-md text-[0.95rem] text-[#6b7280]">
        Content for higher study guidance in other countries is coming soon.
        Check back later for detailed resources.
      </p>
      <span className="mt-5 inline-block rounded-full bg-[#eef4ff] px-4 py-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-[#2f67a6]">
        Coming Soon
      </span>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

const COUNTRY_TABS = [
  { id: "usa", label: "Higher Study in USA", flag: "🇺🇸" },
  { id: "other", label: "Other Countries", flag: "🌍", comingSoon: true },
];

const USA_TABS = [
  { id: "profile", label: "My Profile & Visa Interview" },
  { id: "journey", label: "My Journey" },
  { id: "guidelines", label: "Suggestions & Guidelines" },
];

export default function HigherStudyGuidelinesPage() {
  const [countryTab, setCountryTab] = useState("usa");
  const [usaTab, setUsaTab] = useState("profile");

  return (
    <div className="bg-[#f5f5f2] text-[#262626]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2744] to-[#1f3a5c]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,1) 39px,rgba(255,255,255,1) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,1) 39px,rgba(255,255,255,1) 40px)",
          }}
        />
        <div className="mx-auto flex min-h-[240px] max-w-[1180px] items-end px-6 pb-12 pt-16">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <HiAcademicCap className="text-[1.6rem] text-[#a3bed8]" />
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#a3bed8]">
                Study Abroad
              </span>
            </div>
            <h1
              className="text-[2.8rem] font-bold leading-none text-white sm:text-[4rem]"
              style={narrowFont}
            >
              Higher Study Guidelines
            </h1>
            <p className="mt-3 max-w-xl text-[0.95rem] text-white/70">
              A comprehensive, personal guide to pursuing graduate studies in
              the USA — from application to visa to arrival.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1080px] px-6 py-12">
        {/* Country tab bar */}
        <div className="mb-6 flex flex-wrap gap-2 rounded-2xl bg-white p-2 shadow-[0_2px_12px_rgba(0,0,0,0.07)]">
          {COUNTRY_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setCountryTab(tab.id)}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-[0.9rem] font-semibold transition ${
                countryTab === tab.id
                  ? "bg-gradient-to-r from-[#0f2744] to-[#2f67a6] text-white shadow-[0_2px_8px_rgba(47,103,166,0.3)]"
                  : "text-[#4b5563] hover:bg-[#f0f4ff] hover:text-[#2f67a6]"
              }`}
            >
              <span>{tab.flag}</span>
              <span style={narrowFont}>{tab.label}</span>
              {tab.comingSoon && (
                <span
                  className={`rounded-full px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.08em] ${
                    countryTab === tab.id
                      ? "bg-white/20 text-white/80"
                      : "bg-[#eef4ff] text-[#2f67a6]"
                  }`}
                >
                  Soon
                </span>
              )}
            </button>
          ))}
        </div>

        {countryTab === "other" ? (
          <ComingSoon />
        ) : (
          <>
            {/* USA sub-tab bar */}
            <div className="mb-7 flex flex-wrap gap-2 rounded-2xl bg-white p-2 shadow-[0_2px_12px_rgba(0,0,0,0.07)]">
              {USA_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setUsaTab(tab.id)}
                  className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-[0.88rem] font-semibold transition ${
                    usaTab === tab.id
                      ? "bg-[#eef4ff] text-[#0f2744] shadow-[inset_0_0_0_1.5px_#2f67a6]"
                      : "text-[#4b5563] hover:bg-[#f0f4ff] hover:text-[#2f67a6]"
                  }`}
                >
                  <span style={narrowFont}>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab content */}
            {usaTab === "profile" && <ProfileTab />}
            {usaTab === "journey" && <JourneyTab />}
            {usaTab === "guidelines" && <GuidelinesTab />}
          </>
        )}
      </div>
    </div>
  );
}
