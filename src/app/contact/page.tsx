"use client";

import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [notice, setNotice] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotice("Message sent! Thanks for reaching out. I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-4 text-center font-display text-4xl font-bold text-foreground sm:text-5xl">
        Get in <span className="text-primary">Touch</span>
      </h1>
      <p className="mb-16 text-center text-muted-foreground">Have a project in mind? Let&apos;s talk about how I can help.</p>

      <div className="grid gap-12 md:grid-cols-2">
        <div className="animate-fade-in space-y-8">
          <div>
            <h2 className="mb-6 font-display text-2xl font-bold text-foreground">Let&apos;s Connect</h2>
            <p className="leading-relaxed text-muted-foreground">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <p className="text-sm text-muted-foreground">hello@sanatordev.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <MapPin size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Location</p>
                <p className="text-sm text-muted-foreground">Available Worldwide - Remote</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="animate-fade-in space-y-4" style={{ animationDelay: "0.15s" }}>
          <input
            placeholder="Your name"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            required
            className="h-11 w-full rounded-md border border-border bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground outline-none ring-primary/30 transition focus:ring-2"
          />
          <input
            type="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            required
            className="h-11 w-full rounded-md border border-border bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground outline-none ring-primary/30 transition focus:ring-2"
          />
          <textarea
            placeholder="Tell me about your project..."
            value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })}
            required
            rows={5}
            className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none ring-primary/30 transition focus:ring-2"
          />
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Send Message <Send size={16} />
          </button>
          {notice ? <p className="text-sm text-primary">{notice}</p> : null}
        </form>
      </div>
    </div>
  );
}
