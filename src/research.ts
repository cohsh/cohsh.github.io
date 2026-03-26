function loadResearch() {
    page = 'research'
    loadSidebar()
    fetch('data/research.json')
        .then(res => res.json())
        .then(data => {
            const d = data[lang]
            let html = `<div><h2>${d.title}</h2>`
            html += `<h3>${d.keywordsTitle}</h3><ul><li>`
            html += d.keywords.join('、')
            html += '</li></ul></div>'
            document.getElementById('main').innerHTML = html
        })
}
