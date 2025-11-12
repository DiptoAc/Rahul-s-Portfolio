"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useCallback, useMemo, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";

const photos = [
  {
    src: "/Photographer1.jpeg",
    alt: "Cinematic portrait captured by Rahul Chandra Dey",
  },
  {
    src: "/Photographer2.jpeg",
    alt: "Long exposure of Friendship moment captured by Rahul Chandra Dey",
  },
  {
    src: "/Photographer3.jpeg",
    alt: "Documentary style image by Rahul Chandra Dey",
  },
  {
    src: "/Photographer4.jpeg",
    alt: "Drone shot by Rahul Chandra Dey",
  },
  {
    src: "/Photographer5.jpeg",
    alt: "Creative composition by Rahul Chandra Dey",
  },
  {
    src: "/Photographer6.jpeg",
    alt: "Light painting photographed by Rahul Chandra Dey",
  },
  {
    src: "/Photographer7.jpeg",
    alt: "Old cinematography type photography by Rahul Chandra Dey",
  },
  {
    src: "/Photographer8.jpeg",
    alt: "Artistic lighting experiment by Rahul Chandra Dey",
  },
  {
    src: "/Photographer9.jpeg",
    alt: "Nurturing beauty: Meet Rahul's newest frangipani plant.",
  },
  {
    src: "/Photographer10.jpeg",
    alt: "Fine art photograph by Rahul Chandra Dey",
  },
  {
    src: "/Photographer11.jpg",
    alt: "Photography work by Rahul Chandra Dey",
  },
  {
    src: "/Photographer12.jpg",
    alt: "Creative photography by Rahul Chandra Dey",
  },
  {
    src: "/Photographer13.jpg",
    alt: "Professional photography by Rahul Chandra Dey",
  },
  {
    src: "/Photographer14.jpg",
    alt: "Artistic photography by Rahul Chandra Dey",
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
  const [isDragging, setIsDragging] = useState(false);
  const dragStartXRef = useRef<number | null>(null);
  const dragDeltaRef = useRef(0);
  const wasDraggedRef = useRef(false);

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

  const handlePointerDown = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    dragStartXRef.current = event.clientX;
    dragDeltaRef.current = 0;
    wasDraggedRef.current = false;
    setIsDragging(true);
  }, []);

  const handlePointerMove = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDragging || dragStartXRef.current === null) {
      return;
    }

    const delta = event.clientX - dragStartXRef.current;
    dragDeltaRef.current = delta;

    if (Math.abs(delta) > 12) {
      wasDraggedRef.current = true;
    }
  }, [isDragging]);

  const resetDrag = useCallback(() => {
    dragStartXRef.current = null;
    dragDeltaRef.current = 0;
    setIsDragging(false);
  }, []);

  const handlePointerEnd = useCallback(() => {
    if (!isDragging || dragStartXRef.current === null) {
      resetDrag();
      return;
    }

    const delta = dragDeltaRef.current;

    if (Math.abs(delta) > 60) {
      if (delta > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }

    resetDrag();
  }, [handleNext, handlePrev, isDragging, resetDrag]);

  const handleCardActivate = useCallback((index: number) => {
    if (wasDraggedRef.current) {
      wasDraggedRef.current = false;
      return;
    }

    handleSelect(index);
  }, [handleSelect]);

  return (
    <section
      id="photography"
      className="py-20 bg-gradient-to-b from-slate-50 via-white to-stone-100 relative overflow-hidden"
      aria-labelledby="photography-heading"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.25) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute -top-10 right-10 w-72 h-72 rounded-full bg-indigo-100/70 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-purple-100/60 blur-3xl" />
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-indigo-200 text-indigo-700 text-sm uppercase tracking-[0.2em]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Photography
          </motion.span>
          <h2
            id="photography-heading"
            className="mt-6 text-4xl md:text-5xl font-bold text-slate-900"
          >
            Visual Stories Behind the Lens
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A rotating carousel of client work, travel snippets, and personal
            storytelling frames. Rotate the wheel or tap a frame to bring it
            into focus.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            className="relative h-[520px] md:h-[600px] touch-pan-y select-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerEnd}
            onPointerCancel={handlePointerEnd}
            onPointerLeave={() => {
              if (isDragging) {
                handlePointerEnd();
              }
            }}
          >
            {visiblePhotos.map(({ photo, index, offset, isVisible }) => {
              if (!isVisible) {
                return null;
              }

              const distance = Math.abs(offset);
              const translateX = offset * 280;
              const translateY = distance === 0 ? 0 : 40;
              const scale = distance === 0 ? 1.15 : 0.88 - distance * 0.03;
              const opacity = distance === 0 ? 1 : 0.35;
              const blur = distance === 0 ? "0px" : `${distance * 1.5}px`;
              const zIndex = 20 - distance;
              const shadow =
                distance === 0
                  ? "0 45px 90px rgba(148, 197, 253, 0.3)"
                  : "0 25px 60px rgba(148, 163, 184, 0.25)";

              return (
                <motion.button
                  key={photo.src}
                  type="button"
                  onClick={() => handleCardActivate(index)}
                  aria-label={`View photo ${index + 1}`}
                  className="focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200/70 rounded-[32px]"
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
                  <div className="relative w-[360px] h-[480px] md:w-[420px] md:h-[540px] overflow-hidden rounded-[32px] border border-indigo-100 bg-white/85 backdrop-blur-xl">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 768px) 80vw, (max-width: 1024px) 55vw, 440px"
                      className="object-cover"
                      priority={index === activeIndex}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                      <p className="text-sm font-medium text-slate-900 drop-shadow-lg">
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
              className="group inline-flex items-center justify-center h-12 w-12 rounded-full border border-indigo-200 bg-white text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-all"
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
                  className="relative h-12 w-12 rounded-xl overflow-hidden border border-indigo-200"
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
                      className="absolute inset-0 rounded-xl border-2 border-indigo-400/80"
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
              className="group inline-flex items-center justify-center h-12 w-12 rounded-full border border-indigo-200 bg-white text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-all"
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
              className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-500 transition-colors"
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

