import React from 'react';
import { cn } from '../../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8AB0AB]/50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:scale-[0.98]';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-4 py-2 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-[#8AB0AB] hover:bg-[#A2C4C0] text-[#03120E] font-semibold shadow-md shadow-[#8AB0AB]/15 border border-[#8AB0AB]/40',
    secondary:
      'bg-[#3E505B] hover:bg-[#4B5E6B] text-[#FFFFFF] border border-[#8AB0AB]/25 backdrop-blur-md',
    outline:
      'bg-transparent hover:bg-[#26413C]/60 text-slate-200 border border-[#8AB0AB]/30 hover:border-[#8AB0AB]/60',
    ghost:
      'bg-transparent hover:bg-[#26413C]/40 text-slate-400 hover:text-slate-200',
    glow:
      'relative bg-gradient-to-r from-[#8AB0AB] to-[#A2C4C0] hover:from-[#9BC0BC] hover:to-[#B5D8D4] text-[#03120E] font-bold shadow-xl shadow-[#8AB0AB]/20 border border-[#8AB0AB]/40',
  };

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
