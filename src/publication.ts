function loadPublication() {
    page = 'publication'
    loadSidebar()
    fetch('data/publication.json')
        .then(res => res.json())
        .then(data => {
            const d = data[lang]
            let html = `<div><h2>${d.title}</h2><ol reversed>`
            for (const item of data.items) {
                const links = item.links.map((l: any) => `[<a href="${l.url}">${l.label}</a>]`).join(', ')
                html += `<li>${item.authors},<br>"${item.title}",<br>${links}</li>`
            }
            html += '</ol></div>'
            document.getElementById('main').innerHTML = html
        })
}
