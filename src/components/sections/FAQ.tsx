"use client";

import { useTranslations } from "next-intl";

type FaqItem = { q: string; a: string };

export function FAQ() {
    const t = useTranslations('FAQ');
    const items = t.raw('items') as FaqItem[];

    return (
        <section id="faq" className="relative py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-starlight sm:text-4xl">
                        {t('title')}
                    </h2>
                </div>

                <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
                    {items.map((item) => (
                        <div
                            key={item.q}
                            className="rounded-2xl border border-white/10 bg-white/5 px-8 py-8 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-ai-blue/50"
                        >
                            <dt className="text-lg font-semibold leading-7 text-starlight">{item.q}</dt>
                            <dd className="mt-3 text-base leading-7 text-muted">{item.a}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
