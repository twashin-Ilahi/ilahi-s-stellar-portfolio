import AnimatedSection from "./AnimatedSection";
import { GraduationCap, ExternalLink } from "lucide-react";

const programs = [
  {
    title: "MIT LaunchX Entrepreneurship Program",
    org: "LaunchX · Remote",
    badge: "Scholarship Recipient",
    notes: [
      "Intensive startup-building program — ideation to launch in 5 weeks.",
      "Learned customer discovery, lean startup methodology, pitching, and product-market fit.",
      "Developed a real venture with mentorship from MIT entrepreneurs and industry leaders.",
    ],
    url: "https://www.launchx.com",
  },
  {
    title: "TKS — The Knowledge Society",
    org: "The Knowledge Society",
    date: "2024",
    badge: "Innovate Program",
    notes: [
      "10-month innovation program focused on emerging technologies (AI, biotech, quantum computing).",
      "Trained in design thinking, moonshot ideation, and solving billion-dollar problems.",
      "Built consulting projects and presented to industry leaders and Fortune 500 companies.",
    ],
    url: "https://www.tks.world",
  },
  {
    title: "Free Ventures Bootcamp",
    org: "UC Berkeley",
    date: "2026",
    badge: "Full Ride",
    notes: [
      "Selected for the inaugural bootcamp from a highly competitive applicant pool.",
      "Berkeley's premier pre-seed accelerator — learning venture capital, startup scaling, and founder fundamentals.",
      "Engaging with UC Berkeley's world-class startup ecosystem and mentor network.",
    ],
    url: "https://www.freeventures.org",
  },
];

const TrainingSection = () => (
  <section id="training" className="section-padding max-w-6xl mx-auto">
    <AnimatedSection>
      <h2 className="font-heading text-3xl md:text-5xl font-bold mb-16 text-gradient inline-block">
        Training &amp; Programs
      </h2>
    </AnimatedSection>

    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {programs.map((p, i) => (
        <AnimatedSection key={p.title} delay={i * 0.1}>
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-6 hover:border-primary/30 transition-all hover:glow-blue group block h-full"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <GraduationCap className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-[10px] font-body font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                {p.badge}
              </span>
            </div>

            <h3 className="font-heading text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
              {p.title}
            </h3>
            <p className="text-xs text-muted-foreground font-body mb-3">
              {p.org} · {p.date}
            </p>

            <ul className="space-y-1.5 mb-4">
              {p.notes.map((n, j) => (
                <li key={j} className="text-sm text-foreground/75 font-body leading-relaxed flex gap-2">
                  <span className="text-primary mt-1.5 shrink-0">•</span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-1.5 text-xs text-primary font-body font-medium mt-auto">
              Learn More <ExternalLink className="w-3 h-3" />
            </div>
          </a>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default TrainingSection;
