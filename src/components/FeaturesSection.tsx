import { motion } from "framer-motion";
import { Target, Brain, FileText, Briefcase, TrendingUp, MessageSquare, ArrowUpRight } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Career Assessment",
    description: "AI analyzes your skills, interests, and goals to recommend the perfect career paths.",
    gradient: "from-primary to-primary/50",
  },
  {
    icon: Brain,
    title: "Skill Gap Analysis",
    description: "Identify missing skills and get personalized learning recommendations.",
    gradient: "from-accent to-accent/50",
  },
  {
    icon: FileText,
    title: "Resume Builder",
    description: "Create ATS-optimized resumes with AI suggestions and real-time scoring.",
    gradient: "from-primary to-accent",
  },
  {
    icon: TrendingUp,
    title: "Learning Roadmap",
    description: "Get a structured path from beginner to expert with curated resources.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Briefcase,
    title: "Job Matching",
    description: "Find roles that match your profile with intelligent job recommendations.",
    gradient: "from-primary/80 to-accent/80",
  },
  {
    icon: MessageSquare,
    title: "AI Career Coach",
    description: "24/7 chatbot to answer career questions and provide guidance.",
    gradient: "from-accent/80 to-primary/80",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const FeaturesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-background opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-secondary/60 border border-border/50 text-sm font-medium text-muted-foreground mb-4"
          >
            ✨ Powerful Features
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Everything You Need to{" "}
            <span className="gradient-text">Succeed</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive tools powered by AI to guide your career journey from discovery to landing your dream job.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="glass-card-hover p-6 h-full">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-[1px] mb-5`}>
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                    <feature.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-xl font-semibold">{feature.title}</h3>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </motion.div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
