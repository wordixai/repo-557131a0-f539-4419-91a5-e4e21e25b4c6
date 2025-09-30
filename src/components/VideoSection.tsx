import { Play } from 'lucide-react';
import { useState } from 'react';

export default function VideoSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="py-16 bg-[hsl(var(--ivory-medium))]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-900 to-amber-700 aspect-video">
              {!showVideo ? (
                <>
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop" 
                    alt="Video thumbnail" 
                    className="w-full h-full object-cover"
                  />
                  <button 
                    onClick={() => setShowVideo(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
                  >
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-[hsl(var(--primary))] ml-1" fill="currentColor" />
                    </div>
                  </button>
                </>
              ) : (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/fGKNUvivvnc?autoplay=1"
                  title="Video Player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="text-6xl md:text-8xl font-serif mb-4">"</div>
            <p className="text-xl md:text-2xl font-medium">
              When you're talking to a large language model, what exactly is it that you're talking to?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}