import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-zinc-900 dark:text-white"
        >
          Acme Corp
        </Link>
        <div className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <Link
            href="/"
            className="hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
