import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-12">
    <motion.h2
      className="font-display text-3xl md:text-4xl font-bold gradient-text mb-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
    {subtitle && <p className="text-muted-foreground font-body text-lg">{subtitle}</p>}
    <div className="w-20 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
  </div>
);

export default SectionTitle;
