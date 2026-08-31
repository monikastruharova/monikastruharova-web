import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { BlogBrowser } from "@/components/BlogBrowser";
import { blogPosts, blogSections } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Príbehy zo života a tajomný svet dvojplameňov — inšpiratívne články Moniky Struhárovej o terapii, tanci, energii a hlbokej osobnej transformácii.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const sections = blogSections();

  return (
    <section className="py-14 md:py-20">
      <Container>
        <h1 className="text-center font-serif text-3xl text-ink md:text-5xl">Blog</h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-ink-soft md:text-base">
          Vyber si tému, ktorá ťa dnes volá — alebo si prezri všetko naraz.
        </p>

        <div className="mt-10">
          <BlogBrowser sections={sections} posts={blogPosts} />
        </div>
      </Container>
    </section>
  );
}
