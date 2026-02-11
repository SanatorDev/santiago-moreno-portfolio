import { SiGithub, SiX } from '@icons-pack/react-simple-icons';
import { ArrowRight, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0a] -z-10" />

      <div className="w-full max-w-3xl flex flex-col items-center text-center space-y-12">
        <div className="rounded-full border border-white/20 px-4 py-1.5 backdrop-blur-sm">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#00ff9d] uppercase">
            Coming Soon
          </span>
        </div>

        <div className="space-y-6">
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl text-white tracking-tight">
            Santiago Moreno
          </h1>

          <h2 className="text-xl sm:text-2xl text-white/60 font-medium tracking-wide">
            Senior Fullstack JavaScript Engineer
          </h2>

          <p className="text-white/40 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            10+ years crafting scalable web applications. Something new is coming.
          </p>
        </div>

        <div className="w-full max-w-md mx-auto">
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="santiago.moreno.se@gmail.com"
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#00ff9d]/50 focus:ring-1 focus:ring-[#00ff9d]/50 transition-all text-sm"
              required
            />

            <button
              type="submit"
              className="bg-[#00ff9d] hover:bg-[#00ff9d]/90 text-black font-semibold rounded-lg px-6 py-3 flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>Notify Me</span>

              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        <div className="flex items-center gap-6 pt-8">
          <a
            href="https://github.com/SantiagoMorenoHidalgo"
            className="p-3 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all group"
            aria-label="GitHub"
          >
            <SiGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>

          <a
            href="https://www.linkedin.com/in/santiagomorenoh/"
            className="p-3 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>

          <a
            href="https://x.com/santiagomorenoh"
            className="p-3 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all group"
            aria-label="X"
          >
            <SiX className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>

      <footer className="absolute bottom-8 text-center">
        <p className="text-white/20 text-xs tracking-wide">
          © {new Date().getFullYear()} Santiago Moreno
        </p>
      </footer>
    </main>
  );
}
