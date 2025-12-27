import { Card } from "@/components/ui/card";

const Skills = () => {
  const expertSkills = [
    "Python",
    "PyTorch",
    "Computer Vision & Image Processing",
    "Edge Devices (Jetson, Raspberry Pi)",
  ];

  const proficientSkills = [
    "React",
    "FastAPI",
    "Docker",
    "Linux (Ubuntu)",
    "MATLAB & Simulink",
    "AirSim",
    "Unreal Engine",
    "ArduPilot",
  ];

  const specializations = [
    "🚀 Object Detection & Image Processing",
    "🎯 Single Object Tracking (SOT)",
    "📹 Multiple Object Tracking (MOT)",
    "🔢 Quantization Techniques",
    "💻 Real-time Vision Controllers on NVIDIA Jetson",
    "🤖 DRL for Autonomous Systems",
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Skills & Expertise</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />

        <div className="max-w-6xl mx-auto space-y-8">
          <Card className="glass-effect p-8">
            <h3 className="text-2xl font-semibold mb-6 gradient-text">Expert Level</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {expertSkills.map((skill) => (
                <div key={skill} className="p-4 bg-primary/10 rounded-lg border border-primary/30 hover:border-primary/50 transition-colors">
                  <p className="text-center font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="glass-effect p-8">
            <h3 className="text-2xl font-semibold mb-6 gradient-text">Proficient</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {proficientSkills.map((skill) => (
                <div key={skill} className="p-4 bg-accent/10 rounded-lg border border-accent/30 hover:border-accent/50 transition-colors">
                  <p className="text-center font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="glass-effect p-8">
            <h3 className="text-2xl font-semibold mb-6 gradient-text">Specializations</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {specializations.map((spec) => (
                <div key={spec} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                  <span className="text-lg">{spec}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
