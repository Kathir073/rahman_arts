import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { PaintingVideos } from "@/components/PaintingVideos";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ContactForm } from "@/components/ContactForm";
import { Reviews } from "@/components/Reviews";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-white">
      <Hero />
      <Services />
      <Gallery />
      <PaintingVideos />
      <ProcessTimeline />
      <ContactForm />
      <Reviews />
      
      {/* Footer */}
      <footer className="py-8 border-t border-white/10 text-center text-slate-500 font-inter text-sm">
        <p>&copy; {new Date().getFullYear()} Rahman Arts. All rights reserved.</p>
      </footer>
    </main>
  );
}
