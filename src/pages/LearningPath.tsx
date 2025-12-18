import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, ArrowLeft, BookOpen, Video, FileText, ExternalLink, Check, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const roadmap = [
  {
    stage: "Beginner",
    color: "from-green-500 to-green-600",
    items: [
      { title: "HTML & CSS Fundamentals", type: "course", duration: "2 weeks", completed: true },
      { title: "JavaScript Basics", type: "course", duration: "3 weeks", completed: true },
      { title: "Git Version Control", type: "tutorial", duration: "1 week", completed: true },
    ],
  },
  {
    stage: "Intermediate",
    color: "from-primary to-primary/80",
    items: [
      { title: "React Fundamentals", type: "course", duration: "4 weeks", completed: true },
      { title: "State Management", type: "course", duration: "2 weeks", completed: false },
      { title: "TypeScript Essentials", type: "course", duration: "3 weeks", completed: false },
      { title: "Testing with Jest", type: "tutorial", duration: "2 weeks", completed: false },
    ],
  },
  {
    stage: "Advanced",
    color: "from-accent to-accent/80",
    items: [
      { title: "Advanced React Patterns", type: "course", duration: "3 weeks", completed: false },
      { title: "Performance Optimization", type: "tutorial", duration: "2 weeks", completed: false },
      { title: "System Design Basics", type: "course", duration: "4 weeks", completed: false },
      { title: "Building Portfolio Projects", type: "project", duration: "4 weeks", completed: false },
    ],
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case "course": return Video;
    case "tutorial": return FileText;
    case "project": return BookOpen;
    default: return BookOpen;
  }
};

const LearningPath = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 p-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="font-display text-2xl font-bold">Learning Roadmap</h1>
              <p className="text-sm text-muted-foreground">Your personalized path to success</p>
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

      <main className="max-w-6xl mx-auto p-6">
        {/* Progress Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="font-display text-xl font-semibold mb-4">Frontend Developer Path</h2>
          <div className="flex flex-wrap gap-6">
            <div>
              <p className="text-3xl font-display font-bold text-primary">4/11</p>
              <p className="text-sm text-muted-foreground">Modules Completed</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-green-400">36%</p>
              <p className="text-sm text-muted-foreground">Overall Progress</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-accent">~6 months</p>
              <p className="text-sm text-muted-foreground">Estimated Time Left</p>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {roadmap.map((stage, stageIndex) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: stageIndex * 0.2 }}
              >
                {/* Stage Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stage.color} flex items-center justify-center z-10`}>
                    <span className="text-lg font-bold text-primary-foreground">{stageIndex + 1}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold">{stage.stage}</h3>
                </div>

                {/* Stage Items */}
                <div className="ml-0 md:ml-16 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {stage.items.map((item, itemIndex) => {
                    const Icon = getIcon(item.type);
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: stageIndex * 0.2 + itemIndex * 0.1 }}
                        className={`glass-card-hover p-5 ${item.completed ? "border-green-500/30" : ""}`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            item.completed ? "bg-green-500/20" : "bg-secondary"
                          }`}>
                            {item.completed ? (
                              <Check className="w-5 h-5 text-green-400" />
                            ) : (
                              <Icon className="w-5 h-5 text-muted-foreground" />
                            )}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{item.title}</h4>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                              <span className="capitalize">{item.type}</span>
                              <span>•</span>
                              <span>{item.duration}</span>
                            </div>
                          </div>
                          <Button
                            variant={item.completed ? "ghost" : "outline"}
                            size="sm"
                            className="gap-1"
                            disabled={!item.completed && stageIndex > 0 && !roadmap[stageIndex - 1].items.every(i => i.completed)}
                          >
                            {item.completed ? (
                              "Review"
                            ) : stageIndex > 0 && !roadmap[stageIndex - 1].items.every(i => i.completed) ? (
                              <><Lock className="w-3 h-3" /> Locked</>
                            ) : (
                              <>Start <ExternalLink className="w-3 h-3" /></>
                            )}
                          </Button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LearningPath;
