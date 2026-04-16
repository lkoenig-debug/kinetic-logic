import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Shield, Brain, Server, Code, Database } from 'lucide-react';
import ServiceCard from '../components/services/ServiceCard';
import ServiceModal from '../components/services/ServiceModal';

const SERVICES = [
  {
    icon: Cloud,
    category: 'Cloud',
    title: 'Cloud Architektur',
    description: 'Maßgeschneiderte Cloud-Lösungen auf AWS, Azure und GCP. Migration, Optimierung und Multi-Cloud-Strategien für maximale Skalierbarkeit.',
    details: [
      'Cloud-Migrations­strategien von On-Premise zu AWS, Azure oder Google Cloud',
      'Multi-Cloud- und Hybrid-Cloud-Architekturen für maximale Ausfallsicherheit',
      'Kostenoptimierung und automatisches Ressourcen-Scaling (FinOps)',
      'Infrastructure as Code mit Terraform und Pulumi',
      'Serverless-Architekturen und containerbasierte Deployments',
      'Beratung zu Cloud-Sicherheit und Compliance (ISO 27001, SOC 2)',
    ],
  },
  {
    icon: Shield,
    category: 'Security',
    title: 'Cybersecurity',
    description: 'Ganzheitliche Sicherheitsarchitekturen. Penetration Testing, Zero-Trust-Implementierung und 24/7 Security Operations Center.',
    details: [
      'Penetration Testing und Schwachstellenanalysen nach aktuellen Standards',
      'Implementierung von Zero-Trust-Netzwerkarchitekturen',
      '24/7 Security Operations Center (SOC) mit Echtzeit-Monitoring',
      'Incident Response und forensische Analyse im Ernstfall',
      'Aufbau von SIEM-Systemen (Splunk, Microsoft Sentinel)',
      'Schulungen und Security-Awareness-Programme für Ihre Mitarbeiter',
    ],
  },
  {
    icon: Brain,
    category: 'Künstliche Intelligenz',
    title: 'AI & Machine Learning',
    description: 'Von der Konzeption bis zur Produktion. Wir entwickeln intelligente Systeme, die Ihre Geschäftsprozesse transformieren.',
    details: [
      'Entwicklung maßgeschneiderter Machine-Learning-Modelle für Ihre Branche',
      'Predictive Analytics und Anomalieerkennung in Echtzeit',
      'Natural Language Processing (NLP) und Dokumentenverarbeitung',
      'MLOps: Automatisierte Modell-Pipelines und Monitoring in der Produktion',
      'Integration von Large Language Models (LLMs) in bestehende Systeme',
      'Computer Vision für industrielle Qualitätssicherung und Prozessautomatisierung',
    ],
  },
  {
    icon: Server,
    category: 'Infrastructure',
    title: 'Infrastructure Engineering',
    description: 'Hochverfügbare, resiliente Infrastrukturen. Kubernetes, Terraform und automatisierte DevOps-Pipelines.',
    details: [
      'Design und Betrieb von Kubernetes-Clustern (EKS, AKS, GKE, on-premise)',
      'Aufbau vollständig automatisierter CI/CD-Pipelines (GitHub Actions, GitLab CI)',
      'Site Reliability Engineering (SRE) und SLA-Optimierung',
      'Monitoring und Observability mit Prometheus, Grafana und OpenTelemetry',
      'Disaster Recovery und Business Continuity Planning',
      'Kapazitätsplanung und Performance-Optimierung für kritische Systeme',
    ],
  },
  {
    icon: Code,
    category: 'Development',
    title: 'Software Development',
    description: 'Moderne Softwarearchitektur mit Microservices, Event-Driven Design und performantem Frontend-Engineering.',
    details: [
      'Microservice-Architekturen mit klaren Domänengrenzen (DDD)',
      'Event-Driven Systems mit Apache Kafka und RabbitMQ',
      'API-Design und -Entwicklung (REST, GraphQL, gRPC)',
      'Hochperformante Frontend-Entwicklung mit React und TypeScript',
      'Code-Reviews, Architekturberatung und technische Due Diligence',
      'Legacy-Systemmodernisierung und schrittweise Refactoring-Strategien',
    ],
  },
  {
    icon: Database,
    category: 'Data',
    title: 'Data Engineering',
    description: 'Echtzeit-Datenarchitekturen, Data Lakes und Business Intelligence Plattformen für datengetriebene Entscheidungen.',
    details: [
      'Aufbau skalierbarer Data Lakes und Data Warehouses (Snowflake, BigQuery, Redshift)',
      'Echtzeit-Datenpipelines mit Apache Spark und Apache Flink',
      'Datenintegration und ETL/ELT-Prozesse aus heterogenen Quellsystemen',
      'Business Intelligence Dashboards und Self-Service Analytics',
      'Datenstrategie, Data Governance und DSGVO-konforme Datenarchitektur',
      'Verarbeitung von über 2 Millionen Events pro Sekunde in produktiven Umgebungen',
    ],
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

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
              LEISTUNGEN
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
              <ServiceCard
                key={service.title}
                {...service}
                index={i}
                onClick={() => setSelectedService(service)}
              />
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

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
}