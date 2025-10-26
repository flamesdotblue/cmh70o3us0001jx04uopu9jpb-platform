import { Brain, ShieldCheck, Gift, Building2, User, Stethoscope } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.07] transition">
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-cyan-500/10" />
    <div className="relative flex items-start gap-4">
      <div className="rounded-xl bg-cyan-500/15 text-cyan-300 p-3">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm text-slate-300/90">{desc}</p>
      </div>
    </div>
  </div>
);

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 -z-[0] pointer-events-none bg-[radial-gradient(50%_50%_at_50%_0%,rgba(34,211,238,0.15)_0%,rgba(15,23,42,0)_60%)]" />
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-semibold text-white">Built for every profile</h2>
          <p className="mt-3 text-slate-300/90">
            Whether you are a consumer, a business decision-maker, or a healthcare professional, our platform ensures relevant studies and top rewards.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={User} title="Consumers" desc="Share your everyday opinions on products, services, and digital experiences." />
          <FeatureCard icon={Building2} title="B2B Professionals" desc="Give targeted insights on tools, workflows, and purchasing decisions." />
          <FeatureCard icon={Stethoscope} title="Healthcare" desc="Clinicians and healthcare workers inform better patient and industry outcomes." />
          <FeatureCard icon={Brain} title="AI Matching" desc="Our AI pairs you with the best-fit studies so you never run out of surveys." />
          <FeatureCard icon={ShieldCheck} title="Privacy First" desc="Enterprise-grade security with transparent consent and data controls." />
          <FeatureCard icon={Gift} title="Top Rewards" desc="Earn the highest rewards in the industry with fast, reliable payouts." />
        </div>
      </div>
    </section>
  );
}
