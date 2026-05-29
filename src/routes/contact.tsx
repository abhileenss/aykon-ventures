import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer, WHATSAPP_URL } from "@/components/SiteChrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Aykon Ventures — Contact" },
      {
        name: "description",
        content:
          "Start a conversation with Aykon Ventures. Email or WhatsApp — direct, no form, no funnel.",
      },
      { property: "og:title", content: "Aykon Ventures — Contact" },
      { property: "og:description", content: "Direct contact. No form. No funnel." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />

      {/* Large text hero */}
      <section className="bg-onyx text-limestone min-h-[72vh] flex flex-col justify-end pt-32 pb-20 px-6 md:px-12 lg:px-20 border-b border-limestone/10">
        <div className="mx-auto max-w-[1400px] w-full">
          <p className="eyebrow text-limestone/55 fade-in">Get in touch</p>
          <h1 className="editorial mt-8 text-[11vw] md:text-[7rem] lg:text-[8.5rem] leading-[0.92] text-limestone fade-in fade-in-2">
            Start a<br />
            <span className="italic">conversation.</span>
          </h1>
          <p className="mt-10 max-w-xl text-base md:text-lg leading-relaxed text-limestone/80 fade-in fade-in-3">
            For property briefs, partnership introductions, or a quiet question about what we back.
          </p>
        </div>
      </section>

      {/* Contact methods */}
      <section className="border-t border-rule">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-28 md:py-44 grid grid-cols-1 lg:grid-cols-12 gap-12 reveal">
          <div className="lg:col-span-3">
            <p className="eyebrow text-foreground/55">Direct contact</p>
          </div>
          <div className="lg:col-span-8 lg:col-start-5 space-y-16">

            {/* Email */}
            <div className="border-b border-rule pb-16">
              <p className="eyebrow text-emerald">Email</p>
              <a
                href="mailto:prachi@aykonventures.com"
                className="editorial mt-6 block text-3xl md:text-5xl lg:text-6xl text-foreground hover:text-emerald transition-colors duration-500"
                data-hover
              >
                prachi@aykonventures.com
              </a>
              <p className="mt-4 text-foreground/60 leading-relaxed text-sm md:text-base">
                Write with a brief description of what you'd like to discuss. We read every message.
              </p>
            </div>

            {/* WhatsApp */}
            <div className="border-b border-rule pb-16">
              <p className="eyebrow text-emerald">WhatsApp</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial mt-6 block text-3xl md:text-5xl lg:text-6xl text-foreground hover:text-emerald transition-colors duration-500"
                data-hover
              >
                +971 56 397 1998
              </a>
              <p className="mt-4 text-foreground/60 leading-relaxed text-sm md:text-base">
                Direct line to the office. No assistant, no intake form.
              </p>
            </div>

            {/* Offices */}
            <div>
              <p className="eyebrow text-foreground/55">Offices</p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <p className="font-mono text-xs text-foreground/45 mb-3">Dubai</p>
                  <p className="editorial text-xl md:text-2xl text-foreground/80">
                    Meydan Free Zone<br />
                    United Arab Emirates
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs text-foreground/45 mb-3">Hyderabad</p>
                  <p className="editorial text-xl md:text-2xl text-foreground/80">
                    By appointment
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
