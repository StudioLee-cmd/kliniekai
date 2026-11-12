export const CONSENT_VERSION = "callback-2026-11-09";
export const CONSENT_TEXT = "Ja, Tim van StudioLee mag me over deze aanvraag mailen. Ik krijg de demo per e-mail.";
export const PROMOTION_TEXT = "Stuur me ook af en toe tips en aanbiedingen per e-mail. Niet verplicht.";

export const callbackPage: { heading: string; intro: string; plans: string; opening: [string, string][] } = {
  "heading": "De terugbelagent voor klinieken",
  "intro": "Een gemiste oproep hoeft geen gemiste klant te zijn. De terugbelagent belt terug, vraagt uit wat er speelt en zet de afspraak klaar.",
  "plans": "De website is de basis. De terugbelagent, de chatbot en de marketing koppel je erbij via je pakket.",
  "opening": [
    [
      "Agent",
      "Goedemiddag, u spreekt met de digitale assistent van [bedrijfsnaam]. U belde net, maar we waren in behandeling. Waarmee kan ik u helpen?"
    ],
    [
      "Klant",
      "Ik wil informatie over een behandeling."
    ],
    [
      "Agent",
      "Dat regel ik. Ik geef geen medisch advies. Over welke behandeling gaat het en wanneer bent u bereikbaar?"
    ],
    [
      "Agent",
      "Ik plan een intake en een medewerker neemt contact met u op."
    ]
  ]
};
