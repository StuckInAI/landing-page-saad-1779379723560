import { ArrowRight, Play, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background glows */}
      <div className="hero-glow absolute inset-0 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-sm font-medium mb-8">
          <Star size={14} className="fill-brand-400" />
          <span>Trusted by 50,000+ teams worldwide</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
          Build Faster,
          <br />
          <span className="gradient-text">Ship Smarter.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          NexaFlow unifies your team's workflows, automates the repetitive, and gives you
          real-time clarity so you can focus on what actually moves the needle.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#pricing"
            className="btn-primary inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl text-base shadow-xl"
          >
            Start Free Trial
            <ArrowRight size={18} />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white font-medium px-8 py-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200 text-base"
          >
            <Play size={16} className="fill-current" />
            Watch Demo
          </a>
        </div>

        {/* Social proof row */}
        <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
          <div className="flex -space-x-2">
            {['#6366f1', '#8b5cf6', '#ec4899', '#06b6d4', '#10b981'].map((color, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-[#0a0a0f] flex items-center justify-center text-xs font-bold text-white"
                style={{ backgroundColor: color }}
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <span>
            <span className="text-white font-semibold">4.9/5</span> from 2,400+ reviews
          </span>
        </div>

        {/* Hero illustration / dashboard mockup */}
        <div className="mt-16 relative animate-float">
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-brand-500/10">
            {/* Fake browser bar */}
            <div className="bg-[#1a1a2e] px-4 py-3 flex items-center gap-2 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 mx-4 bg-white/5 rounded-md px-3 py-1 text-xs text-slate-500 text-left">
                app.nexaflow.io/dashboard
              </div>
            </div>
            {/* Dashboard content mockup */}
            <div className="bg-[#0d0d1a] p-6 min-h-64">
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'Active Projects', value: '24', color: 'brand-500' },
                  { label: 'Tasks Done Today', value: '138', color: 'green-500' },
                  { label: 'Team Members', value: '12', color: 'accent-500' },
                ].map((stat) => (
                  <div key={stat.label} className="card-glow rounded-xl p-4">
                    <div className={`text-2xl font-bold text-white mb-1`}>{stat.value}</div>
                    <div className="text-xs text-slate-500">{stat.label}</div>
                    <div className="mt-2 h-1 rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: '65%',
                          background: stat.color === 'brand-500'
                            ? 'linear-gradient(90deg, #6366f1, #8b5cf6)'
                            : stat.color === 'green-500'
                            ? 'linear-gradient(90deg, #10b981, #34d399)'
                            : 'linear-gradient(90deg, #8b5cf6, #ec4899)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-5 gap-1 mb-4">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 50, 78, 88, 62].map((h, i) => (
                  <div key={i} className="flex items-end h-20">
                    <div
                      className="w-full rounded-t-sm"
                      style={{
                        height: `${h}%`,
                        background: 'linear-gradient(180deg, #6366f1 0%, rgba(99,102,241,0.3) 100%)',
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                {['Design System', 'API Integration', 'User Research', 'QA Testing'].map((task) => (
                  <div key={task} className="flex-1 bg-white/3 rounded-lg px-3 py-2">
                    <div className="w-full h-1.5 bg-white/5 rounded-full mb-2">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
                        style={{ width: `${Math.random() * 60 + 30}%` }}
                      />
                    </div>
                    <div className="text-xs text-slate-500">{task}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
