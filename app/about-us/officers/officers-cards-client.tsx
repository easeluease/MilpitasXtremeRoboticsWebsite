"use client";

import ExpandableCardDemo from "@/components/ui/expandable-card-demo-grid";

export default function OfficersCardsClient() {
  return (
    <section className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="mb-6 text-left text-3xl font-bold leading-none tracking-tight sm:mb-8 sm:text-5xl">
          <span className="bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text text-transparent">
            Core Officers 2025-2026
          </span>
        </h2>
        <ExpandableCardDemo />
      </div>
    </section>
  );
}
