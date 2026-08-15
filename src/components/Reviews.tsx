"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, UserCircle2 } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}

const DUMMY_REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    rating: 5,
    text: 'Absolutely stunning work! The exterior painting transformed our entire building. The attention to detail is unmatched.',
    date: '2023-11-15',
  },
  {
    id: '2',
    name: 'Michael Chen',
    rating: 4,
    text: 'Great experience overall. The team was professional and the interior wall textures look amazing in our living room. Just took a day longer than expected.',
    date: '2023-12-02',
  },
  {
    id: '3',
    name: 'Priya Patel',
    rating: 5,
    text: 'They did an incredible custom paint job on my bike. It looks brand new and the finish is flawless!',
    date: '2024-01-20',
  },
  {
    id: '4',
    name: 'David Wilson',
    rating: 5,
    text: 'The 3D art illusion in our office lobby is a conversation starter for every client that walks in. Brilliant execution.',
    date: '2024-02-10',
  },
  {
    id: '5',
    name: 'Emma Thompson',
    rating: 4,
    text: 'Very satisfied with the furniture polishing. They restored my antique dining table beautifully.',
    date: '2024-03-05',
  },
];

export const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>(DUMMY_REVIEWS);
  const [filterRating, setFilterRating] = useState<number | null>(null);
  
  // Form State
  const [newName, setNewName] = useState('');
  const [newText, setNewText] = useState('');
  const [newRating, setNewRating] = useState(5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newText.trim()) return;

    const newReview: Review = {
      id: Date.now().toString(),
      name: newName,
      text: newText,
      rating: newRating,
      date: new Date().toISOString().split('T')[0],
    };

    setReviews([newReview, ...reviews]);
    setNewName('');
    setNewText('');
    setNewRating(5);
    setFilterRating(null); // Reset filter to show the new review
  };

  const filteredReviews = filterRating 
    ? reviews.filter(r => r.rating === filterRating)
    : reviews;

  return (
    <section id="reviews" className="py-24 bg-[var(--bg-secondary)] px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Form & Filters */}
        <div className="lg:col-span-5 space-y-12">
          
          {/* Submit Review Form */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold font-syne text-white mb-6">Leave a Review</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 font-inter">Your Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewRating(star)}
                      className="focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star 
                        className={`w-8 h-8 ${star <= newRating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-600'}`} 
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 font-inter">Full Name</label>
                <input 
                  type="text" 
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#06B6D4] focus:outline-none font-inter" 
                  placeholder="John Doe" 
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 font-inter">Your Review</label>
                <textarea 
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#06B6D4] focus:outline-none font-inter min-h-[120px] resize-none" 
                  placeholder="Tell us about your experience..."
                  required
                />
              </div>

              <button type="submit" className="w-full py-4 bg-[#FF5722] hover:bg-[#e64a19] text-white font-bold rounded-xl transition-colors font-syne text-lg">
                Submit Review
              </button>
            </form>
          </div>
          
          {/* Filter Controls */}
          <div>
            <h3 className="text-xl font-bold font-syne text-white mb-4">Filter by Rating</h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setFilterRating(null)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 font-inter border ${
                  filterRating === null
                    ? 'bg-[#06B6D4] text-white border-[#06B6D4]' 
                    : 'bg-transparent text-slate-400 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                All Reviews
              </button>
              {[5, 4, 3, 2, 1].map(star => (
                <button
                  key={star}
                  onClick={() => setFilterRating(star)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 font-inter border flex items-center gap-1 ${
                    filterRating === star
                      ? 'bg-white/10 text-white border-white/20' 
                      : 'bg-transparent text-slate-500 border-white/5 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {star} <Star className="w-3 h-3 fill-current" />
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Reviews List */}
        <div className="lg:col-span-7">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl md:text-5xl font-bold font-syne text-white">Client Stories</h2>
            <span className="text-slate-400 font-inter hidden sm:block">
              {filteredReviews.length} {filteredReviews.length === 1 ? 'Review' : 'Reviews'}
            </span>
          </div>

          {/* Scrollable Container */}
          <div className="max-h-[600px] overflow-y-auto pr-4 space-y-6 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent hover:[&::-webkit-scrollbar-thumb]:bg-white/20">
            <AnimatePresence mode="popLayout">
              {filteredReviews.map((review) => (
                <motion.div
                  key={review.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#06B6D4]/10 flex items-center justify-center text-[#06B6D4]">
                        <UserCircle2 className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white font-syne text-lg">{review.name}</h4>
                        <span className="text-xs text-slate-500 font-inter">{review.date}</span>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-700'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-300 font-inter leading-relaxed">
                    "{review.text}"
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {filteredReviews.length === 0 && (
              <p className="text-slate-500 font-inter text-center py-12">No reviews found for this rating.</p>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
