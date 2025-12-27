import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Experience</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />

        <div className="max-w-4xl mx-auto">
          <Card className="glass-effect p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-2xl font-bold">Image Processing Expert & Team Lead</h3>
                  <span className="text-sm text-muted-foreground">March 2023 – Present</span>
                </div>
                <p className="text-primary mb-4">University of Science and Industry Growth Center, Tehran</p>
                
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Lead the computer vision unit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Design and deploy real-time perception pipelines on embedded hardware</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Manage team of computer vision engineers and researchers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Implement state-of-the-art deep learning models for production environments</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
