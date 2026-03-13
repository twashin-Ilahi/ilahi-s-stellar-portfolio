import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { FileText, ExternalLink } from "lucide-react";

const papers = [
  {
    title: "Design and Implementation of a Safe Driving System for Real-Time Driver Behavior Analysis and Hazard Alerting Using Low Cost, Universally Compatible Embedded Hardware",
    venue: "IJISRT · Volume 10, Issue 4, Pages 1889–1906",
    status: "Published",
    color: "text-green-400 bg-green-400/10",
    doi: "10.38124/ijisrt/25apr1300",
    timeline: "2022 – April 2025",
    abstract:
      "This research presents the development of the Safe Driving System (SDS), named AuraGuard — a cost-effective, universally compatible embedded solution aimed at proactively reducing road accidents. The system runs on Raspberry Pi with Python and open-source tools like OpenCV and Dlib, incorporating 13 features that monitor driver fatigue, alcohol use, phone use, speed, and assist in poor visibility conditions. Most features achieved accuracy rates above 90%.",
    achievements: [
      "Global Top-5, NASA Conrad Challenge 2023-24 (6,000+ teams)",
      "Runners-up, Technoxian World Robotics Championship, India 2025",
      "Gold Medalist, WICE Malaysia 2024",
      "Gold Medalist, WISPO Indonesia 2024",
      "Gold Medalist, ISIF 2024",
    ],
    supervision: "Self-directed with technical collaboration from Mr. Yahiya Ahmed Sharif",
  },
  {
    title: "Towards Unified Model Predictive Control Strategies in Power Electronics: A Review of CCS-MPC & FCS-MPC for DC-DC Buck Converters",
    venue: "STEM Fellowship Journal · Special Issue",
    status: "In Publication",
    color: "text-primary bg-primary/10",
    timeline: "June – August 2025",
    abstract:
      "A unified analysis and literature review on Model Predictive Control (MPC) strategies for DC-DC buck converters with emphasis on fixed switching frequency operation. Reviews Finite Control Set MPC (FCS-MPC) and Continuous Control Set MPC (CCS-MPC), their control philosophies, modelling techniques, and implementation issues. Proposes a theoretical framework of a unified controller (HF²PC) incorporating advantages of both approaches. Summarizes findings from more than a decade of MPC research.",
    achievements: [
      "Conducted at Harvard SEAS OpenBio Lab's Student Research Institute",
      "3.5% acceptance rate from 2,500+ applicants across 50+ countries",
      "Presented at Harvard SRI Symposium",
    ],
    supervision: "Mentored by Gaureej Gauttam, PhD Researcher, University of Houston",
  },
  {
    title: "Investigating Muon Time Dilation through Spatial and Temporal Decay Profiling",
    venue: "American Journal of Physics · CERN Approved",
    status: "Under Review",
    color: "text-amber-400 bg-amber-400/10",
    timeline: "June 2024 – July 2025",
    abstract:
      "An experimental proposal to determine the relativistic lifetime of positive muons (μ+) produced in pion decay at the CERN T9 beamline with high precision. Explores possible differences in spatial displacement, time characteristics, and signal shift of muon stopping locations. Investigates time dilation, possible quantum modulation effects, and hidden interactions. Validated through detailed Geant-4 simulations and Python-based kinematic analysis tools.",
    achievements: [
      "CERN Beamline for Schools 2025 — Outreach Award",
      "Global Top 2.54%, Top 15/550 teams worldwide",
    ],
    supervision: "Supervised by Shahadath Hossain Sabbir (team coach)",
  },
  {
    title: "Liquid Logic Sensing for Accident Detection: A Vibration Resistant, Low Power Solution for Reliable Vehicle Rollover Detection",
    venue: "MDPI Preprints",
    status: "Published",
    color: "text-green-400 bg-green-400/10",
    doi: "10.20944/preprints202506.0447.v1",
    timeline: "October 2024 – April 2025",
    abstract:
      "Introduces the Liquidic Switch Mechanism (LSM) using Liquid Logic Sensing — a novel tilt sensor that uses a saltwater pathway to accurately identify hazardous rollover angles of 45°. Testing demonstrates a 90% decrease in false alarms compared to traditional gyroscope-based sensors. Establishes a general design formula to calculate precise saltwater amounts for reliable connection breaking.",
    achievements: [
      "Extension research following Safe Driving System development",
      "Seeking journal publication following preprint feedback",
    ],
    supervision: "Self-directed research",
  },
  {
    title: "AIaaE: Artificial Intelligence-as-an-Experience",
    venue: "MDPI Preprints",
    status: "Published",
    color: "text-green-400 bg-green-400/10",
    doi: "10.20944/preprints202512.1920.v1",
    timeline: "December 2025",
    abstract:
      "Introduces AI-as-an-Experience (AIaaE) as a high-level conceptual paradigm in which AI systems are explicitly designed to generate, guide, and sustain human experiences — particularly emotional, psychological, and narrative experiences. Formalizes the core concept, situates it within established theories from psychology, and examines long-term societal, ethical, and technological implications. The central claim: AI can enable humans to experience structured, meaningful, and evolving states of being.",
    achievements: [],
    supervision: "Independent research",
  },
];

const ResearchSection = () => {
  const [selected, setSelected] = useState<(typeof papers)[0] | null>(null);

  return (
    <section id="research" className="section-padding max-w-4xl mx-auto">
      <AnimatedSection>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-16 text-gradient inline-block">Research</h2>
      </AnimatedSection>

      <div className="space-y-4">
        {papers.map((p, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <button
              onClick={() => setSelected(p)}
              className="glass-card p-5 hover:border-primary/30 transition-colors flex flex-col sm:flex-row sm:items-center gap-3 w-full text-left cursor-pointer"
            >
              <div className="flex-1">
                <h3 className="font-body text-sm md:text-base font-semibold text-foreground leading-snug">{p.title}</h3>
                <p className="text-xs text-muted-foreground font-body mt-1">{p.venue}</p>
              </div>
              <span
                className={`text-[10px] font-body font-semibold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap ${p.color}`}
              >
                {p.status}
              </span>
            </button>
          </AnimatedSection>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="glass-card border-border bg-card/95 backdrop-blur-2xl max-w-lg max-h-[80vh] overflow-y-auto">
          {selected && (
            <>
              <DialogHeader>
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <DialogTitle className="font-heading text-lg text-foreground leading-snug">
                      {selected.title}
                    </DialogTitle>
                    <p className="text-xs text-muted-foreground font-body mt-1">
                      {selected.venue} · {selected.timeline}
                    </p>
                  </div>
                </div>
                <span
                  className={`text-[10px] font-body font-semibold uppercase tracking-wider px-3 py-1 rounded-full w-fit ${selected.color}`}
                >
                  {selected.status}
                </span>
              </DialogHeader>

              <div className="space-y-4 mt-2">
                <div>
                  <h4 className="text-xs font-body font-semibold text-foreground uppercase tracking-wider mb-2">Abstract</h4>
                  <DialogDescription className="text-sm text-muted-foreground font-body leading-relaxed">
                    {selected.abstract}
                  </DialogDescription>
                </div>

                {selected.doi && (
                  <a
                    href={`https://doi.org/${selected.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-primary/80 font-body hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    DOI: {selected.doi}
                  </a>
                )}

                <a
                  href="https://scholar.google.com/citations?user=YR8dN_0AAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-body font-medium text-sky-400 hover:text-sky-300 transition-colors bg-sky-400/10 px-3 py-1.5 rounded-full w-fit"
                >
                  <img
                    src="https://www.google.com/s2/favicons?domain=scholar.google.com&sz=64"
                    alt="Google Scholar"
                    className="w-4 h-4"
                  />
                  View on Google Scholar
                </a>

                {selected.achievements.length > 0 && (
                  <div>
                    <h4 className="text-xs font-body font-semibold text-foreground uppercase tracking-wider mb-2">
                      Key Achievements
                    </h4>
                    <ul className="space-y-1">
                      {selected.achievements.map((a, i) => (
                        <li key={i} className="text-xs text-muted-foreground font-body flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-body font-semibold text-foreground uppercase tracking-wider mb-1">
                    Supervision
                  </h4>
                  <p className="text-xs text-muted-foreground font-body">{selected.supervision}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ResearchSection;
