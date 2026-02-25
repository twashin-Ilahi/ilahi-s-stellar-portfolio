import AnimatedSection from "./AnimatedSection";

const items = [
  "NASA Conrad Summit",
  "iSpark Seminar",
  "Robotics Championship",
  "UC Berkeley",
  "Harvard Symposium",
  "Uddhar Field Ops",
];

const GallerySection = () => (
  <section className="section-padding max-w-6xl mx-auto">
    <AnimatedSection>
      <h2 className="font-heading text-3xl md:text-5xl font-bold mb-16 text-gradient inline-block">In The Field</h2>
    </AnimatedSection>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {items.map((item, i) => (
        <AnimatedSection key={item} delay={i * 0.08}>
          <div className="aspect-[4/3] rounded-xl glass-card flex items-center justify-center hover:border-primary/30 transition-colors group">
            <span className="text-muted-foreground text-xs md:text-sm font-body text-center px-3 group-hover:text-primary transition-colors">
              [ {item} ]
            </span>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default GallerySection;
