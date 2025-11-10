"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "1066e4cb-e4f4-44d7-b8c6-481af4085239",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio contact for Rahul Chandra Dey from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setStatusMessage("Thank you! Your message has been sent successfully.");
        setFormData({ name: "", email: "", message: "" });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus("idle");
          setStatusMessage("");
        }, 5000);
      } else {
        setStatus("error");
        setStatusMessage("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setStatusMessage("Failed to send message. Please try again later.");
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/25 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-500/25 rounded-full filter blur-3xl opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-slate-100 mb-12"
        >
          Get In Touch
        </motion.h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-slate-100 mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 5, scale: 1.02 }}
                className="flex items-start bg-slate-900/70 border border-slate-700/40 p-4 rounded-xl shadow-lg backdrop-blur"
              >
                <svg className="w-6 h-6 flex-shrink-0 text-sky-300 mt-1 mr-4" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-medium text-slate-100">Email</p>
                  <a href="mailto:rahulchandradey08@gmail.com" className="text-sky-300 hover:text-sky-200">
                    rahulchandradey08@gmail.com
                  </a>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 5, scale: 1.02 }}
                className="flex items-start bg-slate-900/70 border border-slate-700/40 p-4 rounded-xl shadow-lg backdrop-blur"
              >
                <svg className="w-6 h-6 flex-shrink-0 text-sky-300 mt-1 mr-4" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-medium text-slate-100">Phone</p>
                  <a href="tel:+8801615747455" className="text-slate-300 hover:text-sky-200">
                    +880 1615-747455
                  </a>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 5, scale: 1.02 }}
                className="flex items-start bg-slate-900/70 border border-slate-700/40 p-4 rounded-xl shadow-lg backdrop-blur"
              >
                <svg className="w-6 h-6 flex-shrink-0 text-sky-300 mt-1 mr-4" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-medium text-slate-100">Location</p>
                  <p className="text-slate-300">Present: Dewan Bazar, Chattogram</p>
                  <p className="text-slate-300">Permanent: Betua, Daganbhuiyan, Feni</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5, scale: 1.02 }}
                className="flex items-start bg-slate-900/70 border border-slate-700/40 p-4 rounded-xl shadow-lg backdrop-blur"
              >
                <svg className="w-6 h-6 flex-shrink-0 text-sky-300 mt-1 mr-4" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0zm6.938 5A10.5 10.5 0 1010.5 3a10.5 10.5 0 0011.438 13z" />
                </svg>
                <div>
                  <p className="font-medium text-slate-100">Personal Details</p>
                  <p className="text-slate-300">Nationality: Bangladeshi</p>
                  <p className="text-slate-300">Blood Group: B+</p>
                  <p className="text-slate-300">Date of Birth: 03 Dec 1999</p>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold text-slate-100 mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="tel:+8801615747455"
                  className="p-3 bg-slate-900/70 border border-slate-700/40 rounded-full hover:border-sky-400/40 transition-all shadow-lg backdrop-blur text-slate-200 hover:text-sky-300"
                >
                  <svg className="w-6 h-6" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.69l1.2 3.59a1 1 0 01-.54 1.23l-2.02.9a11.04 11.04 0 005.66 5.66l.9-2.02a1 1 0 011.23-.54l3.59 1.2a1 1 0 01.69.95V19a2 2 0 01-2 2h-1C9.28 21 3 14.72 3 6V5z"/>
                  </svg>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href="mailto:rahulchandradey08@gmail.com"
                  className="p-3 bg-slate-900/70 border border-slate-700/40 rounded-full hover:border-sky-400/40 transition-all shadow-lg backdrop-blur text-slate-200 hover:text-sky-300"
                >
                  <svg className="w-6 h-6" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.25 6.5A2.25 2.25 0 014.5 4.25h15A2.25 2.25 0 0121.75 6.5v11a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 17.5v-11Zm2.39-.75a.75.75 0 00-.64.35l7 5.25a.75.75 0 00.9 0l7-5.25a.75.75 0 00-.64-.35h-12.62Z"/>
                  </svg>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  href="/Rahul%20CV2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900/70 border border-slate-700/40 rounded-full hover:border-sky-400/40 transition-all shadow-lg backdrop-blur text-slate-200 hover:text-sky-300"
                >
                  <svg className="w-6 h-6" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3a1 1 0 011 1v8.59l1.3-1.3a1 1 0 111.4 1.42l-3 3a1 1 0 01-1.4 0l-3-3a1 1 0 011.4-1.42l1.3 1.3V4a1 1 0 011-1zm-7 14a2 2 0 012-2h2a1 1 0 010 2H7v1h10v-1h-2a1 1 0 010-2h2a2 2 0 012 2v2a1 1 0 01-1 1H6a1 1 0 01-1-1v-2z" />
                  </svg>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.15, rotate: 4 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.facebook.com/kathaykathana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900/70 border border-slate-700/40 rounded-full hover:border-sky-400/40 transition-all shadow-lg backdrop-blur text-slate-200 hover:text-sky-300"
                >
                <svg
                  className="w-6 h-6"
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
                  whileHover={{ scale: 1.15, rotate: -4 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.facebook.com/Rahuldey.08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900/70 border border-slate-700/40 rounded-full hover:border-sky-400/40 transition-all shadow-lg backdrop-blur text-slate-200 hover:text-sky-300"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.04c-5.51 0-9.96 4.45-9.96 9.96 0 4.41 2.87 8.16 6.84 9.48.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.61.07-.6.07-.6 1 .07 1.53 1.02 1.53 1.02.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.02-2.68-.1-.25-.44-1.27.1-2.64 0 0 .83-.27 2.72 1.02a9.44 9.44 0 0 1 2.47-.33c.84 0 1.68.11 2.47.33 1.88-1.29 2.71-1.02 2.71-1.02.55 1.37.21 2.39.11 2.64.63.7 1.02 1.58 1.02 2.68 0 3.86-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.33-.01 2.39-.01 2.72 0 .26.18.57.68.47 3.98-1.32 6.85-5.07 6.85-9.48 0-5.51-4.45-9.96-9.96-9.96Z" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === "loading"}
                className="w-full px-6 py-3 bg-gradient-to-r from-sky-500 to-fuchsia-500 text-white rounded-lg hover:from-sky-600 hover:to-fuchsia-600 transition-all font-medium shadow-lg hover:shadow-xl disabled:from-slate-700 disabled:to-slate-700 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </motion.button>
              
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 rounded-lg"
                >
                  {statusMessage}
                </motion.div>
              )}
              
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-rose-500/10 text-rose-300 border border-rose-500/30 rounded-lg"
                >
                  {statusMessage}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
