import { ArrowRight } from 'lucide-react';

export default function ModelBanner() {
  return (
    <section className="py-16 bg-[hsl(var(--ivory-medium))]">
      <div className="container mx-auto px-4">
        <div className="bg-[hsl(var(--oat))] rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-medium mb-4">Claude Sonnet 4.5</h2>
              <p className="text-lg mb-8 max-w-md text-[hsl(var(--muted-foreground))]">
                Introducing the best model in the world for agents, coding, and computer use.
              </p>
              <a 
                href="https://www.anthropic.com/news/claude-sonnet-4-5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[hsl(var(--accent))] text-white rounded-xl font-medium hover:opacity-90 transition-opacity"
              >
                Read announcement
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium uppercase tracking-wide mb-6">Learn more</h3>
              
              <a href="/news/context-management" className="group flex items-center justify-between p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-colors">
                <div className="flex-1">
                  <h4 className="font-medium mb-1">Managing context on the Claude Developer Platform</h4>
                </div>
                <ArrowRight className="h-5 w-5 text-[hsl(var(--muted-foreground))] group-hover:translate-x-1 transition-transform" />
              </a>

              <a href="/news/enabling-claude-code-to-work-more-autonomously" className="group flex items-center justify-between p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-colors">
                <div className="flex-1">
                  <h4 className="font-medium mb-1">Enabling Claude Code to work more autonomously</h4>
                </div>
                <ArrowRight className="h-5 w-5 text-[hsl(var(--muted-foreground))] group-hover:translate-x-1 transition-transform" />
              </a>

              <a href="/claude/sonnet" className="group flex items-center justify-between p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-colors">
                <div className="flex-1">
                  <h4 className="font-medium mb-1">Model details</h4>
                </div>
                <ArrowRight className="h-5 w-5 text-[hsl(var(--muted-foreground))] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}