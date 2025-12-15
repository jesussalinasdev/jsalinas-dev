import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Navbar } from "@/components/layout/Navbar";
import { Contact } from "@/components/sections/Contact";

export default async function PrivacyPolicy({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'PrivacyPolicy' });

    return (
        <main className="min-h-screen text-starlight selection:bg-ai-blue/30 bg-void">
            <Navbar />
            <div className="mx-auto max-w-3xl px-6 py-32 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-starlight sm:text-4xl mb-4">
                    {t('title')}
                </h1>
                <p className="text-sm text-muted mb-12">
                    {t('last_updated')}
                </p>

                <div className="space-y-12 text-base leading-7 text-muted">
                    <section>
                        <p>{t('intro')}</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">{t('collection_title')}</h2>
                        <p>{t('collection_text')}</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">{t('usage_title')}</h2>
                        <p>{t('usage_text')}</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">{t('protection_title')}</h2>
                        <p>{t('protection_text')}</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">{t('contact_title')}</h2>
                        <p>{t('contact_text')}</p>
                    </section>
                </div>
            </div>
            <Contact />
        </main>
    );
}
