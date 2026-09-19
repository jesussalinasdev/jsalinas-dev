# jsalinas.dev

Sitio personal y portfolio de Jesús Salinas. Web estática bilingüe, inglés y español.

## Stack

- Next.js 16 con App Router, React 19, TypeScript
- Tailwind CSS 4 vía @tailwindcss/postcss, estilos globales en src/app/globals.css
- next-intl para i18n, locales en y es, default en
- Export estático: `output: "export"`, `trailingSlash: true`, imágenes sin optimizar
- Deploy: Cloudflare Pages, sirve el contenido de `out/`

## Comandos

- `npm run dev` servidor local en http://localhost:3000
- `npm run build` genera el export estático en `out/`
- `npm run lint` ESLint
- `node scripts/optimize-images.mjs` convierte los PNG de `public/` a WebP

## Estructura

- `src/app/[locale]/` páginas por idioma: home y privacy-policy
- `src/app/page.tsx`, `robots.ts`, `sitemap.ts` raíz, SEO
- `src/components/sections/` bloques de la home: Hero, About, Services, Portfolio, TechStack, ValueProposition, Contact
- `src/components/layout/`, `features/`, `ui/` navbar, formulario de contacto, efectos visuales
- `src/i18n/` routing y carga de mensajes
- `messages/en.json` y `messages/es.json` todo el texto visible
- `public/` imágenes y estáticos, lo único que se publica tal cual

## Reglas

- Todo texto visible va en `messages/`. Nunca texto hardcodeado en componentes. Cada clave nueva se añade en en.json y es.json a la vez.
- El sitio es 100 % estático: nada que requiera servidor en runtime, ni API routes, ni middleware, ni server actions, ni `next/image` optimizado.
- Antes de dar un cambio por terminado, corre `npm run build` y confirma que compila sin errores.
- Imágenes nuevas en `public/` en formato WebP.
- Cambios pequeños y enfocados. Propón un plan antes de tocar varios archivos.
- Solo código en este repo. Documentación, briefs y assets de trabajo viven fuera del repo.
- Nunca escribas credenciales, claves ni datos privados en el repo. Este archivo puede ser público.
- No hagas commit ni push salvo que se pida.
