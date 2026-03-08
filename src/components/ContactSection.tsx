import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "harshapradhakundan@gmail.com", href: "mailto:harshapradhakundan@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91-9966681484", href: "tel:+919966681484" },
  { icon: Linkedin, label: "LinkedIn", value: "LinkedIn Profile", href: "https://www.linkedin.com/in/chintala-k-l-s-harshapradha-35a1b6299/" },
  { icon: Github, label: "GitHub", value: "github.com/harshapradha07", href: "https://github.com/harshapradha07" },
];

const ContactSection = () => (
  <SectionWrapper id="contact">
    <SectionTitle title="Contact" subtitle="Let's Connect" />
    <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
      {contacts.map((c, i) => (
        <motion.a
          key={c.label}
          href={c.href}
          target={c.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="glass-card p-5 flex items-center gap-4 hover:border-primary/40 hover:neon-glow transition-all group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -3 }}
        >
          <c.icon className="text-primary group-hover:scale-110 transition-transform" size={22} />
          <div>
            <p className="text-xs text-muted-foreground font-body">{c.label}</p>
            <p className="text-sm text-foreground font-heading">{c.value}</p>
          </div>
        </motion.a>
      ))}
    </div>
  </SectionWrapper>
);

export default ContactSection;
