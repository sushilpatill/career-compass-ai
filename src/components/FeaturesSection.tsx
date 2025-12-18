import { motion } from "framer-motion";
import { Target, Brain, FileText, Briefcase, TrendingUp, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Career Assessment",
    description: "AI analyzes your skills, interests, and goals to recommend the perfect career paths.",
  },
  {
    icon: Brain,
    title: "Skill Gap Analysis",
    description: "Identify missing skills and get personalized learning recommendations.",
  },
  {
    icon: FileText,
    title: "Resume Builder",
    description: "Create ATS-optimized resumes with AI suggestions and real-time scoring.",
  },
  {
    icon: TrendingUp,
    title: "Learning Roadmap",
    description: "Get a structured path from beginner to expert with curated resources.",
  },
  {
    icon: Briefcase,
    title: "Job Matching",
    description: "Find roles that match your profile with intelligent job recommendations.",
  },
  {
    icon: MessageSquare,
    title: "AI Career Coach",
    description: "24/7 chatbot to answer career questions and provide guidance.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Succeed</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tools powered by AI to guide your career journey from discovery to landing your dream job.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-hover p-6 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
