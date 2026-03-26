function loadPresentation() {
    page = 'presentation'
    loadSidebar()
    fetch('data/presentation.json')
        .then(res => res.json())
        .then(data => {
            const d = data[lang]
            let html = `<div><h2>${d.title}</h2>`
            for (const section of d.sections) {
                html += `<h3>${section.title}</h3><ol reversed>`
                for (const item of section.items) {
                    html += `<li>${item.authors},<br>"${item.title}",<br>${item.venue}<br>${item.date}</li>`
                }
                html += '</ol>'
            }
            html += '</div>'
            document.getElementById('main').innerHTML = html
        })
}
