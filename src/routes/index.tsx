import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import heroStone from "@/assets/hero-stone.jpg";
import founderImg from "@/assets/founder.jpg";
import venturesImg from "@/assets/ventures.jpg";
import jewelsImg from "@/assets/jewels.jpg";
import spacesImg from "@/assets/spaces.jpg";
import { Nav, Footer, CTABand, WHATSAPP_URL } from "@/components/SiteChrome";
import { Seal } from "@/components/Seal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aykon Ventures — We back what we sell." },
      {
        name: "description",
        content:
          "A Dubai based marketing and holding house — real estate, fine jewels, and considered spaces. Founded by Prachi Vishesh Manghnani.",
      },
      { property: "og:title", content: "Aykon Ventures" },
      {
        property: "og:description",
        content:
          "Dubai based marketing and holding house. Real estate, jewels, spaces. Founded by Prachi Vishesh Manghnani.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col bg-onyx text-limestone overflow-hidden">
      <img
        src={heroStone}
        alt="Limestone and travertine interior, raking light."
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        width={1600}
        height={1920}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-onyx/70 via-onyx/30 to-onyx/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-onyx/80 via-onyx/20 to-transparent" />

      <div className="relative flex-1 flex flex-col justify-end pt-24 md:pt-32 pb-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl">
          <div className="flex items-center gap-4 fade-in">
            <Seal size={28} className="text-gold" />
            <p className="eyebrow text-limestone/70">
              Meydan&nbsp;Free&nbsp;Zone&nbsp;·&nbsp;Dubai&nbsp;·&nbsp;Est.&nbsp;2026
            </p>
          </div>

          <h1 className="editorial mt-10 text-[15vw] sm:text-[12vw] md:text-[8.5rem] lg:text-[10.5rem] leading-[0.92] text-limestone fade-in fade-in-2">
            We back<br />
            <span className="italic text-limestone">what we sell.</span>
          </h1>

          <p className="mt-10 max-w-xl text-base md:text-lg leading-relaxed text-limestone/85 fade-in fade-in-3">
            A Dubai based marketing and holding house operating across real estate,
            fine jewels, and considered spaces. Built on conviction. Conducted in private.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5 fade-in fade-in-4">
            <Link
              to="/"
              hash="contact"
              className="group inline-flex items-center justify-center px-9 py-5 bg-limestone text-onyx eyebrow hover:bg-gold transition-colors duration-500"
              data-hover
            >
              Request an Introduction
              <span className="ml-3 transition-transform duration-500 group-hover:translate-x-1">→</span>
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-9 py-5 border border-limestone/40 text-limestone eyebrow hover:border-limestone hover:bg-limestone/5 transition-colors duration-500"
              data-hover
            >
              WhatsApp the Office
            </a>
          </div>
        </div>

        <div className="mt-16 flex items-end justify-between eyebrow text-limestone/60 fade-in fade-in-5">
          <span>L.L.C-FZ · ايكون فينتشرز</span>
          <span className="hidden md:inline">Scroll&nbsp;↓</span>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-rule">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-28 md:py-44 grid grid-cols-1 lg:grid-cols-12 gap-12 reveal">
        <div className="lg:col-span-3">
          <p className="eyebrow text-foreground/55">01 — The House</p>
        </div>
        <div className="lg:col-span-8 lg:col-start-5">
          <p className="editorial text-3xl md:text-5xl lg:text-6xl text-foreground">
            Aykon Ventures is a Dubai based marketing and holding house operating across real estate, fine jewels, and considered spaces.
          </p>
          <p className="editorial italic mt-10 text-2xl md:text-3xl text-foreground/70">
            We back, with capital and time, only the things we are willing to put our name behind.
          </p>
          <div className="hair-rule my-10 w-16" />
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 eyebrow text-foreground/55">
            <div>
              <dt>Founded</dt>
              <dd className="mt-2 editorial text-2xl normal-case tracking-normal text-foreground">2026</dd>
            </div>
            <div>
              <dt>Headquarters</dt>
              <dd className="mt-2 editorial text-2xl normal-case tracking-normal text-foreground">Dubai</dd>
            </div>
            <div>
              <dt>Disciplines</dt>
              <dd className="mt-2 editorial text-2xl normal-case tracking-normal text-foreground">Three</dd>
            </div>
            <div>
              <dt>Mandate</dt>
              <dd className="mt-2 editorial text-2xl normal-case tracking-normal text-foreground">Private</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

type Pillar = {
  number: string;
  name: string;
  copy: string;
  image: string;
  alt: string;
  href: "/ventures" | "/jewels" | "/spaces";
};

const pillars: Pillar[] = [
  {
    number: "I",
    name: "Ventures",
    copy: "Real estate, marketing, and strategic partnerships across Dubai, Hyderabad, and selected markets.",
    image: venturesImg,
    alt: "Travertine slab, natural patina.",
    href: "/ventures",
  },
  {
    number: "II",
    name: "Jewels",
    copy: "Fine jewellery shaped by craftsmanship, provenance, and the long view of value.",
    image: jewelsImg,
    alt: "Emerald set by hand into a gold mount.",
    href: "/jewels",
  },
  {
    number: "III",
    name: "Spaces",
    copy: "Branded residences and considered interiors — partnerships with Lamborghini, Aston Martin, and Anna Fendi.",
    image: spacesImg,
    alt: "Architectural arch in limestone and onyx.",
    href: "/spaces",
  },
];

function WhatWeDo() {
  return (
    <section id="work" className="border-t border-rule bg-muted/40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-28 md:py-44">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 reveal">
          <div className="lg:col-span-3">
            <p className="eyebrow text-foreground/55">02 — The House</p>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className="editorial text-4xl md:text-6xl">
              Three disciplines.<br />
              <span className="italic">One house.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule">
          {pillars.map((p) => (
            <Link
              key={p.name}
              to={p.href}
              className="group bg-background flex flex-col reveal"
              data-hover
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  width={1200}
                  height={1500}
                  className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <p className="font-mono text-xs text-emerald">{p.number}</p>
                <h3 className="wordmark text-base mt-6 text-foreground">
                  AYKON&nbsp;{p.name.toUpperCase()}
                </h3>
                <div className="hair-rule my-6 w-12 transition-all duration-700 group-hover:w-24 group-hover:bg-emerald" />
                <p className="editorial text-xl md:text-2xl text-foreground/80 leading-snug">
                  {p.copy}
                </p>
                <p className="mt-8 eyebrow text-foreground/55 group-hover:text-emerald transition-colors">
                  Enter&nbsp;→
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section id="founder" className="border-t border-rule">
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
        <div className="lg:col-span-6 flex flex-col justify-end">
          <p className="eyebrow text-foreground/55">03 — Founder</p>
          <h2 className="editorial mt-8 text-4xl md:text-6xl lg:text-7xl">
            <span className="italic">Prachi</span> Vishesh<br />Manghnani.
          </h2>
          <p className="mt-6 eyebrow text-emerald">
            Also known as Sarita Gopinath
          </p>
          <div className="hair-rule my-10 w-16" />
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-foreground/80 max-w-xl">
            <p>
              Dubai-born and raised. Eighteen years planning real estate
              investments for private individuals and consortiums.
              Twenty-five years before that as a sought-after event planner.
            </p>
            <p>
              Recognised in the <span className="italic">Top 100 Most Influential People — Middle East &amp; Africa</span>.
              Today, her practice extends from Dubai to Hyderabad and beyond,
              with branded residence collaborations alongside
              <span className="text-foreground"> Lamborghini</span>,
              <span className="text-foreground"> Aston Martin</span>, and
              <span className="text-foreground"> Anna Fendi</span>.
            </p>
            <p className="editorial italic text-2xl text-foreground/85 pt-2">
              "Aykon is fronted quietly — with a point of view, and with capital and time on the line."
            </p>
          </div>
          <p className="eyebrow text-foreground/55 mt-12">
            Managing&nbsp;Partner&nbsp;·&nbsp;Sole&nbsp;Manager&nbsp;on&nbsp;the&nbsp;Licence
          </p>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="border-t border-rule bg-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-24 md:py-32 grid grid-cols-1 md:grid-cols-3 gap-12 reveal">
        {[
          { k: "Conviction", v: "We invest before we recommend. Skin in, name on." },
          { k: "Restraint", v: "Fewer mandates. Considered, slow, in private rooms." },
          { k: "Provenance", v: "Real estate, jewels, spaces — chosen for what they will be in twenty years." },
        ].map((p) => (
          <div key={p.k}>
            <p className="eyebrow text-emerald">{p.k}</p>
            <p className="editorial mt-5 text-2xl md:text-3xl text-foreground/85">{p.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const WA_NUMBER = "971563971998";

function Contact() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") as string;
    const email = fd.get("email") as string;
    const phone = fd.get("phone") as string;
    const message = fd.get("message") as string;

    const lines = [
      "Hello, I'd like to get in touch via Aykon Ventures.",
      "",
      `Name: ${name}`,
      email ? `Email: ${email}` : null,
      phone ? `Phone: ${phone}` : null,
      message ? `\n${message}` : null,
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines)}`, "_blank");
  }

  return (
    <section id="contact" className="border-t border-rule bg-onyx text-limestone">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-28 md:py-44 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <p className="eyebrow text-limestone/55">04 — Contact</p>
          <h2 className="editorial mt-8 text-4xl md:text-6xl lg:text-7xl text-limestone">
            Start a<br /><span className="italic">conversation.</span>
          </h2>
          <p className="mt-10 text-base md:text-lg leading-relaxed text-limestone/75 max-w-md">
            For partnerships, introductions, or a private brief on something we may back together.
          </p>
          <div className="hair-rule my-10 w-16 bg-limestone/30" />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow text-limestone hover:text-gold transition-colors inline-flex items-center"
            data-hover
          >
            WhatsApp · Direct line&nbsp;→
          </a>
          <div className="mt-12 eyebrow text-limestone/45 space-y-2">
            <p>Dubai · Meydan Free Zone</p>
            <p>Hyderabad · By appointment</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-7 flex flex-col gap-10">
          <Field label="Name" name="name" type="text" required maxLength={120} />
          <Field label="Email" name="email" type="email" required maxLength={200} />
          <Field label="Phone" name="phone" type="tel" maxLength={40} />
          <Field label="Tell us, briefly" name="message" textarea required maxLength={1500} />
          <button
            type="submit"
            className="self-start mt-2 px-10 py-5 bg-limestone text-onyx eyebrow hover:bg-gold transition-colors duration-500"
            data-hover
          >
            Send via WhatsApp&nbsp;→
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", textarea = false, required = false, maxLength,
}: {
  label: string; name: string; type?: string; textarea?: boolean; required?: boolean; maxLength?: number;
}) {
  const cls =
    "w-full bg-transparent border-0 border-b border-limestone/30 focus:border-limestone outline-none py-3 text-base md:text-lg text-limestone placeholder:text-limestone/30 transition-colors";
  return (
    <label className="block">
      <span className="eyebrow text-limestone/55">{label}</span>
      <div className="mt-3">
        {textarea ? (
          <textarea name={name} required={required} maxLength={maxLength} rows={3} className={cls} />
        ) : (
          <input name={name} type={type} required={required} maxLength={maxLength} className={cls} />
        )}
      </div>
    </label>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <WhatWeDo />
      <CTABand
        eyebrow="An introduction"
        title="Considered. Private. On the long view."
        copy="Write to the office for a quiet conversation about a property, a piece, or a partnership."
      />
      <Founder />
      <Pillars />
      <Contact />
      <Footer />
    </main>
  );
}
