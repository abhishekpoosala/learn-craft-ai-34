import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Mail, Github, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-8 h-8 text-accent" />
              <span className="text-xl font-bold">EduAI Platform</span>
            </div>
            <p className="text-primary-foreground/80 text-sm max-w-sm">
              Transform your educational content with AI-powered assessments 
              and intelligent learning analytics.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Content Upload</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Assessment Generation</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Student Analytics</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Progress Tracking</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Tutorials</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Best Practices</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <Card className="p-6 bg-white/5 border-white/10 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h4 className="font-semibold text-lg mb-2">Stay Updated</h4>
              <p className="text-primary-foreground/80 text-sm">
                Get the latest updates on new features and educational insights.
              </p>
            </div>
            <div className="flex space-x-2">
              <Button variant="secondary" size="sm">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </Card>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 pt-8 border-t border-white/10">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 EduAI Platform. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};