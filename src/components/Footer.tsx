import { Zap, Twitter, Github, Linkedin, Youtube } from 'lucide-react';

type FooterGroup = {
  heading: string;
  links: { label: string; href: string }[];
};

const footerGroups: FooterGroup[] = [
  {
    heading: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Changelog', href: '#' },
      { label: 'Roadmap', href: '#' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Integrations', href: '#' },
      { label: 'Status', href: '#' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              <span className="text-lg font-bold text-white">NexaFlow</span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              The workflow platform for modern teams. Build faster, ship smarter, scale further.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { Icon: Twitter, href: '#' },
                { Icon: Github, href: '#' },
                { Icon: Linkedin, href: '#' },
                { Icon: Youtube, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-500 hover:text-white transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerGroups.map((group) => (
            <div key={group.heading}>
              <h4 className="text-white text-sm font-semibold mb-4">{group.heading}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} NexaFlow, Inc. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs">
            Made with ♥ for teams who care about quality
          </p>
        </div>
      </div>
    </footer>
  );
}
