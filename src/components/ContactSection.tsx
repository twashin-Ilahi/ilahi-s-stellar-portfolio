import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Mail, Linkedin, Send, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding max-w-4xl mx-auto">
    <AnimatedSection>
      <div className="text-center mb-14">
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-gradient inline-block">
          Let's Build Something That Matters
        </h2>
        <p className="text-muted-foreground font-body text-sm md:text-base max-w-xl mx-auto">
          Open to research collaborations, speaking invitations, startup partnerships, and internship opportunities.
        </p>
      </div>
    </AnimatedSection>

    {/* Prior Mail — bold & prominent */}
    <AnimatedSection delay={0.1}>
      <a
        href="https://priormailid.vercel.app/twashin"
        target="_blank"
        rel="noopener noreferrer"
        className="block glass-card p-6 md:p-8 mb-6 hover:border-primary/40 transition-all hover:glow-blue group text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-2">
          <Send className="w-6 h-6 text-primary" />
          <span className="font-heading text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
            Send me a Prior Mail
          </span>
        </div>
        <p className="text-xs text-muted-foreground font-body">
          The fastest way to reach me — prioritized inbox
        </p>
      </a>
    </AnimatedSection>

    {/* Email + LinkedIn + Location */}
    <AnimatedSection delay={0.2}>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="mailto:twashinilahi990@gmail.com"
          className="flex items-center gap-2 px-5 py-3 rounded-lg glass-card text-sm font-body text-foreground hover:border-primary/40 transition-colors"
        >
          <Mail className="w-4 h-4 text-primary" /> twashinilahi990@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/md-twashin-ilahi-b9baa4261/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 rounded-lg glass-card text-sm font-body text-foreground hover:border-primary/40 transition-colors"
        >
          <Linkedin className="w-4 h-4 text-primary" /> LinkedIn
        </a>
        <span className="flex items-center gap-2 text-sm font-body text-muted-foreground">
          <MapPin className="w-4 h-4 text-primary" /> Rajshahi, Bangladesh 🇧🇩
        </span>
      </div>
    </AnimatedSection>
  </section>
);

export default ContactSection;
