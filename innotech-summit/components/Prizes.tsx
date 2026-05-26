"use client";

import { motion } from 'framer-motion';
import { prizes } from '@/data/event';

export default function Prizes() {
  return (
    <section id="prizes" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            PRIZE <span className="text-white">POOL</span>
          </h2>
          <div className="w-16 h-[2px] bg-white/30 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl">
            Win big with our massive prize pool and exclusive startup credits.
          </p>
        </div>

        <div className="flex justify-center items-center max-w-3xl mx-auto pt-10">
          <motion.div
            animate={{ y: [-8, 8], rotate: [-1, 1] }}
            transition={{ repeat: Infinity, duration: 7, repeatType: "mirror", ease: [0.22, 1, 0.36, 1] }}
            className="w-full relative z-20"
          >
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass p-10 md:p-14 rounded-3xl flex flex-col items-center border border-white/20 shadow-2xl relative overflow-hidden bg-white/5 backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
              <div className="text-7xl mb-6 drop-shadow-lg">🏆</div>
              <h3 className="font-orbitron text-3xl md:text-5xl font-black text-white text-center leading-relaxed drop-shadow-md">
                ₹20K Prize Pool<br />— Join Fast
              </h3>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
