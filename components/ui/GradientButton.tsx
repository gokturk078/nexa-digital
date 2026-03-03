import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface GradientButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function GradientButton({
  children,
  href,
  size = 'md',
  variant = 'primary',
  className,
  ...props
}: GradientButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-full transition-all duration-300 font-semibold";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-cyan)] text-black hover:scale-105 glow-gold",
    secondary: "bg-transparent border border-white/20 text-white hover:border-[var(--color-gold)]/50",
  };

  return (
    <Link
      href={href}
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Link>
  );
}
