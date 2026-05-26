"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const teamData = [
  {
    category: "Leadership",
    members: [
      { name: "Dr. G. Parameshwara", role: "Chairman", image: "/team/Chairman.jpeg" },
      { name: "Dr. Mahantesh M Nadakatti", role: "Principal", image: "/team/Principal.jpeg" }
    ]
  },
  {
    category: "HOD",
    members: [
      { name: "Channakrishna Raju", role: "HOD of AIML", image: "/team/Channakrishna Raju.jpeg" }
    ]
  },
  {
    category: "Faculty Coordinator",
    members: [
      { name: "Haripriya R", role: "Faculty Coordinator", image: "/team/Haripriya R.jpeg" }
    ]
  },
  {
    category: "Core Team",
    members: [
      { name: "Giridhar", role: "President", image: "/team/Giridhar.jpeg" },
      { name: "Ambar S", role: "Vice President", image: "/team/Ambar S.jpeg" },
      { name: "Inchara NU", role: "Marketing Head", image: "/team/Inchara NU.jpeg" },
      { name: "Prem H", role: "Treasurer", image: "/team/Prem H.jpeg" },
      { name: "Usha C S", role: "Secretary", image: "/team/Usha C S.jpeg" }
    ]
  },
  {
    category: "Coordinators",
    members: [
      { name: "Komal Kumar", role: "Coordinator", image: "/team/Komal Kumar.jpeg" },
      { name: "Vaishnavi", role: "Coordinator", image: "/team/Vidyashree Jinning.jpeg" },
      { name: "Mohith Kumar S", role: "Coordinator", image: "/team/Mohith Kumar S.jpeg" },
      { name: "Disha M", role: "Coordinator", image: "/team/Disha M.jpeg" }
    ]
  }
];

export default function Team() {
  return (
    <section id="team" className="py-32 relative bg-dark">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            LEADERSHIP & <span className="text-gray-400">ORGANIZING TEAM</span>
          </h2>
          <div className="w-16 h-[2px] bg-white/30 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Guided by visionaries, supported by mentors, and powered by a passionate student team.
          </p>
        </div>

        <div className="space-y-24">
          {teamData.map((group, groupIdx) => (
            <div key={groupIdx} className="flex flex-col items-center">
              <h3 className="font-orbitron text-2xl font-bold text-white mb-10 tracking-widest uppercase opacity-80 border-b border-white/10 pb-2 text-center inline-block min-w-[200px]">
                {group.category}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-6xl w-full">
                {group.members.map((member, memberIdx) => (
                  <motion.div
                    key={memberIdx}
                    animate={{ y: [-6, 6] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 6 + (memberIdx % 3), // deterministic pseudo-random 6-8s
                      repeatType: "mirror", 
                      ease: "easeInOut" 
                    }}
                    whileHover={{ y: -10, scale: 1.03 }}
                    className="glass w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-22px)] lg:w-[calc(25%-24px)] p-6 rounded-3xl border border-white/10 shadow-xl hover:shadow-[0_10px_30px_rgba(255,255,255,0.05)] hover:border-white/30 transition-all duration-300 flex flex-col items-center min-w-[240px] max-w-[320px] overflow-hidden group"
                  >
                    <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden mb-5 border-4 border-white/5 relative shadow-inner">
                      <Image 
                        src={member.image} 
                        alt={member.name}
                        fill
                        className="object-cover transition-all duration-500 ease-in-out"
                      />
                    </div>
                    <h4 className="font-orbitron text-lg font-bold text-white text-center mb-1 drop-shadow-md">
                      {member.name}
                    </h4>
                    <p className="text-sm text-gray-400 tracking-wider uppercase text-center font-light leading-snug">
                      {member.role}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
