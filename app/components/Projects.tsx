"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  fullDescription?: string;
  tech: string[];
  github: string | null;
  live: string | null;
  highlights?: string[];
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "SME Network Reliability Program",
      description: "Deployed resilient routing and wireless infrastructure for small businesses while maintaining 24/7 helpdesk readiness.",
      fullDescription: "Designed and rolled out secure Layer-2 and Layer-3 networks for Chittagong Net Solution clients. Configured MikroTik and Cisco hardware, segmented traffic with VLANs, optimised QoS for CCTV and VoIP, and created rapid incident checklists to reduce downtime. Coordinated with vendors and internal stakeholders to keep service level agreements on track.",
      tech: ["MikroTik RouterOS", "Cisco Packet Tracer", "Optical Fiber", "TeamViewer"],
      github: null,
      live: null,
      highlights: [
        "Cut average resolution time by formalising troubleshooting scripts",
        "Implemented proactive monitoring dashboards for priority clients",
        "Hardened perimeter security with updated firewall and NAT policies"
      ]
    },
    {
      title: "IT Support Knowledge Base",
      description: "Built a reusable troubleshooting and documentation hub for recurring network, hardware, and software requests.",
      fullDescription: "Authored a living playbook covering router provisioning, OS reinstallation, backup policies, and customer communication templates. The knowledge base supports new engineers during onboarding and ensures consistent service quality across phone, remote, and onsite engagements.",
      tech: ["Notion", "Microsoft 365", "Remote Support Tools"],
      github: null,
      live: null,
      highlights: [
        "Structured SOPs for telephone, email, and onsite escalations",
        "Documented more than 40 device configuration scenarios",
        "Introduced customer follow-up checklist improving feedback scores"
      ]
    },
    {
      title: "Wedding Storytelling Suite",
      description: "Edited cinematic wedding narratives and highlight reels for regional studios with fast turnaround.",
      fullDescription: "Managed end-to-end video workflows from RAW footage ingestion to colour grading and mastering. Created personalised visual styles, synchronised multi-camera audio, and delivered export-ready files for social media, cinema screens, and broadcast platforms.",
      tech: ["Adobe Premiere Pro", "Adobe After Effects", "DaVinci Resolve", "Lightroom"],
      github: null,
      live: null,
      highlights: [
        "Delivered 50+ wedding films and teasers meeting tight client deadlines",
        "Balanced narrative pacing with music licensing and motion graphics",
        "Maintained archival asset library for rapid revisions and re-deliveries"
      ]
    }
  ];

  return (
    <>
      <section id="projects" className="py-20 bg-gradient-to-b from-slate-950 via-slate-100 to-slate-950 relative overflow-hidden text-slate-900">
        {/* Background decoration */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-sky-400/30 rounded-full filter blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-violet-400/30 rounded-full filter blur-3xl opacity-50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-sky-400 via-fuchsia-400 to-violet-400 bg-clip-text glitch"
            data-text="Featured Projects"
          >
            Featured Projects
          </motion.h2>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedProject(project)}
                className="rounded-3xl border border-white/60 bg-white/90 shadow-[0_25px_70px_rgba(148,163,184,0.35)] p-6 hover:shadow-[0_35px_90px_rgba(148,163,184,0.45)] transition-all cursor-pointer relative overflow-hidden group backdrop-blur-md"
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 rounded-full bg-slate-900/5 text-slate-700 text-sm border border-slate-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 items-center">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-sky-600 hover:text-sky-500 font-medium flex items-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-indigo-600 hover:text-indigo-500 font-medium"
                      >
                        Live Demo →
                      </a>
                    )}
                    <span className="text-slate-500 text-sm ml-auto">Click for details</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-950 rounded-2xl shadow-2xl border border-slate-700/40 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-3xl font-bold text-slate-100">{selectedProject.title}</h2>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  {selectedProject.fullDescription || selectedProject.description}
                </p>
                
                {selectedProject.highlights && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-slate-100 mb-3">Key Highlights</h3>
                    <ul className="space-y-2">
                      {selectedProject.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-emerald-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-slate-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-slate-100 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 rounded-full font-medium bg-sky-500/10 text-sky-200 border border-sky-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-slate-900 text-slate-100 rounded-lg hover:bg-slate-800 transition-colors text-center font-medium border border-slate-700/60"
                    >
                      View on GitHub
                    </a>
                  )}
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
                    >
                      View Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
