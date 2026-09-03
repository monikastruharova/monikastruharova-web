import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="rounded-[2rem] bg-cream-dark/60 p-7 md:p-8">
      <span aria-hidden className="font-serif text-4xl text-clay/50">
        “
      </span>
      <blockquote className="mt-1">
        <p className="font-serif text-lg text-ink md:text-xl">{testimonial.title}</p>
        <p className="mt-3 text-sm leading-relaxed whitespace-pre-line text-ink-soft md:text-base">
          {testimonial.quote}
        </p>
      </blockquote>
      <figcaption className="mt-5 text-sm font-medium text-clay-dark">
        — {testimonial.author}
      </figcaption>
    </figure>
  );
}
