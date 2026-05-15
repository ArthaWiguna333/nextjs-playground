const quickLinks = [
  { label: "Home", href: "#home-company-profile" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "Twitter", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 px-6 py-16 text-gray-400">
      <div className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {/* Brand */}
        <div>
          <p className="text-2xl font-bold text-white">Acme Corp</p>
          <p className="mt-3 text-sm leading-relaxed">
            Building solutions that matter — one project at a time.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-300">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-300">
            Follow Us
          </p>
          <ul className="mt-4 space-y-2">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-gray-700 pt-8 text-center text-sm">
        © 2026 Acme Corp. All rights reserved.
      </div>
    </footer>
  );
}
