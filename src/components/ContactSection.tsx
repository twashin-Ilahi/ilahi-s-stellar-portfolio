import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Mail, Linkedin, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="section-padding max-w-3xl mx-auto">
      <AnimatedSection>
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-gradient inline-block">
            Let's Build Something That Matters
          </h2>
          <p className="text-muted-foreground font-body text-sm md:text-base max-w-xl mx-auto">
            Open to research collaborations, speaking invitations, startup partnerships, and internship opportunities.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="mailto:twashinilahi231@gmail.com"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg glass-card text-sm font-body text-foreground hover:border-primary/40 transition-colors"
          >
            <Mail className="w-4 h-4 text-primary" /> twashinilahi231@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/md-twashin-ilahi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg glass-card text-sm font-body text-foreground hover:border-primary/40 transition-colors"
          >
            <Linkedin className="w-4 h-4 text-primary" /> LinkedIn
          </a>
          <span className="flex items-center gap-2 text-sm font-body text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" /> Rajshahi, Bangladesh 🇧🇩
          </span>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="glass-card p-6 md:p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-muted/40 border border-border rounded-lg px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-muted/40 border border-border rounded-lg px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>
          <textarea
            rows={4}
            placeholder="Your message..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-muted/40 border border-border rounded-lg px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity flex items-center gap-2 justify-center"
          >
            Send Message <Send className="w-4 h-4" />
          </button>
        </form>
      </AnimatedSection>
    </section>
  );
};

export default ContactSection;
