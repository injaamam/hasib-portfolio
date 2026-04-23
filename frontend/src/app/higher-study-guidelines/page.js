"use client";

import { useState } from "react";
import { higherStudyGuidelines } from "@/lib/siteData";
import {
  HiAcademicCap,
  HiChevronDown,
  HiChevronUp,
  HiCheckCircle,
  HiGlobeAlt,
} from "react-icons/hi2";

const narrowFont = {
  fontFamily:
    '"Arial Narrow", "Roboto Condensed", "Helvetica Neue", Arial, sans-serif',
};

const sectionAccentColors = [
  "#2f67a6",
  "#1a5296",
  "#0f2744",
  "#1e6b8a",
  "#2a7a5e",
  "#7a4f2a",
  "#5a2a7a",
  "#7a2a3a",
  "#2a5a7a",
  "#3a6a2a",
  "#6a4a2a",
  "#4a2a6a",
  "#2a4a6a",
  "#5a7a2a",
];

function AccordionSection({ section, idx, isOpen, onToggle }) {
  const color = sectionAccentColors[idx % sectionAccentColors.length];

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
            className="text-[1rem] font-bold text-[#1a1a1a] sm:text-[1.05rem]"
            style={narrowFont}
          >
            {section.heading}
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
        <div className="border-t border-[#f0f0f0] px-6 pb-5 pt-4">
          <ul className="space-y-3">
            {section.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <HiCheckCircle
                  size={17}
                  className="mt-0.5 shrink-0"
                  style={{ color }}
                />
                <span className="text-[0.9rem] leading-[1.7] text-[#4b5563]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function USASubsection({ subsection }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => setOpenIndex(openIndex === idx ? -1 : idx);

  return (
    <div>
      {/* Intro card */}
      <div className="mb-8 rounded-2xl bg-gradient-to-br from-[#0f2744] to-[#2f67a6] px-7 py-6 text-white shadow-[0_4px_20px_rgba(15,39,68,0.25)]">
        <p className="text-[0.97rem] leading-[1.8] text-white/90">
          {subsection.intro}
        </p>
      </div>

      {/* Accordion sections */}
      <div className="space-y-3">
        {subsection.sections.map((section, idx) => (
          <AccordionSection
            key={idx}
            section={section}
            idx={idx}
            isOpen={openIndex === idx}
            onToggle={() => toggle(idx)}
          />
        ))}
      </div>
    </div>
  );
}

function ComingSoonSubsection({ subsection }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#eef4ff]">
        <HiGlobeAlt size={32} className="text-[#2f67a6]" />
      </div>
      <h3
        className="mb-3 text-[1.5rem] font-bold text-[#1a1a1a]"
        style={narrowFont}
      >
        {subsection.label}
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

export default function HigherStudyGuidelinesPage() {
  const { title, subtitle, subsections } = higherStudyGuidelines;
  const [activeTab, setActiveTab] = useState(subsections[0].id);

  const activeSubsection = subsections.find((s) => s.id === activeTab);

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
              {title}
            </h1>
            {subtitle && (
              <p className="mt-3 max-w-xl text-[0.95rem] text-white/70">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1080px] px-6 py-12">
        {/* Tab bar */}
        <div className="mb-8 flex flex-wrap gap-2 rounded-2xl bg-white p-2 shadow-[0_2px_12px_rgba(0,0,0,0.07)]">
          {subsections.map((sub) => (
            <button
              key={sub.id}
              type="button"
              onClick={() => setActiveTab(sub.id)}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-[0.9rem] font-semibold transition ${
                activeTab === sub.id
                  ? "bg-gradient-to-r from-[#0f2744] to-[#2f67a6] text-white shadow-[0_2px_8px_rgba(47,103,166,0.3)]"
                  : "text-[#4b5563] hover:bg-[#f0f4ff] hover:text-[#2f67a6]"
              }`}
            >
              {sub.flag && <span className="text-[1.1rem]">{sub.flag}</span>}
              <span style={narrowFont}>{sub.label}</span>
              {sub.comingSoon && (
                <span
                  className={`rounded-full px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.08em] ${
                    activeTab === sub.id
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

        {/* Active subsection content */}
        {activeSubsection && (
          <div>
            {activeSubsection.comingSoon ? (
              <ComingSoonSubsection subsection={activeSubsection} />
            ) : (
              <USASubsection subsection={activeSubsection} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
