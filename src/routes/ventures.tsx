import { createFileRoute, Link } from "@tanstack/react-router";
import venturesImg from "@/assets/ventures.jpg";
import { Nav, Footer, CTABand } from "@/components/SiteChrome";
import { Seal } from "@/components/Seal";

export const Route = createFileRoute("/ventures")({
  head: () => ({
    meta: [
      { title: "Aykon Ventures — Real Estate, Marketing & Strategic Partnerships" },
      {
        name: "description",
        content:
          "Aykon Ventures plans real estate investments for individuals and consortiums across Dubai, Hyderabad, and selected international markets.",
      },
      { property: "og:title", content: "Aykon Ventures — The Practice" },
      { property: "og:description", content: "Real estate, marketing, and strategic partnerships, conducted in private." },
      { property: "og:image", content: venturesImg },
    ],
  }),
  component: VenturesPage,
});

function VenturesPage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <PillarHero
        number="I"
        eyebrow="Aykon Ventures"
        title="Real estate, on the long view."
        copy="Eighteen years of planning real estate investments for individuals and consortiums — Dubai, Hyderabad, and selected international markets."
        image={venturesImg}
        alt="Travertine slab in raking light."
      />

      <Section eyebrow="Mandate" title="What the practice does.">
        <Two>
          <p>
            We plan, advise, and back. The Ventures practice works with a small number of
            private clients and consortiums on acquisitions, branded residences,
            and the marketing of select properties we are prepared to stand behind.
          </p>
          <p>
            Our work begins in conversation and ends in conviction. We do not pitch.
            We do not chase listings. We accept a mandate only when we would be willing
            to put our own name and time on it.
          </p>
        </Two>
      </Section>

      <Section eyebrow="Disciplines" title="Four ways we engage.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule">
          {[
            ["Private acquisitions", "Confidential search and negotiation for primary and trophy assets across the UAE and India."],
            ["Consortium structuring", "Co-investment and deal-by-deal participation for residential and mixed-use opportunities."],
            ["Branded residences", "Positioning and go-to-market for collaborations with global luxury houses."],
            ["Marketing & advisory", "Editorial, brand, and launch strategy for developers who require restraint."],
          ].map(([k, v]) => (
            <div key={k} className="bg-background p-10">
              <p className="font-mono text-xs text-emerald">·</p>
              <h3 className="editorial text-2xl md:text-3xl mt-4 text-foreground">{k}</h3>
              <p className="mt-4 text-foreground/75 leading-relaxed">{v}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Geographies" title="Where we operate.">
        <Two>
          <p>
            Headquartered in Dubai — Meydan Free Zone. Active mandates in Hyderabad and Mumbai.
            Selected engagements in London and Singapore by introduction.
          </p>
          <p>
            All work is conducted in private. References by request, after a first conversation.
          </p>
        </Two>
      </Section>

      <CTABand
        eyebrow="A mandate"
        title="Write to the Ventures desk."
        copy="For private acquisitions, consortium briefs, or a confidential conversation about a property."
      />
      <Footer />
    </main>
  );
}

/* ---- shared sub-page primitives (kept here to avoid extra files) ---- */

export function PillarHero({
  number, eyebrow, title, copy, image, alt,
}: { number: string; eyebrow: string; title: string; copy: string; image: string; alt: string; }) {
  return (
    <section className="relative min-h-[88vh] flex flex-col bg-onyx text-limestone overflow-hidden">
      <img src={image} alt={alt} className="absolute inset-0 h-full w-full object-cover opacity-55" width={1600} height={1200} />
      <div className="absolute inset-0 bg-gradient-to-b from-onyx/80 via-onyx/40 to-onyx/95" />
      <div className="relative flex-1 flex flex-col justify-end pt-32 pb-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl">
          <div className="flex items-center gap-4 fade-in">
            <Seal size={24} className="text-gold" />
            <p className="eyebrow text-limestone/70">{number} — {eyebrow}</p>
          </div>
          <h1 className="editorial mt-8 text-[12vw] md:text-[7.5rem] lg:text-[9rem] leading-[0.92] text-limestone fade-in fade-in-2">
            {title}
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-limestone/85 fade-in fade-in-3">{copy}</p>
          <div className="mt-10 flex gap-4 fade-in fade-in-4">
            <Link to="/" hash="contact" className="inline-flex items-center px-8 py-4 bg-limestone text-onyx eyebrow hover:bg-gold transition-colors" data-hover>
              Enquire&nbsp;→
            </Link>
            <Link to="/" className="inline-flex items-center px-8 py-4 border border-limestone/40 text-limestone eyebrow hover:border-limestone transition-colors" data-hover>
              Back to the House
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-24 md:py-36 grid grid-cols-1 lg:grid-cols-12 gap-12 reveal">
        <div className="lg:col-span-3">
          <p className="eyebrow text-foreground/55">{eyebrow}</p>
          <h2 className="editorial mt-6 text-3xl md:text-4xl text-foreground">{title}</h2>
        </div>
        <div className="lg:col-span-8 lg:col-start-5">{children}</div>
      </div>
    </section>
  );
}

export function Two({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-base md:text-lg leading-relaxed text-foreground/80">
      {children}
    </div>
  );
}
