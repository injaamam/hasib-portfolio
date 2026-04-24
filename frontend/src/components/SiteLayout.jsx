"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SiteLayout({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/home";

  return (
    <div className="min-h-screen bg-[#f5f5f2] text-[#262626]">
      <Navbar />

      <main className={isHomePage ? "" : "pt-18"}>{children}</main>

      <Footer />
    </div>
  );
}
