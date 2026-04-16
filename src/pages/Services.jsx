import { motion } from 'framer-motion';
import { Cloud, Shield, Brain, Server, Code, Database } from 'lucide-react';
import ServiceCard from '../components/services/ServiceCard';

const SERVICES = [
  {
    icon: Cloud,
    title: 'Cloud Architektur',
    description: 'Maßgeschneiderte Cloud-Lösungen auf AWS, Azure und GCP. Migration, Optimierung und Multi-Cloud-Strategien für maximale Skalierbarkeit.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Ganzheitliche Sicherheitsarchitekturen. Penetration Testing, Zero-Trust-Implementierung und 24/7 Security Operations Center.',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Von der Konzeption bis zur Produktion. Wir entwickeln intelligente Systeme, die Ihre Geschäftsprozesse transformieren.',
  },
  {
    icon: Server,
    title: 'Infrastructure Engineering',
    description: 'Hochverfügbare, resiliente Infrastrukturen. Kubernetes, Terraform und automatisierte DevOps-Pipelines.',
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Moderne Softwarearchitektur mit Microservices, Event-Driven Design und performantem Frontend-Engineering.',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Echtzeit-Datenarchitekturen, Data Lakes und Business Intelligence Plattformen für datengetriebene Entscheidungen.',
  },
];

export default function Services() {
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
              // Das Ökosystem
            </p>
            <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter text-foreground leading-none">
              SERVICES
            </h1>
            <p className="font-mono text-sm text-muted-foreground mt-6 max-w-xl leading-relaxed">
              Sechs Disziplinen. Ein Ziel. Wir verbinden modernste Technologien 
              zu nahtlosen Lösungen, die Ihr Unternehmen voranbringen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/20">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            <img
              src="https://media.base44.com/images/public/69e098da45036498ae153306/f259f0ade_generated_c9f7e710.png"
              alt="Abstract crystalline data cluster representing IT solutions"
              className="w-full h-64 md:h-80 object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-heading font-bold text-3xl md:text-5xl text-foreground tracking-tighter text-center">
                Technologie<span className="text-primary">.</span> Strategie<span className="text-primary">.</span> Exzellenz<span className="text-primary">.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}