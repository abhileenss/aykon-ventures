import { createFileRoute } from "@tanstack/react-router";
import spacesImg from "@/assets/spaces.jpg";
import { Nav, Footer, CTABand } from "@/components/SiteChrome";
import { PillarHero, Section, Two } from "./ventures";

export const Route = createFileRoute("/spaces")({
  head: () => ({
    meta: [
      { title: "Aykon Spaces — Branded Residences & Considered Interiors" },
      {
        name: "description",
        content:
          "Aykon Spaces: branded residence collaborations with Lamborghini, Aston Martin, and Anna Fendi, and considered interiors for private clients.",
      },
      { property: "og:title", content: "Aykon Spaces" },
      { property: "og:description", content: "Branded residences and considered interiors." },
      { property: "og:image", content: spacesImg },
    ],
  }),
  component: SpacesPage,
});

function SpacesPage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <PillarHero
        number="III"
        eyebrow="Aykon Spaces"
        title="Architecture as conviction."
        copy="Branded residences and considered interiors — conceived in private, built to be lived in for a generation."
        image={spacesImg}
        alt="Arched limestone doorway opening to an inner courtyard."
      />

      <Section eyebrow="Partnerships" title="The houses we stand alongside.">
        <Two>
          <p>
            Aykon Spaces works on branded residence collaborations with global luxury houses —
            including <span className="text-foreground">Lamborghini</span>,
            <span className="text-foreground"> Aston Martin</span>, and
            <span className="text-foreground"> Anna Fendi</span>.
          </p>
          <p>
            Each partnership is treated as a long-form project: positioning, brand alignment,
            interior direction, and the careful handover to the people who will live there.
          </p>
        </Two>
      </Section>

      <Section eyebrow="Practice" title="How we work.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule">
          {[
            ["Branded residence advisory", "Positioning and brand alignment for residences carrying a luxury house's name."],
            ["Interior direction", "Material palette, art curation, and finishing direction for private residences."],
            ["Soft launch & marketing", "Editorial-led launch strategy for residences that warrant restraint over noise."],
            ["Private client briefs", "End-to-end direction for primary homes, retreats, and pied-à-terres."],
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
        eyebrow="A space"
        title="Write to the Spaces desk."
        copy="For a branded residence brief, an interior direction, or a private home conversation."
      />
      <Footer />
    </main>
  );
}
