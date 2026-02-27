import { ArrowRight, Calendar, Clock } from "lucide-react";

const posts = [
  {
    title: "Building Scalable React Applications with Module Federation",
    excerpt:
      "How micro-frontends helped us scale our team at Disney while maintaining code quality and developer experience.",
    date: "Feb 15, 2026",
    readTime: "8 min read",
    tag: "Architecture",
  },
  {
    title: "TypeScript Patterns I Use in Every Project",
    excerpt:
      "From discriminated unions to branded types - practical TypeScript patterns that make your code safer and more expressive.",
    date: "Jan 28, 2026",
    readTime: "6 min read",
    tag: "TypeScript",
  },
  {
    title: "Leading Remote Engineering Teams: Lessons from 5 Years",
    excerpt: "What I've learned about communication, async workflows, and building trust across time zones.",
    date: "Jan 10, 2026",
    readTime: "10 min read",
    tag: "Leadership",
  },
  {
    title: "PostgreSQL Performance Tips for Full Stack Developers",
    excerpt: "Practical indexing strategies, query optimization, and connection pooling patterns I've applied in production.",
    date: "Dec 20, 2025",
    readTime: "7 min read",
    tag: "Backend",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-4 text-center font-display text-4xl font-bold text-foreground sm:text-5xl">
        <span className="text-primary">Blog</span>
      </h1>
      <p className="mb-16 text-center text-muted-foreground">Thoughts on engineering, architecture, and leadership.</p>

      <div className="space-y-6">
        {posts.map(({ title, excerpt, date, readTime, tag }, i) => (
          <article
            key={title}
            className="animate-fade-in group cursor-pointer rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
            style={{ animationDelay: `${0.1 * i}s` }}
          >
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{tag}</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar size={12} /> {date}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock size={12} /> {readTime}
              </span>
            </div>
            <h2 className="mb-2 font-display text-xl font-bold text-foreground transition-colors group-hover:text-primary">
              {title}
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{excerpt}</p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-transform group-hover:translate-x-1">
              Read more <ArrowRight size={14} />
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}
