import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResearchSection from "@/components/ResearchSection";
import AwardsSection from "@/components/AwardsSection";
import SkillsSection from "@/components/SkillsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <main className="bg-background min-h-screen">
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <ResearchSection />
    <AwardsSection />
    <SkillsSection />
    <GallerySection />
    <ContactSection />
    <FooterSection />
  </main>
);

export default Index;
