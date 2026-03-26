function loadCV() {
    page = 'cv';
    loadSidebar();
    fetch('data/cv.json')
        .then(function (res) { return res.json(); })
        .then(function (data) {
        var d = data[lang];
        var html = "<div><h2>".concat(d.title, "</h2>");
        for (var _i = 0, _a = d.sections; _i < _a.length; _i++) {
            var section = _a[_i];
            html += "<h3>".concat(section.title, "</h3><dl>");
            for (var _b = 0, _c = section.items; _b < _c.length; _b++) {
                var item = _c[_b];
                html += "<dt>".concat(item.period, "</dt><dd>").concat(item.description, "</dd>");
            }
            html += '</dl>';
        }
        html += '</div>';
        document.getElementById('main').innerHTML = html;
    });
}
