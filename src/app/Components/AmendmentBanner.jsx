"use client";

import Link from "next/link";
import Image from "next/image";

export default function AmendmentBanner() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Decorative background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#e87722 1px, transparent 1px), linear-gradient(90deg, #e87722 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e87722] via-[#f5a05a] to-[#e87722]" />

      <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-14">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-block w-7 h-[2px] bg-[#e87722]" />
          <span className="text-[#e87722] text-[11px] font-semibold tracking-[0.25em] uppercase">
            IBC · Proposed Amendments
          </span>
        </div>

        {/* Card */}
        <Link href="/lbclaw" className="group block">
          <div className="relative flex flex-col lg:flex-row border border-[#e87722]/30 hover:border-[#e87722]/70 transition-all duration-500 overflow-hidden">

            {/* Image */}
            <div className="relative w-full lg:w-[44%] h-44 lg:h-auto lg:min-h-[260px] bg-[#111b33]">
              <Image
                src="/images/lbc1.jpg"
                alt="IBC Amendment 2026"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute top-3 left-3 bg-[#e87722] text-white px-2.5 py-1 text-[11px] font-bold uppercase">
                IBC 2026
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-7 lg:p-9 bg-[#0d1526]/95 flex flex-col justify-between">

              <div>
                {/* Tag */}
                <div className="mb-4 text-[#e87722]/75 text-[14px] font-semibold uppercase tracking-widest">
                  Insolvency & Bankruptcy Code Update
                </div>

                {/* Title */}
                <h2 className="text-xl lg:text-3xl text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text font-bold mb-4 leading-snug uppercase tracking-wide">
                  The Insolvency and Bankruptcy Code (Amendment) Act, 2026
                </h2>

                {/* Description */}
                <p className="text-gray-300/80 text-base leading-relaxed mb-6 max-w-xl text-justify font-sans">
                  Proposed amendments to the Insolvency and Bankruptcy Code, 2016 aim to
                  enhance the efficiency of the corporate insolvency resolution process (CIRP),
                  strengthen creditor rights, and introduce faster resolution mechanisms. Key
                  reform areas include pre-packaged insolvency frameworks, improved cross-border
                  provisions, and stricter timelines for resolution.
                </p>
              </div>

              <div>
                {/* Highlights */}
                <div className="flex flex-wrap gap-2.5 mb-6 font-sans font-semibold">
                  {[
                    "Pre-Pack Insolvency Expansion",
                    "Cross-Border Framework",
                    "Faster Resolution Timelines",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 border border-[#e87722]/30 text-[#e87722]/80 text-[11px] uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex justify-between items-center border-t border-[#e87722]/20 pt-5">
                  <span className="text-[#e87722] text-base font-semibold uppercase tracking-wide">
                    Explore Details →
                  </span>

                  <div className="text-right text-[11px] text-gray-500">
                    <p>Source</p>
                    <p className="text-[#e87722]/65">Discussion Papers / MCA / IBBI</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}