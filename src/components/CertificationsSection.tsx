import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { Award, Shield, Brain, Cloud, Bug, Settings, Terminal, Network, Container, ExternalLink } from "lucide-react";

const certs = [
  { name: "Python for Data Science", issuer: "NPTEL", icon: Terminal, badge: "🐍 Python", desc: "Python programming, data analysis, and scientific computing.", color: "primary" },
  { name: "Internet Crimes & Cyber Security", issuer: "Online Certification", icon: Shield, badge: "🛡 Cyber Security", desc: "Understanding cybercrime techniques and digital investigation.", color: "secondary" },
  { name: "Cyber Security Fundamentals", issuer: "Online Certification", icon: Shield, badge: "🛡 Cyber Security", desc: "Network security, encryption, and threat mitigation.", color: "primary" },
  { name: "AI and Emerging Technologies", issuer: "Online Certification", icon: Brain, badge: "🤖 AI", desc: "AI applications and intelligent systems.", color: "secondary" },
  { name: "Ethical Hacking & Penetration Testing", issuer: "Online Certification", icon: Bug, badge: "🔐 Ethical Hacking", desc: "Security testing and vulnerability exploitation techniques.", color: "primary" },
  { name: "Introduction to Cloud Computing", issuer: "Google Cloud / Cloud Training", icon: Cloud, badge: "☁ Cloud", desc: "Cloud infrastructure, deployment, and scalability.", color: "secondary" },
  { name: "DevOps Fundamentals", issuer: "Online Certification", icon: Settings, badge: "⚙ DevOps", desc: "CI/CD pipelines, automation, and containerized deployment.", color: "primary" },
  { name: "Docker & Containerization Basics", issuer: "Online Certification", icon: Container, badge: "⚙ DevOps", desc: "Building, deploying, and managing containerized applications.", color: "secondary" },
  { name: "Linux System Administration Basics", issuer: "Online Certification", icon: Terminal, badge: "🐧 Linux", desc: "Linux commands, system management, and server configuration.", color: "primary" },
  { name: "Networking Basics for Cyber Security", issuer: "Online Certification", icon: Network, badge: "🛡 Cyber Security", desc: "TCP/IP, network protocols, firewall concepts, packet analysis.", color: "secondary" },
];

const CertificationsSection = () => (
  <SectionWrapper id="certifications">
    <SectionTitle title="Certifications & Achievements" subtitle="Professional Development & Credentials" />
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {certs.map((c, i) => (
        <motion.div
          key={c.name}
          className={`glass-card p-5 group relative overflow-hidden transition-all duration-300 hover:border-${c.color === "primary" ? "primary" : "secondary"}/40`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07, duration: 0.5 }}
          whileHover={{ y: -5, boxShadow: c.color === "primary" ? "0 0 25px hsl(190 90% 50% / 0.25)" : "0 0 25px hsl(260 60% 55% / 0.25)" }}
        >
          {/* Animated border glow */}
          <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
            style={{
              background: c.color === "primary"
                ? "linear-gradient(135deg, hsl(190 90% 50% / 0.08), transparent, hsl(190 90% 50% / 0.05))"
                : "linear-gradient(135deg, hsl(260 60% 55% / 0.08), transparent, hsl(260 60% 55% / 0.05))"
            }}
          />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className={`p-2 rounded-lg bg-${c.color === "primary" ? "primary" : "secondary"}/10 group-hover:bg-${c.color === "primary" ? "primary" : "secondary"}/20 transition-colors`}>
                <c.icon className={c.color === "primary" ? "text-primary" : "text-secondary"} size={20} />
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-muted/60 border border-glass-border font-body">
                {c.badge}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-heading text-base font-semibold text-foreground mb-1 leading-tight">{c.name}</h3>
            <p className={`text-xs font-heading mb-3 ${c.color === "primary" ? "text-primary/60" : "text-secondary/60"}`}>
              <Award className="inline-block mr-1" size={12} />
              {c.issuer}
            </p>

            {/* Description */}
            <p className="text-xs text-muted-foreground font-body leading-relaxed mb-4">{c.desc}</p>

            {/* View Credential */}
            <button className={`text-xs font-heading flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${c.color === "primary" ? "text-primary/70 hover:text-primary" : "text-secondary/70 hover:text-secondary"}`}>
              <ExternalLink size={12} /> View Credential
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default CertificationsSection;
