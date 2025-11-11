"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="text-center p-6 rounded-2xl border border-indigo-300/30 bg-gradient-to-br from-white via-indigo-50/30 to-white shadow-xl hover:shadow-2xl transition-all cursor-pointer backdrop-blur"
    >
      <div className="text-4xl font-bold text-indigo-600 mb-2 drop-shadow-sm">{count}+</div>
      <div className="text-slate-700">{label}</div>
    </motion.div>
  );
}

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-100/60 rounded-full filter blur-3xl opacity-70 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100/50 rounded-full filter blur-3xl opacity-60 translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-slate-900 mb-12"
        >
          About Me
        </motion.h2>
        
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-8 shadow-2xl hover:shadow-[0_30px_60px_rgba(148,163,184,0.28)] transition-all mb-12 backdrop-blur"
          >
            <motion.p 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-lg text-slate-600 mb-6 leading-relaxed"
            >
              I am an <strong>Executive Support Engineer</strong> delivering dependable IT operations for businesses in Chattogram. My day-to-day work spans <strong>computer networking, system administration, and customer-facing support</strong>, ensuring every router, workstation, and service keeps employees productive.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 mb-6 leading-relaxed"
            >
              My toolkit blends <strong>CCNA, MTCNA, Microsoft Azure Fundamentals, and hands-on hardware maintenance</strong>. Whether I am configuring MikroTik firewalls, building structured cabling, or guiding users remotely, I focus on transparent communication and measurable outcomes. Beyond the console I nurture a small nursery of <strong>Kathgolap</strong> saplings—pairing horticulture with reliable doorstep delivery across Chattogram.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-slate-600 leading-relaxed"
            >
              Outside the server room I collaborate with wedding storytellers as a <strong>professional video editor</strong>, contribute long-form essays to{" "}
              <a
                href="https://www.facebook.com/kathaykathana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-500 underline decoration-dotted underline-offset-4"
              >
                Kathay Kathana
              </a>
              , and curate community-driven images on{" "}
              <a
                href="https://www.facebook.com/Rahuldey.08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-500 underline decoration-dotted underline-offset-4"
              >
                Rahul Dey Photography
              </a>
              . I am motivated by hard work, continuous learning, and the belief that every client deserves thoughtful support.
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <AnimatedCounter target={7} label="Months Executive Support" />
            <AnimatedCounter target={7} label="Professional Certifications" />
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-2xl border border-indigo-200/40 bg-gradient-to-br from-white via-indigo-50/30 to-white shadow-xl hover:shadow-[0_30px_60px_rgba(148,163,184,0.24)] transition-all cursor-pointer backdrop-blur"
            >
              <div className="text-4xl font-bold text-indigo-600 mb-2 drop-shadow-sm">3.45</div>
              <div className="text-slate-600">Diploma CGPA (CST)</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
