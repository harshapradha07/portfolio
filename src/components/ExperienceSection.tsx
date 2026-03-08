import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { Briefcase } from "lucide-react";

const experiences = [
  { company: "Internshala Trainings", role: "Web Development Intern", desc: "Worked on responsive web pages and backend functionality using Node.js and MongoDB." },
  { company: "Data Valley", role: "Flutter Development Intern", desc: "Developed cross-platform mobile applications using Flutter and Dart." },
];

const ExperienceSection = () => (
  <SectionWrapper id="experience">
    <SectionTitle title="Experience" subtitle="Internship & Training" />
    <div className="max-w-2xl mx-auto space-y-6">
      {experiences.map((e, i) => (
        <motion.div
          key={e.company}
          className="glass-card p-6 flex gap-4 items-start"
          initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
        >
          <Briefcase className="text-secondary shrink-0 mt-1" size={22} />
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">{e.company}</h3>
            <p className="text-primary/70 text-sm font-heading mb-2">{e.role}</p>
            <p className="text-sm text-muted-foreground font-body">{e.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default ExperienceSection;
