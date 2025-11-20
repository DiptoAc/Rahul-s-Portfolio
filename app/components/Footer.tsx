"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const cyclingWords = [
  { text: "Portfolio?", color: "text-yellow-300" },
  { text: "Website?", color: "text-red-400" },
  { text: "Android App?", color: "text-teal-400" },
  { text: "Software?", color: "text-indigo-300" },
];

function TypingAnimation() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeedRef = useRef(100);

  useEffect(() => {
    const currentWord = cyclingWords[currentWordIndex].text;
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing forward
      if (displayedText.length < currentWord.length) {
        typingSpeedRef.current = 100;
        timer = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, typingSpeedRef.current);
      } else {
        // Finished typing, wait then start deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
          typingSpeedRef.current = 50;
        }, 2000);
      }
    } else {
      // Deleting
      if (displayedText.length > 0) {
        typingSpeedRef.current = 50;
        timer = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        }, typingSpeedRef.current);
      } else {
        typingSpeedRef.current = 100;
        timer = setTimeout(() => {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % cyclingWords.length);
        }, 300);
      }
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [displayedText, isDeleting, currentWordIndex]);

  const currentColor = cyclingWords[currentWordIndex].color;

  return (
    <span className="inline-block">
      Want Your Own{" "}
      <span className={currentColor}>
        {displayedText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-0.5 h-6 md:h-7 bg-current ml-1 align-middle"
        />
      </span>
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-50 via-white to-stone-100 text-slate-700 py-6 md:py-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="hidden md:block absolute top-0 left-0 w-64 h-64 bg-indigo-100 rounded-full filter blur-3xl opacity-30" />
      <div className="hidden md:block absolute bottom-0 right-0 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute inset-x-0 bottom-0 h-24 md:h-40 laser-flow" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 md:mb-0"
          >
            <p className="text-lg font-semibold bg-gradient-to-r from-indigo-500 to-slate-600 bg-clip-text text-transparent">
              Rahul Chandra Dey
            </p>
            <p className="text-slate-500 text-sm">Executive Support Engineer & Video Editor</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4 md:gap-6 flex-wrap justify-center md:justify-end"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="tel:+8801615747455"
              className="hover:text-indigo-600 transition-colors"
            >
              Call
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="mailto:rahulchandradey08@gmail.com"
              className="hover:text-indigo-600 transition-colors"
            >
              Email
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://www.facebook.com/kathaykathana"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition-colors"
            >
              Kathay Kathana
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://www.facebook.com/Rahuldey.08"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition-colors"
            >
              Photo Stories
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="http://linkedin.com/in/rahul-dey-b1a6462b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition-colors"
            >
              LinkedIn
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-6 pt-6 border-t border-indigo-100 text-center text-slate-500 text-sm"
        >
          <p>&copy; {new Date().getFullYear()} Designed & Developed by Sudipto Acharjee.</p>
        </motion.div>
      </div>

      {/* Prominent Portfolio Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-6 pt-6 border-t-2 border-indigo-200"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-slate-900 rounded-2xl p-6 shadow-2xl relative overflow-hidden"
          >
            {/* Animated dark gradient background */}
            <motion.div
              className="absolute inset-0 opacity-100"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(55, 48, 163, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(79, 70, 229, 0.2) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, rgba(55, 48, 163, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 20%, rgba(79, 70, 229, 0.2) 0%, transparent 50%)",
                  "radial-gradient(circle at 50% 30%, rgba(55, 48, 163, 0.3) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(79, 70, 229, 0.2) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 50%, rgba(55, 48, 163, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(79, 70, 229, 0.2) 0%, transparent 50%)",
                ],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            {/* Animated particles */}
            <div className="absolute inset-0 opacity-30">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-indigo-400 rounded-full blur-sm"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 3) * 25}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, 20, 0],
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10 text-center">
              <motion.h3
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-xl md:text-2xl font-bold text-white mb-1 min-h-[2.5rem] md:min-h-[3rem] flex items-center justify-center"
              >
                <TypingAnimation />
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="text-white/80 text-sm md:text-base mb-4"
              >
                Contact Sudipto Acharjee
              </motion.p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <motion.a
                  href="https://wa.me/8801911725331?text=Hi%20Sudipto,%0A%0AI%20loved%20Rahul%27s%20portfolio%20and%20want%20one%20for%20myself.%20Could%20we%20discuss%20a%20new%20project%3F%0A%0AName:%20[Your%20Name]%0AOrganisation/Brand:%20[Optional]%0APreferred%20Timeline:%20[Timeline]%0ADescription:%20[What%20you%20need]%0A%0AThanks!"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 rounded-full font-semibold text-sm md:text-base shadow-xl hover:shadow-2xl transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp: 01911-725331
                </motion.a>
                
                <motion.a
                  href="mailto:sudipto64.sust@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Sudipto,%0A%0AI%20loved%20Rahul's%20portfolio%20and%20want%20one%20for%20myself.%20Could%20we%20discuss%20a%20new%20project?%0A%0AName:%20[Your%20Name]%0AOrganisation/Brand:%20[Optional]%0APreferred%20Timeline:%20[Timeline]%0ADescription:%20[What%20you%20need]%0A%0AThanks!"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-full font-semibold text-sm md:text-base hover:bg-white/20 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email: sudipto64.sust@gmail.com
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}
