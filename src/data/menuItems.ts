import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
    {
        text: "Diensten",
        url: "#",
        children: [
            { text: "Chatbot voor Klinieken", url: "/chatbot" },
            { text: "Voice AI voor Klinieken", url: "/voice-ai" },
            { text: "SEO voor Klinieken", url: "/seo" },
            { text: "Social Media voor Klinieken", url: "/social-media" },
            { text: "Reviews voor Klinieken", url: "/reviews" },
            { text: "Review Pakket", url: "/review-pakket" },
            { text: "CRM voor Klinieken", url: "/crm" },
        ]
    },
    {
        text: "Tarieven",
        url: "/tarieven"
    },
    {
        text: "Gratis Scan",
        url: "/gratis-scan"
    },
    {
        text: "Gratis Website",
        url: "/gratis-website"
    },
    {
        text: "Blog",
        url: "/blog"
    }
];
