import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Info, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Award {
  emoji: string;
  title: string;
  sub: string;
  details?: string;
  sources?: { label: string; url: string }[];
}

const featured: Award[] = [
  {
    emoji: "🏆",
    title: "Global Top-5, NASA Conrad Challenge 2024",
    sub: "Youngest Global Finalist — beaten 6,000+ teams worldwide",
    details:
      "An annual entrepreneurship competition that challenges students to solve real-world problems using science and technology. Recognized as the youngest global finalist and top-5 team out of 6,000+ teams.",
    sources: [
      { label: "The Daily Star", url: "https://www.thedailystar.net/tags/nasa" },
      { label: "The Financial Express", url: "https://thefinancialexpress.com.bd/" },
    ],
  },
  {
    emoji: "🥇",
    title: "2025 Emerging Innovator of the World",
    sub: "University of Delaware, Horn Entrepreneurship",
    details:
      "Hosted by the Horn Entrepreneurship & Diamond Challenge program at the University of Delaware, USA — recognizing high school students for entrepreneurial potential and social impact.",
    sources: [
      { label: "2025 Top 100 List", url: "https://diamondchallenge.org/emerging-innovator-top-100" },
    ],
  },
  {
    emoji: "🥉",
    title: "Bronze Medal, GENIUS Olympiad 2025",
    sub: "Rochester Institute of Technology, USA",
    details:
      "An international high school project competition focused on environmental issues, hosted at SUNY Oswego (USA). Awarded Bronze Medal (ID: 6683) in the Science category representing Bangladesh.",
    sources: [
      { label: "GENIUS Olympiad Results", url: "https://www.geniusolympiad.org/" },
    ],
  },
  {
    emoji: "🌍",
    title: "Global Rank 12, Drake Physics Prize 2025",
    sub: "Drake University, USA — Scored 41/44",
  },
  {
    emoji: "🏅",
    title: "Outreach Award, CERN Beamline for Schools 2025",
    sub: "CERN, Geneva — Team Jagrata, Bangladesh",
    details:
      "A particle physics competition organized by CERN (European Organization for Nuclear Research) that invites high school students to propose scientific experiments. Awarded the Outreach Award as Team Jagrata from Bangladesh.",
    sources: [
      { label: "CERN BL4S Winners (Page 3)", url: "https://beamlineforschools.cern/past-editions" },
    ],
  },
];

const others: Award[] = [
  {
    emoji: "🏆",
    title: "Runners-up, TechnoXian World Robotics Championship 2025",
    sub: "New Delhi, India",
    details:
      "The world's largest robotics championship series, held in New Delhi, India. Awarded Global Runner-Up in the Innovation Challenge Jr. category as part of Team Harimohan Science Club.",
    sources: [
      { label: "TechnoXian Results", url: "https://technoxian.com/" },
    ],
  },
  { emoji: "🥇", title: "Gold Medal, World Invention Competition, Malaysia 2024", sub: "" },
  { emoji: "🥇", title: "Gold Medal, World Innovative Science Project Olympiad, Indonesia 2024", sub: "" },
  { emoji: "🥇", title: "Gold Medal, International Science & Innovation Fair (ISIF) 2024", sub: "" },
  { emoji: "🥇", title: "Gold Medal, Queen's Commonwealth Essay Competition 2024", sub: "" },
  { emoji: "🏆", title: "National Winner, Bangladesh Physics Olympiad 2022", sub: "" },
  { emoji: "🥈", title: "Silver Medal, Bangladesh Robot Olympiad 2021", sub: "" },
  { emoji: "🥈", title: "Silver Medal, Queen's Commonwealth Essay Competition 2023", sub: "" },
  { emoji: "🏆", title: "Champion (Science & Tech), National Children's Award 2023", sub: "" },
  { emoji: "🌍", title: "Global 41st, Physics Brawl 2024", sub: "6,324 competitors, 81 countries" },
];

const AwardsSection = () => {
  const [selected, setSelected] = useState<Award | null>(null);

  return (
    <section id="awards" className="section-padding max-w-6xl mx-auto">
      <AnimatedSection>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-16 text-gradient inline-block">
          Awards & Recognition
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {featured.map((a, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="glass-card p-6 hover:border-primary/30 transition-colors glow-border relative group">
              {a.details && (
                <button
                  onClick={() => setSelected(a)}
                  className="absolute top-3 right-3 p-1.5 rounded-full bg-muted/60 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  aria-label="View details"
                >
                  <Info className="w-4 h-4" />
                </button>
              )}
              <span className="text-3xl">{a.emoji}</span>
              <h3 className="font-heading text-base font-bold text-foreground mt-3 pr-6">{a.title}</h3>
              <p className="text-xs text-muted-foreground font-body mt-1">{a.sub}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        {others.map((a, i) => (
          <AnimatedSection key={i} delay={i * 0.04}>
            <div className="glass-card px-4 py-3 text-sm font-body text-foreground/80 hover:border-primary/20 transition-colors relative flex items-center gap-2">
              <span className="flex-1">
                {a.emoji} {a.title}
                {a.sub && <span className="text-muted-foreground"> — {a.sub}</span>}
              </span>
              {a.details && (
                <button
                  onClick={() => setSelected(a)}
                  className="p-1 rounded-full hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors shrink-0 cursor-pointer"
                  aria-label="View details"
                >
                  <Info className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="glass-card border-border bg-card/95 backdrop-blur-2xl max-w-lg">
          {selected && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{selected.emoji}</span>
                  <DialogTitle className="font-heading text-lg text-foreground">
                    {selected.title}
                  </DialogTitle>
                </div>
                {selected.sub && (
                  <p className="text-xs text-muted-foreground font-body">{selected.sub}</p>
                )}
                <DialogDescription className="text-sm text-muted-foreground font-body leading-relaxed pt-3">
                  {selected.details}
                </DialogDescription>
              </DialogHeader>

              {selected.sources && selected.sources.length > 0 && (
                <div className="mt-3 space-y-2">
                  <p className="text-xs font-body font-semibold text-foreground/70 uppercase tracking-wider">
                    Sources
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selected.sources.map((s) => (
                      <a
                        key={s.url}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-body text-primary hover:text-primary/80 border border-primary/30 rounded-full px-3 py-1.5 hover:bg-primary/10 transition-colors"
                      >
                        {s.label}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AwardsSection;
