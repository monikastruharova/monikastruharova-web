import Link from "next/link";
import type { ServiceTeaser } from "@/data/services";

export function ServiceCard({ service }: { service: ServiceTeaser }) {
  return (
    <Link
      href={service.href}
      className="group flex flex-col justify-between rounded-[2rem] border border-sand bg-white/60 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div>
        <h3 className="font-serif text-xl text-ink md:text-2xl">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
          {service.teaser}
        </p>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm text-ink-soft">od {service.priceFrom}</span>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-clay-dark transition group-hover:gap-2">
          Zistiť viac <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
