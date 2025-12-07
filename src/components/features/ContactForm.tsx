"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export function ContactForm() {
    const t = useTranslations('Contact.form');
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('sending');

        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1500));

        // TODO: Implement actual email sending logic here
        setStatus('success');
    }

    return (
        <form onSubmit={handleSubmit} className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="space-y-6">
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-starlight">
                        {t('name')}
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            placeholder={t('name_placeholder')}
                            className="block w-full rounded-md border-0 bg-white/5 py-2.5 pl-4 text-starlight shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-ai-blue sm:text-sm sm:leading-6 placeholder:text-muted/50 transition-colors duration-300 hover:bg-white/10"
                        />
                    </div>
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-starlight">
                        {t('email')}
                    </label>
                    <div className="mt-2">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            placeholder={t('email_placeholder')}
                            className="block w-full rounded-md border-0 bg-white/5 py-2.5 pl-4 text-starlight shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-ai-blue sm:text-sm sm:leading-6 placeholder:text-muted/50 transition-colors duration-300 hover:bg-white/10"
                        />
                    </div>
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium leading-6 text-starlight">
                        {t('message')}
                    </label>
                    <div className="mt-2">
                        <textarea
                            name="message"
                            id="message"
                            rows={4}
                            required
                            placeholder={t('message_placeholder')}
                            className="block w-full rounded-md border-0 bg-white/5 py-2.5 pl-4 text-starlight shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-ai-blue sm:text-sm sm:leading-6 placeholder:text-muted/50 resize-none transition-colors duration-300 hover:bg-white/10"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={status === 'sending' || status === 'success'}
                        className="flex w-full sm:w-auto justify-center rounded-full bg-ai-blue px-8 py-3 text-sm font-semibold leading-6 text-white shadow-lg shadow-ai-blue/25 hover:bg-ai-blue/80 hover:scale-[1.02] hover:shadow-ai-blue/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ai-blue disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                    >
                        {status === 'sending' ? t('sending') : status === 'success' ? t('success') : t('send')}
                    </button>
                    {status === 'error' && (
                        <p className="mt-2 text-sm text-red-400 text-center">{t('error')}</p>
                    )}
                </div>
            </div>
        </form>
    );
}
