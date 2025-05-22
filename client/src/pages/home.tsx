import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import HowItWorksSection from "@/components/how-it-works-section";
import ProjectFormSection from "@/components/project-form-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <ProjectFormSection />
      <Footer />
    </div>
  );
}
