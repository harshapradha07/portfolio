import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { AlertTriangle, MapPin, Monitor, ShieldAlert, GitBranch } from "lucide-react";

const projects = [
  { icon: AlertTriangle, title: "Alert Wise", subtitle: "Natural Calamity Alert System", desc: "Location-based alert system that notifies users about natural disasters using geolocation APIs." },
  { icon: MapPin, title: "Clean Map", subtitle: "Water & Sanitation Reporting Platform", desc: "Interactive web application allowing users to report sanitation issues on a map using Google Maps API." },
  { icon: Monitor, title: "MU Showdown Watch", subtitle: "Real-time Monitoring Dashboard", desc: "Real-time monitoring dashboard using Python and APIs for performance tracking." },
  { icon: ShieldAlert, title: "Vulnerability Assessment", subtitle: "Exploit Simulation", desc: "Cybersecurity project demonstrating vulnerability detection and exploit simulations." },
  { icon: GitBranch, title: "Login–Signup DevOps", subtitle: "CI/CD Application", desc: "Web application integrated with Git, Jenkins, and Docker for automated build and deployment." },
];

const ProjectsSection = () => (
  <SectionWrapper id="projects">
    <SectionTitle title="Projects" subtitle="What I've Built" />
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <motion.div
          key={p.title}
          className="glass-card p-6 group hover:border-primary/40 transition-all duration-300 cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -6, boxShadow: "0 0 25px hsl(190 90% 50% / 0.2)" }}
        >
          <p.icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={28} />
          <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{p.title}</h3>
          <p className="text-xs text-primary/70 font-heading mb-3">{p.subtitle}</p>
          <p className="text-sm text-muted-foreground font-body leading-relaxed">{p.desc}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
