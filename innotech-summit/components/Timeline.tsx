"use client";

import { motion } from 'framer-motion';
import { timeline } from '@/data/event';

export default function Timeline() {
  return (
    <section id="timeline" className="py-32 relative bg-surface/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            EVENT <span className="text-gray-400">TIMELINE</span>
          </h2>
          <div className="w-16 h-[2px] bg-white/30 mx-auto mb-6"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-white/50 via-white/20 to-transparent transform md:-translate-x-1/2" />

          {timeline.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative flex items-center mb-12 last:mb-0 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
            >
              <div className={`hidden md:flex w-1/2 ${idx % 2 === 0 ? 'pr-12 justify-end' : 'pl-12 justify-start'}`}>
                <div className={`text-right ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <h3 className="font-orbitron text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 font-light text-lg">{item.date}</p>
                </div>
              </div>

              {/* Mobile View Copy */}
              <div className="md:hidden flex-1 pl-12 pr-4">
                <h3 className="font-orbitron text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-gray-400 font-light text-base">{item.date}</p>
              </div>

              {/* Center Dot */}
              <div className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-dark border-[3px] border-white/30 shadow-xl flex items-center justify-center z-10">
                 <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              </div>
              
              {/* Step indicator */}
              <div className={`absolute top-1/2 transform -translate-y-1/2 ${idx % 2 === 0 ? 'md:left-[calc(50%+40px)]' : 'md:right-[calc(50%+40px)]'} hidden md:block opacity-10 font-orbitron font-black text-6xl`}>
                {item.step}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
