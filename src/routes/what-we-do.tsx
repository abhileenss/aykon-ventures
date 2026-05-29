import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer, CTABand } from "@/components/SiteChrome";

export const Route = createFileRoute("/what-we-do")({
  head: () => ({
    meta: [
      { title: "Aykon Ventures — What We Do" },
      {
        name: "description",
        content:
          "Aykon Ventures holds three licensed activities: social media marketing, own-account investment, and marketing management. Every real-estate transaction is executed through a RERA-licensed partner.",
      },
      { property: "og:title", content: "Aykon Ventures — What We Do" },
      { property: "og:description", content: "Three licensed activities. One house." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: WhatWeDoPage,
});

const activities = [
  {
    number: "01",
    name: "Marketing services via social media",
    copy: "Content strategy, paid social, and founder-led narrative. We build an editorial voice around the assets and people we back — not a campaign, a point of view.",
  },
  {
    number: "02",
    name: "Own-account investment",
    copy: "Proof of belief. Aykon puts a small stake of its own capital into each asset it backs. This is not a fund. We hold no third-party capital. Every entry is disclosed alongside our stake.",
  },
  {
    number: "03",
    name: "Marketing management",
    copy: "The strategy layer. We advise on positioning, go-to-market sequencing, and brand alignment for the properties and partnerships we carry under the Aykon name.",
  },
];

function WhatWeDoPage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="bg-onyx text-limestone min-h-[72vh] flex flex-col justify-end pt-32 pb-20 px-6 md:px-12 lg:px-20 border-b border-limestone/10">
        <div className="mx-auto max-w-[1400px] w-full">
          <p className="eyebrow text-limestone/55 fade-in">The licence</p>
          <h1 className="editorial mt-8 text-[11vw] md:text-[7rem] lg:text-[8.5rem] leading-[0.92] text-limestone fade-in fade-in-2">
            Three things.<br />
            <span className="italic">Done clearly.</span>
          </h1>
          <p className="mt-10 max-w-xl text-base md:text-lg leading-relaxed text-limestone/80 fade-in fade-in-3">
            Aykon holds three licensed activities under the Meydan Free Zone.
            Each one is deliberate. None of them is a promise of return.
          </p>
        </div>
      </section>

      {/* Three licensed activities */}
      <section className="border-t border-rule">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-24 md:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 reveal">
            <div className="lg:col-span-3">
              <p className="eyebrow text-foreground/55">Licensed activities</p>
            </div>
            <div className="lg:col-span-8 lg:col-start-5">
              <h2 className="editorial text-4xl md:text-5xl text-foreground">
                What Aykon is licensed to do.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule reveal">
            {activities.map((a) => (
              <div key={a.number} className="bg-background p-10 md:p-12">
                <p className="font-mono text-xs text-emerald">{a.number}</p>
                <h3 className="editorial text-2xl md:text-3xl mt-6 text-foreground leading-snug">
                  {a.name}
                </h3>
                <div className="hair-rule my-6 w-12" />
                <p className="text-foreground/75 leading-relaxed">{a.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RERA partner disclosure */}
      <section className="border-t border-rule bg-muted/40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-24 md:py-36 grid grid-cols-1 lg:grid-cols-12 gap-12 reveal">
          <div className="lg:col-span-3">
            <p className="eyebrow text-foreground/55">RERA layer</p>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className="editorial text-3xl md:text-4xl text-foreground">
              Every real-estate transaction runs through a RERA-licensed partner.
            </h2>
            <div className="hair-rule my-10 w-16" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-base md:text-lg leading-relaxed text-foreground/80">
              <p>
                Aykon markets and aligns. The RERA partner transacts. Their name is on the mandate.
                We do not hold a RERA brokerage licence, and we do not act as a broker.
              </p>
              <p>
                This structure is deliberate. It keeps the function of marketing and the function of
                transacting clearly separated — and keeps each party accountable for what they actually do.
              </p>
            </div>
            <div className="mt-10 p-8 border border-rule bg-background">
              <p className="eyebrow text-emerald">Disclosure</p>
              <p className="mt-4 text-foreground/70 leading-relaxed text-sm md:text-base">
                Aykon Ventures L.L.C-FZ (formation 2645134, Meydan Free Zone) does not hold a RERA brokerage
                licence. Real-estate transactions backed by Aykon are executed by named RERA-licensed partners.
                Partner details are disclosed on each asset entry on this site.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="A conversation"
        title="Talk to the office about alignment."
        copy="For mandates, marketing briefs, or a quiet question about how Aykon structures its backing."
      />
      <Footer />
    </main>
  );
}
