"use client";

import React from "react";
import { motion } from "framer-motion";
import { getAssetPath } from "@/lib/assetPath";

const videos = [
  "vid_1.mp4",
  "vid_2.mp4",
  "vid_3.mp4"
];

export const PaintingVideos = () => {
  return (
    <section id="videos" className="py-24 bg-[var(--bg-primary)] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-syne mb-6 text-white">Painting Videos</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {videos.map((vid, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (idx % 3) * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-[var(--border-glass)] aspect-video bg-black"
            >
              <video 
                src={getAssetPath(`/videos/${vid}`)}
                controls
                className="w-full h-full object-cover"
                preload="metadata"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
