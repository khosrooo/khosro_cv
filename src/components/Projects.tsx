import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Network Camera SDK Library",
      organization: "University of Science and Industry",
      description: "Built a unified Python/C++ library for 20+ IP camera models",
      tags: ["Python", "C++", "SDK Development"],
    },
    {
      title: "Lightweight Multi-Object Detection & Tracking Pipeline",
      description: "Optimized YOLO variants with TensorRT, ONNX, and DeepStream. Integrated StrongSORT, ByteTrack, and custom trackers. C++ & Python implementations for Jetson platforms",
      tags: ["YOLO", "TensorRT", "DeepStream", "Jetson"],
    },
    {
      title: "Single-Object Trackers on Jetson Nano",
      description: "Deployed ultra-lightweight trackers (KCF, CSRT, DeepSORT variants). Achieved real-time performance at < 30g RAM",
      tags: ["Object Tracking", "Jetson Nano", "Real-time"],
    },
    {
      title: "FPV/Hexacopter Visual Navigation",
      description: "2-Year Field Project: Fused classical control (PID) with vision-based pose estimation. Full MAVLink/DroneKit stack integration. Hardware-in-the-loop (HITL) validated",
      tags: ["UAV", "Computer Vision", "Control Systems", "MAVLink"],
    },
    {
      title: "Deep Reinforcement Learning for Ground Target Tracking",
      type: "Thesis Project",
      description: "Trained agent in AirSim + Unreal Engine. Sim-to-real transfer with SITL evaluation. Paper under review",
      tags: ["DRL", "AirSim", "Unreal Engine", "UAV"],
    },
    {
      title: "PySide2 Ground Control Station",
      description: "Live video feed + telemetry overlay. Real-time flight command interface",
      tags: ["PySide2", "Qt", "GCS", "UAV"],
    },
    {
      title: "GPS-Denied Navigation via Satellite Imagery",
      description: "Deep feature matching (SuperGlue, LoFTR) + classical homography. Robust outdoor positioning without GNSS",
      tags: ["Computer Vision", "Feature Matching", "Navigation"],
    },
    {
      title: "Vision-Based Target Geolocation in GPS-Denied Areas",
      description: "Monocular depth + camera pose estimation pipeline",
      tags: ["Monocular Vision", "Depth Estimation", "Localization"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Key Projects</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="glass-effect p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <div className="space-y-3">
                <h3 className="text-xl font-bold">{project.title}</h3>
                {project.organization && (
                  <p className="text-sm text-primary">{project.organization}</p>
                )}
                {project.type && (
                  <Badge variant="outline" className="border-accent text-accent">{project.type}</Badge>
                )}
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
