"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link href="/" className="font-orbitron text-2xl font-bold tracking-wider">
          AI <span className="opacity-70">NEXUS</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-wide">
          <Link href="#about" className="hover:text-white/70 transition-colors">About</Link>
          <Link href="#tracks" className="hover:text-white/70 transition-colors">Tracks</Link>
          <Link href="#timeline" className="hover:text-white/70 transition-colors">Timeline</Link>
          <Link href="#prizes" className="hover:text-white/70 transition-colors">Prizes</Link>
          <Link href="#faqs" className="hover:text-white/70 transition-colors">FAQs</Link>
        </div>

        <a 
          href="https://forms.gle/qMn9jiUL3578XmC78" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:inline-flex px-6 py-2 rounded-full bg-white/10 border border-white/20 text-white uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-black transition-all duration-300 shadow-xl backdrop-blur-md"
        >
          Register Now
        </a>
      </div>
    </nav>
  );
}
