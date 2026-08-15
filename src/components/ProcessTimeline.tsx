"use client";

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Wall Survey & Digital Preview",
    desc: "Free site consultation & digital 3D concept mapping onto photos of the client's wall."
  },
  {
    number: "02",
    title: "Surface Prep & Priming",
    desc: "High-grade wall priming, weatherproofing, and grid scaling setup."
  },
  {
    number: "03",
    title: "Precision Painting & Airbrushing",
    desc: "Detailed hand painting, airbrush shading, and 3D depth geometry alignment."
  },
  {
    number: "04",
    title: "Weatherproof Sealing",
    desc: "Application of UV-resistant, washable protective clear seal for long-lasting vibrancy."
  }
];

export const ProcessTimeline = () => {
  return (
    <section className="py-24 bg-[var(--bg-primary)] px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#06B6D4]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-syne mb-4 text-white"
          >
            How The Magic Happens
          </motion.h2>
          <p className="text-slate-400 font-inter max-w-2xl mx-auto">
            A meticulous 4-step process to transform your space into a masterpiece.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative p-6 rounded-2xl bg-white/5 border border-[var(--border-glass)] backdrop-blur-sm group hover:border-[#FF5722]/50 transition-colors"
            >
              <div className="text-5xl font-extrabold font-syne text-white/10 mb-6 group-hover:text-[#FF5722]/20 transition-colors">
                {step.number}
              </div>
              <h3 className="text-xl font-bold font-syne text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm font-inter leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
