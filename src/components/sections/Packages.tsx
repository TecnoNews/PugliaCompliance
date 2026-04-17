'use client';

import { motion } from 'motion/react';
import { Check, ShieldCheck, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Packages({ dict }: { dict: any }) {
  const packages = [
    {
      id: 'basic',
      icon: Zap,
      color: 'stone',
      data: dict.packages.basic,
    },
    {
      id: 'plus',
      icon: Star,
      color: 'brand-green',
      data: dict.packages.plus,
      featured: true,
    },
    {
      id: 'premium',
      icon: ShieldCheck,
      color: 'stone',
      data: dict.packages.premium,
    },
  ];

  return (
    <section id="packages" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight mb-6">
              {dict.packages.title}
            </h2>
            <p className="text-xl text-stone-600 font-light leading-relaxed">
              {dict.packages.subtitle}
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative flex flex-col p-10 rounded-[2.5rem] border transition-all duration-300 ${
                pkg.featured
                  ? 'bg-white border-brand-green/20 shadow-2xl shadow-brand-green/10 scale-105 z-10'
                  : 'bg-white/50 border-stone-200 hover:bg-white hover:border-stone-300 hover:shadow-xl'
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-green text-white text-xs font-bold uppercase tracking-widest rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${
                pkg.featured ? 'bg-brand-green/10 text-brand-green' : 'bg-stone-100 text-stone-600'
              }`}>
                <pkg.icon className="w-8 h-8" />
              </div>

              <h3 className="text-3xl font-serif font-bold text-stone-900 mb-4">{pkg.data.name}</h3>
              <p className="text-stone-500 font-light leading-relaxed mb-8">{pkg.data.description}</p>

              <div className="space-y-4 mb-10 flex-1">
                {pkg.data.features.map((feature: string, fIndex: number) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <div className={`mt-1 p-0.5 rounded-full ${
                      pkg.featured ? 'bg-brand-green/10 text-brand-green' : 'bg-stone-100 text-stone-600'
                    }`}>
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-sm text-stone-600 font-medium leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <Button asChild className={`w-full rounded-full py-6 text-lg font-semibold ${
                pkg.featured ? 'bg-brand-green hover:bg-brand-green/90 text-white' : 'bg-brand-blue hover:bg-brand-blue/90 text-white'
              }`}>
                <Link href="#contact">{dict.common.getStarted}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
