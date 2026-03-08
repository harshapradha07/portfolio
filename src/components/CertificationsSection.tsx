import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { Award, Shield, Brain, Cloud, Bug, Settings, Terminal, Network, Container, ExternalLink, X, BadgeCheck } from "lucide-react";
import isc2CertImg from "@/assets/isc2-cert.png";

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

const CertificationsSection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <SectionWrapper id="certifications">
      <SectionTitle title="Certifications & Achievements" subtitle="Professional Development & Credentials" />

      {/* Featured ISC2 Certification */}
      <motion.div
        className="glass-card mb-10 overflow-hidden group relative cursor-pointer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.5 }}
        style={{
          boxShadow: "0 0 20px hsl(160 80% 45% / 0.2), 0 0 40px hsl(190 90% 50% / 0.1)",
          border: "1px solid hsl(160 80% 45% / 0.3)",
        }}
      >
        {/* Featured badge */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-neon-teal/15 border border-neon-teal/30 text-neon-teal px-3 py-1 rounded-full text-xs font-heading tracking-wider">
          <BadgeCheck size={14} /> Featured
        </div>

        {/* Glow overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: "linear-gradient(135deg, hsl(160 80% 45% / 0.06), transparent, hsl(190 90% 50% / 0.04))" }}
        />

        <div className="flex flex-col md:flex-row">
          {/* Content */}
          <div className="p-6 md:p-8 flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs px-2.5 py-1 rounded-full bg-neon-teal/10 border border-neon-teal/25 font-body text-neon-teal">🛡 ISC2 Certified</span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 border border-primary/25 font-body text-primary">🔐 Cybersecurity Professional</span>
            </div>

            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-1">
              Certified in Cybersecurity (CC)
            </h3>
            <p className="text-sm font-heading text-neon-teal/70 mb-4 flex items-center gap-1.5">
              <Shield size={14} /> ISC2 – International Information System Security Certification Consortium
            </p>

            <p className="text-sm text-muted-foreground font-body leading-relaxed mb-5">
              The ISC2 Certified in Cybersecurity (CC) certification demonstrates foundational knowledge in cybersecurity principles including network security, security operations, risk management, and access control.
            </p>

            {/* Details grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              {[
                { label: "Certified", value: "CH K L S Harshapradha" },
                { label: "Cert. Number", value: "1480740" },
                { label: "Since", value: "2026" },
                { label: "Valid Until", value: "Mar 4, 2029" },
              ].map((d) => (
                <div key={d.label} className="bg-muted/40 rounded-lg px-3 py-2 border border-glass-border">
                  <p className="text-[10px] text-muted-foreground font-body uppercase tracking-wider">{d.label}</p>
                  <p className="text-xs text-foreground font-heading font-semibold mt-0.5">{d.value}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setLightboxOpen(true)}
              className="text-xs font-heading flex items-center gap-1.5 text-neon-teal/70 hover:text-neon-teal transition-colors"
            >
              <ExternalLink size={12} /> View Certificate
            </button>
          </div>
        </div>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              className="relative max-w-3xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute -top-3 -right-3 z-10 glass-card p-2 rounded-full text-foreground hover:text-primary transition-colors"
              >
                <X size={18} />
              </button>
              <img
                src={isc2CertImg}
                alt="ISC2 CC Certificate"
                className="w-full rounded-xl neon-glow"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Other certifications grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certs.map((c, i) => (
          <motion.div
            key={c.name}
            className={`glass-card p-5 group relative overflow-hidden transition-all duration-300`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.5 }}
            whileHover={{ y: -5, boxShadow: c.color === "primary" ? "0 0 25px hsl(190 90% 50% / 0.25)" : "0 0 25px hsl(260 60% 55% / 0.25)" }}
          >
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: c.color === "primary"
                  ? "linear-gradient(135deg, hsl(190 90% 50% / 0.08), transparent, hsl(190 90% 50% / 0.05))"
                  : "linear-gradient(135deg, hsl(260 60% 55% / 0.08), transparent, hsl(260 60% 55% / 0.05))"
              }}
            />
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-3">
                <div className={`p-2 rounded-lg ${c.color === "primary" ? "bg-primary/10 group-hover:bg-primary/20" : "bg-secondary/10 group-hover:bg-secondary/20"} transition-colors`}>
                  <c.icon className={c.color === "primary" ? "text-primary" : "text-secondary"} size={20} />
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-muted/60 border border-glass-border font-body">{c.badge}</span>
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground mb-1 leading-tight">{c.name}</h3>
              <p className={`text-xs font-heading mb-3 ${c.color === "primary" ? "text-primary/60" : "text-secondary/60"}`}>
                <Award className="inline-block mr-1" size={12} />{c.issuer}
              </p>
              <p className="text-xs text-muted-foreground font-body leading-relaxed mb-4">{c.desc}</p>
              <button className={`text-xs font-heading flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${c.color === "primary" ? "text-primary/70 hover:text-primary" : "text-secondary/70 hover:text-secondary"}`}>
                <ExternalLink size={12} /> View Credential
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default CertificationsSection;
