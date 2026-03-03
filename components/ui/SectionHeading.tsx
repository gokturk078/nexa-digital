'use client';

import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "mb-16",
        align === 'center' ? "text-center mx-auto" : "text-left",
        className
      )}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight font-sora">
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-lg text-gray-400 mt-4 max-w-2xl",
          align === 'center' && "mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
