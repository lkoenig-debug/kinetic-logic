import { motion } from 'framer-motion';
import TimelineMilestone from '../components/about/TimelineMilestone';

const MILESTONES = [
  { year: '2009', title: 'Gründung in Berlin', description: 'Zwei Ingenieure mit einer Vision: Technologie als Kunst zu behandeln. Beginn als kleines Consulting-Unternehmen.' },
  { year: '2012', title: 'Erster Enterprise-Kunde', description: 'Großprojekt zur Serverinfrastruktur-Migration für einen DAX-Konzern. Team wächst auf 12 Personen.' },
  { year: '2015', title: 'Cloud-First Transformation', description: 'Strategischer Pivot zu Cloud-nativen Lösungen. Partnerschaften mit AWS und Azure.' },
  { year: '2018', title: 'AI Division gegründet', description: 'Aufbau einer spezialisierten Machine-Learning-Abteilung. Erste eigene KI-Produkte.' },
  { year: '2021', title: 'Internationales Wachstum', description: 'Expansion nach Zürich und Amsterdam. 50+ Ingenieure, 200+ erfolgreiche Projekte.' },
  { year: '2024', title: 'Next-Gen Platform Launch', description: 'Launch unserer proprietären Infrastruktur-Plattform. Neue Maßstäbe für automatisierte IT-Operations.' },
];

const VALUES = [
  { label: 'Präzision', value: 'Jedes Detail zählt. Wir liefern technische Exzellenz, keine Kompromisse.' },
  { label: 'Zuverlässigkeit', value: 'Unsere Kunden können sich jederzeit auf uns verlassen — pünktlich, konsistent und mit höchster Servicequalität.' },
  { label: 'Transparenz', value: 'Klare Kommunikation, ehrliche Einschätzungen, messbare Ergebnisse.' },
];

export default function About() {
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
              // Das Kollektiv
            </p>
            <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter text-foreground leading-none">
              ÜBER UNS
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Large Typography Section */}
      <section className="px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-semibold text-2xl md:text-4xl lg:text-5xl text-foreground tracking-tight leading-tight max-w-4xl"
          >
            Wir sind ein Kollektiv aus <span className="text-primary">3 IT Fachkräften </span>, 
            die glauben, dass digitale Infrastruktur mehr sein kann als nur{' '}
            <span className="text-primary">funktional</span>.
          </motion.p>
        </div>
      </section>

      {/* Image */}
      <section className="px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            <img
              src="https://media.base44.com/images/public/69e098da45036498ae153306/c012c9d3f_WIN_20260417_09_39_56_Pro.jpg"
              alt="Team Mitglied von Stahl Computer Systemhaus"
              className="w-full h-48 md:h-72 object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-12">
            // Unsere Werte
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-t border-border/30 pt-6"
              >
                <h3 className="font-heading font-semibold text-xl text-foreground tracking-tight mb-2">
                  {v.label}
                </h3>
                <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                  {v.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-12">
            // Timeline der Innovation
          </p>
          <div className="max-w-2xl">
            {MILESTONES.map((m, i) => (
              <TimelineMilestone key={m.year} {...m} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}