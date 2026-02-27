import { ArrowRight } from "lucide-react";

export default function ComingSoon() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a0a] px-6 text-center text-white">
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#da291c]/30 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#da291c]/20 blur-3xl" />

      <section className="relative w-full max-w-2xl space-y-8">
        <p className="inline-flex rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#f7b733]">
          Coming Soon
        </p>

        <div className="space-y-4">
          <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl">Santiago Moreno</h1>
          <p className="text-lg text-white/70 sm:text-xl">
            Senior Full Stack Developer <span className="text-[#da291c]">· SanatorDev</span>
          </p>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
            A new portfolio experience is currently in progress. Enable the feature flag to access the full site.
          </p>
        </div>

        <a
          href="mailto:santiago.moreno.se@gmail.com"
          className="inline-flex items-center gap-2 rounded-md bg-[#da291c] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#b51f15]"
        >
          Contact Santiago <ArrowRight size={16} />
        </a>
      </section>
    </div>
  );
}
