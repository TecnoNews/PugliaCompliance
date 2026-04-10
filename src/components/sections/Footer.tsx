'use client';

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export function Footer({ dict }: { dict: any }) {
  return (
    <footer id="contact" className="bg-stone-900 text-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-8">
              {dict.footer.partnership}
            </h2>
            <p className="text-xl text-stone-400 font-light leading-relaxed mb-12 max-w-lg">
              {dict.footer.description}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-brand-green transition-colors">
                  <Mail className="w-6 h-6 text-brand-green group-hover:text-white" />
                </div>
                <span className="text-lg text-stone-300 group-hover:text-white transition-colors">info@pugliacompliance.com</span>
              </div>
              {/*<div className="flex items-center gap-4 group cursor-pointer">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-brand-green transition-colors">
                  <Phone className="w-6 h-6 text-brand-green group-hover:text-white" />
                </div>
                <span className="text-lg text-stone-300 group-hover:text-white transition-colors">+39 080 123 4567</span>
              </div>*/}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-brand-green transition-colors">
                  <MapPin className="w-6 h-6 text-brand-green group-hover:text-white" />
                </div>
                <span className="text-lg text-stone-300 group-hover:text-white transition-colors">Puglia, Italy</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-md p-10 md:p-12 rounded-[3rem] border border-white/10"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase tracking-widest text-stone-400">{dict.footer.nameLabel}</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-green transition-colors" placeholder={dict.footer.nameLabel} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase tracking-widest text-stone-400">{dict.footer.emailLabel}</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-green transition-colors" placeholder={dict.footer.emailLabel} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-widest text-stone-400">{dict.footer.messageLabel}</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 h-32 focus:outline-none focus:border-brand-green transition-colors" placeholder={dict.footer.messagePlaceholder} />
              </div>
              <Button className="w-full bg-brand-green hover:bg-brand-green/90 text-white rounded-full py-7 text-lg font-semibold shadow-xl shadow-brand-green/40">
                {dict.footer.sendButton}
              </Button>
            </form>
          </motion.div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 overflow-hidden">
              <Image
                src="/Logo_pcompliance_2.png"
                alt="Puglia Compliance Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-2xl font-serif font-bold tracking-tight">
              <span className="text-brand-blue">Puglia</span>
              <span className="text-brand-green">Compliance</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link href="#" className="text-stone-400 hover:text-white transition-colors"><Instagram className="w-6 h-6" /></Link>
            <Link href="#" className="text-stone-400 hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></Link>
            <Link href="#" className="text-stone-400 hover:text-white transition-colors"><Facebook className="w-6 h-6" /></Link>
          </div>

          <p className="text-stone-500 text-sm font-medium">
            © 2026 Puglia Compliance. {dict.footer.rights || "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}
