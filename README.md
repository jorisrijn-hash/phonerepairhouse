# Phone Repair House

Demo-website voor Phone Repair House (Katwijk aan Zee). De volledige site zit in
één bestand: `public/index.html`. De rest zijn alleen configbestanden om hem te
hosten.

## Structuur

```
phone-repair-house/        <- DIT moet de root van je repo zijn
├─ public/
│  └─ index.html           <- de volledige website
├─ server.js               <- mini Node-server (leest process.env.PORT)
├─ package.json
├─ package-lock.json
├─ Dockerfile              <- gebruikt door Railway
├─ netlify.toml            <- gebruikt door Netlify
├─ .dockerignore
├─ .gitignore
└─ README.md
```

## ⚠️ Belangrijkste oorzaak van "failed to build"

De buildbestanden (`package.json`, `Dockerfile`, `netlify.toml`) moeten in de
**root van je repository** staan, niet in een submap. Veelgemaakte fout: de map
`phone-repair-house` mee-pushen zodat alles één niveau te diep zit.

Controleer: in je GitHub-repo moet je `package.json` en `Dockerfile` direct zien
staan, zonder eerst een map te hoeven openen.

Zit het toch in een submap? Twee opties:
- Push opnieuw vanuit ín de map `phone-repair-house`, of
- Stel in het platform de "root directory" / "base directory" in op
  `phone-repair-house`:
  - Railway: Service → Settings → **Root Directory** = `phone-repair-house`
  - Netlify: Site settings → Build & deploy → **Base directory** = `phone-repair-house`

## Railway

Met de meegeleverde `Dockerfile` bouwt Railway de site automatisch.

1. Zet dit project in een GitHub-repo (let op de root, zie hierboven).
2. railway.app → **New Project → Deploy from GitHub repo** → kies de repo.
3. Railway detecteert de `Dockerfile` en bouwt de image. Niets te configureren.
   De server leest de `PORT` die Railway meegeeft.
4. Settings → **Networking** → **Generate Domain** om de site te openen.

CLI-variant (vanuit de projectmap):

```bash
npm i -g @railway/cli
railway login
railway init
railway up
```

## Netlify

Netlify host statisch. `netlify.toml` regelt alles: publiceren vanuit `public/`,
geen build-stap.

1. Netlify → **Add new site → Import from Git** → kies de repo.
2. Laat build command / publish dir leeg; `netlify.toml` vult ze in
   (publish = `public`, geen build). Klik Deploy.

Of zonder Git: sleep de **inhoud van de map `public`** naar
app.netlify.com/drop. (Bij de drag-and-drop methode upload je dus alleen de
`public`-map, niet het hele project.)

## Lokaal draaien (VS Code)

Met Node:

```bash
npm install
npm start
```

Open http://localhost:3000

Of: VS Code-extensie **Live Server**, open `public/index.html`, klik "Go Live".
De site werkt ook standalone (dubbelklik `public/index.html`); alleen de
webfonts laden via CDN.

## Blijft de build falen?

Open de **build log** op Railway/Netlify en kijk naar de regel ná
"failed to build". Die noemt de echte oorzaak (bijv. verkeerde root, ontbrekend
bestand). Met die regel is het zo op te lossen.

## Aanpassen

Alle inhoud (teksten, prijzen, openingstijden, producten, reviews) staat in de
data-objecten bovenin het `<script>`-blok van `public/index.html`
(`SERVICES`, `PRODUCTS`, `REVIEWS`, `FAQS`, en de openingstijden in
`pageContact`). Adres en telefoon staan als `WA` / `TEL` constants en in de footer.

> Prijzen, reviews, KvK-nummer en openingstijden zijn nu voorbeeldcontent.
> Vervang die door de echte gegevens voordat de site live gaat.
