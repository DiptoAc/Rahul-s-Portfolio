"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Car, Bike, ShieldCheck, ExternalLink, Info, MapPin } from "lucide-react";
import Image from "next/image";

const travelData = {
  name: "Rahul Chandra Dey",
  mainRole: "Network Engineer & Tech Enthusiast",
  licenseType: "Professional Class",
  authorized: [
    { name: "Light Vehicles", icon: <Car size={16} /> },
    { name: "Motorcycles", icon: <Bike size={16} /> }
  ],
  validity: "10-DEC-2029",
  bloodGroup: "B(+)VE",
  pdfPath: "/Cetifications/Rahul_License.pdf",
  image: "/Driver1.avif" // Update this to your preferred driving or travel photo
};

export default function Driver() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouseMove(event: React.MouseEvent) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  return (
    <section id="travel-perks" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Storytelling */}
          <div className="lg:w-1/2 space-y-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-4">
                Beyond the Screen
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                The Road-Certified <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600">
                  IT Specialist
                </span>
              </h2>
              <p className="text-lg text-slate-600 mt-6 leading-relaxed">
                When the servers are stable, the road calls. I bring the same precision to driving that I apply to network systems. 
                As a verified professional holder, I offer safety and reliability for every mile of our journey.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {travelData.authorized.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-900 shadow-sm">
                  <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">{item.icon}</div>
                  <span className="text-sm font-bold text-slate-700">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: The Premium Card */}
          <div className="lg:w-1/2 w-full flex justify-center perspective-1000">
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => { x.set(0); y.set(0); }}
              className="relative w-full max-w-[440px] group cursor-default"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-indigo-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              
              <div className="relative h-full bg-slate-950 rounded-[2.2rem] p-6 border border-slate-800 shadow-2xl overflow-hidden">
                
                {/* --- IMAGE SECTION (NEW) --- */}
                <div className="relative h-44 w-full mb-6 rounded-2xl overflow-hidden border border-white/5">
                  <Image
                    src={travelData.image}
                    alt="Driving Context"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Subtle Gradient Overlay to blend with dark card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-150 via-transparent to-transparent" />
                </div>

                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
                
                <div className="flex justify-between items-start mb-8">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase font-black tracking-[0.2em] text-indigo-400">Verified Credential</p>
                    <h3 className="text-2xl font-bold text-white">{travelData.name}</h3>
                    <div className="flex items-center gap-2 text-slate-400 text-xs">
                       <MapPin size={12} className="text-indigo-500" />
                       <span>BRTA Circle Feni</span>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-indigo-500 blur-xl opacity-20 animate-pulse" />
                    <ShieldCheck size={40} className="text-indigo-500 relative z-10" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-y-6 mb-8">
                  <div>
                    <p className="text-[9px] uppercase font-bold text-slate-500 tracking-wider mb-1">Authorization</p>
                    <div className="flex gap-2">
                      <div className="px-2 py-1 bg-indigo-500/10 rounded border border-indigo-500/20 text-[10px] font-bold text-indigo-300">LIGHT</div>
                      <div className="px-2 py-1 bg-indigo-500/10 rounded border border-indigo-500/20 text-[10px] font-bold text-indigo-300">MOTO</div>
                    </div>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase font-bold text-slate-500 tracking-wider mb-1">Blood Type</p>
                    <p className="text-sm font-bold text-rose-400">{travelData.bloodGroup}</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase font-bold text-slate-500 tracking-wider mb-1">Expiry Date</p>
                    <p className="text-sm font-bold text-slate-200">{travelData.validity}</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase font-bold text-slate-500 tracking-wider mb-1">Category</p>
                    <p className="text-sm font-bold text-emerald-400">PROFESSIONAL</p>
                  </div>
                </div>

                <div className="flex justify-end">
                    <motion.a
                        href={travelData.pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                        whileTap={{ scale: 0.95 }}
                        className="w-fit py-2 px-4 bg-white/10 text-white rounded-xl font-bold text-[10px] uppercase tracking-wider flex items-center gap-2 border border-white/10 backdrop-blur-md transition-all shadow-sm"
                    >
                        <ExternalLink size={12} className="text-indigo-400" />
                        Verify Document
                    </motion.a>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}