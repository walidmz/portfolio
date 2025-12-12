import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Mail, Github, Linkedin, Shield, Terminal, Phone, Award } from "lucide-react";
import ContactForm from './ContactForm';
import CvDownloadModal from './CvDownloadModal';
import SkillsMatrixModal from './SkillsMatrixModal';
import PortfolioStats from './PortfolioStats';

const HeroSection = () => {
  const [isContactFormOpen, setContactFormOpen] = useState(false);
  const [isCvModalOpen, setCvModalOpen] = useState(false);
  const [isSkillsMatrixOpen, setSkillsMatrixOpen] = useState(false);

  const handleOpenContactForm = () => setContactFormOpen(true);
  const handleCloseContactForm = () => setContactFormOpen(false);

  const handleOpenCvModal = () => setCvModalOpen(true);
  const handleCloseCvModal = () => setCvModalOpen(false);

  const handleOpenSkillsMatrix = () => setSkillsMatrixOpen(true);
  const handleCloseSkillsMatrix = () => setSkillsMatrixOpen(false);

  return (
    <>
      <section id="about" className="min-h-screen flex items-center justify-center pt-16 matrix-bg">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Content - Now on the left */}
            <div className="relative lg:justify-self-start">
              <div className="absolute inset-0 bg-grey-300/60 blur-3xl rounded-full"></div>
              <img 
                src="/walid-hero-image.png" 
                alt="Walid Marzouk" 
                className="relative w-full max-w-md mx-auto rounded-full shadow-2xl"
              />
            </div>

            {/* Text Content - Now on the right */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <Terminal className="h-5 w-5" />
                  <span className="text-sm uppercase tracking-wide">Software Developer</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold">
                  <span className="text-foreground">Hi, I'm</span>{" "}
                  <span className="bg-gradient-cyber bg-clip-text text-transparent">
                    Walid Marzouk
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                 Full-stack Software Engineer passionate about creating reliable, high-performance web and mobile applications. I’m deeply interested in DevOps, AI, automation, and quality engineering, and I strive to build products that are both scalable and intuitive.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow" onClick={handleOpenCvModal}>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={handleOpenContactForm}>
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={handleOpenSkillsMatrix}>
                  <Shield className="mr-2 h-4 w-4" />
                  Skills Matrix
                </Button>
              </div>

              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary" asChild>
                  <a href="https://github.com/walidmz" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                 variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-primary"
              onClick={handleOpenContactForm}
              >
            <Mail className="h-5 w-5" />
            </Button>

                 
<Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary" asChild>
  <a href="https://www.linkedin.com/in/walidmarzouk/" target="_blank" rel="noopener noreferrer">
    <Linkedin className="h-5 w-5" />
  </a>
</Button>                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary" asChild>
                  <a href="tel:+21699054535">
                    <Phone className="h-5 w-5" />
                  </a>
                </Button>
              </div>
               
            </div>
          </div>
        </div>
      </section>
      {isContactFormOpen && <ContactForm onClose={handleCloseContactForm} />}
      {isCvModalOpen && <CvDownloadModal onClose={handleCloseCvModal} />}
      {isSkillsMatrixOpen && <SkillsMatrixModal onClose={handleCloseSkillsMatrix} />}
    </>
  );
};

export default HeroSection;