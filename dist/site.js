// Shared description of the site's structure, used by the page generator.
export const LANGS = ['en', 'ja'];
export const OTHER = { en: 'ja', ja: 'en' };
export const SITE = 'https://cohsh.github.io';
// The site name is the same on the English and Japanese pages.
export const SITE_NAME = "Kohei Ishii's Website";
export const FONT = '/fonts/NotoSansJP-Thin-subset.woff2';
export const ROUTER = '/dist/router.js';
export const PAGES = [
    { key: 'top', slug: '', nav: { en: 'Top', ja: 'トップ' } },
    { key: 'research', slug: 'research', nav: { en: 'Research', ja: '研究' } },
    { key: 'cv', slug: 'cv', nav: { en: 'CV', ja: '略歴' } },
    { key: 'publication', slug: 'publication', nav: { en: 'Publication', ja: '論文' } },
    { key: 'presentation', slug: 'presentation', nav: { en: 'Presentation', ja: '講演' } },
];
// Root-absolute URL of a page (the site is served from the domain root).
export const url = (lang, slug) => {
    const parts = [lang === 'en' ? '' : 'ja', slug].filter(Boolean);
    return '/' + (parts.length ? parts.join('/') + '/' : '');
};
