export default function MissionSection() {
  const cards = [
    {
      title: '关于 AI 安全的核心观点',
      icon: '🤝',
      bg: 'bg-[hsl(var(--oat))]',
      link: '/news/core-views-on-ai-safety'
    },
    {
      title: 'Anthropic 的负责任扩展政策',
      icon: '📚',
      bg: 'bg-[hsl(var(--cactus))]',
      link: '/rsp-updates'
    },
    {
      title: 'Anthropic 学院：学习使用 Claude 进行构建',
      icon: '🧩',
      bg: 'bg-[hsl(var(--heather))]',
      link: '/learn'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="h-px bg-[hsl(var(--border))] mb-16" />
          
          <div className="grid md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-4">
              <h2 className="text-3xl md:text-4xl font-medium">
                在 Anthropic，我们构建 AI 以服务人类的长期福祉。
              </h2>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <p className="text-lg text-[hsl(var(--muted-foreground))] mb-6">
                虽然没有人能预见 AI 对社会的每一个影响，但我们知道，设计强大的技术既需要大胆的前进步伐，也需要有意的停顿来考虑影响。
              </p>
              <p className="text-lg text-[hsl(var(--muted-foreground))]">
                这就是为什么我们专注于构建以人类利益为基础的工具，比如 Claude。通过我们的日常研究、政策工作和产品设计，我们旨在展示负责任的 AI 开发在实践中的样子。
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <a
                key={index}
                href={card.link}
                className={`${card.bg} p-8 rounded-3xl hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="text-6xl mb-8">{card.icon}</div>
                <h3 className="text-xl font-medium">{card.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}