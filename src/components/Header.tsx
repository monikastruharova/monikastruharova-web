"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { mainNav, siteConfig } from "@/data/site";
import { Container } from "./Container";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-sand/70 bg-cream/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <Image
            src="/images/logo-mandala.png"
            alt="Monika Struhárová — logo"
            width={44}
            height={44}
            className="h-11 w-11 shrink-0"
          />
          <span className="font-serif text-lg leading-tight text-ink md:text-xl">
            Monika
            <br className="hidden sm:block" /> Struhárová
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="group relative"
                onMouseEnter={() => setOpenSubmenu(true)}
                onMouseLeave={() => setOpenSubmenu(false)}
              >
                <Link
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition hover:bg-cream-dark hover:text-ink"
                >
                  {item.label}
                </Link>
                <div
                  className={`absolute top-full left-0 min-w-64 rounded-2xl border border-sand bg-cream p-2 shadow-lg transition ${
                    openSubmenu ? "visible opacity-100" : "invisible opacity-0"
                  }`}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-xl px-4 py-2.5 text-sm text-ink-soft hover:bg-cream-dark hover:text-ink"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition hover:bg-cream-dark hover:text-ink"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={siteConfig.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-clay px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-clay-dark"
          >
            Objednať sa
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-sand lg:hidden"
          aria-label={mobileOpen ? "Zavrieť menu" : "Otvoriť menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span aria-hidden className="text-xl">
            {mobileOpen ? "✕" : "☰"}
          </span>
        </button>
      </Container>

      {mobileOpen ? (
        <div className="border-t border-sand bg-cream lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {mainNav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-base font-medium text-ink"
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="ml-3 flex flex-col border-l border-sand pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="rounded-xl px-3 py-2 text-sm text-ink-soft"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <Link
              href={siteConfig.facebook}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-3 rounded-full bg-clay px-5 py-3 text-center text-sm font-semibold text-cream"
            >
              Objednať sa
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
