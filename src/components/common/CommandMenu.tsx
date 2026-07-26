import React, { useState } from 'react';
import { Search, Code2, Brain, ShieldCheck, ArrowRight, ExternalLink, Users } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { performGlobalSearch, SearchResultItem } from '../../utils/search';

export interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandMenu: React.FC<CommandMenuProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  const results = performGlobalSearch(query) ?? [];

  const getTypeIcon = (type: SearchResultItem['type']) => {
    switch (type) {
      case 'project':
        return <Code2 className="w-4 h-4 text-[#8AB0AB]" />;
      case 'skill':
        return <Code2 className="w-4 h-4 text-cyan-400" />;
      case 'research':
        return <Brain className="w-4 h-4 text-purple-400" />;
      case 'leadership':
        return <Users className="w-4 h-4 text-amber-400" />;
      case 'certification':
        return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      default:
        return <Code2 className="w-4 h-4 text-slate-400" />;
    }
  };

  const handleSelect = (item: SearchResultItem) => {
    onClose();
    if (item.url?.startsWith('#')) {
      const el = document.getElementById(item.url.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (item.url?.startsWith('http')) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-xl">
      <div className="space-y-4">
        {/* Search Input Box */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type to search FinTrack, Green AI, Python, Leadership..."
            className="w-full pl-11 pr-4 py-3 bg-[#1A1D1A] border border-[#8AB0AB]/20 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#8AB0AB] transition-colors"
            autoFocus
          />
        </div>

        {/* Results List */}
        <div className="space-y-2 min-h-[220px]">
          {query.trim() === '' ? (
            <div className="py-10 text-center text-slate-400 text-sm">
              Start typing to search across projects, skills, research papers, and leadership positions.
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {['FinTrack', 'Green AI', 'Python', 'Supabase', 'Cybernetics Club'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 rounded-lg bg-[#26413C] text-slate-200 hover:text-white text-xs transition-colors cursor-pointer border border-[#8AB0AB]/20"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-slate-400 text-sm">
              No matching records found for "<span className="text-white">{query}</span>".
            </div>
          ) : (
            <div className="space-y-1.5 max-h-[320px] overflow-y-auto pr-1">
              {results.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#1A1D1A] hover:bg-[#26413C] border border-[#8AB0AB]/20 hover:border-[#8AB0AB]/50 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-[#26413C] border border-[#8AB0AB]/20 shrink-0">
                      {getTypeIcon(item.type)}
                    </div>
                    <div className="truncate">
                      <h4 className="text-sm font-medium text-slate-200 group-hover:text-[#8AB0AB] truncate transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 truncate">{item.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="hidden sm:flex items-center gap-1">
                      {item.tags?.slice(0, 2).map((t) => (
                        <span key={t} className="px-2 py-0.5 text-[10px] bg-[#03120E] text-slate-300 rounded border border-[#8AB0AB]/15">
                          {t}
                        </span>
                      ))}
                    </div>
                    {item.url?.startsWith('http') ? (
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white" />
                    ) : (
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#8AB0AB] transition-colors" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};
