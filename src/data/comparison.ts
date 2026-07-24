export interface IComparisonItem {
    role: string;
    cost: number;
    description: string;
}

export const comparisonData: IComparisonItem[] = [
    {
        role: "Praktijk Manager",
        cost: 3500,
        description: "Voor planning en administratie"
    },
    {
        role: "Marketing Bureau",
        cost: 1500,
        description: "Voor patiëntenwerving en campagnes"
    },
    {
        role: "Medisch Secretaresse",
        cost: 2800,
        description: "Voor telefoon en afspraken"
    },
    {
        role: "SEO Specialist",
        cost: 500,
        description: "Voor vindbaarheid in de regio"
    },
    {
        role: "Website Beheer",
        cost: 200,
        description: "Hosting, updates en wijzigingen"
    },
    {
        role: "Software Abonnementen",
        cost: 400,
        description: "Losse tools voor mail, planning, reviews"
    }
];

// Comparison values
export const totalTraditionalCost = 8900;
// Merk-neutrale naam: de export droeg de merknaam van een andere niche-site
// (template-kopieerlek). Alleen de NAAM is gecorrigeerd; het bedrag blijft ongewijzigd,
// want prijzen zijn een business-beslissing (RULE 5).
export const onzePrijsPerMaand = 297;
