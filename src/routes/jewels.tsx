import { createFileRoute } from "@tanstack/react-router";
import jewelsImg from "@/assets/jewels.jpg";
import { Nav, Footer, CTABand } from "@/components/SiteChrome";
import { PillarHero, Section, Two } from "./ventures";

export const Route = createFileRoute("/jewels")({
  head: () => ({
    meta: [
      { title: "Aykon Jewels — Fine Jewellery, Considered Provenance" },
      {
        name: "description",
        content:
          "Aykon Jewels: rare stones and commissions shaped by craftsmanship, provenance, and the long view of value.",
      },
      { property: "og:title", content: "Aykon Jewels" },
      { property: "og:description", content: "Fine jewellery, considered provenance, restrained craft." },
      { property: "og:image", content: jewelsImg },
    ],
  }),
  component: JewelsPage,
});

function JewelsPage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <PillarHero
        number="II"
        eyebrow="Aykon Jewels"
        title="A quieter kind of brilliance."
        copy="Rare stones, private commissions, and considered pieces — shaped by craftsmanship, provenance, and the long view of value."
        image={jewelsImg}
        alt="Emerald set into a gold ring."
      />

      <Section eyebrow="The Atelier" title="Few pieces. Long memory.">
        <Two>
          <p>
            Aykon Jewels is built around restraint. We work with a small circle of master
            setters and lapidaries, sourcing certified stones and seeing each piece
            through from sketch to setting.
          </p>
          <p>
            Every commission begins with a conversation about the person who will wear it.
            Nothing leaves the atelier that we would not give to our own.
          </p>
        </Two>
      </Section>

      <Section eyebrow="Practice" title="What we make.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule">
          {[
            ["Private commissions", "Bespoke pieces designed in conversation with the wearer."],
            ["Rare stones", "Sourcing of certified emeralds, sapphires, rubies, and diamonds of provenance."],
            ["Heirloom redesign", "Reworking inherited pieces with respect for what came before."],
            ["Investment grade", "Long-horizon advisory on coloured stones and museum-quality pieces."],
          ].map(([k, v]) => (
            <div key={k} className="bg-background p-10">
              <p className="font-mono text-xs text-emerald">·</p>
              <h3 className="editorial text-2xl md:text-3xl mt-4">{k}</h3>
              <p className="mt-4 text-foreground/75 leading-relaxed">{v}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABand
        eyebrow="A commission"
        title="Begin a conversation with the atelier."
        copy="For a private viewing, a stone search, or a quiet brief on a future piece."
      />
      <Footer />
    </main>
  );
}
