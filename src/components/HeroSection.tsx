import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";

const HeroSection = () => (
  <section id="hero" className="relative z-10 min-h-screen flex items-center justify-center px-4">
    <div className="text-center max-w-4xl mx-auto">
      {/* Profile Image */}
      <motion.div
        className="mx-auto mb-8 w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden float-animation"
        style={{
          boxShadow: "0 0 30px hsl(190 90% 50% / 0.4), 0 0 60px hsl(190 90% 50% / 0.15), 0 20px 40px rgba(0,0,0,0.5)",
          border: "3px solid hsl(190 90% 50% / 0.5)",
        }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <img src={profileImg} alt="CH K L S Harshapradha" className="w-full h-full object-cover" />
      </motion.div>

      <motion.h1
        className="font-display text-3xl sm:text-5xl md:text-6xl font-bold mb-3 gradient-text"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        CH K L S Harshapradha
      </motion.h1>

      <motion.p
        className="font-heading text-lg sm:text-xl md:text-2xl text-primary/80 mb-4 tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Computer Science Undergraduate | Cyber Security Specialist
      </motion.p>

      <motion.p
        className="text-muted-foreground text-base md:text-lg mb-10 max-w-xl mx-auto font-body"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        "Building secure, intelligent, and scalable digital solutions."
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <a href="#projects" className="glass-card neon-glow px-6 py-3 font-heading text-sm tracking-wider text-primary hover:bg-primary/10 transition-all flex items-center gap-2">
          <ArrowDown size={16} /> View Projects
        </a>
        <a href="#contact" className="glass-card neon-glow-purple px-6 py-3 font-heading text-sm tracking-wider text-secondary hover:bg-secondary/10 transition-all flex items-center gap-2">
          <Mail size={16} /> Contact Me
        </a>
        <a href="/assets/CH_K_L_S_Harshapradha_Resume.pdf" download="CH_K_L_S_Harshapradha_Resume.pdf" className="glass-card neon-glow px-6 py-3 font-heading text-sm tracking-wider text-primary hover:bg-primary/10 hover:scale-105 transition-all flex items-center gap-2">
          <Download size={16} /> Download Resume
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
