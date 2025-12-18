import { Sparkles, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const footerLinks = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Demo", href: "/demo" },
    { label: "Changelog", href: "/changelog" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-background opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-primary/10 to-transparent rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5 group">
              <motion.div
                whileHover={{ rotate: 10 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/25"
              >
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </motion.div>
              <span className="font-display font-bold text-xl tracking-tight">CareerAI</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Empowering students and freshers to discover their dream careers with AI-powered guidance and tools.
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-secondary/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-secondary transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Links sections */}
          <div>
            <h4 className="font-display font-semibold mb-5 text-foreground">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold mb-5 text-foreground">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold mb-5 text-foreground">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CareerAI. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with <span className="text-primary">♥</span> for students everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
