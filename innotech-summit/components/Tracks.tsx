"use client";

import { motion } from 'framer-motion';
import { tracks } from '@/data/event';

export default function Tracks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="tracks" className="py-32 relative">
      {/* Background decorations removed */}
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            HACKATHON <span className="text-gray-400">TRACKS</span>
          </h2>
          <div className="w-16 h-[2px] bg-white/30 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose your domain and build solutions that push the boundaries of technology.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {tracks.map((track, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all duration-300 group cursor-pointer relative overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform origin-left">
                  {track.icon}
                </div>
                <h3 className="font-orbitron text-xl font-bold mb-3 text-white">
                  {track.title}
                </h3>
                <p className="text-gray-400 font-light group-hover:text-gray-300 transition-colors">
                  {track.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
