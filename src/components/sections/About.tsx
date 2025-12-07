"use client";

import { useTranslations } from "next-intl";

export function About() {
    const t = useTranslations('About');

    return (
        <section id="about" className="relative py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 lg:items-center">

                    {/* Left Column: Text */}
                    <div className="max-w-2xl">
                        <h2 className="text-base font-semibold leading-7 text-ai-blue">{t('title')}</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-starlight sm:text-4xl">
                            {t('headline_prefix')} <span className="text-neural">{t('headline_highlight')}</span>
                        </p>
                        <p className="mt-6 text-lg leading-8 text-muted">
                            {t('description')}
                        </p>

                        {/* Stats Grid */}
                        <dl className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
                            <div className="flex flex-col border-l border-white/10 pl-4">
                                <dt className="text-sm leading-6 text-muted">{t('stats.experience')}</dt>
                                <dd className="order-first text-2xl font-semibold tracking-tight text-starlight">3+ Years</dd>
                            </div>
                            <div className="flex flex-col border-l border-white/10 pl-4">
                                <dt className="text-sm leading-6 text-muted">{t('stats.satisfaction')}</dt>
                                <dd className="order-first text-2xl font-semibold tracking-tight text-starlight">100%</dd>
                            </div>
                            <div className="flex flex-col border-l border-white/10 pl-4">
                                <dt className="text-sm leading-6 text-muted">{t('stats.projects')}</dt>
                                <dd className="order-first text-2xl font-semibold tracking-tight text-starlight">15+</dd>
                            </div>
                        </dl>
                    </div>

                    {/* Right Column: Photo */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative aspect-[4/5] w-full max-w-sm rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-sm group">
                            {/* Real Photo */}
                            <div className="absolute inset-0">
                                <img
                                    src="/jesus-bw.webp"
                                    alt="Jesus Salinas - AI Web Developer in Vancouver"
                                    className="h-full w-full object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100 grayscale hover:grayscale-0"
                                />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-ai-blue/20 blur-2xl" />
                            <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-neural/20 blur-2xl" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
