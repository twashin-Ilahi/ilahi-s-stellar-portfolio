import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronDown } from "lucide-react";

// NASA Conrad Challenge & Space Center Houston
import galleryConradChallenge from "@/assets/gallery-conrad-challenge.jpg";
import galleryNasaConrad from "@/assets/gallery-nasa-conrad.jpg";
import galleryNasaLogo from "@/assets/gallery-nasa-logo.jpg";
import gallerySpaceCenter from "@/assets/gallery-space-center.jpg";
import galleryConradLunar from "@/assets/gallery-conrad-lunar.jpg";
import galleryConradExomax from "@/assets/gallery-conrad-exomax.jpg";
import galleryConradVenue1 from "@/assets/gallery-conrad-venue1.jpg";
import galleryConradVenue2 from "@/assets/gallery-conrad-venue2.jpg";

// United Nations
import galleryUnAssembly from "@/assets/gallery-un-assembly.jpg";
import galleryUnAssembly2 from "@/assets/gallery-un-assembly2.jpg";
import galleryUnCouncil from "@/assets/gallery-un-council.jpg";
import galleryUnMural from "@/assets/gallery-un-mural.jpg";
import galleryUnWelcome from "@/assets/gallery-un-welcome.jpg";
import galleryUnFlag from "@/assets/gallery-un-flag.jpg";
import galleryUnSphere from "@/assets/gallery-un-sphere.jpg";
import galleryUnLobby from "@/assets/gallery-un-lobby.jpg";
import galleryMandelaStatue from "@/assets/gallery-mandela-statue.jpg";
import galleryUnHorseStatue from "@/assets/gallery-un-horse-statue.jpg";
import galleryUnBerlinWall from "@/assets/gallery-un-berlin-wall.jpg";
import galleryUnFlameHope from "@/assets/gallery-un-flame-hope.jpg";

// GENIUS Olympiad
import galleryGeniusOlympiad from "@/assets/gallery-genius-olympiad.jpg";
import galleryGeniusPoster from "@/assets/gallery-genius-poster.jpg";
import galleryGeniusStage from "@/assets/gallery-genius-stage.jpg";
import galleryGeniusMedal from "@/assets/gallery-genius-medal.jpg";

// TechnoXian Robotics
import galleryTechnoxian from "@/assets/gallery-technoxian.jpg";
import galleryTechnoxianFlag from "@/assets/gallery-technoxian-flag.jpg";
import galleryTrophy from "@/assets/gallery-trophy.jpg";
import galleryRobot from "@/assets/gallery-robot.jpg";

// WICE
import galleryWiceAward from "@/assets/gallery-wice-award.jpg";

// iSpark – School Seminars
import gallerySchoolSeminar1 from "@/assets/gallery-school-seminar1.jpg";
import gallerySchoolSeminar2 from "@/assets/gallery-school-seminar2.jpg";
import gallerySchoolSeminar3 from "@/assets/gallery-school-seminar3.jpg";
import gallerySchoolSeminar4 from "@/assets/gallery-school-seminar4.jpg";
import gallerySchoolSeminar5 from "@/assets/gallery-school-seminar5.jpg";
import gallerySeminarSpeaking from "@/assets/gallery-seminar-speaking.jpg";

// Other
import galleryTorontoTalk from "@/assets/gallery-toronto-talk.jpg";
import galleryUddharFieldops from "@/assets/gallery-uddhar-fieldops.jpg";
import galleryBangladeshFlag from "@/assets/gallery-bangladesh-flag.jpg";
import galleryBdFlagPortrait from "@/assets/gallery-bd-flag-portrait.jpg";
import galleryPodcast from "@/assets/gallery-podcast.jpg";

const items = [
  // NASA Conrad Challenge & Space Center
  { src: galleryConradChallenge, label: "NASA Conrad Challenge – Presenting" },
  { src: galleryConradExomax, label: "Conrad Challenge – EXO MAX Booth" },
  { src: galleryConradLunar, label: "Conrad Challenge – Lunar Module" },
  { src: galleryNasaConrad, label: "NASA Conrad Summit" },
  { src: galleryConradVenue1, label: "Conrad Summit – Venue Overview" },
  { src: galleryConradVenue2, label: "Conrad Summit – Space Center Stage" },
  { src: galleryNasaLogo, label: "At NASA" },
  { src: gallerySpaceCenter, label: "Space Center Houston" },

  // United Nations
  { src: galleryUnAssembly, label: "UN General Assembly Hall" },
  { src: galleryUnAssembly2, label: "UN General Assembly – Standing" },
  { src: galleryUnCouncil, label: "UN Trusteeship Council" },
  { src: galleryUnMural, label: "UN Headquarters – Mural Hall" },
  { src: galleryUnWelcome, label: "Welcome to the United Nations" },
  { src: galleryUnFlag, label: "UN Flag – Dag Hammarskjöld Quote" },
  { src: galleryUnSphere, label: "UN Headquarters – Sphere Sculpture" },
  { src: galleryUnLobby, label: "UN Headquarters – Lobby" },
  { src: galleryMandelaStatue, label: "Nelson Mandela Statue – UN" },
  { src: galleryUnHorseStatue, label: "UN Grounds – Peace Statue" },
  { src: galleryUnBerlinWall, label: "Berlin Wall – Trophy of Civil Rights" },
  { src: galleryUnFlameHope, label: "UN – Flame of Hope Memorial" },

  // GENIUS Olympiad
  { src: galleryGeniusOlympiad, label: "GENIUS Olympiad – Bronze Medal" },
  { src: galleryGeniusMedal, label: "GENIUS Olympiad – Medal Ceremony" },
  { src: galleryGeniusPoster, label: "GENIUS Olympiad – HydroPlasmaX Poster" },
  { src: galleryGeniusStage, label: "GENIUS Olympiad – Award Ceremony" },

  // TechnoXian Robotics
  { src: galleryTechnoxian, label: "TechnoXian Robotics Championship" },
  { src: galleryTechnoxianFlag, label: "TechnoXian – Representing Bangladesh" },
  { src: galleryTrophy, label: "TechnoXian Trophy" },
  { src: galleryRobot, label: "Robotics Project" },

  // WICE
  { src: galleryWiceAward, label: "WICE 2024 – Award Ceremony" },

  // iSpark & Seminars
  { src: gallerySeminarSpeaking, label: "Seminar – Public Speaking" },
  { src: gallerySchoolSeminar1, label: "iSpark – School Seminar" },
  { src: gallerySchoolSeminar2, label: "iSpark – Teaching Students" },
  { src: gallerySchoolSeminar3, label: "iSpark – Classroom Session" },
  { src: gallerySchoolSeminar4, label: "iSpark – Q&A Session" },
  { src: gallerySchoolSeminar5, label: "iSpark – Full Classroom" },

  // Other
  { src: galleryTorontoTalk, label: "University of Toronto – Conference" },
  { src: galleryUddharFieldops, label: "Uddhar – Field Operations" },
  { src: galleryPodcast, label: "Podcast Interview" },
  { src: galleryBangladeshFlag, label: "Bangladesh Embassy" },
  { src: galleryBdFlagPortrait, label: "With Bangladesh Flag" },
];

const INITIAL_COUNT = 12;

const GallerySection = () => {
  const [selected, setSelected] = useState<(typeof items)[0] | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? items : items.slice(0, INITIAL_COUNT);

  return (
    <section className="section-padding max-w-6xl mx-auto">
      <AnimatedSection>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-16 text-gradient inline-block">In The Field</h2>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {visible.map((item, i) => (
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

      {!showAll && items.length > INITIAL_COUNT && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/40 text-primary font-body font-semibold text-sm tracking-wide hover:bg-primary/10 transition-colors"
          >
            Show More ({items.length - INITIAL_COUNT} more) <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      )}

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
