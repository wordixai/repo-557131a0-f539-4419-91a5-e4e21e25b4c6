export default function MissionSection() {
  const cards = [
    {
      title: 'Core Views on AI Safety',
      icon: '🤝',
      bg: 'bg-[hsl(var(--oat))]',
      link: '/news/core-views-on-ai-safety'
    },
    {
      title: "Anthropic's Responsible Scaling Policy",
      icon: '📚',
      bg: 'bg-[hsl(var(--cactus))]',
      link: '/rsp-updates'
    },
    {
      title: 'Anthropic Academy: Learn to build with Claude',
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
                At Anthropic, we build AI to serve humanity's long-term well-being.
              </h2>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <p className="text-lg text-[hsl(var(--muted-foreground))] mb-6">
                While no one can foresee every outcome AI will have on society, we do know that designing powerful technologies requires both bold steps forward and intentional pauses to consider the effects.
              </p>
              <p className="text-lg text-[hsl(var(--muted-foreground))]">
                That's why we focus on building tools with human benefit at their foundation, like Claude. Through our daily research, policy work, and product design, we aim to show what responsible AI development looks like in practice.
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