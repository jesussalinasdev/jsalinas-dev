"use client";

import { useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";

export function Navbar() {
    const t = useTranslations('Navbar');
    const locale = useLocale();
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Check if we are on the home page
    const isHomePage = pathname === '/';

    // Helper to get correct link for sections
    const getSectionLink = (id: string) => isHomePage ? `#${id}` : `/#${id}`;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-void/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold tracking-tight text-starlight">
                    jsalinas<span className="text-ai-blue">.dev</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    <Link href={getSectionLink('about')} className="text-sm font-medium text-muted hover:text-ai-blue transition-colors">
                        {t('about')}
                    </Link>
                    <Link href={getSectionLink('services')} className="text-sm font-medium text-muted hover:text-ai-blue transition-colors">
                        {t('services')}
                    </Link>
                    <Link href={getSectionLink('portfolio')} className="text-sm font-medium text-muted hover:text-ai-blue transition-colors">
                        {t('portfolio')}
                    </Link>
                </div>

                {/* Actions (Lang + CTA + Mobile Toggle) */}
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-1 text-xs font-medium">
                        <Link
                            href={pathname}
                            locale="en"
                            className={`${locale === 'en' ? 'text-starlight' : 'text-muted hover:text-starlight'} transition-colors`}
                        >
                            EN
                        </Link>
                        <span className="text-muted/50">/</span>
                        <Link
                            href={pathname}
                            locale="es"
                            className={`${locale === 'es' ? 'text-starlight' : 'text-muted hover:text-starlight'} transition-colors`}
                        >
                            ES
                        </Link>
                    </div>
                    <Link
                        href={getSectionLink('contact')}
                        className="hidden rounded-full bg-ai-blue/10 px-4 py-2 text-sm font-medium text-ai-blue transition-all duration-300 hover:bg-ai-blue/20 hover:scale-105 md:block"
                    >
                        {t('contact')}
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-starlight hover:text-ai-blue transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 right-0 border-b border-white/5 bg-void/95 backdrop-blur-xl p-6 md:hidden shadow-2xl">
                    <div className="flex flex-col space-y-4">
                        <Link
                            href={getSectionLink('about')}
                            className="text-base font-medium text-muted hover:text-ai-blue transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t('about')}
                        </Link>
                        <Link
                            href={getSectionLink('services')}
                            className="text-base font-medium text-muted hover:text-ai-blue transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t('services')}
                        </Link>
                        <Link
                            href={getSectionLink('portfolio')}
                            className="text-base font-medium text-muted hover:text-ai-blue transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t('portfolio')}
                        </Link>
                        <Link
                            href={getSectionLink('contact')}
                            className="text-base font-medium text-ai-blue hover:text-ai-blue/80 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t('contact')}
                        </Link>

                        <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-4">
                            <span className="text-sm text-muted">Language:</span>
                            <div className="flex items-center gap-2 text-sm font-medium">
                                <Link
                                    href={pathname}
                                    locale="en"
                                    className={`${locale === 'en' ? 'text-starlight' : 'text-muted hover:text-starlight'} transition-colors`}
                                >
                                    EN
                                </Link>
                                <span className="text-muted/50">/</span>
                                <Link
                                    href={pathname}
                                    locale="es"
                                    className={`${locale === 'es' ? 'text-starlight' : 'text-muted hover:text-starlight'} transition-colors`}
                                >
                                    ES
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
