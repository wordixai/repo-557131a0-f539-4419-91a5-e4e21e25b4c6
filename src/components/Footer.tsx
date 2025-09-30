export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--primary))] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div>
            <svg width="45" height="32" viewBox="0 0 46 32" fill="currentColor" className="mb-8">
              <path d="M32.73 0H25.7846L38.4499 32H45.3953L32.73 0Z"/>
              <path d="M12.6653 0L0 32H7.08167L9.67193 25.28H22.9219L25.5122 32H32.5939L19.9286 0H12.6653ZM11.9626 19.3371L16.2969 8.09143L20.6313 19.3371H11.9626Z"/>
            </svg>
          </div>

          <div>
            <h3 className="font-medium mb-4">产品</h3>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="/claude" className="hover:opacity-100">Claude</a></li>
              <li><a href="/claude-code" className="hover:opacity-100">Claude Code</a></li>
              <li><a href="/pricing" className="hover:opacity-100">定价</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">学习</h3>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="/learn" className="hover:opacity-100">课程</a></li>
              <li><a href="/customers" className="hover:opacity-100">客户案例</a></li>
              <li><a href="/engineering" className="hover:opacity-100">工程</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">公司</h3>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="/company" className="hover:opacity-100">关于</a></li>
              <li><a href="/careers" className="hover:opacity-100">职业</a></li>
              <li><a href="/research" className="hover:opacity-100">研究</a></li>
              <li><a href="/news" className="hover:opacity-100">新闻</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">条款和政策</h3>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="/legal/privacy" className="hover:opacity-100">隐私政策</a></li>
              <li><a href="/legal/terms" className="hover:opacity-100">服务条款</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20">
          <div className="text-sm opacity-70 mb-4 md:mb-0">
            © 2025 Anthropic PBC
          </div>
          <div className="flex space-x-6">
            <a href="https://linkedin.com/company/anthropicresearch" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://x.com/AnthropicAI" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100">
              <span className="sr-only">X</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}