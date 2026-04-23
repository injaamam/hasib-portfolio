"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { home } from "@/lib/siteData";

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
        href: "/my-skills/semiconductor-device-fabrication",
        label: "Semiconductor Device Fabrication",
      },
      {
        href: "/my-skills/semiconductor-device-simulation",
        label: "Semiconductor Device Simulation",
      },
      {
        href: "/my-skills/semiconductor-device-modelling",
        label: "Semiconductor Device Modelling",
      },
      {
        href: "/my-skills/programming-languages",
        label: "Programming Languages",
      },
      {
        href: "/my-skills/miscellaneous-skills",
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
      { href: "/higher-study-guidelines/usa", label: "Higher Study in USA" },
      {
        href: "/higher-study-guidelines/other-countries",
        label: "Higher Study in Other Countries",
      },
    ],
  },
  {
    label: "Miscellaneous",
    children: [
      {
        href: "/miscellaneous/academic-cv-guide",
        label: "Academic CV Guide",
      },
      { href: "/miscellaneous/linkedin-guide", label: "LinkedIn Guide" },
      { href: "/miscellaneous/gre-prep-guide", label: "GRE Prep Guide" },
      { href: "/miscellaneous/ielts-prep-guide", label: "IELTS Prep Guide" },
      {
        href: "/miscellaneous/email-templates",
        label: "Email Templates",
      },
      {
        href: "/miscellaneous/letter-of-recommendations",
        label: "Letter of Recommendations",
      },
      {
        href: "/miscellaneous/statement-of-purpose",
        label: "Statement of Purpose",
      },
      { href: "/miscellaneous/cover-letter", label: "Cover Letter" },
      {
        href: "/miscellaneous/interview-questions",
        label: "Interview Questions",
      },
    ],
  },
  { href: "/contact", label: "Contact" },
];

export default function SiteLayout({ children }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHomePage = pathname === "/home";

  return (
    <div className="min-h-screen bg-[#f5f5f2] text-[#262626]">
      <header className="fixed top-0 right-0 left-0 z-30">
        <div
          className="border-b border-white/10 bg-[#3f3c35]/82 text-white shadow-[0_10px_30px_rgba(0,0,0,0.24)] backdrop-blur-sm"
          style={{
            backgroundImage: `linear-gradient(rgba(47, 42, 34, 0.72), rgba(47, 42, 34, 0.72))`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="mx-auto flex min-h-[62px] max-w-none items-center justify-between gap-4 px-4 sm:px-6">
            <Link
              href="/home"
              className="shrink-0 text-[1.15rem] font-semibold tracking-[0.01em] text-white transition hover:text-[#f0e6bf] sm:text-[1.3rem]"
              onClick={() => setIsMenuOpen(false)}
            >
              Hasib Cheragee
            </Link>

            <button
              type="button"
              className="inline-flex h-10 items-center justify-center rounded border border-white/20 px-3 text-sm font-medium text-white transition hover:bg-white/10 lg:hidden"
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
                        className={`rounded px-2 py-1.5 text-[0.875rem] font-medium transition ${item.children.some((c) => pathname === c.href) ? "bg-white/12 text-[#f3e8b0]" : "text-white/95 hover:bg-white/10 hover:text-[#f3e8b0]"}`}
                      >
                        {item.label}
                      </button>
                      <div className="absolute top-full left-0 z-50 hidden min-w-[210px] rounded border border-white/10 bg-[#2a2620]/95 py-1 shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm group-hover:block">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-4 py-2 text-[0.93rem] font-medium transition ${pathname === child.href ? "bg-white/12 text-[#f3e8b0]" : "text-white/90 hover:bg-white/10 hover:text-[#f3e8b0]"}`}
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
                      className={`rounded px-2 py-1.5 text-[0.875rem] font-medium transition ${pathname === item.href ? "bg-white/12 text-[#f3e8b0]" : "text-white/95 hover:bg-white/10 hover:text-[#f3e8b0]"}`}
                    >
                      {item.label}
                    </Link>
                  ),
                )}
              </div>
            </nav>
          </div>

          {isMenuOpen && (
            <nav className="border-t border-white/10 px-4 py-3 lg:hidden">
              <div className="flex flex-col gap-1">
                {navStructure.map((item) =>
                  item.children ? (
                    <details
                      key={item.label}
                      open={item.children.some((c) => pathname === c.href)}
                    >
                      <summary
                        className={`cursor-pointer rounded px-3 py-2 text-base font-medium transition ${item.children.some((c) => pathname === c.href) ? "bg-white/12 text-[#f3e8b0]" : "text-white/95 hover:bg-white/10 hover:text-[#f3e8b0]"}`}
                      >
                        {item.label}
                      </summary>
                      <div className="ml-4 mt-0.5 flex flex-col gap-0.5 border-l border-white/15 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`rounded px-3 py-2 text-[0.93rem] font-medium transition ${pathname === child.href ? "bg-white/12 text-[#f3e8b0]" : "text-white/90 hover:bg-white/10 hover:text-[#f3e8b0]"}`}
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
                      className={`rounded px-3 py-2 text-base font-medium transition ${pathname === item.href ? "bg-white/12 text-[#f3e8b0]" : "text-white/95 hover:bg-white/10 hover:text-[#f3e8b0]"}`}
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

      <main className={isHomePage ? "" : "pt-[72px]"}>{children}</main>

      <footer className="border-t border-black/10 bg-white/80 px-6 py-4">
        <div className="mx-auto max-w-6xl text-sm text-gray-500">
          © 2026 Hasib Cheragee. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
