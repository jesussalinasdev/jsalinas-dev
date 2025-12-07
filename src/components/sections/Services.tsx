"use client";

import { useTranslations } from "next-intl";

export function Services() {
    const t = useTranslations('Services');

    const services = [
        {
            title: t('cards.web_dev.title'),
            description: t('cards.web_dev.desc'),
            icon: (
                <svg className="h-8 w-8 text-ai-blue" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
            ),
        },
        {
            title: t('cards.saas.title'),
            description: t('cards.saas.desc'),
            icon: (
                <svg className="h-8 w-8 text-ai-blue" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
            ),
        },
        {
            title: t('cards.consulting.title'),
            description: t('cards.consulting.desc'),
            icon: (
                <svg className="h-8 w-8 text-ai-blue" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="services" className="relative py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-ai-blue">{t('title')}</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-starlight sm:text-4xl">
                        {t('headline')}
                    </p>
                    <p className="mt-6 text-lg leading-8 text-muted">
                        {t('description')}
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="flex flex-col items-start rounded-2xl border border-white/10 bg-white/5 px-8 py-10 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-ai-blue/50 hover:scale-105"
                        >
                            <div className="mb-6 rounded-lg bg-white/5 p-3 ring-1 ring-white/10">
                                {service.icon}
                            </div>
                            <dt className="text-xl font-semibold leading-7 text-starlight">
                                {service.title}
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted">
                                <p className="flex-auto">{service.description}</p>
                            </dd>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
