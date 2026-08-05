/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    },
    async redirects() {
        return [
            { source: '/chatbot-voor-:suffix', destination: '/chatbot', permanent: true },
            { source: '/voice-ai-voor-:suffix', destination: '/voice-ai', permanent: true },
            { source: '/reviews-voor-:suffix', destination: '/reviews', permanent: true },
            { source: '/seo-voor-:suffix', destination: '/seo', permanent: true },
            { source: '/social-media-voor-:suffix', destination: '/social-media', permanent: true },
                    { source: '/blog/cosmetische-behandelingen-mannen-35-plus-doelgroep-specialisme', destination: '/', permanent: true },
            { source: '/blog/tatoeage-verwijdering-laser-kliniek-traject-specialisme', destination: '/', permanent: true },
            { source: '/blog/skin-booster-peeling-kliniek-specialisme-toevoegen', destination: '/', permanent: true },
            { source: '/blog/haartransplantatie-haarverlies-behandeling-kliniek-specialisme', destination: '/', permanent: true },
            { source: '/blog/permanente-make-up-pmu-toevoegen-kliniek', destination: '/', permanent: true },
            { source: '/blog/acne-littekenherstel-kliniek-specialisme', destination: '/', permanent: true },
            { source: '/blog/laserontharing-groei-segment-kliniek-2026', destination: '/', permanent: true },
            { source: '/blog/robot-arts-priveeklinieken', destination: '/', permanent: true },
            { source: '/blog/social-media-voor-klinieken', destination: '/blog/social-media-klinieken-patienten', permanent: true },
            { source: '/blog/seo-kliniek-meer-patienten-google', destination: '/blog/hoe-een-kliniek-meer-patienten-trekt-via-google', permanent: true },
            { source: '/blog/lokale-vindbaarheid-kliniek-meer-patienten', destination: '/blog/hoe-een-kliniek-meer-patienten-trekt-via-google', permanent: true },
        ];
    },
};

export default nextConfig;
