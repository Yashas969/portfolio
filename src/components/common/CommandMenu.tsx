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
        return <Code2 className="w-4 h-4 text-[#123524]" />;
      case 'skill':
        return <Code2 className="w-4 h-4 text-[#123524]" />;
      case 'research':
        return <Brain className="w-4 h-4 text-[#123524]" />;
      case 'leadership':
        return <Users className="w-4 h-4 text-[#123524]" />;
      case 'certification':
        return <ShieldCheck className="w-4 h-4 text-[#123524]" />;
      default:
        return <Code2 className="w-4 h-4 text-slate-500" />;
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
            className="w-full pl-11 pr-4 py-3 bg-[#FFFFFF] border border-[#E2E4DF] rounded-lg text-[#171A18] placeholder-slate-400 text-sm focus:outline-none focus:border-[#123524] transition-colors"
            autoFocus
          />
        </div>

        {/* Results List */}
        <div className="space-y-2 min-h-[220px]">
          {query.trim() === '' ? (
            <div className="py-10 text-center text-slate-500 text-sm">
              Start typing to search across projects, skills, research papers, and leadership positions.
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {['FinTrack', 'Green AI', 'Python', 'Supabase', 'Cybernetics Club'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 rounded-md bg-[#FFFFFF] text-slate-700 hover:text-[#123524] text-xs transition-colors cursor-pointer border border-[#E2E4DF]"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-sm">
              No matching records found for "<span className="text-[#171A18] font-semibold">{query}</span>".
            </div>
          ) : (
            <div className="space-y-1.5 max-h-[320px] overflow-y-auto pr-1">
              {results.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  className="flex items-center justify-between p-3 rounded-lg bg-[#FFFFFF] hover:bg-[#123524]/5 border border-[#E2E4DF] hover:border-[#123524]/40 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-md bg-[#FAFAF8] border border-[#E2E4DF] shrink-0">
                      {getTypeIcon(item.type)}
                    </div>
                    <div className="truncate">
                      <h4 className="text-sm font-semibold text-[#171A18] group-hover:text-[#123524] truncate transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 truncate">{item.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="hidden sm:flex items-center gap-1">
                      {item.tags?.slice(0, 2).map((t) => (
                        <span key={t} className="px-2 py-0.5 text-[10px] bg-[#FAFAF8] text-slate-600 rounded border border-[#E2E4DF]">
                          {t}
                        </span>
                      ))}
                    </div>
                    {item.url?.startsWith('http') ? (
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#123524]" />
                    ) : (
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#123524] transition-colors" />
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
