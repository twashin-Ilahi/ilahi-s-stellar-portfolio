import AnimatedSection from "./AnimatedSection";
import CounterStat from "./CounterStat";
import galleryConradExomax from "@/assets/gallery-conrad-exomax.jpg";

const stats = [
  { value: 5000, suffix: "+", label: "Students Trained" },
  { value: 27, label: "Seminars Across 12 Cities" },
  { value: 20000, suffix: "+", label: "Users Reached" },
  { value: 25, suffix: "+", label: "Countries" },
  { value: 5, label: "Research Papers" },
];

const AboutSection = () => (
  <section id="about" className="section-padding max-w-6xl mx-auto">
    <AnimatedSection>
      <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-gradient inline-block">About Me</h2>
    </AnimatedSection>

    <div className="grid md:grid-cols-2 gap-12 mt-10">
      <AnimatedSection delay={0.1}>
        <p className="text-foreground/85 font-body text-base md:text-lg leading-relaxed">
          I'm Twashin — a 17-year-old STEM innovator from Chapainawabganj, Bangladesh.
          I've interned at NASA, conducted research at Harvard and UC Berkeley,
          contributed to a lunar satellite mission, founded multiple organizations,
          and published research recognized internationally.
        </p>
        <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed mt-4">
          My mission: make science and technology accessible to every student, everywhere.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="w-full h-64 md:h-80 rounded-xl glass-card flex items-center justify-center">
          <span className="text-muted-foreground text-sm font-body">[ Action / Event Photo ]</span>
        </div>
      </AnimatedSection>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-16">
      {stats.map((s, i) => (
        <AnimatedSection key={s.label} delay={i * 0.1}>
          <CounterStat value={s.value} suffix={s.suffix} label={s.label} />
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default AboutSection;
