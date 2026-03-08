import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { Shield, Linkedin } from "lucide-react";

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

    {/* LinkedIn CTA */}
    <a
      href="https://www.linkedin.com/in/chintala-k-l-s-harshapradha-35a1b6299/"
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card mt-6 p-4 max-w-3xl mx-auto flex items-center gap-3 hover:border-primary/40 transition-all group"
      style={{ borderColor: "hsl(210 80% 55% / 0.25)", boxShadow: "0 0 12px hsl(210 80% 55% / 0.1)" }}
    >
      <Linkedin className="shrink-0 group-hover:scale-110 transition-transform" size={20} style={{ color: "hsl(210 80% 60%)" }} />
      <p className="text-sm text-muted-foreground font-body">
        Connect with me on LinkedIn to view my professional experience, certifications, and cybersecurity journey.
      </p>
    </a>
  </SectionWrapper>
);

export default AboutSection;
