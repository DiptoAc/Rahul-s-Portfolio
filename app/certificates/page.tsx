"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Certificate {
  name: string;
  file: string;
  description: string;
}

const certificates: Certificate[] = [
  {
    name: "MTCNA",
    file: "/Cetifications/MTCNA.pdf",
    description: "MikroTik Certified Network Associate",
  },
  {
    name: "Career Essentials Certificate",
    file: "/Cetifications/Career Essentials Certificate by Microsoft and LinkedIn.pdf",
    description: "Microsoft and LinkedIn Career Essentials",
  },
  {
    name: "Coursera Certificate",
    file: "/Cetifications/Coursera Q94848A88CKB.pdf",
    description: "Coursera Professional Certificate",
  },
  {
    name: "Cisco Certified Network Associate",
    file: "/Cetifications/Cisco Certified Network Associate.pdf",
    description: "CCNA - Cisco Certified Network Associate",
  },
];

export default function CertificatesPage() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-stone-100">
      <Header />
      <section className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-indigo-200 text-indigo-700 text-sm uppercase tracking-[0.2em] mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Certifications
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-500 to-rose-400 bg-clip-text text-transparent">
                Professional Certificates
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              View and download my professional certifications and achievements
            </p>
          </motion.div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-3xl border border-slate-200 p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-rose-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-rose-400 text-white shadow-lg">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-slate-600">{cert.description}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCertificate(selectedCertificate === index ? null : index)}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                      {selectedCertificate === index ? "Close Viewer" : "View Certificate"}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleDownload(cert.file, `${cert.name}.pdf`)}
                      className="px-6 py-3 bg-white border-2 border-indigo-500 text-indigo-600 rounded-full font-semibold hover:bg-indigo-50 transition-all flex items-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      Download
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* PDF Viewer Modal */}
          {selectedCertificate !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedCertificate(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-gradient-to-r from-indigo-50 to-purple-50">
                  <h3 className="text-xl font-bold text-slate-900">
                    {certificates[selectedCertificate].name}
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedCertificate(null)}
                    className="p-2 rounded-full hover:bg-slate-200 transition-colors"
                  >
                    <svg
                      className="w-6 h-6 text-slate-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </div>

                {/* PDF Viewer */}
                <div className="relative w-full h-[calc(90vh-80px)]">
                  <iframe
                    src={`${certificates[selectedCertificate].file}#toolbar=0`}
                    className="w-full h-full"
                    title={certificates[selectedCertificate].name}
                  />
                </div>

                {/* Footer Actions */}
                <div className="flex items-center justify-between p-4 border-t border-slate-200 bg-gradient-to-r from-indigo-50 to-purple-50">
                  <p className="text-sm text-slate-600">
                    {certificates[selectedCertificate].description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      handleDownload(
                        certificates[selectedCertificate].file,
                        `${certificates[selectedCertificate].name}.pdf`
                      )
                    }
                    className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold flex items-center gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download PDF
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-indigo-500 text-indigo-600 rounded-full font-semibold hover:bg-indigo-50 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Home
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

