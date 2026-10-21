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

// Each research topic is a single entry shared by both pages: its text is quoted
// in the language it was written in, and only the heading and the line naming
// where it comes from are keyed by language.
export interface ResearchFile {
    en: { title: string }
    ja: { title: string }
    topics: {
        title: Record<Lang, string>
        paragraphs: string[]
        references: string[]
        source: Record<Lang, string>
    }[]
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

// Like the papers, each work is a single entry shared by both pages, with only
// its wording keyed by language, so the two lists cannot drift apart.
export interface WorksFile {
    en: { title: string }
    ja: { title: string }
    items: {
        url: string
        title: Record<Lang, string>
        description: Record<Lang, string>
    }[]
}

export interface PresentationData {
    title: string
    legend: string
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

export const renderResearch = (file: ResearchFile, lang: Lang): string => {
    let html = `<div><h2>${file[lang].title}</h2>`
    for (const topic of file.topics) {
        html += `<h3>${topic.title[lang]}</h3>`
        for (const paragraph of topic.paragraphs) html += `<p>${paragraph}</p>`
        if (topic.references.length > 0) {
            html += '<ul>'
            topic.references.forEach((ref, i) => { html += `<li>[${i + 1}] ${ref}</li>` })
            html += '</ul>'
        }
        html += `<p>${topic.source[lang]}</p>`
    }
    return html + '</div>'
}

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
    let html = `<div><h2>${d.title}</h2><p>${d.legend}</p>`
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

export const renderWorks = (file: WorksFile, lang: Lang): string => {
    let html = `<div><h2>${file[lang].title}</h2><dl>`
    for (const item of file.items) {
        html += `<dt><a href="${item.url}">${item.title[lang]}</a></dt>` +
                `<dd>${item.description[lang]}</dd>`
    }
    return html + '</dl></div>'
}
