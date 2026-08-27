import Link from "next/link";
import Image from "next/image";
import { mainNav, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-sand bg-cream-dark/60">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-mandala.png"
              alt="Monika Struhárová — logo"
              width={40}
              height={40}
              className="h-10 w-10 shrink-0"
            />
            <span className="font-serif text-lg text-ink">Monika Struhárová</span>
          </div>
        </div>

        <nav aria-label="Mapa stránok">
          <p className="text-xs font-semibold tracking-wide text-ink-soft uppercase">Navigácia</p>
          <ul className="mt-4 space-y-2 text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink-soft hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold tracking-wide text-ink-soft uppercase">Kontakt</p>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            <li>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-ink"
              >
                Facebook — Cestou srdca
              </a>
            </li>
            <li>
              <Link href="/ochrana-osobnych-udajov" className="hover:text-ink">
                Ochrana osobných údajov
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-sand/70 py-6">
        <p className="container-page text-xs text-ink-soft">
          © {new Date().getFullYear()} Monika Struhárová. Všetky práva vyhradené.
        </p>
      </div>
    </footer>
  );
}
