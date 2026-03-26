"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/lib/siteData";

export default function SiteLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="site-layout">
      <aside className="sidebar">
        <h2 className="brand">Satyaki Banik</h2>
        <ul className="nav-list">
          {routes.map((route) => {
            const isActive = pathname === route.href;
            return (
              <li key={route.href}>
                <Link
                  href={route.href}
                  className={`nav-link${isActive ? " active" : ""}`}
                >
                  {route.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
      <main className="content">{children}</main>
    </div>
  );
}
