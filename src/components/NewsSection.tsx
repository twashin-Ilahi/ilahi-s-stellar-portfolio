import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Newspaper } from "lucide-react";

const newsItems = [
  {
    outlet: "The Financial Express",
    title: "NASA's Conrad Challenge: Bangladesh high schoolers emerge as top five",
    url: "https://thefinancialexpress.com.bd/education/article/nasas-conrad-challenge-bangladesh-high-schoolers-emerge-as-top-five",
    favicon: "https://www.google.com/s2/favicons?domain=thefinancialexpress.com.bd&sz=64",
    tag: "International",
  },
  {
    outlet: "Harvard OpenBio Lab",
    title: "2025 Student Research Institute Cohort — Harvard College",
    url: "https://soco.college.harvard.edu/00003/2025/",
    favicon: "https://www.google.com/s2/favicons?domain=harvard.edu&sz=64",
    tag: "Academic",
  },
  {
    outlet: "Ekushey TV",
    title: "বিশ্বমঞ্চে পতাকা উড়াতে চায় ৫ খুদে বিজ্ঞানী, বাধ সেধেছে টাকা",
    url: "https://www.ekushey-tv.com/%E0%A6%AC%E0%A6%BF%E0%A6%B6%E0%A7%8D%E0%A6%AC%E0%A6%AE%E0%A6%9E%E0%A7%8D%E0%A6%9A%E0%A7%87-%E0%A6%AA%E0%A6%A4%E0%A6%BE%E0%A6%95%E0%A6%BE-%E0%A6%89%E0%A7%9C%E0%A6%BE%E0%A6%A4%E0%A7%87-%E0%A6%9A%E0%A6%BE%E0%A7%9F-%E0%A7%AB-%E0%A6%96%E0%A7%81%E0%A6%A6%E0%A7%87-%E0%A6%AC%E0%A6%BF%E0%A6%9C%E0%A6%9E%E0%A6%BE%E0%A6%A8%E0%A7%80-%E0%A6%AC%E0%A6%BF%E0%A6%9C%E0%A6%9E%E0%A6%BE%E0%A6%A8%E0%A7%80",
    favicon: "https://www.google.com/s2/favicons?domain=ekushey-tv.com&sz=64",
    tag: "TV Coverage",
  },
  {
    outlet: "Khaborer Kagoj",
    title: "খুদে উদ্যোক্তাদের বিশ্বসেরা মঞ্চে বাংলাদেশ",
    url: "https://www.khaborerkagoj.com/teenage-plus/806569",
    favicon: "https://www.google.com/s2/favicons?domain=khaborerkagoj.com&sz=64",
    tag: "National",
  },
  {
    outlet: "Google Scholar",
    title: "Md Twashin Ilahi — Published Research & Citations",
    url: "https://scholar.google.com/citations?user=YR8dN_0AAAAJ&hl=en",
    favicon: "https://www.google.com/s2/favicons?domain=scholar.google.com&sz=64",
    tag: "Research",
  },
  {
    outlet: "IJISRT",
    title: "Safe Driving System — Volume 10, Issue 4, April 2025",
    url: "https://www.ijisrt.com/Volume-10-2025_issue-4-april",
    favicon: "https://www.google.com/s2/favicons?domain=ijisrt.com&sz=64",
    tag: "Publication",
  },
];

const tagColors: Record<string, string> = {
  International: "text-primary bg-primary/10",
  Academic: "text-violet-400 bg-violet-400/10",
  "TV Coverage": "text-amber-400 bg-amber-400/10",
  National: "text-emerald-400 bg-emerald-400/10",
  Research: "text-sky-400 bg-sky-400/10",
  Publication: "text-green-400 bg-green-400/10",
};

const NewsSection = () => (
  <section id="news" className="section-padding max-w-6xl mx-auto">
    <AnimatedSection>
      <h2 className="font-heading text-3xl md:text-5xl font-bold mb-16 text-gradient inline-block">
        In the News
      </h2>
    </AnimatedSection>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {newsItems.map((item, i) => (
        <AnimatedSection key={item.url} delay={i * 0.08}>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-5 hover:border-primary/30 transition-all hover:glow-blue group block h-full"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={item.favicon}
                alt={item.outlet}
                className="w-8 h-8 rounded-md bg-muted/50 object-contain p-0.5"
                loading="lazy"
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-body font-semibold text-muted-foreground truncate">
                  {item.outlet}
                </p>
              </div>
              <span
                className={`text-[9px] font-body font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap ${tagColors[item.tag] || "text-muted-foreground bg-muted/20"}`}
              >
                {item.tag}
              </span>
            </div>

            <h3 className="font-heading text-sm font-bold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-3">
              {item.title}
            </h3>

            <div className="flex items-center gap-1.5 mt-4 text-xs text-primary font-body font-medium">
              Read Article <ExternalLink className="w-3 h-3" />
            </div>
          </a>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default NewsSection;
