export default function LogoBar() {
  const companies = [
    'Stripe', 'Linear', 'Vercel', 'Notion', 'Figma', 'GitHub', 'Shopify', 'Atlassian',
  ];

  return (
    <section className="py-16 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-sm text-slate-600 uppercase tracking-widest font-medium mb-10">
          Trusted by teams at world-class companies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {companies.map((name) => (
            <div
              key={name}
              className="text-slate-600 hover:text-slate-400 transition-colors duration-200 text-lg font-bold tracking-tight cursor-default"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
