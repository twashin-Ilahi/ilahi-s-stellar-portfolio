import AnimatedSection from "./AnimatedSection";

const countries = [
  { name: "USA", flag: "🇺🇸", code: "US" },
  { name: "Turkey", flag: "🇹🇷", code: "TR" },
  { name: "Malaysia", flag: "🇲🇾", code: "MY" },
  { name: "Thailand", flag: "🇹🇭", code: "TH" },
  { name: "India", flag: "🇮🇳", code: "IN" },
  { name: "UAE", flag: "🇦🇪", code: "AE" },
  { name: "Sri Lanka", flag: "🇱🇰", code: "LK" },
  { name: "Indonesia", flag: "🇮🇩", code: "ID" },
];

const CountriesSection = () => (
  <section className="max-w-6xl mx-auto px-4 md:px-8 pb-20">
    <AnimatedSection>
      <h3 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">
        Countries I've Visited
      </h3>
    </AnimatedSection>

    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
      {countries.map((c, i) => (
        <AnimatedSection key={c.code} delay={i * 0.06}>
          <div className="glass-card px-5 py-4 flex flex-col items-center gap-2 hover:border-primary/30 transition-all hover:glow-blue group min-w-[100px]">
            <img
              src={`https://flagcdn.com/w80/${c.code.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w160/${c.code.toLowerCase()}.png 2x`}
              alt={`${c.name} flag`}
              className="w-12 h-8 object-cover rounded shadow-sm"
              loading="lazy"
            />
            <span className="text-xs font-body text-muted-foreground group-hover:text-foreground transition-colors font-medium">
              {c.name}
            </span>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default CountriesSection;
