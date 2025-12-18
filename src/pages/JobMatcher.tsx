import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, ArrowLeft, MapPin, Clock, DollarSign, Building, TrendingUp, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const jobs = [
  {
    title: "Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$90k - $120k",
    match: 94,
    posted: "2 days ago",
    skills: ["React", "TypeScript", "CSS"],
    matchedSkills: ["React", "CSS"],
  },
  {
    title: "Junior React Developer",
    company: "StartupXYZ",
    location: "Remote",
    type: "Full-time",
    salary: "$70k - $90k",
    match: 89,
    posted: "1 week ago",
    skills: ["React", "JavaScript", "Git"],
    matchedSkills: ["React", "JavaScript", "Git"],
  },
  {
    title: "UI Developer",
    company: "DesignHub",
    location: "New York, NY",
    type: "Full-time",
    salary: "$85k - $110k",
    match: 82,
    posted: "3 days ago",
    skills: ["React", "CSS", "Figma"],
    matchedSkills: ["React", "CSS"],
  },
  {
    title: "Full Stack Developer",
    company: "WebAgency",
    location: "Austin, TX",
    type: "Contract",
    salary: "$100k - $130k",
    match: 75,
    posted: "5 days ago",
    skills: ["React", "Node.js", "PostgreSQL"],
    matchedSkills: ["React"],
  },
  {
    title: "Software Engineer",
    company: "BigTech Co.",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$120k - $150k",
    match: 68,
    posted: "1 day ago",
    skills: ["React", "TypeScript", "AWS"],
    matchedSkills: ["React"],
  },
];

const JobMatcher = () => {
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
              <h1 className="font-display text-2xl font-bold">Job Matching</h1>
              <p className="text-sm text-muted-foreground">Find jobs that match your profile</p>
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
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <h2 className="font-display text-xl font-semibold mb-2">Job Matches Found</h2>
              <p className="text-muted-foreground">Based on your skills and preferences, we found these opportunities.</p>
            </div>
            <div className="flex gap-4">
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-primary">24</p>
                <p className="text-sm text-muted-foreground">Total Matches</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-green-400">5</p>
                <p className="text-sm text-muted-foreground">High Match</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Job Cards */}
        <div className="space-y-4">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-6"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display text-xl font-semibold mb-1">{job.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building className="w-4 h-4" />
                        <span>{job.company}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      job.match >= 85 ? "bg-green-500/20 text-green-400" :
                      job.match >= 70 ? "bg-yellow-500/20 text-yellow-400" :
                      "bg-red-500/20 text-red-400"
                    }`}>
                      {job.match}% Match
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      {job.salary}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-full text-sm ${
                          job.matchedSkills.includes(skill)
                            ? "bg-primary/20 text-primary"
                            : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-muted-foreground">Posted {job.posted}</p>
                </div>

                <div className="flex flex-col gap-3 lg:items-end">
                  <div className="w-32">
                    <p className="text-xs text-muted-foreground mb-1 text-right">Skill Match</p>
                    <Progress value={job.match} className="h-2" />
                  </div>
                  <div className="flex gap-2">
                    <Link to="/skill-gap">
                      <Button variant="outline" size="sm" className="gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Improve Match
                      </Button>
                    </Link>
                    <Button size="sm" className="gap-2">
                      Apply
                      <ExternalLink className="w-4 h-4" />
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

export default JobMatcher;
