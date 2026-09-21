import es from '../messages/es.json';
import en from '../messages/en.json';

export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

const catalogs: Record<Locale, unknown> = { es, en };

function lookup(locale: Locale, key: string): unknown {
    return key.split('.').reduce<unknown>((node, part) => {
        if (node && typeof node === 'object') return (node as Record<string, unknown>)[part];
        return undefined;
    }, catalogs[locale]);
}

const escapeHtml = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function useTranslations(locale: Locale) {
    function t(key: string, params: Record<string, string | number> = {}): string {
        const value = lookup(locale, key);
        if (typeof value !== 'string') throw new Error(`Missing message "${key}" for "${locale}"`);
        return value.replace(/\{(\w+)\}/g, (_, name) => String(params[name] ?? `{${name}}`));
    }

    /** Escaped HTML with the only tag the copy uses, <code>, restored. */
    t.rich = (key: string): string =>
        escapeHtml(t(key)).replace(/&lt;code&gt;/g, '<code>').replace(/&lt;\/code&gt;/g, '</code>');

    t.raw = <T>(key: string): T => {
        const value = lookup(locale, key);
        if (value === undefined) throw new Error(`Missing message "${key}" for "${locale}"`);
        return value as T;
    };

    return t;
}

export function localePath(locale: Locale, path = '') {
    return `/${locale}/${path}`;
}
