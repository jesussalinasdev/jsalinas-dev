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

                            {/* LinkedIn Button */}
                            <a
                                href="https://www.linkedin.com/in/jesus-salinas-6488b528a/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex w-fit items-center gap-3 rounded-full bg-white/5 px-6 py-3 text-sm font-semibold text-starlight border border-white/10 hover:bg-white/10 hover:border-ai-blue/50 transition-all"
                            >
                                <svg className="h-5 w-5 text-ai-blue" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                                {t('linkedin')}
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
                    <p>&copy; {new Date().getFullYear()} jsalinas.dev. All rights reserved.</p>
                    <p className="mt-2">{t('footer')}</p>
                    <p className="mt-4">
                        <Link href="/privacy-policy" className="hover:text-ai-blue transition-colors underline decoration-white/10 hover:decoration-ai-blue/50 underline-offset-4">
                            {t('footer_privacy')}
                        </Link>
                    </p>
                </footer>
            </div>
        </section>
    );
}
