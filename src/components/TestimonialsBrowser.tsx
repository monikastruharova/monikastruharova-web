"use client";

import { useState } from "react";
import { TestimonialCard } from "./TestimonialCard";
import type { ServiceSlug, Testimonial } from "@/data/testimonials";

const filters: { slug: ServiceSlug | "all"; label: string }[] = [
  { slug: "all", label: "Všetky" },
  { slug: "terapia-cesta", label: "Terapia Cesta" },
  { slug: "cesta-dvojplamena", label: "Cesta Dvojplameňa" },
  { slug: "harmonizacia-cakier", label: "Harmonizácia čakier" },
  { slug: "zenske-kruhy", label: "Ženské kruhy" },
  { slug: "intuitivny-tanec", label: "Intuitívny tanec" },
];

export function TestimonialsBrowser({ testimonials }: { testimonials: Testimonial[] }) {
  const [active, setActive] = useState<ServiceSlug | "all">("all");

  const visible =
    active === "all" ? testimonials : testimonials.filter((t) => t.services.includes(active));

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f.slug}
            type="button"
            onClick={() => setActive(f.slug)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              active === f.slug
                ? "border-clay bg-clay text-cream"
                : "border-sand text-ink-soft hover:bg-cream-dark"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((t) => (
          <TestimonialCard key={t.id} testimonial={t} />
        ))}
      </div>
      {visible.length === 0 ? (
        <p className="mt-10 text-center text-sm text-ink-soft">
          Pre túto službu zatiaľ nemáme zverejnenú referenciu.
        </p>
      ) : null}
    </div>
  );
}
