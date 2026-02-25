import AnimatedSection from "./AnimatedSection";

const featured = [
  { emoji: "🏆", title: "Global Top-5, NASA Conrad Challenge 2024", sub: "Beaten 6,000+ teams worldwide" },
  { emoji: "🥇", title: "2025 Emerging Innovator of the World", sub: "University of Delaware, Horn Entrepreneurship" },
  { emoji: "🥉", title: "Bronze Medal, Genius Olympiad World Finals 2025", sub: "Oswego, New York, USA" },
  { emoji: "🌍", title: "Global Rank 12, Drake Physics Prize 2025", sub: "Drake University, USA — Scored 41/44" },
  { emoji: "🏅", title: "Outreach Award, CERN Beamline for Schools 2025", sub: "CERN, Geneva" },
];

const others = [
  "🥇 Gold Medal, World Invention Competition, Malaysia 2024",
  "🥇 Gold Medal, World Innovative Science Project Olympiad, Indonesia 2024",
  "🥇 Gold Medal, International Science & Innovation Fair (ISIF) 2024",
  "🥇 Gold Medal, Queen's Commonwealth Essay Competition 2024",
  "🏆 Runners-up, Technoxian World Robotics Championship 2025, India",
  "🏆 National Winner, Bangladesh Physics Olympiad 2022",
  "🥈 Silver Medal, Bangladesh Robot Olympiad 2021",
  "🥈 Silver Medal, Queen's Commonwealth Essay Competition 2023",
  "🏆 Champion (Science & Tech), National Children's Award 2023",
  "🌍 Global 41st, Physics Brawl 2024 — 6,324 competitors, 81 countries",
];

const AwardsSection = () => (
  <section id="awards" className="section-padding max-w-6xl mx-auto">
    <AnimatedSection>
      <h2 className="font-heading text-3xl md:text-5xl font-bold mb-16 text-gradient inline-block">Awards & Recognition</h2>
    </AnimatedSection>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {featured.map((a, i) => (
        <AnimatedSection key={i} delay={i * 0.08}>
          <div className="glass-card p-6 hover:border-primary/30 transition-colors glow-border">
            <span className="text-3xl">{a.emoji}</span>
            <h3 className="font-heading text-base font-bold text-foreground mt-3">{a.title}</h3>
            <p className="text-xs text-muted-foreground font-body mt-1">{a.sub}</p>
          </div>
        </AnimatedSection>
      ))}
    </div>

    <div className="grid sm:grid-cols-2 gap-3">
      {others.map((a, i) => (
        <AnimatedSection key={i} delay={i * 0.04}>
          <div className="glass-card px-4 py-3 text-sm font-body text-foreground/80 hover:border-primary/20 transition-colors">
            {a}
          </div>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default AwardsSection;
