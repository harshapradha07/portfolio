import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { Shield } from "lucide-react";

const AboutSection = () => (
  <SectionWrapper id="about">
    <SectionTitle title="About Me" />
    <div className="glass-card p-8 md:p-12 max-w-3xl mx-auto neon-glow">
      <div className="flex items-start gap-4">
        <Shield className="text-primary mt-1 shrink-0" size={28} />
        <p className="text-foreground/85 leading-relaxed font-body text-base md:text-lg">
          Detail-oriented Computer Science undergraduate specializing in Cyber Security with strong foundations in secure software development, networking, cloud platforms, and vulnerability analysis. Passionate about building secure applications and exploring ethical hacking, DevOps, and AI-driven security solutions.
        </p>
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
