function loadPublication() {
    page = 'publication';
    loadSidebar();
    fetch('data/publication.json')
        .then(function (res) { return res.json(); })
        .then(function (data) {
        var d = data[lang];
        var html = "<div><h2>".concat(d.title, "</h2><ol reversed>");
        for (var _i = 0, _a = data.items; _i < _a.length; _i++) {
            var item = _a[_i];
            var links = item.links.map(function (l) { return "[<a href=\"".concat(l.url, "\">").concat(l.label, "</a>]"); }).join(', ');
            html += "<li>".concat(item.authors, ",<br>\"").concat(item.title, "\",<br>").concat(links, "</li>");
        }
        html += '</ol></div>';
        document.getElementById('main').innerHTML = html;
    });
}
