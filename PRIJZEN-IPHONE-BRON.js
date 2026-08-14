/* ============================================================
   ECHTE PRIJZEN iPHONE
   Overgenomen uit de aangeleverde prijslijst (aug 2026).
   Volgorde per model:
   [schermCompatible, schermSoftOled, schermRefurb, schermOrigineel,
    accuCompatible, accuOrigineel, laadconnector, backglass,
    cameraVoor, cameraAchterOem, cameraAchterOrigineel,
    oorspeaker, speaker, microfoon, aanuit, volume, tril,
    netwerk, waterschade, onderzoek, software, moederbord]
   null = niet aangeboden, 'aanvraag' = prijs op aanvraag
   ============================================================ */
const PRIJZEN_IPHONE={
"iPhone 17e":['aanvraag','aanvraag','aanvraag','aanvraag','aanvraag','aanvraag','aanvraag','aanvraag','aanvraag','aanvraag','aanvraag','aanvraag','aanvraag','aanvraag','aanvraag','aanvraag','aanvraag','aanvraag',49,15,25,135],
"iPhone 17 Pro Max":[199,375,525,'aanvraag',115,175,135,199,99,155,350,95,95,125,135,135,99,149,49,15,25,135],
"iPhone 17 Pro":[175,349,475,'aanvraag',115,175,135,199,115,145,350,95,95,135,135,135,99,149,49,15,25,135],
"iPhone 17":[149,249,449,'aanvraag',115,149,115,189,115,145,275,89,89,115,135,135,89,135,49,15,25,135],
"iPhone 16E":[99,149,225,'aanvraag',115,165,115,175,89,135,249,79,79,115,115,115,79,125,49,15,25,135],
"iPhone 16 Pro Max":[149,285,449,'aanvraag',99,149,115,189,99,149,369,79,79,115,115,115,79,125,49,15,25,135],
"iPhone 16 Plus":[125,199,375,'aanvraag',99,149,99,149,89,149,299,85,79,99,79,79,69,115,49,15,25,135],
"iPhone 16 Pro":[135,225,399,'aanvraag',99,149,99,175,89,149,369,89,79,99,115,115,79,115,49,15,25,135],
"iPhone 16":[115,199,299,'aanvraag',99,149,99,149,99,135,299,79,79,99,115,115,79,115,49,15,25,135],
"iPhone 15 Pro Max":[129,219,379,'aanvraag',99,149,115,175,99,139,369,79,79,115,115,115,75,115,49,15,25,135],
"iPhone 15 Plus":[119,189,275,'aanvraag',89,149,99,149,89,129,299,75,75,99,109,109,75,115,49,15,25,135],
"iPhone 15 Pro":[129,199,349,'aanvraag',89,149,99,175,99,139,379,79,79,99,115,115,79,115,35,15,25,135],
"iPhone 15":[109,179,249,'aanvraag',89,149,99,139,99,129,299,79,79,99,99,99,79,115,49,15,25,135],
"iPhone 14 Pro Max":[119,189,275,'aanvraag',89,149,99,135,89,125,325,75,75,99,99,99,75,115,49,15,25,135],
"iPhone 14 Plus":[99,169,259,'aanvraag',89,149,99,135,89,129,299,75,75,99,109,109,75,115,49,15,25,135],
"iPhone 14 Pro":[119,179,225,'aanvraag',79,149,99,135,89,129,299,75,75,99,109,109,75,115,49,15,25,135],
"iPhone 14":[89,159,199,'aanvraag',89,149,85,135,79,125,299,69,69,85,89,89,69,99,49,15,25,135],
"iPhone 13 Pro Max":[109,179,249,'aanvraag',89,129,95,135,85,149,329,75,75,95,95,95,75,99,49,15,25,135],
"iPhone 13 Pro":[109,159,249,'aanvraag',89,129,85,135,75,149,329,75,75,85,89,89,75,99,49,15,25,135],
"iPhone 13":[79,149,189,'aanvraag',79,129,79,135,69,109,299,69,69,79,89,89,69,99,49,15,25,135],
"iPhone 13 Mini":[85,149,229,'aanvraag',79,129,75,135,65,105,299,69,69,75,79,79,69,99,49,15,25,135],
"iPhone 12 Pro Max":[89,149,239,'aanvraag',79,119,79,115,69,149,289,69,69,79,85,85,69,99,49,15,25,135],
"iPhone 12 Pro":[79,139,179,'aanvraag',69,119,59,115,59,149,325,49,49,59,65,65,59,89,49,15,25,135],
"iPhone 12":[79,139,179,'aanvraag',69,119,59,115,59,109,299,49,49,59,65,65,59,89,49,15,25,135],
"iPhone 12 Mini":[79,149,189,'aanvraag',69,119,65,115,65,119,299,59,59,65,69,69,49,79,49,15,25,135],
"iPhone 11 Pro Max":[75,129,175,null,65,null,59,99,49,99,null,49,49,59,59,59,49,65,49,15,25,135],
"iPhone 11 Pro":[69,125,169,null,59,null,59,99,49,89,null,49,49,59,59,59,49,65,49,15,25,135],
"iPhone 11":[65,109,null,null,59,null,59,99,49,79,null,49,49,59,59,59,49,65,49,15,25,135],
"iPhone XS Max":[69,119,159,null,65,null,55,89,49,89,null,55,55,55,55,55,49,65,49,15,25,135],
"iPhone XR":[65,109,null,null,59,null,55,89,49,75,null,49,49,55,55,55,49,65,49,15,25,135],
"iPhone XS":[65,119,139,null,59,null,55,89,45,69,null,49,49,55,55,55,49,65,49,15,25,135],
"iPhone X":[65,105,139,null,55,null,55,89,45,65,null,49,49,55,49,49,49,65,49,15,25,135],
"iPhone SE 2022":[75,99,null,null,65,119,59,99,55,75,null,49,49,59,59,59,49,79,49,15,25,135],
"iPhone SE 2020":[65,99,null,null,55,null,55,89,45,59,null,49,49,49,55,55,49,65,49,15,25,135],
"iPhone 8 Plus":[65,95,null,null,55,null,49,79,45,55,null,45,45,49,49,49,39,55,49,15,25,135],
"iPhone 8":[59,85,null,null,49,null,45,79,39,49,null,39,39,45,45,45,39,55,49,15,25,135],
"iPhone 7 Plus":[59,85,null,null,49,null,45,null,45,55,null,39,39,45,45,45,39,49,49,15,25,135],
"iPhone 7":[49,75,null,null,45,null,45,null,35,49,null,39,39,45,45,45,35,45,49,15,25,135],
"iPhone 6S Plus":[45,65,null,null,39,null,39,null,35,39,null,39,35,35,39,39,35,45,49,15,25,135],
"iPhone 6S":[45,65,null,null,39,null,39,null,35,39,null,35,35,39,35,35,35,45,49,15,25,135]
};
/* Home Button prijzen (alleen modellen met thuisknop) */
const HOMEBUTTON_IPHONE={"iPhone 8 Plus":45,"iPhone 8":45,"iPhone 7 Plus":45,"iPhone 7":45,"iPhone 6S Plus":39,"iPhone 6S":35};
