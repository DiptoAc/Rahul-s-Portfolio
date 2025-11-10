"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 md:mb-0"
          >
            <p className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Rahul Chandra Dey
            </p>
            <p className="text-slate-400 text-sm">Executive Support Engineer & Video Editor</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-6 flex-wrap justify-center md:justify-end"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="tel:+8801615747455"
              className="hover:text-blue-400 transition-colors"
            >
              Call
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="mailto:rahulchandradey08@gmail.com"
              className="hover:text-blue-400 transition-colors"
            >
              Email
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="/Rahul%20CV2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              Download CV
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://www.facebook.com/kathaykathana"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              Kathay Kathana
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://www.facebook.com/Rahuldey.08"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              Photo Stories
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 pt-6 border-t border-slate-800 text-center text-slate-400 text-sm"
        >
          <p>&copy; {new Date().getFullYear()} Designed & Developed by Sudipto Acharjee.</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-4"
      >
        <a
          href="https://wa.me/8801911725331?text=Hi%20Sudipto,%0A%0AI%20loved%20Rahul%27s%20portfolio%20and%20want%20one%20for%20myself.%20Could%20we%20discuss%20a%20new%20project%3F%0A%0AName:%20[Your%20Name]%0AOrganisation/Brand:%20[Optional]%0APreferred%20Timeline:%20[Timeline]%0ADescription:%20[What%20you%20need]%0A%0AThanks!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-slate-700/50 px-4 py-2 text-xs text-slate-300 hover:text-sky-200 hover:border-sky-400/40 transition-all"
        >
          <span className="font-medium text-sky-200">Want your own portfolio?</span>
          <span>Contact Sudipto at 01911-725331</span>
        </a>
      </motion.div>
    </footer>
  );
}
