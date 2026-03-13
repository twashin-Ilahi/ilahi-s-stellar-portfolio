import AnimatedSection from "./AnimatedSection";
import { ExternalLink, PenLine } from "lucide-react";

const articles = [
  {
    title: "Stop Saying \"Exceptions Aren't Examples.\" You're Missing the Point!",
    excerpt: "We've all heard the advice. It usually comes up when someone points to a massive, outlier success story…",
    date: "Feb 24, 2026",
    url: "https://twashinilahi.medium.com/stop-saying-exceptions-arent-examples-you-re-missing-the-point-ba998173738d",
  },
  {
    title: "The Art of Strategic Silence — A Survival Guide for Wise People",
    excerpt: "There is a mistake intelligent people make early in life. They assume truth is power. It isn't. Perception is…",
    date: "Feb 17, 2026",
    url: "https://twashinilahi.medium.com/the-art-of-strategic-silence-a-survival-guide-for-wise-people-ba44ee13f914",
  },
  {
    title: "Risk Is Created, Not Taken. And That Changes Everything.",
    excerpt: "We've been using the wrong verb for centuries. Here's why it matters.",
    date: "Feb 16, 2026",
    url: "https://twashinilahi.medium.com/risk-is-created-not-taken-and-that-changes-everything-05ad6b8a4041",
  },
  {
    title: "\"Passion\" Is Just Your Personal Product Market Fit",
    excerpt: "We treat passion like a mystical force. But what if it's just your personal product-market fit?",
    date: "Nov 14, 2025",
    url: "https://twashinilahi.medium.com/passion-is-just-your-personal-product-market-fit-2d6c756cec6e",
  },
];

const WritingsSection = () => (
  <section id="writings" className="section-padding max-w-6xl mx-auto">
    <AnimatedSection>
      <h2 className="font-heading text-3xl md:text-5xl font-bold mb-16 text-gradient inline-block">
        Writings
      </h2>
    </AnimatedSection>

    <div className="grid sm:grid-cols-2 gap-5 mb-8">
      {articles.map((a, i) => (
        <AnimatedSection key={a.url} delay={i * 0.08}>
          <a
            href={a.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-6 hover:border-primary/30 transition-all hover:glow-blue group block h-full"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <PenLine className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-xs text-muted-foreground font-body">{a.date}</span>
            </div>
            <h3 className="font-heading text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {a.title}
            </h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">{a.excerpt}</p>
            <div className="flex items-center gap-1.5 mt-4 text-xs text-primary font-body font-medium">
              Read on Medium <ExternalLink className="w-3 h-3" />
            </div>
          </a>
        </AnimatedSection>
      ))}
    </div>

    <AnimatedSection delay={0.4}>
      <div className="text-center">
        <a
          href="https://twashinilahi.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/40 text-primary font-body font-semibold text-sm tracking-wide hover:bg-primary/10 transition-colors"
        >
          View All Articles on Medium <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </AnimatedSection>
  </section>
);

export default WritingsSection;
