"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { getAssetPath } from '@/lib/assetPath';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Videos', href: '#videos' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#09090b]/80 backdrop-blur-md py-4 shadow-lg shadow-purple-500/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img src={getAssetPath('/logo2.png')} alt="Rahman Arts Logo" className="h-24 w-auto object-contain drop-shadow-md" />
          <span className="font-syne font-bold text-2xl tracking-wide text-slate-900 hidden sm:block">Rahman Arts</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-inter text-slate-700 hover:text-slate-900 transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black text-sm font-bold rounded-full transition-all shadow-md shadow-amber-500/20">
            Get a Quote
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-900 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200 md:hidden flex flex-col py-6 px-6 gap-6 shadow-2xl"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-inter text-slate-700 hover:text-slate-900"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center px-5 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-black text-base font-bold rounded-xl"
          >
            Get a Quote
          </a>
        </motion.div>
      )}
    </header>
  );
};
