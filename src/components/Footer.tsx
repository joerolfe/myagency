import Link from "next/link";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink px-6 py-14">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">
        {/* Brand */}
        <Link href="/" className="font-display text-xl font-bold text-white">
          Rolfe Brand Scaling
        </Link>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white/45 text-sm hover:text-white/80 transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Phone */}
        <a
          href="tel:07857859135"
          className="text-white/40 text-sm hover:text-white/70 transition-colors font-medium"
        >
          07857 859135
        </a>

        {/* Divider */}
        <div className="w-full border-t border-white/8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 w-full">
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} Rolfe Brand Scaling · Derbyshire &amp; Staffordshire
          </p>
          <Link
            href="/privacy"
            className="text-white/25 text-xs hover:text-white/45 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
