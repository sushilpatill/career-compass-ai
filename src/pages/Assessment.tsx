import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Target, TrendingUp, Users, DollarSign, ChevronRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const careers = [
  {
    role: "Frontend Developer",
    match: 92,
    description: "Build user interfaces and web applications using modern frameworks like React.",
    skills: ["JavaScript", "React", "CSS", "HTML", "Git"],
    growth: "+15%",
    salary: "$75k - $120k",
    demand: "High"
  },
  {
    role: "UX Designer",
    match: 87,
    description: "Design user experiences and interfaces for digital products.",
    skills: ["Figma", "User Research", "Prototyping", "UI Design"],
    growth: "+12%",
    salary: "$65k - $110k",
    demand: "High"
  },
  {
    role: "Data Analyst",
    match: 78,
    description: "Analyze data to provide insights and drive business decisions.",
    skills: ["SQL", "Python", "Excel", "Data Visualization", "Statistics"],
    growth: "+20%",
    salary: "$60k - $100k",
    demand: "Very High"
  },
  {
    role: "Product Manager",
    match: 72,
    description: "Lead product development from ideation to launch.",
    skills: ["Strategy", "Communication", "Analytics", "Leadership"],
    growth: "+10%",
    salary: "$90k - $150k",
    demand: "High"
  },
  {
    role: "Full Stack Developer",
    match: 68,
    description: "Build both frontend and backend of web applications.",
    skills: ["JavaScript", "Node.js", "React", "Databases", "APIs"],
    growth: "+18%",
    salary: "$85k - $140k",
    demand: "Very High"
  },
];

const Assessment = () => {
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
              <h1 className="font-display text-2xl font-bold">Career Assessment</h1>
              <p className="text-sm text-muted-foreground">AI-powered career recommendations</p>
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
        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Target className="w-10 h-10 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h2 className="font-display text-xl font-semibold mb-2">Your Career Profile Analysis</h2>
              <p className="text-muted-foreground mb-4">Based on your skills, interests, and goals, we've identified the best career paths for you.</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-sm">5 careers analyzed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-accent" />
                  <span className="text-sm">12 skills matched</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Overall Fit Score</p>
              <p className="text-4xl font-display font-bold gradient-text">87%</p>
            </div>
          </div>
        </motion.div>

        {/* Career Cards */}
        <div className="space-y-4">
          {careers.map((career, i) => (
            <motion.div
              key={career.role}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-6"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="font-display text-xl font-semibold">{career.role}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      career.match >= 80 ? "bg-green-500/20 text-green-400" :
                      career.match >= 60 ? "bg-yellow-500/20 text-yellow-400" :
                      "bg-red-500/20 text-red-400"
                    }`}>
                      {career.match}% Match
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{career.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {career.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-full bg-secondary text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span>Growth: {career.growth}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-primary" />
                      <span>{career.salary}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-accent" />
                      <span>Demand: {career.demand}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <div className="w-32">
                    <Progress value={career.match} className="h-2" />
                  </div>
                  <Button variant="outline" className="gap-2">
                    Explore <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Assessment;
