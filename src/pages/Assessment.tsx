import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Target, TrendingUp, Users, DollarSign, ChevronRight, ArrowLeft, Zap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const CircularProgress = ({ value, size = 80, strokeWidth = 8 }: { value: number; size?: number; strokeWidth?: number }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;
  
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-muted/20"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#progressGradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-bold font-display">{value}%</span>
      </div>
    </div>
  );
};

const StatCard = ({ icon: Icon, label, value, color, delay }: { icon: any; label: string; value: string; color: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay, duration: 0.5, ease: "easeOut" }}
    className="relative group"
  >
    {/* Animated border gradient */}
    <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500" />
    <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-2xl opacity-50 group-hover:opacity-100 transition-all duration-500" />
    
    <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl p-6 border border-border/50 overflow-hidden">
      {/* Background glow */}
      <div className={`absolute top-0 right-0 w-32 h-32 ${color} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-10 h-10 rounded-xl ${color} bg-opacity-20 flex items-center justify-center`}>
            <Icon className="w-5 h-5" style={{ color: `hsl(var(--${color.includes('primary') ? 'primary' : color.includes('accent') ? 'accent' : 'success'}))` }} />
          </div>
          <span className="text-sm text-muted-foreground font-medium">{label}</span>
        </div>
        <motion.p 
          className={`text-4xl font-bold font-display bg-gradient-to-r ${
            color.includes('primary') ? 'from-primary to-primary/70' : 
            color.includes('accent') ? 'from-accent to-accent/70' : 
            'from-success to-success/70'
          } bg-clip-text text-transparent`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.3, duration: 0.5, type: "spring" }}
        >
          {value}
        </motion.p>
      </div>
    </div>
  </motion.div>
);

const Assessment = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-border/30 backdrop-blur-xl bg-background/50 p-6 sticky top-0">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="icon" className="rounded-xl hover:bg-primary/10">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="font-display text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Career Assessment</h1>
              <p className="text-sm text-muted-foreground">AI-powered career recommendations</p>
            </div>
          </div>
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-shadow">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold hidden sm:block">CareerAI</span>
          </Link>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <StatCard 
            icon={Target} 
            label="Career Fit Score" 
            value="87%" 
            color="bg-primary" 
            delay={0.1} 
          />
          <StatCard 
            icon={Zap} 
            label="Skills Matched" 
            value="12/15" 
            color="bg-accent" 
            delay={0.2} 
          />
          <StatCard 
            icon={Briefcase} 
            label="Job Matches" 
            value="24" 
            color="bg-success" 
            delay={0.3} 
          />
        </div>

        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative group mb-8"
        >
          <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-30 blur-sm group-hover:opacity-50 transition-opacity" />
          <div className="relative bg-card/60 backdrop-blur-xl rounded-3xl p-8 border border-border/30 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-8">
              <motion.div 
                className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl shadow-primary/30"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Target className="w-12 h-12 text-primary-foreground" />
              </motion.div>
              <div className="flex-1">
                <h2 className="font-display text-2xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Your Career Profile Analysis
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  Based on your skills, interests, and goals, we've identified the best career paths for you.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">5 careers analyzed</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-accent/10 border border-accent/20">
                    <Users className="w-5 h-5 text-accent" />
                    <span className="text-sm font-medium">12 skills matched</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-sm text-muted-foreground mb-3 font-medium">Overall Fit</p>
                <CircularProgress value={87} size={100} strokeWidth={10} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Career Cards */}
        <div className="space-y-4">
          {careers.map((career, i) => (
            <motion.div
              key={career.role}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="relative group"
            >
              {/* Hover glow effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/0 via-primary/30 to-accent/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500" />
              
              <div className="relative bg-card/60 backdrop-blur-xl rounded-2xl p-6 border border-border/30 overflow-hidden group-hover:border-primary/30 transition-colors duration-300">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="font-display text-xl font-bold">{career.role}</h3>
                      <motion.span 
                        className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                          career.match >= 80 ? "bg-success/20 text-success border border-success/30" :
                          career.match >= 60 ? "bg-warning/20 text-warning border border-warning/30" :
                          "bg-destructive/20 text-destructive border border-destructive/30"
                        }`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {career.match}% Match
                      </motion.span>
                    </div>
                    <p className="text-muted-foreground mb-4">{career.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {career.skills.map((skill, idx) => (
                        <motion.span 
                          key={skill} 
                          className="px-3 py-1.5 rounded-full bg-secondary/50 text-sm font-medium border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-default"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + i * 0.1 + idx * 0.05 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-6 text-sm">
                      <div className="flex items-center gap-2 text-success">
                        <TrendingUp className="w-4 h-4" />
                        <span className="font-medium">Growth: {career.growth}</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary">
                        <DollarSign className="w-4 h-4" />
                        <span className="font-medium">{career.salary}</span>
                      </div>
                      <div className="flex items-center gap-2 text-accent">
                        <Users className="w-4 h-4" />
                        <span className="font-medium">Demand: {career.demand}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <CircularProgress value={career.match} size={70} strokeWidth={6} />
                    <Button variant="outline" className="gap-2 rounded-xl border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all">
                      Explore <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
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
