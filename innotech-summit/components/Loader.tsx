"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scrolling while loading
    document.body.style.overflow = 'hidden';
    
    // Hide loader after ~2.5s (0.5s fade in + 2s visible timeout triggers exit)
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = '';
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[999] bg-[#0a0a0a] flex flex-col items-center justify-center select-none"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
            className="flex flex-col items-center"
          >
            <motion.div
              animate={{ y: [-5, 5] }}
              transition={{ repeat: Infinity, duration: 2, repeatType: "mirror", ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
              {/* Rotating Circular Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="w-12 h-12 md:w-16 md:h-16 border-t-2 border-r-2 border-white/10 border-t-white/80 rounded-full mb-8 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
              />

              {/* Title with Soft Glow */}
              <h1 className="font-orbitron font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-widest drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] mb-4">
                AI NEXUS
              </h1>
              
              {/* Subtitle & Blinking Dots */}
              <div className="flex items-center gap-1">
                <p className="text-xs md:text-sm text-gray-400 uppercase tracking-[0.2em] md:tracking-[0.3em] font-light">
                  Initializing Experience
                </p>
                <motion.div className="flex gap-[2px] ml-1">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: i * 0.2 }}
                      className="w-1 h-1 bg-gray-400 rounded-full"
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
