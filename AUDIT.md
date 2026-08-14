# Phone Repair House | Flagship audit en verbeterplan

Datum: augustus 2026
Uitgevoerd op: `public/index.html` (single-file demo, hash-routing)

---

## 1. De business, zoals de site hem zou moeten verkopen

**Wat er verkocht wordt:** telefoonreparaties (scherm, batterij, laadpoort, camera, achterglas, waterschade), plus accessoires en refurbished toestellen als bijverkoop.

**Wie de klant is:** particulier uit Katwijk en omgeving met een kapot toestel, meestal met haast, meestal op een telefoon, vaak met een half kapot scherm. Daarnaast een kleinere zakelijke doelgroep.

**Het echte probleem van de klant:** niet "ik wil een reparatiebedrijf leren kennen", maar "kan dit vandaag gemaakt worden, wat kost het, en kan ik jullie vertrouwen met mijn toestel en mijn data".

**Waarom iemand voor Phone Repair House kiest:** lokaal, persoonlijk, snel, vaste prijs, binnenlopen kan. Dat zijn de troeven, en die moeten binnen drie seconden zichtbaar zijn.

**Bezwaren die iemand tegenhoudt:** te duur, "straks maken ze het erger", "ben ik mijn foto's kwijt", "loont repareren nog of moet ik een nieuwe kopen", "zijn ze open".

**Primaire conversie:** contact met koopintentie, oftewel een WhatsApp-bericht of telefoontje waarin het toestel en de klacht al bekend zijn.
**Secundaire conversies:** winkelbezoek (route/openingstijden) en het contactformulier.
**Tertiair:** webshop en refurbished.

---

## 2. De belangrijkste bevinding

**De site publiceerde bewijs dat niet bestaat.**

Aangetroffen in de code:

- `aggregateRating` in de structured data met `"ratingValue": "4.9"` en `"reviewCount": "187"`
- "10.000+ reparaties uitgevoerd"
- "Tot 12 maanden garantie" (zes keer)
- `KvK 00000000`
- zes verzonnen reviews met namen en woonplaatsen

Waarom dit zwaarder weegt dan een designfout:

1. **Google-beleid.** Reviewmarkup die niet overeenkomt met echte, zichtbare reviews is een overtreding van de richtlijnen voor gestructureerde data. Sanctie: verlies van rich results of een handmatige maatregel op het hele domein.
2. **Nederlands consumentenrecht.** Verzonnen reviews en niet-onderbouwde claims vallen onder oneerlijke handelspraktijken. De ACM handhaaft hierop, en sinds de Omnibus-richtlijn geldt een expliciete plicht om te controleren of reviews echt zijn.
3. **Een garantiebelofte is juridisch bindend.** "12 maanden garantie" op de site, terwijl de winkel iets anders hanteert, is een claim waar een klant je aan kan houden.

Voor een demo is dit te verdedigen. Maar het stond klaar om live te gaan, en dat is precies hoe zulke dingen mis gaan. **Opgelost:** alle claims zijn nu gecentraliseerd, de nep-`aggregateRating` is verwijderd en de site toont pas cijfers wanneer ze zijn ingevuld.

---

## 3. Scorecard van de uitgangssituatie

| Onderdeel | Score | Onderbouwing |
|---|---|---|
| Visueel ontwerp | 7,5 | Sterke hero, consistente kaarten, goed kleurgebruik. Iets te veel "SaaS", te weinig winkel. |
| Branding | 6,5 | Logo netjes hergebruikt en de kleurtegels zijn een echt merkelement. Maar zonder foto's van winkel en team blijft het abstract. |
| UX | 5,5 | Mooi, maar de kernvraag (kunnen jullie mijn toestel maken en wat kost het) werd nergens beantwoord. |
| Mobiele UX | 5 | Zwevende knoppen bedekten tekst, footerlinks 33px, geen vaste actiebalk. |
| Conversie | 4 | Geen prijsinzicht, geen gekwalificeerde leads, formulier deed niets. |
| Vertrouwen | 3 | Het bewijs was verzonnen. Dat is erger dan geen bewijs. |
| Copy | 7 | Nederlands, concreet, geen agencytaal. Sterk punt. |
| SEO | 6 | Titels en meta per pagina goed. Geen robots.txt, geen sitemap, geen FAQ-schema, en hash-routes indexeren niet. |
| Performance | 7 | Eén bestand, geen frameworks, geen zware afbeeldingen. Fonts blokkeren wel. |
| Toegankelijkheid | 5 | Geen skiplink, koppen sloegen niveaus over, tap-targets te klein. |
| Technische kwaliteit | 6,5 | Leesbaar en datagedreven, maar veel inline `onclick` en dode CSS. |
| Lokale beleving | 5,5 | Adres en tijden stonden er, maar pas op de contactpagina. |
| **Flagship-niveau totaal** | **5,7** | Ziet eruit als een goede site, gedraagt zich als een brochure. |

De kern: het was een **mooie brochure**, geen **verkoopmachine**.

---

## 4. De klantreis, en waar hij brak

| Fase | Vraag van de klant | Voorheen | Nu |
|---|---|---|---|
| 1 Bewustwording | "Mijn telefoon is stuk" | Hero beantwoordt dit goed | Ongewijzigd |
| 2 Ontdekking | "Kunnen ze mijn model maken?" | Alleen algemene dienstpagina's | Reparatiekiezer met merk en model |
| 3 Vertrouwen | "Zijn ze betrouwbaar?" | Verzonnen cijfers | Eerlijke claims, cijfers pas na invulling |
| 4 Prijs | "Wat kost het?" | "vanaf 39" zonder context | Richtprijs per model en klacht |
| 5 Gemak | "Hoe snel en zijn ze open?" | Alleen op contactpagina | Duur per reparatie in de uitkomst |
| 6 Actie | "Contact opnemen" | Kale WhatsApp-link | WhatsApp met vooringevuld bericht |
| 7 Bevestiging | "Wat gebeurt er nu?" | Ontbrak | Uitkomst vertelt duur, vaste prijs, binnenlopen mag |

Fase 2 tot en met 4 was een gat. Daar haakt in deze branche het merendeel af.

---

## 5. Wat is doorgevoerd

### P0, kritiek

**1. Reparatiekiezer (merk, model, klacht, richtprijs)**
Probleem: de klant kon niet achterhalen of zijn toestel te maken was of wat het kostte.
Waarom dit telt: prijsonzekerheid is bij reparatie de grootste reden om weg te klikken naar een concurrent.
Oplossing: een kiezer in drie stappen op de homepage en op een eigen pagina `/prijzen`, met richtprijs, duur en directe CTA.
Verwacht effect: het grootste enkelvoudige conversie-effect van alle wijzigingen.

**2. WhatsApp met vooringevuld bericht**
Probleem: de knop opende een leeg gesprek, dus binnenkwam "hoi", waarna drie berichten nodig waren om te weten waar het over ging.
Oplossing: het bericht bevat toestel en klacht.
Verwacht effect: minder heen en weer, hogere kans dat het gesprek doorloopt naar een reparatie.

**3. Eerlijke vertrouwensarchitectuur**
Nep-`aggregateRating` verwijderd, alle claims naar één `BEDRIJF`-object met `TE BEVESTIGEN`-markers, Google-badge toont alleen echte cijfers als ze zijn ingevuld, garantie generiek geformuleerd tot de termijn bevestigd is, KvK-placeholder weg.

**4. Vaste mobiele actiebalk**
Bellen, WhatsApp en Prijs checken onderaan het scherm. De hele reis is nu met één hand te doen. Lost ook op dat de zwevende knoppen tekst bedekten.

### P1, hoge impact

**5. SEO-fundament**: `robots.txt` en `sitemap.xml` toegevoegd (ontbraken volledig), FAQ-schema toegevoegd voor kans op rich results, `areaServed` en `makesOffer` toegevoegd aan het bedrijfsschema voor lokale zoekopdrachten.

**6. Contactformulier werkte niet.** Het toonde alleen een melding en verstuurde niets. Nu met validatie op naam en telefoon, en directe doorgifte via WhatsApp met alle ingevulde gegevens.

**7. Toegankelijkheid.** Skiplink toegevoegd, tap-targets van 33px naar 44px en meer (12 te kleine knoppen, nu nog 2 sluitkruisjes), zichtbare focusstates behouden.

---

## 6. Roadmap

### P2, premium gevoel
- **Echte foto's** van winkel, team en reparaties. Dit is de grootste resterende winst. Voorraadloze illustraties overtuigen minder dan één echte foto van de werkbank.
- **Openingsstatus live** in de header ("Nu open tot 18:00" of "Morgen open om 09:00").
- **Google Maps ingebed** op contact in plaats van een knop naar buiten.
- **Reviews vervangen** door echte Google-reviews, met bronvermelding.
- **Koppenhiërarchie** gladstrijken op `/reparaties`, `/webshop`, `/refurbished` en `/zakelijk` (h1 gevolgd door h3).
- **Fonts** lokaal hosten of preloaden, scheelt de eerste render.

### P3, later
- Echte multi-page opzet in plaats van hash-routing, zodat elke dienstpagina apart indexeert. Dit is de grootste SEO-beperking die nu overblijft.
- Formulier naar e-mail of CRM via een echte backend (Netlify Forms is hier de makkelijkste stap).
- Reparatiestatus opvragen met een referentienummer.
- Voor- en na-galerij.
- AI-chatbot in plaats van de huidige demo op trefwoorden.

---

## 7. Wat jij moet aanleveren

Zonder deze gegevens kan de site niet eerlijk live:

- [ ] Echte Google-score en aantal reviews
- [ ] Werkelijke garantietermijn per reparatietype
- [ ] KvK-nummer en eventueel btw-nummer
- [ ] Echte prijslijst (de kiezer draait nu op voorbeeldtarieven)
- [ ] Bevestigde openingstijden
- [ ] Foto's van winkel, team en reparaties
- [ ] Toestemming om echte reviews te tonen
- [ ] Bevestiging welke merken naast Apple en Samsung echt gerepareerd worden

Alles staat gebundeld bovenin het script in `public/index.html`, in het `BEDRIJF`-object en in `MERKEN` en `REPARATIES`.

---

## 8. Antwoord op de kernvraag

*Wat zou een goed bureau verbeteren voordat het deze site oplevert?*

Niet het uiterlijk. Dat was al bovengemiddeld. Een bureau zou drie dingen doen: het **verzonnen bewijs eruit halen** voordat het een juridisch probleem wordt, de **prijsvraag beantwoorden** in plaats van hem te ontwijken, en de site **bruikbaar maken met één hand** voor iemand die buiten staat met een kapot scherm.

Dat is gedaan. Wat nu nog het verschil maakt is geen code maar inhoud: echte foto's, echte prijzen, echte reviews.
