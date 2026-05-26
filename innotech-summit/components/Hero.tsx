"use client";

import { motion } from 'framer-motion';
import { event } from '@/data/event';
import Link from 'next/link';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background image map if any */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('/hack-juice/ezgif-frame-001.jpg')] bg-cover bg-center mix-blend-screen" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.h1 variants={itemVariants} className="font-orbitron font-black text-6xl md:text-8xl lg:text-9xl leading-none tracking-tighter mb-4">
            INNO<br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 drop-shadow-2xl">HACK</span>
            <br />
            SUMMIT
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-400 font-light mb-10 max-w-2xl mx-auto">
            {event.tagline}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base font-orbitron tracking-widest text-white/80">
            <span className="flex items-center gap-2"><div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"/> {event.date}</span>
            <span className="hidden md:inline text-white/20">|</span>
            <span className="flex items-center gap-2"><div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"/> {event.location}</span>
            <span className="hidden md:inline text-white/20">|</span>
            <span className="flex items-center gap-2"><div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"/> {event.duration}</span>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://forms.gle/qMn9jiUL3578XmC78" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-black font-orbitron font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300 shadow-xl rounded-full text-center"
            >
              Register Now
            </a>
            <Link href="#about" className="px-8 py-4 border border-white/20 text-white font-orbitron font-bold uppercase tracking-widest hover:bg-white/10 transition-colors duration-300 rounded-full text-center backdrop-blur-md">
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
