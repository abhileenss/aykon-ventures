import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Seal } from "./Seal";

export const WHATSAPP_URL = "https://wa.me/971563971998";

const NAV_LINKS = [
  { label: "What we do", to: "/what-we-do" as const },
  { label: "What we back", to: "/what-we-back" as const },
  { label: "Ventures", to: "/ventures" as const },
  { label: "Jewels", to: "/jewels" as const },
  { label: "Spaces", to: "/spaces" as const },
  { label: "The Dispatch", to: "/dispatch" as const },
  { label: "Contact", to: "/contact" as const },
] as const;

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-onyx flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${open ? "translate-y-0" : "-translate-y-full"}`}
      aria-modal="true"
      aria-hidden={!open}
    >
      {/* top bar */}
      <div className="h-16 flex items-center justify-between px-6 border-b border-limestone/10">
        <Link to="/" onClick={onClose} className="flex items-center gap-3 text-limestone">
          <Seal size={26} />
          <span className="wordmark text-[0.7rem]">AYKON&nbsp;VENTURES</span>
        </Link>
        <button
          onClick={onClose}
          className="eyebrow text-limestone/60 hover:text-limestone transition-colors px-2 py-1"
          aria-label="Close menu"
        >
          Close&nbsp;✕
        </button>
      </div>

      {/* links */}
      <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
        {NAV_LINKS.map(({ label, to, hash }) => (
          <Link
            key={label}
            to={to}
            hash={hash}
            onClick={onClose}
            className="editorial text-5xl text-limestone/80 hover:text-limestone py-3 border-b border-limestone/10 transition-colors"
            data-hover
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* bottom */}
      <div className="px-8 py-10 flex flex-col gap-4">
        <Link
          to="/"
          hash="contact"
          onClick={onClose}
          className="inline-flex items-center justify-center px-8 py-5 bg-limestone text-onyx eyebrow hover:bg-gold transition-colors"
          data-hover
        >
          Request an Introduction&nbsp;→
        </Link>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-5 border border-limestone/30 text-limestone eyebrow"
        >
          WhatsApp the Office
        </a>
      </div>
    </div>
  );
}

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const routerState = useRouterState();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [routerState.location.pathname, routerState.location.hash]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/85 backdrop-blur-md">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-foreground" data-hover>
            <Seal size={26} />
            <span className="wordmark text-[0.7rem] md:text-xs">AYKON&nbsp;VENTURES</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8 eyebrow text-foreground/70">
            {NAV_LINKS.map(({ label, to, hash }) => (
              <Link key={label} to={to} hash={hash} className="hover:text-foreground transition-colors">
                {label}
              </Link>
            ))}
            <Link
              to="/"
              hash="contact"
              className="px-4 py-2 bg-onyx text-limestone hover:bg-emerald transition-colors"
              data-hover
            >
              Enquire
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden eyebrow text-foreground/70 hover:text-foreground transition-colors px-2 py-1"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
        <div className="hair-rule" />
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

export function CTABand({
  eyebrow = "A conversation",
  title = "Start a quiet conversation.",
  copy = "For partnerships, private introductions, or a confidential brief.",
}: {
  eyebrow?: string;
  title?: string;
  copy?: string;
}) {
  return (
    <section className="border-t border-rule bg-onyx text-limestone">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-7">
          <p className="eyebrow text-limestone/55">{eyebrow}</p>
          <h3 className="editorial mt-6 text-3xl md:text-5xl lg:text-6xl text-limestone">
            {title}
          </h3>
          <p className="mt-6 max-w-lg text-limestone/70 leading-relaxed">{copy}</p>
        </div>
        <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-4">
          <Link
            to="/"
            hash="contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-limestone text-onyx eyebrow hover:bg-gold hover:text-onyx transition-colors duration-500"
            data-hover
          >
            Request an Introduction →
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-limestone/40 eyebrow text-limestone hover:border-limestone transition-colors"
            data-hover
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-onyx text-limestone/70 border-t border-limestone/10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 text-limestone">
            <Seal size={28} />
            <p className="wordmark text-sm">AYKON&nbsp;VENTURES</p>
          </div>
          <p className="mt-5 text-sm leading-relaxed">
            Dubai, United Arab Emirates<br />
            Meydan Free Zone · L.L.C-FZ<br />
            Hyderabad · Mumbai · Selected Cities
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow text-limestone/45">House</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/ventures" className="hover:text-limestone transition-colors">Aykon Ventures</Link></li>
            <li><Link to="/jewels" className="hover:text-limestone transition-colors">Aykon Jewels</Link></li>
            <li><Link to="/spaces" className="hover:text-limestone transition-colors">Aykon Spaces</Link></li>
            <li><Link to="/dispatch" className="hover:text-limestone transition-colors">The Dispatch</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow text-limestone/45">Elsewhere</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="https://www.instagram.com/aykon.ventures/" target="_blank" rel="noopener noreferrer" className="hover:text-limestone transition-colors">@aykon.ventures</a></li>
            <li><a href="https://www.instagram.com/aykon.jewels/" target="_blank" rel="noopener noreferrer" className="hover:text-limestone transition-colors">@aykon.jewels</a></li>
            <li><a href="https://www.instagram.com/prachi89av/" target="_blank" rel="noopener noreferrer" className="hover:text-limestone transition-colors">@prachi89av</a></li>
            <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-limestone transition-colors">WhatsApp</a></li>
          </ul>
        </div>
        <div className="md:col-span-2 flex md:justify-end items-start">
          <p className="eyebrow text-limestone/45">© 2026</p>
        </div>
      </div>
      <div className="border-t border-limestone/10">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-6 eyebrow text-limestone/40 flex justify-between">
          <span>We back what we sell.</span>
          <span>ايكون فينتشرز</span>
        </div>
      </div>
    </footer>
  );
}
