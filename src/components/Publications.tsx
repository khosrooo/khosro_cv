import { FileText, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Publications = () => {
  const publications = [
    {
      title: "Assessing the Contamination Intensity of Porcelain Insulators Using Deep Learning Networks by UAV",
      type: "Published",
      publisher: "IEEE",
      link: "#",
      description: "B.Sc. Thesis - Semantic segmentation of pollution levels using drone imagery",
    },
    {
      title: "Sim-to-Real Autonomous UAV Landing on Moving Platforms in GPS-Denied Environments Using Deep Reinforcement Learning",
      type: "Under Review",
      description: "Thesis Project - Trained agent in AirSim + Unreal Engine with sim-to-real transfer and SITL evaluation",
    },
  ];

  return (
    <section id="publications" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Publications</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />

        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <Card key={index} className="glass-effect p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl font-bold">{pub.title}</h3>
                    {pub.link && (
                      <Button size="sm" variant="ghost" className="gap-2" asChild>
                        <a href={pub.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                  <p className="text-sm text-primary mb-2">
                    {pub.type} {pub.publisher && `| ${pub.publisher}`}
                  </p>
                  <p className="text-muted-foreground text-sm">{pub.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
