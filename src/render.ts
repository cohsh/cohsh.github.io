// Pure functions turning data/*.json into the HTML that goes inside div.main.
//
// Values from the JSON are inserted verbatim: the content deliberately contains
// markup (<u>, <a>, <br>), so nothing here escapes it.

import type { Lang } from './site.js'

export interface TopData {
    info: { label: string; value: string }[]
    linksTitle: string
    links: { label: string; url: string }[]
}

export interface ResearchData {
    title: string
    keywordsTitle: string
    keywords: string[]
}

export interface CVData {
    title: string
    sections: { title: string; items: { period: string; description: string }[] }[]
}

// The papers themselves are language-independent, so only the headings are
// keyed by language and the entries are shared between the two pages.
export interface PublicationFile {
    en: { title: string }
    ja: { title: string }
    sections: {
        title: Record<Lang, string>
        items: {
            authors: string
            title: string
            links: { label: string; url: string }[]
        }[]
    }[]
}

export interface PresentationData {
    title: string
    sections: {
        title: string
        items: {
            authors: string
            title: string
            note?: string
            venue: string
            date: string
        }[]
    }[]
}

export const renderTop = (d: TopData): string => {
    let html = '<div><dl>'
    for (const item of d.info) html += `<dt>${item.label}</dt><dd>${item.value}</dd>`
    html += `</dl><h2>${d.linksTitle}</h2><ul>`
    for (const link of d.links) html += `<li><a href="${link.url}">${link.label}</a></li>`
    return html + '</ul></div>'
}

export const renderResearch = (d: ResearchData): string =>
    `<div><h2>${d.title}</h2><h3>${d.keywordsTitle}</h3><ul><li>` +
    d.keywords.join('、') +
    '</li></ul></div>'

export const renderCV = (d: CVData): string => {
    let html = `<div><h2>${d.title}</h2>`
    for (const section of d.sections) {
        html += `<h3>${section.title}</h3><dl>`
        for (const item of section.items) {
            html += `<dt>${item.period}</dt><dd>${item.description}</dd>`
        }
        html += '</dl>'
    }
    return html + '</div>'
}

export const renderPublication = (file: PublicationFile, lang: Lang): string => {
    let html = `<div><h2>${file[lang].title}</h2>`
    for (const section of file.sections) {
        html += `<h3>${section.title[lang]}</h3><ol reversed>`
        for (const item of section.items) {
            const links = item.links.map((l) => `[<a href="${l.url}">${l.label}</a>]`).join(', ')
            html += `<li>${item.authors},<br>"${item.title}",<br>${links}</li>`
        }
        html += '</ol>'
    }
    return html + '</div>'
}

export const renderPresentation = (d: PresentationData): string => {
    let html = `<div><h2>${d.title}</h2>`
    for (const section of d.sections) {
        html += `<h3>${section.title}</h3><ol reversed>`
        for (const item of section.items) {
            const note = item.note ? ` ${item.note}` : ''
            html += `<li>${item.authors},<br>"${item.title}"${note},<br>` +
                    `${item.venue}<br>${item.date}</li>`
        }
        html += '</ol>'
    }
    return html + '</div>'
}
