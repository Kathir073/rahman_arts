"use client";

import React from "react";
import { motion } from "framer-motion";
import { getAssetPath } from "@/lib/assetPath";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

const videos = [
  "vid_1.mp4",
  "vid_2.mp4",
  "vid_3.mp4"
];

// Helper to extract Cloudinary ID
const getCloudinaryId = (videoName: string) => {
  return videoName.split('.')[0];
};

export const PaintingVideos = () => {
  return (
    <section id="videos" className="py-24 bg-transparent px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-syne mb-6 text-slate-900">Painting Videos</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {videos.map((vid, idx) => {
            const cloudId = getCloudinaryId(vid);
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (idx % 3) * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden border border-[var(--border-glass)] aspect-video bg-slate-50"
              >
                <CldVideoPlayer
                  src={cloudId}
                  width="1920"
                  height="1080"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
