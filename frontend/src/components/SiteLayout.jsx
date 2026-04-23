"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function SiteLayout({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/home";

  return (
    <div className="min-h-screen bg-[#f5f5f2] text-[#262626]">
      <Navbar />

      <main className={isHomePage ? "" : "pt-[72px]"}>{children}</main>

      <footer className="border-t border-black/10 bg-white/80 px-6 py-4">
        <div className="mx-auto max-w-6xl text-sm text-gray-500">
          © 2026 Hasib Cheragee. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
