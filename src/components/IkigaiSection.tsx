import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const circles = [
  {
    label: "What I Love",
    items: ["Building things that solve real problems", "Teaching & mentoring youth", "Pushing scientific boundaries"],
    color: "from-primary/30 to-primary/5",
    border: "border-primary/40",
    position: "top-0 left-1/2 -translate-x-1/2",
    mobileOrder: 1,
  },
  {
    label: "What I'm Good At",
    items: ["Embedded systems & AI", "Research & academic writing", "Leadership & public speaking"],
    color: "from-secondary/30 to-secondary/5",
    border: "border-secondary/40",
    position: "bottom-0 left-[15%]",
    mobileOrder: 2,
  },
  {
    label: "What the World Needs",
    items: ["Affordable safety tech", "Clean water solutions", "Accessible STEM education"],
    color: "from-emerald-500/30 to-emerald-500/5",
    border: "border-emerald-500/40",
    position: "bottom-0 right-[15%]",
    mobileOrder: 3,
  },
];

const IkigaiSection = () => (
  <section className="section-padding max-w-5xl mx-auto relative overflow-hidden">
    <AnimatedSection>
      <div className="text-center mb-20">
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-gradient inline-block">
          My Ikigai
        </h2>
        <p className="text-muted-foreground font-body text-sm md:text-base max-w-lg mx-auto">
          Innovation for the Betterment of Humanity
        </p>
      </div>
    </AnimatedSection>

    {/* Desktop Venn diagram */}
    <div className="hidden md:block relative h-[520px]">
      {/* Glow backdrop */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 m-auto w-64 h-64 rounded-full bg-primary/10 blur-3xl"
      />

      {/* Circle 1 — Top */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72"
      >
        <div className={`w-full h-full rounded-full bg-gradient-to-b ${circles[0].color} border ${circles[0].border} backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center`}>
          <h3 className="font-heading text-sm font-bold text-primary mb-3 uppercase tracking-wider">{circles[0].label}</h3>
          {circles[0].items.map((item) => (
            <p key={item} className="text-xs text-muted-foreground font-body leading-relaxed">{item}</p>
          ))}
        </div>
      </motion.div>

      {/* Circle 2 — Bottom Left */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute bottom-0 left-[15%] w-72 h-72"
      >
        <div className={`w-full h-full rounded-full bg-gradient-to-b ${circles[1].color} border ${circles[1].border} backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center`}>
          <h3 className="font-heading text-sm font-bold text-secondary mb-3 uppercase tracking-wider">{circles[1].label}</h3>
          {circles[1].items.map((item) => (
            <p key={item} className="text-xs text-muted-foreground font-body leading-relaxed">{item}</p>
          ))}
        </div>
      </motion.div>

      {/* Circle 3 — Bottom Right */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-0 right-[15%] w-72 h-72"
      >
        <div className={`w-full h-full rounded-full bg-gradient-to-b ${circles[2].color} border ${circles[2].border} backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center`}>
          <h3 className="font-heading text-sm font-bold text-emerald-400 mb-3 uppercase tracking-wider">{circles[2].label}</h3>
          {circles[2].items.map((item) => (
            <p key={item} className="text-xs text-muted-foreground font-body leading-relaxed">{item}</p>
          ))}
        </div>
      </motion.div>

      {/* Center — Ikigai core */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 z-10"
      >
        <div className="w-36 h-36 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-emerald-500/20 border border-primary/30 glow-blue flex items-center justify-center backdrop-blur-md">
          <div className="text-center">
            <p className="font-heading text-xs font-bold text-foreground uppercase tracking-widest">Ikigai</p>
            <p className="text-[10px] text-primary font-body mt-1">Purpose</p>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Mobile — stacked cards */}
    <div className="md:hidden space-y-4">
      {circles.map((c, i) => (
        <AnimatedSection key={c.label} delay={i * 0.15}>
          <div className={`glass-card p-6 border-l-4 ${c.border}`}>
            <h3 className="font-heading text-sm font-bold text-foreground mb-2 uppercase tracking-wider">{c.label}</h3>
            {c.items.map((item) => (
              <p key={item} className="text-xs text-muted-foreground font-body leading-relaxed">• {item}</p>
            ))}
          </div>
        </AnimatedSection>
      ))}
      <AnimatedSection delay={0.5}>
        <div className="text-center py-6">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-emerald-500/20 border border-primary/30 glow-blue">
            <div className="text-center">
              <p className="font-heading text-xs font-bold text-foreground uppercase tracking-widest">Ikigai</p>
              <p className="text-[10px] text-primary font-body mt-1">Purpose</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default IkigaiSection;
