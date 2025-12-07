"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Hero() {
    const t = useTranslations('Hero');

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
            {/* Background Glows (Restored) */}
            <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-ai-blue/20 blur-[128px]" />
            <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-neural/20 blur-[128px]" />

            <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
                {/* Badge */}
                <div className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-ai-blue backdrop-blur-sm">
                    <span className="mr-2 flex h-2 w-2">
                        <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-ai-blue opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-ai-blue"></span>
                    </span>
                    {t('badge')}
                </div>

                {/* Headline */}
                <h1 className="mb-6 text-5xl font-bold tracking-tight text-starlight md:text-7xl">
                    {t('headline_prefix')} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-ai-blue to-neural">
                        {t('headline_highlight')} {t('headline_suffix')}
                    </span>
                </h1>

                {/* Subheadline */}
                <p className="mx-auto mb-10 max-w-2xl text-lg text-muted md:text-xl">
                    {t('subheadline')}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        href="#portfolio"
                        className="rounded-full bg-ai-blue px-8 py-3 text-base font-semibold text-white shadow-lg shadow-ai-blue/25 transition-all duration-300 hover:bg-ai-blue/80 hover:scale-105 hover:shadow-ai-blue/40"
                    >
                        {t('cta_primary')}
                    </Link>
                    <Link
                        href="#contact"
                        className="rounded-full border border-white/10 bg-white/5 px-8 py-3 text-base font-medium text-starlight backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:shadow-lg hover:shadow-white/5"
                    >
                        {t('cta_secondary')}
                    </Link>
                </div>
            </div>
        </section>
    );
}
