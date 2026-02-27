import { Github, Linkedin, Twitter } from "lucide-react";

const links = [
  {
    icon: Github,
    href: "https://github.com/SantiagoMorenoHidalgo",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/santiagomorenoh/",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://x.com/santiagomorenoh",
    label: "Twitter/X",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted-foreground">© 2026 Santiago Moreno - SanatorDev</p>
        <div className="flex gap-4">
          {links.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
