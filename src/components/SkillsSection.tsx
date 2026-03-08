import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const categories = [
  {
    title: "Languages",
    items: ["C", "Java", "Python", "HTML", "CSS", "SQL"],
  },
  {
    title: "Technologies",
    items: ["Linux", "Windows", "Google Cloud Platform", "MySQL", "Docker", "Kubernetes", "VirtualBox", "Git", "Jenkins", "VS Code"],
  },
  {
    title: "Core Knowledge",
    items: ["OOPS", "DBMS", "Computer Networks", "Operating Systems", "Cyber Security"],
  },
];

const SkillsSection = () => (
  <SectionWrapper id="skills">
    <SectionTitle title="Skills" subtitle="Technologies & Expertise" />
    <div className="grid md:grid-cols-3 gap-6">
      {categories.map((cat, ci) => (
        <motion.div
          key={cat.title}
          className="glass-card p-6 hover:neon-glow transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: ci * 0.15 }}
          whileHover={{ y: -4 }}
        >
          <h3 className="font-heading text-xl font-semibold text-primary mb-4">{cat.title}</h3>
          <div className="flex flex-wrap gap-2">
            {cat.items.map((item) => (
              <span key={item} className="bg-muted/60 text-foreground/80 text-xs px-3 py-1.5 rounded-full border border-glass-border font-body">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
