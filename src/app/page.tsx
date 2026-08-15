import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { PaintingVideos } from "@/components/PaintingVideos";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ContactForm } from "@/components/ContactForm";
import { Reviews } from "@/components/Reviews";
import { CostEstimator } from "@/components/CostEstimator";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-slate-900">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <ProcessTimeline />
      <PaintingVideos />
      <CostEstimator />
      <Reviews />
      <ContactForm />
      
      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 text-center text-slate-600 font-inter text-sm">
        <p>&copy; {new Date().getFullYear()} Rahman Arts. All rights reserved.</p>
      </footer>
    </main>
  );
}
