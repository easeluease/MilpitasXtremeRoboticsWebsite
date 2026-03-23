import Link from "next/link";

type PageLink = {
  href: string;
  label: string;
};

type PageShellProps = {
  title: string;
  subtitle: string;
  description: string;
  links?: PageLink[];
};

export default function PageShell({
  title,
  subtitle,
  description,
  links = [],
}: PageShellProps) {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-5xl flex-col px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
      <p className="mb-3 text-xs uppercase tracking-[0.18em] text-zinc-400 sm:text-sm sm:tracking-[0.2em]">{subtitle}</p>
      <h1 className="mb-5 text-3xl font-semibold text-zinc-100 sm:text-4xl lg:text-6xl">{title}</h1>
      <p className="max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8 lg:text-lg">{description}</p>

      {links.length > 0 && (
        <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm text-zinc-100 transition hover:border-zinc-600 hover:bg-zinc-800 sm:text-base"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
