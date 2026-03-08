import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { GraduationCap } from "lucide-react";

const education = [
  { school: "Vignan's Institute of Engineering for Women", degree: "B.Tech Computer Science (Cyber Security)", score: "CGPA: 8.36" },
  { school: "Sri Chaitanya Junior College", degree: "Intermediate MPC", score: "80%" },
];

const EducationSection = () => (
  <SectionWrapper id="education">
    <SectionTitle title="Education" />
    <div className="max-w-2xl mx-auto space-y-6">
      {education.map((e, i) => (
        <motion.div
          key={e.school}
          className="glass-card p-6 flex gap-4 items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
        >
          <GraduationCap className="text-primary shrink-0 mt-1" size={24} />
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">{e.school}</h3>
            <p className="text-sm text-muted-foreground font-body">{e.degree}</p>
            <p className="text-primary font-heading font-semibold mt-1">{e.score}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default EducationSection;
