import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/SiteChrome";
import { Seal } from "@/components/Seal";
import { posts } from "@/data/posts";
import { useState } from "react";

export const Route = createFileRoute("/dispatch")({
  head: () => ({
    meta: [
      { title: "The Dispatch — Aykon Ventures" },
      {
        name: "description",
        content:
          "Short notes from the house — on markets, pieces, and considered observations. A private letter from Aykon Ventures.",
      },
      { property: "og:title", content: "The Dispatch — Aykon Ventures" },
      {
        property: "og:description",
        content:
          "Notes from the house on real estate, fine jewels, and considered spaces.",
      },
    ],
  }),
  component: DispatchPage,
});

function DispatchPage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex flex-col bg-onyx text-limestone overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-onyx via-onyx/95 to-onyx" />
        <div className="relative flex-1 flex flex-col justify-end pt-32 pb-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4 fade-in">
              <Seal size={24} className="text-gold" />
              <p className="eyebrow text-limestone/70">Aykon Ventures · The Dispatch</p>
            </div>
            <h1 className="editorial mt-8 text-[11vw] md:text-[7rem] lg:text-[8.5rem] leading-[0.92] text-limestone fade-in fade-in-2">
              The Dispatch.
            </h1>
            <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-limestone/80 fade-in fade-in-3">
              Short notes from the house — on the markets we watch, the pieces we commission,
              the spaces we believe in. A letter, not a broadcast.
            </p>
          </div>
        </div>
      </section>

      {/* Post list */}
      <section className="border-t border-rule">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-24 md:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 reveal">
            <div className="lg:col-span-3">
              <p className="eyebrow text-foreground/55">The Archive</p>
            </div>
            <div className="lg:col-span-8 lg:col-start-5">
              <p className="editorial text-2xl md:text-3xl text-foreground/70 italic">
                {posts.length === 1
                  ? "One letter so far. More on the way."
                  : `${posts.length} letters. More on the way.`}
              </p>
            </div>
          </div>

          <div className="divide-y divide-rule">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to="/dispatch/$slug"
                params={{ slug: post.slug }}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-12 md:py-16 reveal"
                data-hover
              >
                <div className="lg:col-span-3 flex flex-col justify-between">
                  <div>
                    <p className="eyebrow text-emerald">{post.eyebrow}</p>
                    <p className="eyebrow text-foreground/45 mt-3">{post.date}</p>
                  </div>
                  <p className="eyebrow text-foreground/40 mt-6 lg:mt-0">{post.readMinutes} min read</p>
                </div>
                <div className="lg:col-span-8 lg:col-start-5">
                  <h2 className="editorial text-3xl md:text-5xl text-foreground group-hover:text-emerald transition-colors duration-500">
                    {post.title}
                  </h2>
                  <div className="hair-rule my-6 w-12 transition-all duration-700 group-hover:w-24 group-hover:bg-emerald" />
                  <p className="text-base md:text-lg leading-relaxed text-foreground/70 max-w-2xl">
                    {post.excerpt}
                  </p>
                  <p className="mt-8 eyebrow text-foreground/45 group-hover:text-emerald transition-colors duration-500">
                    Read the letter&nbsp;→
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Email signup */}
      <DispatchSignup />

      <Footer />
    </main>
  );
}

export function DispatchSignup() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  }

  return (
    <section className="border-t border-rule bg-onyx text-limestone">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-24 md:py-36 grid grid-cols-1 lg:grid-cols-12 gap-12 reveal">
        <div className="lg:col-span-5">
          <p className="eyebrow text-limestone/55">Stay in the loop</p>
          <h2 className="editorial mt-8 text-4xl md:text-6xl text-limestone">
            Receive<br />
            <span className="italic">The Dispatch.</span>
          </h2>
          <p className="mt-8 text-base md:text-lg leading-relaxed text-limestone/70 max-w-md">
            A quiet letter when there is something worth saying.
            No frequency promises. No noise.
          </p>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
          {done ? (
            <div className="py-10">
              <p className="editorial text-3xl md:text-4xl text-limestone">
                You're on the list.
              </p>
              <p className="mt-4 eyebrow text-limestone/55">
                Expect a letter when there is something worth reading.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-8">
              <label className="block">
                <span className="eyebrow text-limestone/55">Your email</span>
                <div className="mt-3">
                  <input
                    type="email"
                    required
                    maxLength={200}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="address@example.com"
                    className="w-full bg-transparent border-0 border-b border-limestone/30 focus:border-limestone outline-none py-3 text-base md:text-lg text-limestone placeholder:text-limestone/30 transition-colors"
                  />
                </div>
              </label>
              <button
                type="submit"
                className="self-start px-10 py-5 bg-limestone text-onyx eyebrow hover:bg-gold transition-colors duration-500"
                data-hover
              >
                Join The Dispatch&nbsp;→
              </button>
              <p className="eyebrow text-limestone/35">
                Private. No sharing. Unsubscribe at any time.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
