"use client";

import { useState } from "react";

export type FAQItem = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-sand rounded-[1.75rem] border border-sand bg-white/50">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-serif text-base text-ink md:text-lg">{item.question}</span>
                <span
                  aria-hidden
                  className={`shrink-0 text-xl text-clay-dark transition-transform ${isOpen ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
            </h3>
            {isOpen ? (
              <div className="px-6 pb-6 text-sm leading-relaxed whitespace-pre-line text-ink-soft md:text-base">
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
