"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { 
  Paintbrush, 
  Home, 
  Building, 
  ArrowUpToLine, 
  Columns, 
  Image as ImageIcon, 
  Mountain, 
  Bike, 
  BoxSelect, 
  Box 
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Interior Painting",
    description: "Transform your indoor spaces with premium finishes and vibrant colors.",
    icon: <Home className="w-8 h-8 text-[#06B6D4]" />,
  },
  {
    id: 2,
    title: "Exterior Painting",
    description: "Protect and beautify the outside of your building with weather-resistant paints.",
    icon: <Building className="w-8 h-8 text-[#FF5722]" />,
  },
  {
    id: 3,
    title: "Roof Painting",
    description: "Specialized heat-reflective and protective coatings for all types of roofs.",
    icon: <ArrowUpToLine className="w-8 h-8 text-[#06B6D4]" />,
  },
  {
    id: 4,
    title: "Pillar & Column Art",
    description: "Detailed textures, marbling, and painting for architectural pillars.",
    icon: <Columns className="w-8 h-8 text-[#FF5722]" />,
  },
  {
    id: 5,
    title: "Wall Textures & Art",
    description: "Custom wall textures, stencils, and artistic finishes for a unique look.",
    icon: <ImageIcon className="w-8 h-8 text-[#06B6D4]" />,
  },
  {
    id: 6,
    title: "Furniture Painting",
    description: "Revitalize your old furniture with fresh coats, polishing, and detailing.",
    icon: <Paintbrush className="w-8 h-8 text-[#FF5722]" />,
  },
  {
    id: 7,
    title: "Natural Scenery",
    description: "Hand-painted natural landscapes and sceneries to bring nature indoors.",
    icon: <Mountain className="w-8 h-8 text-[#06B6D4]" />,
  },
  {
    id: 8,
    title: "Bike Customization",
    description: "Custom paint jobs, detailing, and touch-ups for automobiles and bikes.",
    icon: <Bike className="w-8 h-8 text-[#FF5722]" />,
  },
  {
    id: 9,
    title: "False Ceiling (Fall Ceiling)",
    description: "Elegant painting and finishing for false ceilings and hidden lighting areas.",
    icon: <BoxSelect className="w-8 h-8 text-[#06B6D4]" />,
  },
  {
    id: 10,
    title: "3D Arts & Illusions",
    description: "Eye-catching 3D murals and optical illusions tailored to your space.",
    icon: <Box className="w-8 h-8 text-[#FF5722]" />,
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-[var(--bg-secondary)] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-syne mb-6 text-white">Our Services</h2>
          <p className="text-slate-400 font-inter max-w-2xl mx-auto text-lg">
            From residential interiors to custom bike painting, we provide a comprehensive range of professional painting solutions tailored to your exact needs.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.1}
                glareColor="#ffffff"
                glarePosition="all"
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                className="h-full group cursor-pointer"
              >
                <div className="bg-[var(--bg-primary)] rounded-2xl p-8 border border-[var(--border-glass)] h-full flex flex-col relative overflow-hidden transition-colors hover:border-[#06B6D4]/50">
                  {/* Subtle Background Glow on Hover */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#06B6D4]/5 blur-[50px] rounded-full group-hover:bg-[#06B6D4]/20 transition-colors duration-500" />
                  
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold font-syne text-white mb-3 relative z-10">{service.title}</h3>
                  <p className="text-slate-400 text-sm font-inter leading-relaxed relative z-10">
                    {service.description}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
