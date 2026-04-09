'use client';

import { motion } from 'motion/react';
import { Globe, Languages, ShieldCheck, UserCheck } from 'lucide-react';

export function Solution({ dict }: { dict: any }) {
  return (
    <section id="about" className="py-24 bg-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight mb-6">
              {dict.solution.title}
            </h2>
            <p className="text-xl text-stone-600 font-light leading-relaxed">
              {dict.solution.subtitle}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 rounded-3xl shadow-xl shadow-stone-200 border border-stone-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-brand-green/10 rounded-2xl">
                <UserCheck className="w-8 h-8 text-brand-green" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-stone-900">{dict.solution.dario.name}</h3>
                <p className="text-sm font-semibold text-brand-green uppercase tracking-widest">{dict.solution.dario.role}</p>
              </div>
            </div>
            <p className="text-lg text-stone-600 font-light leading-relaxed">
              {dict.solution.dario.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 rounded-3xl shadow-xl shadow-stone-200 border border-stone-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-brand-green/10 rounded-2xl">
                <Globe className="w-8 h-8 text-brand-green" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-stone-900">{dict.solution.maria.name}</h3>
                <p className="text-sm font-semibold text-brand-green uppercase tracking-widest">{dict.solution.maria.role}</p>
              </div>
            </div>
            <p className="text-lg text-stone-600 font-light leading-relaxed">
              {dict.solution.maria.description}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-stone-900 text-white p-12 md:p-20 rounded-[3rem] overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-green via-transparent to-transparent" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-semibold tracking-widest uppercase text-brand-green bg-brand-green/10 border border-brand-green/20 rounded-full">
                <Languages className="w-4 h-4" />
                Language Barrier Solved
              </div>
              <h3 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-8">
                {dict.solution.fluent.title}
              </h3>
              <p className="text-xl text-stone-300 font-light leading-relaxed">
                {dict.solution.fluent.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 sm:p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl text-center">
                <ShieldCheck className="w-10 h-10 text-brand-green mx-auto mb-4" />
                <p className="text-sm font-semibold uppercase tracking-widest text-stone-400">100% Professional</p>
              </div>
              <div className="p-6 sm:p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl text-center">
                <Globe className="w-10 h-10 text-brand-green mx-auto mb-4" />
                <p className="text-sm font-semibold uppercase tracking-widest text-stone-400">100% Understandable</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
