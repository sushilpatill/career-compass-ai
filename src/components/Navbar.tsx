import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass-card px-4 md:px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <motion.div
              whileHover={{ rotate: 10 }}
              transition={{ duration: 0.2 }}
              className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/25"
            >
              <Sparkles className="w-4.5 h-4.5 text-primary-foreground" />
            </motion.div>
            <span className="font-display font-bold text-lg tracking-tight">CareerAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href} className="nav-link text-sm font-medium">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/login"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-2"
              >
                Sign In
              </Link>
              <Button asChild size="sm" className="rounded-xl">
                <Link to="/signup">
                  Get Started
                </Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden"
        >
          <div className="glass-card mt-2 p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-border/50 space-y-2">
              <Link
                to="/login"
                className="block px-4 py-3 rounded-xl text-sm font-medium text-center text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Button asChild className="w-full rounded-xl">
                <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
