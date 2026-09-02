import Image from "next/image";
import { PlaceholderImage } from "./PlaceholderImage";
import type { BlogBlock } from "@/data/blog";

/**
 * Vykreslí štruktúrovaný obsah článku (odstavce, medzititulky, zvýraznené
 * citácie, zoznamy a miesta pre fotografie) — dodané texty formátované
 * podľa zadania (sekcia 13): "viac obrázků, lepší formátování".
 */
export function BlogBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-6 text-base leading-relaxed text-ink-soft md:text-lg">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return <p key={i}>{block.text}</p>;
          case "h2":
            return (
              <h2 key={i} className="pt-2 font-serif text-2xl text-ink md:text-3xl">
                {block.text}
              </h2>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="rounded-[1.75rem] bg-clay/10 p-6 font-serif text-lg text-ink italic md:text-xl"
              >
                {block.text}
              </blockquote>
            );
          case "list":
            return (
              <ul key={i} className="space-y-3">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "image":
            return block.src && block.width && block.height ? (
              <Image
                key={i}
                src={block.src}
                alt={block.label}
                width={block.width}
                height={block.height}
                className="h-auto w-full rounded-2xl border border-sand object-cover shadow-sm"
              />
            ) : (
              <PlaceholderImage
                key={i}
                label={block.label}
                shape="rounded"
                className="aspect-video max-w-none"
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
