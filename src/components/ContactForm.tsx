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
              Visit our office or reach out to us directly to discuss your upcoming project. We're ready to bring your vision to life.
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

        {/* Right: Map */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-slate-100 border border-slate-200 p-2 sm:p-4 rounded-3xl backdrop-blur-sm w-full h-full min-h-[400px]"
        >
          <iframe 
            src="https://www.google.com/maps?q=Door+No.+9,+Amarar+Park+Road,+Attanur,+V.+Marudur,+Villupuram+-+605103,+Tamil+Nadu&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0, borderRadius: '1rem' }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Rahman Arts Location"
            className="w-full h-full min-h-[400px]"
          />
        </motion.div>

      </div>
    </section>
  );
};
