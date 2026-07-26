import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';

export interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  hoverEffect = true,
  className,
  ...props
}) => {
  return (
    <motion.div
      className={cn(
        'glass-panel rounded-2xl p-6 transition-all duration-300 relative overflow-hidden',
        hoverEffect && 'glass-panel-hover',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
