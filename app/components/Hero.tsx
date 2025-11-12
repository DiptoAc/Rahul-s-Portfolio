"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const roles = [
    "Executive Support Engineer",
    "Network System Administrator",
    "Video Editor",
    "Photographer",
  ];

  const [activeRole, setActiveRole] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveRole(prev => (prev + 1) % roles.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [roles.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <motion.div 
        className="container mx-auto px-6 py-20 relative z-10"
      >
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="mb-8 relative group"
          >
            {/* Multiple rotating glowing rings */}
            <div className="absolute inset-[-20px] bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 rounded-full blur-2xl opacity-70" />
            <div className="absolute inset-[-10px] bg-gradient-to-r from-slate-700 via-slate-800 to-slate-700 rounded-full blur-xl opacity-50" />
            <div className="absolute inset-0 bg-slate-900 rounded-full blur-3xl opacity-40" />

            {/* Profile picture with static border */}
            <div className="relative p-1 rounded-full bg-gradient-to-r from-sky-300 to-blue-200">
              <motion.img 
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                src="/Profile.jpg"
                alt="Rahul Chandra Dey"
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-white animate-float"
              />
            </div>
            
            {/* Orbiting particles */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-indigo-400 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                }}
                animate={{
                  x: [0, Math.cos((i * Math.PI) / 2) * 200, 0],
                  y: [0, Math.sin((i * Math.PI) / 2) * 200, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "linear"
                }}
              />
            ))}
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-indigo-600 via-purple-500 to-slate-800 bg-clip-text text-transparent">
              Rahul Chandra Dey
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative mb-6"
          >
            <motion.p
              className="text-xl md:text-2xl font-semibold glass-dark px-6 py-3 rounded-full inline-block text-slate-200"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                key={roles[activeRole]}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-indigo-500 drop-shadow-[0_2px_6px_rgba(99,102,241,0.35)]"
              >
                {roles[activeRole]}
              </motion.span>
            </motion.p>
          </motion.div>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg text-slate-600 max-w-2xl mb-8 leading-relaxed"
          >
            Based in Chattogram, Bangladesh, I deliver reliable IT infrastructure support, optimize enterprise networks, and craft visual stories. I thrive on hands-on problem solving, customer empathy, and continuous learning across CCNA, MTCNA, and Microsoft cloud ecosystems. Beyond the server room I publish essays for{" "}
            <a
              href="https://www.facebook.com/kathaykathana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-500 underline decoration-dotted underline-offset-4"
            >
              Kathay Kathana
            </a>{" "}
            and curate photographic narratives on{" "}
            <a
              href="https://www.facebook.com/Rahuldey.08"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-500 underline decoration-dotted underline-offset-4"
            >
              Rahul Dey Photography
            </a>
            .
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.a
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(139, 92, 246, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
              href="/Rahul%20CV2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full overflow-hidden shadow-xl font-semibold"
            >
              <span className="relative z-10 flex items-center gap-2">
                Download CV
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/certificates"
              className="px-8 py-4 glass-dark text-indigo-900 rounded-full shadow-xl border border-indigo-300/60 hover:border-indigo-400/80 transition-all font-semibold backdrop-blur-md"
            >
              Certificates
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.facebook.com/kathaykathana"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass-dark text-slate-700 rounded-full shadow-xl border border-slate-300/70 hover:border-indigo-400/70 transition-all font-semibold backdrop-blur-md"
            >
              Read My Stories
            </motion.a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex gap-6 mt-8 flex-wrap justify-center"
          >
            <motion.a
              whileHover={{ 
                scale: 1.2, 
                rotate: 8,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)"
              }}
              whileTap={{ scale: 0.9 }}
              href="tel:+8801615747455"
              className="relative p-3 glass rounded-full text-slate-700 hover:text-indigo-500 transition-all tilt-card"
            >
              <svg className="w-8 h-8 relative z-10" width="32" height="32" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .95.69l1.2 3.59a1 1 0 0 1-.54 1.23l-2.02.9a11.03 11.03 0 0 0 5.66 5.66l.9-2.02a1 1 0 0 1 1.23-.54l3.59 1.2a1 1 0 0 1 .69.95V19a2 2 0 0 1-2 2h-1C9.28 21 3 14.72 3 6V5Z" />
              </svg>
            </motion.a>
            <motion.a
              whileHover={{ 
                scale: 1.2, 
                rotate: -8,
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.8)"
              }}
              whileTap={{ scale: 0.9 }}
              href="mailto:rahulchandradey08@gmail.com"
              className="relative p-3 glass rounded-full text-slate-700 hover:text-indigo-400 transition-all tilt-card"
            >
              <svg className="w-8 h-8 relative z-10" width="32" height="32" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.25 6.5a2.25 2.25 0 0 1 2.25-2.25h15a2.25 2.25 0 0 1 2.25 2.25v11a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 17.5v-11Zm2.39-.75a.75.75 0 0 0-.64.35l7 5.25a.75.75 0 0 0 .9 0l7-5.25a.75.75 0 0 0-.64-.35h-12.62Z" />
              </svg>
            </motion.a>
            <motion.a
              whileHover={{
                scale: 1.15,
                rotate: 4,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)",
              }}
              whileTap={{ scale: 0.92 }}
              href="https://www.facebook.com/kathaykathana"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-3 glass rounded-full text-slate-700 hover:text-indigo-500 transition-all tilt-card"
            >
              <svg
                className="w-8 h-8 relative z-10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.862 3.487a2.25 2.25 0 0 1 3.182 3.182L10.09 16.623a3 3 0 0 1-1.414.79l-3.068.767.767-3.068a3 3 0 0 1 .79-1.414L16.862 3.487Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 5 19 9"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 21h6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>
            <motion.a
              whileHover={{
                scale: 1.15,
                rotate: -4,
                boxShadow: "0 0 20px rgba(236, 72, 153, 0.8)",
              }}
              whileTap={{ scale: 0.92 }}
              href="https://www.facebook.com/Rahuldey.08"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-3 glass rounded-full text-slate-700 hover:text-indigo-400 transition-all tilt-card"
            >
              <svg className="w-8 h-8 relative z-10" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.04c-5.51 0-9.96 4.45-9.96 9.96 0 4.41 2.87 8.16 6.84 9.48.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.61.07-.6.07-.6 1 .07 1.53 1.02 1.53 1.02.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.02-2.68-.1-.25-.44-1.27.1-2.64 0 0 .83-.27 2.72 1.02a9.44 9.44 0 0 1 2.47-.33c.84 0 1.68.11 2.47.33 1.88-1.29 2.71-1.02 2.71-1.02.55 1.37.21 2.39.11 2.64.63.7 1.02 1.58 1.02 2.68 0 3.86-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.33-.01 2.39-.01 2.72 0 .26.18.57.68.47 3.98-1.32 6.85-5.07 6.85-9.48 0-5.51-4.45-9.96-9.96-9.96Z" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Enhanced Scroll indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div 
          className="w-8 h-12 border-2 border-indigo-300 rounded-full flex justify-center relative overflow-hidden glass-dark"
          whileHover={{ scale: 1.1, borderColor: "rgba(99, 102, 241, 1)" }}
        >
          <motion.div
            animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-4 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full mt-2"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-slate-500 text-xs mt-2 text-center font-medium"
        >
          Scroll
        </motion.p>
      </motion.div>
    </section>
  );
}
