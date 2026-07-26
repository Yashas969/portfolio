import React from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'teal' | 'slate' | 'charcoal' | 'green' | 'amber' | 'outline';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'teal',
  size = 'md',
  icon,
  className,
}) => {
  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-xs font-medium',
  };

  const variantStyles = {
    teal: 'bg-[#8AB0AB]/15 text-[#8AB0AB] border border-[#8AB0AB]/30',
    slate: 'bg-[#26413C] text-slate-200 border border-[#8AB0AB]/20',
    charcoal: 'bg-[#3E505B] text-slate-200 border border-[#8AB0AB]/25',
    green: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
    amber: 'bg-amber-500/15 text-amber-300 border border-amber-500/30',
    outline: 'bg-transparent text-slate-300 border border-[#8AB0AB]/30',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full transition-colors',
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
