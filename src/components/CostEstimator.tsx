"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Calculator } from 'lucide-react';

const formSchema = z.object({
  artStyle: z.string().min(1, "Select an art style"),
  width: z.number().min(1, "Enter a valid width"),
  height: z.number().min(1, "Enter a valid height"),
  surface: z.string().min(1, "Select a surface type"),
  location: z.string().min(1, "Select a location"),
});

export const CostEstimator = () => {
  const [estimate, setEstimate] = useState<string | null>(null);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      artStyle: "3D Optical Illusion",
      surface: "Smooth Plaster",
      location: "Indoor",
    }
  });

  const width = watch("width");
  const height = watch("height");
  const sqft = (width || 0) * (height || 0);

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    // Simple logic for estimation
    let days = 3;
    if (sqft > 100) days += 2;
    if (sqft > 300) days += 5;
    if (data.location.includes("Outdoor")) days += 2;
    if (data.artStyle === "Hyper-Realistic Portrait") days += 2;

    setEstimate(`${days}–${days + 2} Days`);
  };

  return (
    <section className="py-24 bg-[var(--bg-secondary)] px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-transparent p-8 md:p-12 rounded-3xl border border-[var(--border-glass)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F59E0B]/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="text-center mb-10 relative z-10">
            <h2 className="text-3xl font-bold font-syne text-slate-900 mb-4">Project Cost & Timeline Estimator</h2>
            <p className="text-slate-600 font-inter">Get a real-time estimate for your custom wall mural.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 font-inter">Art Style</label>
                <select {...register("artStyle")} className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-[#F59E0B] focus:outline-none transition-colors appearance-none font-inter">
                  <option value="3D Optical Illusion">3D Optical Illusion</option>
                  <option value="Hyper-Realistic Portrait">Hyper-Realistic Portrait</option>
                  <option value="Outdoor Mural">Outdoor Mural</option>
                  <option value="Interior Decor">Interior Decor</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 font-inter">Width (ft)</label>
                  <input type="number" {...register("width", { valueAsNumber: true })} className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-[#F59E0B] focus:outline-none font-inter" />
                  {errors.width && <p className="text-red-400 text-xs mt-1">{errors.width.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 font-inter">Height (ft)</label>
                  <input type="number" {...register("height", { valueAsNumber: true })} className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-[#F59E0B] focus:outline-none font-inter" />
                  {errors.height && <p className="text-red-400 text-xs mt-1">{errors.height.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 font-inter">Surface Texture</label>
                <select {...register("surface")} className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-[#F59E0B] focus:outline-none transition-colors appearance-none font-inter">
                  <option value="Smooth Plaster">Smooth Plaster</option>
                  <option value="Textured Brick">Textured Brick</option>
                  <option value="Rough Concrete">Rough Concrete</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 font-inter">Location Type</label>
                <select {...register("location")} className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-[#F59E0B] focus:outline-none transition-colors appearance-none font-inter">
                  <option value="Indoor">Indoor</option>
                  <option value="Outdoor (Scaffolding Required)">Outdoor (Scaffolding Required)</option>
                </select>
              </div>
            </div>

            <div className="bg-slate-100 border border-slate-200 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
              <div>
                <p className="text-slate-600 text-sm font-inter">Total Area: <span className="text-slate-900 font-bold">{sqft} sq ft</span></p>
                {estimate && (
                  <motion.p 
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    className="text-[#F59E0B] font-bold text-lg font-syne mt-1"
                  >
                    Est. Completion: {estimate}
                  </motion.p>
                )}
              </div>
              <button type="submit" className="px-6 py-3 bg-[#F59E0B] hover:bg-[#d98b09] text-slate-900 font-medium rounded-xl transition-colors flex items-center gap-2 font-inter">
                <Calculator className="w-4 h-4" />
                Calculate Estimate
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
