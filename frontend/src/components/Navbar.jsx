"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navStructure = [
  { label: "Home", href: "/home" },
  {
    label: "About Me",
    children: [
      { href: "/education", label: "Education" },
      { href: "/honorsawards", label: "Honors/Awards" },
      { href: "/cv", label: "CV" },
      { href: "/eca", label: "ECA" },
    ],
  },
  { href: "/professional-experience", label: "Professional Experience" },
  {
    label: "My Skills",
    children: [
      {
        href: "/semiconductor-device-fabrication",
        label: "Semiconductor Device Fabrication",
      },
      {
        href: "/semiconductor-device-simulation",
        label: "Semiconductor Device Simulation",
      },
      {
        href: "/semiconductor-device-modelling",
        label: "Semiconductor Device Modelling",
      },
      {
        href: "/programming-languages",
        label: "Programming Languages",
      },
      {
        href: "/miscellaneous-skills",
        label: "Miscellaneous Skills",
      },
    ],
  },
  {
    label: "Research & Publications",
    children: [
      { href: "/research-interest", label: "Research Interest" },
      { href: "/publicationsprojects", label: "Publications/Projects" },
      {
        href: "/current-research-projects",
        label: "Current Research Projects",
      },
      {
        href: "/my-supervised-works",
        label: "My Supervised Students & Works",
      },
      {
        href: "/future-student-opportunities",
        label: "Future Student Opportunities",
      },
    ],
  },
  {
    label: "Higher Study Guidelines",
    children: [
      { href: "/higher-study-usa", label: "Higher Study in USA" },
      {
        href: "/higher-study-other-countries",
        label: "Higher Study in Other Countries",
      },
    ],
  },
  {
    label: "Miscellaneous",
    children: [
      {
        href: "/academic-cv-guide",
        label: "Academic CV Guide",
      },
      { href: "/linkedin-guide", label: "LinkedIn Guide" },
      { href: "/gre-prep-guide", label: "GRE Prep Guide" },
      { href: "/ielts-prep-guide", label: "IELTS Prep Guide" },
      {
        href: "/email-templates",
        label: "Email Templates",
      },
      {
        href: "/letter-of-recommendations",
        label: "Letter of Recommendations",
      },
      {
        href: "/statement-of-purpose",
        label: "Statement of Purpose",
      },
      { href: "/cover-letter", label: "Cover Letter" },
      {
        href: "/interview-questions",
        label: "Interview Questions",
      },
    ],
  },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-30">
      <div
        className="border-b border-[#d8dde3] bg-white text-[#1a1a1a] shadow-[0_1px_10px_rgba(0,0,0,0.09)]"
      >
        <div className="mx-auto flex min-h-[62px] max-w-none items-center justify-between gap-4 px-4 sm:px-6">
          <Link
            href="/home"
            className="shrink-0 text-[1.15rem] font-semibold tracking-[0.01em] text-[#0f2744] transition hover:text-[#1f3a5c] sm:text-[1.3rem]"
            onClick={() => setIsMenuOpen(false)}
          >
            Hasib Cheragee
          </Link>

          <button
            type="button"
            className="inline-flex h-10 items-center justify-center rounded border border-[#c8cdd3] px-3 text-sm font-medium text-[#1a1a1a] transition hover:bg-[#f0f4f8] lg:hidden"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen((o) => !o)}
          >
            Menu
          </button>

          <nav className="hidden min-w-0 flex-1 items-center justify-end lg:flex">
            <div className="flex min-w-0 flex-wrap items-center justify-end gap-0.5">
              {navStructure.map((item) =>
                item.children ? (
                  <div key={item.label} className="group relative">
                    <button
                      type="button"
                      className={`rounded px-2 py-1.5 text-[0.875rem] font-medium transition ${item.children.some((c) => pathname === c.href) ? "bg-[#eef2f7] text-[#0f2744]" : "text-[#2a2a2a] hover:bg-[#eef2f7] hover:text-[#0f2744]"}`}
                    >
                      {item.label}
                    </button>
                    <div className="absolute top-full left-0 z-50 hidden min-w-[210px] rounded border border-[#d8dde3] bg-white py-1 shadow-[0_8px_24px_rgba(0,0,0,0.12)] group-hover:block">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2 text-[0.93rem] font-medium transition ${pathname === child.href ? "bg-[#eef2f7] text-[#0f2744]" : "text-[#2a2a2a] hover:bg-[#f5f8fb] hover:text-[#0f2744]"}`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded px-2 py-1.5 text-[0.875rem] font-medium transition ${pathname === item.href ? "bg-[#eef2f7] text-[#0f2744]" : "text-[#2a2a2a] hover:bg-[#eef2f7] hover:text-[#0f2744]"}`}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </div>
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="border-t border-[#d8dde3] px-4 py-3 lg:hidden">
            <div className="flex flex-col gap-1">
              {navStructure.map((item) =>
                item.children ? (
                  <details
                    key={item.label}
                    open={item.children.some((c) => pathname === c.href)}
                  >
                    <summary
                      className={`cursor-pointer rounded px-3 py-2 text-base font-medium transition ${item.children.some((c) => pathname === c.href) ? "bg-[#eef2f7] text-[#0f2744]" : "text-[#2a2a2a] hover:bg-[#eef2f7] hover:text-[#0f2744]"}`}
                    >
                      {item.label}
                    </summary>
                    <div className="ml-4 mt-0.5 flex flex-col gap-0.5 border-l border-[#d0d8e2] pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`rounded px-3 py-2 text-[0.93rem] font-medium transition ${pathname === child.href ? "bg-[#eef2f7] text-[#0f2744]" : "text-[#2a2a2a] hover:bg-[#f5f8fb] hover:text-[#0f2744]"}`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded px-3 py-2 text-base font-medium transition ${pathname === item.href ? "bg-[#eef2f7] text-[#0f2744]" : "text-[#2a2a2a] hover:bg-[#eef2f7] hover:text-[#0f2744]"}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
