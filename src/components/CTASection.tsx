import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const benefits = [
  "AI-powered career guidance",
  "ATS-friendly resume builder",
  "Personalized job matching",
];

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-background opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-primary/15 via-accent/15 to-primary/15 rounded-full blur-[150px] animate-gradient bg-[length:200%_200%]" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-14 relative overflow-hidden gradient-border"
        >
          {/* Animated background glow */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-[100px]"
          />
          
          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center mb-6"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/15 border border-primary/30">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 text-primary" />
                </motion.div>
                <span className="text-sm font-medium text-primary">Start Your Journey Today</span>
              </div>
            </motion.div>
            
            {/* Headline */}
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-center tracking-tight">
              Ready to Find Your{" "}
              <span className="gradient-text">Dream Career?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-center leading-relaxed">
              Join thousands of students and freshers who have discovered their perfect career path with AI-powered guidance.
            </p>
            
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-10"
            >
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>{benefit}</span>
                </div>
              ))}
            </motion.div>
            
            {/* CTA */}
            <div className="flex flex-col items-center gap-4">
              <Button asChild size="xl" className="group">
                <Link to="/signup">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              
              <p className="text-sm text-muted-foreground">No credit card required • Free forever</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
