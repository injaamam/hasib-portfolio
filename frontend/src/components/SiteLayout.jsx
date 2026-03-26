"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/lib/siteData";

export default function SiteLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="site-shell">
      <div className="top-strip" />
      <div className="site-layout">
      <header className="site-header">
        <div>
          <p className="brand-kicker">Search this site</p>
          <h2 className="brand">Satyaki Banik</h2>
        </div>
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
      </header>
      <main className="content">
        {children}
        <footer className="site-footer">
          <p>Page updated</p>
          <p>Google Sites</p>
          <a href="https://www.satyakibanik.com/" target="_blank" rel="noreferrer">
            Report abuse
          </a>
        </footer>
      </main>
      </div>
    </div>
  );
}
