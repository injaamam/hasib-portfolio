"use client";

import Link from "next/link";
import {
  HiOutlineSparkles,
  HiOutlineHome,
  HiOutlineAcademicCap,
  HiOutlineEnvelope,
  HiArrowRight,
} from "react-icons/hi2";

const quickLinks = [
  {
    href: "/home",
    icon: HiOutlineHome,
    label: "Home",
    desc: "Back to the main page",
  },
  {
    href: "/higher-study-usa",
    icon: HiOutlineAcademicCap,
    label: "Higher Study in USA",
    desc: "Comprehensive guide & resources",
  },
  {
    href: "/contact",
    icon: HiOutlineEnvelope,
    label: "Contact",
    desc: "Get in touch",
  },
];

export default function ComingSoonPage({
  title = "Feature Coming Soon",
  badge = "Under Development",
  description = "We're actively working on this feature and it will be available soon. Thank you for your patience!",
}) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f2744] via-[#13304f] to-[#0a1e35] px-6 py-12">
      {/* Subtle dot grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Soft radial glow behind icon */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[420px] w-[420px] rounded-full bg-[#2058a0] opacity-[0.12] blur-[90px]" />
      </div>

      <div className="relative z-10 flex w-full max-w-[700px] flex-col items-center text-center">
        {/* Pulsing icon */}
        <div className="animate-pulse-glow mb-7 flex h-[88px] w-[88px] items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
          <HiOutlineSparkles className="text-[2.4rem] text-[#a3bed8]" />
        </div>

        {/* Badge */}
        <span className="mb-5 inline-flex items-center rounded-full bg-[#ffa96b]/15 px-4 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#ffa96b] ring-1 ring-[#ffa96b]/25">
          {badge}
        </span>

        {/* Title */}
        <h1 className="text-[1.9rem] font-bold leading-tight tracking-[-0.025em] text-white sm:text-[2.6rem]">
          {title}
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-[460px] text-[0.95rem] leading-[1.75] text-[#7a9bbf]">
          {description}
        </p>

        {/* Divider with "While you wait" label */}
        <div className="mt-10 flex w-full items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#4a6a88]">
            While you wait
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Quick-link cards — always visible, no scrolling needed */}
        <div className="mt-6 grid w-full gap-3 sm:grid-cols-3">
          {quickLinks.map(({ href, icon: Icon, label, desc }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center backdrop-blur-sm transition hover:border-white/25 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 transition group-hover:bg-[#2058a0]/60">
                <Icon className="text-[1.3rem] text-[#a3bed8] transition group-hover:text-white" />
              </div>
              <div>
                <p className="text-[0.92rem] font-semibold text-white">
                  {label}
                </p>
                <p className="mt-0.5 text-[0.76rem] text-[#4a6a88]">{desc}</p>
              </div>
              <HiArrowRight className="mt-auto text-[0.9rem] text-white/20 transition group-hover:translate-x-0.5 group-hover:text-white/50" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
