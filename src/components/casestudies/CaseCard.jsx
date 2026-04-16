import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function CaseCard({ title, category, metric, image, large, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`group relative overflow-hidden border border-border/20 bg-card/20 backdrop-blur-sm cursor-pointer hover:border-primary/30 transition-all duration-500 ${
        large ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      <div className="relative h-full min-h-[240px]">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end h-full">
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-2">
            {category}
          </p>
          <h3 className="font-heading font-semibold text-lg md:text-xl text-foreground tracking-tight mb-2">
            {title}
          </h3>
          <p className="font-mono text-xs text-muted-foreground">{metric}</p>
          <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="font-mono text-xs text-primary">Mehr erfahren</span>
            <ArrowUpRight size={12} className="text-primary" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}