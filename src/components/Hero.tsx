"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PaintRoller, Sparkles } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[var(--bg-primary)] text-white flex items-center overflow-hidden px-6 lg:px-12 py-20">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#06B6D4]/10 blur-[150px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FF5722]/10 blur-[120px] pointer-events-none rounded-full -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left: Content */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs sm:text-sm text-[#06B6D4]"
          >
            <Sparkles className="w-4 h-4" />
            <span className="tracking-wide uppercase font-semibold">RAHMAN ARTS | Professional Painting Services</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter leading-[1.05] font-syne"
          >
            Transforming <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-slate-500">
              Spaces
            </span> <br />
            with Color.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-slate-400 text-lg sm:text-xl font-light leading-relaxed font-inter max-w-lg"
          >
            Elevate your environment with expert painting services for buildings, pillars, roofs, elevations, interiors, exteriors, furniture, and automobiles.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4"
          >
            <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-slate-200 font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 font-inter">
              View Services
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 font-inter">
              <PaintRoller className="w-5 h-5" />
              Book a Consultation
            </a>
          </motion.div>

          {/* Minimalist Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex items-center gap-8 pt-10 border-t border-white/10"
          >
            <div>
              <p className="text-3xl font-bold font-syne text-white">500+</p>
              <p className="text-sm text-slate-500 font-inter mt-1 uppercase tracking-wider">Projects Completed</p>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div>
              <p className="text-3xl font-bold font-syne text-white">12+</p>
              <p className="text-sm text-slate-500 font-inter mt-1 uppercase tracking-wider">Years Active</p>
            </div>
          </motion.div>
        </div>

        {/* Right: Floating 3D Image Canvas */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            transitionSpeed={1500}
            gyroscope={true}
            glareEnable={true}
            glareMaxOpacity={0.45}
            glareColor="#ffffff"
            glarePosition="all"
            className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/50 group"
          >
            <div className="absolute inset-0 bg-[url('/images/home.jpg')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" />
            
            {/* Elegant overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
            
            <div className="absolute bottom-10 left-10 right-10">
              <p className="text-white font-syne text-2xl font-bold mb-2">Flawless Finish</p>
              <p className="text-slate-300 font-inter text-sm">Premium Painting Execution</p>
            </div>
          </Tilt>

          {/* Decorative accents */}
          <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-[#06B6D4] opacity-50" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-[#FF5722] opacity-50" />
        </motion.div>

      </div>
    </section>
  );
};
