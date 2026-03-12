import { motion } from "framer-motion";
import StarField from "./StarField";
import { ArrowDown, Download, FileSearch } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const badges = ["NASA", "Harvard", "UC Berkeley", "CERN", "UN"];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-16">
    <StarField />
    <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
      {/* Profile photo */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto mb-8 w-36 h-36 md:w-44 md:h-44 rounded-full glow-blue flex items-center justify-center border-2 border-primary/40 bg-muted/40 backdrop-blur overflow-hidden"
      >
        <img
          src={profilePhoto}
          alt="Md Twashin Ilahi"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="font-heading text-5xl md:text-7xl lg:text-8xl font-800 tracking-tight mb-6"
      >
        <span className="text-gradient">Researcher.</span>{" "}
        <span className="text-foreground">Founder.</span>{" "}
        <span className="text-gradient">Innovator.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body leading-relaxed"
      >
        Building the future from Bangladesh — one satellite, startup, and research paper at a time.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
      >
        <a
          href="#projects"
          className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          View My Work <ArrowDown className="w-4 h-4" />
        </a>
        <a
          href="/CV_Twashin_Ilahi.pdf"
          download
          className="px-8 py-3.5 rounded-lg border border-primary/40 text-primary font-body font-semibold text-sm tracking-wide hover:bg-primary/10 transition-colors flex items-center gap-2"
        >
          Download CV <Download className="w-4 h-4" />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex flex-wrap items-center justify-center gap-3 md:gap-5"
      >
        {badges.map((b) => (
          <span
            key={b}
            className="text-xs md:text-sm font-body font-medium text-muted-foreground/70 tracking-widest uppercase"
          >
            {b}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
