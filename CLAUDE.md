# jsalinas.dev

Sitio personal de Jesús Salinas: páginas web con WhatsApp para negocios de oficios. Web estática bilingüe, español por defecto e inglés.

## Stack

- Astro 7, salida estática (`output: "static"`), `trailingSlash: "always"`, build a `out/`
- CSS propio por componente, tokens en `src/styles/global.css`, fuente Archivo Variable vía @fontsource
- WebGL escrito a mano en `src/scripts/signal.ts`, sin librerías
- i18n propio en `src/i18n.ts`, lee `messages/es.json` y `messages/en.json`
- Deploy: Cloudflare Pages, sirve `out/`. `public/_redirects` manda `/` a `/es/` con un 302 real

## Comandos

- `npm run dev` servidor local en http://localhost:3000/es/
- `npm run build` genera el sitio estático en `out/`
- `npm run preview` sirve `out/` como Cloudflare Pages en http://localhost:8788
- `node scripts/optimize-images.mjs` convierte los PNG de `public/` a WebP

## Estructura

- `src/pages/[locale]/` home y privacy-policy por idioma
- `src/pages/index.astro` respaldo de la raíz para hosts sin `_redirects`; `404.astro`, `robots.txt.ts`, `sitemap.xml.ts`
- `src/layouts/Base.astro` head, metadata por idioma, hreflang
- `src/components/` Nav, Hero, About, Why, Offer, FAQ, Work, Contact, Footer, SignalField, Icon
- `src/scripts/` campo WebGL y animación de llegada
- `messages/en.json` y `messages/es.json` todo el texto visible
- `public/` imágenes y estáticos, lo único que se publica tal cual
- `PRODUCT.md` contexto de producto, `DESIGN.md` sistema visual, `.impeccable/` contrato de dirección y capturas de revisión

## Trabajo pendiente

Lo que hay que implementar está solo en:

`H:\My Drive\Ryot_HQ\2_JSALINAS.DEV\jsalinas.dev\pendientes-implementacion.md`

Se siguen las reglas del embudo del CLAUDE.md global.

## Reglas de este repo

- Todo texto visible va en `messages/`. Nunca texto hardcodeado en componentes. Cada clave nueva se añade en en.json y es.json a la vez.
- El sitio es 100 % estático: nada que requiera servidor en runtime, ni endpoints dinámicos, ni adaptador SSR. `output: "static"` no se quita.
- Los cambios visuales siguen `DESIGN.md`. El campo WebGL respeta sus reglas de rendimiento para celulares de gama media.
- Antes de dar un cambio por terminado, `npm run build` sin errores.
- Imágenes nuevas en `public/` en formato WebP.
- Este repo puede ser público: nada privado en archivos versionados.
