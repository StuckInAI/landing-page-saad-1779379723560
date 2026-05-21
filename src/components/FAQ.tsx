import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: 'Is there a free plan available?',
    answer:
      'Yes! Our Starter plan is completely free, forever. You get up to 3 projects, 5 team members, and 100 automations per month — no credit card required.',
  },
  {
    question: 'Can I switch plans at any time?',
    answer:
      'Absolutely. You can upgrade, downgrade, or cancel your plan at any time from your account settings. Downgrades take effect at the end of your current billing cycle.',
  },
  {
    question: 'How does the 14-day free trial work?',
    answer:
      'When you start a trial on Pro or Enterprise, you get full access to all features for 14 days. No credit card is required until you decide to subscribe.',
  },
  {
    question: 'What integrations does NexaFlow support?',
    answer:
      'NexaFlow connects with 200+ tools including Slack, GitHub, Jira, Figma, Notion, Salesforce, HubSpot, Zapier, and many more. We also offer a REST API and webhooks for custom integrations.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Security is our top priority. NexaFlow is SOC 2 Type II certified, and all data is encrypted at rest and in transit using AES-256 and TLS 1.3. We also support SSO, MFA, and audit logs on Enterprise plans.',
  },
  {
    question: 'Do you offer discounts for nonprofits or startups?',
    answer:
      'Yes! We offer 50% off for registered nonprofits and early-stage startups (under $1M ARR). Contact our sales team with proof of eligibility to get started.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-4">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Frequently asked questions
          </h2>
          <p className="text-slate-400 text-lg">
            Can't find the answer? <a href="#" className="text-brand-400 hover:text-brand-300">Chat with us →</a>
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className={clsx(
                'rounded-xl border transition-all duration-200',
                open === i
                  ? 'bg-brand-500/5 border-brand-500/30'
                  : 'bg-white/2 border-white/5 hover:border-white/10'
              )}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-white font-medium text-sm pr-4">{faq.question}</span>
                <ChevronDown
                  size={18}
                  className={clsx(
                    'text-slate-400 shrink-0 transition-transform duration-200',
                    open === i && 'rotate-180'
                  )}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
