import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass-card px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg">CareerAI</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="nav-link text-sm">Home</Link>
            <Link to="/features" className="nav-link text-sm">Features</Link>
            <Link to="/pricing" className="nav-link text-sm">Pricing</Link>
            <Link to="/about" className="nav-link text-sm">About</Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="h-9 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium flex items-center hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.5)]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
