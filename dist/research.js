function loadResearch() {
    page = 'research';
    loadSidebar();
    fetch('data/research.json')
        .then(function (res) { return res.json(); })
        .then(function (data) {
        var d = data[lang];
        var html = "<div><h2>".concat(d.title, "</h2>");
        html += "<h3>".concat(d.keywordsTitle, "</h3><ul><li>");
        html += d.keywords.join('、');
        html += '</li></ul></div>';
        document.getElementById('main').innerHTML = html;
    });
}
