import React from 'react';
import { cn } from '../../utils/cn';

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = false,
  className,
}) => {
  return (
    <div className={cn('mb-10 md:mb-14', centered && 'text-center mx-auto max-w-3xl', className)}>
      {badge && (
        <div className={cn('mb-2.5 inline-block', centered && 'mx-auto')}>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#123524]/10 text-[#123524] border border-[#123524]/20 tracking-wide uppercase">
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#171A18] mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
