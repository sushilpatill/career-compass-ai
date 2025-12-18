import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, ArrowLeft, FileText, Download, Wand2, Plus, Trash2, GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";

const ResumeBuilder = () => {
  const [resumeScore] = useState(78);
  const [name, setName] = useState("John Doe");
  const [title, setTitle] = useState("Frontend Developer");
  const [email, setEmail] = useState("john@example.com");
  const [phone, setPhone] = useState("+1 (555) 123-4567");
  const [summary, setSummary] = useState("Passionate frontend developer with 2+ years of experience building responsive web applications using React and TypeScript.");
  const [experiences] = useState([
    { title: "Junior Developer", company: "Tech Startup", period: "2022 - Present", description: "Built user interfaces using React" },
    { title: "Intern", company: "Software Co", period: "2021 - 2022", description: "Assisted in web development projects" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="font-display text-2xl font-bold">Resume Builder</h1>
              <p className="text-sm text-muted-foreground">Create your ATS-friendly resume</p>
            </div>
          </div>
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold">CareerAI</span>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Editor */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Score Card */}
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-semibold">Resume Score</h3>
                <Button variant="outline" size="sm" className="gap-2">
                  <Wand2 className="w-4 h-4" />
                  AI Suggestions
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <Progress value={resumeScore} className="h-3" />
                </div>
                <span className={`text-2xl font-bold ${
                  resumeScore >= 80 ? "text-green-400" :
                  resumeScore >= 60 ? "text-yellow-400" : "text-red-400"
                }`}>
                  {resumeScore}%
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Add more quantifiable achievements to improve your score
              </p>
            </div>

            {/* Personal Info */}
            <div className="glass-card p-6">
              <h3 className="font-display font-semibold mb-4">Personal Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Full Name</label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-secondary/50 border-border/50 rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Job Title</label>
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-secondary/50 border-border/50 rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-secondary/50 border-border/50 rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Phone</label>
                  <Input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-secondary/50 border-border/50 rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="glass-card p-6">
              <h3 className="font-display font-semibold mb-4">Professional Summary</h3>
              <Textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                rows={4}
                className="bg-secondary/50 border-border/50 rounded-xl resize-none"
              />
            </div>

            {/* Experience */}
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-semibold">Experience</h3>
                <Button variant="outline" size="sm" className="gap-2">
                  <Plus className="w-4 h-4" />
                  Add
                </Button>
              </div>
              <div className="space-y-4">
                {experiences.map((exp, i) => (
                  <div key={i} className="p-4 rounded-xl bg-secondary/50 border border-border/50">
                    <div className="flex items-start gap-3">
                      <GripVertical className="w-5 h-5 text-muted-foreground cursor-grab mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">{exp.title}</h4>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Trash2 className="w-4 h-4 text-muted-foreground" />
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">{exp.company} • {exp.period}</p>
                        <p className="text-sm mt-2">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:sticky lg:top-6"
          >
            <div className="glass-card p-6 mb-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-semibold">Preview</h3>
                <Button className="gap-2">
                  <Download className="w-4 h-4" />
                  Download PDF
                </Button>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-8 shadow-xl border border-border/50 aspect-[8.5/11] overflow-hidden">
              <div className="h-full flex flex-col">
                {/* Resume Header */}
                <div className="text-center pb-4 border-b border-border mb-4">
                  <h2 className="text-2xl font-bold">{name}</h2>
                  <p className="text-primary font-medium">{title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{email} • {phone}</p>
                </div>

                {/* Summary */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Summary</h3>
                  <p className="text-sm text-muted-foreground">{summary}</p>
                </div>

                {/* Experience */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Experience</h3>
                  <div className="space-y-3">
                    {experiences.map((exp, i) => (
                      <div key={i}>
                        <div className="flex justify-between items-baseline">
                          <h4 className="font-semibold text-sm">{exp.title}</h4>
                          <span className="text-xs text-muted-foreground">{exp.period}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{exp.company}</p>
                        <p className="text-xs mt-1">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ResumeBuilder;
