"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
  { href: "/my-skills", label: "My Skills" },
  {
    label: "Research & Publications",
    children: [
      { href: "/research-interest", label: "Research Interest" },
      { href: "/publicationsprojects", label: "Publications/Projects" },
    ],
  },
  {
    label: "Research Group & Opportunities",
    children: [
      { href: "/research-areas", label: "Research Areas" },
      { href: "/current-research-projects", label: "Current Research Projects" },
      { href: "/my-supervised-works", label: "My Supervised Works" },
      { href: "/future-student-opportunities", label: "Future Student Opportunities" },
    ],
  },
  { href: "/higher-study-guidelines", label: "Higher Study Guidelines" },
  { href: "/miscellaneous", label: "Miscellaneous" },
  { href: "/contact", label: "Contact" },
];

const DROPDOWN_CLOSE_DELAY = 120;

function DesktopDropdown({ item, pathname }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);
  const isChildActive = item.children?.some((c) => pathname === c.href);

  useEffect(() => {
    return () => clearTimeout(closeTimer.current);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), DROPDOWN_CLOSE_DELAY);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className={`flex items-center gap-1 rounded px-3 py-2 text-[1rem] font-medium transition ${
          isChildActive
            ? "bg-white/12 text-[#f3e8b0]"
            : "text-white/95 hover:bg-white/10 hover:text-[#f3e8b0]"
        }`}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {item.label}
        <svg
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 z-50 mt-1 min-w-[210px] rounded border border-white/10 bg-[#2a2620]/95 py-1 shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm">
          {item.children.map((child) => {
            const isActive = pathname === child.href;
            return (
              <Link
                key={child.href}
                href={child.href}
                className={`block px-4 py-2 text-[0.93rem] font-medium transition ${
                  isActive
                    ? "bg-white/12 text-[#f3e8b0]"
                    : "text-white/90 hover:bg-white/10 hover:text-[#f3e8b0]"
                }`}
                onClick={() => setOpen(false)}
              >
                {child.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

function MobileDropdown({ item, pathname, onLinkClick }) {
  const isChildActive = item.children?.some((c) => pathname === c.href);
  const [open, setOpen] = useState(isChildActive);

  return (
    <div>
      <button
        type="button"
        className={`flex w-full items-center justify-between rounded px-3 py-2 text-base font-medium transition ${
          isChildActive
            ? "bg-white/12 text-[#f3e8b0]"
            : "text-white/95 hover:bg-white/10 hover:text-[#f3e8b0]"
        }`}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {item.label}
        <svg
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="ml-4 mt-0.5 flex flex-col gap-0.5 border-l border-white/15 pl-3">
          {item.children.map((child) => {
            const isActive = pathname === child.href;
            return (
              <Link
                key={child.href}
                href={child.href}
                className={`rounded px-3 py-2 text-[0.93rem] font-medium transition ${
                  isActive
                    ? "bg-white/12 text-[#f3e8b0]"
                    : "text-white/90 hover:bg-white/10 hover:text-[#f3e8b0]"
                }`}
                onClick={onLinkClick}
              >
                {child.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

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
            backgroundImage: `linear-gradient(rgba(47, 42, 34, 0.72), rgba(47, 42, 34, 0.72)), url("${home.hero.heroImage}")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="mx-auto flex min-h-[62px] max-w-[1500px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
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
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              Menu
            </button>

            <nav className="hidden min-w-0 flex-1 items-center justify-end lg:flex">
              <div className="flex min-w-0 items-center gap-1 overflow-x-auto whitespace-nowrap">
                {navStructure.map((item) => {
                  if (item.children) {
                    return (
                      <DesktopDropdown
                        key={item.label}
                        item={item}
                        pathname={pathname}
                      />
                    );
                  }

                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded px-3 py-2 text-[1rem] font-medium transition ${
                        isActive
                          ? "bg-white/12 text-[#f3e8b0]"
                          : "text-white/95 hover:bg-white/10 hover:text-[#f3e8b0]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>

          {isMenuOpen ? (
            <nav className="border-t border-white/10 px-4 py-3 lg:hidden">
              <div className="flex flex-col gap-1">
                {navStructure.map((item) => {
                  if (item.children) {
                    return (
                      <MobileDropdown
                        key={item.label}
                        item={item}
                        pathname={pathname}
                        onLinkClick={() => setIsMenuOpen(false)}
                      />
                    );
                  }

                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded px-3 py-2 text-base font-medium transition ${
                        isActive
                          ? "bg-white/12 text-[#f3e8b0]"
                          : "text-white/95 hover:bg-white/10 hover:text-[#f3e8b0]"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </nav>
          ) : null}
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
