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
import galleryConradChallenge from "@/assets/gallery-conrad-challenge.jpg";
import galleryUnWelcome from "@/assets/gallery-un-welcome.jpg";
import galleryUnFlag from "@/assets/gallery-un-flag.jpg";
import galleryMandelaStatue from "@/assets/gallery-mandela-statue.jpg";
import galleryNasaConrad from "@/assets/gallery-nasa-conrad.jpg";
import galleryUnSphere from "@/assets/gallery-un-sphere.jpg";
import galleryUnLobby from "@/assets/gallery-un-lobby.jpg";
import galleryUddharFieldops from "@/assets/gallery-uddhar-fieldops.jpg";
import galleryBdFlagPortrait from "@/assets/gallery-bd-flag-portrait.jpg";
import gallerySeminarSpeaking from "@/assets/gallery-seminar-speaking.jpg";

const items = [
  { src: galleryConradChallenge, label: "NASA Conrad Challenge – Presenting" },
  { src: galleryUnAssembly, label: "UN General Assembly" },
  { src: galleryGeniusOlympiad, label: "GENIUS Olympiad – Bronze Medal" },
  { src: galleryTechnoxian, label: "TechnoXian Robotics Championship" },
  { src: galleryGeniusPoster, label: "GENIUS Olympiad – HydroPlasmaX Poster" },
  { src: galleryNasaConrad, label: "NASA Conrad Summit" },
  { src: galleryUnSphere, label: "UN Headquarters – Sphere Sculpture" },
  { src: galleryUnCouncil, label: "UN Trusteeship Council" },
  { src: galleryUddharFieldops, label: "Uddhar – Field Operations" },
  { src: gallerySeminarSpeaking, label: "Seminar – Public Speaking" },
  { src: galleryTrophy, label: "TechnoXian Trophy" },
  { src: galleryUnMural, label: "UN Headquarters – Mural Hall" },
  { src: galleryUnWelcome, label: "Welcome to the United Nations" },
  { src: galleryUnFlag, label: "UN Flag – Dag Hammarskjöld Quote" },
  { src: galleryMandelaStatue, label: "Nelson Mandela Statue – UN" },
  { src: galleryUnLobby, label: "UN Headquarters – Lobby" },
  { src: galleryBangladeshFlag, label: "Bangladesh Embassy" },
  { src: galleryTechnoxianFlag, label: "TechnoXian – Representing Bangladesh" },
  { src: galleryGeniusStage, label: "GENIUS Olympiad – Award Ceremony" },
  { src: galleryBdFlagPortrait, label: "With Bangladesh Flag" },
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
