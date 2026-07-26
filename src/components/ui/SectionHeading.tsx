import React from 'react';
import { Badge } from './Badge';
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
    <div className={cn('mb-12 md:mb-16', centered && 'text-center mx-auto max-w-3xl', className)}>
      {badge && (
        <div className={cn('mb-3 inline-block', centered && 'mx-auto')}>
          <Badge variant="teal">{badge}</Badge>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
