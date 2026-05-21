import { Star } from 'lucide-react';

type Testimonial = {
  name: string;
  role: string;
  company: string;
  initials: string;
  color: string;
  quote: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'Head of Engineering',
    company: 'Cloudify',
    initials: 'SC',
    color: '#6366f1',
    quote:
      'NexaFlow cut our sprint ceremony time in half. The automation workflows are genuinely magical — we shipped 40% more features last quarter.',
    rating: 5,
  },
  {
    name: 'Marcus Rodriguez',
    role: 'CTO',
    company: 'Buildstack',
    initials: 'MR',
    color: '#8b5cf6',
    quote:
      'I've tried every PM tool out there. NexaFlow is the first one that actually gets out of my team's way. The AI insights are scary accurate.',
    rating: 5,
  },
  {
    name: 'Priya Nair',
    role: 'Product Lead',
    company: 'Openlayer',
    initials: 'PN',
    color: '#ec4899',
    quote:
      'Onboarding our 120-person org took less than a week. The migration from our old tools was painless and the support team is world-class.',
    rating: 5,
  },
  {
    name: 'James Okafor',
    role: 'Engineering Manager',
    company: 'Netspire',
    initials: 'JO',
    color: '#06b6d4',
    quote:
      'The real-time analytics dashboard transformed how we run standups. Blockers surface automatically now — it's changed everything.',
    rating: 5,
  },
  {
    name: 'Lena Müller',
    role: 'VP of Product',
    company: 'Helix Labs',
    initials: 'LM',
    color: '#10b981',
    quote:
      'We were skeptical at first, but NexaFlow paid for itself in the first month. The ROI calculator in their dashboard is chef's kiss.',
    rating: 5,
  },
  {
    name: 'Tom Walsh',
    role: 'Founder',
    company: 'Codestream',
    initials: 'TW',
    color: '#f59e0b',
    quote:
      'As a solo founder scaling to a team of 20, NexaFlow gave me the infrastructure of a much bigger company without the overhead.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-500/3 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Loved by 50,000+ teams
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Don't take our word for it. Here's what real users have to say.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="card-glow rounded-2xl p-6 flex flex-col gap-4">
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              {/* Quote */}
              <p className="text-slate-300 text-sm leading-relaxed flex-1">"{t.quote}"</p>
              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-slate-500">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
