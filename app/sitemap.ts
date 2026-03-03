import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://wearenexa.co';
  const lastModified = new Date();

  const routes = [
    { url: '', priority: 1.0, changeFrequency: 'daily' },
    { url: 'kibris-web-tasarim', priority: 0.9, changeFrequency: 'weekly' },
    { url: 'turkiye-dijital-ajans', priority: 0.9, changeFrequency: 'weekly' },
    { url: 'hakkimizda', priority: 0.7, changeFrequency: 'monthly' },
    { url: 'iletisim', priority: 0.8, changeFrequency: 'monthly' },
    { url: 'portfolyo', priority: 0.8, changeFrequency: 'weekly' },

    // Success Stories (High Authority Proof)
    { url: 'basari-hikayeleri/noir-moda-nuans', priority: 0.8, changeFrequency: 'monthly' },
    { url: 'basari-hikayeleri/nexa-luxe-estate', priority: 0.8, changeFrequency: 'monthly' },
    { url: 'basari-hikayeleri/oto-yasin', priority: 0.8, changeFrequency: 'monthly' },

    // Services (Core Revenue Hubs)
    { url: 'hizmetler/web-tasarim', priority: 0.9, changeFrequency: 'weekly' },
    { url: 'hizmetler/kurumsal-seo', priority: 0.9, changeFrequency: 'weekly' },
    { url: 'hizmetler/ai-chatbot', priority: 0.9, changeFrequency: 'weekly' },
    { url: 'hizmetler/ai-chatbot', priority: 0.9, changeFrequency: 'weekly' },
    { url: 'hizmetler/performans-pazarlama', priority: 0.9, changeFrequency: 'weekly' },
    { url: 'hizmetler/kurumsal-kimlik-tasarimi', priority: 0.9, changeFrequency: 'weekly' },
    { url: 'hizmetler/hiz-optimizasyonu', priority: 0.9, changeFrequency: 'weekly' },
    { url: 'hizmetler/mobil-uygulama-gelistirme', priority: 0.9, changeFrequency: 'weekly' },

    // Sectors
    { url: 'sektorler/saglik-web-tasarim-ve-seo', priority: 0.8, changeFrequency: 'weekly' },
    { url: 'sektorler/emlak-gayrimenkul-dijital-pazarlama', priority: 0.8, changeFrequency: 'weekly' },
    { url: 'sektorler/hukuk-avukat-kurumsal-web-sitesi', priority: 0.8, changeFrequency: 'weekly' },
    { url: 'sektorler/restoran-kafe-dijital-menu-ve-tasarim', priority: 0.8, changeFrequency: 'weekly' },
    { url: 'sektorler/insaat-müteahhitlik-prestij-projeleri', priority: 0.8, changeFrequency: 'weekly' },
    { url: 'sektorler/otomotiv-servis-ve-galeri-yazilimlari', priority: 0.8, changeFrequency: 'weekly' },
    { url: 'sektorler/güzellik-merkezi-ve-spa-tasarim', priority: 0.8, changeFrequency: 'weekly' },
    { url: 'sektorler/danismanlik-ve-egitim-platformlari', priority: 0.8, changeFrequency: 'weekly' },

    // Blog Pillars
    { url: 'blog/2026-dijital-pazarlama-trendleri', priority: 0.7, changeFrequency: 'monthly' },
    { url: 'blog/turkiye-kibris-seo-stratejisi', priority: 0.7, changeFrequency: 'monthly' },
    { url: 'blog/yapay-zeka-ile-satis-otomasyonu', priority: 0.7, changeFrequency: 'monthly' },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}/${route.url}`.replace(/\/$/, ''),
    lastModified,
    changeFrequency: route.changeFrequency as any,
    priority: route.priority,
    ...(route.url === '' && {
      alternates: {
        languages: {
          'tr-TR': `${baseUrl}/turkiye-dijital-ajans`,
          'tr-CY': `${baseUrl}/kibris-web-tasarim`,
        },
      },
    }),
  }));
}
