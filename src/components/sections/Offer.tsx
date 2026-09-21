"use client";

import { useTranslations } from "next-intl";

// Fill with the three demo URLs once they exist. The line stays hidden until then.
const demoLinks: string[] = [];

export function Offer() {
    const t = useTranslations('Offer');

    const plans = [
        {
            key: 'one_language',
            icon: (
                <svg className="h-8 w-8 text-ai-blue" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
            ),
        },
        {
            key: 'two_languages',
            icon: (
                <svg className="h-8 w-8 text-ai-blue" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                </svg>
            ),
        },
        {
            key: 'google_maps',
            icon: (
                <svg className="h-8 w-8 text-ai-blue" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
            ),
        },
        {
            key: 'domain_email',
            icon: (
                <svg className="h-8 w-8 text-ai-blue" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            ),
        },
    ];

    return (
        <section id="offer" className="relative py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-ai-blue">{t('title')}</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-starlight sm:text-4xl">
                        {t('headline')}
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {plans.map((plan) => (
                        <div
                            key={plan.key}
                            className="flex flex-col items-start rounded-2xl border border-white/10 bg-white/5 px-8 py-10 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-ai-blue/50 hover:scale-105"
                        >
                            <div className="mb-6 rounded-lg bg-white/5 p-3 ring-1 ring-white/10">
                                {plan.icon}
                            </div>
                            <h3 className="text-xl font-semibold leading-7 text-starlight">
                                {t(`plans.${plan.key}.title`)}
                            </h3>
                            <p className="mt-2 text-base font-semibold leading-7 text-ai-blue">
                                {t(`plans.${plan.key}.price`)}
                            </p>
                            <p className="mt-4 flex-auto text-base leading-7 text-muted">
                                {t.rich(`plans.${plan.key}.desc`, {
                                    code: (chunks) => <code className="font-mono text-starlight">{chunks}</code>,
                                })}
                            </p>
                        </div>
                    ))}
                </div>

                {demoLinks.length === 3 && (
                    <p className="mt-12 text-center text-base leading-7 text-muted">
                        {t('demos_label')}{' '}
                        {demoLinks.map((href, i) => (
                            <span key={href}>
                                {i > 0 && ' · '}
                                <a href={href} target="_blank" rel="noopener noreferrer" className="text-ai-blue hover:text-ai-blue/80 underline underline-offset-4">
                                    {t('demo_link', { number: i + 1 })}
                                </a>
                            </span>
                        ))}
                    </p>
                )}

                <p className="mx-auto mt-12 max-w-3xl text-center text-base leading-7 text-muted">
                    {t('not_included')}
                </p>
            </div>
        </section>
    );
}
