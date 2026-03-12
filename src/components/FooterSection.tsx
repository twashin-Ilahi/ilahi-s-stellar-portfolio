import { Mail, Linkedin, Github } from "lucide-react";

const FooterSection = () => (
  <footer className="border-t border-border py-10 px-4">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-center md:text-left">
        <p className="font-heading text-base font-bold text-foreground">Md Twashin Ilahi</p>
        <p className="text-xs text-muted-foreground font-body">Researcher · Founder · Innovator</p>
      </div>
      <div className="flex items-center gap-4">
        <a href="mailto:twashinilahi990@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
          <Mail className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/md-twashin-ilahi-b9baa4261/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
          <Github className="w-5 h-5" />
        </a>
      </div>
      <p className="text-xs text-muted-foreground font-body">© 2025 Md Twashin Ilahi. All rights reserved.</p>
    </div>
  </footer>
);

export default FooterSection;
