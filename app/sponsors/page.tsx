import Link from "next/link";

export default function SponsorsPage() {
  return (
    <main className="min-h-screen w-full bg-[#0A0A0A] px-10 py-28 text-[#E4E4E7] lg:px-40">
      <section className="mx-auto max-w-4xl space-y-8 text-center">
        <h1 className="text-5xl font-bold lg:text-6xl">Sponsorship Opportunities</h1>
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#A1A1AA]">
          Partner with Milpitas Xtreme Robotics to support student engineering, outreach programs, and competitive robotics. Your sponsorship helps fund equipment, competition travel, and hands-on STEM education for the next generation of innovators.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
          <Link
            href="/prospectus.pdf"
            className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-neutral-200"
          >
            View Sponsorship Prospectus
          </Link>
          <Link
            href="mailto:mxrobotics@example.com"
            className="rounded-full border border-[#3F3F46] px-6 py-3 font-semibold text-[#E4E4E7] transition hover:border-[#71717A] hover:bg-[#18181B]"
          >
            Contact Sponsorship Team
          </Link>
        </div>
      </section>
    </main>
  );
}
