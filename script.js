const buildCardImage = ({ title, category, colors, mark }) => {
  const [primary, secondary, paper] = colors;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" role="img" aria-label="${title}">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${paper}"/>
          <stop offset="1" stop-color="#ffffff"/>
        </linearGradient>
        <linearGradient id="shape" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${primary}"/>
          <stop offset="1" stop-color="${secondary}"/>
        </linearGradient>
      </defs>
      <rect width="640" height="480" fill="url(#bg)"/>
      <circle cx="108" cy="94" r="74" fill="${secondary}" opacity="0.2"/>
      <circle cx="560" cy="396" r="116" fill="${primary}" opacity="0.13"/>
      <path d="M90 336 C160 244 238 416 318 308 C392 208 470 288 548 168" fill="none" stroke="url(#shape)" stroke-width="22" stroke-linecap="round"/>
      <rect x="92" y="108" width="456" height="252" rx="28" fill="#ffffff" opacity="0.76"/>
      <circle cx="230" cy="214" r="82" fill="url(#shape)" opacity="0.92"/>
      <path d="M370 162 h96 a18 18 0 0 1 18 18 v96 a18 18 0 0 1-18 18 h-96 a18 18 0 0 1-18-18 v-96 a18 18 0 0 1 18-18z" fill="${paper}" stroke="${primary}" stroke-width="10"/>
      <text x="230" y="238" text-anchor="middle" font-family="Arial, sans-serif" font-size="94" font-weight="800" fill="#ffffff">${mark}</text>
      <text x="116" y="412" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="#20251f">${category}</text>
    </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

const makeCard = (categoryId, categoryName, palette, index, title, text, mark, image) => ({
  id: `${categoryId}-${String(index).padStart(2, "0")}`,
  categoryId,
  title,
  text,
  image:
    image ||
    buildCardImage({
      title,
      category: categoryName,
      colors: palette,
      mark,
    }),
});

const cardData = [
  {
    id: "prekreativita",
    name: "prekreativita",
    accent: "#b26a00",
    backStyle: "linear-gradient(135deg, #f6b64f, #cf6f25)",
    palette: ["#cf6f25", "#f0a63d", "#fff3d8"],
    instruction: "Nejdřív si vylosuj, jak se připravíš na tvoření.",
    cards: [
      ["Čas se zvířaty", "Nech hlavu přepnout přes péči, pozornost a jednoduchý kontakt.", "Z", "img/prekreativita/čas_se_zvířaty.png"],
      ["Časová hranice", "Dej začátku i konci jasný rámec, aby se energie neroztekla.", "H", "img/prekreativita/časová_hranice.png"],
      ["Příprava prostoru", "Uspořádej místo tak, aby první krok šel udělat bez tření.", "P", "img/prekreativita/příprava_prostoru.png"],
      ["Zapojení do kolektivu", "Nalaď se přes sdílení, reakci nebo krátký společný rituál.", "K", "img/prekreativita/zapojení_do_kolektivu.png"],
      ["Snack", "Doplň energii malou pauzou, která nepřeruší pracovní rytmus.", "S", "img/prekreativita/snack.png"],
      ["Procházka", "Rozhýbej tělo a nech myšlenky chvíli vznikat mimo stůl.", "C", "img/prekreativita/procházka.png"],
      ["Čas na záchodě", "Dopřej si obyčejnou pauzu, kde nápady často přijdou bokem.", "Z", "img/prekreativita/čas_na_záchodě.png"],
      ["Meditace", "Ztiš pozornost a sleduj první impuls bez okamžitého hodnocení.", "M", "img/prekreativita/meditace.png"],
      ["Plánování", "Rozlož práci na malé kroky, které půjdou opravdu začít.", "P", "img/prekreativita/plánování.png"],
      ["Káva", "Použij krátký rituál jako signál, že se přepínáš do tvorby.", "K", "img/prekreativita/káva.png"],
    ],
  },
  {
    id: "inspirace",
    name: "inspirace",
    accent: "#23705a",
    backStyle: "linear-gradient(135deg, #3dbb82, #2f8fb7)",
    palette: ["#23705a", "#2f8fb7", "#e3f6eb"],
    instruction: "Vezmi vylosovaný zdroj jako odrazový můstek pro nápad.",
    cards: [
      ["Barva", "Všímej si tónů, kontrastů a palety, která může vést další krok.", "B", "img/inspirace/barva.PNG"],
      ["Atmosféra", "Zachyť náladu obrazu dřív než konkrétní tvar nebo funkci.", "A", "img/inspirace/atmosféra.PNG"],
      ["Pinterest", "Použij vizuální referenci jako odrazový můstek, ne jako cíl.", "P", "img/inspirace/pinterest.PNG"],
      ["Zvířata", "Půjč si pohyb, strukturu nebo charakter z živého světa.", "Z", "img/inspirace/zvířata.PNG"],
      ["Abstrakce", "Nech význam vznikat přes tvar, rytmus, barvu a napětí.", "A", "img/inspirace/abstrakce.PNG"],
      ["Literatura", "Vezmi větu, postavu nebo motiv a převeď ho do vizuální podoby.", "L", "img/inspirace/literatura.PNG"],
      ["Příroda", "Hledej organické vrstvy, proměnu, růst a nepravidelný řád.", "P", "img/inspirace/přiroda.PNG"],
      ["Vzpomínky", "Pracuj s osobní stopou, fragmentem a posunutým detailem.", "V", "img/inspirace/vzpomínky.JPG"],
      ["Hudba", "Převeď rytmus, hlasitost nebo melodii do kompozice.", "H", "img/inspirace/hudba.PNG"],
      ["Lidé", "Všímej si gest, vztahů, výrazů a sociálních situací.", "L", "img/inspirace/lidé.PNG"],
    ],
  },
  {
    id: "misto",
    name: "místo",
    accent: "#8f3f3f",
    backStyle: "linear-gradient(135deg, #df6d62, #9f5aa8)",
    palette: ["#8f3f3f", "#9f5aa8", "#fde9e4"],
    instruction: "Přenes práci do vylosovaného místa nebo jeho atmosféry.",
    cards: [
      ["Lavička", "Zastav se na chvíli v místě, které vybízí k pozorování.", "L", "img/místa/lavička.PNG"],
      ["Kiosek", "Malé místo výměny, čekání a rychlého rozhodnutí.", "K", "img/místa/kiosek.PNG"],
      ["Hala 1", "Velký společný prostor může přinést ruch, měřítko a ozvěnu.", "H", "img/místa/hala_1.PNG"],
      ["Hala 2", "Podívej se na známé místo z jiné pozice nebo v jiném rytmu.", "H", "img/místa/hala_2.PNG"],
      ["Louka", "Otevřený prostor nechává vyniknout pohyb, horizont a volnost.", "L", "img/místa/louka.PNG"],
      ["Les", "Vrstvy, stíny a organické cesty mohou nahradit přímou strukturu.", "L", "img/místa/les.PNG"],
      ["Postel", "Místo odpočinku přináší měkkost, soukromí a zpomalení.", "P", "img/místa/postel.PNG"],
      ["Ohniště", "Souředěný bod pro kruh, teplo, vyprávění a společný čas.", "O", "img/místa/ohniště.PNG"],
      ["Houpačka", "Pracuj s návratem, pohybem tam a zpět a lehkou nejistotou.", "H", "img/místa/houpačka.PNG"],
      ["Křeslo", "Pohodlný úhel pohledu může změnit tempo i typ rozhodnutí.", "K", "img/místa/křeslo.PNG"],
      ["Chatka", "Malý uzavřený prostor nastavuje blízkost, klid a konkrétní hranice.", "C", "img/místa/chatka.PNG"],
      ["Zastávka", "Místo čekání zvýrazní přechod, směr a krátké setkání.", "Z", "img/místa/zastávka.PNG"],
    ],
  },
  {
    id: "metoda",
    name: "metoda",
    accent: "#5b5c9d",
    backStyle: "linear-gradient(135deg, #7986cb, #45a0a0)",
    palette: ["#5b5c9d", "#45a0a0", "#edf0ff"],
    instruction: "Použij vylosovaný postup jako hlavní způsob tvorby.",
    cards: [
      ["Flipy", "Použij rychlé listování, vrstvení nebo převracení variant.", "F", "img/metody/flipy.png"],
      ["Broučci", "Sleduj drobný detail a nech malé měřítko změnit pozornost.", "B", "img/metody/broučci.png"],
      ["Cizí rukou", "Nech část práce udělat jiného člověka nebo nedominantní ruku.", "C", "img/metody/cizí_rukou.jpg"],
      ["Foťák", "Zachyť výřez reality a pracuj s rámem, světlem nebo úhlem.", "F", "img/metody/foťák.png"],
      ["Dřevo", "Použij strukturu, tlak a odpor materiálu jako pracovní princip.", "D", "img/metody/dřevo.jpg"],
      ["Kytka", "Nech tvar růstu, křehkost nebo symetrii vést kompozici.", "K", "img/metody/kytka.jpg"],
      ["Uhlík", "Pracuj se stopou, tlakem, rozmazáním a škálou tmavosti.", "U", "img/metody/uhlík.jpg"],
      ["Finger painting", "Vynech nástroj a použij přímý dotek, gesto a tlak prstů.", "P", "img/metody/finger_painting.png"],
      ["Pampeliška", "Rozlož motiv na lehkost, rozptyl, semena a náhodný pohyb.", "P", "img/metody/pampeliška.jpg"],
      ["Rostlina", "Pozoruj větvení, opakování a organické odchylky.", "R", "img/metody/rostlina.png"],
      ["Zavřené oči", "Omez kontrolu zraku a nech rozhodovat paměť, hmat a intuici.", "Z", "img/metody/zavřené_oči.png"],
      ["Voda", "Zapoj tekutost, rozpíjení, proud nebo stopu po pohybu.", "V", "img/metody/voda.jpg"],
      ["Prudkost", "Udělej jeden výrazný, rychlý a těžko vratný zásah.", "!", "img/metody/prudkost.jpg"],
      ["Boty", "Vezmi stopu, chůzi nebo tělesný pohyb jako způsob tvorby.", "B", "img/metody/boty.jpg"],
    ],
  },
  {
    id: "podminky",
    name: "podmínky",
    accent: "#5f6f35",
    backStyle: "linear-gradient(135deg, #b6c654, #5e8b61)",
    palette: ["#5f6f35", "#8ba245", "#f2f6d9"],
    instruction: "Dodrž vylosované omezení po celou dobu úkolu.",
    cards: [
      ["Tři", "Omez výsledek na tři prvky, kroky nebo výrazné části.", "3", "img/podmínky/tři.png"],
      ["RGB", "Pracuj jen s červenou, zelenou a modrou nebo jejich logikou.", "R", "img/podmínky/rgb.jpg"],
      ["Sám", "Udělej tento krok bez konzultace a drž se vlastního úsudku.", "S", "img/podmínky/sám.png"],
      ["Hodiny", "Nech časový rámec určovat tempo, rozsah i dokončení.", "H", "img/podmínky/hodiny.png"],
      ["Bez černé", "Vyhni se černé a hledej kontrast jinými prostředky.", "B", "img/podmínky/bez_černé.png"],
      ["Dva", "Postav řešení na dvojici, dialogu nebo napětí mezi dvěma částmi.", "2", "img/podmínky/dva.png"],
      ["Pět", "Použij přesně pět prvků, opakování nebo rozhodnutí.", "5", "img/podmínky/pět.png"],
      ["Černobílá", "Omez se na černou, bílou a vztah světla se stínem.", "C", "img/podmínky/černobílá.jpg"],
      ["Den", "Navrhuj s vědomím jednoho dne, jeho rytmu a proměny světla.", "D", "img/podmínky/den.jpg"],
      ["Minuty", "Zkrať práci na několik minut a přijmi rychlé rozhodnutí.", "M", "img/podmínky/minuty.png"],
      ["S někým", "Přizvi dalšího člověka a nech výsledek ovlivnit spoluprací.", "N", "img/podmínky/s_někým.png"],
    ],
  },
].map((category) => ({
  ...category,
  cards: category.cards.map(([title, text, mark, image], index) =>
    makeCard(category.id, category.name, category.palette, index + 1, title, text, mark, image)
  ),
}));

const grid = document.querySelector("#card-grid");
const drawButton = document.querySelector("#draw-button");
const stageSummary = document.querySelector("#stage-summary");
const roundCounter = document.querySelector("#round-counter");

let round = 0;
let currentDraw = null;

const randomIndex = (length) => {
  if (window.crypto?.getRandomValues) {
    const values = new Uint32Array(1);
    window.crypto.getRandomValues(values);
    return Math.floor((values[0] / 2 ** 32) * length);
  }

  return Math.floor(Math.random() * length);
};

const drawCards = () =>
  cardData.map((category) => ({
    category,
    card: category.cards[randomIndex(category.cards.length)],
  }));

const drawOneCard = (category) => category.cards[randomIndex(category.cards.length)];

const renderCardBack = (category) => `
  <article class="card card-back" style="background: ${category.backStyle}" aria-label="Balíček ${category.name}">
    <div class="card-back__top">
      <p class="card-back__label">Balíček</p>
      <p class="card-back__ready">Připraveno</p>
    </div>
    <p class="card-back__count">${category.cards.length} karet</p>
  </article>
`;

const renderCardFace = ({ category, card }) => `
  <button class="card card-face is-new card-face-button" type="button" data-category-id="${category.id}" style="--accent: ${category.accent}" aria-label="Přelosovat ${category.name}: aktuálně ${card.title}">
    <div class="card-face__image-wrap">
      <img class="card-face__image" src="${card.image}" alt="Ilustrace pro kartu ${card.title}">
    </div>
    <div class="card-face__content">
      <span class="card-face__title">${card.title}</span>
      <p class="card-face__text">${card.text}</p>
    </div>
  </button>
`;

const renderCategorySlot = ({ category, card = null }) => `
  <section class="category-slot" data-category-id="${category.id}" style="--accent: ${category.accent}" aria-label="${category.name}">
    <h3 class="category-slot__title">${category.name}</h3>
    ${card ? renderCardFace({ category, card }) : renderCardBack(category)}
    <p class="category-slot__instruction">${category.instruction}</p>
  </section>
`;

const renderBoard = (drawnCards = null) => {
  grid.innerHTML = drawnCards
    ? drawnCards.map(renderCategorySlot).join("")
    : cardData.map((category) => renderCategorySlot({ category })).join("");
};

const updateSummary = (drawnCards = null) => {
  if (!drawnCards) {
    stageSummary.textContent = "Každý balíček má vlastní sadu ukázkových karet.";
    return;
  }

  const titles = drawnCards.map(({ card }) => card.title).join(", ");
  stageSummary.textContent = `Aktuální výsledek: ${titles}.`;
};

const replaceSingleCard = ({ category, card }) => {
  const categorySlot = grid.querySelector(
    `.category-slot[data-category-id="${category.id}"]`
  );
  const currentCard = categorySlot?.querySelector(".card-face-button");
  if (!currentCard) return;

  currentCard.outerHTML = renderCardFace({ category, card });
};

drawButton.addEventListener("click", () => {
  round += 1;
  currentDraw = drawCards();
  renderBoard(currentDraw);
  updateSummary(currentDraw);
  roundCounter.textContent = `Kolo ${round}`;
});

grid.addEventListener("click", (event) => {
  const selectedCard = event.target.closest(".card-face-button");
  if (!selectedCard || !currentDraw) return;

  const categoryId = selectedCard.dataset.categoryId;
  const drawIndex = currentDraw.findIndex(({ category }) => category.id === categoryId);
  if (drawIndex === -1) return;

  const { category } = currentDraw[drawIndex];
  currentDraw[drawIndex] = {
    category,
    card: drawOneCard(category),
  };

  replaceSingleCard(currentDraw[drawIndex]);
  updateSummary(currentDraw);
});

renderBoard();
updateSummary();
