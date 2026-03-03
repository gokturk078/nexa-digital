'use client';

import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
    { name: 'Next.js', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Tailwind', icon: '🎨' },
    { name: 'Google SEO', icon: '🔍' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Framer Motion', icon: '🎬' },
];

export default function TrustBadges() {
    return (
        <section className="py-16 bg-black">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-10">
                    GÜÇLÜ TEKNOLOJİ STACK'İMİZ
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 hover:opacity-100 transition-opacity duration-700">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3 group"
                        >
                            <span className="text-2xl grayscale group-hover:grayscale-0 transition-all">{tech.icon}</span>
                            <span className="text-lg font-bold text-white tracking-tight">{tech.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}