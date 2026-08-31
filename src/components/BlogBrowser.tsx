"use client";

import { useState } from "react";
import Link from "next/link";
import type { BlogPost, BlogSection } from "@/data/blog";

/**
 * Preklikávacie záložky namiesto dlhého scrollovania cez všetky kategórie
 * a podsekcie naraz — "Všetky" zobrazí prehľad po sekciách, jedna konkrétna
 * záložka zobrazí iba jej príspevky.
 */
export function BlogBrowser({
  sections,
  posts,
}: {
  sections: BlogSection[];
  posts: BlogPost[];
}) {
  const [activeKey, setActiveKey] = useState<string>("all");

  const activeSection = sections.find((s) => s.key === activeKey);
  const visiblePosts = activeSection
    ? posts.filter(
        (p) => p.category === activeSection.category && p.subcategory === activeSection.subcategory,
      )
    : posts;

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => setActiveKey("all")}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
            activeKey === "all"
              ? "border-clay bg-clay text-cream"
              : "border-sand text-ink-soft hover:bg-cream-dark"
          }`}
        >
          Všetky
        </button>
        {sections.map((section) => (
          <button
            key={section.key}
            type="button"
            onClick={() => setActiveKey(section.key)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              activeKey === section.key
                ? "border-clay bg-clay text-cream"
                : "border-sand text-ink-soft hover:bg-cream-dark"
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>

      {activeKey === "all" ? (
        <div>
          {sections.map((section) => {
            const sectionPosts = posts.filter(
              (p) => p.category === section.category && p.subcategory === section.subcategory,
            );
            return (
              <div key={section.key} className="mt-14 first:mt-10">
                <button
                  type="button"
                  onClick={() => setActiveKey(section.key)}
                  className="font-serif text-2xl text-ink underline decoration-sand decoration-2 underline-offset-8 transition hover:text-clay-dark md:text-3xl"
                >
                  {section.title}
                </button>
                {sectionPosts.length ? (
                  <PostGrid posts={sectionPosts} />
                ) : (
                  <p className="mt-6 text-sm text-ink-soft">
                    Články v tejto kategórii čakajú na doplnenie.
                  </p>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="mt-10">
          {visiblePosts.length ? (
            <PostGrid posts={visiblePosts} />
          ) : (
            <p className="mt-6 text-center text-sm text-ink-soft">
              Články v tejto kategórii čakajú na doplnenie.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

function PostGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="flex flex-col rounded-[1.75rem] border border-sand bg-white/50 p-6 transition hover:-translate-y-1 hover:shadow-md"
        >
          <h3 className="font-serif text-lg text-ink">{post.title}</h3>
          <p className="mt-2 line-clamp-3 text-sm text-ink-soft">{post.excerpt}</p>
        </Link>
      ))}
    </div>
  );
}
