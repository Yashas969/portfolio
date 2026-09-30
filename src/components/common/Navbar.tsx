import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { getActiveNavItems } from '../../data/navigation';
import { portfolioConfig } from '../../config/portfolio.config';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { Button } from '../ui/Button';

export interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = getActiveNavItems();
  const sectionIds = navItems.map((item) => item.href.replace('#', ''));
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FAFAF8]/95 border-b border-[#E2E4DF] py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Name */}
          <a
            href="#"
            className="font-bold text-lg tracking-tight text-[#171A18] hover:text-[#123524] transition-colors focus:outline-none"
          >
            {portfolioConfig.author.name}
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-[#FFFFFF] px-3 py-1.5 rounded-lg border border-[#E2E4DF]">
            {navItems.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-[#123524] text-[#FAFAF8]'
                      : 'text-slate-700 hover:text-[#171A18] hover:bg-[#123524]/10'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Actions: Command Menu & Contact */}
          <div className="hidden sm:flex items-center gap-3">
            {portfolioConfig.featureFlags.showCommandMenu && (
              <button
                onClick={onOpenSearch}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#E2E4DF] text-slate-600 hover:text-[#171A18] text-xs transition-colors cursor-pointer"
                title="Search portfolio (Cmd + K)"
              >
                <Search className="w-3.5 h-3.5 text-slate-500" />
                <span>Search...</span>
                <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-[#FAFAF8] rounded border border-[#E2E4DF] text-slate-500">
                  ⌘K
                </kbd>
              </button>
            )}

            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            {portfolioConfig.featureFlags.showCommandMenu && (
              <button
                onClick={onOpenSearch}
                className="p-2 text-slate-700 hover:text-[#171A18] rounded-lg hover:bg-[#123524]/10"
              >
                <Search className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 text-slate-700 hover:text-[#171A18] rounded-lg hover:bg-[#123524]/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FAFAF8] border-b border-[#E2E4DF] px-4 pt-3 pb-6 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-[#123524]/10 hover:text-[#171A18] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <Button
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
