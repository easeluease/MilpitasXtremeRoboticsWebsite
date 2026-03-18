"use client";

import ExpandableCardDemo from "@/components/ui/expandable-card-demo-grid";

export default function OfficersCardsClient() {
  return (
    <section className="w-full px-6 py-16 lg:px-10 lg:py-20">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="text-left text-4xl font-bold leading-none tracking-tight sm:text-5xl mb-8">
          <span className="bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text text-transparent">
            Core Officers 2025-2026
          </span>
        </h2>
        <ExpandableCardDemo />
      </div>
    </section>
  );
}
