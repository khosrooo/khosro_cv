const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Hamidreza Khosravani. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            AI Programmer | Computer Vision Specialist
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
