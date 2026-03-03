export interface CaseStudy {
    slug: string;
    title: string;
    subtitle: string;
    category: string;
    client: string;
    year: string;
    results: {
        label: string;
        value: string;
        icon: string;
    }[];
    challenge: string;
    solution: string;
    metrics: string[];
    technologies: string[];
    image: string;
    link: string;
}

export const caseStudies: CaseStudy[] = [
    {
        slug: "noir-moda-nuans",
        title: "Moda Nüans: Lüks Deneyimi Dijitalle Birleştirmek",
        subtitle: "QR Menü ve Satış Makinesi altyapısıyla geleneksel hizmeti dijital başarı hikayesine dönüştürdük.",
        category: "Restoran & Hospitality",
        client: "Moda Nüans / Noir",
        year: "2024",
        results: [
            { label: "Rezervasyon Artışı", value: "%600", icon: "TrendingUp" },
            { label: "Yükleme Hızı", value: "0.6s", icon: "Zap" },
            { label: "Mobilde Dönüşüm", value: "%40", icon: "Smartphone" }
        ],
        challenge: "Moda Nüans, fiziksel mekanda sunduğu lüks deneyimi dijital dünyada yansıtamıyordu. Yavaş açılan web sitesi ve standart menü sistemleri müşteri kaybına yol açıyordu.",
        solution: "Nexa Digital olarak, markanın ruhunu yansıtan 'Zero-Latency' bir landing sayfası ve etkileşimli QR menü ekosistemi kurduk. AI destekli asistan ile gece gelen rezervasyon taleplerini anında karşıladık.",
        metrics: ["Lighthouse Performans Skorları 100/100", "Google Haritalar üzerinden gelen trafikte %250 artış", "Ortalama oturum süresinde %300 iyileşme"],
        technologies: ["Next.js 14", "Framer Motion", "Tailwind CSS", "Vercel Edge Computing"],
        image: "/noir-case.jpg",
        link: "https://noir-menu-alpha.vercel.app"
    },
    {
        slug: "nexa-luxe-estate",
        title: "Nexa Luxe Estate: Global Emlak Otoritesi",
        subtitle: "Çok dilli (i18n) ve SEO odaklı platform ile Kıbrıs emlak piyasasında dijital hakimiyet.",
        category: "Gayrimenkul / Real Estate",
        client: "Nexa Luxe Estate",
        year: "2023",
        results: [
            { label: "Organik Trafik", value: "10K+", icon: "Users" },
            { label: "Sıralama Artışı", value: "%300", icon: "Search" },
            { label: "Dil Seçeneği", value: "TR/EN/DE", icon: "Globe" }
        ],
        challenge: "Kıbrıs emlak piyasasındaki yoğun rekabette, birden fazla dilde ve farklı ülkelerden gelen yatırımcılara hitap edecek, otorite sahibi bir platform eksikliği vardı.",
        solution: "Google'ın çok dilli algoritmasına tam uyumlu (Hreflang), teknik SEO altyapısı mükemmel ve kullanıcıyı doğrudan 'Gayrimenkul Danışmanı'na yönlendiren bir 'Silo' mimarisi inşa ettik.",
        metrics: ["Lüks emlak aramalarında ilk sayfa hakimiyeti", "Lead acquisition (Müşteri kazanma) maliyetlerinde %40 düşüş", "Yatırımcı güven skorunda belirgin artış"],
        technologies: ["Next.js i18n", "Radix UI", "PostgreSQL", "Google Cloud Optimization"],
        image: "/luxe-case.jpg",
        link: "https://nexa-luxe.vercel.app/tr"
    },
    {
        slug: "oto-yasin",
        title: "Oto Yasin: Yerel Otoriteden Dijital Liderliğe",
        subtitle: "Lokal SEO ve Google Business optimizasyonu ile Antalya/Kaş bölgesinin en çok tercih edilen servisi.",
        category: "Otomotiv / Automotive",
        client: "Oto Yasin Garage",
        year: "2023",
        results: [
            { label: "Telefon Çağrıları", value: "3 Kat Artış", icon: "Phone" },
            { label: "Liderlik", value: "#1 Sıra", icon: "Award" },
            { label: "Müşteri Sadakati", value: "%85", icon: "Heart" }
        ],
        challenge: "Oto Yasin, Kaş bölgesinde sunduğu kaliteli servisi dijitalde duyuramıyordu. Bölgeye gelen turistler ve yeni taşınanlar için Google aramalarında görünmez durumdaydı.",
        solution: "Konum bazlı SEO (Local SEO) stratejisiyle, 'Kaş Oto Servis' gibi kritik kelimelerde zirveye yerleşildi. Temiz ve güven veren arayüz ile mobil kullanıcıların tek tuşla servise ulaşması sağlandı.",
        metrics: ["Kaş bölgesindeki otomotiv aramalarında %95 görünürlük", "Aylık 500+ doğrudan yol tarifi talebi", "Müşteri yorumlarında %100 pozitif puanlama"],
        technologies: ["Vanilla JS Performance Stack", "Schema.org LocalBusiness", "Google Maps API", "Service Worker"],
        image: "/oto-yasin-case.jpg",
        link: "https://oto-yasin.com"
    }
];
