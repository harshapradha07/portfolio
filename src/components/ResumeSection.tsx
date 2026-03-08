import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { Download, Eye, FileText } from "lucide-react";

const RESUME_PATH = "/assets/CH_K_L_S_Harshapradha_Resume.pdf";

const ResumeSection = () => (
  <SectionWrapper id="resume">
    <SectionTitle title="My Resume" subtitle="Download my professional resume" />

    <div className="max-w-2xl mx-auto text-center mb-8">
      <p className="text-muted-foreground font-body text-base leading-relaxed">
        Download my professional resume to learn more about my education, skills, cybersecurity projects, internships, and certifications.
      </p>
    </div>

    <motion.div
      className="glass-card neon-glow max-w-lg mx-auto p-8 text-center group"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ boxShadow: "0 0 35px hsl(190 90% 50% / 0.35), 0 0 60px hsl(190 90% 50% / 0.15)" }}
      transition={{ duration: 0.4 }}
    >
      <div className="mx-auto mb-5 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
        <FileText className="text-primary" size={32} />
      </div>

      <h3 className="font-heading text-xl font-semibold text-foreground mb-1">CH K L S Harshapradha</h3>
      <p className="text-xs text-muted-foreground font-body mb-6">PDF Document • Resume</p>

      <div className="flex flex-wrap justify-center gap-3">
        <a
          href={RESUME_PATH}
          download="CH_K_L_S_Harshapradha_Resume.pdf"
          className="glass-card neon-glow px-6 py-3 font-heading text-sm tracking-wider text-primary hover:bg-primary/10 hover:scale-105 transition-all flex items-center gap-2"
        >
          <Download size={16} /> Download Resume
        </a>
        <a
          href={RESUME_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card neon-glow-purple px-6 py-3 font-heading text-sm tracking-wider text-secondary hover:bg-secondary/10 hover:scale-105 transition-all flex items-center gap-2"
        >
          <Eye size={16} /> View Resume
        </a>
      </div>
    </motion.div>
  </SectionWrapper>
);

export default ResumeSection;
