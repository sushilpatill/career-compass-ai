import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sparkles, Target, FileText, Briefcase, TrendingUp, MessageSquare, Settings,
  ChevronRight, BarChart3, Users, Award, ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const sidebarItems = [
  { icon: BarChart3, label: "Dashboard", href: "/dashboard", active: true },
  { icon: Target, label: "Career Assessment", href: "/assessment" },
  { icon: TrendingUp, label: "Skill Gap", href: "/skill-gap" },
  { icon: FileText, label: "Resume Builder", href: "/resume" },
  { icon: Briefcase, label: "Job Matching", href: "/jobs" },
  { icon: Users, label: "Learning Path", href: "/learning" },
];

const careerSuggestions = [
  { role: "Frontend Developer", match: 92, growth: "+15%", salary: "$75k - $120k" },
  { role: "UX Designer", match: 87, growth: "+12%", salary: "$65k - $110k" },
  { role: "Data Analyst", match: 78, growth: "+20%", salary: "$60k - $100k" },
];

const Dashboard = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border/50 p-6 hidden lg:block">
        <Link to="/" className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-lg">CareerAI</span>
        </Link>

        <nav className="space-y-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                item.active
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-8">
          <Link
            to="/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-secondary hover:text-foreground transition-all duration-200"
          >
            <Settings className="w-5 h-5" />
            <span className="text-sm font-medium">Settings</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8 overflow-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-display text-3xl font-bold mb-2">
            Hi John, <span className="gradient-text">here's your career insight</span>
          </h1>
          <p className="text-muted-foreground">Track your progress and discover new opportunities</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Career Fit Score", value: "87%", icon: Target, color: "from-primary to-primary/50" },
            { label: "Skills Matched", value: "12/15", icon: Award, color: "from-accent to-accent/50" },
            { label: "Resume Score", value: "78%", icon: FileText, color: "from-primary to-accent" },
            { label: "Job Matches", value: "24", icon: Briefcase, color: "from-accent to-primary" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-5"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <p className={`text-2xl font-display font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Career Suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-xl font-semibold">Recommended Careers</h2>
            <Link to="/assessment" className="text-sm text-primary hover:underline flex items-center gap-1">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {careerSuggestions.map((career, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="p-4 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">{career.role}</h3>
                  <span className="px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                    {career.match}% Match
                  </span>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Growth: <span className="text-green-400">{career.growth}</span></p>
                  <p>Salary: {career.salary}</p>
                </div>
                <Progress value={career.match} className="mt-4 h-1.5" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-xl font-semibold">Skill Progress</h2>
            <Link to="/skill-gap" className="text-sm text-primary hover:underline flex items-center gap-1">
              Analyze Gap <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {[
              { skill: "JavaScript", level: 85 },
              { skill: "React", level: 78 },
              { skill: "UI/UX Design", level: 65 },
              { skill: "Data Analysis", level: 45 },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">{item.skill}</span>
                  <span className="text-sm text-muted-foreground">{item.level}%</span>
                </div>
                <Progress value={item.level} className="h-2" />
              </div>
            ))}
          </div>
        </motion.div>
      </main>

      {/* AI Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="glass-card w-80 md:w-96 h-[500px] mb-4 flex flex-col overflow-hidden"
          >
            <div className="p-4 border-b border-border/50 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">Career Coach AI</h3>
                <p className="text-xs text-muted-foreground">Always here to help</p>
              </div>
            </div>
            <div className="flex-1 p-4 overflow-auto">
              <div className="bg-secondary/50 rounded-2xl rounded-tl-none p-4 mb-4 max-w-[85%]">
                <p className="text-sm">Hi John! I'm your AI career coach. How can I help you today?</p>
              </div>
            </div>
            <div className="p-4 border-t border-border/50">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ask about careers..."
                  className="flex-1 px-4 py-2 rounded-xl bg-secondary/50 border border-border/50 text-sm focus:outline-none focus:border-primary/50"
                />
                <Button size="icon" className="rounded-xl">
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
        <Button
          onClick={() => setIsChatOpen(!isChatOpen)}
          size="icon"
          className="w-14 h-14 rounded-full shadow-lg"
        >
          <MessageSquare className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
