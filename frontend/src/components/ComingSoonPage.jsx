"use client";

import Link from "next/link";
import { HiArrowLeft, HiOutlineSparkles } from "react-icons/hi2";

export default function ComingSoonPage({
  title = "Feature Coming Soon",
  badge = "Under Development",
  description = "We're actively working on this feature and it will be available soon. Thank you for your patience!",
}) {
  return (
    <section className="flex min-h-[calc(100vh-72px-57px)] items-center justify-center bg-[#f5f6fb] px-6 py-16">
      <div className="w-full max-w-[760px] text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#eef2ff]">
          <HiOutlineSparkles className="text-[1.9rem] text-[#4154bf]" />
        </div>

        <div className="mt-8">
          <span className="inline-flex rounded-full bg-[#ffe7c2] px-4 py-1.5 text-[0.76rem] font-semibold text-[#ff5c1b]">
            {badge}
          </span>
        </div>

        <h1 className="mt-6 text-[1.85rem] leading-none font-bold tracking-[-0.03em] text-[#111c2d] sm:text-[2.4rem]">
          {title}
        </h1>

        <p className="mx-auto mt-5 max-w-[500px] text-[0.92rem] leading-[1.7] text-[#8d9ab0] sm:text-[1rem]">
          {description}
        </p>

        <div className="mx-auto mt-10 h-px w-24 bg-[#dde2ee]" />

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/home"
            className="inline-flex min-w-[170px] items-center justify-center gap-3 rounded-md bg-[#152231] px-5 py-3.5 text-[0.95rem] font-semibold text-white transition hover:bg-[#0e1824]"
          >
            <HiArrowLeft className="text-lg" />
            Back to Home
          </Link>

          <Link
            href="/home"
            className="inline-flex min-w-[190px] items-center justify-center gap-3 rounded-md border border-[#cdd5e2] bg-white px-5 py-3.5 text-[0.95rem] font-semibold text-[#152231] transition hover:border-[#b8c2d3] hover:bg-[#f8fafc]"
          >
            Browse Home
          </Link>
        </div>
      </div>
    </section>
  );
}
