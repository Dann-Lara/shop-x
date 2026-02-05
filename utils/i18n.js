let currentLang = 'es';
const translations = {};

export async function initI18n(lang = 'es') {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    const sections = ['navbar', 'hero', 'categories', 'inspiration', 'social', 'contact', 'products', 'cart', 'footer'];
    
    for (const section of sections) {
        try {
            const res = await fetch(`./locales/${lang}/${section}.json`);
            if (!res.ok) throw new Error(`Missing: ${section}`);
            translations[section] = await res.json();
        } catch (error) {
            console.warn(`Could not load ${lang}/${section}:`, error);
        }
    }
}

export function t(path) {
    const [section, key] = path.split('.');
    return translations[section]?.[key] || path;
}