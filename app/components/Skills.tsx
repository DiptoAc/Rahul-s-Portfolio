"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Skills() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const skillCategories = [
    {
      category: "Networking & Infrastructure",
      icon: "🛰️",
      skills: [
        "CCNA",
        "MTCNA",
        "Router Configuration",
        "Switching & VLANs",
        "Wireless Optimisation",
        "Firewall Policies",
        "Network Monitoring"
      ],
      gradient: "from-sky-500 via-cyan-400 to-blue-600",
      accent: "from-sky-500/20 via-cyan-500/10 to-slate-900/80",
      cardShadow: "0 35px 65px rgba(56, 189, 248, 0.28)",
      iconShadow: "0 18px 35px rgba(56, 189, 248, 0.45)",
      tagBorder: "border-sky-400/30",
      tagGradient: "from-sky-500/20 to-cyan-500/15"
    },
    {
      category: "System Administration",
      icon: "🖥️",
      skills: [
        "Windows Server",
        "System Hardening",
        "Hardware Maintenance",
        "OS Deployment",
        "Remote Support",
        "Backup Strategy",
        "Ticket Escalation"
      ],
      gradient: "from-purple-500 via-indigo-500 to-blue-700",
      accent: "from-purple-500/20 via-indigo-500/10 to-slate-900/80",
      cardShadow: "0 35px 65px rgba(129, 140, 248, 0.28)",
      iconShadow: "0 18px 35px rgba(129, 140, 248, 0.45)",
      tagBorder: "border-indigo-400/30",
      tagGradient: "from-indigo-500/20 to-blue-500/15"
    },
    {
      category: "Productivity & Documentation",
      icon: "🗂️",
      skills: [
        "Project Management",
        "Customer Support",
        "Technical Documentation",
        "Knowledge Base Design",
        "Microsoft Office",
        "Process Optimisation",
        "SLA Tracking"
      ],
      gradient: "from-emerald-500 via-teal-400 to-emerald-600",
      accent: "from-emerald-500/20 via-teal-500/10 to-slate-900/80",
      cardShadow: "0 35px 65px rgba(16, 185, 129, 0.28)",
      iconShadow: "0 18px 35px rgba(16, 185, 129, 0.45)",
      tagBorder: "border-emerald-400/30",
      tagGradient: "from-emerald-500/20 to-teal-500/15"
    },
    {
      category: "Creative Production",
      icon: "🎬",
      skills: [
        "Video Editing",
        "Adobe Premiere Pro",
        "After Effects",
        "Photoshop",
        "Lightroom",
        "Storyboarding",
        "Color Grading"
      ],
      gradient: "from-amber-500 via-orange-500 to-rose-500",
      accent: "from-amber-500/20 via-orange-500/10 to-slate-900/80",
      cardShadow: "0 35px 65px rgba(234, 88, 12, 0.28)",
      iconShadow: "0 18px 35px rgba(234, 88, 12, 0.45)",
      tagBorder: "border-amber-400/30",
      tagGradient: "from-amber-500/20 to-orange-500/15"
    },
    {
      category: "Soft Skills & Languages",
      icon: "🌍",
      skills: [
        "Bangla",
        "English",
        "Hindi",
        "Client Communication",
        "Team Collaboration",
        "Training & Mentoring",
        "Time Management"
      ],
      gradient: "from-indigo-500 via-violet-500 to-purple-500",
      accent: "from-indigo-500/20 via-violet-500/10 to-slate-900/80",
      cardShadow: "0 35px 65px rgba(129, 140, 248, 0.28)",
      iconShadow: "0 18px 35px rgba(129, 140, 248, 0.45)",
      tagBorder: "border-indigo-400/30",
      tagGradient: "from-indigo-500/20 to-purple-500/15"
    },
    {
      category: "Continuous Learning",
      icon: "📚",
      skills: [
        "Microsoft Azure Fundamentals",
        "System Administration (Coursera)",
        "Career Essentials (LinkedIn)",
        "Video Editing MasterCourse",
        "Auto Mechanics Training",
        "Safety & Compliance",
        "Knowledge Transfer"
      ],
      gradient: "from-amber-400 via-yellow-400 to-orange-400",
      accent: "from-amber-400/20 via-yellow-400/10 to-slate-900/80",
      cardShadow: "0 35px 65px rgba(251, 191, 36, 0.28)",
      iconShadow: "0 18px 35px rgba(251, 191, 36, 0.45)",
      tagBorder: "border-amber-300/30",
      tagGradient: "from-amber-400/20 to-yellow-400/15"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const categoryVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-500/20 rounded-full filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-500/20 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-sky-400/20 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.4) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-4 relative inline-block"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Technical Skills
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto mt-6"
          >
            A comprehensive toolkit for building modern web and mobile applications
          </motion.p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              variants={categoryVariants}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative"
            >
              <motion.div
                whileHover={{
                  y: -10,
                  transition: { type: "spring", stiffness: 260, damping: 22 }
                }}
                className="relative h-full rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-br from-slate-900/5 via-slate-800/35 to-slate-900/10 backdrop-blur-2xl transition-shadow duration-500"
                style={{
                  boxShadow:
                    hoveredCard === index
                      ? category.cardShadow
                      : "0 25px 65px rgba(15, 23, 42, 0.55)"
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.accent} opacity-60 group-hover:opacity-95 transition-opacity duration-500`}
                />
                <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-70" />
                <div className="absolute inset-x-6 bottom-0 h-32 bg-gradient-to-t from-black/40 via-slate-900/0 to-transparent pointer-events-none" />

                <div className="relative z-10 flex flex-col gap-8 p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${category.gradient} text-3xl text-white`}
                        style={{ boxShadow: category.iconShadow }}
                      >
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-100">
                          {category.category}
                        </h3>
                        <div className={`mt-2 h-1 w-16 rounded-full bg-gradient-to-r ${category.gradient} group-hover:w-24 transition-all duration-300 ease-out`} />
                      </div>
                    </div>
                    <motion.span
                      animate={{
                        opacity: hoveredCard === index ? [0.4, 0.9, 0.4] : 0.4,
                        scale: hoveredCard === index ? [1, 1.1, 1] : 1
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className={`h-10 w-10 rounded-full bg-gradient-to-br ${category.gradient} opacity-40 blur-sm`}
                    />
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.04, type: "spring", stiffness: 220, damping: 18 }}
                        whileHover={{
                          y: -4,
                          transition: { type: "spring", stiffness: 400, damping: 20 }
                        }}
                        className={`relative overflow-hidden rounded-full border ${category.tagBorder} px-4 py-2 text-sm font-medium text-slate-50 transition-colors duration-300`}
                      >
                        <span className="relative z-10 mix-blend-plus-lighter">{skill}</span>
                        <div
                          className={`absolute inset-0 rounded-full bg-gradient-to-r ${category.tagGradient} opacity-70 pointer-events-none z-0`}
                        />
                        <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-md pointer-events-none z-0" />
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
                    <span>EXPERTISE</span>
                    <span>DELIVERY</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Enhanced Additional skills section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 max-w-6xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl shadow-2xl p-10 overflow-hidden border border-blue-400/20">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
                backgroundSize: '30px 30px'
              }} />
            </div>
            
            {/* Animated blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-blob" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
            
            <div className="relative z-10">
              <motion.h3 
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-center mb-8"
              >
                <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Other Expertise
                </span>
              </motion.h3>
              
              <div className="flex flex-wrap gap-4 justify-center">
                {[
                  "Cycling",
                  "Traveling",
                  "Gardening",
                  "Photography",
                  "Customer Empathy",
                  "Knowledge Sharing",
                  "Driving & Auto Mechanics",
                  "Community Outreach",
                  "Event Coordination"
                ].map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                    whileHover={{ 
                      scale: 1.15, 
                      y: -5,
                      rotate: 3,
                      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.5)",
                      transition: { 
                        type: "spring", 
                        stiffness: 400, 
                        damping: 10 
                      }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-5 py-3 glass-dark text-white rounded-full font-semibold shadow-xl cursor-pointer border border-blue-400/30 hover:border-purple-400/50 transition-colors backdrop-blur-md"
                  >
                    <span className="relative z-10">{skill}</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100"
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.span>
                ))}
              </div>
            </div>
            
            {/* Decorative elements */}
            <motion.div
              className="absolute -top-10 -left-10 w-40 h-40 border-4 border-blue-400/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-10 -right-10 w-40 h-40 border-4 border-purple-400/20 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
