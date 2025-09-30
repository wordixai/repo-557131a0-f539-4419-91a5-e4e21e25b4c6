export default function FeaturedSection() {
  const articles = [
    { title: 'Anthropic Economic Index', category: 'Societal impacts', date: 'Sep 15, 2025', link: '/economic-index' },
    { title: 'Claude Sonnet 4 with 1M context', category: 'Product', date: 'Aug 12, 2025', link: '/news/1m-context' },
    { title: 'Claude Opus 4.1', category: 'Announcements', date: 'Aug 05, 2025', link: '/news/claude-opus-4-1' },
    { title: 'Project Vend', category: 'Policy', date: 'Jun 26, 2025', link: '/research/project-vend-1' },
    { title: 'Agentic Misalignment', category: 'Alignment', date: 'Jun 20, 2025', link: '/research/agentic-misalignment' },
    { title: 'Introducing Claude 4', category: 'Announcements', date: 'May 22, 2025', link: '/news/claude-4' },
    { title: 'Tracing the thoughts of a large language model', category: 'Interpretability', date: 'Mar 27, 2025', link: '/research/tracing-thoughts-language-model' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-medium">Featured</h2>
          </div>

          <div className="md:col-span-8">
            <ul className="space-y-4">
              {articles.map((article, index) => (
                <li key={index} className="border-b border-[hsl(var(--border))] pb-4">
                  <a href={article.link} className="block hover:opacity-70 transition-opacity">
                    <h3 className="text-lg font-medium mb-2">{article.title}</h3>
                    <div className="flex items-center justify-between text-sm text-[hsl(var(--muted-foreground))]">
                      <span>{article.category}</span>
                      <span>{article.date}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}