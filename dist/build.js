// Generate the whole site as static HTML.
//
// The content in data/*.json is rendered here at build time and css/style.css
// is inlined, so a browser paints as soon as the HTML arrives — no JavaScript
// and no JSON fetch are needed for the first view. dist/router.js is loaded
// afterwards and makes subsequent navigation instant.
//
// Edit data/*.json (or css/style.css) and run `npm run build`.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FONT, LANGS, OTHER, PAGES, ROUTER, SITE, SITE_NAME, url, } from './site.js';
import { renderCV, renderPresentation, renderPublication, renderResearch, renderTop, } from './render.js';
const root = dirname(dirname(fileURLToPath(import.meta.url)));
const read = (...parts) => readFileSync(join(root, ...parts), 'utf8');
const load = (name) => JSON.parse(read('data', name));
const top = load('top.json');
const research = load('research.json');
const cv = load('cv.json');
const publication = load('publication.json');
const presentation = load('presentation.json');
const css = read('css', 'style.css').trim();
// Links that leave the site open in a new tab, so a visitor following a paper
// or a profile does not lose the page they came from. This covers the anchors
// written directly into data/*.json as well as the ones the renderers build,
// because it runs over the finished HTML. Navigation within the site uses
// root-relative hrefs and is left alone.
const openExternallyInNewTab = (html) => html.replace(/<a href="(https?:\/\/[^"]*)"/g, '<a href="$1" target="_blank" rel="noopener"');
const content = (lang, page) => {
    const html = (() => {
        switch (page.key) {
            case 'top': return renderTop(top[lang]);
            case 'research': return renderResearch(research[lang]);
            case 'cv': return renderCV(cv[lang]);
            case 'publication': return renderPublication(publication, lang);
            case 'presentation': return renderPresentation(presentation[lang]);
        }
    })();
    return openExternallyInNewTab(html);
};
// The heading each page shows, taken verbatim from the data files.
const heading = (lang, page) => {
    switch (page.key) {
        case 'top': return null;
        case 'research': return research[lang].title;
        case 'cv': return cv[lang].title;
        case 'publication': return publication[lang].title;
        case 'presentation': return presentation[lang].title;
    }
};
const pageTitle = (lang, page) => {
    const name = heading(lang, page);
    return name ? `${name} | ${SITE_NAME}` : SITE_NAME;
};
const sidebar = (lang, current) => {
    const items = PAGES.map((p) => {
        const cls = p.key === current.key ? ' class="current"' : '';
        return `<li${cls}><a href="${url(lang, p.slug)}" data-route>${p.nav[lang]}</a></li>`;
    });
    return `<ul class="side">${items.join('')}</ul>`;
};
const buildPage = (lang, page) => {
    const here = url(lang, page.slug);
    const there = url(OTHER[lang], page.slug);
    // data-route marks the links the router may handle. Everything else —
    // including links to other things under this domain, such as the blog —
    // is left to the browser.
    const langLine = lang === 'en'
        ? `English / <a href="${there}" data-route>日本語</a>`
        : `<a href="${there}" data-route>English</a> / 日本語`;
    return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#A4CA68">
<title>${pageTitle(lang, page)}</title>
<link rel="canonical" href="${SITE}${here}">
<link rel="alternate" hreflang="en" href="${SITE}${url('en', page.slug)}">
<link rel="alternate" hreflang="ja" href="${SITE}${url('ja', page.slug)}">
<link rel="alternate" hreflang="x-default" href="${SITE}${url('en', page.slug)}">
<link rel="preload" href="${FONT}" as="font" type="font/woff2" crossorigin>
<style>
${css}
</style>
</head>
<body>
<header><h1>${SITE_NAME}</h1></header>
<h4 id="lang">${langLine}</h4>
<div class="side">${sidebar(lang, page)}</div>
<div class="container"><div class="main">${content(lang, page)}</div></div>
<footer>&copy; Kohei Ishii</footer>
<script type="module" src="${ROUTER}"></script>
</body>
</html>
`;
};
const sitemap = () => {
    const entries = [];
    for (const lang of LANGS) {
        for (const page of PAGES)
            entries.push(`  <url><loc>${SITE}${url(lang, page.slug)}</loc></url>`);
    }
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`;
};
let written = 0;
let bytes = 0;
for (const lang of LANGS) {
    for (const page of PAGES) {
        const parts = [lang === 'en' ? '' : 'ja', page.slug].filter(Boolean);
        const file = join(root, ...parts, 'index.html');
        mkdirSync(dirname(file), { recursive: true });
        const html = buildPage(lang, page);
        writeFileSync(file, html);
        written += 1;
        bytes += Buffer.byteLength(html);
        console.log(`  ${url(lang, page.slug).padEnd(18)} ${String(Buffer.byteLength(html)).padStart(6)} bytes`);
    }
}
writeFileSync(join(root, 'sitemap.xml'), sitemap());
writeFileSync(join(root, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);
console.log(`\n${written} pages, ${bytes.toLocaleString()} bytes total ` +
    `(avg ${Math.round(bytes / written).toLocaleString()} bytes/page)`);
