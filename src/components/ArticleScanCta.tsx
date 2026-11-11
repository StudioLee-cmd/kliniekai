'use client';

import Link from 'next/link';
import { track } from '@vercel/analytics';

// One action block under every article: the free scan, the site's lead route.
// The click is counted as the custom event artikel_scan_klik, with the article's slug.
export default function ArticleScanCta({ slug }: { slug: string }) {
    return (
        <aside aria-label="Gratis scan" className="mt-12 p-6 md:p-8 rounded-2xl bg-hero-background border border-[var(--card-border)]">
            <p className="text-2xl font-bold text-[var(--foreground)] mb-3">Gratis scan van je kliniek-website</p>
            <p className="text-[var(--foreground-accent)] mb-6">
                Je krijgt een cijfer op vier onderdelen: SEO en vindbaarheid, conversie, AI-vindbaarheid en de lokale signalen op je pagina. Met de belangrijkste verbeterpunten en één verbetering die je vandaag zelf kunt doorvoeren.
            </p>
            <Link
                href="/gratis-scan"
                onClick={() => track('artikel_scan_klik', { artikel: slug })}
                className="inline-block text-black font-bold bg-primary hover:bg-primary-accent px-8 py-3 rounded-full transition-colors"
            >
                Start de gratis scan
            </Link>
            <p className="mt-3 text-sm text-[var(--foreground-accent)]">Je vult je naam, je website en je e-mailadres in.</p>
        </aside>
    );
}
