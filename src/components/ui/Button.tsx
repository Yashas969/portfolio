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
    'inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#123524]/40 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-4 py-2 text-sm gap-2',
    lg: 'px-5 py-2.5 text-sm gap-2',
  };

  const variantStyles = {
    primary:
      'bg-[#123524] hover:bg-[#1b4a33] text-[#FAFAF8] font-medium border border-[#123524]',
    secondary:
      'bg-[#FFFFFF] hover:bg-[#123524]/10 text-[#171A18] border border-[#E2E4DF]',
    outline:
      'bg-transparent hover:bg-[#123524]/10 text-[#171A18] border border-[#123524]/30',
    ghost:
      'bg-transparent hover:bg-[#123524]/10 text-slate-700 hover:text-[#171A18]',
    glow:
      'bg-[#123524] hover:bg-[#1b4a33] text-[#FAFAF8] font-medium border border-[#123524]',
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
