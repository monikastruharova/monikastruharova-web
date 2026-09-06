"use client";

import { useState } from "react";
import type { Testimonial } from "@/data/testimonials";

// Nad touto dĺžkou textu (v znakoch) sa referencia v zbalenom stave
// oreže a pridá sa tlačidlo "Čítať viac" — všetky karty tak majú v
// mriežke rovnakú výšku, aj keď je pôvodný text rôzne dlhý.
const COLLAPSE_THRESHOLD = 260;

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = testimonial.quote.length > COLLAPSE_THRESHOLD;

  return (
    <figure className="flex h-full flex-col rounded-[2rem] bg-cream-dark/60 p-7 md:p-8">
      <span aria-hidden className="font-serif text-4xl text-clay/50">
        “
      </span>
      <blockquote className="mt-1 flex-1">
        <p className="font-serif text-lg text-ink md:text-xl">{testimonial.title}</p>
        <p
          className={`mt-3 text-sm leading-relaxed whitespace-pre-line text-ink-soft md:text-base ${
            isLong && !expanded ? "line-clamp-6" : ""
          }`}
        >
          {testimonial.quote}
        </p>
        {isLong ? (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-2 text-sm font-semibold text-clay-dark hover:underline"
          >
            {expanded ? "Čítať menej" : "Čítať viac"}
          </button>
        ) : null}
      </blockquote>
      <figcaption className="mt-5 text-sm font-medium text-clay-dark">
        — {testimonial.author}
      </figcaption>
    </figure>
  );
}
