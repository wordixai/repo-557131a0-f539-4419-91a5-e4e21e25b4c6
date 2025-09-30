import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[hsl(var(--ivory-medium))] border-b border-[hsl(var(--border))]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <svg width="35" height="22" viewBox="0 0 35 24" fill="none" className="text-[hsl(var(--foreground))]">
              <path d="M24.5475 0H19.3384L28.8374 24H34.0465L24.5475 0Z" fill="currentColor"/>
              <path d="M9.49897 0L0 24H5.31125L7.25395 18.96H17.1914L19.1341 24H24.4454L14.9464 0H9.49897ZM8.97193 14.5029L12.2227 6.06857L15.4735 14.5029H8.97193Z" fill="currentColor"/>
            </svg>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/research" className="text-sm font-medium hover:text-[hsl(var(--accent))] transition-colors">研究</a>
            <a href="/economic-futures" className="text-sm font-medium hover:text-[hsl(var(--accent))] transition-colors">经济未来</a>
            
            <div className="relative group">
              <button className="flex items-center text-sm font-medium hover:text-[hsl(var(--accent))] transition-colors">
                承诺
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>

            <div className="relative group">
              <button className="flex items-center text-sm font-medium hover:text-[hsl(var(--accent))] transition-colors">
                学习
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>

            <a href="/news" className="text-sm font-medium hover:text-[hsl(var(--accent))] transition-colors">新闻</a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://claude.ai/login" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium border border-[hsl(var(--border))] rounded-xl hover:bg-[hsl(var(--muted))] transition-colors"
            >
              登录 Claude
            </a>
            <a 
              href="https://claude.ai/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium bg-[hsl(var(--accent))] text-white rounded-xl hover:opacity-90 transition-opacity"
            >
              试用 Claude
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[hsl(var(--border))] bg-[hsl(var(--ivory-medium))]">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a href="/research" className="block py-2 text-sm font-medium">研究</a>
            <a href="/economic-futures" className="block py-2 text-sm font-medium">经济未来</a>
            <a href="/news" className="block py-2 text-sm font-medium">新闻</a>
            <div className="pt-4 space-y-2">
              <a 
                href="https://claude.ai/login" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-2 text-sm font-medium text-center border border-[hsl(var(--border))] rounded-xl"
              >
                登录 Claude
              </a>
              <a 
                href="https://claude.ai/" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-2 text-sm font-medium text-center bg-[hsl(var(--accent))] text-white rounded-xl"
              >
                试用 Claude
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}