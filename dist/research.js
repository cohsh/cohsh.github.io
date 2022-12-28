function loadResearch() {
    page = 'research';
    loadSidebar();
    if (lang === 'en') {
        document.getElementById('main').innerHTML = "<div>\n        <h2>Research</h2>\n        <h3>Interest</h3>\n        <ul>\n        <li>Condensed matter physics</li>\n        <li>First-principles calculation</li>\n        </ul>\n        <h3>Tool</h3>\n        <ul>\n        <li>Quantum ESPRESSO [<a href=\"https://github.com/QEF/q-e\">GitHub</a>]\n            [<a href=\"https://gitlab.com/QEF/q-e\">GitLab</a>]</li>\n            </ul>\n        <h3>Skill</h3>\n        <ul>\n        <li>Programming [<a href=\"https://github.com/cohsh\">GitHub</a>]\n            <ul>\n        <li>Python, JavaScript, Kotlin, PHP, C/C++, Rust, Fortran, Shell</li>\n        </ul>\n        <li>Markup</li>\n        <ul>\n        <li>$\\LaTeX$, HTML, Markdown</li>\n        </ul>\n        </ul>\n        </div>";
    }
    else if (lang === 'ja') {
        document.getElementById('main').innerHTML = "<div>\n        <h2>\u7814\u7A76</h2>\n        <h3>\u8208\u5473</h3>\n        <ul>\n        <li>\u7269\u6027\u7269\u7406\u5B66</li>\n        <li>\u7B2C\u4E00\u539F\u7406\u8A08\u7B97</li>\n        </ul>\n        <h3>\u30C4\u30FC\u30EB</h3>\n        <ul>\n        <li>Quantum ESPRESSO [<a href=\"https://github.com/QEF/q-e\">GitHub</a>]\n            [<a href=\"https://gitlab.com/QEF/q-e\">GitLab</a>]</li>\n            </ul>\n        <h3>\u30B9\u30AD\u30EB</h3>\n        <ul>\n        <li>\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0 [<a href=\"https://github.com/cohsh\">GitHub</a>]\n            <ul>\n        <li>Python, JavaScript/TypeScript, Kotlin, PHP, C/C++, Rust, Fortran, Shell</li>\n        </ul>\n        <li>\u30DE\u30FC\u30AF\u30A2\u30C3\u30D7</li>\n        <ul>\n        <li>LaTeX, HTML, Markdown</li>\n        </ul>\n        </ul>\n        </div>";
    }
}
