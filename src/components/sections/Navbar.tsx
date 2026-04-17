'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

const locales = [
  { code: 'en', name: 'English' },
  { code: 'it', name: 'Italiano' },
  { code: 'fr', name: 'Français' },
  { code: 'nl', name: 'Nederlands' },
  { code: 'de', name: 'Deutsch' },
];

export function Navbar({ lang, dict }: { lang: string; dict: any }) {
  const pathname = usePathname();

  const redirectedPathname = (locale: string) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link href={`/${lang}`} className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 overflow-hidden">
                <Image 
                  src="/Logo_pcompliance_2.png" 
                  alt="Puglia Compliance Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight">
                <span className="text-brand-blue">Puglia</span>
                <span className="text-brand-green">Compliance</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-sm font-medium text-stone-600 hover:text-brand-green transition-colors">
              {dict.nav.services}
            </Link>
            <Link href="#about" className="text-sm font-medium text-stone-600 hover:text-brand-green transition-colors">
              {dict.nav.about}
            </Link>
            <Link href="#process" className="text-sm font-medium text-stone-600 hover:text-brand-green transition-colors">
              {dict.nav.process}
            </Link>
            <Link href="#contact" className="text-sm font-medium text-stone-600 hover:text-brand-green transition-colors">
              {dict.nav.contact}
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-stone-600 hover:text-brand-green transition-colors">
                <Globe className="w-4 h-4" />
                <span className="uppercase">{lang}</span>
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-white border border-stone-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {locales.map((locale) => (
                  <Link
                    key={locale.code}
                    href={redirectedPathname(locale.code)}
                    className={`block px-4 py-2 text-sm hover:bg-stone-50 transition-colors ${
                      lang === locale.code ? 'text-brand-green font-semibold' : 'text-stone-600'
                    }`}
                  >
                    {locale.name}
                  </Link>
                ))}
              </div>
            </div>
            <Button asChild className="hidden sm:inline-flex bg-brand-green hover:bg-brand-green/90 text-white rounded-full px-6">
              <Link href="#contact">{dict.common.getStarted}</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
