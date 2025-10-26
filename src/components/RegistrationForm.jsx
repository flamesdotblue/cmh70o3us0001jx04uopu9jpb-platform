import { useState } from 'react';

export default function RegistrationForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    type: 'Consumer',
    consent: false,
    company: '',
    specialty: '',
  });

  const [submitting, setSubmitting] = useState(false);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.consent) {
      alert('Please fill your name, email, and accept the consent.');
      return;
    }
    setSubmitting(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 800));
    alert(`Thanks, ${form.name}! You are registered as ${form.type}. We'll email you studies soon.`);
    setSubmitting(false);
    setForm({ name: '', email: '', type: 'Consumer', consent: false, company: '', specialty: '' });
  };

  return (
    <section id="register" className="relative py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold text-white">Register to join the panel</h2>
            <p className="mt-3 text-slate-300/90">
              Create your profile in minutes. Our AI will start matching you to relevant studies so you can earn more, faster.
            </p>
            <ul className="mt-6 space-y-2 text-slate-300/90 text-sm list-disc ml-5">
              <li>Free to join, no obligations</li>
              <li>Transparent study invitations</li>
              <li>Fast payouts with industry-leading rates</li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid grid-cols-1 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm text-slate-300 mb-1">Full name</label>
                <input id="name" name="name" type="text" value={form.name} onChange={onChange} className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/60" placeholder="Alex Johnson" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-slate-300 mb-1">Email</label>
                <input id="email" name="email" type="email" value={form.email} onChange={onChange} className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/60" placeholder="you@example.com" />
              </div>

              <div>
                <label htmlFor="type" className="block text-sm text-slate-300 mb-1">I am a</label>
                <select id="type" name="type" value={form.type} onChange={onChange} className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/60">
                  <option>Consumer</option>
                  <option>B2B</option>
                  <option>Healthcare</option>
                </select>
              </div>

              {form.type === 'B2B' && (
                <div>
                  <label htmlFor="company" className="block text-sm text-slate-300 mb-1">Company / Role</label>
                  <input id="company" name="company" type="text" value={form.company} onChange={onChange} className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/60" placeholder="e.g., Ops Manager at Acme" />
                </div>
              )}

              {form.type === 'Healthcare' && (
                <div>
                  <label htmlFor="specialty" className="block text-sm text-slate-300 mb-1">Specialty</label>
                  <input id="specialty" name="specialty" type="text" value={form.specialty} onChange={onChange} className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/60" placeholder="e.g., Cardiology, Nursing" />
                </div>
              )}

              <div className="flex items-start gap-3">
                <input id="consent" name="consent" type="checkbox" checked={form.consent} onChange={onChange} className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-900/60 text-cyan-500 focus:ring-cyan-500" />
                <label htmlFor="consent" className="text-sm text-slate-300/90">
                  I agree to the panel Terms and acknowledge the Privacy Policy.
                </label>
              </div>

              <button type="submit" disabled={submitting} className="inline-flex items-center justify-center rounded-lg bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 text-slate-950 font-medium px-5 py-3 transition">
                {submitting ? 'Submitting…' : 'Create my profile'}
              </button>

              <p className="text-xs text-slate-400">We only use your information to match studies. You can request deletion anytime.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
