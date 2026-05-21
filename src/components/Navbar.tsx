import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import clsx from 'clsx';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center shadow-lg shadow-brand-500/30">
            <Zap size={16} className="text-white" />
          </div>
          <span className="text-lg font-bold text-white tracking-tight">NexaFlow</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="text-sm text-slate-400 hover:text-white transition-colors px-4 py-2"
          >
            Sign In
          </a>
          <a
            href="#pricing"
            className="btn-primary text-sm font-semibold text-white px-5 py-2.5 rounded-lg"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0d0d18]/98 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-slate-300 hover:text-white transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="border-t border-white/5 pt-4 flex flex-col gap-3">
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
              Sign In
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileOpen(false)}
              className="btn-primary text-sm font-semibold text-white px-5 py-2.5 rounded-lg text-center"
            >
              Get Started Free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
