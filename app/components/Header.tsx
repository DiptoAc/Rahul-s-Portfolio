"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = ["about", "skills", "projects", "experience", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Photography", href: "#photography" },
    { name: "Services", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-slate-300 z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-dark shadow-lg shadow-indigo-200/50 border-b border-indigo-200/50"
            : "bg-white/70 backdrop-blur-md border-b border-white/40"
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="relative group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="text-3xl font-bold relative text-slate-900"
              >
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-400 bg-clip-text text-transparent animate-gradient">
                  RD
                </span>
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-indigo-300/20 to-purple-300/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
              {navItems.map((item, index) => {
                const isLink = item.href.startsWith("/");
                
                if (isLink) {
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`relative px-4 py-2 rounded-full font-medium transition-all block ${
                          activeSection === item.href.substring(1)
                            ? "text-white"
                            : "text-slate-600 hover:text-indigo-600"
                        }`}
                      >
                        {activeSection === item.href.substring(1) && (
                          <motion.div
                            layoutId="activeSection"
                            className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-400 rounded-full"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                        <span className="relative z-10">{item.name}</span>
                        {activeSection !== item.href.substring(1) && (
                          <motion.div
                            className="absolute inset-0 glass rounded-full opacity-0 hover:opacity-100 transition-opacity"
                            whileHover={{ scale: 1.05 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                }
                
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-4 py-2 rounded-full font-medium transition-all ${
                      activeSection === item.href.substring(1)
                        ? "text-white"
                        : "text-slate-600 hover:text-indigo-600"
                    }`}
                  >
                    {activeSection === item.href.substring(1) && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-400 rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                    {activeSection !== item.href.substring(1) && (
                      <motion.div
                        className="absolute inset-0 glass rounded-full opacity-0 hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.05 }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-slate-700 p-2 glass rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={mobileMenuOpen ? "open" : "closed"}
            >
              {mobileMenuOpen ? (
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 90 }}
                  transition={{ duration: 0.3 }}
                />
              ) : (
                <>
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </>
              )}
            </motion.svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pb-4 glass-dark rounded-xl px-4 overflow-hidden border border-indigo-200/40"
          >
            {navItems.map((item, index) => {
              const isLink = item.href.startsWith("/");
              
              if (isLink) {
                return (
                  <motion.div
                    key={item.name}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`block py-3 px-4 rounded-lg font-medium transition-all ${
                        activeSection === item.href.substring(1)
                          ? "bg-gradient-to-r from-indigo-500 to-purple-400 text-white"
                          : "text-slate-600 hover:text-indigo-600 hover:bg-indigo-100/50"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <motion.span
                        whileHover={{ x: 5 }}
                        className="flex items-center"
                      >
                        {item.name}
                        <motion.span
                          className="ml-2"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </motion.span>
                    </Link>
                  </motion.div>
                );
              }
              
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`block py-3 px-4 rounded-lg font-medium transition-all ${
                    activeSection === item.href.substring(1)
                      ? "bg-gradient-to-r from-indigo-500 to-purple-400 text-white"
                      : "text-slate-600 hover:text-indigo-600 hover:bg-indigo-100/50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <motion.span
                    whileHover={{ x: 5 }}
                    className="flex items-center"
                  >
                    {item.name}
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.span>
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </nav>
    </motion.header>
    </>
  );
}

