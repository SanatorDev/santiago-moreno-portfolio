"use client";

import { useState } from "react";
import { ArrowRight, BookOpen } from "lucide-react";

export default function CoursesPage() {
  const [email, setEmail] = useState("");
  const [notice, setNotice] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) {
      return;
    }
    setNotice("You're on the list! We'll notify you when courses launch.");
    setEmail("");
  };

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-20 text-center">
      <div className="animate-fade-in mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
        <BookOpen size={36} className="text-primary" />
      </div>
      <h1 className="animate-fade-in mb-4 font-display text-4xl font-bold text-foreground sm:text-5xl">
        Courses <span className="text-primary">Coming Soon</span>
      </h1>
      <p className="animate-fade-in mx-auto mb-10 max-w-md text-muted-foreground">
        I&apos;m building in-depth courses on full stack development, React architecture, and engineering leadership.
        Be the first to know when they drop.
      </p>
      <form onSubmit={handleSubmit} className="animate-fade-in flex w-full max-w-sm gap-2">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="h-11 flex-1 rounded-md border border-border bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground outline-none ring-primary/30 transition focus:ring-2"
        />
        <button
          type="submit"
          className="inline-flex h-11 items-center gap-1.5 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Notify Me <ArrowRight size={16} />
        </button>
      </form>
      {notice ? <p className="mt-4 text-sm text-primary">{notice}</p> : null}
    </div>
  );
}
