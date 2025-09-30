import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ModelBanner from '@/components/ModelBanner';
import VideoSection from '@/components/VideoSection';
import MissionSection from '@/components/MissionSection';
import FeaturedSection from '@/components/FeaturedSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ModelBanner />
        <VideoSection />
        <MissionSection />
        <FeaturedSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}