"use client";

import { useTranslations } from "next-intl";
import { ContactForm } from "@/components/features/ContactForm";
import { Link } from "@/i18n/navigation";

export function Contact() {
    const t = useTranslations('Contact');

    return (
        <section id="contact" className="relative py-32 border-t border-white/5">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-2 lg:items-start">

                    {/* Left Column: Text & Info */}
                    <div className="max-w-xl">
                        <h2 className="text-base font-semibold leading-7 text-ai-blue">{t('title')}</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-starlight sm:text-4xl">
                            {t('headline')} <span className="text-code">{t('headline_highlight')}</span>
                        </p>
                        <p className="mt-6 text-lg leading-8 text-muted">
                            {t('description')}
                        </p>

                        <div className="mt-10 flex flex-col gap-6">
                            {/* Email Button */}
                            <a
                                href="mailto:hello@jsalinas.dev"
                                className="flex w-fit items-center gap-3 rounded-full bg-white/5 px-6 py-3 text-sm font-semibold text-starlight border border-white/10 hover:bg-white/10 hover:border-ai-blue/50 transition-all cursor-pointer"
                            >
                                <svg className="h-5 w-5 text-ai-blue" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                hello@jsalinas.dev
                            </a>
                        </div>

                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="lg:mt-0">
                        <ContactForm />
                    </div>

                </div>

                {/* Footer */}
                <footer className="mt-24 text-center text-sm text-muted/50 border-t border-white/5 pt-8">
                    <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
                        <span>{t('footer_name')}</span>
                        <span aria-hidden="true">·</span>
                        <span>{t('footer_city')}</span>
                        <span aria-hidden="true">·</span>
                        <a
                            href="https://www.linkedin.com/in/jesus-salinas-6488b528a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-ai-blue transition-colors underline decoration-white/10 hover:decoration-ai-blue/50 underline-offset-4"
                        >
                            {t('linkedin')}
                        </a>
                        <span aria-hidden="true">·</span>
                        <Link href="/privacy-policy" className="hover:text-ai-blue transition-colors underline decoration-white/10 hover:decoration-ai-blue/50 underline-offset-4">
                            {t('footer_privacy')}
                        </Link>
                    </p>
                </footer>
            </div>
        </section>
    );
}
