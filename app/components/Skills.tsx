"use client";

import { motion, type Variants, type Transition } from "framer-motion";
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
      gradient: "from-indigo-600 via-fuchsia-500 to-emerald-400",
      accent: "from-indigo-100/80 via-fuchsia-100/65 to-white/85",
      surface: "from-indigo-50/95 via-white to-fuchsia-50/90",
      border: "border-indigo-100/70",
      cardShadow: "0 40px 80px rgba(129, 140, 248, 0.32)",
      iconShadow: "0 24px 40px rgba(236, 72, 153, 0.35)",
      tagBorder: "border-indigo-200/70",
      tagGradient: "from-indigo-100/90 to-fuchsia-100/70"
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
      gradient: "from-purple-600 via-indigo-500 to-cyan-500",
      accent: "from-purple-100/80 via-indigo-100/60 to-white/82",
      surface: "from-purple-50/95 via-white to-indigo-50/90",
      border: "border-purple-100/70",
      cardShadow: "0 40px 80px rgba(167, 139, 250, 0.32)",
      iconShadow: "0 24px 40px rgba(129, 140, 248, 0.32)",
      tagBorder: "border-purple-200/70",
      tagGradient: "from-purple-100/85 to-indigo-100/70"
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
      gradient: "from-amber-500 via-orange-500 to-rose-500",
      accent: "from-amber-100/75 via-orange-100/60 to-white/82",
      surface: "from-amber-50/95 via-white to-orange-50/90",
      border: "border-amber-100/70",
      cardShadow: "0 40px 80px rgba(251, 191, 36, 0.32)",
      iconShadow: "0 24px 40px rgba(251, 146, 60, 0.32)",
      tagBorder: "border-amber-200/70",
      tagGradient: "from-amber-100/80 to-orange-100/65"
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
      gradient: "from-fuchsia-500 via-purple-500 to-sky-500",
      accent: "from-fuchsia-100/75 via-purple-100/60 to-white/82",
      surface: "from-fuchsia-50/95 via-white to-purple-50/90",
      border: "border-fuchsia-100/70",
      cardShadow: "0 40px 80px rgba(244, 114, 182, 0.32)",
      iconShadow: "0 24px 40px rgba(236, 72, 153, 0.32)",
      tagBorder: "border-fuchsia-200/70",
      tagGradient: "from-fuchsia-100/85 to-purple-100/65"
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
      gradient: "from-slate-600 via-purple-500 to-indigo-500",
      accent: "from-slate-100/75 via-purple-100/60 to-white/82",
      surface: "from-slate-50/95 via-white to-purple-50/90",
      border: "border-slate-200/70",
      cardShadow: "0 40px 80px rgba(129, 140, 248, 0.28)",
      iconShadow: "0 24px 40px rgba(99, 102, 241, 0.28)",
      tagBorder: "border-slate-300/70",
      tagGradient: "from-slate-100/80 to-purple-100/65"
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
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      accent: "from-emerald-100/75 via-teal-100/60 to-white/82",
      surface: "from-emerald-50/95 via-white to-teal-50/90",
      border: "border-emerald-100/70",
      cardShadow: "0 40px 80px rgba(16, 185, 129, 0.3)",
      iconShadow: "0 24px 40px rgba(45, 212, 191, 0.32)",
      tagBorder: "border-emerald-200/70",
      tagGradient: "from-emerald-100/80 to-teal-100/65"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const categoryTransition: Transition = {
    duration: 0.6,
    type: "spring",
    stiffness: 100,
    damping: 15,
  };

  const categoryVariants: Variants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: categoryTransition,
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-white to-stone-100 relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-200/50 rounded-full filter blur-3xl opacity-65 animate-blob" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-200/45 rounded-full filter blur-3xl opacity-55 animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-200/45 rounded-full filter blur-3xl opacity-45 animate-blob animation-delay-4000" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(148, 163, 184, 0.18) 1px, transparent 0)`,
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
            <span className="shiny-text">
              Technical Skills
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-fuchsia-400 to-emerald-400 rounded-full"
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
            className="text-lg text-slate-600 max-w-2xl mx-auto mt-6"
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
                className={`relative h-full rounded-3xl overflow-hidden border ${category.border} bg-white/92 backdrop-blur-2xl transition-shadow duration-500`}
                style={{
                  boxShadow:
                    hoveredCard === index
                      ? category.cardShadow
                      : "0 25px 65px rgba(148, 163, 184, 0.2)"
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.surface} opacity-75 pointer-events-none`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.accent} opacity-55 group-hover:opacity-85 transition-opacity duration-500 pointer-events-none`}
                />
                <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-70" />
                <div className="absolute inset-x-6 bottom-0 h-32 bg-gradient-to-t from-white/60 via-transparent to-transparent pointer-events-none" />

                <div className="relative z-10 flex flex-col gap-8 p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${category.gradient} text-3xl text-white/95 shadow-lg`}
                        style={{ boxShadow: category.iconShadow }}
                      >
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900">
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
                        className={`rounded-full border ${category.tagBorder} px-4 py-2 text-sm font-medium text-slate-700 bg-white/95 shadow-sm transition-transform duration-300`}
                      >
                        <span>{skill}</span>
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-500">
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
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl shadow-2xl p-10 overflow-hidden border border-slate-700/40">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-15">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(148, 163, 184, 0.2) 1px, transparent 0)`,
                backgroundSize: '30px 30px'
              }} />
            </div>
            
            {/* Animated blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full filter blur-3xl opacity-40 animate-blob" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-100 rounded-full filter blur-3xl opacity-35 animate-blob animation-delay-2000" />
            
            <div className="relative z-10">
              <motion.h3 
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-center mb-8"
              >
                <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-slate-400 bg-clip-text text-transparent">
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
                      boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)",
                      transition: { 
                        type: "spring", 
                        stiffness: 400, 
                        damping: 10 
                      }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-5 py-3 bg-white/10 text-slate-100 rounded-full font-semibold shadow-xl cursor-pointer border border-indigo-300/40 hover:border-indigo-200/60 transition-colors backdrop-blur-md"
                  >
                    <span className="relative z-10">{skill}</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-indigo-300/25 to-fuchsia-300/20 rounded-full opacity-0 group-hover:opacity-100"
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.span>
                ))}
              </div>
            </div>
            
            {/* Decorative elements */}
            <motion.div
              className="absolute -top-10 -left-10 w-40 h-40 border-4 border-indigo-200/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-10 -right-10 w-40 h-40 border-4 border-indigo-200/30 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
