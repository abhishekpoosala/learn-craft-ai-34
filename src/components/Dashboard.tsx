import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  FileText, 
  Users, 
  BarChart3, 
  Trophy, 
  Clock,
  Target,
  TrendingUp,
  CheckCircle,
  AlertCircle
} from "lucide-react";

export const Dashboard = () => {
  const mockProgress = 75;
  const mockStudents = 24;
  const mockAssessments = 8;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-hero mb-4">
            Learning Analytics Dashboard
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Track student performance, monitor progress, and get insights 
            to improve your educational content and teaching methods.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Key Metrics */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 gradient-card shadow-card border-0 text-center group hover:shadow-elevated transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-hero">{mockStudents}</h3>
                <p className="text-sm text-secondary">Active Students</p>
                <div className="flex items-center justify-center mt-2 text-success">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span className="text-xs">+12% this week</span>
                </div>
              </Card>

              <Card className="p-6 gradient-card shadow-card border-0 text-center group hover:shadow-elevated transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-hero">{mockAssessments}</h3>
                <p className="text-sm text-secondary">Assessments Created</p>
                <div className="flex items-center justify-center mt-2 text-success">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  <span className="text-xs">All generated</span>
                </div>
              </Card>

              <Card className="p-6 gradient-card shadow-card border-0 text-center group hover:shadow-elevated transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-success group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-hero">{mockProgress}%</h3>
                <p className="text-sm text-secondary">Avg. Completion</p>
                <div className="flex items-center justify-center mt-2 text-success">
                  <Target className="w-4 h-4 mr-1" />
                  <span className="text-xs">Above target</span>
                </div>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="p-6 gradient-card shadow-card border-0">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-primary" />
                Recent Activity
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-background rounded-lg">
                  <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Sarah completed "Biology Chapter 5" assessment</p>
                    <p className="text-sm text-secondary">Score: 92% • 2 minutes ago</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-background rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">New assessment generated for "Physics Fundamentals"</p>
                    <p className="text-sm text-secondary">15 questions • 5 minutes ago</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-background rounded-lg">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Content uploaded: "Advanced Mathematics.pdf"</p>
                    <p className="text-sm text-secondary">Ready for processing • 10 minutes ago</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Progress Sidebar */}
          <div className="space-y-6">
            {/* Overall Progress */}
            <Card className="p-6 gradient-card shadow-card border-0">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-primary" />
                Overall Progress
              </h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Course Completion</span>
                    <span className="font-medium">{mockProgress}%</span>
                  </div>
                  <Progress value={mockProgress} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Assessment Accuracy</span>
                    <span className="font-medium">89%</span>
                  </div>
                  <Progress value={89} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Student Engagement</span>
                    <span className="font-medium">94%</span>
                  </div>
                  <Progress value={94} className="h-2" />
                </div>
              </div>

              <Button className="w-full mt-6" variant="outline">
                View Detailed Report
              </Button>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 gradient-card shadow-card border-0">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <Button className="w-full justify-start" variant="ghost">
                  <FileText className="w-4 h-4 mr-2" />
                  Create Assessment
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <Users className="w-4 h-4 mr-2" />
                  Manage Students
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Content Library
                </Button>
              </div>
            </Card>

            {/* System Status */}
            <Card className="p-6 gradient-card shadow-card border-0">
              <h3 className="text-lg font-semibold mb-4">System Status</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Content Processing</span>
                  <div className="flex items-center">
                    <AlertCircle className="w-4 h-4 text-warning mr-1" />
                    <span className="text-xs text-warning">Setup Required</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Assessment Engine</span>
                  <div className="flex items-center">
                    <AlertCircle className="w-4 h-4 text-warning mr-1" />
                    <span className="text-xs text-warning">Setup Required</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">User Interface</span>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-success mr-1" />
                    <span className="text-xs text-success">Active</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-warning/10 border border-warning/20 rounded-lg">
                <p className="text-xs text-warning">
                  Connect to Supabase to activate all features
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Additional Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 gradient-card shadow-card border-0 text-center group hover:shadow-elevated transition-all duration-300">
            <Target className="w-12 h-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold mb-2">Personalized Recommendations</h3>
            <p className="text-sm text-secondary mb-4">
              AI-powered study recommendations based on performance patterns and learning gaps.
            </p>
            <Button variant="outline" size="sm">Coming Soon</Button>
          </Card>

          <Card className="p-6 gradient-card shadow-card border-0 text-center group hover:shadow-elevated transition-all duration-300">
            <BarChart3 className="w-12 h-12 mx-auto mb-4 text-accent group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold mb-2">Advanced Analytics</h3>
            <p className="text-sm text-secondary mb-4">
              Deep insights into learning patterns, difficulty analysis, and performance trends.
            </p>
            <Button variant="outline" size="sm">Coming Soon</Button>
          </Card>

          <Card className="p-6 gradient-card shadow-card border-0 text-center group hover:shadow-elevated transition-all duration-300">
            <Trophy className="w-12 h-12 mx-auto mb-4 text-success group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold mb-2">Gamification</h3>
            <p className="text-sm text-secondary mb-4">
              Badges, leaderboards, and achievement systems to boost student engagement.
            </p>
            <Button variant="outline" size="sm">Coming Soon</Button>
          </Card>
        </div>
      </div>
    </section>
  );
};