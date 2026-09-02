import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CTABlock } from "@/components/CTABlock";
import { BlogBody } from "@/components/BlogBody";
import { blogCategories, blogPosts, postBySlug } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  const category = blogCategories.find((c) => c.slug === post.category);

  return (
    <>
      <section className="pt-14 pb-10 md:pt-20">
        <Container className="mx-auto max-w-3xl">
          <Link href="/blog" className="text-sm font-semibold text-clay-dark">
            ← Späť na blog
          </Link>
          <p className="mt-4 text-xs font-semibold tracking-wide text-sage-dark uppercase">
            {category?.title}
            {post.subcategory ? ` — ${post.subcategory}` : ""}
          </p>
          <h1 className="mt-2 font-serif text-3xl leading-tight text-ink md:text-5xl">
            {post.title}
          </h1>
        </Container>
      </section>

      {post.coverSrc && post.coverWidth && post.coverHeight ? (
        <section className="py-6 md:py-10">
          <Container className="mx-auto max-w-3xl">
            <Image
              src={post.coverSrc}
              alt={post.title}
              width={post.coverWidth}
              height={post.coverHeight}
              priority
              className="mx-auto h-auto w-full rounded-2xl border border-sand object-cover shadow-sm"
            />
          </Container>
        </section>
      ) : null}

      <section className="py-6 md:py-10">
        <Container className="mx-auto max-w-3xl">
          {post.body ? (
            <BlogBody blocks={post.body} />
          ) : post.pending ? (
            // Interná poznámka pre vývoj (nie je vidieť na webe): plný text tohto
            // článku ešte čaká na dodanie od Moniky — pozri TODO.md.
            <div className="rounded-[1.75rem] border border-sand bg-cream-dark/40 p-6 text-sm text-ink-soft md:p-8">
              <p className="font-serif text-lg text-ink">Tento článok pripravujeme.</p>
              <p className="mt-2">{post.excerpt}</p>
              <p className="mt-2">Čoskoro sa sem vrátime s jeho plným znením.</p>
            </div>
          ) : null}
        </Container>
      </section>

      <section className="pt-6 pb-20 md:pb-28">
        <Container>
          <CTABlock heading="Chceš zažiť to, o čom bol tento článok?" ctaLabel={post.ctaLabel} ctaHref={post.ctaHref} />
        </Container>
      </section>
    </>
  );
}
