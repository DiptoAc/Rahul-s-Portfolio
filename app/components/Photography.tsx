"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useCallback, useMemo, useState } from "react";

const photos = [
  {
    src: "/Photographer1.jpeg",
    alt: "Cinematic portrait captured by Rahul Chandra Dey",
  },
  {
    src: "/Photographer2.jpeg",
    alt: "Landscape frame captured by Rahul Chandra Dey",
  },
  {
    src: "/Photographer3.jpeg",
    alt: "Documentary style image by Rahul Chandra Dey",
  },
  {
    src: "/Photographer4.jpeg",
    alt: "Event photography highlight by Rahul Chandra Dey",
  },
  {
    src: "/Photographer5.jpeg",
    alt: "Creative composition by Rahul Chandra Dey",
  },
  {
    src: "/Photographer6.jpeg",
    alt: "Street moment photographed by Rahul Chandra Dey",
  },
  {
    src: "/Photographer7.jpeg",
    alt: "Travel photography still by Rahul Chandra Dey",
  },
  {
    src: "/Photographer8.jpeg",
    alt: "Artistic lighting experiment by Rahul Chandra Dey",
  },
  {
    src: "/Photographer9.jpeg",
    alt: "Cultural storytelling shot by Rahul Chandra Dey",
  },
  {
    src: "/Photographer10.jpeg",
    alt: "Fine art photograph by Rahul Chandra Dey",
  },
];

function getShortestOffset(index: number, active: number, length: number) {
  let delta = index - active;
  const half = Math.floor(length / 2);

  if (delta > half) {
    delta -= length;
  } else if (delta < -half) {
    delta += length;
  }

  return delta;
}

export default function Photography() {
  const [activeIndex, setActiveIndex] = useState(0);

  const visiblePhotos = useMemo(() => {
    return photos.map((photo, index) => {
      const offset = getShortestOffset(index, activeIndex, photos.length);
      const isVisible = Math.abs(offset) <= 2;
      return {
        photo,
        index,
        offset,
        isVisible,
      };
    });
  }, [activeIndex]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % photos.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + photos.length) % photos.length);
  }, []);

  const handleSelect = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <section
      id="photography"
      className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
      aria-labelledby="photography-heading"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(59,130,246,0.35) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute -top-10 right-10 w-72 h-72 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-fuchsia-500/15 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/60 border border-sky-500/20 text-sky-300 text-sm uppercase tracking-[0.2em]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Photography
          </motion.span>
          <h2
            id="photography-heading"
            className="mt-6 text-4xl md:text-5xl font-bold text-slate-100"
          >
            Visual Stories Behind the Lens
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A rotating carousel of client work, travel snippets, and personal
            storytelling frames. Rotate the wheel or tap a frame to bring it
            into focus.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            className="relative h-[420px] md:h-[460px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {visiblePhotos.map(({ photo, index, offset, isVisible }) => {
              if (!isVisible) {
                return null;
              }

              const distance = Math.abs(offset);
              const translateX = offset * 240;
              const translateY = distance === 0 ? 0 : 40;
              const scale = distance === 0 ? 1 : 0.75 - distance * 0.05;
              const opacity = distance === 0 ? 1 : 0.35;
              const blur = distance === 0 ? "0px" : `${distance * 1.5}px`;
              const zIndex = 20 - distance;
              const shadow =
                distance === 0
                  ? "0 35px 80px rgba(59,130,246,0.25)"
                  : "0 25px 60px rgba(15,23,42,0.35)";

              return (
                <motion.button
                  key={photo.src}
                  type="button"
                  onClick={() => handleSelect(index)}
                  aria-label={`View photo ${index + 1}`}
                  className="focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400/50 rounded-[28px]"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
                    zIndex,
                    filter: `blur(${blur})`,
                    boxShadow: shadow,
                    opacity,
                    transition:
                      "transform 0.5s ease, opacity 0.5s ease, filter 0.5s ease, box-shadow 0.5s ease",
                  }}
                >
                  <div className="relative w-[280px] h-[360px] md:w-[340px] md:h-[420px] overflow-hidden rounded-[28px] border border-slate-700/40 bg-slate-900/60 backdrop-blur-xl">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 768px) 75vw, (max-width: 1024px) 50vw, 400px"
                      className="object-cover"
                      priority={index === activeIndex}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                      <p className="text-sm font-medium text-slate-100 drop-shadow-lg">
                        {photo.alt}
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <motion.button
              type="button"
              onClick={handlePrev}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center h-12 w-12 rounded-full border border-slate-700/60 bg-slate-900/60 text-slate-200 hover:border-sky-400/40 hover:text-sky-200 transition-all"
              aria-label="Show previous photo"
            >
              <svg
                className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 19l-7-7 7-7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>

            <div className="hidden md:flex items-center gap-2">
              {photos.map((photo, index) => (
                <motion.button
                  key={photo.src}
                  type="button"
                  onClick={() => handleSelect(index)}
                  className="relative h-12 w-12 rounded-xl overflow-hidden border border-slate-700/30"
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    opacity: index === activeIndex ? 1 : 0.45,
                    scale: index === activeIndex ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.25 }}
                  aria-label={`Jump to photo ${index + 1}`}
                >
                  <Image
                    src={photo.src}
                    alt=""
                    fill
                    sizes="60px"
                    className="object-cover"
                  />
                  {index === activeIndex && (
                    <motion.span
                      layoutId="photography-thumb-ring"
                      className="absolute inset-0 rounded-xl border-2 border-sky-400/70"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <motion.button
              type="button"
              onClick={handleNext}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center h-12 w-12 rounded-full border border-slate-700/60 bg-slate-900/60 text-slate-200 hover:border-sky-400/40 hover:text-sky-200 transition-all"
              aria-label="Show next photo"
            >
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
          </div>

          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a
              href="https://www.facebook.com/Rahuldey.08"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sky-300 hover:text-sky-200 transition-colors"
            >
              Explore full gallery on Facebook
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 7h10v10"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 17L17 7"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

