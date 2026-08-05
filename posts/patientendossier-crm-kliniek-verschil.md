---
title: "Patiëntdossier vs CRM in een kliniek: het verschil"
excerpt: "Waarin verschilt een CRM van een patiëntdossier in een kliniek? Wat doe je waarmee, wat zijn de risico's, en hoe combineer je ze AVG-veilig in 2026."
date: "2026-04-27"
authorSlug: "tim-van-der-lee"
image: "/images/blog/patientendossier-crm-kliniek-verschil.jpg"
tags: ["CRM", "Patiëntdossier", "Kliniek Operatie"]
cluster: "automatisering"
---
## In het kort

- **Een patiëntdossier (EPD/EHR) is medisch en wettelijk verplicht.** Een CRM is operationeel en marketing-gericht. Twee verschillende doelen, twee verschillende systemen.
- **AVG/WGBO-eisen verbieden je om commerciële marketing-communicatie te baseren op medische gegevens** uit het EPD. Je hebt aparte data-stromen nodig.
- **Klinieken die deze systemen mengen lopen risico op datalekken én op tuchtklachten** als gevoelige info in marketing-systemen belandt.
- **De ideale opzet: EPD voor zorg, CRM voor klantcontact, met een geanonimiseerde verbinding ertussen.**
- **Een CRM is geen luxe.** Klinieken zonder CRM verliezen een fors deel van hun terugkerende patiënten.

## Wat is een patiëntdossier?

Het patiëntdossier (Elektronisch Patiëntendossier, EPD, of Electronic Health Record, EHR) is een wettelijk verplicht systeem voor elke kliniek die zorg verleent. Het bevat: medische geschiedenis, diagnoses, behandelingen, medicatie, allergieën, intake-gesprekken, behandelingsplannen en notities van de zorgverlener.

De inhoud is gevoelig en valt onder strenge regels: WGBO (Wet op de Geneeskundige Behandelingsovereenkomst), AVG (privacy), beroepsgeheim, en NEN 7510 (informatiebeveiliging in de zorg). Toegang is beperkt tot zorgverleners die direct bij de behandeling betrokken zijn. Patiënten hebben recht op inzage en correctie. Bewaartermijn is meestal 20 jaar.

Klinieken kiezen meestal uit gespecialiseerde EPD-leveranciers: Promedico, Pharma-Bell, MicroHIS, of branche-specifieke systemen voor cosmetische klinieken, fysiotherapie of tandheelkunde. Geen generieke CRM-systemen.

## Wat is een CRM?

Een Customer Relationship Management systeem registreert klantcontact, communicatie en marketing-relaties. Voor een kliniek bevat het: contactgegevens, afspraak-historie, marketing-campagnes, ontvangen nieuwsbrieven, terugbel-notities, no-show-status, eerdere reviews en eventueel onderhoudsabonnementen.

CRM is operationeel en marketing-gericht, niet medisch. Het beantwoordt vragen als: "Wanneer was de laatste afspraak?", "Welke patiënten hebben hun jaarlijkse follow-up nog niet ingepland?", "Wie heeft een review achtergelaten?", "Welke patiënt heeft last-minute geannuleerd?"

CRM-systemen voor klinieken: HubSpot, Pipedrive, ActiveCampaign, plus branche-specifieke varianten. Of een eigen [crm voor klinieken](/chatbot) gekoppeld aan je communicatie-flow.

## Waarom je beide nodig hebt, niet één van beide

Veel klinieken proberen één systeem te gebruiken voor beide. Dat werkt niet. Drie scenario's laten zien waarom:

**Scenario 1: alleen EPD, geen CRM.** Patiënt komt voor een eenmalige behandeling, blijft een jaar onder de radar, kliniek heeft geen contact-infrastructuur om hem terug te halen. Patiënt vergeet de kliniek, kiest een ander voor zijn volgende behandeling. Kosten: een fors verlies van terugkerende patiënten.

**Scenario 2: alleen CRM, geen EPD.** Onmogelijk in Nederland. Geen kliniek mag zorg verlenen zonder gestructureerd patiëntdossier. Niet alleen praktisch onmogelijk, ook wettelijk verboden.

**Scenario 3: één systeem voor allebei.** Sommige all-in-één pakketten beweren dit te kunnen, maar in de praktijk botsen de eisen. Een CRM-marketing-functie heeft toegang tot data die alleen voor zorg-doeleinden mocht worden gebruikt. Je hebt geen scheiding tussen zorgverleners en marketing-medewerkers. Datalekken zijn dan ernstige AVG-overtredingen.

De juiste opzet is twee gescheiden systemen met een geanonimiseerde brug ertussen.

## Hoe je ze veilig combineert

De brug tussen EPD en CRM moet aan vier voorwaarden voldoen:

**1. Pseudonimisering:** in het CRM staat geen medische info, alleen "patiënt-ID + voornaam + contact + afspraak-datum-type". Geen diagnose, geen behandeling-detail, geen medicatie. Dit is geen "anonimiseren" want de patiënt is identificeerbaar via ID, maar wel "pseudonimiseren" omdat medische info ontkoppeld is.

**2. Toegangsscheiding:** zorgmedewerkers kunnen het EPD bekijken, marketing-medewerkers kunnen het CRM bekijken. Geen overlap tenzij iemand een dubbelrol heeft (bijv praktijkmanager) en dan met aparte logins.

**3. Audit trail:** elk systeem registreert wie wat wanneer heeft bekeken. Bij een eventuele controle of klacht kun je laten zien wie toegang had tot welke data.

**4. Toestemming voor marketing:** patiënten geven aparte toestemming voor marketing-communicatie. Zonder die toestemming mag de kliniek niets sturen wat niet direct met de zorg te maken heeft (bevestigingen mogen wel; nieuwsbrieven niet).

![Ontvangstbalie van een kliniek met een tablet en notitieboek met handgeschreven planning, oranje Koningsdag-decoratie, espresso en stroopwafel](/images/blog/patientendossier-crm-kliniek-verschil-2.jpg)

## Wat doet je CRM dan precies?

Concreet wat een CRM voor een Nederlandse kliniek doet, dingen die het EPD niet zou moeten doen:

- **Afspraakherinneringen** sturen via WhatsApp, SMS of e-mail (24 uur vooraf, plus eventueel 2 uur vooraf)
- **No-show opvolging:** patiënt verschijnt niet, automatisch een vriendelijke check-up
- **Recall na 6/12/24 maanden** voor jaarlijkse controle, periodiek onderhoud, follow-up
- **Tevredenheidsmeting** na de behandeling met optionele review-aanvraag
- **Nieuwsbrief-communicatie** voor patiënten die toestemming hebben gegeven (over vernieuwingen, openingstijden, nieuwe diensten)
- **Verjaardags- of bijzondere-momenten-bericht** indien je dit als kliniek doet
- **Onderhoudsabonnement-beheer** voor klinieken die dat aanbieden (wanneer-volgende-afspraak-trigger)

Dit zijn allemaal operationele en marketing-functies. Geen ervan is zorginhoudelijk. Allemaal zonder toegang tot [medische data](/blog/beveiliging-privacy-ai) uit het EPD.

## Vier veelgemaakte fouten

### Fout 1: marketing-medewerker krijgt EPD-toegang

"Even wat patiëntgegevens uit het dossier halen voor de nieuwsbrief." Dit is een AVG-overtreding. Marketing krijgt nooit EPD-toegang. Niet voor "even snel" en niet "alleen contactgegevens want dat is technisch geen medisch."

### Fout 2: CRM toont diagnose-codes

"Het is handig om in het CRM te zien wat de patiënt heeft gehad zodat we gerichter communiceren." Nee. Dit verandert je CRM in een mini-EPD met andere bewaartermijnen, andere security-eisen en directe AVG-risico's. Hou diagnoses uit je CRM.

### Fout 3: één wachtwoord voor beide systemen

Een SSO (single sign-on) over EPD en CRM lijkt handig maar ondermijnt de toegangsscheiding. Aparte logins, aparte rechten, aparte audit-trails.

### Fout 4: geen marketing-toestemming bij intake

"We sturen onze patiënten gewoon af en toe een nieuwsbrief." Mag niet zonder expliciete opt-in. Bouw de marketing-vraag in je intake-formulier in: "Stuur me ook nieuwsbrieven en updates over [kliniek-naam]." Vink-vakje, default uitgeschakeld. Lees ook over [reviews voor klinieken](/reviews) waarvoor dezelfde toestemmings-eisen gelden.

## Wat het oplevert: de cijfers

Bij vier Nederlandse klinieken (cosmetisch, tandheelkunde, fysiotherapie, dermatologie) die we het afgelopen jaar hebben begeleid bij het invoeren van een CRM naast het bestaande EPD, zagen we gemiddeld:

- **Terugkerende patiënten:** duidelijk meer door automatische recalls
- **No-shows:** fors omlaag door geautomatiseerde herinneringen
- **Reviews per maand:** van gemiddeld 3 naar 12 (de [chatbot voor klinieken](/chatbot) helpt hierbij)
- **Werkuren bespaard voor receptie:** 8-12 uur per week
- **Nieuwsbrief-conversie naar afspraak:** reken met 12-18 procent in de eerste maand

Niet enorm individueel maar samen een serieuze omzet-stijging zonder advertentie-budget. Voor een kliniek met 1.000 actieve patiënten en een dealwaarde van 200 euro per behandeling, betekent dit ongeveer 2.000-4.000 euro extra omzet per maand. Bekijk ook onze [tarieven](/tarieven) voor een complete opzet.

## Hoe je een CRM kiest voor je kliniek

Vier criteria, in volgorde van belangrijkheid:

**1. AVG-compliance en NEN 7510:** kan de leverancier dit aantonen? Vraag om documentatie. Als je het niet krijgt of het is vaag, zoek een andere leverancier.

**2. Pseudonimisering-mogelijkheid:** kan het CRM data ontvangen vanuit je EPD zonder medische details? Dit moet automatisch via API werken zodat marketing-medewerkers nooit medische info zien.

**3. Branche-relevante functies:** afspraakherinneringen via WhatsApp en SMS, recall-trigger op behandelingsfrequentie, review-aanvraag, eventueel terugbel-functie. Generieke CRM's missen vaak deze branche-functies.

**4. Integratie met je bestaande systemen:** EPD-koppeling via API, agenda-sync, eventueel een bookingslink op je [website voor klinieken](/gratis-website). Geen losse silo's.

## Aan de slag

Een CRM invoeren naast je bestaande EPD is geen klein project, maar het is wel goed te plannen. Drie tot zes weken voor een degelijke setup, daarna draait het. Vraag een [gratis scan voor je kliniek](/gratis-scan) aan en we kijken samen welke onderdelen je nu mist en wat de impact zou zijn.

Wij regelen dit standaard voor onze kliniek-klanten, inclusief de pseudonimiseerde brug tussen EPD en CRM, branche-specifieke triggers en review-flow. Onze Groei-of-Geld-Terug Garantie geldt vanaf Managed Groei Pro: word je binnen 6 maanden niet beter zichtbaar dan bij de start, dan krijg je je geld terug. Zichtbaarheid meten we bij SEO in Ahrefs en bij video en advertenties in views.