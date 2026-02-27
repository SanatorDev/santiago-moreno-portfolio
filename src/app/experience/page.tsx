import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    company: "Veem",
    role: "Senior Full Stack Developer",
    period: "2022 - Present",
    description: "Leading frontend architecture and API integrations for a global B2B payments platform.",
    icon: Briefcase,
  },
  {
    company: "Disney (via Globant)",
    role: "Senior Full Stack Developer",
    period: "2020 - 2022",
    description:
      "Built and maintained large-scale streaming and content management applications for Disney's global ecosystem.",
    icon: Briefcase,
  },
  {
    company: "Southwest Airlines (via Globant)",
    role: "Full Stack Developer",
    period: "2019 - 2020",
    description: "Developed customer-facing booking tools and internal dashboards for one of the largest US airlines.",
    icon: Briefcase,
  },
  {
    company: "Yum Brands!",
    role: "Full Stack Developer",
    period: "2018 - 2019",
    description: "Built ordering and operations tools powering thousands of restaurant locations worldwide.",
    icon: Briefcase,
  },
  {
    company: "Farmalisto",
    role: "Full Stack Developer",
    period: "2016 - 2018",
    description: "Developed e-commerce and logistics platforms for Latin America's largest online pharmacy.",
    icon: Briefcase,
  },
  {
    company: "Javeriana University",
    role: "Systems Engineering",
    period: "2012 - 2016",
    description:
      "Bachelor's degree in Systems Engineering with a focus on software architecture and distributed systems.",
    icon: GraduationCap,
  },
];

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-4 text-center font-display text-4xl font-bold text-foreground sm:text-5xl">
        Professional <span className="text-primary">Experience</span>
      </h1>
      <p className="mb-16 text-center text-muted-foreground">
        10+ years building enterprise-grade applications for world-class companies.
      </p>

      <div className="relative">
        <div className="absolute left-6 top-0 h-full w-px bg-border sm:left-1/2" />

        <div className="space-y-12">
          {timeline.map(({ company, role, period, description, icon: Icon }, i) => (
            <div
              key={company}
              className={`animate-fade-in relative flex flex-col gap-4 pl-16 sm:w-1/2 sm:pl-0 ${
                i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:ml-auto sm:pl-12"
              }`}
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div
                className={`absolute left-4 top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-background sm:left-auto ${
                  i % 2 === 0 ? "sm:-right-2.5" : "sm:-left-2.5"
                }`}
              >
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>

              <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30">
                <div className={`mb-2 flex items-center gap-2 ${i % 2 === 0 ? "sm:justify-end" : ""}`}>
                  <Icon size={16} className="text-primary" />
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">{period}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">{company}</h3>
                <p className="text-sm font-medium text-muted-foreground">{role}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground/80">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
