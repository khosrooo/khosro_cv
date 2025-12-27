import { Mail, Phone, Linkedin, Send, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hr.khosravani2000@gmail.com",
      href: "mailto:hr.khosravani2000@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(+98) 992-098-8734",
      href: "tel:+989920988734",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tehran, Iran",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hamidreza-khosravani-790b28207/",
    },
    {
      icon: Send,
      label: "Telegram",
      href: "https://t.me/khosroo_2000",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />

        <div className="max-w-4xl mx-auto">
          <Card className="glass-effect p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-medium hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-4">Connect With Me</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always interested in discussing new opportunities, collaborations, 
                  or innovative projects in AI, Computer Vision, and Autonomous Systems.
                </p>
                <div className="flex flex-col gap-3">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.label}
                      variant="outline"
                      className="w-full justify-start gap-3"
                      asChild
                    >
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        <link.icon className="w-5 h-5" />
                        {link.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
