"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/lib/siteData";

export default function SiteLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e9f0ff] via-[#f3f6ff] to-[#eef3ff] text-[#172033]">
      <div className="h-[52px] border-b border-white/60 bg-white/70 backdrop-blur-xl" />
      <div className="mx-auto flex min-h-[calc(100vh-52px)] w-full max-w-[1150px] flex-col gap-4 px-4 py-6">
        <header className="rounded-2xl border border-white/70 bg-white/80 px-5 py-4 shadow-[0_12px_40px_rgba(31,57,123,0.12)] backdrop-blur-xl">
          <div className="flex flex-wrap items-end justify-between gap-2">
            <div>
              <p className="mb-1 text-xs font-medium tracking-wide text-[#6d7690]">
                Search this site
              </p>
              <h2 className="text-[22px] font-semibold tracking-tight text-[#0f1e43]">
                Satyaki Banik
              </h2>
            </div>
            <span className="rounded-full bg-[#edf3ff] px-3 py-1 text-xs font-medium text-[#3f5ca8]">
              Portfolio
            </span>
          </div>
          <div className="mt-4 overflow-x-auto">
            <ul className="flex min-w-max list-none flex-nowrap gap-2 p-0">
              {routes.map((route) => {
                const isActive = pathname === route.href;
                return (
                  <li className="shrink-0" key={route.href}>
                    <Link
                      href={route.href}
                      className={`block rounded-full px-3.5 py-2 text-sm font-medium no-underline transition-all duration-200 ${
                        isActive
                          ? "bg-gradient-to-r from-[#3f7cff] to-[#6e8dff] text-white shadow-md shadow-blue-300/40"
                          : "bg-[#f6f8ff] text-[#33466d] hover:bg-[#eaf0ff] hover:text-[#1d3f91]"
                      }`}
                    >
                      {route.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </header>
        <main className="rounded-2xl border border-white/70 bg-white/85 px-8 pb-6 pt-8 shadow-[0_18px_45px_rgba(31,57,123,0.14)] backdrop-blur-xl max-md:px-5 max-md:pb-5 max-md:pt-6">
          {children}
        </main>
      </div>
    </div>
  );
}
