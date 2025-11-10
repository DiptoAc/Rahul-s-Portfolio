"use client";

import { motion, type Transition, type Variants } from "framer-motion";
import { useState } from "react";

interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description: string[];
  type: "work" | "leadership";
  icon: string;
  gradient: string;
  glowColor: string;
}

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const experiences: ExperienceItem[] = [
    {
      title: "Executive Support Engineer",
      organization: "Chittagong Net Solution (CNS)",
      period: "Apr 2024 – Present",
      description: [
        "Deploy and troubleshoot routers, switches, and wireless networks for SME clients across Chattogram",
        "Provide Tier-1 & Tier-2 support via phone, remote tools, and on-site visits to resolve hardware and software incidents",
        "Monitor network performance, escalate persistent faults, and document recurring issues for preventive action",
        "Coordinate with vendors and internal teams to maintain service uptime and customer satisfaction"
      ],
      type: "work",
      icon: "🛠️",
      gradient: "from-blue-600 via-sky-600 to-cyan-600",
      glowColor: "rgba(37, 99, 235, 0.5)"
    },
    {
      title: "IT Infrastructure Trainee",
      organization: "New Vision Information Technology Ltd.",
      period: "2023 – 2024",
      description: [
        "Completed CCNA and MTCNA programmes covering routing, switching, MikroTik firewalling, and network security",
        "Built lab environments to configure VLANs, DHCP, PPPoE, and wireless controllers for hands-on mastery",
        "Strengthened system administration foundations through Coursera and Microsoft career essentials tracks",
        "Delivered mock customer support sessions emphasising troubleshooting workflows and documentation"
      ],
      type: "work",
      icon: "📡",
      gradient: "from-emerald-600 via-teal-600 to-emerald-700",
      glowColor: "rgba(16, 185, 129, 0.5)"
    },
    {
      title: "Video Editor & Storyteller",
      organization: "Stories by Ridoy Ahmed",
      period: "2021 – Present",
      description: [
        "Edit cinematic wedding films, highlight reels, and promotional content for photography studios",
        "Craft compelling narratives using Adobe Premiere Pro, After Effects, and colour grading workflows",
        "Collaborate with creative directors to align visuals, audio, and client expectations under tight deadlines",
        "Maintain organised asset libraries and deliver export-ready masters for social media and broadcast formats"
      ],
      type: "work",
      icon: "🎬",
      gradient: "from-purple-600 via-fuchsia-600 to-rose-600",
      glowColor: "rgba(192, 38, 211, 0.5)"
    },
    {
      title: "Writer & Content Contributor",
      organization: "Kathay Kathana (Facebook)",
      period: "2022 – Present",
      description: [
        "Research and write storytelling pieces focusing on culture, community, and everyday resilience",
        "Collaborate with editorial volunteers to storyboard posts and maintain a consistent publishing cadence",
        "Engage with readers through comments and live discussions to nurture a loyal audience",
        "Promote cross-media campaigns that blend essays with original photography for richer narratives"
      ],
      type: "work",
      icon: "✍️",
      gradient: "from-amber-600 via-orange-600 to-rose-500",
      glowColor: "rgba(249, 115, 22, 0.5)"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const cardTransition: Transition = {
    type: "spring",
    stiffness: 100,
    damping: 15,
  };

  const cardVariants: Variants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: cardTransition,
    }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-fuchsia-500/25 rounded-full filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/25 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl opacity-25 animate-blob animation-delay-4000" />
      
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
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Experience & Leadership
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"
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
            A collection of professional experiences and leadership roles that have shaped my growth
          </motion.p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
              className="group relative bg-gradient-to-br from-slate-900/10 via-slate-800/35 to-slate-900/5 border border-slate-600/40 rounded-3xl overflow-hidden cursor-pointer shadow-2xl hover:shadow-[0_35px_70px_rgba(15,23,42,0.55)] transition-all duration-300 backdrop-blur-xl"
              style={{
                boxShadow: hoveredCard === index
                  ? `0 25px 50px ${exp.glowColor}`
                  : undefined
              }}
            >
              {/* Gradient header */}
              <div className={`relative h-32 bg-gradient-to-br ${exp.gradient} overflow-hidden`}>
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.5) 1px, transparent 0)`,
                    backgroundSize: '30px 30px'
                  }} />
                </div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="shimmer" />
                </div>
                
                {/* Icon */}
                <motion.div
                  className="absolute bottom-4 left-6 text-6xl filter drop-shadow-2xl"
                  whileHover={{
                    rotate: 360,
                    scale: 1.2,
                    transition: { duration: 0.6, type: "spring" }
                  }}
                >
                  {exp.icon}
                </motion.div>
              </div>
              
              {/* Content */}
              <div className="p-6 relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-slate-100">
                      {exp.title}
                    </h3>
                    <p className="text-slate-300 font-semibold mb-2">
                      {exp.organization}
                    </p>
                    <p className="text-sm text-slate-400 flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {exp.period}
                    </p>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`p-2 rounded-full bg-gradient-to-br ${exp.gradient} text-white`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>
                
                {/* Expandable details */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedIndex === index ? "auto" : "0",
                    opacity: expandedIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-slate-700/40 mt-4">
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{
                            x: expandedIndex === index ? 0 : -20,
                            opacity: expandedIndex === index ? 1 : 0
                          }}
                          transition={{ delay: i * 0.08, duration: 0.3 }}
                          className="flex items-start gap-2"
                        >
                          <div className={`mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${exp.gradient} flex-shrink-0`} />
                          <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
                
                {expandedIndex !== index && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-slate-500 text-xs mt-4 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Click to view details
                  </motion.p>
                )}
              </div>
              
              {/* Decorative gradient accent */}
              <motion.div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.gradient}`}
                animate={{
                  scaleX: hoveredCard === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: "left" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
