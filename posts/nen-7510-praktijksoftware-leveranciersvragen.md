---
title: "NEN 7510 en je praktijksoftware: wat je moet vragen"
slug: nen-7510-praktijksoftware-leveranciersvragen
date: "2026-11-15"
excerpt: "NEN 7510 is de norm voor informatiebeveiliging in de zorg. Deze zes vragen stel je aan je leverancier van praktijksoftware voordat je tekent."
image: "/images/blog/nen-7510-praktijksoftware-leveranciersvragen.jpg"
authorSlug: "tim-van-der-lee"
tags: ["Software", "Veiligheid", "EPD"]
cluster: "automatisering"
---

Stel: je zit met twee leveranciers van praktijksoftware aan tafel. Allebei laten ze een logo zien en zeggen ze dezelfde zin: "Wij zijn ISO gecertificeerd." De demo ziet er goed uit, de agenda werkt, de declaratie loopt. Maar je weet niet wat die ene zin voor jouw patiëntgegevens betekent. Geldt het certificaat voor het hele bedrijf, of alleen voor het kantoor? Staat je data in Nederland, of bij een cloudpartij drie lagen verder? En wie belt jou als er iets misgaat?

Dat zijn geen vragen voor een jurist. Het zijn vragen die je als praktijkhouder zelf kunt stellen, op een A4'tje, in het tweede gesprek. De norm die erachter zit heet NEN 7510: de Nederlandse norm voor informatiebeveiliging in de zorg. Je hoeft hem niet uit je hoofd te kennen. Je moet wel weten wat hij van jou vraagt en wat je dus van je leverancier mag vragen.

In dit artikel lees je wat NEN 7510 op hoofdlijnen is, waarom "iso gecertificeerd" op zichzelf weinig zegt, en welke zes vragen je stelt voordat je tekent. Het is geen juridisch of compliance-advies: het is een werklijst voor het gesprek. De privacywet zelf (de AVG) behandelen we in een apart stuk; hier gaat het om de norm en de leverancier, van je EPD tot elke tool voor [workflow automatisering voor klinieken](https://www.kliniekai.nl/automatisering) die eromheen draait.

**In het kort:**

- NEN 7510 is de Nederlandse norm voor informatiebeveiliging in de zorg. Deel 1 is het managementsysteem, deel 2 de maatregelen.
- Volgens NEN moet je als zorgaanbieder aantoonbaar volgens NEN 7510 werken. Een certificaat is daarvoor niet verplicht, wel het bewijs.
- "ISO gecertificeerd" zegt pas iets als je de scope kent: welk bedrijfsonderdeel, welke dienst, welke locatie.
- Zes vragen dekken het gesprek: scope, hosting-locatie, sub-verwerkers, logging, incidentmelding en de verwerkersovereenkomst.
- Elke tool rond je EPD (chatbot, telefoon, CRM) is een schakel. Stel dezelfde zes vragen aan elke schakel.

## Wat NEN 7510 is, en wat niet

NEN 7510 is een norm, geen wet. Hij beschrijft een set maatregelen die zorgaanbieders en andere beheerders van gezondheidsinformatie treffen om die informatie te beschermen. Denk aan toegangsbeheer, back-ups, wie er bij welk dossier mag en wat er gebeurt als een laptop kwijtraakt.

### Deel 1 en deel 2

De norm bestaat uit twee delen. Deel 1 bevat de eisen aan het managementsysteem: hoe je informatiebeveiliging organiseert, controleert en verbetert. Het internationale equivalent daarvan is ISO 27001. Deel 2 is de Nederlandse weergave van de maatregelen uit ISO 27002, aangevuld met ISO 27799, de internationale norm voor informatiebeveiliging in de zorg.

Dat verband is de reden dat leveranciers zo graag "ISO" zeggen. Een bedrijf met ISO 27001 heeft een managementsysteem dat lijkt op wat NEN 7510 deel 1 vraagt. Maar de zorgspecifieke laag uit deel 2 zit er niet automatisch in.

### NEN 7512 en NEN 7513 ernaast

Naast NEN 7510 staan twee aanvullende normen. NEN 7512 gaat over de vertrouwensbasis voor gegevensuitwisseling: hoe twee partijen veilig gegevens delen. NEN 7513 gaat over logging, het vastleggen van wie wat doet in een elektronisch patiëntdossier. Tegen deze twee kun je niet certificeren. Een leverancier die zegt "NEN 7513 gecertificeerd" heeft dat dus niet goed verwoord; vraag wat hij bedoelt.

## Waarom 'iso gecertificeerd' nog niets zegt over jouw data

Een certificaat is een momentopname van een afgebakend stuk organisatie. Dat is waardevol, maar alleen als je weet welk stuk.

### De scope van het certificaat

Elk certificaat heeft een scope: de beschrijving van wat er wel en niet onder valt. Een softwarebedrijf kan zijn hoofdkantoor en ontwikkelafdeling laten certificeren, terwijl de hosting bij een externe partij ligt die buiten die scope valt. Of het certificaat geldt voor de ene dienst (het EPD) en niet voor de losse app die patiënten gebruiken.

Voorbeeld: een leverancier heeft twee producten, een EPD en een online boekingsmodule die later is overgenomen. Het certificaat noemt alleen het EPD. Op de website staat het logo bovenaan elke pagina, ook bij de boekingsmodule. Wie de scope niet leest, denkt dat beide producten gedekt zijn.

### Certificaat versus aantoonbaar voldoen

Volgens NEN zijn zorgaanbieders wettelijk verplicht om aantoonbaar aan NEN 7510 te voldoen. De Wabvpz verwijst via het Besluit elektronische gegevensverwerking door zorgaanbieders naar de norm. Tegelijk is een certificaat niet verplicht: je moet wel kunnen aantonen dat je volgens NEN 7510 werkt.

Voor jou als praktijkhouder betekent dat: de verantwoordelijkheid voor je patiëntgegevens ligt bij de praktijk. Je leverancier helpt je die waar te maken, maar het bewijs moet je zelf kunnen laten zien. Een certificaat van je leverancier is daar een onderdeel van, nooit het hele verhaal.

## De 6 vragen aan je leverancier

Deze zes vragen passen op één A4. Stuur ze vooraf per mail, dan krijg je ze schriftelijk terug en kun je ze naast elkaar leggen. Een goede leverancier beantwoordt ze binnen een paar werkdagen zonder omwegen.

### 1. Wat valt er precies onder het certificaat?

Vraag om het certificaat zelf, niet om het logo. Lees drie dingen: de naam van de certificerende instelling, de geldigheidsdatum en de scope-tekst. Staat het product dat jij koopt erin? Staat de hostinglocatie erin? Een certificaat dat verlopen is of een ander bedrijfsonderdeel noemt, telt voor jouw keuze niet.

### 2. Waar staan de gegevens?

Vraag in welk land en bij welke partij de servers staan, en waar de back-ups staan. Dat zijn vaak twee verschillende plekken. Vraag ook of dat contractueel vastligt of alleen "op dit moment" zo is.

### 3. Welke sub-verwerkers zitten erachter?

Bijna geen software draait volledig op eigen servers. Er zit een hostingpartij achter, een mailpartij voor herinneringen, soms een sms-dienst en een supporttool. Elk daarvan kan gegevens zien. Vraag om de volledige lijst en vraag hoe je op de hoogte wordt gebracht als die lijst verandert.

### 4. Wat wordt er gelogd, en kun jij dat inzien?

NEN 7513 gaat over het vastleggen van acties in een patiëntdossier. Vraag of je zelf kunt zien wie welk dossier heeft geopend, en hoe lang die logs bewaard blijven. Vraag ook of een medewerker van de leverancier (bijvoorbeeld support) in jouw dossiers kan kijken, en of dat ook gelogd wordt.

### 5. Hoe snel hoor je het bij een incident?

Als er bij de leverancier een datalek is, moet jij als praktijk mogelijk zelf melden. Daarvoor moet je het eerst weten. Vraag binnen hoeveel uur de leverancier jou informeert, via welk kanaal en wie jouw vaste contactpersoon is. Een antwoord als "zo snel mogelijk" is geen antwoord.

### 6. Wat staat er in de verwerkersovereenkomst?

De verwerkersovereenkomst is het document waarin de vijf antwoorden hierboven vastliggen. Vraag om het concept vóór je tekent, niet erna. Kijk of de sub-verwerkers, de hostinglocatie, de meldtermijn en de bewaartermijn erin staan. Wat niet in de overeenkomst staat, is een belofte in een gesprek.

## Zo leg je de antwoorden naast elkaar

Met twee of drie leveranciers krijg je al snel een stapel mails. Een simpel overzicht helpt.

| Vraag | Goed teken | Rood signaal |
| --- | --- | --- |
| Scope | Product en hosting genoemd | Alleen een logo |
| Hosting | Land en partij op papier | "In de cloud" |
| Sub-verwerkers | Volledige lijst | "Op aanvraag" |
| Logging | Zelf inzien | Alleen via support |
| Incident | Termijn in uren | "Zo snel mogelijk" |
| Overeenkomst | Concept vooraf | Pas na tekenen |

Tel per leverancier de rode signalen. Eén rood signaal is een vervolgvraag. Drie of meer is een reden om het gesprek opnieuw te voeren, of om verder te kijken.

## Elke tool rond je EPD is een schakel

![Elke tool rond je EPD is een schakel](/images/blog/nen-7510-praktijksoftware-leveranciersvragen-2.jpg)

De meeste praktijken stellen deze vragen alleen aan de EPD-leverancier. Maar je patiëntgegevens gaan door meer systemen. Een chatbot op je website vangt een vraag over een behandeling op. Een telefoonsysteem neemt een terugbelverzoek aan met naam en klacht. Een [crm voor klinieken](https://www.kliniekai.nl/crm) bewaart wie wanneer contact had. En een [workflow automatisering voor klinieken](https://www.kliniekai.nl/automatisering) stuurt herinneringen met naam en afspraaktijd.

Neem een praktijk met vier systemen: EPD, online agenda, website-chat en een mailtool voor herinneringen. Dat zijn vier verwerkersovereenkomsten, vier hostinglocaties en vier lijsten met sub-verwerkers. De zwakste schakel bepaalt hoe sterk de keten is.

### Wat je per schakel vastlegt

Maak per systeem één regel in je eigen overzicht:

1. Welke gegevens gaan erin (naam, telefoon, klacht, dossier)?
2. Wie is de leverancier en waar staat de data?
3. Is er een getekende verwerkersovereenkomst, met datum?
4. Wie in de praktijk is eigenaar van dit systeem?

Voor een [ai chatbot voor klinieken](https://www.kliniekai.nl/chatbot) geldt hetzelfde als voor je EPD: welke gegevens vraagt hij uit, waar komen ze terecht en hoe lang blijven ze staan? Een chatbot die alleen een terugbelverzoek opneemt, verwerkt minder dan een chatbot die een volledige intake doet. Ook dat hoort in je overzicht. Bij KliniekAI vraag je ons gewoon naar de verwerkersovereenkomst en de lijst met sub-verwerkers; dat zijn dezelfde zes vragen.

Meer over de privacywet zelf, los van de norm, lees je in [de 9 AVG-punten voor klinieken](https://www.kliniekai.nl/blog/avg-gdpr-klinieken-9-punten-2026).

## Een werkwijze in vier stappen

Voorbeeld: een fysiopraktijk met vijf behandelaars wil overstappen van EPD en tegelijk een chat op de website. De praktijkmanager trekt er twee middagen voor uit.

**Stap 1, week 1:** de zes vragen per mail naar drie EPD-leveranciers en twee chatleveranciers.

**Stap 2, week 2:** antwoorden in het overzicht zetten, rode signalen tellen, per leverancier één vervolgvraag sturen.

**Stap 3, week 3:** van de twee overgebleven kandidaten het concept van de verwerkersovereenkomst opvragen en naast de antwoorden leggen.

**Stap 4, week 4:** kiezen, tekenen en het overzicht bewaren in de map waarin je ook je eigen NEN 7510-documentatie bijhoudt.

Na vier weken heeft de praktijk niet alleen een keuze, maar ook een deel van het bewijs dat ze aantoonbaar volgens de norm werkt.

## Veelgestelde vragen

### Moet mijn praktijk NEN 7510-gecertificeerd zijn?

Volgens NEN is een certificaat niet verplicht, maar moet je wel kunnen aantonen dat je volgens NEN 7510 werkt. Wat dat voor jouw praktijk precies betekent, bespreek je met je adviseur of beroepsvereniging.

### Is ISO 27001 hetzelfde als NEN 7510?

Niet helemaal. ISO 27001 is het internationale equivalent van NEN 7510 deel 1, het managementsysteem. NEN 7510 deel 2 voegt de maatregelen uit ISO 27002 en de zorgspecifieke ISO 27799 toe.

### Mijn leverancier zegt NEN 7513-gecertificeerd te zijn. Klopt dat?

Tegen NEN 7513 kun je volgens NEN niet certificeren. Vraag wat de leverancier bedoelt: waarschijnlijk dat de logging volgens die norm is ingericht. Vraag dan hoe je die logs zelf inziet.

### Hoe vaak stel ik deze vragen opnieuw?

Eén keer per jaar en bij elke grote wijziging: een nieuwe module, een overname van de leverancier of een nieuwe hostingpartij. Een certificaat heeft een geldigheidsdatum; zet die in je agenda.

### Geldt dit ook voor een kleine chat- of belservice?

Ja. Zodra een dienst namen, telefoonnummers of klachten van patiënten verwerkt, hoort hij in je overzicht en wil je dezelfde zes antwoorden.

## Conclusie: begin bij de lijst die je al hebt

NEN 7510 klinkt als een dik document, maar het gesprek met je leverancier is klein: zes vragen, schriftelijk beantwoord, naast elkaar gelegd. "ISO gecertificeerd" is een goed begin van dat gesprek, geen eind. Vraag de scope, de hostinglocatie, de sub-verwerkers, de logging, de meldtermijn en de verwerkersovereenkomst. En stel dezelfde vragen aan elke tool die om je EPD heen draait.

Wil je weten welke systemen in jouw praktijk patiëntgegevens raken en waar de gaten zitten? Vraag een [gratis ai scan voor klinieken](https://www.kliniekai.nl/gratis-scan) aan. Je krijgt een overzicht van je huidige tools en de vragen die je per schakel nog moet stellen.
