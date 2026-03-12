import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CountriesSection from "@/components/CountriesSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResearchSection from "@/components/ResearchSection";
import AwardsSection from "@/components/AwardsSection";
import NewsSection from "@/components/NewsSection";
import SkillsSection from "@/components/SkillsSection";
import WritingsSection from "@/components/WritingsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <main className="bg-background min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <CountriesSection />
    <ExperienceSection />
    <ProjectsSection />
    <ResearchSection />
    <AwardsSection />
    <SkillsSection />
    <WritingsSection />
    <GallerySection />
    <ContactSection />
    <FooterSection />
  </main>
);

export default Index;
