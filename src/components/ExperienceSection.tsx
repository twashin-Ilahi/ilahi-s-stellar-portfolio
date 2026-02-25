import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    title: "Research Fellow",
    org: "Harvard SEAS / Harvard OpenBio Research Lab",
    date: "Jun – Aug 2025",
    points: [
      "Researched MPC strategies for DC–DC buck converters, normalizing 20+ years of performance data.",
      "Designed unified MPC framework (HF²PC) and presented at Harvard symposium.",
    ],
  },
  {
    title: "NASA GLEE Mission Intern",
    org: "Science & Mission Control Division — NASA Artemis Program",
    date: "2024 – Present",
    points: [
      "First Lunar Femto Satellite (20g SMD) developed & assembled in Bangladesh.",
      "Co-developed Mission Control Software; oversaw science, admin, and mission tasks.",
    ],
  },
  {
    title: "Summer Intern & Global Ambassador",
    org: "NASA Conrad Challenge — The Conrad Foundation",
    date: "Jun – Aug 2024",
    points: [
      "Authored 10+ official web features; expanded global student reach to 7 new countries.",
      "Strengthened Bangladesh's presence by 300%.",
    ],
  },
  {
    title: "Summer Research Fellow",
    org: "UC Berkeley REYES Program",
    date: "Summer 2024",
    points: [
      "Conducted physics experiments through Python modelling; developed 3 particle physics models.",
      "Collaborated with professors and presented research at the conference.",
    ],
  },
  {
    title: "Founder & Director",
    org: "iSpark — Bangladesh's Leading STEM & Robotics Initiative",
    date: "2022 – Present",
    points: [
      "Founded national STEM organization; hosted 27 seminars across 12 major cities.",
      "Trained 3,000+ students; guided 10+ teams to national/international competition success.",
    ],
  },
  {
    title: "Co-Founder & CEO",
    org: "Uddhar — Multi-Channel Rescue & Relief Digital Platform",
    date: "2025 – Present",
    points: [
      "Connected victims and rescuers during '24 floods; reached 10,000+ users.",
      "Tracked needs, shelter locations, and missing persons with 150+ volunteers.",
    ],
  },
  {
    title: "Volunteer & Advisor",
    org: "District Administration Office, Chapainawabganj",
    date: "2020 – Present",
    points: [
      "Led District Science Enrichment Program; mentored 70+ students in STEM.",
      "Organized 25+ seminars reaching 1,500+ children.",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding max-w-4xl mx-auto">
    <AnimatedSection>
      <h2 className="font-heading text-3xl md:text-5xl font-bold mb-16 text-gradient inline-block">Experience</h2>
    </AnimatedSection>

    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

      {experiences.map((exp, i) => {
        const isLeft = i % 2 === 0;
        return (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className={`relative flex md:items-center mb-12 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-2 md:mt-0 glow-blue z-10" />

              <div className={`ml-10 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="glass-card p-5 hover:border-primary/30 transition-colors">
                  <span className="text-xs font-body text-primary tracking-wider uppercase">{exp.date}</span>
                  <h3 className="font-heading text-lg font-bold text-foreground mt-1">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground font-body mb-3">{exp.org}</p>
                  <ul className={`space-y-1 ${isLeft ? "md:text-right" : ""}`}>
                    {exp.points.map((p, j) => (
                      <li key={j} className="text-sm text-foreground/75 font-body leading-relaxed">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        );
      })}
    </div>
  </section>
);

export default ExperienceSection;
