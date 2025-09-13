import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Clock, 
  HelpCircle, 
  FileText, 
  Edit,
  Play,
  Users,
  BarChart3
} from "lucide-react";

export const AssessmentPreview = () => {
  const mockAssessments = [
    {
      id: 1,
      title: "Biology Chapter 5: Cell Division",
      type: "Multiple Choice",
      questions: 15,
      duration: "20 min",
      difficulty: "Medium",
      completions: 18,
      avgScore: 84,
      status: "Active",
    },
    {
      id: 2,
      title: "Physics: Laws of Motion",
      type: "Mixed Format",
      questions: 12,
      duration: "25 min",
      difficulty: "Hard",
      completions: 12,
      avgScore: 76,
      status: "Draft",
    },
    {
      id: 3,
      title: "Math: Quadratic Equations",
      type: "Fill in the Blanks",
      questions: 10,
      duration: "15 min",
      difficulty: "Easy",
      completions: 24,
      avgScore: 91,
      status: "Active",
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-success/10 text-success border-success/20";
      case "Medium": return "bg-warning/10 text-warning border-warning/20";
      case "Hard": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-success/10 text-success border-success/20";
      case "Draft": return "bg-muted text-muted-foreground border-border";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-hero mb-4">
            AI-Generated Assessments
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Automatically generate diverse question types from your uploaded content. 
            Track student performance and get insights to improve learning outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {mockAssessments.map((assessment) => (
            <Card key={assessment.id} className="p-6 gradient-card shadow-card border-0 group hover:shadow-elevated transition-all duration-300">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-hero mb-2 group-hover:text-primary transition-colors">
                    {assessment.title}
                  </h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge variant="outline" className={getDifficultyColor(assessment.difficulty)}>
                      {assessment.difficulty}
                    </Badge>
                    <Badge variant="outline" className={getStatusColor(assessment.status)}>
                      {assessment.status}
                    </Badge>
                  </div>
                </div>
                <FileText className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </div>

              {/* Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <HelpCircle className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span className="text-secondary">{assessment.type}</span>
                  </div>
                  <span className="font-medium">{assessment.questions} questions</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span className="text-secondary">Duration</span>
                  </div>
                  <span className="font-medium">{assessment.duration}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span className="text-secondary">Completions</span>
                  </div>
                  <span className="font-medium">{assessment.completions}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <BarChart3 className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span className="text-secondary">Avg. Score</span>
                  </div>
                  <span className="font-medium text-success">{assessment.avgScore}%</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <Button 
                  size="sm" 
                  className="flex-1"
                  disabled={assessment.status === "Draft"}
                >
                  <Play className="w-4 h-4 mr-1" />
                  Start
                </Button>
                <Button size="sm" variant="outline">
                  <Edit className="w-4 h-4" />
                </Button>
              </div>

              {/* Performance Indicator */}
              <div className="mt-4 pt-4 border-t border-border/50">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Performance</span>
                  <span className="text-success font-medium">
                    {assessment.avgScore >= 80 ? 'Excellent' : 
                     assessment.avgScore >= 70 ? 'Good' : 
                     'Needs Improvement'}
                  </span>
                </div>
                <div className="w-full bg-progress-bg rounded-full h-1.5 mt-2">
                  <div 
                    className="bg-progress-fill h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${assessment.avgScore}%` }}
                  ></div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Assessment Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center gradient-card shadow-card border-0 group hover:shadow-elevated transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Multiple Choice Questions</h3>
            <p className="text-sm text-secondary">
              Auto-generated MCQs with intelligent distractors based on content analysis
            </p>
          </Card>

          <Card className="p-6 text-center gradient-card shadow-card border-0 group hover:shadow-elevated transition-all duration-300">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Edit className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Fill in the Blanks</h3>
            <p className="text-sm text-secondary">
              Context-aware blank identification for key terms and concepts
            </p>
          </Card>

          <Card className="p-6 text-center gradient-card shadow-card border-0 group hover:shadow-elevated transition-all duration-300">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-success group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Short Answer Questions</h3>
            <p className="text-sm text-secondary">
              Open-ended questions that test deeper understanding and analysis
            </p>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="p-8 gradient-card shadow-card border-0 inline-block">
            <h3 className="text-xl font-semibold mb-4">Ready to Create Your First Assessment?</h3>
            <p className="text-secondary mb-6 max-w-md">
              Upload your educational content and let our AI generate comprehensive assessments 
              tailored to your curriculum.
            </p>
            <Button size="lg" className="bg-success hover:bg-success/90">
              Get Started with Supabase Integration
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};