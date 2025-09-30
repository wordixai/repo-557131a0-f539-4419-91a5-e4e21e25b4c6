export default function CTASection() {
  return (
    <section className="py-24 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-medium mb-8 max-w-3xl mx-auto">
          想帮助我们构建安全 AI 的未来吗？
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/jobs"
            className="px-8 py-3 bg-[hsl(var(--accent))] text-white rounded-xl font-medium hover:opacity-90 transition-opacity"
          >
            查看职位
          </a>
          <a 
            href="/contact-sales"
            className="px-8 py-3 border border-[hsl(var(--border))] rounded-xl font-medium hover:bg-[hsl(var(--muted))] transition-colors"
          >
            联系销售
          </a>
        </div>
      </div>
    </section>
  );
}