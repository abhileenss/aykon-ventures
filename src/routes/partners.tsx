import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer, CTABand } from "@/components/SiteChrome";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Aykon Ventures — Execution Partners" },
      {
        name: "description",
        content:
          "Every real-estate transaction Aykon backs is executed through a RERA-licensed partner. We market and align. The partner transacts.",
      },
      { property: "og:title", content: "Aykon Ventures — Execution Partners" },
      { property: "og:description", content: "RERA-licensed execution partners. Their name is on the mandate." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PartnersPage,
});

const partners = [
  {
    name: "[Partner Legal Name]",
    rera: "[XXXXX]",
    executes: "Residential and mixed-use acquisitions in Dubai — primary market, off-plan, and secondary.",
    alignment: "Aykon markets and provides editorial alignment. Partner holds the mandate and executes the transaction.",
  },
  {
    name: "[Partner Legal Name]",
    rera: "[XXXXX]",
    executes: "Commercial and branded residence transactions in Dubai and the wider UAE.",
    alignment: "Aykon backs with own-account stake and marketing direction. Partner transacts under RERA licence.",
  },
];

function PartnerCard({ partner }: { partner: typeof partners[0] }) {
  return (
    <div className="bg-background border border-rule p-10 md:p-12 flex flex-col gap-8">
      <div>
        <p className="eyebrow text-emerald">RERA partner</p>
        <h3 className="editorial mt-4 text-2xl md:text-3xl text-foreground">{partner.name}</h3>
        <p className="mt-2 font-mono text-xs text-foreground/50">RERA Licence {partner.rera}</p>
      </div>
      <div className="hair-rule w-12" />
      <div className="space-y-5 text-foreground/75 leading-relaxed text-sm md:text-base">
        <div>
          <p className="eyebrow text-foreground/45 mb-2">What they execute</p>
          <p>{partner.executes}</p>
        </div>
        <div>
          <p className="eyebrow text-foreground/45 mb-2">Alignment</p>
          <p>{partner.alignment}</p>
        </div>
      </div>
    </div>
  );
}

function PartnersPage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />

      {/* Intro section */}
      <section className="border-t border-rule pt-32 pb-24 md:pb-36 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 reveal">
            <div className="lg:col-span-3">
              <p className="eyebrow text-foreground/55">Execution partners</p>
            </div>
            <div className="lg:col-span-8 lg:col-start-5">
              <h1 className="editorial text-4xl md:text-6xl lg:text-7xl text-foreground">
                Their name is on the mandate.
              </h1>
              <div className="hair-rule my-10 w-16" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-base md:text-lg leading-relaxed text-foreground/80">
                <p>
                  Every real-estate transaction Aykon backs is executed through a RERA-licensed partner.
                  We market and align. The partner transacts.
                </p>
                <p>
                  Partner names, RERA licence numbers, and the scope of each relationship are disclosed
                  on this page and on each asset entry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners grid */}
      <section className="border-t border-rule bg-muted/40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-24 md:py-36">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal">
            {partners.map((p, i) => (
              <PartnerCard key={i} partner={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Disclosure note */}
      <section className="border-t border-rule">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-16 md:py-20 reveal">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <p className="eyebrow text-foreground/55">Disclosure</p>
            </div>
            <div className="lg:col-span-8 lg:col-start-5">
              <p className="text-foreground/60 leading-relaxed text-sm md:text-base">
                Aykon Ventures L.L.C-FZ (formation 2645134, Meydan Free Zone) does not hold a RERA brokerage
                licence and does not act as a real-estate broker. All transactions are executed by the named
                RERA-licensed partner. Partner names shown as [Partner Legal Name] are placeholders pending
                formal disclosure authorisation. Final partner details will be shown on each live asset entry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="A mandate"
        title="Enquire about a partnership."
        copy="For developer relationships, broker introductions, or questions about how Aykon structures its backing."
      />
      <Footer />
    </main>
  );
}
