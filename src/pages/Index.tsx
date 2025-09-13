import { Hero } from "@/components/Hero";
import { UploadSection } from "@/components/UploadSection";
import { Dashboard } from "@/components/Dashboard";
import { AssessmentPreview } from "@/components/AssessmentPreview";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <UploadSection />
      <AssessmentPreview />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default Index;
