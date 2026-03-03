'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
    name: string;
    href: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
    // Schema.org BreadcrumbList markup
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Ana Sayfa",
                "item": "https://wearenexa.co"
            },
            ...items.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": item.name,
                "item": `https://wearenexa.co${item.href}`
            }))
        ]
    };

    return (
        <nav aria-label="Breadcrumb" className="py-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <ol className="flex items-center flex-wrap gap-2 text-sm">
                <li className="flex items-center">
                    <Link href="/" className="text-gray-500 hover:text-[#C9A84C] transition-colors flex items-center gap-1">
                        <Home size={14} />
                        <span className="hidden md:inline">Ana Sayfa</span>
                    </Link>
                </li>

                {items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <ChevronRight size={14} className="text-gray-700" />
                        {index === items.length - 1 ? (
                            <span className="text-[#C9A84C] font-medium truncate max-w-[200px] md:max-w-none">
                                {item.name}
                            </span>
                        ) : (
                            <Link href={item.href} className="text-gray-500 hover:text-white transition-colors truncate max-w-[150px] md:max-w-none">
                                {item.name}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
