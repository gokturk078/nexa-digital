export const metadata = {
    title: "Kıbrıs Web Tasarım & SEO Ajansı | Lüks Dijital Ekosistemler",
    description: "Kuzey Kıbrıs (Lefkoşa, Girne, Magusa) için özel, saniyede açılan premium web tasarım ve 1. sıra garantili kurumsal SEO hizmeti. Nexa Digital ile Kıbrıs pazarını domine edin.",
    alternates: {
        canonical: "https://nexadigital.com/kibris-web-tasarim",
    },
    openGraph: {
        title: "Kıbrıs'ın 1 Numaralı Web Tasarım & Dijital Ajansı",
        description: "Kuzey Kıbrıs'ta rakiplerinize dijitalde fark atacak, %100 dönüşüm odaklı web siteleri ve yapay zeka entegrasyonları.",
        url: "https://nexadigital.com/kibris-web-tasarim",
    }
};

import Home from '../page';

// Reusing the Home component for the local landing page
// In a full implementation, you could pass props to localise the text (e.g. "Kıbrıs'ın #1'i")
export default function KibrisPage() {
    return <Home />;
}
