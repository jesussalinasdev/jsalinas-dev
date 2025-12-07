import { useTranslations } from 'next-intl';

export const ValueProposition = () => {
    const t = useTranslations('ValueProposition');

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-void to-void/50 pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-ai-blue">
                        {t('title')}
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-starlight sm:text-4xl">
                        {t('headline')}
                    </p>
                    <p className="mt-6 text-lg leading-8 text-muted">
                        {t('description')}
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {/* Card 1: Credibility */}
                    <div className="group flex flex-col items-start rounded-2xl border border-white/10 bg-white/5 px-8 py-10 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-ai-blue/50 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                        <div className="mb-6 rounded-lg bg-ai-blue/10 p-3 ring-1 ring-white/10 text-ai-blue group-hover:scale-110 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-semibold leading-7 text-starlight mb-3">{t('cards.credibility.title')}</h4>
                        <p className="flex-auto text-base leading-7 text-muted">
                            {t('cards.credibility.desc')}
                        </p>
                    </div>

                    {/* Card 2: Automation */}
                    <div className="group flex flex-col items-start rounded-2xl border border-white/10 bg-white/5 px-8 py-10 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-neural/50 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]">
                        <div className="mb-6 rounded-lg bg-neural/10 p-3 ring-1 ring-white/10 text-neural group-hover:scale-110 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="18" height="18" x="3" y="3" rx="2" />
                                <path d="M12 8v8" />
                                <path d="m8 12 4 4 4-4" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-semibold leading-7 text-starlight mb-3">{t('cards.automation.title')}</h4>
                        <p className="flex-auto text-base leading-7 text-muted">
                            {t('cards.automation.desc')}
                        </p>
                    </div>

                    {/* Card 3: Global Reach */}
                    <div className="group flex flex-col items-start rounded-2xl border border-white/10 bg-white/5 px-8 py-10 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-code/50 hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                        <div className="mb-6 rounded-lg bg-code/10 p-3 ring-1 ring-white/10 text-code group-hover:scale-110 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                                <path d="M2 12h20" />
                            </svg>
                        </div>
                        <h4 className="text-xl font-semibold leading-7 text-starlight mb-3">{t('cards.global.title')}</h4>
                        <p className="flex-auto text-base leading-7 text-muted">
                            {t('cards.global.desc')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
