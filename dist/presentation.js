function loadPresentation() {
    page = 'presentation';
    loadSidebar();
    fetch('data/presentation.json')
        .then(function (res) { return res.json(); })
        .then(function (data) {
        var d = data[lang];
        var html = "<div><h2>".concat(d.title, "</h2>");
        for (var _i = 0, _a = d.sections; _i < _a.length; _i++) {
            var section = _a[_i];
            html += "<h3>".concat(section.title, "</h3><ol reversed>");
            for (var _b = 0, _c = section.items; _b < _c.length; _b++) {
                var item = _c[_b];
                html += "<li>".concat(item.authors, ",<br>\"").concat(item.title, "\",<br>").concat(item.venue, "<br>").concat(item.date, "</li>");
            }
            html += '</ol>';
        }
        html += '</div>';
        document.getElementById('main').innerHTML = html;
    });
}
