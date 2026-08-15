"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { X } from 'lucide-react';

const categories = [
  "All Works", 
  "3D Optical Illusions", 
  "Outdoor Murals", 
  "Interior Wall Decor", 
  "Realistic Portraits", 
  "Commercial Branding"
];

const portfolioItems = [
  {
    "id": 1,
    "title": "Artwork 1",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/good1.jpg"
  },
  {
    "id": 2,
    "title": "Artwork 2",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/good2.jpg"
  },
  {
    "id": 3,
    "title": "Artwork 3",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/good3.jpg"
  },
  {
    "id": 4,
    "title": "Artwork 4",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/good4.jpg"
  },
  {
    "id": 5,
    "title": "Artwork 5",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/good5.jpg"
  },
  {
    "id": 6,
    "title": "Artwork 6",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/good6.jpg"
  },
  {
    "id": 7,
    "title": "Artwork 7",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/good7.jpg"
  },
  {
    "id": 8,
    "title": "Artwork 8",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/good8.jpg"
  },
  {
    "id": 9,
    "title": "Artwork 9",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/good9.jpg"
  },
  {
    "id": 10,
    "title": "Artwork 10",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/good10.jpg"
  },
  {
    "id": 11,
    "title": "Artwork 11",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/heart.jpg"
  },
  {
    "id": 12,
    "title": "Artwork 12",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/home.jpg"
  },
  {
    "id": 13,
    "title": "Artwork 13",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (10).jpg"
  },
  {
    "id": 14,
    "title": "Artwork 14",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (11).jpg"
  },
  {
    "id": 15,
    "title": "Artwork 15",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (12).jpg"
  },
  {
    "id": 16,
    "title": "Artwork 16",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (13).jpg"
  },
  {
    "id": 17,
    "title": "Artwork 17",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (14).jpg"
  },
  {
    "id": 18,
    "title": "Artwork 18",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (15).jpg"
  },
  {
    "id": 19,
    "title": "Artwork 19",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (16).jpg"
  },
  {
    "id": 20,
    "title": "Artwork 20",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (18).jpg"
  },
  {
    "id": 21,
    "title": "Artwork 21",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (19).jpg"
  },
  {
    "id": 22,
    "title": "Artwork 22",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (2).jpg"
  },
  {
    "id": 23,
    "title": "Artwork 23",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (20).jpg"
  },
  {
    "id": 24,
    "title": "Artwork 24",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (21).jpg"
  },
  {
    "id": 25,
    "title": "Artwork 25",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (22).jpg"
  },
  {
    "id": 26,
    "title": "Artwork 26",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (23).jpg"
  },
  {
    "id": 27,
    "title": "Artwork 27",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (24).jpg"
  },
  {
    "id": 28,
    "title": "Artwork 28",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (25).jpg"
  },
  {
    "id": 29,
    "title": "Artwork 29",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (26).jpg"
  },
  {
    "id": 30,
    "title": "Artwork 30",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (27).jpg"
  },
  {
    "id": 31,
    "title": "Artwork 31",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (28).jpg"
  },
  {
    "id": 32,
    "title": "Artwork 32",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (29).jpg"
  },
  {
    "id": 33,
    "title": "Artwork 33",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (3).jpg"
  },
  {
    "id": 34,
    "title": "Artwork 34",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (30).jpg"
  },
  {
    "id": 35,
    "title": "Artwork 35",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (31).jpg"
  },
  {
    "id": 36,
    "title": "Artwork 36",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (32).jpg"
  },
  {
    "id": 37,
    "title": "Artwork 37",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (33).jpg"
  },
  {
    "id": 38,
    "title": "Artwork 38",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (35).jpg"
  },
  {
    "id": 39,
    "title": "Artwork 39",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (36).jpg"
  },
  {
    "id": 40,
    "title": "Artwork 40",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (37).jpg"
  },
  {
    "id": 41,
    "title": "Artwork 41",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (38).jpg"
  },
  {
    "id": 42,
    "title": "Artwork 42",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (39).jpg"
  },
  {
    "id": 43,
    "title": "Artwork 43",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (4).jpg"
  },
  {
    "id": 44,
    "title": "Artwork 44",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (40).jpg"
  },
  {
    "id": 45,
    "title": "Artwork 45",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (41).jpg"
  },
  {
    "id": 46,
    "title": "Artwork 46",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (42).jpg"
  },
  {
    "id": 47,
    "title": "Artwork 47",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (43).jpg"
  },
  {
    "id": 48,
    "title": "Artwork 48",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (44).jpg"
  },
  {
    "id": 49,
    "title": "Artwork 49",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (45).jpg"
  },
  {
    "id": 50,
    "title": "Artwork 50",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (46).jpg"
  },
  {
    "id": 51,
    "title": "Artwork 51",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (47).jpg"
  },
  {
    "id": 52,
    "title": "Artwork 52",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (48).jpg"
  },
  {
    "id": 53,
    "title": "Artwork 53",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (49).jpg"
  },
  {
    "id": 54,
    "title": "Artwork 54",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (5).jpg"
  },
  {
    "id": 55,
    "title": "Artwork 55",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (50).jpg"
  },
  {
    "id": 56,
    "title": "Artwork 56",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (6).jpg"
  },
  {
    "id": 57,
    "title": "Artwork 57",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (7).jpg"
  },
  {
    "id": 58,
    "title": "Artwork 58",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (8).jpg"
  },
  {
    "id": 59,
    "title": "Artwork 59",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed (9).jpg"
  },
  {
    "id": 60,
    "title": "Artwork 60",
    "category": "All Works",
    "type": "Custom Mural",
    "feature": "Hand-painted artwork",
    "image": "/images/unnamed.jpg"
  }
];

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All Works");
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = portfolioItems.filter(item => 
    activeCategory === "All Works" || item.category === activeCategory
  );

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(12);
  };

  const displayedItems = filteredItems.slice(0, visibleCount);

  return (
    <section id="gallery" className="py-24 bg-[var(--bg-secondary)] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-syne mb-6 text-white">Gallery</h2>
          
          {/* Categories removed */}
        </div>

        {/* Masonry / Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {displayedItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0.3}
                  glareColor="#ffffff"
                  glarePosition="all"
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  className="h-full group cursor-pointer"
                >
                  <div 
                    className="bg-[var(--bg-primary)] rounded-2xl overflow-hidden border border-[var(--border-glass)] h-full flex flex-col relative"
                    onClick={() => setSelectedImage(item.image)}
                  >
                    {/* Image Container */}
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={`Gallery artwork`} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Hover text for full view */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                        <span className="text-white font-inter font-medium px-4 py-2 bg-white/20 rounded-full border border-white/30 backdrop-blur-md">
                          Click to full view
                        </span>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {visibleCount < filteredItems.length && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 12)}
              className="px-8 py-3 bg-transparent border border-white/20 hover:bg-white/10 text-white font-medium rounded-xl transition-all duration-300 font-inter"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-sm cursor-zoom-out"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-slate-300 transition-colors bg-white/10 p-2 rounded-full z-50"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              src={selectedImage}
              alt="Full view"
              className="w-auto h-auto max-w-full max-h-full rounded-lg shadow-2xl object-contain cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
