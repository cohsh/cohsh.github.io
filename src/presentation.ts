function loadPresentation() {
    page = 'presentation'
    loadSidebar()
    if (lang === 'en') {
        document.getElementById('main').innerHTML = `<div>
        <h2>Presentation</h2>
        <h3>Domestic conference</h3>
        <ol reversed>
        <li>
        <u>石井浩平</u>，春山潤，杉野修，
        <br>
        "電子・フォノン相互作用を無限次まで取り込んだバンドギャップの第一原理計算"，
        <br>
        日本物理学会2022年秋季大会，
        2022年9月
        </li>
        <li>
        <u>石井浩平</u>，春山潤，杉野修，
        <br>
        "高次の電子・フォノン相互作用を取り込んだ第一原理計算手法の開発"，
        <br>
        日本物理学会第77回年次大会，
        2022年3月
        </li>
        <li>
        <u>石井浩平</u>，春山潤，杉野修，
        <br>
        "電子・マルチフォノン相互作用の取り込みに向けた第一原理計算手法の開発"，
        <br>
        日本物理学会2021年秋季大会，
        2021年9月
        </li>
        <li>
        <u>石井浩平</u>，春山潤，杉野修，
        <br>
        "電子・フォノン相互作用による半導体のバンドギャップ補正の第一原理計算"，
        <br>
        日本物理学会2020年秋季大会，
        2020年9月
        </li>
        </ol>
        </div>`
    } else if (lang === 'ja') {
        document.getElementById('main').innerHTML = `<div>
        <h2>講演</h2>
        <h3>国内学会</h3>
        <ol reversed>
        <li>
        <u>石井浩平</u>，春山潤，杉野修，
        <br>
        "電子・フォノン相互作用を無限次まで取り込んだバンドギャップの第一原理計算"，
        <br>
        日本物理学会2022年秋季大会，
        2022年9月
        </li>
        <li>
        <u>石井浩平</u>，春山潤，杉野修，
        <br>
        "高次の電子・フォノン相互作用を取り込んだ第一原理計算手法の開発"，
        <br>
        日本物理学会第77回年次大会，
        2022年3月
        </li>
        <li>
        <u>石井浩平</u>，春山潤，杉野修，
        <br>
        "電子・マルチフォノン相互作用の取り込みに向けた第一原理計算手法の開発"，
        <br>
        日本物理学会2021年秋季大会，
        2021年9月
        </li>
        <li>
        <u>石井浩平</u>，春山潤，杉野修，
        <br>
        "電子・フォノン相互作用による半導体のバンドギャップ補正の第一原理計算"，
        <br>
        日本物理学会2020年秋季大会，
        2020年9月
        </li>
        </ol>
        </div>`
    }
}
