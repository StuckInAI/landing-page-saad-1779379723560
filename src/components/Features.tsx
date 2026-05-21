import { Zap, Shield, BarChart3, GitBranch, Users, Sparkles } from 'lucide-react';
import clsx from 'clsx';

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag?: string;
  large?: boolean;
};

const features: Feature[] = [
  {
    icon: <Zap size={22} />,
    title: 'Lightning Fast Automation',
    description:
      'Set up powerful automations in minutes, not hours. Connect your tools and let NexaFlow handle the repetitive work so your team can focus on high-impact tasks.',
    tag: 'New',
    large: true,
  },
  {
    icon: <BarChart3 size={22} />,
    title: 'Real-Time Analytics',
    description:
      "Get instant visibility into your team's performance with beautiful, actionable dashboards.",
  },
  {
    icon: <Shield size={22} />,
    title: 'Enterprise Security',
    description:
      'SOC 2 Type II certified with end-to-end encryption. Your data is always safe.',
  },
  {
    icon: <GitBranch size={22} />,
    title: '200+ Integrations',
    description:
      'Connect with Slack, GitHub, Jira, Figma, and hundreds more tools your team already uses.',
    large: true,
  },
  {
    icon: <Users size={22} />,
    title: 'Collaborative Workspaces',
    description:
      'Real-time collaboration with comments, mentions, and live cursors. Work together seamlessly.',
  },
  {
    icon: <Sparkles size={22} />,
    title: 'AI-Powered Insights',
    description:
      'Our AI surfaces blockers, predicts delays, and suggests optimizations before problems arise.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-900/5 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Features
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Everything your team needs
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            A complete platform for modern teams — from startups to enterprise.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={clsx(
                'card-glow rounded-2xl p-6 transition-all duration-300 cursor-default',
                feature.large && 'md:col-span-2'
              )}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-500/15 border border-brand-500/20 flex items-center justify-center text-brand-400">
                  {feature.icon}
                </div>
                {feature.tag && (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400">
                    {feature.tag}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>

              {/* Decorative bottom accent for large cards */}
              {feature.large && (
                <div className="mt-6 h-1 rounded-full bg-gradient-to-r from-brand-500/40 via-accent-500/40 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
