function loadTop() {
    page = 'top';
    loadSidebar();
    if (lang === 'en') {
        document.getElementById('main').innerHTML = "<div>\n        <h2>Profile</h2>\n        <dl>\n        <dt>Position</dt>\n        <dd>Ph.D. Student</dd>\n        <dt>Affiliation</dt>\n        <dd>Department of Physics, Graduate School of Science,<br>\n        The University of Tokyo, Japan</dd>\n        <dt>Group</dt>\n        <dd><a href=\"https://sugino.issp.u-tokyo.ac.jp\">Sugino Group</a>, The Institute for Solid State Physics (ISSP)</dd>\n                <dt>Mail</dt>\n            <dd>kishii [.at.] issp.u-tokyo.ac.jp</dd>\n        </dl>\n        <h2>Link</h2>\n        <ul>\n        <li><a href=\"https://scholar.google.com/citations?user=QR65JkUAAAAJ\">Google Scholar</a></li>\n            <li><a href=\"https://github.com/cohsh\">GitHub</a></li>\n            <li><a href=\"https://twitter.com/cohsh_\">Twitter</a></li>\n            </ul>\n        </div>";
    }
    else if (lang === 'ja') {
        document.getElementById('main').innerHTML = "<div>\n        <h2>\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB</h2>\n        <dl>\n        <dt>\u6240\u5C5E</dt>\n        <dd>\u6771\u4EAC\u5927\u5B66\u3000\u5927\u5B66\u9662\u7406\u5B66\u7CFB\u7814\u7A76\u79D1\u3000\u7269\u7406\u5B66\u5C02\u653B\u3000\u535A\u58EB\u8AB2\u7A0B</dd>\n        <dd>\u7269\u6027\u7814\u7A76\u6240\uFF08ISSP\uFF09\u3000<a href=\"https://sugino.issp.u-tokyo.ac.jp\">\u6749\u91CE\u7814\u7A76\u5BA4</a></dd>\n            <dt>\u30E1\u30FC\u30EB</dt>\n        <dd>kishii [.at.] issp.u-tokyo.ac.jp</dd>\n        </dl>\n\n        <h2>\u30EA\u30F3\u30AF</h2>\n        <ul>\n        <li><a href=\"https://scholar.google.com/citations?user=QR65JkUAAAAJ\">Google Scholar</a></li>\n            <li><a href=\"https://github.com/cohsh\">GitHub</a></li>\n            <li><a href=\"https://twitter.com/cohsh_\">Twitter</a></li>\n            </ul>\n        </div>";
    }
}
