function loadCV() {
    page = 'cv'
    loadSidebar()
    fetch('data/cv.json')
        .then(res => res.json())
        .then(data => {
            const d = data[lang]
            let html = `<div><h2>${d.title}</h2>`
            for (const section of d.sections) {
                html += `<h3>${section.title}</h3><dl>`
                for (const item of section.items) {
                    html += `<dt>${item.period}</dt><dd>${item.description}</dd>`
                }
                html += '</dl>'
            }
            html += '</div>'
            document.getElementById('main').innerHTML = html
        })
}
