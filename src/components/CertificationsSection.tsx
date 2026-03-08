import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { Award } from "lucide-react";

const certs = [
  "Python for Data Science – NPTEL",
  "Internet Crimes and Cyber Security",
  "Cyber Security Fundamentals",
  "AI and Emerging Technologies",
  "Ethical Hacking and Penetration Testing",
];

const CertificationsSection = () => (
  <SectionWrapper id="certifications">
    <SectionTitle title="Certifications" />
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
      {certs.map((c, i) => (
        <motion.div
          key={c}
          className="glass-card p-4 flex items-center gap-3 hover:border-secondary/40 transition-all"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          whileHover={{ scale: 1.02 }}
        >
          <Award className="text-secondary shrink-0" size={18} />
          <span className="text-sm text-foreground/85 font-body">{c}</span>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default CertificationsSection;
