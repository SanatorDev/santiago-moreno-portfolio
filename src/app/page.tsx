import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, Database, Globe, Server, Users, Zap } from "lucide-react";

const skills = [
  { icon: Code2, label: "React / Next.js" },
  { icon: Server, label: "Node.js / TypeScript" },
  { icon: Database, label: "PostgreSQL / MongoDB" },
  { icon: Globe, label: "REST & GraphQL APIs" },
  { icon: Users, label: "Team Leadership" },
  { icon: Zap, label: "Agile / Remote-First" },
];

const companies = [
  "Disney",
  "Southwest Airlines",
  "Yum Brands!",
  "Veem",
  "Farmalisto",
  "Javeriana University",
];

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-foreground text-background">
        <div className="absolute -right-20 -top-20 h-96 w-96 rotate-45 bg-primary opacity-20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rotate-12 bg-primary opacity-10 blur-3xl" />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-24 text-center sm:py-32">
          <Image
            src="/logo.png"
            alt="SanatorDev logo"
            width={112}
            height={112}
            className="animate-fade-in h-28 w-28 object-contain"
          />
          <div className="animate-fade-in space-y-4" style={{ animationDelay: "0.1s" }}>
            <h1 className="font-display text-5xl font-bold tracking-tight sm:text-7xl">Santiago Moreno</h1>
            <p className="text-lg font-light tracking-wide text-background/70 sm:text-xl">
              Senior Full Stack Developer · <span className="font-medium text-primary">SanatorDev</span>
            </p>
          </div>
          <p
            className="animate-fade-in mx-auto max-w-xl text-base leading-relaxed text-background/60"
            style={{ animationDelay: "0.2s" }}
          >
            10+ years crafting scalable enterprise web applications for global brands. React, Next.js, Node.js,
            TypeScript - from prototype to production.
          </p>
          <div className="animate-fade-in flex gap-4" style={{ animationDelay: "0.3s" }}>
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View Experience <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md border border-background/20 px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-background/10"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-12 text-center font-display text-3xl font-bold text-foreground">
          Core <span className="text-primary">Expertise</span>
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {skills.map(({ icon: Icon, label }, i) => (
            <div
              key={label}
              className="animate-fade-in flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/40"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <Icon size={28} className="text-primary" />
              <span className="text-sm font-medium text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Trusted by global brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {companies.map((name) => (
              <span
                key={name}
                className="font-display text-lg font-semibold text-muted-foreground/60 transition-colors hover:text-primary"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="mb-4 font-display text-3xl font-bold text-foreground">
          Let&apos;s Build Something <span className="text-primary">Great</span>
        </h2>
        <p className="mx-auto mb-8 max-w-md text-muted-foreground">
          Looking for a seasoned engineer to lead your next project? Let&apos;s talk.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Contact Me <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
