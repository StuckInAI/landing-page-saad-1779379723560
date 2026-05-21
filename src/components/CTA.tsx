import { ArrowRight, Zap } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-500/10 via-accent-500/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-500/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-sm font-medium mb-8">
          <Zap size={14} className="fill-brand-400" />
          <span>Start for free — no credit card required</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          Ready to move
          <br />
          <span className="gradient-text">10x faster?</span>
        </h2>

        <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
          Join 50,000+ teams already using NexaFlow to build better products, faster. Try it free
          for 14 days.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="btn-primary inline-flex items-center gap-2 text-white font-semibold px-10 py-4 rounded-xl text-base shadow-xl"
          >
            Start Free Trial
            <ArrowRight size={18} />
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-white transition-colors text-base font-medium"
          >
            Talk to sales →
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '50K+', label: 'Teams' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '2.4s', label: 'Avg. load time' },
            { value: '4.9★', label: 'App Store rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
