# 🎨 Interactive 3D Portfolio Website Prompt for Rahman Arts

> **System Instruction for AI Builder (Antigravity / v0 / Bolt / Cursor):**  
> Act as a Lead Full-Stack Creative Developer and 3D UI/UX Designer. Build a high-performance, visually stunning, fully responsive portfolio website for **Rahman Arts** — a master artist specializing in 3D optical illusion murals, hyper-realistic portraits, interior feature walls, and large-scale exterior wall paintings.

---

## 🛠️ 1. Technical Stack & Architecture Guidelines

* **Framework:** Next.js 14+ (App Router) / React 18+ with TypeScript
* **Styling:** Tailwind CSS with custom theme design system
* **Animations:** `framer-motion` for UI transitions + `gsap` with `ScrollTrigger` for parallax depth
* **3D & Canvas Engine:** `@react-three/fiber`, `@react-three/drei`, `three.js`
* **Icons:** `lucide-react`
* **Form & Validation:** `react-hook-form` + `zod`

---

## 🎨 2. Visual Theme & Styling Tokens

```css
:root {
  --bg-primary: #0A0A0C;         /* Luxury dark canvas background */
  --bg-secondary: #141419;       /* Card and section backgrounds */
  --bg-glass: rgba(20, 20, 25, 0.75);
  --text-primary: #F8FAFC;       /* Primary crisp white text */
  --text-muted: #94A3B8;         /* Subtitles and metadata */
  --accent-orange: #FF5722;      /* Vibrant paint vermilion accent */
  --accent-gold: #F59E0B;        /* Golden portrait accent */
  --accent-cyan: #06B6D4;        /* 3D illusion pop accent */
  --border-glass: rgba(255, 255, 255, 0.08);
  --font-heading: 'Syne', sans-serif;
  --font-body: 'Inter', sans-serif;
}
```

---

## 🧱 3. Required Website Sections & Structural Details

### 🔴 Section 1: Hero Experience – "Art Beyond Boundaries"
* **Interactive 3D Background Canvas:** Built with Three.js showing an interactive 3D corner wall where a painted 3D optical illusion shifts perspective as the user moves their cursor or tilts their mobile device.
* **Badge:** Floating glassmorphism pill with glow effect: `✨ Hand-Painted 3D Illusions & Custom Wall Murals`
* **Headline:** `"TURNING BLANK WALLS INTO LIVING ILLUSIONS"`
* **Subheading:** `"Specializing in 3D Wall Murals, Hyper-Realistic Portraits, Interior Aesthetics & Large-Scale Outdoor Architectural Painting."`
* **Primary Actions:**
  1. `[ Explore Murals ]` (Primary vermilion paint button with brush sweep hover effect)
  2. `[ Calculate Project Cost ]` (Secondary glass icon button)
* **Live Key Metrics Bar:**
  * `12+ Years Experience` | `500+ Wall Murals Painted` | `100% Hand-Crafted Art` | `3D Optical Illusion Specialist`

---

### 🎨 Section 2: Interactive 3D Art Gallery & Masonry Grid
* **Category Tabs:** `[ All Works ]` `[ 3D Optical Illusions ]` `[ Outdoor Murals ]` `[ Interior Wall Decor ]` `[ Realistic Portraits ]` `[ Commercial Branding ]`
* **Card Interactivity:**
  * **3D Parallax Tilt:** Smooth dynamic card tilt on mouse movement (`react-parallax-tilt`).
  * **Before / After Wall Slider:** Dual-layer drag slider showcasing the raw unpainted wall transformed into the final finished artwork.
  * **Lightbox Modal:** Clicking any card opens a high-res full-screen view showing project square footage, location, materials used (weatherproof/UV-resistant acrylics), turnaround time, and video timelapses.

#### 🖼️ Portfolio Content Mock Structure:
1. **Title:** "The Concrete Breach" — *3D Outdoor Optical Illusion*
   * *Type:* 3D Building Corner Mural
   * *Feature:* Realistic depth effect of a tiger breaking through concrete bricks.
2. **Title:** "Master Portrait of Heritage" — *Hyper-Realistic Wall Portrait*
   * *Type:* Interior Feature Wall
   * *Feature:* Airbrushed 15ft wall portrait with dynamic lighting accents.
3. **Title:** "Metropolitan Cafe Illusion" — *Commercial Interior Mural*
   * *Type:* Restaurant Aesthetics
   * *Feature:* Optical illusion extending a flat indoor wall into a European cobblestone street.
4. **Title:** "Botanical Sanctuary" — *Residential Living Room Art*
   * *Type:* Luxury Interior Accent
   * *Feature:* Hand-painted gold leaf tropical botanical mural.

---

### ⚡ Section 3: "How The Magic Happens" – 4-Step Process Timeline
1. **01. Wall Survey & Digital Preview:** Free site consultation & digital 3D concept mapping onto photos of the client's wall.
2. **02. Surface Prep & Priming:** High-grade wall priming, weatherproofing, and grid scaling setup.
3. **03. Precision Painting & Airbrushing:** Detailed hand painting, airbrush shading, and 3D depth geometry alignment.
4. **04. Weatherproof Sealing:** Application of UV-resistant, washable protective clear seal for long-lasting vibrancy.

---

### 🧮 Section 4: Dynamic 3D Wall Art Cost Estimator (Interactive Tool)
* **Interactive Inputs:**
  1. **Art Style Selector:** `3D Optical Illusion` | `Hyper-Realistic Portrait` | `Outdoor Mural` | `Interior Decor`
  2. **Wall Dimensions:** Width (ft) x Height (ft) → Auto calculates total square footage.
  3. **Surface Texture:** `Smooth Plaster` | `Textured Brick` | `Rough Concrete`
  4. **Location Type:** `Indoor` | `Outdoor (Scaffolding Required)`
* **Outputs:** Real-time completion estimate (e.g., 3–5 Days) and direct CTA button to pre-fill the inquiry form.

---

### 💬 Section 5: Client Reviews & Proof of Work
* Carousel displaying Google Business reviews, client video testimonials, and before/after wall transformation stories.

---

### 📩 Section 6: Bookings & Wall Photo Upload Inquiry Form
* **Features:**
  * **Wall Photo Upload Field:** Drag-and-drop wall photo uploader for instant digital artwork mockup requests.
  * **Location Input:** Quick city/address input to schedule site visits.
  * **Direct WhatsApp Integration:** Floating quick-connect button (`"Chat directly with Rahman Arts"`).

---

## 📱 4. Mobile & Touch Performance Rules

* Detect mobile/low-power devices and smoothly swap WebGL backgrounds to hardware-accelerated CSS parallax.
* Touch-friendly Before/After image sliders and swipeable lightbox modals.
* Fixed bottom mobile navigation bar featuring quick actions: `[ Call Now ]` | `[ WhatsApp ]`.

---

## 💻 5. Complete Component Starter Code (Hero Component)

```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Paintbrush } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#0A0A0C] text-white flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#FF5722]/20 via-[#F59E0B]/10 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto text-center relative z-10 space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs sm:text-sm text-[#FF5722]"
        >
          <Sparkles className="w-4 h-4" />
          <span>Premier 3D & Wall Mural Artist — Rahman Arts</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] font-syne"
        >
          TURNING BLANK WALLS INTO <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF5722] via-[#F59E0B] to-[#06B6D4]">
            LIVING ILLUSIONS
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg font-light leading-relaxed"
        >
          Specializing in 3D realistic optical illusion murals, hyper-detailed portraits, commercial interior art, and weather-proof outdoor wall painting.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a href="#gallery" className="w-full sm:w-auto px-8 py-4 bg-[#FF5722] hover:bg-[#e04818] text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#FF5722]/20">
            <Paintbrush className="w-5 h-5" />
            Explore Gallery
          </a>
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-xl backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2">
            Get Free Wall Quote
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10"
        >
          {[
            { value: '12+', label: 'Years Experience' },
            { value: '500+', label: 'Wall Murals Painted' },
            { value: '100%', label: 'Hand-Crafted Art' },
            { value: '3D Illusion', label: 'Specialist Work' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
```
