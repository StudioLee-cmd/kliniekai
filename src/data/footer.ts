import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    services: IMenuItem[];
    general: IMenuItem[];
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
    services: [
        { text: "Chatbot voor Klinieken", url: "/chatbot" },
        { text: "Voice AI voor Klinieken", url: "/voice-ai" },
        { text: "SEO voor Klinieken", url: "/seo" },
        { text: "Social Media voor Klinieken", url: "/social-media" },
        { text: "Reviews voor Klinieken", url: "/reviews" },
        { text: "Review Pakket", url: "/review-pakket" },
        { text: "CRM voor Klinieken", url: "/crm" },
        { text: "Automatisering voor Klinieken", url: "/automatisering" },
    ],
    general: [
        { text: "Tarieven", url: "/tarieven" },
        { text: "Gratis Scan", url: "/gratis-scan" },
        { text: "Gratis Website", url: "/gratis-website" },
        { text: "Blog", url: "/blog" },
    ],
    quickLinks: [
        { text: "Chatbot voor Klinieken", url: "/chatbot" },
        { text: "Voice AI voor Klinieken", url: "/voice-ai" },
        { text: "SEO voor Klinieken", url: "/seo" },
        { text: "Social Media voor Klinieken", url: "/social-media" },
        { text: "Reviews voor Klinieken", url: "/reviews" },
        { text: "Review Pakket", url: "/review-pakket" },
        { text: "CRM voor Klinieken", url: "/crm" },
        { text: "Automatisering voor Klinieken", url: "/automatisering" },
        { text: "Tarieven", url: "/tarieven" },
        { text: "Gratis Scan", url: "/gratis-scan" },
        { text: "Gratis Website", url: "/gratis-website" },
        { text: "Blog", url: "/blog" },
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
