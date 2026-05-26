"use client";

import { motion } from 'framer-motion';

export default function Register() {
  return (
    <section id="register" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-12 md:p-20 rounded-[2rem] border border-white/10 shadow-2xl bg-black/40"
        >
          <h2 className="font-orbitron font-black text-4xl md:text-6xl text-white mb-6 drop-shadow-xl">
            READY TO <span className="text-white">BUILD?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto font-light">
            Spots are limited. Secure your place at the most electrifying hackathon of the year.
          </p>

          <motion.div
            animate={{ y: [-4, 4], scale: [1, 1.03, 1] }}
            transition={{ repeat: Infinity, duration: 2.5, repeatType: "mirror", ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl font-orbitron text-white font-bold mb-10 tracking-widest drop-shadow-lg"
          >
            Entry Fee: ₹449 per team
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://forms.gle/qMn9jiUL3578XmC78" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 bg-white text-black font-orbitron font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300 shadow-xl rounded-full text-lg text-center"
            >
              Register Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
