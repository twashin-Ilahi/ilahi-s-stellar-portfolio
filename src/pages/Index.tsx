import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import IkigaiSection from "@/components/IkigaiSection";
import CountriesSection from "@/components/CountriesSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResearchSection from "@/components/ResearchSection";
import AwardsSection from "@/components/AwardsSection";
import NewsSection from "@/components/NewsSection";
import SkillsSection from "@/components/SkillsSection";
import TrainingSection from "@/components/TrainingSection";
import WritingsSection from "@/components/WritingsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Divider = () => (
  <div className="max-w-6xl mx-auto px-8">
    <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
  </div>
);

const Index = () => (
  <main className="bg-background min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <IkigaiSection />
    <Divider />
    <CountriesSection />
    <ExperienceSection />
    <Divider />
    <ProjectsSection />
    <ResearchSection />
    <Divider />
    <AwardsSection />
    <NewsSection />
    <Divider />
    <SkillsSection />
    <TrainingSection />
    <WritingsSection />
    <Divider />
    <GallerySection />
    <ContactSection />
    <FooterSection />
  </main>
);

export default Index;
