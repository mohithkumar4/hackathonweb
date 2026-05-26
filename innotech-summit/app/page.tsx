import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';
import About from '@/components/About';
import Tracks from '@/components/Tracks';
import Timeline from '@/components/Timeline';
import Prizes from '@/components/Prizes';
import FAQs from '@/components/FAQs';
import Team from '@/components/Team';
import Register from '@/components/Register';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Countdown />
      <About />
      <Team />
      <Tracks />
      <Timeline />
      <Prizes />
      <FAQs />
      <Register />
      <Footer />
    </main>
  );
}
