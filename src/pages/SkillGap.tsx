import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, ArrowLeft, Check, X, TrendingUp, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const yourSkills = [
  { name: "JavaScript", level: 85, status: "strong" },
  { name: "React", level: 78, status: "strong" },
  { name: "HTML/CSS", level: 90, status: "strong" },
  { name: "Git", level: 70, status: "adequate" },
  { name: "TypeScript", level: 45, status: "developing" },
  { name: "Node.js", level: 35, status: "developing" },
];

const requiredSkills = [
  { name: "JavaScript", level: 80, yourLevel: 85 },
  { name: "React", level: 85, yourLevel: 78 },
  { name: "TypeScript", level: 75, yourLevel: 45 },
  { name: "Node.js", level: 60, yourLevel: 35 },
  { name: "Testing", level: 70, yourLevel: 20 },
  { name: "System Design", level: 50, yourLevel: 25 },
];

const missingSkills = [
  { name: "TypeScript", priority: "High", timeToLearn: "2-3 months" },
  { name: "Node.js", priority: "Medium", timeToLearn: "3-4 months" },
  { name: "Testing (Jest)", priority: "High", timeToLearn: "1-2 months" },
  { name: "System Design", priority: "Low", timeToLearn: "4-6 months" },
];

const SkillGap = () => {
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
              <h1 className="font-display text-2xl font-bold">Skill Gap Analysis</h1>
              <p className="text-sm text-muted-foreground">Compare your skills with industry requirements</p>
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
        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="font-display text-xl font-semibold mb-4">Target Role: Frontend Developer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-xl bg-secondary/50">
              <p className="text-3xl font-display font-bold text-primary mb-1">72%</p>
              <p className="text-sm text-muted-foreground">Skills Match</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-secondary/50">
              <p className="text-3xl font-display font-bold text-accent mb-1">4</p>
              <p className="text-sm text-muted-foreground">Skills to Develop</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-secondary/50">
              <p className="text-3xl font-display font-bold text-green-400 mb-1">6-9</p>
              <p className="text-sm text-muted-foreground">Months to Goal</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Your Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6"
          >
            <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              Your Current Skills
            </h3>
            <div className="space-y-4">
              {yourSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">{skill.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      skill.status === "strong" ? "bg-green-500/20 text-green-400" :
                      skill.status === "adequate" ? "bg-yellow-500/20 text-yellow-400" :
                      "bg-red-500/20 text-red-400"
                    }`}>
                      {skill.level}%
                    </span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Required Skills Comparison */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6"
          >
            <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-accent" />
              Industry Requirements
            </h3>
            <div className="space-y-4">
              {requiredSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {skill.yourLevel}/{skill.level}
                    </span>
                  </div>
                  <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-muted-foreground/30 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                    <div
                      className={`absolute inset-y-0 left-0 rounded-full ${
                        skill.yourLevel >= skill.level ? "bg-green-500" : "bg-primary"
                      }`}
                      style={{ width: `${skill.yourLevel}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Missing Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6"
        >
          <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
            <X className="w-5 h-5 text-destructive" />
            Skills to Develop
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {missingSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="p-4 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/30 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{skill.name}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    skill.priority === "High" ? "bg-red-500/20 text-red-400" :
                    skill.priority === "Medium" ? "bg-yellow-500/20 text-yellow-400" :
                    "bg-green-500/20 text-green-400"
                  }`}>
                    {skill.priority} Priority
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Estimated learning time: {skill.timeToLearn}
                </p>
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <BookOpen className="w-4 h-4" />
                  Start Learning
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default SkillGap;
