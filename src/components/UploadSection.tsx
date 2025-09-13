import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, File, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const UploadSection = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    const validFiles = files.filter(file => 
      file.type === 'application/pdf' || 
      file.type === 'text/plain' ||
      file.name.endsWith('.txt') ||
      file.name.endsWith('.pdf')
    );
    
    if (validFiles.length > 0) {
      setUploadedFiles(prev => [...prev, ...validFiles]);
      toast({
        title: "Files uploaded successfully!",
        description: `${validFiles.length} file(s) ready for processing`,
        duration: 3000,
      });
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload PDF or text files only",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      setUploadedFiles(prev => [...prev, ...files]);
      toast({
        title: "Files uploaded successfully!",
        description: `${files.length} file(s) ready for processing`,
        duration: 3000,
      });
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-hero mb-4">
            Upload Educational Content
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Upload your PDFs, documents, or text files to automatically extract content 
            and generate intelligent assessments for your students.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 gradient-card shadow-card border border-border/50">
            {/* Upload Area */}
            <div
              className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${
                isDragOver 
                  ? 'border-primary bg-primary/5 scale-105' 
                  : 'border-border hover:border-primary/50 hover:bg-primary/5'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <Upload className={`w-16 h-16 mx-auto mb-4 transition-colors ${
                isDragOver ? 'text-primary' : 'text-muted-foreground'
              }`} />
              
              <h3 className="text-xl font-semibold mb-2">
                Drag & drop your files here
              </h3>
              <p className="text-muted-foreground mb-6">
                Or click to browse and select files
              </p>
              
              <input
                type="file"
                multiple
                accept=".pdf,.txt"
                onChange={handleFileInput}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              
              <Button variant="outline" className="pointer-events-none">
                <File className="w-4 h-4 mr-2" />
                Choose Files
              </Button>
              
              <p className="text-sm text-muted-foreground mt-4">
                Supported formats: PDF, TXT (Max 10MB each)
              </p>
            </div>

            {/* Uploaded Files */}
            {uploadedFiles.length > 0 && (
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 text-success mr-2" />
                  Uploaded Files ({uploadedFiles.length})
                </h4>
                
                <div className="space-y-3">
                  {uploadedFiles.map((file, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 bg-background rounded-lg border shadow-soft"
                    >
                      <div className="flex items-center space-x-3">
                        {file.type === 'application/pdf' ? (
                          <FileText className="w-6 h-6 text-red-500" />
                        ) : (
                          <File className="w-6 h-6 text-blue-500" />
                        )}
                        <div>
                          <p className="font-medium">{file.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile(index)}
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center mt-8">
                  <Button size="lg" className="bg-success hover:bg-success/90">
                    Process Files & Generate Assessments
                  </Button>
                </div>
              </div>
            )}

            {/* Processing Status */}
            {uploadedFiles.length === 0 && (
              <div className="mt-8 p-4 bg-warning/10 border border-warning/20 rounded-lg">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 text-warning mr-2" />
                  <p className="text-sm">
                    <strong>Note:</strong> File processing and AI features require backend integration. 
                    Connect to Supabase to enable content extraction and assessment generation.
                  </p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};