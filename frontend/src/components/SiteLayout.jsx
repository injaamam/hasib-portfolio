"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { home, routes } from "@/lib/siteData";

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
              <div className="flex min-w-0 items-center gap-2 overflow-x-auto whitespace-nowrap">
                {routes.map((route) => {
                  const isActive = pathname === route.href;

                  return (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={`rounded px-3 py-2 text-[1rem] font-medium transition ${
                        isActive
                          ? "bg-white/12 text-[#f3e8b0]"
                          : "text-white/95 hover:bg-white/10 hover:text-[#f3e8b0]"
                      }`}
                    >
                      {route.label}
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>

          {isMenuOpen ? (
            <nav className="border-t border-white/10 px-4 py-3 lg:hidden">
              <div className="flex flex-col gap-1">
                {routes.map((route) => {
                  const isActive = pathname === route.href;

                  return (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={`rounded px-3 py-2 text-base font-medium transition ${
                        isActive
                          ? "bg-white/12 text-[#f3e8b0]"
                          : "text-white/95 hover:bg-white/10 hover:text-[#f3e8b0]"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {route.label}
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
