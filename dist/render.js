// Pure functions turning data/*.json into the HTML that goes inside div.main.
//
// Values from the JSON are inserted verbatim: the content deliberately contains
// markup (<u>, <a>, <br>), so nothing here escapes it.
export const renderTop = (d) => {
    let html = '<div><dl>';
    for (const item of d.info)
        html += `<dt>${item.label}</dt><dd>${item.value}</dd>`;
    html += `</dl><h2>${d.linksTitle}</h2><ul>`;
    for (const link of d.links)
        html += `<li><a href="${link.url}">${link.label}</a></li>`;
    return html + '</ul></div>';
};
export const renderResearch = (d) => `<div><h2>${d.title}</h2><h3>${d.keywordsTitle}</h3><ul><li>` +
    d.keywords.join('、') +
    '</li></ul></div>';
export const renderCV = (d) => {
    let html = `<div><h2>${d.title}</h2>`;
    for (const section of d.sections) {
        html += `<h3>${section.title}</h3><dl>`;
        for (const item of section.items) {
            html += `<dt>${item.period}</dt><dd>${item.description}</dd>`;
        }
        html += '</dl>';
    }
    return html + '</div>';
};
export const renderPublication = (file, lang) => {
    let html = `<div><h2>${file[lang].title}</h2>`;
    for (const section of file.sections) {
        html += `<h3>${section.title[lang]}</h3><ol reversed>`;
        for (const item of section.items) {
            const links = item.links.map((l) => `[<a href="${l.url}">${l.label}</a>]`).join(', ');
            html += `<li>${item.authors},<br>"${item.title}",<br>${links}</li>`;
        }
        html += '</ol>';
    }
    return html + '</div>';
};
export const renderPresentation = (d) => {
    let html = `<div><h2>${d.title}</h2>`;
    for (const section of d.sections) {
        html += `<h3>${section.title}</h3><ol reversed>`;
        for (const item of section.items) {
            const note = item.note ? ` ${item.note}` : '';
            html += `<li>${item.authors},<br>"${item.title}"${note},<br>` +
                `${item.venue}<br>${item.date}</li>`;
        }
        html += '</ol>';
    }
    return html + '</div>';
};
