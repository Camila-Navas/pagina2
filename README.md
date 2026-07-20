# DB Gallery — Pieza de portafolio front-end

Galería interactiva de personajes de **Dragon Ball** construida con **HTML, CSS y JavaScript puro** (sin frameworks ni bundlers). Demuestra design tokens, BEM, grid mobile-first, accesibilidad, dark mode, filtros, paginación y render desde datos.

---

## Cómo verla

No requiere instalación ni servidor de build. Cualquiera de estas opciones:

1. Abrir `index.html` directamente en el navegador.
2. Servir la carpeta con un servidor estático local (recomendado para evitar rarezas de `file://`):

```bash
# Ejemplo con Python
python -m http.server 5500

# Luego abrir http://localhost:5500
```

---

## Estructura del proyecto

```
pagina2/
├── index.html      # Estructura semántica (shell de UI; sin cards hardcodeadas)
├── main.css        # Design system: tokens, BEM, layout, componentes
├── main.js         # Datos + render + interacciones (IIFE)
├── IMG/            # 58 assets WebP de personajes
└── README.md       # Este documento
```

| Archivo | Responsabilidad |
|---------|-----------------|
| `index.html` | Landmarks (`header`, `nav`, `main`, `footer`), hero, toolbar de galería, contenedores vacíos (`#gallery-grid`, `#pagination`, `#category-filters`) |
| `main.css` | Variables CSS, temas claro/oscuro, grid responsive, cards de altura uniforme, paginación, reduced-motion |
| `main.js` | Array `characters`, filtrado, paginación, menú móvil, tema, IntersectionObserver |
| `IMG/` | Imágenes referenciadas por ruta relativa desde el array de datos |

---

## Características

- **Galería data-driven**: las cards se generan desde un arreglo de objetos en JS.
- **Búsqueda** por nombre, descripción o categoría.
- **Filtros por chip**: Saiyajin, Humano, Androide, Villano, Dios, Namekiano, Otro.
- **Paginación**: números de página + Anterior/Siguiente; selector de tamaño **5 / 10 / 12 / 20 / 24**.
- **Cards uniformes**: zona de imagen de altura fija + texto con `line-clamp` (misma altura visual).
- **Dark mode** con preferencia guardada y fallback a `prefers-color-scheme`.
- **Menú hamburguesa** accesible en móvil (Escape, `aria-expanded`, cierre al navegar).
- **Scroll reveal** con `IntersectionObserver` (respetando `prefers-reduced-motion`).
- **Accesibilidad**: skip link, foco visible, `role="status"`, labels ARIA, `lang="es"`.

---

## Arquitectura (flujo)

```
characters[]  →  filtro (query + categoría)  →  slice (página)  →  renderCards()
                                                                      ↓
                                                              #gallery-grid
                                                                      ↓
                                                         initScrollReveal()
```

1. Al cargar, `init()` activa tema, nav y filtros.
2. `updateGallery()` calcula la lista filtrada, pagina y vuelve a pintar solo las cards de la página actual.
3. Cambiar búsqueda, categoría o “por página” **resetea a la página 1**.
4. El tamaño de página y el tema se persisten en `localStorage`.

### Modelo de datos (cada personaje)

```js
{
  id: "goku",                 // único
  name: "Goku",
  category: "saiyan",         // clave de filtro
  categoryLabel: "Saiyajin",  // texto visible
  image: "IMG/goku_normal.webp",
  description: "…"
}
```

Categorías válidas: `saiyan` | `humano` | `androide` | `villano` | `dios` | `namekiano` | `otro`.

### Claves de `localStorage`

| Clave | Valores | Uso |
|-------|---------|-----|
| `db-gallery-theme` | `light` \| `dark` | Tema visual |
| `db-gallery-page-size` | `5`, `10`, `12`, `20`, `24` | Cards por página |

---

## CSS: organización y design system

El CSS está comentado por secciones:

1. Variables (`:root` / `[data-theme="dark"]`)
2. Reset / base
3. Tipografía
4. Layout (header, hero, gallery, about, footer)
5. Componentes (nav, btn, search, chips, card, pagination, page-size)
6. Utilidades
7. Media queries (mobile-first, breakpoint principal `48rem`)
8. `prefers-reduced-motion`

**Tipografía (Google Fonts):** Syne (display/marca) + DM Sans (cuerpo/UI).

**Paleta:** ink + ámbar (`--color-accent`), superficies claras/oscuras vía tokens — el dark mode no duplica componentes.

**Nombrado:** metodología **BEM** (`.card`, `.card__title`, `.chip--active`, etc.).

**Grid de galería:**

```css
grid-template-columns: repeat(auto-fill, minmax(min(100%, 260px), 1fr));
```

---

## JavaScript: módulos lógicos (en un solo archivo)

Todo vive dentro de una **IIFE** (`"use strict"`) para no contaminar el scope global.

| Bloque | Funciones clave |
|--------|-----------------|
| DATA | `characters`, `categories` |
| RENDER | `createCard`, `renderCards`, `renderCategoryChips` |
| FILTER + PAGINATION | `matchesQuery`, `getFilteredCharacters`, `getPageNumbers`, `updateGallery`, `renderPagination`, `initFilters` |
| THEME | `getPreferredTheme`, `setTheme`, `initThemeToggle` |
| NAV | `initMobileNav` |
| REVEAL | `initScrollReveal` |
| BOOT | `init` (DOMContentLoaded) |

---

## Cómo agregar un personaje nuevo

1. Coloca la imagen en `IMG/` (preferible WebP).
2. Añade un objeto al array `characters` en `main.js`:

```js
{
  id: "nuevo-id-unico",
  name: "Nombre",
  category: "saiyan",
  categoryLabel: "Saiyajin",
  image: "IMG/archivo.webp",
  description: "Texto corto de 1–3 frases.",
}
```

3. Si el nombre de archivo tiene espacios, codifícalos en la ruta (`%20`). Si el nombre literal contiene `%`, usa `%25` (ej. `%253F` para un `%3F` en el disco).
4. Recarga el navegador: aparece en la galería y entra en filtros/paginación automáticamente.

No hace falta tocar el HTML ni el CSS para una card nueva.

---

## HTML: IDs y anclas importantes

| ID / ancla | Rol |
|------------|-----|
| `#main` | Contenido principal / skip link |
| `#galeria` | Sección galería |
| `#sobre` | Sección sobre el proyecto |
| `#gallery-grid` | Contenedor de cards (JS) |
| `#category-filters` | Chips de categoría (JS) |
| `#search-input` | Input de búsqueda |
| `#page-size` | Select de tamaño de página |
| `#pagination` | Controles de paginación (JS) |
| `#gallery-status` | Conteo accesible (`aria-live`) |
| `#theme-toggle` | Botón claro/oscuro |
| `#nav-toggle` / `#primary-nav` | Menú móvil |

---

## Decisiones de diseño (trazabilidad)

| Decisión | Motivo |
|----------|--------|
| Sin frameworks | Demostrar fundamentos sólidos en portafolio |
| Datos separados de la vista | Escalar personajes sin duplicar markup |
| Tokens CSS + `data-theme` | Un solo set de estilos para light/dark |
| BEM | Clases predecibles al crecer secciones |
| Paginación por re-render | Solo DOM de la página actual; más ligero en móvil |
| Cards de altura uniforme | Aspecto profesional tipo catálogo (imagen fija + `line-clamp`) |
| Mobile-first | Navbar colapsada primero; desktop desde `48rem` |

---

## Accesibilidad (checklist cubierto)

- [x] `lang="es"`, charset, viewport, meta description  
- [x] Skip link  
- [x] Landmarks semánticos  
- [x] Botones reales para menú y tema  
- [x] `:focus-visible`  
- [x] Estado de resultados con `role="status"`  
- [x] Imágenes con `alt` del personaje + `loading="lazy"`  
- [x] Respeto a `prefers-reduced-motion`  

---

## Mejoras futuras sugeridas

- Extraer `characters` a un `data/characters.json` y cargarlo con `fetch`
- Modal o página de detalle por personaje
- View Transitions API al cambiar de página
- Tests e2e (Playwright) para filtros y paginación
- PWA / caché offline de imágenes
- i18n (ES/EN)
- Virtualización si el catálogo crece mucho más allá de ~100 ítems

---

## Stack

| Capa | Tecnología |
|------|------------|
| Marcado | HTML5 semántico |
| Estilos | CSS3 (custom properties, Grid, Flexbox) |
| Lógica | JavaScript ES6+ (vanilla) |
| Fuentes | Google Fonts (Syne, DM Sans) |
| Assets | WebP en `/IMG` |

**Sin** React, Vue, Angular, Tailwind, jQuery ni herramientas de build.

---

## Licencia / uso

Proyecto de portafolio / práctica personal. Las imágenes de personajes pertenecen a sus respectivos titulares; úsalas solo en contextos educativos o de demo no comercial salvo que tengas derechos.
