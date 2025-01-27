function loadResearch() {
    page = 'research';
    loadSidebar();
    if (lang === 'en') {
        document.getElementById('main').innerHTML = "<div>\n        <h2>Research</h2>\n        <h3>Keywords</h3>\n        <ul>\n        <li>\n            first-principles calculation,\n            many-body perturbation theory,\n            electron-phonon interactions,\n            density functional theory,\n            density functional perturbation theory\n        </li>\n        </ul>\n        <h3>Skill</h3>\n        <ul>\n        <li>Programming</li>\n        <ul>\n        <li>Python, JavaScript/TypeScript, PHP, Ruby, Lua, Kotlin, C, C++, Rust, Fortran, Shell</li>\n        </ul>\n        <li>Markup</li>\n        <ul>\n        <li>LaTeX, HTML/Markdown</li>\n        </ul>\n        </ul>\n        </div>";
    }
    else if (lang === 'ja') {
        document.getElementById('main').innerHTML = "<div>\n        <h2>\u7814\u7A76</h2>\n        <h3>\u30AD\u30FC\u30EF\u30FC\u30C9</h3>\n        <ul>\n        <li>\n            \u7B2C\u4E00\u539F\u7406\u8A08\u7B97\u3001\u591A\u4F53\u6442\u52D5\u8AD6\u3001\u96FB\u5B50\u30FB\u30D5\u30A9\u30CE\u30F3\u76F8\u4E92\u4F5C\u7528\u3001\u5BC6\u5EA6\u6C4E\u95A2\u6570\u7406\u8AD6\u3001\u5BC6\u5EA6\u6C4E\u95A2\u6570\u6442\u52D5\u7406\u8AD6\n        </li>\n        </ul>\n        <h3>\u30B9\u30AD\u30EB</h3>\n        <ul>\n        <li>\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0</li>\n        <ul>\n        <li>Python, JavaScript/TypeScript, PHP, Ruby, Lua, Kotlin, C, C++, Rust, Fortran, Shell</li>\n        </ul>\n        <li>\u30DE\u30FC\u30AF\u30A2\u30C3\u30D7</li>\n        <ul>\n        <li>LaTeX, HTML/Markdown</li>\n        </ul>\n        </ul>\n        </div>";
    }
}
