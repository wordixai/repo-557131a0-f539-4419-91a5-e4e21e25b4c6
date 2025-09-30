export default function FeaturedSection() {
  const articles = [
    { title: 'Anthropic 经济指数', category: '社会影响', date: '2025年9月15日', link: '/economic-index' },
    { title: 'Claude Sonnet 4 具有 1M 上下文', category: '产品', date: '2025年8月12日', link: '/news/1m-context' },
    { title: 'Claude Opus 4.1', category: '公告', date: '2025年8月5日', link: '/news/claude-opus-4-1' },
    { title: 'Vend 项目', category: '政策', date: '2025年6月26日', link: '/research/project-vend-1' },
    { title: '代理失调', category: '对齐', date: '2025年6月20日', link: '/research/agentic-misalignment' },
    { title: '介绍 Claude 4', category: '公告', date: '2025年5月22日', link: '/news/claude-4' },
    { title: '追踪大型语言模型的思想', category: '可解释性', date: '2025年3月27日', link: '/research/tracing-thoughts-language-model' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-medium">精选内容</h2>
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