import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import SEOContent from "./SEOContent";

const niche = 'kliniek';
const nichePlural = 'klinieken';

export const metadata: Metadata = {
  title: `SEO voor ${nichePlural}: vindbaar in Google en AI | ${siteDetails.siteName}`,
  description: `SEO en online marketing voor ${nichePlural}: vindbaar in Google, Google Maps en AI-zoekmachines als ChatGPT. Blogartikelen, lokale SEO en Google Bedrijfsprofiel, vanaf ${"\u20AC"}79/maand.`,
  openGraph: {
    title: `SEO voor ${nichePlural}: vindbaar in Google en AI | ${siteDetails.siteName}`,
    description: `Wil je als ${niche} beter gevonden worden in Google en in AI-zoekmachines? ${siteDetails.siteName} regelt je SEO volledig: keyword research, content en technische optimalisatie.`,
    url: `${siteDetails.siteUrl}seo`,
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `SEO voor ${nichePlural}: vindbaar in Google en AI | ${siteDetails.siteName}`,
    description: `SEO en online marketing voor ${nichePlural}: vindbaar in Google, Google Maps en AI-zoekmachines, vanaf ${"\u20AC"}79/maand.`,
    images: ["/images/twitter-image.jpg"],
  },
  alternates: {
    canonical: `${siteDetails.siteUrl}seo`,
  },
};

export default function SEOPage() {
  return <SEOContent />;
}
