import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
    kvk: string;
    btw: string;
    address: string;
    legalName: string;
} = {
    subheading: "Focus op patiëntenzorg, wij op de rest. Wij regelen uw afspraken, telefoon en marketing, zodat u kunt doen waar u goed in bent.",
    quickLinks: [
        { text: "Functies", url: "/#features" },
        { text: "Tarieven", url: "/tarieven" },
        { text: "Gratis Scan", url: "/gratis-scan" },
        { text: "Blog", url: "/blog" },
        { text: "AI Chatbot", url: "/chatbot" },
        { text: "Voice AI", url: "/voice-ai" },
        { text: "SEO", url: "/seo" },
        { text: "Social Media", url: "/social-media" },
        { text: "Reviews", url: "/reviews" },
        { text: "Review Pakket", url: "/review-pakket" }
    ],
    email: 'tim@kliniekai.nl',
    telephone: '+31612345678',
    socials: {
        instagram: 'https://www.instagram.com',
        linkedin: 'https://www.linkedin.com',
    },
    kvk: '98933353',
    btw: 'NL005362803B09',
    address: 'De Donge 9, 3448CJ, Woerden',
    legalName: 'DigitalStudioLee'
}