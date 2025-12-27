import { ArrowDown, Mail, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <img 
              src={profileImage}
              alt="Hamidreza Khosravani"
              className="relative w-48 h-48 rounded-full object-cover border-4 border-primary/50 shadow-2xl"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              Hamidreza Khosravani
            </h1>
            <h2 className="text-2xl md:text-3xl gradient-text font-semibold">
              AI Programmer | Computer Vision Specialist
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Nearly 3 years of specialized experience in Computer Vision on Edge Devices. 
            Proven track record in real-world UAV perception, tracking, and autonomous navigation.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gap-2" asChild>
              <a href="#contact">
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="https://www.linkedin.com/in/hamidreza-khosravani-790b28207/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="https://t.me/khosroo_2000" target="_blank" rel="noopener noreferrer">
                <Send className="w-5 h-5" />
                Telegram
              </a>
            </Button>
          </div>

          <a href="#about" className="mt-8 text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
