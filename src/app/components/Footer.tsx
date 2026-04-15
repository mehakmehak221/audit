import { Mail, Github, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Maxtron Security Labs
            </div>
            <p className="text-gray-500 mb-6 leading-relaxed max-w-md">
              Enterprise-grade smart contract security audits for blockchain protocols.
              <span className="block mt-2 text-gray-600 text-sm">A division of Maxtron Innovation Pvt Ltd.</span>
            </p>
            <div className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors group">
              <Mail className="w-4 h-4 group-hover:text-blue-500 transition-colors" />
              <a href="mailto:support@maxtron.io" className="font-mono text-sm">
                support@maxtron.io
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="font-mono text-xs text-gray-600 mb-4 uppercase tracking-wider">Services</div>
            <ul className="space-y-3 text-sm">
              {['Security Audits', 'Gas Optimization', 'Penetration Testing', 'Retainer'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors inline-flex items-center gap-2 group">
                    <span className="text-gray-800 group-hover:text-blue-500 transition-colors">›</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <div className="font-mono text-xs text-gray-600 mb-4 uppercase tracking-wider">Resources</div>
            <ul className="space-y-3 text-sm">
              {['Audit Reports', 'Methodology', 'Security Checklist', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors inline-flex items-center gap-2 group">
                    <span className="text-gray-800 group-hover:text-blue-500 transition-colors">›</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-600 font-mono">
            © 2026 Maxtron Security Labs
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: Twitter, href: '#' },
              { icon: Github, href: '#' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-600 hover:text-blue-500 hover:border-blue-500 transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-blue-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}