import { Linkedin, Github, Mail } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/chintala-k-l-s-harshapradha-35a1b6299/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/harshapradha07", label: "GitHub" },
  { icon: Mail, href: "mailto:harshapradhakundan@gmail.com", label: "Email" },
];

const Footer = () => (
  <footer className="relative z-10 border-t border-glass-border py-8">
    <div className="flex justify-center gap-5 mb-4">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target={s.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          aria-label={s.label}
          className="glass-card p-2.5 rounded-full text-muted-foreground hover:text-primary hover:neon-glow transition-all hover:scale-110"
        >
          <s.icon size={18} />
        </a>
      ))}
    </div>
    <p className="font-display text-xs tracking-widest text-muted-foreground text-center">
      © 2026 CH K L S Harshapradha
    </p>
    <p className="text-xs text-primary/50 font-heading mt-1 text-center">Cyber Security Portfolio</p>
  </footer>
);

export default Footer;
