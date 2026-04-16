import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/30 bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-3">
              NEXUS<span className="text-primary">.</span>LOGIC
            </h3>
            <p className="font-mono text-xs text-muted-foreground leading-relaxed max-w-xs">
              Wir architekturieren die unsichtbare Infrastruktur, die Ihr Unternehmen antreibt.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm text-foreground mb-3 uppercase tracking-wider">Navigation</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'Case Studies', path: '/case-studies' },
                { label: 'Über Uns', path: '/about' },
                { label: 'Kontakt', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm text-foreground mb-3 uppercase tracking-wider">Kontakt</h4>
            <div className="flex flex-col gap-2 font-mono text-xs text-muted-foreground">
              <span>info@nexuslogic.de</span>
              <span>+49 30 123 456 789</span>
              <span>Berlin, Deutschland</span>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} NEXUS.LOGIC — Alle Rechte vorbehalten.
          </span>
          <div className="flex gap-4">
            <span className="font-mono text-xs text-muted-foreground hover:text-primary cursor-pointer transition-colors">Impressum</span>
            <span className="font-mono text-xs text-muted-foreground hover:text-primary cursor-pointer transition-colors">Datenschutz</span>
          </div>
        </div>
      </div>
    </footer>
  );
}