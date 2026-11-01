import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AerodynamicLines } from "@/components/aerodynamic-lines";
import logoAsset from "@/assets/crowden-logo.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Crowden International Search — Elite Engineering Talent" },
      { name: "description", content: "Discrete technical sourcing for Formula 1, aerospace and luxury automotive leadership." },
      { property: "og:title", content: "Crowden International Search" },
      { property: "og:description", content: "Discrete technical sourcing for F1, aerospace and luxury automotive." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="font-display text-[10px] tracking-[0.4em] text-primary uppercase">{children}</p>
);

function Index() {
  return (
    <main className="carbon relative min-h-screen scroll-smooth overflow-hidden">
      <AerodynamicLines />
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <img src={logoAsset.url} alt="Crowden International Search" className="h-8 w-auto sm:h-10" />
        <nav className="flex gap-4 text-[10px] tracking-widest text-muted-foreground uppercase sm:gap-8 sm:text-xs">
          <a href="#about" className="transition hover:text-foreground">About</a><a href="#contact" className="transition hover:text-foreground">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative z-10">
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-32 md:pt-32 md:pb-44">
          <Label>An Expert Boutique · Executive Search</Label>
          <h1 className="font-display text-chrome mt-6 max-w-5xl text-4xl leading-[1.05] font-black tracking-tight uppercase md:text-7xl">
            Delivering at the <span className="text-primary">most senior</span> levels.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Crowden International Search is an expert boutique in Luxury, Automotive Manufacturing & Technology, and F1 & Motorsport — built on longstanding client relationships, growth through recommendation and complete international reach.
          </p>
          <div className="mt-10">
            <a href="#contact" className="glow-blue font-display inline-block bg-primary px-8 py-4 text-center text-xs font-bold tracking-[0.25em] text-primary-foreground uppercase transition hover:brightness-110">Retain Our Firm</a>
          </div>
        </div>
      </section>


      <section id="credentials" aria-labelledby="credentials-heading" className="relative z-10 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <h2 id="credentials-heading" className="font-display text-3xl font-bold uppercase md:text-4xl">Our Credentials</h2>
          <ul className="mt-10 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Longstanding client relationships",
              "Growth through recommendation",
              "Top international brands",
              "Expert in Luxury, Automotive Manufacturing and Technology",
              "Expert in F1 and Motorsport",
              "Wide functional knowledge",
              "Complete International reach",
              "Highly regarded client portfolio",
              "Delivering at the most senior levels.",
            ].map((credential, index) => (
              <li key={credential} className="flex min-h-44 flex-col justify-between gap-6 border border-border bg-card/80 p-6 md:p-8">
                <span aria-hidden="true" className="font-display text-xs text-primary">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-base leading-relaxed text-foreground md:text-lg">{credential}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <Label>01 — About Us</Label>
        <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2">
          <article className="bg-card p-8 md:p-10">
            <h3 className="font-display text-xl font-bold uppercase">Tom Crowden</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">No plain vanilla here! Combining musical education with a career start in music technology equipment working with Apple, Tom is a long time recruiter having learned his values in the family Executive Search business. Starting as a researcher, he has always been drawn to the highly technical areas of resourcing in automotive and F1 and has built an extensive network of engineers of all disciplines.</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">2007 saw him join Odgers Berndtson where he became a very popular for his output and candidate origination, plus the energy he brought to the task. In 2009, he created Autotech Recruitment and delivered projects for both companies and professional recruiting firms, maturing further his network in automotive and F1 technology.</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">In 2017, he re-joined the family company and supported the development of systems and processes as well as providing a deep technology capability. In 2022, The Winchester Partnership became Crowden International Search and Tom now, in addition to his recruitment responsibilities leads the environmental charge towards becoming Carbon Neutral.</p>
          </article>
          <article className="bg-card p-8 md:p-10">
            <h3 className="font-display text-xl font-bold uppercase">Lynne Crowden</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">She describes herself as an industrial museum and without question, her career in automotive, aerospace and engineering has seen the rise, fall and resurrection of automotive in the UK and Europe. She has hired the best for the best with a low boredom threshold that delivers exceptional individuals to do great work. She is essentially an international operator, speaking reasonably fluent French and German. The latter is very much alive through her success in the field of international sport horse breeding, where she has twice won the World Championship for Young Dressage Horses with her breeding programme.</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Her reach sees her regularly sourcing senior players across Europe, the USA and Asia. She works with some of the fastest moving and most demanding business leaders in both start ups and mature businesses, Lynne is hired by the larger auto brands for her creativity and fresh ideas. She works very hard and is totally dedicated to delivering and she takes it all personally.</p>
          </article>
        </div>
      </section>

      <Contact />

      <footer className="relative z-10 border-t border-border">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-10">
          <img src={logoAsset.url} alt="Crowden International Search" className="h-8 w-auto" />
          <span className="font-display text-xs tracking-[0.3em] text-muted-foreground">CROWDEN INTERNATIONAL SEARCH</span>
        </div>
      </footer>
    </main>
  );
}


const EMAIL = "tom@crowdeninternational.com";

function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const t = document.createElement("textarea");
      t.value = EMAIL;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      t.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };
  return (
    <section id="contact" className="relative z-10 scroll-mt-6 border-t border-border">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <Label>Contact</Label>
        <h2 className="font-display mt-4 text-3xl font-black uppercase md:text-5xl">Start a conversation</h2>
        <p className="mt-6 text-muted-foreground">Clients and candidates alike — speak to Tom directly, in complete confidence.</p>
        <a href={`mailto:${EMAIL}`} target="_blank" rel="noreferrer" className="font-display mt-10 block text-lg font-bold break-all text-primary md:text-2xl">{EMAIL}</a>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a href={`mailto:${EMAIL}`} target="_blank" rel="noreferrer" className="glow-blue font-display bg-primary px-8 py-4 text-xs font-bold tracking-[0.25em] text-primary-foreground uppercase transition hover:brightness-110">Email Tom</a>
          <button type="button" onClick={copy} className="font-display border border-primary/60 px-8 py-4 text-xs font-bold tracking-[0.25em] uppercase transition hover:bg-primary">{copied ? "Copied ✓" : "Copy Email Address"}</button>
        </div>
      </div>
    </section>
  );
}
