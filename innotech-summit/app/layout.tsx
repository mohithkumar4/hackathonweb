import type { Metadata } from "next";
import { Orbitron, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Loader from "@/components/Loader";

const orbitron = Orbitron({ 
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-grotesk",
});

export const metadata: Metadata = {
  title: "InnoTech Summit 2025 – Hackathon",
  description: "Where the brightest minds collide, ideas ignite, and the future is built in 24 hours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth no-scrollbar">
      <body className={`${orbitron.variable} ${spaceGrotesk.variable} font-grotesk antialiased bg-dark text-white relative min-h-screen`}>
        {/* Cinematic Vignette & Content */}
        <div className="relative min-h-screen bg-dark">
          {/* Subtle vignette overlay */}
          <div className="pointer-events-none fixed inset-0 z-50 mix-blend-multiply bg-[radial-gradient(circle_at_center,transparent_40%,#000_120%)]" />
          <Loader />
          {children}
        </div>
      </body>
    </html>
  );
}
