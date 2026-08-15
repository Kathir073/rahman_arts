"use client";

import React from "react";
import { motion } from "framer-motion";

const videos = [
  "#37 Missing Filename File.mp4",
  "Facebook 2742889265991162(MP4).mp4",
  "VID-20221212-WA0009.mp4",
  "VID-20221212-WA0012.mp4",
  "VID-20230209-WA0023(1).mp4",
  "VID-20230209-WA0062.mp4",
  "VID-20230209-WA0140.mp4",
  "VID-20230209-WA0144.mp4",
  "VID-20230209-WA0163.mp4",
  "VID-20230615-WA0012.mp4",
  "VID-20230712-WA0005.mp4",
  "VID-20230712-WA0007.mp4",
  "VID-20230914-WA0004.mp4",
  "VID-20240110-WA0085.mp4",
  "VID-20240110-WA0088.mp4",
  "VID-20240510-WA0012.mp4",
  "VID-20240510-WA0013.mp4",
  "VID-20241107-WA0037.mp4",
  "video_20180127_141735.mp4",
  "video_20180226_125852.mp4",
  "video_20190106_182127.mp4"
];

export const PaintingVideos = () => {
  return (
    <section id="videos" className="py-24 bg-[var(--bg-primary)] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-syne mb-6 text-white">Painting Videos</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                src={`/rahman_arts/videos/${vid}`}
                controls
                className="w-full h-full object-contain"
                preload="metadata"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
