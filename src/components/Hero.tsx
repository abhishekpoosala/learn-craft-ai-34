import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, BookOpen, BarChart3, Users } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full blur-lg"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Education with{" "}
              <span className="text-green-200 animate-bounce-soft inline-block">
                AI-Powered
              </span>{" "}
              Learning
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Upload educational content, generate smart assessments, and track student 
              progress with our intelligent learning platform. Perfect for educators 
              who want to enhance their teaching with data-driven insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button size="lg" variant="secondary" className="group">
                <Upload className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Upload Content
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                View Demo
              </Button>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="p-4 gradient-card shadow-soft border-0 text-center group hover:shadow-elevated transition-all duration-300">
                <BookOpen className="w-8 h-8 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-sm">Smart Content</h3>
                <p className="text-xs text-secondary">Extract & analyze</p>
              </Card>
              <Card className="p-4 gradient-card shadow-soft border-0 text-center group hover:shadow-elevated transition-all duration-300">
                <BarChart3 className="w-8 h-8 mx-auto mb-2 text-accent group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-sm">Auto Assessments</h3>
                <p className="text-xs text-secondary">Generate quizzes</p>
              </Card>
              <Card className="p-4 gradient-card shadow-soft border-0 text-center group hover:shadow-elevated transition-all duration-300">
                <Users className="w-8 h-8 mx-auto mb-2 text-success group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-sm">Track Progress</h3>
                <p className="text-xs text-secondary">Monitor learning</p>
              </Card>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Educational dashboard visualization" 
                className="w-full h-auto rounded-2xl shadow-elevated"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-success rounded-full flex items-center justify-center shadow-card animate-bounce-soft">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-card animate-bounce-soft" style={{ animationDelay: '1s' }}>
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};