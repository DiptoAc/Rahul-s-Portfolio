"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Download, Eye, X, Award, ShieldCheck, FileText } from "lucide-react";

interface Certificate {
  name: string;
  file: string;
  description: string;
  icon: string;
}

const certificates: Certificate[] = [
  {
    name: "MTCNA",
    file: "/Cetifications/MTCNA.pdf",
    description: "MikroTik Certified Network Associate",
    icon: "/Icons/MTCNA.png",
  },
  {
    name: "Career Essentials",
    file: "/Cetifications/Career Essentials Certificate by Microsoft and LinkedIn.pdf",
    description: "Microsoft and LinkedIn Career Essentials",
    icon: "/Icons/Microsoft_Linkedin.png",
  },
  {
    name: "Coursera Professional",
    file: "/Cetifications/Coursera Q94848A88CKB.pdf",
    description: "Google IT Support Professional Certificate",
    icon: "/Icons/Coursera.png",
  },
  {
    name: "Cisco CCNA",
    file: "/Cetifications/Cisco Certified Network Associate.pdf",
    description: "CCNA - Cisco Certified Network Associate",
    icon: "/Icons/Cisco.png",
  },
];

export default function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);

  const handleDownload = (file: string, name: string) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-100">
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/60 rounded-full blur-[100px] -ml-48 -mb-48" />
      </div>

      <section className="relative pt-32 pb-20 px-6 z-10">
        <div className="container mx-auto max-w-7xl">
          {/* Header Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-indigo-500/30 text-indigo-700 text-sm uppercase tracking-[0.2em]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                Credentials & Training
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Professional{" "}
              <span className="text-indigo-600">
                Certifications
              </span>
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Validated expertise in network infrastructure, system administration, and modern cloud technologies.
            </p>
          </motion.div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300"
              >
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="relative h-20 w-20 flex-shrink-0 rounded-2xl bg-slate-50 border border-slate-100 p-3 shadow-inner group-hover:scale-105 transition-transform">
                      <Image
                        src={cert.icon}
                        alt={cert.name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                         <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{cert.name}</h3>
                         <ShieldCheck size={18} className="text-emerald-500" />
                      </div>
                      <p className="text-slate-500 text-sm">{cert.description}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedCertificate(index)}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 transition-all"
                    >
                      <Eye size={16} /> View
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleDownload(cert.file, `${cert.name}.pdf`)}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 rounded-2xl text-sm font-bold text-white shadow-md shadow-indigo-200 transition-all"
                    >
                      <Download size={16} /> Download
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal - Light Theme */}
      <AnimatePresence>
        {selectedCertificate !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-white border border-slate-200 rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50/50">
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                      <FileText size={20} />
                   </div>
                   <h3 className="text-lg font-bold text-slate-900">
                    {certificates[selectedCertificate].name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="relative w-full h-[calc(90vh-140px)] bg-slate-100">
                <iframe
                  src={`${certificates[selectedCertificate].file}#toolbar=0`}
                  className="w-full h-full"
                  title={certificates[selectedCertificate].name}
                />
              </div>

              <div className="p-5 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-slate-500 font-medium">
                  Reference: {certificates[selectedCertificate].description}
                </p>
                <button
                  onClick={() => handleDownload(certificates[selectedCertificate].file, `${certificates[selectedCertificate].name}.pdf`)}
                  className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-lg shadow-indigo-100"
                >
                  <Download size={14} /> Download PDF
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}