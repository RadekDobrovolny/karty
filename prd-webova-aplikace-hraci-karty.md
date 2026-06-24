# PRD: Webová aplikace s losováním hracích karet

## 1. Shrnutí produktu

Cílem je vytvořit jednoduchou webovou aplikaci, která pracuje s balíčky hracích karet rozdělenými do několika kategorií. Uživatel na stránce vidí kategorie karet jako samostatné balíčky. Po stisknutí jednoho tlačítka se z každé kategorie náhodně vylosuje jedna karta a zobrazí se lícem nahoru.

Aplikace bude v první iteraci sloužit jako funkční prototyp. Obsah karet, názvy kategorií, texty i obrázky budou zatím ukázkové nebo náhodně vytvořené.

Technologicky půjde o čistou statickou webovou aplikaci v HTML, CSS a JavaScriptu bez frameworku.

---

## 2. Cíl V1

Vytvořit funkční prototyp webové aplikace, který umožní:

- zobrazit několik kategorií karet,
- v každé kategorii mít vlastní balíček karet,
- jedním tlačítkem náhodně vylosovat jednu kartu z každé kategorie,
- zobrazit vylosované karty lícem nahoru,
- opakovaným kliknutím provést nové losování z kompletního balíčku.

---

## 3. Rozsah první iterace

### Součástí V1 bude

- 5 kategorií karet.
- 10 karet v každé kategorii.
- Každá karta bude mít:
  - kategorii,
  - název,
  - obrázek,
  - krátký text.
- Každá kategorie bude mít vlastní vizuální styl rubu karty:
  - jednolitá barva nebo gradient.
- Na stránce bude jedno hlavní tlačítko pro losování.
- Po kliknutí na tlačítko se z každé kategorie vylosuje jedna karta.
- Losování se vždy provádí z kompletního balíčku dané kategorie.
- Stejná karta se tedy může objevit znovu v dalším kole.
- Aplikace bude responzivní pro desktop i telefon.
- Data karet budou uložená jako JavaScript objekt, případně v samostatném JSON souboru.

### Součástí V1 nebude

- Uživatelské účty.
- Ukládání historie losování.
- Editace karet přes administraci.
- Databáze.
- Backend.
- Export výsledku.
- Sdílení výsledku.
- Pokročilé animace.
- Finální reálný obsah karet.

---

## 4. Uživatelský scénář

1. Uživatel otevře webovou stránku.
2. Na stránce vidí pět balíčků karet, každý reprezentuje jednu kategorii.
3. Balíčky jsou zobrazené rubem nahoru a vizuálně se liší barvou nebo gradientem.
4. Uživatel klikne na tlačítko „Vylosovat karty“.
5. Aplikace z každé kategorie náhodně vybere jednu kartu.
6. Vybrané karty se zobrazí lícem nahoru.
7. Na líci každé karty je vidět:
   - název kategorie,
   - obrázek,
   - název karty,
   - text karty.
8. Uživatel může znovu kliknout na tlačítko.
9. Aplikace provede nové losování z kompletních balíčků, stejně jako při prvním kole.

---

## 5. Funkční požadavky

### FR1: Kategorie karet

Aplikace bude obsahovat 5 kategorií karet. Každá kategorie bude mít:

- unikátní ID,
- název,
- barvu nebo gradient pro rub karty,
- seznam 10 karet.

Příklad kategorií ve V1 může být náhodný nebo placeholderový.

---

### FR2: Karta

Každá karta bude obsahovat tato data:

- `id` – unikátní identifikátor karty,
- `categoryId` – ID kategorie,
- `title` – název karty,
- `text` – krátký text na kartě,
- `image` – cesta k obrázku nebo placeholder obrázku.

---

### FR3: Úvodní stav stránky

Po načtení stránky se zobrazí:

- nadpis aplikace,
- krátký popis,
- jedno hlavní tlačítko pro losování,
- pět balíčků karet roztříděných podle kategorií,
- každý balíček bude zobrazen rubem nahoru.

---

### FR4: Losování

Po kliknutí na tlačítko aplikace:

- projde všech 5 kategorií,
- v každé kategorii náhodně vybere jednu kartu,
- zobrazí výsledek jako sadu 5 karet lícem nahoru.

Losování se vždy provádí z plného seznamu karet v kategorii. Vylosované karty se z balíčku neodebírají.

---

### FR5: Zobrazení líce karty

Líc každé vylosované karty zobrazí:

- název kategorie,
- obrázek,
- název karty,
- text karty.

Karta by měla být vizuálně čitelná, přehledná a dostatečně velká pro použití na desktopu i mobilu.

---

### FR6: Rub karty

Rub karty bude sloužit jako vizuální reprezentace kategorie. Každá kategorie bude mít vlastní:

- barvu,
- nebo gradient.

Na rubu může být uveden název kategorie, ale není to nutné pro V1.

---

### FR7: Opakované losování

Každé nové kliknutí na tlačítko spustí nové losování od začátku.

To znamená:

- předchozí výsledek se nahradí novým,
- aplikace si nemusí pamatovat historii,
- karty se nevyčerpávají,
- stejná karta se může objevit opakovaně v různých kolech.

---

### FR8: Responzivita

Aplikace musí být použitelná:

- na desktopu,
- na tabletu,
- na telefonu.

Na desktopu mohou být karty zobrazené vedle sebe. Na telefonu se mohou skládat pod sebe nebo do užší mřížky.

---

## 6. Návrh datové struktury

Data mohou být v první iteraci uložená přímo v JavaScriptu nebo v samostatném JSON souboru.

Příklad struktury:

```js
const cardData = [
  {
    id: "material",
    name: "Materiál",
    backStyle: "linear-gradient(135deg, #f6d365, #fda085)",
    cards: [
      {
        id: "material-01",
        title: "Papír",
        text: "Lehký, dostupný a proměnlivý materiál.",
        image: "images/material-01.jpg"
      }
    ]
  },
  {
    id: "environment",
    name: "Prostředí",
    backStyle: "linear-gradient(135deg, #84fab0, #8fd3f4)",
    cards: [
      {
        id: "environment-01",
        title: "Les",
        text: "Místo plné vrstev, zvuků a skrytého života.",
        image: "images/environment-01.jpg"
      }
    ]
  }
];
```

---

## 7. Technické požadavky

Aplikace bude vytvořená pomocí:

- HTML,
- CSS,
- JavaScriptu.

Bez použití:

- frameworku,
- backendu,
- databáze,
- buildu,
- package manageru.

Doporučená struktura souborů:

```txt
project/
  index.html
  styles.css
  script.js
  cards.json
  images/
    placeholder-01.jpg
    placeholder-02.jpg
```

V první iteraci je možné data vložit přímo do `script.js`. Pokud bude cílem snazší editace obsahu, je vhodnější použít `cards.json`.

---

## 8. UX požadavky

Aplikace má působit jednoduše, hravě a přehledně.

Hlavní obrazovka má obsahovat:

- jasný název aplikace,
- krátké vysvětlení principu,
- výrazné tlačítko pro losování,
- vizuálně oddělené kategorie,
- přehledné zobrazení vylosovaných karet.

Tlačítko by mělo být dobře viditelné a snadno použitelné i na mobilu.

---

## 9. Akceptační kritéria

V1 je hotová, pokud platí:

- Na stránce je vidět 5 kategorií karet.
- Každá kategorie má 10 karet v datech.
- Každá kategorie má vlastní vizuální styl rubu.
- Po kliknutí na tlačítko se vylosuje právě jedna karta z každé kategorie.
- Výsledkem je sada 5 karet zobrazených lícem nahoru.
- Každá zobrazená karta obsahuje kategorii, obrázek, název a text.
- Opakované kliknutí provede nové losování z kompletních balíčků.
- Aplikace funguje bez backendu.
- Aplikace funguje na desktopu i telefonu.
- Projekt je možné spustit otevřením `index.html` v prohlížeči nebo přes jednoduchý lokální server.

---

## 10. Možná rozšíření po V1

Po první iteraci lze přidat:

- reálný obsah karet,
- lepší vizuální styl,
- animaci otáčení karet,
- zvuk při losování,
- možnost zamíchat balíčky,
- historii předchozích losování,
- tlačítko pro sdílení výsledku,
- export výsledku jako obrázek,
- možnost upravovat karty v jednoduchém editoru,
- více herních režimů,
- tematické sady karet.

---

## 11. Otevřené otázky pro další fázi

Před finální obsahovou verzí bude potřeba rozhodnout:

- Jaké budou skutečné názvy kategorií?
- Jaký bude finální vizuální styl aplikace?
- Budou obrázky ručně vybrané, generované, nebo placeholderové?
- Má být aplikace spíš pracovní nástroj, hra, workshopová pomůcka, nebo inspirační generátor?
- Má mít výsledek nějaký další krok, například interpretaci, zadání úkolu nebo společnou diskusi?
