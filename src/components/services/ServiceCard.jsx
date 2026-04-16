import { motion } from 'framer-motion';

export default function ServiceCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative p-8 border border-border/30 bg-card/30 backdrop-blur-xl hover:border-primary/30 transition-all duration-500 hover:bg-transparent"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="w-10 h-10 flex items-center justify-center border border-border/50 mb-6 group-hover:border-primary/50 transition-colors">
          <Icon size={18} className="text-primary" />
        </div>
        <h3 className="font-heading font-semibold text-lg text-foreground mb-3 tracking-tight">
          {title}
        </h3>
        <p className="font-mono text-xs text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}