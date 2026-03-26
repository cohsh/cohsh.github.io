function loadTop() {
    page = 'top';
    loadSidebar();
    fetch('data/top.json')
        .then(function (res) { return res.json(); })
        .then(function (data) {
        var d = data[lang];
        var html = '<div><dl>';
        for (var _i = 0, _a = d.info; _i < _a.length; _i++) {
            var item = _a[_i];
            html += "<dt>".concat(item.label, "</dt><dd>").concat(item.value, "</dd>");
        }
        html += "</dl><h2>".concat(d.linksTitle, "</h2><ul>");
        for (var _b = 0, _c = d.links; _b < _c.length; _b++) {
            var link = _c[_b];
            html += "<li><a href=\"".concat(link.url, "\">").concat(link.label, "</a></li>");
        }
        html += '</ul></div>';
        document.getElementById('main').innerHTML = html;
    });
}
