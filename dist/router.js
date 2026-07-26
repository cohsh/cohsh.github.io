"use strict";
// Instant navigation between the pre-rendered pages.
//
// The pages are already complete HTML, so the first paint needs no JavaScript
// at all. Once that has happened this module quietly loads every other page
// into memory, after which a click costs no network at all — it only swaps the
// parts of the document that differ. Without JavaScript the same links still
// work as ordinary navigation.
const cache = new Map();
const pick = (root, selector) => root.querySelector(selector);
const snapshot = (doc) => {
    const nav = pick(doc, '#lang');
    const side = pick(doc, 'div.side');
    const main = pick(doc, 'div.main');
    if (!nav || !side || !main)
        return null;
    return {
        title: doc.title,
        lang: doc.documentElement.lang,
        nav: nav.innerHTML,
        side: side.innerHTML,
        main: main.innerHTML,
    };
};
const apply = (s) => {
    document.title = s.title;
    document.documentElement.lang = s.lang;
    const nav = pick(document, '#lang');
    const side = pick(document, 'div.side');
    const main = pick(document, 'div.main');
    if (nav)
        nav.innerHTML = s.nav;
    if (side)
        side.innerHTML = s.side;
    if (main) {
        main.innerHTML = s.main;
        main.scrollTop = 0;
    }
};
const load = async (path) => {
    const hit = cache.get(path);
    if (hit)
        return hit;
    try {
        const res = await fetch(path);
        if (!res.ok)
            return null;
        const doc = new DOMParser().parseFromString(await res.text(), 'text/html');
        const s = snapshot(doc);
        if (s)
            cache.set(path, s);
        return s;
    }
    catch {
        return null;
    }
};
const navigate = async (path, push) => {
    const s = await load(path);
    if (!s) {
        location.href = path; // fall back to a normal page load
        return;
    }
    apply(s);
    if (push)
        history.pushState(null, '', path);
};
// Only the sidebar and the language switch are handled here; every link in the
// content itself points at another site and is left alone.
const isInternal = (a) => a.origin === location.origin &&
    !a.hasAttribute('target') &&
    !a.hasAttribute('download') &&
    a.pathname.endsWith('/');
document.addEventListener('click', (event) => {
    if (event.defaultPrevented || event.button !== 0)
        return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
        return;
    const target = event.target;
    const anchor = target?.closest('a');
    if (!anchor || !isInternal(anchor))
        return;
    if (anchor.pathname === location.pathname) {
        event.preventDefault();
        return;
    }
    event.preventDefault();
    void navigate(anchor.pathname, true);
});
addEventListener('popstate', () => void navigate(location.pathname, false));
// Walk the sidebar and language links of each page until every page is cached.
// All ten pages together are well under 40 KB.
const warm = async () => {
    const queue = [location.pathname];
    const seen = new Set(queue);
    while (queue.length > 0) {
        const path = queue.shift();
        const s = await load(path);
        if (!s)
            continue;
        const holder = document.createElement('div');
        holder.innerHTML = s.side + s.nav;
        for (const anchor of Array.from(holder.querySelectorAll('a'))) {
            const href = anchor.getAttribute('href');
            if (!href)
                continue;
            const next = new URL(href, location.origin).pathname;
            if (!seen.has(next)) {
                seen.add(next);
                queue.push(next);
            }
        }
    }
};
const current = snapshot(document);
if (current)
    cache.set(location.pathname, current);
const idle = window.requestIdleCallback;
if (idle)
    idle(() => void warm());
else
    setTimeout(() => void warm(), 200);
