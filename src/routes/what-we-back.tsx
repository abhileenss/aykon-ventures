import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav, Footer, CTABand } from "@/components/SiteChrome";

export const Route = createFileRoute("/what-we-back")({
  head: () => ({
    meta: [
      { title: "Aykon Ventures — What We Back" },
      {
        name: "description",
        content:
          "A small number of assets each year — with our name and our money. The thesis, the stake, and the RERA partner are disclosed on every entry.",
      },
      { property: "og:title", content: "Aykon Ventures — What We Back" },
      { property: "og:description", content: "We back, with our name and our money, a small number of assets each year." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: WhatWeBackPage,
});

type DealStatus = "live" | "open-to-coinvest" | "closed";

type Deal = {
  title: string;
  location: string;
  assetValue: string;
  aykonStake: string;
  aykonStakePct: string;
  reraPartner: string;
  status: DealStatus;
};

const deals: Deal[] = [
  {
    title: "A floor in DIFC",
    location: "DIFC, Dubai",
    assetValue: "AED 4,200,000",
    aykonStake: "AED 250,000",
    aykonStakePct: "6%",
    reraPartner: "[Partner Legal Name]",
    status: "live",
  },
  {
    title: "Business Bay floor",
    location: "Business Bay, Dubai",
    assetValue: "AED 2,800,000",
    aykonStake: "AED 168,000",
    aykonStakePct: "6%",
    reraPartner: "[Partner Legal Name]",
    status: "open-to-coinvest",
  },
  {
    title: "Marina walk-up",
    location: "Dubai Marina",
    assetValue: "AED 1,900,000",
    aykonStake: "AED 114,000",
    aykonStakePct: "6%",
    reraPartner: "[Partner Legal Name]",
    status: "closed",
  },
];

const STATUS_LABEL: Record<DealStatus, string> = {
  "live": "Live",
  "open-to-coinvest": "Open to co-invest",
  "closed": "Closed",
};

function DealCard({ deal }: { deal: Deal }) {
  return (
    <div className="bg-background border border-rule p-10 md:p-12 flex flex-col gap-6">
      <div className="flex items-start justify-between gap-4">
        <p className="eyebrow text-emerald">{STATUS_LABEL[deal.status]}</p>
      </div>
      <div>
        <h3 className="editorial text-2xl md:text-3xl text-foreground leading-snug">{deal.title}</h3>
        <p className="mt-2 font-mono text-xs text-foreground/50 uppercase tracking-widest">{deal.location}</p>
      </div>
      <div className="hair-rule w-12" />
      <dl className="grid grid-cols-2 gap-y-6 gap-x-4 eyebrow text-foreground/50">
        <div>
          <dt>Asset value</dt>
          <dd className="mt-1 font-mono text-xs text-foreground/80 normal-case tracking-normal">{deal.assetValue}</dd>
        </div>
        <div>
          <dt>Aykon stake</dt>
          <dd className="mt-1 font-mono text-xs text-foreground/80 normal-case tracking-normal">{deal.aykonStake} ({deal.aykonStakePct})</dd>
        </div>
        <div className="col-span-2">
          <dt>RERA partner</dt>
          <dd className="mt-1 font-mono text-xs text-foreground/80 normal-case tracking-normal">{deal.reraPartner}</dd>
        </div>
      </dl>
    </div>
  );
}

type Filter = "all" | DealStatus;

function WhatWeBackPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: "All" },
    { key: "live", label: "Live" },
    { key: "open-to-coinvest", label: "Open to co-invest" },
    { key: "closed", label: "Closed" },
  ];

  const visible = filter === "all" ? deals : deals.filter((d) => d.status === filter);

  return (
    <main className="bg-background text-foreground">
      <Nav />

      {/* Intro section */}
      <section className="border-t border-rule pt-32 pb-24 md:pb-36 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 reveal">
            <div className="lg:col-span-3">
              <p className="eyebrow text-foreground/55">The book</p>
            </div>
            <div className="lg:col-span-8 lg:col-start-5">
              <h1 className="editorial text-4xl md:text-6xl lg:text-7xl text-foreground">
                Backed with our name<br />
                <span className="italic">and our money.</span>
              </h1>
              <div className="hair-rule my-10 w-16" />
              <p className="text-base md:text-lg leading-relaxed text-foreground/80 max-w-2xl">
                We back, with our name and our money, a small number of assets each year.
                The thesis, the stake, and the RERA partner are disclosed on every entry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter + cards */}
      <section className="border-t border-rule bg-muted/40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-24 md:py-36">

          {/* Filter row */}
          <div className="flex flex-wrap gap-2 mb-16 reveal">
            {filters.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`eyebrow px-5 py-2 border transition-colors duration-300 ${
                  filter === key
                    ? "bg-onyx text-limestone border-onyx"
                    : "bg-background text-foreground/60 border-rule hover:border-foreground/40 hover:text-foreground"
                }`}
                data-hover
              >
                {label}
              </button>
            ))}
          </div>

          {/* Deal cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
            {visible.map((deal, i) => (
              <DealCard key={i} deal={deal} />
            ))}
            {visible.length === 0 && (
              <div className="col-span-full py-20 text-center">
                <p className="editorial text-2xl text-foreground/40 italic">No entries in this category yet.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="A conversation"
        title="Interested in a specific asset?"
        copy="Write to the office for a private conversation about any entry shown here."
      />
      <Footer />
    </main>
  );
}
