import type { APIRoute } from 'astro';
import { locales } from '../i18n';

const paths = ['', 'privacy-policy/'];

export const GET: APIRoute = ({ site }) => {
    const origin = site!.origin;
    const urls = paths.flatMap((path) =>
        locales.map((locale) => {
            const alternates = locales
                .map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${origin}/${l}/${path}"/>`)
                .join('');
            return `<url><loc>${origin}/${locale}/${path}</loc>${alternates}<changefreq>monthly</changefreq></url>`;
        }),
    );

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join('')}</urlset>
`;
    return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
