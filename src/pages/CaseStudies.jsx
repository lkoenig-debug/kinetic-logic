import { motion } from 'framer-motion';
import CaseCard from '../components/casestudies/CaseCard';

const CASES = [
  {
    title: 'Cloud-Migration für FinTech Scale-Up',
    category: 'Cloud Architektur',
    metric: '99.99% Uptime · 40% Kostenreduktion',
    image: 'https://media.base44.com/images/public/69e098da45036498ae153306/313766bdb_generated_233f3ce2.png',
    large: true,
  },
  {
    title: 'Zero-Trust Security Framework',
    category: 'Cybersecurity',
    metric: '0 Breaches seit Implementierung',
    image: 'https://media.base44.com/images/public/69e098da45036498ae153306/8b319da88_generated_19ef9002.png',
    large: false,
  },
  {
    title: 'AI-Powered Predictive Maintenance',
    category: 'Machine Learning',
    metric: '67% weniger Ausfallzeiten',
    image: 'https://media.base44.com/images/public/69e098da45036498ae153306/f259f0ade_generated_c9f7e710.png',
    large: false,
  },
  {
    title: 'Real-Time Data Pipeline',
    category: 'Data Engineering',
    metric: '2M Events/Sekunde verarbeitet',
    image: 'https://media.base44.com/images/public/69e098da45036498ae153306/02ba76791_generated_2005ce80.png',
    large: false,
  },
  {
    title: 'Kubernetes Platform Engineering',
    category: 'Infrastructure',
    metric: '300+ Microservices orchestriert',
    image: 'https://media.base44.com/images/public/69e098da45036498ae153306/eb263d807_generated_c77ed98c.png',
    large: true,
  },
  {
    title: 'E-Commerce Plattform Rewrite',
    category: 'Software Development',
    metric: '3x schnellere Ladezeiten',
    image: 'https://media.base44.com/images/public/69e098da45036498ae153306/313766bdb_generated_233f3ce2.png',
    large: false,
  },
];

export default function CaseStudies() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-xs text-primary tracking-widest uppercase mb-4">
              // Der Beweis
            </p>
            <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter text-foreground leading-none">
              CASE STUDIES
            </h1>
            <p className="font-mono text-sm text-muted-foreground mt-6 max-w-xl leading-relaxed">
              Zahlen lügen nicht. Entdecken Sie, wie wir komplexe technische 
              Herausforderungen in messbare Ergebnisse verwandeln.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {CASES.map((c, i) => (
              <CaseCard key={c.title} {...c} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}