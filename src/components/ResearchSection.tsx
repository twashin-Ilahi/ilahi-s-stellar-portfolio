import AnimatedSection from "./AnimatedSection";

const papers = [
  {
    title: "Safe Driving System for Real-Time Driver Behavior Analysis and Hazard Alerting",
    venue: "IJISRT",
    status: "Published",
    color: "text-green-400 bg-green-400/10",
  },
  {
    title: "Liquid Logic Sensing for Accident Detection: Vibration Resistant, Low Power Vehicle Rollover Detection",
    venue: "MDPI Preprint.org",
    status: "Published",
    color: "text-green-400 bg-green-400/10",
  },
  {
    title: "Unified MPC Strategies in Power Electronics: CCS-MPC & FCS-MPC for DC-DC Buck Converters (HF²PC)",
    venue: "Harvard Research",
    status: "Processing",
    color: "text-primary bg-primary/10",
  },
  {
    title: "Investigating Muon Time Dilation through Spatial & Temporal Decay Profiling",
    venue: "American Journal of Physics — CERN Approved",
    status: "Under Review",
    color: "text-amber-400 bg-amber-400/10",
  },
  {
    title: "Artificial Intelligence-as-an-Experience (AIaaE)",
    venue: "MDPI Preprint.org",
    status: "Published",
    color: "text-green-400 bg-green-400/10",
  },
];

const ResearchSection = () => (
  <section id="research" className="section-padding max-w-4xl mx-auto">
    <AnimatedSection>
      <h2 className="font-heading text-3xl md:text-5xl font-bold mb-16 text-gradient inline-block">Research</h2>
    </AnimatedSection>

    <div className="space-y-4">
      {papers.map((p, i) => (
        <AnimatedSection key={i} delay={i * 0.08}>
          <div className="glass-card p-5 hover:border-primary/30 transition-colors flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex-1">
              <h3 className="font-body text-sm md:text-base font-semibold text-foreground leading-snug">{p.title}</h3>
              <p className="text-xs text-muted-foreground font-body mt-1">{p.venue}</p>
            </div>
            <span className={`text-[10px] font-body font-semibold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap ${p.color}`}>
              {p.status}
            </span>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default ResearchSection;
