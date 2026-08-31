import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { blogCategories, postsByCategory, type BlogPost } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Príbehy zo života a tajomný svet dvojplameňov — inšpiratívne články Moniky Struhárovej o terapii, tanci, energii a hlbokej osobnej transformácii.",
  alternates: { canonical: "/blog" },
};

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

export default function BlogPage() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <h1 className="text-center font-serif text-3xl text-ink md:text-5xl">Blog</h1>

        {blogCategories.map((category) => {
          const posts = postsByCategory(category.slug);
          const ungrouped = posts.filter((p) => !p.subcategory);
          const subcategories = Array.from(
            new Set(posts.map((p) => p.subcategory).filter((s): s is string => Boolean(s))),
          );

          return (
            <div key={category.slug} className="mt-16 first:mt-12">
              <h2 className="font-serif text-2xl text-ink md:text-3xl">{category.title}</h2>

              {posts.length ? (
                <>
                  {ungrouped.length ? <PostGrid posts={ungrouped} /> : null}

                  {subcategories.map((subcategory) => (
                    <div key={subcategory} className="mt-10">
                      <h3 className="text-xs font-semibold tracking-[0.2em] text-sage-dark uppercase">
                        {subcategory}
                      </h3>
                      <PostGrid posts={posts.filter((p) => p.subcategory === subcategory)} />
                    </div>
                  ))}
                </>
              ) : (
                <p className="mt-6 text-sm text-ink-soft">
                  {/* TODO (sekcia 13): doplniť staršie články z pôvodného webu do tejto kategórie */}
                  Články v tejto kategórii čakajú na doplnenie.
                </p>
              )}
            </div>
          );
        })}
      </Container>
    </section>
  );
}
