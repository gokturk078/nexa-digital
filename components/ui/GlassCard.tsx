import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "bg-white/[0.03] backdrop-blur-[40px] border border-white/10 rounded-2xl p-6",
        hover && "hover:border-[var(--color-gold)]/30 hover:-translate-y-2 transition-all duration-500",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
