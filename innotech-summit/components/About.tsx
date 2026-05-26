"use client";

import { motion } from 'framer-motion';
import { event, stats } from '@/data/event';

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white drop-shadow-lg">ABOUT</span> THE SUMMIT
            </h2>
            <div className="w-16 h-[2px] bg-white/30 mb-8"></div>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-6">
              {event.name} is a premier 12 + 12 Hour Hackathon bringing together the brightest college minds to build innovative solutions for real-world problems.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Whether you are a seasoned developer or a passionate beginner, this is your arena to conceptualize, collaborate, and create. Dive into cutting-edge tracks, learn from mentors, and compete for epic prizes.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="glass p-8 rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300 flex flex-col items-center justify-center text-center shadow-xl"
              >
                <div className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-md">{stat.value}</div>
                <div className="text-sm uppercase tracking-wider text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
