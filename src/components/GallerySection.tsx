import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import galleryGeniusOlympiad from "@/assets/gallery-genius-olympiad.jpg";
import galleryUnAssembly from "@/assets/gallery-un-assembly.jpg";
import galleryTechnoxian from "@/assets/gallery-technoxian.jpg";
import galleryGeniusPoster from "@/assets/gallery-genius-poster.jpg";
import galleryTrophy from "@/assets/gallery-trophy.jpg";
import galleryBangladeshFlag from "@/assets/gallery-bangladesh-flag.jpg";
import galleryGeniusStage from "@/assets/gallery-genius-stage.jpg";
import galleryTechnoxianFlag from "@/assets/gallery-technoxian-flag.jpg";
import galleryUnMural from "@/assets/gallery-un-mural.jpg";
import galleryUnCouncil from "@/assets/gallery-un-council.jpg";

const items = [
  { src: galleryUnAssembly, label: "UN General Assembly" },
  { src: galleryGeniusOlympiad, label: "GENIUS Olympiad – Bronze Medal" },
  { src: galleryTechnoxian, label: "TechnoXian Robotics Championship" },
  { src: galleryGeniusPoster, label: "GENIUS Olympiad – HydroPlasmaX Poster" },
  { src: galleryTrophy, label: "TechnoXian Trophy" },
  { src: galleryBangladeshFlag, label: "Bangladesh Embassy" },
  { src: galleryGeniusStage, label: "GENIUS Olympiad – Award Ceremony" },
  { src: galleryTechnoxianFlag, label: "TechnoXian – Representing Bangladesh" },
  { src: galleryUnMural, label: "UN Headquarters – Mural Hall" },
  { src: galleryUnCouncil, label: "UN Trusteeship Council" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<(typeof items)[0] | null>(null);

  return (
    <section className="section-padding max-w-6xl mx-auto">
      <AnimatedSection>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-16 text-gradient inline-block">In The Field</h2>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, i) => (
          <AnimatedSection key={item.label} delay={i * 0.06}>
            <button
              onClick={() => setSelected(item)}
              className="aspect-[4/3] rounded-xl overflow-hidden glass-card hover:border-primary/30 transition-all hover:glow-blue group w-full cursor-pointer relative"
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-xs font-body text-foreground font-medium">{item.label}</span>
              </div>
            </button>
          </AnimatedSection>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-3xl p-2 bg-card/95 backdrop-blur-2xl border-border">
          {selected && (
            <div>
              <img
                src={selected.src}
                alt={selected.label}
                className="w-full rounded-lg object-contain max-h-[80vh]"
              />
              <p className="text-center text-sm font-body text-muted-foreground mt-2 pb-1">{selected.label}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
