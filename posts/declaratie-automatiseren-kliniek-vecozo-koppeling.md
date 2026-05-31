---
title: "Declaratie automatiseren in je kliniek: VECOZO-koppeling"
slug: declaratie-automatiseren-kliniek-vecozo-koppeling
date: "2026-05-31"
excerpt: "Handmatige declaratie kost je kliniek doorgaans 15 tot 25 uur per maand. Zo bouw je een gekoppeld VECOZO-systeem dat de meeste fouten vooraf vangt."
image: "/images/blog/declaratie-automatiseren-kliniek-vecozo-koppeling.jpg"
authorSlug: "tim-van-der-lee"
tags: ["Kliniek", "Automatisering", "VECOZO", "EPD", "Administratie"]
cluster: "automatisering"
---

Een private kliniek met vier behandelaars die zelf de declaratie doet, besteedt daar doorgaans tussen de 15 en 25 uur administratie per maand aan. Niet omdat het werk per declaratie ingewikkeld is, maar omdat het zich opstapelt: invoer in het EPD, validatie van de gegevens, verzending naar VECOZO, terugkoppeling van afwijzingen, nieuwe poging, en bij elke verzekeraar nét weer een andere voorwaarde. Wie het handmatig doet, kent het patroon: de declaratie van vorige maand is nu pas helemaal afgerond.

Een goed gekoppeld declaratie-systeem corrigeert dat zonder dat de behandelaar of de administratie er aan het einde van de dag aan moet denken. Niet door alles ineens over te zetten naar één gigantisch nieuw pakket, maar door vier lagen achter elkaar te schakelen: het EPD, de validatie vooraf, de verzending naar VECOZO en de afhandeling van terugkoppeling. Dit artikel laat zien hoe die lagen eruitzien en wat je per stap meetbaar wint.

**In het kort:**

- Een vierkoppige kliniek besteedt doorgaans 15 tot 25 uur per maand aan declaratie-werk. Een gekoppeld systeem brengt dat terug naar circa 3 tot 5 uur.
- De grootste winst zit niet in snellere verzending naar VECOZO, maar in validatie vóór de verzending: 70 tot 80 procent van de afwijzingen ontstaat door velden die in de declaratie ontbreken of fout staan.
- Vier lagen schakelen achter elkaar: EPD-invoer, validatie vooraf, VECOZO-verzending en terugkoppeling-afhandeling. Pas als alle vier kloppen, daalt het afwijzingspercentage substantieel.
- Specialismen verschillen sterk in declaratie-eisen. Fysio, tandheelkunde, huidtherapie en medisch specialisten hebben elk andere prestatiecodes, vergoedingstabellen en uzovi-koppelingen.
- Meten op twee getallen: declaratie-cycle-time (gemiddeld aantal dagen tussen behandeling en betaling) en eerste-keer-goed percentage (welke kwartaal je sluit zonder herstelwerk).

## Waarom handmatige declaratie nog steeds bij 1 op de 8 klinieken voorkomt

Branche-onderzoek onder private klinieken laat zien dat ongeveer 12 procent van de Nederlandse kleinere verzekerde-zorg-klinieken de declaratie nog steeds grotendeels handmatig doet. De reden is bijna altijd dezelfde: het EPD waarmee gewerkt wordt heeft geen volwassen VECOZO-module, of de koppeling is op een eerder moment ingericht en is sindsdien niet meer onderhouden. Wat begint als "we doen het zelf wel" eindigt vaak op een administratieve druk die niemand opzettelijk heeft ontworpen. Dezelfde lasten zien we bij klinieken die [hun administratieve druk willen verlagen](/blog/administratieve-druk-verlagen) zonder direct van EPD te wisselen.

De feitelijke kost is bekend: een fout in een prestatiecode, een ontbrekende verwijzing of een verkeerde uzovi-code leidt tot een afwijzing van de declaratie. Die moet handmatig worden opgespoord, gecorrigeerd en opnieuw verzonden. Per afwijzing kost dat doorgaans 15 tot 30 minuten administratieve tijd. Bij een afwijzingspercentage van 8 tot 10 procent loopt dat hard op.

## VECOZO in 1 minuut

VECOZO is het centrale knooppunt voor het uitwisselen van declaraties tussen zorgaanbieders en zorgverzekeraars. Een EPD met VECOZO-koppeling stuurt declaraties via dat knooppunt naar de juiste verzekeraar op basis van de uzovi-code van de patiënt. De verzekeraar valideert en geeft binnen enkele dagen retour: geaccepteerd, gedeeltelijk geaccepteerd of afgewezen. De koppeling zelf is dus niet ingewikkeld. Wat de complexiteit oplevert is wat eraan voorafgaat en wat erna gebeurt.

## De vier lagen van een gekoppeld declaratie-systeem

[Workflow automatisering voor klinieken](/automatisering) bestaat in deze context uit het op elkaar afstemmen van vier achter elkaar geschakelde lagen. Geen enkele laag is op zichzelf voldoende.

### Laag 1: het EPD

Het EPD is waar de behandeling wordt vastgelegd. Voor declaratie betekent dat: prestatiecodes, behandeldatum, behandelaar, verwijzer, diagnose, eventueel DBC-traject. De kwaliteit van wat hier wordt vastgelegd, bepaalt of de declaratie überhaupt valide is. Een EPD dat de behandelaar dwingt om een verwijzing aan te koppelen voordat de behandeling wordt afgesloten, voorkomt 30 tot 40 procent van alle latere afwijzingen. De relatie tussen [patiëntendossier en CRM in een kliniek](/blog/patientendossier-crm-kliniek-verschil) bepaalt vaak hoe goed deze laag werkt: een goed gekoppeld dossier voedt automatisch de declaratie zonder dat de behandelaar er nog naar moet kijken.

### Laag 2: validatie vooraf

Hier zit de grootste verborgen winst. Een validatie-module controleert vóór verzending of alle verplichte velden kloppen, of de prestatiecode past bij het traject, of de uzovi-code matcht met de polis en of de verwijzing nog binnen de geldigheidsduur valt. De goede EPD-pakketten doen dit zelf; bij minder volwassen pakketten zit er een externe laag tussen. Klinieken die deze laag goed inrichten zien hun afwijzingspercentage zakken van 8 tot 10 procent naar onder de 3 procent.

### Laag 3: de verzending naar VECOZO

De feitelijke verzending naar VECOZO is technisch het simpelste deel. Een API-call, een batch, een statusupdate. Hier hoef je doorgaans niets aan in te richten zolang het EPD een gecertificeerde koppeling heeft. Wat wél belangrijk is: de frequentie. Dagelijks verzenden is administratief schoner dan maandelijks, omdat afwijzingen sneller terugkomen en de cash-flow van de kliniek strakker loopt.

### Laag 4: terugkoppeling-afhandeling

Het verzenden is niet het einde van het proces. Een afwijzing of gedeeltelijke acceptatie komt terug en moet worden afgehandeld: opnieuw gevalideerd, gecorrigeerd, opnieuw verzonden, en in sommige gevallen omgezet naar een [restnota die de patiënt zelf moet betalen](/blog/btw-cosmetisch-medisch-facturering-kliniek). Klinieken die de afhandeling van afwijzingen automatiseren, in plaats van het na elke kwartaalafsluiting handmatig op te lossen, winnen typisch 4 tot 8 uur per maand administratieve tijd.

![Tablet met goedgekeurde declaratie-statussen op een licht-eikenhouten kliniek-reception desk met witte tulpen en koffiekop](/images/blog/declaratie-automatiseren-kliniek-vecozo-koppeling-2.jpg)

## Hoe specialismen anders met VECOZO omgaan

Niet elke kliniek heeft hetzelfde declaratie-profiel. De vier grote categorieën verschillen op enkele essentiële punten.

**Fysio en huidtherapie** declareren doorgaans per behandeling, met een verwijzing en een prestatiecode per zitting. De verzekeraar valideert per behandeling. Hier is het belangrijkste: de verwijzing actief bewaken (geldigheidsduur, aantal behandelingen) en de prestatiecode passend kiezen.

**Tandheelkunde** werkt met UPT-codes en aanvullende vergoedingen die per polis verschillen. De cliënt declareert vaak zelf bij de verzekeraar, dus de kliniek levert een correcte factuur (uzovi-code, prestatiecodes, datum) en niet altijd een eigen VECOZO-verzending. Bij verbijzonderde tandartspraktijken (orthodontie, implantologie) loopt het deels wél via VECOZO.

**Cosmetisch werk** is grotendeels onvergoede zorg en gaat dus niet via VECOZO, maar het deel dat onder aanvullende vergoeding valt (acnétherapie, camouflage, ontharen bij medische indicatie) wél. Hier is een schone scheiding tussen "vergoed via VECOZO" en "patient betaalt zelf" administratief essentieel.

**Medisch specialisten** werken met DBC's en DOT-trajecten en hebben de zwaarste validatie-eisen. Een gecertificeerde DBC-grouper in het EPD is hier geen luxe.

## Wat je meet om te weten of het werkt

Twee getallen leggen de hele declaratie-prestatie van een kliniek bloot.

**Declaratie-cycle-time:** het gemiddeld aantal dagen tussen de behandeldatum en het moment dat de declaratie betaald is. Een gezonde private kliniek zit hier doorgaans op 18 tot 28 dagen. Boven de 40 dagen klopt er iets niet in laag 2 of laag 4.

**Eerste-keer-goed percentage:** welk percentage van de declaraties zonder afwijzing wordt betaald. Een goed ingericht systeem haalt 92 procent of hoger. Onder de 85 procent betekent dat laag 2 (validatie vooraf) te weinig vangt en je structureel herstelwerk doet.

Naast deze twee is een derde getal nuttig voor kwartaalsturing: het aandeel van de omzet dat verloren gaat aan declaraties die uiteindelijk niet betaald worden. Bij goed onderhouden VECOZO-koppelingen is dat onder de 1,5 procent.

## AVG-aandachtspunt

Declaratie-data is medische data en valt onder de strengste categorie van AVG. Een geautomatiseerde flow is alleen verantwoord als de verwerkingsbasis duidelijk is (behandelovereenkomst plus verzekeringsovereenkomst), de bewaartermijnen vastliggen en de toegangsrechten per medewerker correct zijn ingesteld in het EPD. Bij KliniekAI ondersteunen we hier het inrichten van het toegangs- en bewaarbeleid als onderdeel van de bredere automatiserings-laag, niet als losse compliance-checklist achteraf.

## Tot slot: declaratie als integraal onderdeel

Declaratie staat in veel klinieken nog steeds los van de rest van de workflow: het EPD doet het behandeldeel, de boekhouding doet de financiën en de declaratie zit ergens tussenin op een aparte administratieve eilandje. De grootste winst komt pas zichtbaar als de declaratie wordt teruggebracht naar één geïntegreerd onderdeel van de kliniek-workflow, gevoed vanuit hetzelfde [crm voor klinieken](/crm) dat ook patiëntcommunicatie en afspraakplanning aanstuurt.

<div class="container"><div class="row justify-content-center"><div class="col-lg-10 col-xl-8 mx-auto"><p class="lees-ook my-5 px-4 py-3 rounded-3 fs-6 text-dark" style="background-color: rgba(193, 255, 114, 0.18);"><strong class="text-dark">Lees ook:</strong> <a href="/blog/online-afspraken-kliniek-welk-systeem-past-bij-jou" class="text-dark fw-semibold">Online afspraken voor je kliniek: welk systeem past bij jou?</a> →</p></div></div></div>

Een declaratie-flow die de vier lagen netjes schakelt is een van de meest concrete vormen van automatisering die een private kliniek vandaag al kan opzetten. Wil je weten waar in jouw declaratie-keten de grootste tijdwinst zit en welke fouten je eerst kunt vangen? Vraag een [gratis ai scan voor klinieken](/gratis-scan) aan. We kijken samen welke laag bij jou de zwakste schakel is en wat het concreet oplevert per maand.
