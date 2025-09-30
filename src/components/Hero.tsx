import { useEffect, useState } from 'react';

export default function Hero() {
  const [wordsAnimated, setWordsAnimated] = useState(false);

  useEffect(() => {
    setWordsAnimated(true);
  }, []);

  const words = ['AI', 'research', 'and', 'products', 'that', 'put', 'safety', 'at', 'the', 'frontier'];

  return (
    <section className="py-16 md:py-24 bg-[hsl(var(--ivory-medium))]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <h1 className="text-5xl md:text-7xl font-medium mb-6 leading-tight">
              {words.map((word, index) => (
                <span
                  key={index}
                  className={`inline-block transition-all duration-500 ${
                    wordsAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {word === 'research' ? (
                    <a href="/research" className="hover:text-[hsl(var(--accent))] transition-colors underline decoration-2 underline-offset-4">
                      {word}
                    </a>
                  ) : word === 'products' ? (
                    <a href="/claude" className="hover:text-[hsl(var(--accent))] transition-colors underline decoration-2 underline-offset-4">
                      {word}
                    </a>
                  ) : (
                    word
                  )}
                  {' '}
                </span>
              ))}
            </h1>
            <p className="text-xl max-w-2xl text-[hsl(var(--muted-foreground))]">
              AI will have a vast impact on the world. Anthropic is a public benefit corporation dedicated to securing its benefits and mitigating its risks.
            </p>
          </div>

          <div className="md:col-span-4 flex justify-center">
            <div className="w-full max-w-xs">
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=400&fit=crop" 
                alt="AI illustration" 
                className="w-full h-auto rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}