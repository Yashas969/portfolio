import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Terminal } from 'lucide-react';
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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#03120E]/90 backdrop-blur-xl border-b border-[#8AB0AB]/20 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-[#3E505B] border border-[#8AB0AB]/30 flex items-center justify-center text-[#8AB0AB] group-hover:border-[#8AB0AB] group-hover:scale-105 transition-all">
              <Terminal className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg tracking-tight text-white group-hover:text-[#8AB0AB] transition-colors">
              {portfolioConfig.author.name.split(' ')[0]}
              <span className="text-[#8AB0AB]">.dev</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-[#1A1D1A]/90 p-1.5 rounded-full border border-[#8AB0AB]/20 backdrop-blur-md">
            {navItems.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#3E505B] text-white border border-[#8AB0AB]/40 shadow-md'
                      : 'text-slate-300 hover:text-white hover:bg-[#26413C]/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Actions: Command Menu Trigger & Status Pill */}
          <div className="hidden sm:flex items-center gap-3">
            {portfolioConfig.featureFlags.showCommandMenu && (
              <button
                onClick={onOpenSearch}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#1A1D1A] border border-[#8AB0AB]/20 hover:border-[#8AB0AB]/50 text-slate-300 hover:text-white text-xs transition-all cursor-pointer"
                title="Search portfolio (Cmd + K)"
              >
                <Search className="w-3.5 h-3.5 text-[#8AB0AB]" />
                <span>Search...</span>
                <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-[#26413C] rounded border border-[#8AB0AB]/20 text-slate-300">
                  ⌘K
                </kbd>
              </button>
            )}

            <Button
              variant="glow"
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
                className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-[#26413C]"
              >
                <Search className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-[#26413C]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#03120E]/95 border-b border-[#8AB0AB]/20 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-[#26413C] hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <Button
              variant="glow"
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
