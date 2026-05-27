/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, ValueCard, CustomizationStep } from './types';

export const ARTISAN_PRES = {
  intro: "Ciao, sono Serena — artigiana, sognatrice, e costantemente piena di resina fino ai gomiti.",
  story: "Ho seguito un corso, ho visto i colori disperdersi nel liquido per la prima volta, e da quel momento non ho più smesso. Nel mio laboratorio a pochi passi da Torino trasformo idee, colori e un po' di magia in oggetti che non esistono da nessun'altra parte.",
  character: "Sono un po' sbadata, lo ammetto, ma quando creo divento un'altra persona: ogni dettaglio conta, ogni sfumatura ha la sua ragione. Quello che mi tiene incollata al laboratorio è la magia dei colori in movimento — come si disperdono, si mescolano, si inseguono prima di solidificarsi. È quella frazione di secondo in cui tutto è ancora fluido e possibile.",
  craft: "Ogni pezzo nasce da zero, fatto a mano, e non ne esiste un altro uguale al mondo. Quello che amo di più è la parte su misura: che tu abbia in mente un colore preciso, un nome da includere, un ricordo da custodire — io ci lavoro finché non diventa esattamente quello che sognavi.",
  quote: "Perché ogni creazione merita di essere unica, proprio come chi la riceve."
};

export const VALUE_CARDS: ValueCard[] = [
  {
    icon: "🤲",
    title: "Fatto a mano",
    description: "Ogni pezzo è colato, rifinito e lucidato interamente a mano nel mio laboratorio canavesano."
  },
  {
    icon: "✨",
    title: "Pezzi unici",
    description: "La resina ha vita propria: l'effetto finale sfugge al controllo, rendendo il tuo pezzo irripetibile."
  },
  {
    icon: "🎨",
    title: "Su misura per te",
    description: "Decidi i colori, le inclusioni e il design per esprimere al meglio il tuo stile o un ricordo prezioso."
  }
];

export const CUSTOMIZATION_STEPS: CustomizationStep[] = [
  {
    step: 1,
    title: "Raccontami la tua idea",
    description: "Scrivimi, manda una foto di ispirazione o descrivi semplicemente i colori e le sfumature che sogni."
  },
  {
    step: 2,
    title: "Scelgo colori e forme",
    description: "Lavoro con cura sulla tua richiesta fino a trovare la combinazione geometrica e cromatica perfetta."
  },
  {
    step: 3,
    title: "Ricevi il tuo pezzo unico",
    description: "Spedito con imballo sicuro e curato in tutta Italia, direttamente a casa tua o di chi riceve il regalo."
  }
];

export const PRODUCTS: Product[] = [
  // Gioielli
  {
    id: "g1",
    name: "Collana Smeraldo e Oro",
    category: "Gioielli",
    description: "Collana in resina trasparente con glitter oro e pigmenti verde smeraldo.",
    longDescription: "Un ciondolo dalle sfumature profonde che cattura la luce ad ogni movimento. Realizzata con resina ad alta trasparenza con inclusioni fluttuanti di vera foglia d'oro e pigmento liquido verde smeraldo.",
    image: "./foto/prodotto1.jpg",
    dimensions: "Ciondolo: 3x3 cm, Catenina dorata: 45 cm",
    details: ["Inclusioni in foglia d'oro 24k", "Resina atossica anti-ingiallimento", "Componenti anallergiche senza nichel"]
  },
  {
    id: "g2",
    name: "Orecchini Pendenti Malachite",
    category: "Gioielli",
    description: "Orecchini artigianali in resina con sfumature malachite e pigmento perlato.",
    longDescription: "Orecchini leggeri ed elegantissimi che ricreano le striature ipnotiche della malachite naturale. Ogni pezzo viene colato a più strati per garantire profondità tridimensionale.",
    image: "./foto/prodotto2.jpg",
    dimensions: "Lunghezza: 5.5 cm compreso l'amo",
    details: ["Effetto marmo verde malachite", "Perni a cerchio in acciaio inossidabile", "Super leggeri e confortevoli"]
  },
  // Home Decor
  {
    id: "h1",
    name: "Vassoio Onde Marine",
    category: "Home Decor",
    description: "Elegante vassoio in pregiato legno e resina epossidica con effetto onde spumose.",
    longDescription: "Un salto nell'oceano direttamente nella tua zona giorno. La resina epossidica ricrea realisticamente le onde del mare e la schiuma marina che si infrange sul legno caldo.",
    image: "./foto/prodotto3.jpg",
    dimensions: "35 x 25 x 4 cm",
    details: ["Base in legno di bambù trattato", "Onde in resina multistrato 3D", "Finitura antigraffio certificata per alimenti polimerizzata"]
  },
  {
    id: "h2",
    name: "Sottobicchieri Geode Dorati",
    category: "Home Decor",
    description: "Set di 4 sottobicchieri in resina trasparente coordinata e bordi decorati in foglia d'oro.",
    longDescription: "Ispirati alle sezioni di geode naturali, questi favolosi sottobicchieri proteggono i tuoi mobili aggiungendo un accento luxury alla tavola. Rifiniti a mano con vernice acrilica metallica dorata sui bordi.",
    image: "./foto/prodotto4.jpg",
    dimensions: "Diametro circa 10 cm ciascuno",
    details: ["Set coordinato da 4 pezzi", "Bordo in foglia oro dipinto a mano", "Piedini trasparenti antiscivolo in gomma inclusi"]
  },
  // Accessori
  {
    id: "a1",
    name: "Portachiavi Lettera Personalizzato",
    category: "Accessori",
    description: "Iniziale a tua scelta con fiori secchi veri pressati e brillanti foglie dorate.",
    longDescription: "Il regalo personalizzato per eccellenza. Puoi scegliere un'iniziale dell'alfabeto custodita in una resina cristallina che protegge per sempre piccoli boccioli botanici naturali ed elementi dorati.",
    image: "./foto/prodotto5.jpg",
    dimensions: "Altezza lettera: 4 cm, Spessore: 1 cm",
    details: ["A scelta qualsiasi lettera A-Z", "Fiori naturali disidratati", "Anello e moschettone dorato ultra-resistente"]
  },
  {
    id: "a2",
    name: "Segnalibro Foglia d'Oro",
    category: "Accessori",
    description: "Segnalibro in resina fluida ultra-lucida con inserti dorati e nappa sfarzosa in seta.",
    longDescription: "Un accessorio indispensabile per gli amanti della lettura. Sottilissimo ma infrangibile, è arricchito da eleganti scaglie dorate e completato da una bellissima nappa in tessuto coordinato.",
    image: "./foto/prodotto6.jpg",
    dimensions: "14 x 2.5 cm, spessore 1.5 mm",
    details: ["Resina specchiata lucidissima", "Nappa morbida inclusa", "Infrangibile e flessibile"]
  },
  // Orologi
  {
    id: "o1",
    name: "Orologio da Parete Agata",
    category: "Orologi",
    description: "Colata di resina artistica effetto pietra agata su base legno, dettagli oro e lancette minimali.",
    longDescription: "Un orologio d'autore che unisce arte e funzionalità. La colata richiama la preziosa pietra agata naturale con venature dorate lucenti, numeri discreti dipinti ed un meccanismo completamente silenzioso.",
    image: "./foto/prodotto7.jpg",
    dimensions: "Diametro: 30 cm",
    details: ["Quadrante silenzioso a scorrimento continuo (senza ticchettio)", "Aggancio per parete rinforzato sul retro", "Texture 3D in rilievo lucida e satinata"]
  },
  {
    id: "o2",
    name: "Orologio Cosmico Smeraldo",
    category: "Orologi",
    description: "Orologio artistico da parete in verde smeraldo profondo con brillanti striature dorate.",
    longDescription: "Un'opera scultorea ipnotica. Sfumature dal verde oliva scuro al verde smeraldo medio si mescolano a scie dorate vibranti, creando un effetto cosmico che decora qualsiasi parete con estrema eleganza.",
    image: "./foto/prodotto8.jpg",
    dimensions: "Diametro: 40 cm",
    details: ["Orologio in resina su legno multistrato", "Incisioni metalliche dorate per le ore", "Funziona con 1 batteria AA (non inclusa)"]
  }
];
