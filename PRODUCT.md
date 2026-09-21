# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro, static output, deployed on Cloudflare Pages (decided by Ryot on 2026-09-20; replaces the current Next.js 16 static export). React islands only where animation or interaction needs them. Copy is reused as-is from `messages/es.json` and `messages/en.json`.

## Users

Owners of small local trade businesses in Canada and the United States: construction, cleaning, plumbing, landscaping and similar home trades, most of them Spanish speakers. They usually have no website, or only an abandoned Facebook page, and they run the business from their phone through WhatsApp.

Most visitors arrive from a sales message Jesús sent them (WhatsApp, Facebook or email) and open the link on their phone. They come to answer three things fast: is this person real and trustworthy, what exactly do I get, and how much does it cost.

## Product Purpose

jsalinas.dev is the freelance site of Jesús Salinas. It sells one fixed-price product: a one-page website whose job is to get the trade business found and messaged on WhatsApp. Success is a visitor writing to Jesús through the contact form or email.

## Positioning

- You deal with Jesús directly, in Spanish, with no agency or middlemen.
- Fixed price, no hourly billing, half to start.
- The page, domain and accounts are in the client's name, with every login handed over.
- Built for trades that work through WhatsApp; the page funnels customers to the client's own chat.
- AI is Jesús's working tool for speed and price. The client's page carries no bots or automated chat.

## Operating Context

Bilingual site: Spanish at `/es` is the default, English at `/en` is written separately, not translated. Offer: one language 550 CAD / 499 USD, two languages 750 CAD / 699 USD, Google Maps profile 80 CAD / 59 USD, domain email 120 CAD / 89 USD first mailbox and 40 CAD / 30 USD each extra. Payment by Interac in Canada, PayPal invoice in the US. First version within three business days of complete material. Everything closes in writing by email; an optional twenty-minute video call.

## Capabilities and Constraints

- 100% static. No server at runtime, no API routes, no middleware.
- Default language must be served with a real edge redirect, not JavaScript.
- Contact: email `hello@jsalinas.dev` plus a form (name, email, message) posting to Web3Forms. No call scheduling. No WhatsApp for Jesús yet.
- LinkedIn only in the footer.
- All visible copy lives in the message files, both languages at once. Annex A copy is approved and is not rewritten.
- No promise of Google ranking anywhere.
- Images in WebP.

## Brand Commitments

- Name and domain: Jesús Salinas, jsalinas.dev, based in Vancouver.
- Voice: plain everyday Spanish, tú, neutral Latin American; English conversational. No agency or SaaS language (elevate, leverage, high-impact, digital transformation, unlock, empower).

## Evidence on Hand

- Portrait photo: `public/jesus-bw.webp`.
- The three trade-template demos, once they exist in `3_RYOTLAB/prototypes/plantilla-oficios/`. They are the only portfolio: the Work section holds three slots for them (decided by Ryot on 2026-09-21), and past client work is no longer shown.
- No testimonials, client logos, metrics or certifications. None may be invented.

## Product Principles

1. Trust before persuasion: the visitor must see a real person and clear terms within seconds.
2. Price in the open: the fixed price is a selling point, never hidden behind a call.
3. The phone is the main screen: the visitor came from a message and reads on a phone.
4. Ownership is the promise: everything is in the client's name.
5. Show the work the client will get, not generic tech.
