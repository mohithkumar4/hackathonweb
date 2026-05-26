import Link from 'next/link';
import { event } from '@/data/event';

export default function Footer() {
  return (
    <footer className="bg-darker py-12 border-t border-white/10 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <Link href="/" className="font-orbitron text-3xl font-bold tracking-wider mb-2 block">
              INNO<span className="text-gray-400">HACK</span>
            </Link>
            <p className="text-gray-500 font-light text-sm max-w-xs">
              {event.tagline}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3 font-orbitron font-bold text-xl md:text-2xl text-white">
            <a href="https://www.linkedin.com/in/mohith-kumar-s-a18b6230b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BjhC0q%2FzKR0uniBsONh%2BpOg%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
              Made by Mohith - LinkedIn
            </a>
            <a href="https://www.instagram.com/ai_.nexus?igsh=MTZreXQ5Ynk0emNxMw==" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
              AI Nexus - Instagram
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} {event.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
