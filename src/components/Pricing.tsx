import { Check, X } from 'lucide-react';
import clsx from 'clsx';
import { useState } from 'react';

type Plan = {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  description: string;
  features: { text: string; included: boolean }[];
  cta: string;
  highlighted: boolean;
  badge?: string;
};

const plans: Plan[] = [
  {
    name: 'Starter',
    monthlyPrice: '$0',
    annualPrice: '$0',
    description: 'Perfect for individuals and small side projects.',
    features: [
      { text: 'Up to 3 projects', included: true },
      { text: '5 team members', included: true },
      { text: '100 automations/month', included: true },
      { text: 'Basic analytics', included: true },
      { text: 'Email support', included: true },
      { text: 'AI insights', included: false },
      { text: 'Custom integrations', included: false },
      { text: 'SSO / SAML', included: false },
    ],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    monthlyPrice: '$29',
    annualPrice: '$19',
    description: 'For growing teams that need more power and collaboration.',
    features: [
      { text: 'Unlimited projects', included: true },
      { text: 'Unlimited team members', included: true },
      { text: '10,000 automations/month', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Priority support', included: true },
      { text: 'AI insights', included: true },
      { text: 'Custom integrations', included: false },
      { text: 'SSO / SAML', included: false },
    ],
    cta: 'Start Free Trial',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    monthlyPrice: '$99',
    annualPrice: '$79',
    description: 'For large organizations that need control, security, and scale.',
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'Unlimited automations', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'Custom SLA', included: true },
      { text: '24/7 phone support', included: true },
      { text: 'AI insights', included: true },
      { text: 'Custom integrations', included: true },
      { text: 'SSO / SAML', included: true },
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-900/5 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8">
            No hidden fees. No surprises. Cancel anytime.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-3 bg-white/5 rounded-xl p-1.5">
            <button
              onClick={() => setAnnual(false)}
              className={clsx(
                'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                !annual ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={clsx(
                'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2',
                annual ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'
              )}
            >
              Annual
              <span className="text-xs bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded-full">
                Save 35%
              </span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={clsx(
                'rounded-2xl p-7 flex flex-col transition-all duration-300 relative',
                plan.highlighted
                  ? 'bg-gradient-to-b from-brand-500/20 to-accent-500/10 border border-brand-500/50 shadow-xl shadow-brand-500/10'
                  : 'card-glow'
              )}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-brand-500 to-accent-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-slate-500 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-5xl font-extrabold text-white">
                  {annual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className="text-slate-500 text-sm ml-2">/month</span>
                {annual && plan.monthlyPrice !== '$0' && (
                  <div className="text-xs text-slate-600 mt-1">
                    billed annually · was {plan.monthlyPrice}/mo
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-center gap-3 text-sm">
                    {f.included ? (
                      <Check size={16} className="text-green-400 shrink-0" />
                    ) : (
                      <X size={16} className="text-slate-700 shrink-0" />
                    )}
                    <span className={f.included ? 'text-slate-300' : 'text-slate-600'}>
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={clsx(
                  'text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200',
                  plan.highlighted
                    ? 'btn-primary text-white'
                    : 'border border-white/10 text-slate-300 hover:border-brand-500/40 hover:text-white'
                )}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Enterprise note */}
        <p className="text-center text-sm text-slate-600 mt-8">
          Need a custom plan? <a href="#" className="text-brand-400 hover:text-brand-300">Talk to sales →</a>
        </p>
      </div>
    </section>
  );
}
