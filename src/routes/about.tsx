import { createFileRoute } from "@tanstack/react-router";
import founderImg from "@/assets/founder.jpg";
import { Nav, Footer, CTABand } from "@/components/SiteChrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Aykon Ventures — Prachi Vishesh Manghnani" },
      {
        name: "description",
        content:
          "Prachi Vishesh Manghnani. Dubai-born, 18 years real estate planning, 25 years before that as a sought-after event planner. Managing Partner, Aykon Ventures.",
      },
      { property: "og:title", content: "Aykon Ventures — Prachi Vishesh Manghnani" },
      { property: "og:description", content: "Founder, Managing Partner, Sole Manager on the Licence." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="bg-onyx text-limestone min-h-[60vh] flex flex-col justify-end pt-32 pb-20 px-6 md:px-12 lg:px-20 border-b border-limestone/10">
        <div className="mx-auto max-w-[1400px] w-full">
          <p className="eyebrow text-limestone/55 fade-in">The founder</p>
          <h1 className="editorial mt-8 text-[10vw] md:text-[6.5rem] lg:text-[8rem] leading-[0.92] text-limestone fade-in fade-in-2">
            <span className="italic">Prachi</span> Vishesh<br />Manghnani.
          </h1>
          <p className="mt-8 eyebrow text-limestone/55 fade-in fade-in-3">
            Managing Partner · Sole Manager on the Licence · Also known as Sarita Gopinath
          </p>
        </div>
      </section>

      {/* Founder portrait + bio */}
      <section className="border-t border-rule">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-28 md:py-44 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 reveal">
          <div className="lg:col-span-6">
            <div className="aspect-[4/5] overflow-hidden bg-onyx">
              <img
                src={founderImg}
                alt="Prachi Vishesh Manghnani, founder of Aykon Ventures."
                loading="lazy"
                width={1280}
                height={1600}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 eyebrow text-foreground/45">
              Prachi V. Manghnani · Dubai
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="eyebrow text-foreground/55">01 — The practice</p>
            <div className="hair-rule my-8 w-16" />
            <div className="space-y-6 text-base md:text-lg leading-relaxed text-foreground/80">
              <p>
                Dubai-born and raised. Eighteen years planning real estate
                investments for private individuals and consortiums.
                Twenty-five years before that as a sought-after event planner.
              </p>
              <p>
                Recognised in the <span className="italic">Top 100 Most Influential People — Middle East &amp; Africa</span>.
                Her practice extends from Dubai to Hyderabad and beyond.
              </p>
              <p>
                Branded residence collaborations alongside
                <span className="text-foreground"> Lamborghini</span>,
                <span className="text-foreground"> Aston Martin</span>, and
                <span className="text-foreground"> Anna Fendi</span>.
              </p>
              <p className="editorial italic text-2xl md:text-3xl text-foreground/85 pt-4">
                "Aykon is fronted quietly — with a point of view, and with capital and time on the line."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The licensed reality */}
      <section className="border-t border-rule bg-muted/40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-24 md:py-36 grid grid-cols-1 lg:grid-cols-12 gap-12 reveal">
          <div className="lg:col-span-3">
            <p className="eyebrow text-foreground/55">The licence</p>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className="editorial text-3xl md:text-4xl text-foreground">
              The licensed reality.
            </h2>
            <div className="hair-rule my-10 w-16" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-base md:text-lg leading-relaxed text-foreground/80">
              <div className="space-y-6">
                <p>
                  Aykon Ventures L.L.C-FZ is registered under the Meydan Free Zone,
                  formation number 2645134. Prachi is the sole manager on the licence
                  and the managing partner of the house.
                </p>
                <p>
                  The three licensed activities — social media marketing, own-account investment,
                  and marketing management — define exactly what Aykon does and does not do.
                </p>
              </div>
              <div className="space-y-6">
                <p>
                  Real-estate transactions backed by Aykon are executed through named
                  RERA-licensed partners. Aykon markets and aligns. The partner transacts.
                </p>
                <p>
                  There is no third-party capital under management. No fund. Own-account
                  investment means Prachi's conviction, Aykon's name, and Aykon's capital —
                  placed alongside the assets disclosed on this site.
                </p>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 eyebrow text-foreground/55">
              <div>
                <dt>Entity</dt>
                <dd className="mt-2 editorial text-xl normal-case tracking-normal text-foreground">L.L.C-FZ</dd>
              </div>
              <div>
                <dt>Formation</dt>
                <dd className="mt-2 editorial text-xl normal-case tracking-normal text-foreground">2645134</dd>
              </div>
              <div>
                <dt>Zone</dt>
                <dd className="mt-2 editorial text-xl normal-case tracking-normal text-foreground">Meydan</dd>
              </div>
              <div>
                <dt>Established</dt>
                <dd className="mt-2 editorial text-xl normal-case tracking-normal text-foreground">2026</dd>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="An introduction"
        title="Write to Prachi directly."
        copy="For property briefs, partnership conversations, or a confidential introduction."
      />
      <Footer />
    </main>
  );
}
