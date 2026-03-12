import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Beaker, ShieldCheck, LifeBuoy, Droplets, Eye, Volume2, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const projects = [
  {
    icon: Beaker,
    title: "ChemStudio",
    desc: "AI-powered virtual chemistry lab",
    meta: "7,000+ users · 25+ countries",
    tags: ["AI", "EdTech", "Web"],
    live: true,
    link: "https://chemstudio.xyz",
    details:
      "Founded ChemStudio, an AI-powered virtual chemistry lab reaching 7,000+ users in 25+ countries. Built 118 element simulations with AI explanations, scaling globally to make labs accessible for underprivileged students.",
    role: "Founder & Project Lead",
    year: "2025–Present",
  },
  {
    icon: ShieldCheck,
    title: "AuraGuard",
    desc: "Safe Driving System recognized by NASA",
    tags: ["Embedded", "IoT", "Road Safety"],
    details:
      "An all-in-one road safety device for drivers, recognized by NASA. The system performs real-time driver behavior analysis and hazard alerting using low-cost, universally compatible embedded hardware. Published research in IJISRT.",
    role: "Lead Engineer & Researcher",
    year: "2023–2024",
  },
  {
    icon: LifeBuoy,
    title: "Uddhar",
    desc: "Flood rescue digital platform",
    meta: "20,000+ users · 150+ volunteers",
    tags: ["Social Impact", "Web"],
    live: true,
    link: "https://uddhar.com",
    details:
      "Co-founded and directed a digital platform (WebApp, Social Media, Ground Team) to connect victims and rescuers during the '24 floods. Tracked needs, shelter locations, and missing persons, reaching 20,000+ users and aiding 500+ families with 150+ volunteers.",
    role: "Co-Founder & CEO",
    year: "2025–Present",
  },
  {
    icon: Droplets,
    title: "HydroPlasmaX",
    desc: "AI-based portable water quality tester",
    tags: ["Hardware", "AI", "Environment"],
    details:
      "Co-engineered a portable AI-based rapid water quality tester. The device uses plasma spectroscopy and machine learning to analyze water quality in real-time, making clean water testing accessible in remote areas.",
    role: "Co-Engineer",
    year: "2024",
  },
  {
    icon: Eye,
    title: "NavEye",
    desc: "Hands-free eye-tracking computer navigation",
    tags: ["HCI", "Accessibility"],
    link: "https://www.naveye.site/",
    details:
      "Developed a hands-free scrolling system via eye tracking — using your eye as a 3rd hand for computer navigation. Designed for accessibility and assistive technology applications.",
    role: "Developer",
    year: "2024",
  },
  {
    icon: Volume2,
    title: "Sound Pollution Monitor",
    desc: "Area-based sound tracking system",
    tags: ["IoT", "Environment"],
    details:
      "A system to monitor, track, and indicate sound pollution of a certain area. Uses IoT sensors and data visualization to map noise levels and alert authorities when thresholds are exceeded.",
    role: "Project Lead",
    year: "2023",
  },
];

const ProjectsSection = () => {
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  return (
    <section id="projects" className="section-padding max-w-6xl mx-auto">
      <AnimatedSection>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-16 text-gradient inline-block">
          Projects & Ventures
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.08}>
            <button
              onClick={() => setSelected(p)}
              className="glass-card p-6 h-full hover:border-primary/30 transition-all hover:glow-blue group text-left w-full cursor-pointer"
            >
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
                  <span
                    key={t}
                    className="text-[10px] font-body uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2.5 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </button>
          </AnimatedSection>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="glass-card border-border bg-card/95 backdrop-blur-2xl max-w-lg">
          {selected && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <selected.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <DialogTitle className="font-heading text-xl text-foreground">
                      {selected.title}
                    </DialogTitle>
                    <p className="text-xs text-muted-foreground font-body">
                      {selected.role} · {selected.year}
                    </p>
                  </div>
                  {selected.live && (
                    <span className="ml-auto text-[10px] font-body font-semibold uppercase tracking-wider bg-primary/15 text-primary px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      Live
                    </span>
                  )}
                </div>
                <DialogDescription className="text-sm text-muted-foreground font-body leading-relaxed pt-2">
                  {selected.details}
                </DialogDescription>
              </DialogHeader>

              {selected.link && (
                <div className="mt-4">
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-body font-medium hover:bg-primary/90 transition-colors"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}

              {selected.meta && !selected.link && (
                <div className="flex items-center gap-2 text-xs text-primary/80 font-body mt-1">
                  <ExternalLink className="w-3 h-3" />
                  {selected.meta}
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-4">
                {selected.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-body uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2.5 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
