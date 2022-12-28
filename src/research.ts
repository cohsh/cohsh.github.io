function loadResearch() {
    page = 'research'
    loadSidebar()
    if (lang === 'en') {
        document.getElementById('main').innerHTML = `<div>
        <h2>Research</h2>
        <h3>Interest</h3>
        <ul>
        <li>Condensed matter physics</li>
        <ul>
        <li>Electron-phonon interactions</li>
        </ul>
        <li>First-principles calculations</li>
        </ul>
        <h3>Tool</h3>
        <ul>
        <li>Quantum ESPRESSO [<a href="https://github.com/QEF/q-e">GitHub</a>]
            [<a href="https://gitlab.com/QEF/q-e">GitLab</a>]</li>
            </ul>
        <h3>Skill</h3>
        <ul>
        <li>Programming</li>
        <ul>
        <li>Python, JavaScript/TypeScript, Kotlin, PHP, C/C++, Rust, Fortran, Shell</li>
        </ul>
        <li>Markup</li>
        <ul>
        <li>LaTeX, HTML, Markdown</li>
        </ul>
        </ul>
        </div>`
    } else if (lang === 'ja') {
        document.getElementById('main').innerHTML = `<div>
        <h2>研究</h2>
        <h3>興味</h3>
        <ul>
        <li>物性物理学</li>
        <ul>
        <li>電子・フォノン相互作用</li>
        </ul>
        <li>第一原理計算</li>
        </ul>
        <h3>ツール</h3>
        <ul>
        <li>Quantum ESPRESSO [<a href="https://github.com/QEF/q-e">GitHub</a>]
            [<a href="https://gitlab.com/QEF/q-e">GitLab</a>]</li>
            </ul>
        <h3>スキル</h3>
        <ul>
        <li>プログラミング</li>
        <ul>
        <li>Python, JavaScript/TypeScript, Kotlin, PHP, C/C++, Rust, Fortran, Shell</li>
        </ul>
        <li>マークアップ</li>
        <ul>
        <li>LaTeX, HTML, Markdown</li>
        </ul>
        </ul>
        </div>`
    }
}
