import { CheckCircle2 } from 'lucide-react';

type Step = {
  number: string;
  title: string;
  description: string;
  bullets: string[];
};

const steps: Step[] = [
  {
    number: '01',
    title: 'Connect Your Tools',
    description:
      'Integrate with the apps your team already uses in minutes. No coding required.',
    bullets: ['One-click OAuth integrations', '200+ supported apps', 'Custom webhook support'],
  },
  {
    number: '02',
    title: 'Design Your Workflow',
    description:
      'Use our visual builder to map out processes and set automation triggers with ease.',
    bullets: ['Drag-and-drop builder', 'Conditional logic & branching', 'Templates library'],
  },
  {
    number: '03',
    title: 'Launch & Optimize',
    description:
      'Go live instantly and watch real-time metrics improve as your automation does the work.',
    bullets: ['Real-time monitoring', 'AI-powered suggestions', 'One-click rollback'],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-4">
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Up and running in minutes
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            From sign-up to first automation in under 5 minutes. We mean it.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-brand-500/40 via-accent-500/20 to-transparent" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`flex flex-col md:flex-row items-start gap-8 ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content side */}
                <div className="flex-1 card-glow rounded-2xl p-8">
                  <div className="text-6xl font-black text-brand-500/20 leading-none mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">{step.description}</p>
                  <ul className="space-y-2">
                    {step.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-3 text-slate-300 text-sm">
                        <CheckCircle2 size={16} className="text-brand-400 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual side */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-brand-500/20 to-accent-500/10 border border-brand-500/20 flex items-center justify-center">
                    <span className="text-7xl font-black gradient-text">{step.number}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
