import AnimatedSection from "./AnimatedSection";
import { Beaker, ShieldCheck, LifeBuoy, Droplets, Eye, Volume2 } from "lucide-react";

const projects = [
  {
    icon: Beaker,
    title: "ChemStudio",
    desc: "AI-powered virtual chemistry lab",
    meta: "7,000+ users · 25+ countries",
    tags: ["AI", "EdTech", "Web"],
    live: true,
  },
  {
    icon: ShieldCheck,
    title: "AuraGuard",
    desc: "Safe Driving System recognized by NASA",
    tags: ["Embedded", "IoT", "Road Safety"],
  },
  {
    icon: LifeBuoy,
    title: "Uddhar",
    desc: "Flood rescue digital platform",
    meta: "10,000+ users · 150+ volunteers",
    tags: ["Social Impact", "Web"],
    live: true,
  },
  {
    icon: Droplets,
    title: "HydroPlasmaX",
    desc: "AI-based portable water quality tester",
    tags: ["Hardware", "AI", "Environment"],
  },
  {
    icon: Eye,
    title: "NavEye",
    desc: "Hands-free eye-tracking computer navigation",
    tags: ["HCI", "Accessibility"],
  },
  {
    icon: Volume2,
    title: "Sound Pollution Monitor",
    desc: "Area-based sound tracking system",
    tags: ["IoT", "Environment"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding max-w-6xl mx-auto">
    <AnimatedSection>
      <h2 className="font-heading text-3xl md:text-5xl font-bold mb-16 text-gradient inline-block">Projects & Ventures</h2>
    </AnimatedSection>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <AnimatedSection key={p.title} delay={i * 0.08}>
          <div className="glass-card p-6 h-full hover:border-primary/30 transition-all hover:glow-blue group">
            <div className="flex items-start justify-between mb-4">
              <p.icon className="w-8 h-8 text-primary group-hover:text-neon-violet transition-colors" />
              {p.live && (
                <span className="text-[10px] font-body font-semibold uppercase tracking-wider bg-primary/15 text-primary px-2 py-0.5 rounded-full">
                  Live
                </span>
              )}
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-1">{p.title}</h3>
            <p className="text-sm text-muted-foreground font-body mb-1">{p.desc}</p>
            {p.meta && <p className="text-xs text-primary/80 font-body mb-4">{p.meta}</p>}
            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              {p.tags.map((t) => (
                <span key={t} className="text-[10px] font-body uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2.5 py-0.5">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
