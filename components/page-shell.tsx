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
    <main className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-5xl flex-col px-6 py-16 lg:px-10">
      <p className="mb-3 text-sm uppercase tracking-[0.2em] text-zinc-400">{subtitle}</p>
      <h1 className="mb-5 text-4xl font-semibold text-zinc-100 lg:text-6xl">{title}</h1>
      <p className="max-w-3xl text-base leading-8 text-zinc-300 lg:text-lg">{description}</p>

      {links.length > 0 && (
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-zinc-100 transition hover:border-zinc-600 hover:bg-zinc-800"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
