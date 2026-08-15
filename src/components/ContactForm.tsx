"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, MessageCircle, MapPin, Phone } from 'lucide-react';

export const ContactForm = () => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // In a real app, handle file processing here
  };

  return (
    <section id="contact" className="py-24 bg-transparent px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Info */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-syne text-slate-900 mb-6">Ready to Transform Your Space?</h2>
            <p className="text-slate-600 font-inter text-lg leading-relaxed">
              Upload a photo of your blank wall, and let's craft a digital 3D concept before a single drop of paint touches the surface.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4 text-slate-700">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 shrink-0">
                <MapPin className="w-5 h-5 text-[#06B6D4]" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 font-syne">Location</h4>
                <p className="text-sm font-inter">Door No. 9, Amarar Park Road, Attanur, <br />V. Marudur, Villupuram - 605103, Tamil Nadu</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch gap-4 mt-4 w-full">
              <a 
                href="https://wa.me/919994242646" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-slate-900 rounded-xl transition-colors font-inter flex-1"
              >
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
                <div>
                  <span className="block font-bold whitespace-nowrap">Chat on WhatsApp</span>
                  <span className="text-xs text-slate-600">+91 99942 42646</span>
                </div>
              </a>

              <a 
                href="tel:+919994242646" 
                className="inline-flex items-center gap-3 px-6 py-4 bg-[#06B6D4]/10 hover:bg-[#06B6D4]/20 border border-[#06B6D4]/30 text-slate-900 rounded-xl transition-colors font-inter flex-1"
              >
                <Phone className="w-6 h-6 text-[#06B6D4]" />
                <div>
                  <span className="block font-bold whitespace-nowrap">Call us directly</span>
                  <span className="text-xs text-slate-600">+91 99942 42646</span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-slate-100 border border-slate-200 p-8 rounded-3xl backdrop-blur-sm"
        >
          <form className="space-y-6" onSubmit={e => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 font-inter">Full Name</label>
                <input type="text" className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-[#06B6D4] focus:outline-none font-inter" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 font-inter">Email Address</label>
                <input type="email" className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-[#06B6D4] focus:outline-none font-inter" placeholder="john@example.com" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 font-inter">City / Address</label>
              <input type="text" className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-[#06B6D4] focus:outline-none font-inter" placeholder="New York, NY" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 font-inter">Upload Wall Photo</label>
              <div 
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${dragActive ? 'border-[#06B6D4] bg-[#06B6D4]/5' : 'border-slate-300 bg-slate-100 hover:border-white/40'}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <UploadCloud className="w-10 h-10 text-slate-600 mx-auto mb-4" />
                <p className="text-slate-700 font-inter mb-1">Drag & drop your wall photo here</p>
                <p className="text-slate-500 text-xs font-inter mb-4">PNG, JPG up to 10MB</p>
                <button type="button" className="px-4 py-2 bg-slate-200 hover:bg-white/20 text-slate-900 text-sm rounded-lg transition-colors font-inter">
                  Browse Files
                </button>
              </div>
            </div>

            <button type="submit" className="w-full py-4 bg-[#06B6D4] hover:bg-[#059eb8] text-slate-900 font-bold rounded-xl transition-colors font-syne text-lg">
              Request Free Mockup
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};
