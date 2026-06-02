import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/SiteChrome";
import { Seal } from "@/components/Seal";
import { getPost, type Post } from "@/data/posts";
import { DispatchSignup } from "./dispatch";

export const Route = createFileRoute("/dispatch/$slug")({
  head: ({ params }) => {
    const post = getPost(params.slug);
    return {
      meta: post
        ? [
            { title: `${post.title} — The Dispatch · Aykon Ventures` },
            { name: "description", content: post.excerpt },
            { property: "og:title", content: post.title },
            { property: "og:description", content: post.excerpt },
          ]
        : [{ title: "Not Found — Aykon Ventures" }],
    };
  },
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  component: PostPage,
  notFoundComponent: () => (
    <main className="bg-background text-foreground min-h-screen flex flex-col">
      <Nav />
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-40 text-center">
        <p className="eyebrow text-foreground/45">The Dispatch</p>
        <h1 className="editorial mt-6 text-5xl md:text-7xl">Letter not found.</h1>
        <Link to="/dispatch" className="mt-12 eyebrow text-emerald hover:text-foreground transition-colors">
          Back to The Dispatch&nbsp;→
        </Link>
      </div>
      <Footer />
    </main>
  ),
});

function PostPage() {
  const { post } = Route.useLoaderData() as { post: Post };

  return (
    <main className="bg-background text-foreground">
      <Nav />

      {/* Post header */}
      <section className="relative bg-onyx text-limestone overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-onyx via-onyx/95 to-onyx" />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 pt-40 pb-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 fade-in">
              <Seal size={22} className="text-gold" />
              <p className="eyebrow text-limestone/70">The Dispatch · {post.eyebrow}</p>
            </div>
            <h1 className="editorial mt-8 text-4xl md:text-6xl lg:text-7xl leading-[0.95] text-limestone fade-in fade-in-2">
              {post.title}
            </h1>
            <div className="mt-10 flex flex-wrap items-center gap-6 eyebrow text-limestone/45 fade-in fade-in-3">
              <span>{post.author}</span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readMinutes} min read</span>
            </div>
          </div>
        </div>
        <div className="hair-rule bg-limestone/10" />
      </section>

      {/* Post body */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-24 md:py-36 grid grid-cols-1 lg:grid-cols-12 gap-12 reveal">
          <div className="lg:col-span-3">
            <Link
              to="/dispatch"
              className="eyebrow text-foreground/45 hover:text-foreground transition-colors inline-flex items-center gap-2"
              data-hover
            >
              ← The Dispatch
            </Link>
          </div>
          <div className="lg:col-span-7 lg:col-start-5">
            <p className="editorial italic text-xl md:text-2xl text-foreground/70 leading-relaxed mb-12">
              {post.excerpt}
            </p>
            <div className="hair-rule w-16 mb-12" />
            <div className="space-y-7 text-base md:text-lg leading-relaxed text-foreground/80">
              {post.body.map((paragraph: string, i: number) => (
                <p
                  key={i}
                  className={
                    paragraph === "We back what we sell."
                      ? "editorial text-2xl md:text-3xl text-foreground italic"
                      : ""
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Founder sign-off */}
            <div className="mt-16 pt-12 border-t border-rule">
              <p className="text-base md:text-lg leading-relaxed text-foreground/80">
                With conviction,
              </p>
              <p className="editorial mt-4 text-2xl md:text-3xl text-foreground">
                {post.author}
              </p>
              <p className="mt-2 eyebrow text-foreground/45">
                Founder, Aykon Ventures
              </p>
            </div>

            <div className="mt-16">
              <Link
                to="/dispatch"
                className="eyebrow text-foreground/45 hover:text-emerald transition-colors inline-flex items-center"
                data-hover
              >
                ← Back to The Dispatch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DispatchSignup />
      <Footer />
    </main>
  );
}
