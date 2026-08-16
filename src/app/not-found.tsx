import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <section className="py-24 text-center">
      <Container>
        <p className="text-sm font-semibold tracking-[0.2em] text-clay-dark uppercase">404</p>
        <h1 className="mt-4 font-serif text-3xl text-ink md:text-4xl">
          Táto stránka sa stratila v tichu.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-ink-soft">
          Skús sa vrátiť na domovskú stránku, alebo sa pozri na ponuku služieb.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="rounded-full bg-clay px-6 py-3 text-sm font-semibold text-cream">
            Domov
          </Link>
          <Link
            href="/sluzby"
            className="rounded-full border border-sand px-6 py-3 text-sm font-semibold text-ink-soft"
          >
            Služby
          </Link>
        </div>
      </Container>
    </section>
  );
}
