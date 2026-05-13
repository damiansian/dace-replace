import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b border-border bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="text-lg font-bold text-primary-dark hover:text-primary-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          DACE Cohort 2
        </Link>
      </div>
    </header>
  );
}
