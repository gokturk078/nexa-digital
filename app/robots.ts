import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/_next/'], // Prevent indexing of internal routes
    },
    sitemap: 'https://nexadigital.com/sitemap.xml',
    host: 'https://nexadigital.com',
  };
}
