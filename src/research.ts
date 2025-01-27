function loadResearch() {
    page = 'research'
    loadSidebar()
    if (lang === 'en') {
        document.getElementById('main').innerHTML = `<div>
        <h2>Research</h2>
        <h3>Keywords</h3>
        <ul>
        <li>
            first-principles calculation,
            many-body perturbation theory,
            electron-phonon interactions,
            density functional theory,
            density functional perturbation theory
        </li>
        </ul>
        <h3>Skill</h3>
        <ul>
        <li>Programming</li>
        <ul>
        <li>Python, JavaScript/TypeScript, PHP, Ruby, Lua, Kotlin, C, C++, Rust, Fortran, Shell</li>
        </ul>
        <li>Markup</li>
        <ul>
        <li>LaTeX, HTML/Markdown</li>
        </ul>
        </ul>
        </div>`
    } else if (lang === 'ja') {
        document.getElementById('main').innerHTML = `<div>
        <h2>研究</h2>
        <h3>キーワード</h3>
        <ul>
        <li>
            第一原理計算、多体摂動論、電子・フォノン相互作用、密度汎関数理論、密度汎関数摂動理論
        </li>
        </ul>
        <h3>スキル</h3>
        <ul>
        <li>プログラミング</li>
        <ul>
        <li>Python, JavaScript/TypeScript, PHP, Ruby, Lua, Kotlin, C, C++, Rust, Fortran, Shell</li>
        </ul>
        <li>マークアップ</li>
        <ul>
        <li>LaTeX, HTML/Markdown</li>
        </ul>
        </ul>
        </div>`
    }
}
