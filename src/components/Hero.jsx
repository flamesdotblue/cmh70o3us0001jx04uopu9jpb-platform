import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[680px] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/40 to-slate-950" />

      <div className="relative z-10 container mx-auto h-full px-6 flex items-center">
        <div className="max-w-3xl pointer-events-none">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/15 px-3 py-1 pointer-events-auto">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            <span className="text-xs text-cyan-100">Highest rewards. Smart matching. Real impact.</span>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight bg-gradient-to-br from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
            Join the AI-matched Insight Panel
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-200/90">
            Consumers, B2B professionals, and Healthcare experts share insights for premium rewards. Our AI matches your profile to the right studies so you get more surveys that matter.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3 pointer-events-auto">
            <a href="#register" className="inline-flex items-center justify-center rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-medium px-5 py-3 transition">
              Get Started
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/15 ring-1 ring-white/15 text-white px-5 py-3 transition">
              How it works
            </a>
          </div>
          <div className="mt-6 text-sm text-slate-300/80">
            Trusted by thousands of panelists. Zero cost to join.
          </div>
        </div>
      </div>
    </section>
  );
}
