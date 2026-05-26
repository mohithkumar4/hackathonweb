"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Who can participate?",
    answer: "The hackathon is open to all college students currently enrolled in any recognized institution. Bring your valid college ID!"
  },
  {
    question: "Is there any registration fee?",
    answer: "Yes, the entry fee is ₹449 per team. This covers your meals, snacks, and access to all hackathon resources."
  },
  {
    question: "How much is the total prize pool?",
    answer: "The total prize pool is ₹20,000!"
  },
  {
    question: "How many members can be in a team?",
    answer: "You can participate in teams of 2 to 4 members. Solo participations are heavily discouraged as this is a collaborative event."
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, chargers, college ID, and a relentless drive to innovate! Bring your passion to build the future. ALL THE BEST!"
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-32 relative bg-dark">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            FREQUENTLY ASKED <span className="text-gray-400">QUESTIONS</span>
          </h2>
          <div className="w-16 h-[2px] bg-white/30 mx-auto mb-6"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -6 }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
              className={`glass rounded-2xl overflow-hidden transition-colors duration-300 border ${openIndex === idx ? 'border-white/30 shadow-lg' : 'border-white/5'}`}
            >
              <button 
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-6 font-orbitron text-lg md:text-xl font-bold flex justify-between items-center text-white focus:outline-none"
              >
                {faq.question}
                <span className={`text-white transform transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : 'rotate-0'}`}>
                  ▼
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 font-light border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
