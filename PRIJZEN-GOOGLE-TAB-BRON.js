/* ============================================================
   PRIJZEN GOOGLE PIXEL (aug 2026)
   [schermOrigineel, schermOEM, accu, laad, backglass, camVoor,
    camAchter, oorspeaker, speaker, micro, aanuit, volume, tril,
    netwerk, water, onderzoek, software, moederbord]
   ============================================================ */
const PRIJZEN_GOOGLE={
"Google Pixel 10 Pro XL":[299,209,99,115,155,'aanvraag','aanvraag',85,85,'aanvraag','aanvraag','aanvraag','aanvraag','aanvraag',49,15,35,135],
"Google Pixel 10 Pro":[280,155,95,115,155,'aanvraag','aanvraag',85,85,85,95,95,85,109,49,15,35,135],
"Google Pixel 10":[209,155,79,95,135,'aanvraag','aanvraag',79,79,79,85,85,79,95,49,15,35,135],
"Google Pixel 9 Pro XL":[319,209,85,85,155,135,429,75,75,79,85,85,75,85,49,15,35,135],
"Google Pixel 9 Pro":[215,129,75,79,139,125,450,75,75,75,95,79,75,75,49,15,35,135],
"Google Pixel 9a":[175,null,75,89,75,79,165,65,65,69,69,69,65,69,49,15,35,135],
"Google Pixel 9":[235,125,75,79,75,69,95,69,69,85,75,75,65,69,49,15,35,135],
"Google Pixel 8 Pro":[345,199,69,95,85,65,89,69,69,75,65,65,65,69,49,15,35,135],
"Google Pixel 8a":[179,null,75,89,85,75,75,65,65,75,69,69,65,69,49,15,35,135],
"Google Pixel 8":[215,139,75,89,85,65,85,69,69,69,65,65,65,65,49,15,35,135],
"Google Pixel 7 Pro":[329,209,69,89,69,65,95,65,65,65,65,65,65,69,49,15,35,135],
"Google Pixel 7a":[185,null,69,89,95,65,89,69,69,69,65,65,65,69,49,15,35,135],
"Google Pixel 7":[199,null,69,85,69,65,75,65,75,69,65,65,65,65,49,15,35,135],
"Google Pixel 6 Pro":[299,149,69,85,69,65,85,69,65,65,65,65,59,65,49,15,35,135],
"Google Pixel 6a":[175,null,65,75,85,65,89,65,65,65,65,65,59,65,49,15,35,135],
"Google Pixel 6":[179,null,65,75,69,65,75,65,65,65,65,65,59,69,49,15,35,135]
};

/* Vouwbare Pixels: binnen- en buitenscherm apart
   [binnenscherm, buitenscherm, accu, laad, backglass, camVoor, camAchter,
    oorspeaker, speaker, micro, aanuit, volume, tril, netwerk, water,
    onderzoek, software, moederbord] */
const PRIJZEN_GOOGLE_VOUW={
"Google Pixel 10 Pro Fold":['aanvraag',229,159,'aanvraag','aanvraag','aanvraag','aanvraag','aanvraag','aanvraag','aanvraag','aanvraag','aanvraag','aanvraag','aanvraag',49,15,35,135],
"Google Pixel 9 Pro Fold":[850,175,139,115,129,109,'aanvraag',75,75,79,99,85,75,85,49,15,35,135]
};

/* ============================================================
   PRIJZEN SAMSUNG GALAXY TAB
   [schermOrigineel, schermOEM, accu, laad, camVoor, camAchter,
    speaker, micro, aanuit, volume, tril, wifi, water, onderzoek,
    software, moederbord]
   ============================================================ */
const PRIJZEN_TAB_S={
"Galaxy Tab S9 Plus 12.4":[389,null,105,109,85,119,109,85,85,85,85,95,49,15,25,135],
"Galaxy Tab S9 11":[289,null,109,109,85,119,99,85,85,85,85,95,49,15,25,135],
"Galaxy Tab S9 FE 10.9":[249,125,89,99,85,145,109,89,79,85,85,95,49,15,25,135],
"Galaxy Tab S8 Ultra 14.6":[495,null,135,105,85,115,99,85,85,85,85,95,49,15,25,135],
"Galaxy Tab S8 Plus 12.4":[369,null,109,105,75,115,99,89,85,85,85,95,49,15,25,135],
"Galaxy Tab S8 11":[259,125,89,105,75,115,99,85,85,85,85,89,49,15,25,135],
"Galaxy Tab S7 FE 12.4":[259,135,109,99,69,105,95,85,85,85,85,89,49,15,25,135],
"Galaxy Tab S7 11":[219,129,99,99,75,115,99,85,85,85,85,89,49,15,25,135],
"Galaxy Tab S6 Lite 10.4":[179,135,95,99,69,105,99,85,85,85,85,89,49,15,25,135],
"Galaxy Tab S6 10.5":[299,null,89,95,75,115,79,79,85,85,85,89,49,15,25,135],
"Galaxy Tab S5e 10.5":[259,229,89,95,75,105,85,79,85,85,79,89,49,15,25,135],
"Galaxy Tab S4 10.5":[275,225,89,95,75,99,85,79,79,79,79,85,49,15,25,135],
"Galaxy Tab S3":[205,159,89,89,59,89,75,75,75,75,75,75,49,15,25,135],
"Galaxy Tab S2":[149,null,89,95,69,89,75,75,75,75,75,75,49,15,25,135]
};
const PRIJZEN_TAB_A={
"Galaxy Tab A11 Plus":[139,99,95,95,69,99,95,85,85,85,85,89,49,15,25,135],
"Galaxy Tab A11":[139,null,109,99,65,99,89,85,85,85,85,89,49,15,25,135],
"Galaxy Tab A9 Plus 11":[149,119,89,99,65,105,79,85,79,79,79,85,49,15,25,135],
"Galaxy Tab A9 8.7":[149,115,85,95,75,105,79,85,85,85,85,89,49,15,25,135],
"Galaxy Tab A8 10.5":[185,119,89,95,65,99,79,85,79,79,79,85,49,15,25,135],
"Galaxy Tab A7 10.4":[199,119,89,95,65,89,79,85,79,79,79,85,49,15,25,135],
"Galaxy Tab A7 Lite 8.7":[129,115,85,95,65,95,79,85,79,79,79,85,49,15,25,135],
"Galaxy Tab A 10.1 T580":'aanvraag',
"Galaxy Tab A 10.1 T510":'aanvraag',
"Galaxy Tab A T550":'aanvraag'
};

/* ============================================================
   MERKEN ZONDER GEPUBLICEERDE TARIEVEN
   Deze staan in de prijslijst zonder bedragen. We tonen ze
   eerlijk als 'prijs op aanvraag' in plaats van te gokken.
   ============================================================ */
const MODELLEN_HUAWEI=[
 "Huawei P40 Pro","Huawei P40","Huawei P40 Lite",
 "Huawei P30 Pro","Huawei P30","Huawei P30 Lite",
 "Huawei P20 Pro","Huawei P20","Huawei P20 Lite",
 "Huawei Mate 20 Pro","Huawei Mate 20 Lite","Huawei Mate 10 Pro",
 "Huawei P Smart","Huawei Nova 5T","Ander Huawei-model"
];
const MODELLEN_ONEPLUS=[
 "OnePlus 7 Pro","OnePlus 7T Pro","OnePlus 7T","OnePlus 7",
 "OnePlus 6T","OnePlus 6","OnePlus 5T","OnePlus 5","Ander OnePlus-model"
];
const MODELLEN_WATCH=[
 "Apple Watch Ultra Series 49mm",
 "Apple Watch 9 45mm","Apple Watch 9 41mm",
 "Apple Watch 8 45mm","Apple Watch 8 41mm",
 "Apple Watch 7 45mm","Apple Watch 7 41mm",
 "Apple Watch SE (2022) 44mm","Apple Watch SE (2022) 40mm",
 "Apple Watch 6 44mm","Apple Watch 6 40mm",
 "Apple Watch 5 44mm","Apple Watch 5 40mm",
 "Apple Watch 4 44mm","Apple Watch 4 40mm",
 "Apple Watch 3 42mm","Apple Watch 3 38mm",
 "Apple Watch 2 42mm","Apple Watch 2 38mm"
];
