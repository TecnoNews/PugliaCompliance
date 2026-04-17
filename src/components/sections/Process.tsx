'use client';

import { motion } from 'motion/react';
import { MessageSquare, ClipboardList, Coffee } from 'lucide-react';

export function Process({ dict }: { dict: any }) {
  const steps = [
    {
      id: 1,
      icon: MessageSquare,
      title: dict.process.step1.title,
      description: dict.process.step1.description,
    },
    {
      id: 2,
      icon: ClipboardList,
      title: dict.process.step2.title,
      description: dict.process.step2.description,
    },
    {
      id: 3,
      icon: Coffee,
      title: dict.process.step3.title,
      description: dict.process.step3.description,
    },
  ];

  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight mb-6">
              {dict.process.title}
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-stone-100 -translate-y-1/2 -z-10" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="relative inline-flex items-center justify-center w-24 h-24 mb-10">
                <div className="absolute inset-0 bg-brand-green/10 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500 ease-out" />
                <div className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl shadow-stone-200 border border-stone-100">
                  <step.icon className="w-10 h-10 text-brand-green" />
                </div>
                <div className="absolute -top-2 -right-1 w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center font-serif font-bold text-xl border-4 border-white z-10">
                  {step.id}
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">{step.title}</h3>
              <p className="text-stone-500 font-light leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
