/**
 * DB Gallery — main.js
 * Vanilla JS: datos, render, nav, tema, filtros, scroll reveal.
 * Sin frameworks ni librerías.
 */
(function () {
  "use strict";

  /* ========================================================================
     DATA — separación entre datos y presentación
     ======================================================================== */

  /** @type {{ id: string, name: string, category: string, categoryLabel: string, image: string, description: string }[]} */
  const characters = [
    {
      id: "goku",
      name: "Goku",
      category: "saiyan",
      categoryLabel: "Saiyajin",
      image: "IMG/goku_normal.webp",
      description: "El guerrero saiyajin criado en la Tierra. Protege el planeta con su espíritu de lucha y su deseo constante de superarse.",
    },
    {
      id: "vegeta",
      name: "Vegeta",
      category: "saiyan",
      categoryLabel: "Saiyajin",
      image: "IMG/vegeta_normal.webp",
      description: "Príncipe de los saiyajin. Orgullo, disciplina y rivalidad con Goku definen su camino hacia la redención.",
    },
    {
      id: "gohan",
      name: "Gohan",
      category: "saiyan",
      categoryLabel: "Saiyajin",
      image: "IMG/gohan.webp",
      description: "Hijo de Goku. Combina intelecto y un poder latente enorme que despierta cuando quienes ama están en peligro.",
    },
    {
      id: "bardock",
      name: "Bardock",
      category: "saiyan",
      categoryLabel: "Saiyajin",
      image: "IMG/Bardock_Artwork.webp",
      description: "Padre de Goku. Guerrero de élite que desafió el destino de su raza frente al imperio de Freezer.",
    },
    {
      id: "raditz",
      name: "Raditz",
      category: "saiyan",
      categoryLabel: "Saiyajin",
      image: "IMG/Raditz_artwork_Dokkan.webp",
      description: "Hermano mayor de Goku. Su llegada a la Tierra marcó el inicio de la saga saiyajin.",
    },
    {
      id: "trunks",
      name: "Trunks",
      category: "saiyan",
      categoryLabel: "Saiyajin",
      image: "IMG/Trunks_Buu_Artwork.webp",
      description: "Hijo de Vegeta y Bulma. En distintas líneas temporales es tanto un niño prodigio como un héroe del futuro.",
    },
    {
      id: "gotenks",
      name: "Gotenks",
      category: "saiyan",
      categoryLabel: "Saiyajin",
      image: "IMG/Gotenks_Artwork.webp",
      description: "Fusión de Goten y Trunks. Poder desbordante, creatividad absurda y ego a juego con su fuerza.",
    },
    {
      id: "piccolo",
      name: "Piccolo",
      category: "namekiano",
      categoryLabel: "Namekiano",
      image: "IMG/picolo_normal.webp",
      description: "Namekiano y mentor de Gohan. De enemigo a guardián, su estrategia y ki son clave en cada amenaza.",
    },
    {
      id: "nail",
      name: "Nail",
      category: "namekiano",
      categoryLabel: "Namekiano",
      image: "IMG/Nail_Artwork.webp",
      description: "El namekiano más fuerte de su aldea. Su sacrificio permitió a Piccolo alcanzar un nuevo nivel.",
    },
    {
      id: "dende",
      name: "Dende",
      category: "namekiano",
      categoryLabel: "Namekiano",
      image: "IMG/Dende_Artwork.webp",
      description: "Joven namekiano con poder curativo. Sucesor de Kami como Guardián de la Tierra.",
    },
    {
      id: "dende-sh",
      name: "Dende (Super Hero)",
      category: "namekiano",
      categoryLabel: "Namekiano",
      image: "IMG/Arte_de_Dend%253F_en_Super_Hero.webp",
      description: "El Guardián de la Tierra en la era de Super Hero, vigilando nuevas amenazas desde el Templo.",
    },
    {
      id: "krilin",
      name: "Krilin",
      category: "humano",
      categoryLabel: "Humano",
      image: "IMG/Krilin_Universo7.webp",
      description: "Mejor amigo de Goku y uno de los humanos más fuertes. Valiente, leal y siempre en la pelea.",
    },
    {
      id: "yamcha",
      name: "Yamcha",
      category: "humano",
      categoryLabel: "Humano",
      image: "IMG/Final_Yamcha.webp",
      description: "Ex bandido del desierto convertido en guerrero Z. Su espíritu sigue presente en cada torneo.",
    },
    {
      id: "tenshinhan",
      name: "Tenshinhan",
      category: "humano",
      categoryLabel: "Humano",
      image: "IMG/Tenshinhan_Universo7.webp",
      description: "Discípulo de la Escuela Grulla. Disciplina, Kikoho y un código de honor inquebrantable.",
    },
    {
      id: "roshi",
      name: "Maestro Roshi",
      category: "humano",
      categoryLabel: "Humano",
      image: "IMG/roshi.webp",
      description: "El ermitaño tortuga. Maestro del Kamehameha y mentor de generaciones de guerreros.",
    },
    {
      id: "bulma",
      name: "Bulma",
      category: "humano",
      categoryLabel: "Humano",
      image: "IMG/bulma.webp",
      description: "Genio científica de Cápsula Corporation. Sin ella, las aventuras de las Esferas del Dragón no existirían.",
    },
    {
      id: "chichi",
      name: "Chi-Chi",
      category: "humano",
      categoryLabel: "Humano",
      image: "IMG/ChiChi_DBS.webp",
      description: "Esposa de Goku y madre de Gohan y Goten. Firme, protectora y con un temple de acero.",
    },
    {
      id: "lunch",
      name: "Lunch",
      category: "humano",
      categoryLabel: "Humano",
      image: "IMG/Lunch_traje_de_sirvienta_en_el_manga.webp",
      description: "Dos personalidades en una: dulce y calmada… hasta que un estornudo lo cambia todo.",
    },
    {
      id: "mr-satan",
      name: "Mr. Satán",
      category: "humano",
      categoryLabel: "Humano",
      image: "IMG/Mr_Satan_DBSuper.webp",
      description: "Campeón del mundo a ojos del público. Su carisma —y un poco de suerte— salvaron más de una crisis.",
    },
    {
      id: "androide-13",
      name: "Androide 13",
      category: "androide",
      categoryLabel: "Androide",
      image: "IMG/Androide13normal.webp",
      description: "Androide creado por el Dr. Gero. Diseñado para eliminar a Goku a cualquier costo.",
    },
    {
      id: "androide-16",
      name: "Androide 16",
      category: "androide",
      categoryLabel: "Androide",
      image: "IMG/Androide_16.webp",
      description: "Gigante gentil con amor por la naturaleza. Su sacrificio inspiró el despertar de Gohan.",
    },
    {
      id: "androide-18",
      name: "Androide 18",
      category: "androide",
      categoryLabel: "Androide",
      image: "IMG/Androide_18_Artwork.webp",
      description: "Cíborg independiente y poderosa. De amenaza a aliada — y esposa de Krilin.",
    },
    {
      id: "androide-19",
      name: "Androide 19",
      category: "androide",
      categoryLabel: "Androide",
      image: "IMG/Android19.webp",
      description: "Androide absorbente de energía. Primera carta del Dr. Gero contra los guerreros Z.",
    },
    {
      id: "dr-gero",
      name: "Dr. Gero",
      category: "androide",
      categoryLabel: "Androide",
      image: "IMG/Dr._Gero%20nadroide%2020.webp",
      description: "Científico de la Red Ribbon. Convertido en Androide 20, obsesionado con la venganza contra Goku.",
    },
    {
      id: "cell",
      name: "Cell",
      category: "villano",
      categoryLabel: "Villano",
      image: "IMG/celula.webp",
      description: "Bioandroide perfecto. Absorbe, evoluciona y busca el combate definitivo en su propio torneo.",
    },
    {
      id: "freezer",
      name: "Freezer",
      category: "villano",
      categoryLabel: "Villano",
      image: "IMG/Freezer.webp",
      description: "Emperador del universo. Frío, calculador y con un poder que aterrorizó a razas enteras.",
    },
    {
      id: "zarbon",
      name: "Zarbon",
      category: "villano",
      categoryLabel: "Villano",
      image: "IMG/zarbon.webp",
      description: "Élite de Freezer. Elegancia engañosa y una transformación brutal cuando la pelea se complica.",
    },
    {
      id: "dodoria",
      name: "Dodoria",
      category: "villano",
      categoryLabel: "Villano",
      image: "IMG/dodoria.webp",
      description: "Secuaz brutal de Freezer. Fuerza bruta y poca paciencia con quien se interponga.",
    },
    {
      id: "ginyu",
      name: "Capitán Ginyu",
      category: "villano",
      categoryLabel: "Villano",
      image: "IMG/ginyu.webp",
      description: "Líder de las Fuerzas Especiales. Posee cuerpos ajenos y nunca pierde la pose.",
    },
    {
      id: "ginyu-force",
      name: "Fuerzas Ginyu",
      category: "villano",
      categoryLabel: "Villano",
      image: "IMG/ginyu_force.webp",
      description: "El escuadrón más temido (y teatral) del ejército de Freezer. Cada miembro con un truco único.",
    },
    {
      id: "babidi",
      name: "Babidi",
      category: "villano",
      categoryLabel: "Villano",
      image: "IMG/Babidi_Artwork.webp",
      description: "Mago que buscó despertar a Majin Buu. Manipulación y magia oscura a partes iguales.",
    },
    {
      id: "buu",
      name: "Majin Buu",
      category: "villano",
      categoryLabel: "Villano",
      image: "IMG/BuuGordo_Universo7.webp",
      description: "Entidad mágica de poder absurdo. Innocentón o destructor — según la forma que tome.",
    },
    {
      id: "beerus",
      name: "Beerus",
      category: "dios",
      categoryLabel: "Dios",
      image: "IMG/Beerus_DBS_Broly_Artwork.webp",
      description: "Dios de la Destrucción del Universo 7. Su humor decide el destino de planetas enteros.",
    },
    {
      id: "whis",
      name: "Whis",
      category: "dios",
      categoryLabel: "Dios",
      image: "IMG/Whis_DBS_Broly_Artwork.webp",
      description: "Ángel guía de Beerus. Mentor elegante, imbatible en combate y experto en cocina.",
    },
    {
      id: "zeno",
      name: "Zen-Oh",
      category: "dios",
      categoryLabel: "Dios",
      image: "IMG/Zeno_Artwork.webp",
      description: "El Rey de Todo. Apariencia infantil, autoridad absoluta sobre la existencia misma.",
    },
    {
      id: "grand-priest",
      name: "Gran Sacerdote",
      category: "dios",
      categoryLabel: "Dios",
      image: "IMG/Grand%20priest.webp",
      description: "Padre de los ángeles y mano derecha de Zen-Oh. Uno de los seres más poderosos que existen.",
    },
    {
      id: "jiren",
      name: "Jiren",
      category: "otro",
      categoryLabel: "Otro",
      image: "IMG/Jiren.webp",
      description: "Orgullo del Universo 11. Fuerza silenciosa que puso a prueba el Ultra Instinto de Goku.",
    },
    {
      id: "toppo",
      name: "Toppo",
      category: "dios",
      categoryLabel: "Dios",
      image: "IMG/Toppo.webp",
      description: "Líder de la Tropa del Orgullo. Candidato a Dios de la Destrucción con un fuerte sentido de la justicia.",
    },
    {
      id: "dispo",
      name: "Dyspo",
      category: "otro",
      categoryLabel: "Otro",
      image: "IMG/Dispo_render.webp",
      description: "Miembro de la Tropa del Orgullo. Velocidad supersónica y confianza a prueba de todo.",
    },
    {
      id: "vermouth",
      name: "Vermoud",
      category: "dios",
      categoryLabel: "Dios",
      image: "IMG/Vermoud.webp",
      description: "Dios de la Destrucción del Universo 11. Mentor de Toppo y aliado de la justicia absoluta.",
    },
    {
      id: "marcarita",
      name: "Marcarita",
      category: "dios",
      categoryLabel: "Dios",
      image: "IMG/Marcarita.webp",
      description: "Ángel del Universo 11. Guía serena de Vermoud en el Torneo del Poder.",
    },
    {
      id: "gran-kaio",
      name: "Gran Kaio",
      category: "dios",
      categoryLabel: "Dios",
      image: "IMG/Gran_kaio_sama12.webp",
      description: "Kaio Supremo del Más Allá. Entrenador legendario de almas guerreras.",
    },
    {
      id: "gran-kaio-shin",
      name: "Gran Kaio-shin",
      category: "dios",
      categoryLabel: "Dios",
      image: "IMG/Gran_Kaio-shin_Artwork.webp",
      description: "El más anciano de los Kaio-shin. Sabiduría ancestral sobre la creación del universo.",
    },
    {
      id: "shin",
      name: "Shin (Kaio-shin del Este)",
      category: "dios",
      categoryLabel: "Dios",
      image: "IMG/Shin_en_Bucchigiri_Match.webp",
      description: "Kaio-shin del Este. Aliado clave contra Babidi y Majin Buu.",
    },
    {
      id: "kaio-shin-este",
      name: "Kaio-shin del Este",
      category: "dios",
      categoryLabel: "Dios",
      image: "IMG/Kaio-shin_del_este_Artwork.webp",
      description: "Deidad creadora del cuadrante este. Vigilante de la balanza cósmica.",
    },
    {
      id: "kaio-shin-norte",
      name: "Kaio-shin del Norte",
      category: "dios",
      categoryLabel: "Dios",
      image: "IMG/Kaio-shin%20del%20norte.webp",
      description: "Kaio-shin del norte. Protector de su cuadrante antes de los eventos de Buu.",
    },
    {
      id: "kaio-shin-oeste",
      name: "Kaio-shin del Oeste",
      category: "dios",
      categoryLabel: "Dios",
      image: "IMG/Kaio-shin_del_Oeste_Dokkan.webp",
      description: "Kaio-shin occidental. Parte del consejo divino que equilibra la creación.",
    },
    {
      id: "kaio-shin-sur",
      name: "Kaio-shin del Sur",
      category: "dios",
      categoryLabel: "Dios",
      image: "IMG/Kaio-shin_del_Sur_Dokkan.webp",
      description: "Kaio-shin del sur. Guerrero divino conocido por su fuerza entre los Kaio-shin.",
    },
    {
      id: "kibito",
      name: "Kibito",
      category: "dios",
      categoryLabel: "Dios",
      image: "IMG/Kibito_Artwork.webp",
      description: "Asistente de Shin. Poder de teletransporte y sanación al servicio de los Kaio-shin.",
    },
    {
      id: "kibito-shin",
      name: "Kibito Kai",
      category: "dios",
      categoryLabel: "Dios",
      image: "IMG/Kibito_shin_Artwork.webp",
      description: "Fusión de Shin y Kibito. Combina sabiduría divina con mayor poder de combate.",
    },
    {
      id: "kaio-este",
      name: "Kaio del Este",
      category: "dios",
      categoryLabel: "Dios",
      image: "IMG/kaio%20del%20este.webp",
      description: "Kaio encargado del este de la galaxia. Parte de la jerarquía del Más Allá.",
    },
    {
      id: "kaio-oeste",
      name: "Kaio del Oeste",
      category: "dios",
      categoryLabel: "Dios",
      image: "IMG/Kaio%20del%20oeste.webp",
      description: "Kaio del oeste. Supervisa su región del universo desde el planeta Kaio.",
    },
    {
      id: "kaio-norte",
      name: "Kaio del Norte",
      category: "dios",
      categoryLabel: "Dios",
      image: "IMG/Kaio_del_Norte.webp",
      description: "El Kaio más conocido: mentor de Goku en el Más Allá y maestro del Kaioken.",
    },
    {
      id: "kaio-sur",
      name: "Kaio del Sur",
      category: "dios",
      categoryLabel: "Dios",
      image: "IMG/Kaio_del_sur_cuerpo_completo.webp",
      description: "Kaio del sur. Imponente figura entre los cuatro Kaio regionales.",
    },
    {
      id: "dokkan-14",
      name: "Arte Dokkan I",
      category: "otro",
      categoryLabel: "Otro",
      image: "IMG/14Dokkan.webp",
      description: "Ilustración especial de la colección Dokkan. Pieza visual para la galería de portafolio.",
    },
    {
      id: "dokkan-15",
      name: "Arte Dokkan II",
      category: "otro",
      categoryLabel: "Otro",
      image: "IMG/15Dokkan.webp",
      description: "Artwork promocional Dokkan. Demuestra el manejo de assets y layout en cards.",
    },
    {
      id: "dokkan-17",
      name: "Arte Dokkan III",
      category: "otro",
      categoryLabel: "Otro",
      image: "IMG/17_Artwork.webp",
      description: "Tercera pieza de arte Dokkan de la colección. Enfoque en composición y contraste.",
    },
    {
      id: "kaio-shin-este-alt",
      name: "Kaio-shin del Este (alt)",
      category: "dios",
      categoryLabel: "Dios",
      image: "IMG/kaio-shin%20del%20este.webp",
      description: "Variante visual del Kaio-shin del Este. Misma deidad, distinto arte de referencia.",
    },
  ];

  /** Categorías disponibles para los chips de filtro */
  const categories = [
    { value: "all", label: "Todos" },
    { value: "saiyan", label: "Saiyajin" },
    { value: "humano", label: "Humano" },
    { value: "androide", label: "Androide" },
    { value: "villano", label: "Villano" },
    { value: "dios", label: "Dios" },
    { value: "namekiano", label: "Namekiano" },
    { value: "otro", label: "Otro" },
  ];

  /* ========================================================================
     STATE
     ======================================================================== */

  const PAGE_SIZE_KEY = "db-gallery-page-size";
  const PAGE_SIZE_OPTIONS = [5, 10, 12, 20, 24];

  const state = {
    query: "",
    category: "all",
    page: 1,
    pageSize: 12,
    revealObserver: null,
  };

  /**
   * @returns {number}
   */
  function getStoredPageSize() {
    const stored = Number(localStorage.getItem(PAGE_SIZE_KEY));
    return PAGE_SIZE_OPTIONS.includes(stored) ? stored : 12;
  }

  /* ========================================================================
     RENDER
     ======================================================================== */

  /**
   * Crea un artículo .card a partir de un objeto personaje.
   * @param {typeof characters[number]} character
   * @returns {HTMLElement}
   */
  function createCard(character) {
    const article = document.createElement("article");
    article.className = "card";
    article.dataset.category = character.category;
    article.dataset.id = character.id;
    article.dataset.reveal = "";
    article.setAttribute("aria-label", character.name);

    const media = document.createElement("div");
    media.className = "card__media";

    const img = document.createElement("img");
    img.className = "card__image";
    img.src = character.image;
    img.alt = character.name;
    img.loading = "lazy";
    img.decoding = "async";

    media.appendChild(img);

    const body = document.createElement("div");
    body.className = "card__body";

    const cat = document.createElement("span");
    cat.className = "card__category";
    cat.textContent = character.categoryLabel;

    const title = document.createElement("h3");
    title.className = "card__title";
    title.textContent = character.name;

    const text = document.createElement("p");
    text.className = "card__text";
    text.textContent = character.description;

    body.append(cat, title, text);
    article.append(media, body);

    return article;
  }

  /**
   * Renderiza la lista de cards en el contenedor.
   * @param {typeof characters} list
   * @param {HTMLElement} container
   */
  function renderCards(list, container) {
    const fragment = document.createDocumentFragment();
    list.forEach(function (character) {
      fragment.appendChild(createCard(character));
    });
    container.replaceChildren(fragment);
  }

  /**
   * Renderiza los chips de categoría.
   * @param {HTMLElement} container
   */
  function renderCategoryChips(container) {
    const fragment = document.createDocumentFragment();

    categories.forEach(function (cat) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip" + (cat.value === state.category ? " chip--active" : "");
      btn.dataset.category = cat.value;
      btn.textContent = cat.label;
      btn.setAttribute("aria-pressed", String(cat.value === state.category));
      fragment.appendChild(btn);
    });

    container.replaceChildren(fragment);
  }

  /* ========================================================================
     FILTER + PAGINATION
     ======================================================================== */

  /**
   * Función pura: ¿el personaje coincide con query y categoría?
   * @param {typeof characters[number]} item
   * @param {string} query
   * @param {string} category
   * @returns {boolean}
   */
  function matchesQuery(item, query, category) {
    const byCategory = category === "all" || item.category === category;
    if (!byCategory) return false;

    const q = query.trim().toLowerCase();
    if (!q) return true;

    return (
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.categoryLabel.toLowerCase().includes(q)
    );
  }

  /**
   * @returns {typeof characters}
   */
  function getFilteredCharacters() {
    return characters.filter(function (item) {
      return matchesQuery(item, state.query, state.category);
    });
  }

  /**
   * Genera números de página con elipsis (ej. 1 … 4 5 6 … 12).
   * @param {number} current
   * @param {number} total
   * @returns {(number|string)[]}
   */
  function getPageNumbers(current, total) {
    if (total <= 7) {
      return Array.from({ length: total }, function (_, i) {
        return i + 1;
      });
    }

    const pages = [];
    const showLeft = current > 3;
    const showRight = current < total - 2;

    pages.push(1);

    if (showLeft) pages.push("…");

    const start = Math.max(2, current - 1);
    const end = Math.min(total - 1, current + 1);

    for (let i = start; i <= end; i += 1) {
      pages.push(i);
    }

    if (showRight) pages.push("…");

    pages.push(total);
    return pages;
  }

  /**
   * Actualiza el texto de estado (conteo + rango de página).
   * @param {number} total
   * @param {number} from
   * @param {number} to
   * @param {number} totalPages
   */
  function updateStatus(total, from, to, totalPages) {
    const status = document.getElementById("gallery-status");
    if (!status) return;

    if (total === 0) {
      status.textContent = "No se encontraron personajes con esos criterios.";
      return;
    }

    status.textContent =
      "Mostrando " +
      from +
      "–" +
      to +
      " de " +
      total +
      " · Página " +
      state.page +
      " de " +
      totalPages;
  }

  /**
   * Renderiza controles de paginación.
   * @param {number} totalPages
   */
  function renderPagination(totalPages) {
    const nav = document.getElementById("pagination");
    if (!nav) return;

    if (totalPages <= 1) {
      nav.replaceChildren();
      return;
    }

    const fragment = document.createDocumentFragment();

    const prev = document.createElement("button");
    prev.type = "button";
    prev.className = "pagination__btn";
    prev.dataset.page = String(state.page - 1);
    prev.textContent = "Anterior";
    prev.setAttribute("aria-label", "Página anterior");
    prev.disabled = state.page <= 1;
    fragment.appendChild(prev);

    const pagesWrap = document.createElement("div");
    pagesWrap.className = "pagination__pages";

    getPageNumbers(state.page, totalPages).forEach(function (item) {
      if (item === "…") {
        const dots = document.createElement("span");
        dots.className = "pagination__ellipsis";
        dots.setAttribute("aria-hidden", "true");
        dots.textContent = "…";
        pagesWrap.appendChild(dots);
        return;
      }

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "pagination__btn";
      btn.dataset.page = String(item);
      btn.textContent = String(item);
      btn.setAttribute("aria-label", "Ir a la página " + item);

      if (item === state.page) {
        btn.setAttribute("aria-current", "page");
      }

      pagesWrap.appendChild(btn);
    });

    fragment.appendChild(pagesWrap);

    const next = document.createElement("button");
    next.type = "button";
    next.className = "pagination__btn";
    next.dataset.page = String(state.page + 1);
    next.textContent = "Siguiente";
    next.setAttribute("aria-label", "Página siguiente");
    next.disabled = state.page >= totalPages;
    fragment.appendChild(next);

    nav.replaceChildren(fragment);
  }

  /**
   * Filtra, pagina, renderiza cards y controles.
   * @param {{ resetPage?: boolean }} [options]
   */
  function updateGallery(options) {
    const resetPage = options && options.resetPage;
    if (resetPage) state.page = 1;

    const grid = document.getElementById("gallery-grid");
    if (!grid) return;

    const filtered = getFilteredCharacters();
    const total = filtered.length;
    const totalPages = Math.max(1, Math.ceil(total / state.pageSize) || 1);

    if (state.page > totalPages) state.page = totalPages;
    if (state.page < 1) state.page = 1;

    const start = (state.page - 1) * state.pageSize;
    const pageItems = filtered.slice(start, start + state.pageSize);
    const from = total === 0 ? 0 : start + 1;
    const to = start + pageItems.length;

    renderCards(pageItems, grid);
    updateStatus(total, from, to, totalPages);
    renderPagination(totalPages);
    initScrollReveal();
  }

  /**
   * Inicializa búsqueda, chips, tamaño de página y paginación.
   */
  function initFilters() {
    const searchInput = document.getElementById("search-input");
    const chipsContainer = document.getElementById("category-filters");
    const pageSizeSelect = document.getElementById("page-size");
    const pagination = document.getElementById("pagination");

    if (!searchInput || !chipsContainer || !pageSizeSelect || !pagination) return;

    state.pageSize = getStoredPageSize();
    pageSizeSelect.value = String(state.pageSize);

    renderCategoryChips(chipsContainer);

    searchInput.addEventListener("input", function () {
      state.query = searchInput.value;
      updateGallery({ resetPage: true });
    });

    chipsContainer.addEventListener("click", function (event) {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const chip = target.closest(".chip");
      if (!chip || !chipsContainer.contains(chip)) return;

      const value = chip.dataset.category;
      if (!value) return;

      state.category = value;

      chipsContainer.querySelectorAll(".chip").forEach(function (el) {
        const active = el.dataset.category === value;
        el.classList.toggle("chip--active", active);
        el.setAttribute("aria-pressed", String(active));
      });

      updateGallery({ resetPage: true });
    });

    pageSizeSelect.addEventListener("change", function () {
      const size = Number(pageSizeSelect.value);
      if (!PAGE_SIZE_OPTIONS.includes(size)) return;

      state.pageSize = size;
      localStorage.setItem(PAGE_SIZE_KEY, String(size));
      updateGallery({ resetPage: true });
    });

    pagination.addEventListener("click", function (event) {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const btn = target.closest(".pagination__btn");
      if (!btn || !pagination.contains(btn) || btn.disabled) return;
      if (btn.getAttribute("aria-current") === "page") return;

      const page = Number(btn.dataset.page);
      if (!page || page === state.page) return;

      state.page = page;
      updateGallery();

      const gallery = document.getElementById("galeria");
      if (gallery) {
        gallery.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
      }
    });

    updateGallery();
  }

  /* ========================================================================
     THEME
     ======================================================================== */

  /**
   * @returns {"light" | "dark"}
   */
  function getPreferredTheme() {
    const stored = localStorage.getItem("db-gallery-theme");
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  /**
   * @param {"light" | "dark"} theme
   */
  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("db-gallery-theme", theme);

    const toggle = document.getElementById("theme-toggle");
    if (!toggle) return;

    const isDark = theme === "dark";
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute(
      "aria-label",
      isDark ? "Activar modo claro" : "Activar modo oscuro"
    );
  }

  function initThemeToggle() {
    setTheme(getPreferredTheme());

    const toggle = document.getElementById("theme-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", function () {
      const current = document.documentElement.getAttribute("data-theme");
      setTheme(current === "dark" ? "light" : "dark");
    });
  }

  /* ========================================================================
     MOBILE NAV
     ======================================================================== */

  function initMobileNav() {
    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("primary-nav");
    if (!toggle || !nav) return;

    function openNav() {
      nav.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Cerrar menú de navegación");
      document.body.classList.add("nav-open");
    }

    function closeNav() {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menú de navegación");
      document.body.classList.remove("nav-open");
    }

    function isOpen() {
      return toggle.getAttribute("aria-expanded") === "true";
    }

    toggle.addEventListener("click", function () {
      if (isOpen()) closeNav();
      else openNav();
    });

    nav.querySelectorAll(".nav__link").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && isOpen()) {
        closeNav();
        toggle.focus();
      }
    });

    const mq = window.matchMedia("(min-width: 48rem)");
    function onBreakpoint(event) {
      if (event.matches) closeNav();
    }
    if (mq.addEventListener) {
      mq.addEventListener("change", onBreakpoint);
    } else {
      mq.addListener(onBreakpoint);
    }
  }

  /* ========================================================================
     SCROLL REVEAL
     ======================================================================== */

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function initScrollReveal() {
    const cards = document.querySelectorAll("[data-reveal]");

    if (prefersReducedMotion()) {
      cards.forEach(function (card) {
        card.classList.add("is-visible");
      });
      return;
    }

    if (state.revealObserver) {
      state.revealObserver.disconnect();
    }

    state.revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.12,
      }
    );

    cards.forEach(function (card) {
      state.revealObserver.observe(card);
    });
  }

  /* ========================================================================
     BOOT
     ======================================================================== */

  function init() {
    const grid = document.getElementById("gallery-grid");
    if (!grid) return;

    initThemeToggle();
    initMobileNav();
    initFilters();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
