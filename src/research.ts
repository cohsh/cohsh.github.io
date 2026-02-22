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
            density functional perturbation theory,
            automatic differentiation,
            materials design,
            inverse design,
            KKR-CPA method
        </li>
        </ul>
        </div>`
    } else if (lang === 'ja') {
        document.getElementById('main').innerHTML = `<div>
        <h2>研究</h2>
        <h3>キーワード</h3>
        <ul>
        <li>
            第一原理計算、多体摂動論、電子・フォノン相互作用、密度汎関数理論、密度汎関数摂動理論、自動微分、物質設計、逆設計、KKR-CPA法
        </li>
        </ul>
        </div>`
    }
}
