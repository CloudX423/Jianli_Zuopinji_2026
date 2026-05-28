import { motion } from 'framer-motion';
import { hero } from '../data/content';

export default function Hero() {
  return (
    <section className="min-h-[40vh] flex items-center justify-center px-6 py-11 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-slate-50" />
      
      {/* Cloud patterns */}
      <div className="absolute top-10 left-10 opacity-[0.08]">
        <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 50 C10 50 5 40 15 35 C10 25 20 15 35 20 C40 10 55 5 70 15 C85 10 100 20 95 35 C110 40 105 50 90 50 H20Z" fill="#0D9488" />
        </svg>
      </div>
      
      <div className="absolute top-20 right-16 opacity-[0.06]">
        <svg width="160" height="100" viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 60 C15 60 10 45 25 38 C20 25 35 15 55 22 C60 10 80 5 100 18 C120 10 140 25 130 45 C145 50 140 60 120 60 H30Z" fill="#0D9488" />
        </svg>
      </div>
      
      <div className="absolute bottom-8 right-1/3 opacity-[0.07]">
        <svg width="100" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 40 C8 40 5 32 12 28 C10 20 18 12 30 16 C33 8 45 4 58 12 C70 6 83 16 78 30 C88 33 85 40 72 40 H15Z" fill="#0891B2" />
        </svg>
      </div>
      
      <div className="absolute bottom-16 left-1/4 opacity-[0.05]">
        <svg width="140" height="90" viewBox="0 0 140 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 55 C15 55 8 42 20 37 C18 25 30 15 48 20 C52 10 68 5 85 16 C105 8 120 22 112 42 C128 47 122 55 105 55 H25Z" fill="#0D9488" />
        </svg>
      </div>
      
      <div className="absolute top-20 right-20 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-30" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-primary mb-4 tracking-tight"
        >
          {hero.name}
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-accent font-medium mb-8"
        >
          {hero.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base md:text-lg text-secondary mb-4"
        >
          {hero.tagline}
        </motion.p>
      </div>
    </section>
  );
}
