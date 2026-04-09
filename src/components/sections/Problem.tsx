'use client';

import { motion } from 'motion/react';
import { AlertCircle, Calendar, CheckCircle2, ShieldAlert } from 'lucide-react';

export function Problem({ dict }: { dict: any }) {
  return (
    <section id="services" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase text-brand-blue bg-brand-blue/5 border border-brand-blue/10 rounded-full">
              <AlertCircle className="w-4 h-4" />
              Mandatory Requirement
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight mb-8">
              {dict.problem.title}
            </h2>
            <p className="text-xl text-stone-600 font-light leading-relaxed mb-10">
              {dict.problem.description}
            </p>
            
            <ul className="space-y-6">
              {dict.problem.bullets.map((bullet: string, index: number) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 p-1 bg-brand-green/10 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-brand-green" />
                  </div>
                  <span className="text-lg text-stone-700 font-medium">{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-brand-green/5 rounded-3xl blur-2xl -z-10" />
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-stone-200 border border-stone-100">
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-stone-100">
                <div className="p-4 bg-red-50 rounded-2xl">
                  <Calendar className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-1">
                    {dict.problem.deadline.title}
                  </h3>
                  <p className="text-3xl font-serif font-bold text-stone-900">
                    {dict.problem.deadline.date}
                  </p>
                  <p className="text-xs text-stone-400 mt-1">
                    {dict.problem.deadline.note}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3 text-red-600 mb-4">
                  <ShieldAlert className="w-6 h-6" />
                  <h4 className="text-xl font-serif font-bold">{dict.problem.risks.title}</h4>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  {dict.problem.risks.description}
                </p>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-olive-200/30 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
