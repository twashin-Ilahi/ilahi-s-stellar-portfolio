import AnimatedSection from "./AnimatedSection";

const groups = [
  {
    label: "Technical",
    skills: ["Embedded Systems", "Robotics & Automation", "IoT", "AI", "Data Analysis", "C++", "Python", "Research Lab", "PowerPoint"],
  },
  {
    label: "Soft Skills",
    skills: ["Leadership", "Public Speaking", "Team Management", "Critical Thinking", "Debating"],
  },
  {
    label: "Languages",
    skills: ["Bengali (Native)", "English (Fluent)"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding max-w-4xl mx-auto">
    <AnimatedSection>
      <h2 className="font-heading text-3xl md:text-5xl font-bold mb-16 text-gradient inline-block">Skills</h2>
    </AnimatedSection>

    <div className="space-y-10">
      {groups.map((g, gi) => (
        <AnimatedSection key={g.label} delay={gi * 0.1}>
          <h3 className="font-heading text-lg font-semibold text-foreground mb-4">{g.label}</h3>
          <div className="flex flex-wrap gap-2">
            {g.skills.map((s) => (
              <span
                key={s}
                className="font-body text-sm px-4 py-2 rounded-full border border-border bg-muted/40 text-foreground/80 hover:border-primary/40 hover:text-primary transition-colors"
              >
                {s}
              </span>
            ))}
          </div>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default SkillsSection;
