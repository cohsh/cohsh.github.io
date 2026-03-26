function loadTop() {
    page = 'top'
    loadSidebar()
    fetch('data/top.json')
        .then(res => res.json())
        .then(data => {
            const d = data[lang]
            let html = '<div><dl>'
            for (const item of d.info) {
                html += `<dt>${item.label}</dt><dd>${item.value}</dd>`
            }
            html += `</dl><h2>${d.linksTitle}</h2><ul>`
            for (const link of d.links) {
                html += `<li><a href="${link.url}">${link.label}</a></li>`
            }
            html += '</ul></div>'
            document.getElementById('main').innerHTML = html
        })
}
