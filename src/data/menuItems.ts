import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
    {
        text: "Diensten",
        url: "#",
        children: [
            { text: "Chatbot voor Klinieken", url: "/chatbot-voor-klinieken" },
            { text: "Voice AI voor Klinieken", url: "/voice-ai-voor-klinieken" },
            { text: "SEO voor Klinieken", url: "/seo-voor-klinieken" },
            { text: "Social Media voor Klinieken", url: "/social-media-voor-klinieken" },
            { text: "Reviews voor Klinieken", url: "/reviews-voor-klinieken" },
            { text: "Review Pakket", url: "/review-pakket" },
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
