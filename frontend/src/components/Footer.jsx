import Link from "next/link";

const aboutLinks = [
  { href: "/home", label: "Home" },
  { href: "/education", label: "Education" },
  { href: "/professional-experience", label: "Professional Experience" },
  { href: "/contact", label: "Contact" },
];

const researchLinks = [
  { href: "/research-interest", label: "Research Interest" },
  { href: "/publicationsprojects", label: "Publications/Projects" },
  { href: "/current-research-projects", label: "Current Research Projects" },
  {
    href: "/future-student-opportunities",
    label: "Future Student Opportunities",
  },
];

const guidanceLinks = [
  { href: "/higher-study-usa", label: "Higher Study in USA" },
  { href: "/academic-cv-guide", label: "Academic CV Guide" },
  { href: "/email-templates", label: "Email Templates" },
  { href: "/statement-of-purpose", label: "Statement of Purpose" },
  { href: "/interview-questions", label: "Interview Questions" },
];

function FooterLinkGroup({ title, links }) {
  return (
    <section>
      <h3 className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[#d4caa3]">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5 text-sm text-[#ebe5cd]">
        {links.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="transition hover:text-[#f3e8b0] hover:underline"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#4a4337] bg-[#332f27] text-[#f4efdc]">
      <div
        className="w-full"
        style={{
          height: "3px",
          backgroundImage:
            "linear-gradient(to right, #9a8854, #e1d5ae, #9a8854)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 py-10 sm:py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <section>
            <h2 className="text-base font-semibold text-[#f6f0db]">
              Hasib Cheragee
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#e9e2c8]">
              Research Assistant at the Nano-Fabrication Lab, Department of
              Electrical and Computer Engineering, University of Delaware.
            </p>

            <div className="mt-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#d4caa3]">
                Open to Collaboration
              </p>
              <Link
                href="/contact"
                className="group mt-2 inline-flex items-center gap-2 rounded-md border border-[#f3e8b0]/20 bg-[#f3e8b0]/10 px-4 py-2.5 text-sm font-semibold text-[#f3e8b0] shadow-[0_4px_14px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:border-[#f3e8b0]/70 hover:bg-[#f3e8b0]/18 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3e8b0]/70"
              >
                Contact for collaboration
                <span
                  aria-hidden="true"
                  className="text-base leading-none transition group-hover:translate-x-0.5"
                >
                  {"->"}
                </span>
              </Link>
            </div>
          </section>

          <FooterLinkGroup title="About" links={aboutLinks} />
          <FooterLinkGroup title="Research" links={researchLinks} />
          <FooterLinkGroup title="Guides" links={guidanceLinks} />
        </div>

        <div className="mt-10 flex max-w-6xl flex-col gap-2 border-t border-[#f3e8b0]/20 pt-4 text-sm text-[#ddd4b7] sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Hasib Cheragee. All rights reserved.</p>
          <p>
            Built for research collaboration, mentoring, and higher study
            guidance.
          </p>
        </div>
      </div>
    </footer>
  );
}
