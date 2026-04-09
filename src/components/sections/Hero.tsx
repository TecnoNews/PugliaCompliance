'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export function Hero({ dict }: { dict: any }) {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=100&w=2800"
          alt="Puglia Landscape - Polignano a Mare"
          fill
          className="object-cover brightness-[0.8]"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-stone-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-16 h-16 overflow-hidden">
                <Image 
                  src="/Logo_pcompliance.png" 
                  alt="Puglia Compliance Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-white bg-brand-blue/90 backdrop-blur-sm rounded-full shadow-lg">
                {dict.common.basedInPuglia}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1] mb-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
              {dict.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-stone-100 font-light leading-relaxed mb-10 max-w-2xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
              {dict.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white rounded-full px-8 py-7 text-lg shadow-xl shadow-brand-green/20">
                <Link href="#contact">{dict.hero.cta}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-md rounded-full px-8 py-7 text-lg">
                <Link href="#services">{dict.nav.services}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-stone-600 text-xs font-semibold uppercase tracking-[0.2em] animate-pulse">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-stone-400 to-transparent" />
      </div>
    </section>
  );
}
