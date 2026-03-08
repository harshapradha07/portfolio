import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { Shield, Network, Bug, Cloud, Container, Brain } from "lucide-react";

const interests = [
  { icon: Shield, label: "Cyber Security" },
  { icon: Network, label: "Network Security" },
  { icon: Bug, label: "Ethical Hacking" },
  { icon: Cloud, label: "Cloud Security" },
  { icon: Container, label: "DevOps" },
  { icon: Brain, label: "AI in Security" },
];

const InterestsSection = () => (
  <SectionWrapper id="interests">
    <SectionTitle title="Interests" />
    <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
      {interests.map((item, i) => (
        <motion.div
          key={item.label}
          className="glass-card px-5 py-3 flex items-center gap-2 hover:neon-glow transition-all cursor-default"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          whileHover={{ scale: 1.05 }}
        >
          <item.icon className="text-primary" size={18} />
          <span className="font-heading text-sm text-foreground/85">{item.label}</span>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default InterestsSection;
