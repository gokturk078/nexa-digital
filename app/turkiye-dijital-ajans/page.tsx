export const metadata = {
    title: "Türkiye Premium Dijital Ajans | Lüks Web Tasarım & SEO",
    description: "Türkiye'nin elit işletmelerine rakipsiz kurumsal web tasarım, gelişmiş SEO mimarisi (Silo) ve satış garantili AI chatbot sistemleri sunan premium dijital ajans.",
    alternates: {
        canonical: "https://wearenexa.co/turkiye-dijital-ajans",
    },
    openGraph: {
        title: "Türkiye'nin Lüks Dijital Ekosistem Mimarları",
        description: "İstanbul, Ankara, İzmir ve tüm Türkiye geneli için dönüşüm oranı maksimize edilmiş web projeleri.",
        url: "https://wearenexa.co/turkiye-dijital-ajans",
    }
};

import Home from '../page';

// Reusing the Home component for the local landing page
export default function TurkiyePage() {
    return <Home region="tr" />;
}
