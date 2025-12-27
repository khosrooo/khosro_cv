import { GraduationCap, MapPin, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">About Me</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Card: Education + Location */}
          <Card className="glass-effect p-8 space-y-6">
            <div className="flex items-start gap-4">
              <GraduationCap className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div className="w-full">
                <h3 className="text-2xl font-semibold mb-4">Education</h3>
                <div className="space-y-6">
                  {/* Master's Degree */}
                  <div>
                    <p className="font-semibold text-foreground">
                      Iran University of Science and Technology
                    </p>
                    <p className="text-muted-foreground">
                      <strong>Master of Science - MS, Electrical Engineering (Control)</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Sep 2022 - Sep 2025
                    </p>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1 list-disc list-inside">
                      <li>Grade: 19/20</li>
                      <li>Thesis Focus: Deep Reinforcement Learning and Computer Vision</li>
                      <li>Direct admission via top-undergraduate quota</li>
                    </ul>
                  </div>

                  {/* Bachelor's Degree */}
                  <div className="border-t border-muted pt-6">
                    <p className="font-semibold text-foreground">
                      Iran University of Science and Technology
                    </p>
                    <p className="text-muted-foreground">
                      <strong>Bachelor's degree, Electrical Engineering (Control)</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      2018 - 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">Tehran, Iran</p>
                <p className="text-sm text-muted-foreground mt-2">
                  hr.khosravani2000@gmail.com<br />
                  (+98) 992-098-8734
                </p>
              </div>
            </div>
          </Card>

          {/* Right Card: Professional Summary + Interests */}
          <Card className="glass-effect p-8 space-y-6">
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Professional Summary</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nearly 3 years of specialized experience in Computer Vision on Edge Devices
                  (Jetson series, Raspberry Pi). Hands-on expertise in LLMs and AI Agents.
                  Proven track record in real-world UAV perception, tracking, and autonomous navigation.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xl font-semibold">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {["Large Language Models (LLM)", "Multi-Agent Systems (MAS)", "Agentic AI"].map(
                  (interest) => (
                    <span
                      key={interest}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                    >
                      {interest}
                    </span>
                  )
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
