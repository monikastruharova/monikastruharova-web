import type { Metadata } from "next";
import { Fraunces, Mulish } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { siteConfig } from "@/data/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin", "latin-ext"],
});

const description =
  "Monika Struhárová — terapia Cesta, harmonizácia čakier, ženské kruhy a intuitívny tanec. Sprevádzam ťa na ceste späť k tvojej vlastnej sile a celistvosti.";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  title: {
    default: `${siteConfig.name} — Cestou srdca`,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  alternates: { canonical: "/" },
  // Explicitné OG/Twitter meta — bez nich si Google/Facebook/WhatsApp pri
  // náhľade vyberajú obrázok aj text sami (často z predchádzajúcej, staršej
  // verzie stránky uloženej v cache), preto radšej zadávame priamo.
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "/",
    siteName: `${siteConfig.name} — Cestou srdca`,
    title: `${siteConfig.name} — Cestou srdca`,
    description,
    images: [
      {
        url: "/images/monika-portret-pierko.jpg",
        width: 1920,
        height: 1280,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Cestou srdca`,
    description,
    images: ["/images/monika-portret-pierko.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sk"
      className={`${fraunces.variable} ${mulish.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
