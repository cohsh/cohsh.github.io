function loadPresentation() {
    page = 'presentation'
    loadSidebar()
    if (lang === 'en') {
        document.getElementById('main').innerHTML = `<div>
        <h2>Presentation</h2>
        <h3>Oral (Domestic)</h3>
        <ol reversed>
        <li>
        <u>Kohei Ishii</u>, Hisazumi Akai, Tetsuya Fukushima, Hikari Shinya, and Koji Inui,
        <br>
        "First-Principles Inverse Design of Magnetic Materials by Automatic Differentiation",
        <br>
        Fourth Workshop on Density Functional Theory: Fundamentals, Developments, and Applications (DFT2026)
        <br>
        (January 28th, 2026, Research Center for Nuclear Physics, The University of Osaka)
        </li>
        <li>
        <u>Kohei Ishii</u>, Jun Haruyama, Osamu Sugino,
        <br>
        "Evaluating the Importance of Second-Order Electron-Phonon Interactions in the Empty Lattice Model" (in Japanese),
        <br>
        2024 Annual (79th) Meeting, The Physical Society of Japan.
        <br>
        (September 16th, 2024, Sapporo Campus, Hokkaido University)
        </li>
        <li>
        <u>Kohei Ishii</u>, Jun Haruyama, Osamu Sugino,
        <br>
        "First-principles calculations of band gaps incorporating electron-phonon interactions to infinite order" (in Japanese),
        <br>
        Autumn Meeting 2022, The Physical Society of Japan. 
        <br>
        (September 12th, 2022, Ookayama Campus, Tokyo Institute of Technology)
        </li>
        <li>
        <u>Kohei Ishii</u>, Jun Haruyama, Osamu Sugino,
        <br>
        "Development of first-principles calculation methods incorporating higher-order electron-phonon interactions" (in Japanese),
        <br>
        2022 Annual (77th) Meeting, The Physical Society of Japan.
        <br>
        (March 16th, 2022, Online)
        </li>
        <li>
        <u>Kohei Ishii</u>, Jun Haruyama, Osamu Sugino,
        <br>
        "First-principles calculation of band gap correction of semiconductors by electron-phonon interactions" (in Japanese),
        <br>
        Autumn Meeting 2020, The Physical Society of Japan.
        <br>
        (September 10th, 2020, Online)
        </li>
        </ol>
        <h3>Poster (Domestic)</h3>
        <ol reversed>
        <li>
        <u>Kohei Ishii</u>, Hisazumi Akai, Tetsuya Fukushima, Hikari Shinya, and Koji Inui,
        <br>
        "First-Principles Inverse Magnetic Materials Design by Automatic Differentiation",
        <br>
        The 26th Asian Workshop on First-Principles Electronic Structure Calculations (ASIAN-26)
        <br>
        (October 28th, 2026, Tsukuba International Congress Center, Tsukuba, Japan)
        </li>
        <li>
        <u>Kohei Ishii</u>, Jun Haruyama, Osamu Sugino,
        <br>
        "Allen-Heine-Cardona理論の拡張とバンドギャップ補正への適用",
        <br>
        物性研究所スパコン共同利用・CCMS合同研究会「計算物質科学の新展開」,
        <br>
        (May 12th, 2022, Online)
        </li>
        <li>
        <u>Kohei Ishii</u>, Jun Haruyama, Osamu Sugino,
        <br>
        "Development of first-principles methods for the incorporation of electron-multiphonon interactions" (in Japanese),
        <br>
        Autumn Meeting 2021, The Physical Society of Japan.
        <br>
        (September 21st, 2021, Online)
        </li>
        <li>
        <u>Kohei Ishii</u>, Jun Haruyama, Osamu Sugino,
        <br>
        "電子・フォノン相互作用によるバンドギャップ補正における選択則",
        <br>
        物性研究所スパコン共同利用・CCMS合同研究会「計算物質科学の新展開2020」,
        <br>
        (December 21st, 2020, Online)
        </li>
        <li>
        <u>Kohei Ishii</u>, Yoshifumi Noguchi, and Osamu Sugino,
        <br>
        "Self-consistent GW+BSE calculation on small molecules",
        <br>
        The International Summer WorkShop 2018 on First-Principles Electronic Structure Calculations in ISSP.
        <br>
        (July 11th, 2018, The Institute for Solid State Physics, The University of Tokyo)
        </li>
        </ol>
        </div>`
    } else if (lang === 'ja') {
        document.getElementById('main').innerHTML = `<div>
        <h2>講演</h2>
        <h3>口頭（国内）</h3>
        <ol reversed>
        <li>
        <u>石井浩平</u>, 赤井久純, 福島鉄也, 新屋ひかり, 乾幸地,
        <br>
        "First-Principles Inverse Design of Magnetic Materials by Automatic Differentiation",
        <br>
        Fourth Workshop on Density Functional Theory: Fundamentals, Developments, and Applications (DFT2026)
        <br>
        （2026年1月28日, 大阪大学核物理研究センター）
        </li>
        <li>
        <u>石井浩平</u>, 春山潤, 杉野修,
        <br>
        "空格子模型における二次の電子・フォノン相互作用の重要性の評価",
        <br>
        日本物理学会第79回年次大会.
        <br>
        （2024年9月16日, 北海道大学札幌キャンパス）
        </li>
        <li>
        <u>石井浩平</u>, 春山潤, 杉野修,
        <br>
        "電子・フォノン相互作用を無限次まで取り込んだバンドギャップの第一原理計算",
        <br>
        日本物理学会2022年秋季大会.
        <br>
        （2022年9月12日, 東京工業大学大岡山キャンパス）
        </li>
        <li>
        <u>石井浩平</u>, 春山潤, 杉野修,
        <br>
        "高次の電子・フォノン相互作用を取り込んだ第一原理計算手法の開発",
        <br>
        日本物理学会第77回年次大会.
        <br>
        （2022年3月16日, オンライン）
        </li>
        <li>
        <u>石井浩平</u>, 春山潤, 杉野修,
        <br>
        "電子・フォノン相互作用による半導体のバンドギャップ補正の第一原理計算",
        <br>
        日本物理学会2020年秋季大会.
        <br>
        （2020年9月10日, オンライン）
        </li>
        </ol>
        <h3>ポスター（国内）</h3>
        <ol reversed>
                <li>
        <u>石井浩平</u>, 赤井久純, 福島鉄也, 新屋ひかり, 乾幸地,
        <br>
        "First-Principles Inverse Magnetic Materials Design by Automatic Differentiation",
        <br>
        The 26th Asian Workshop on First-Principles Electronic Structure Calculations (ASIAN-26)
        <br>
        （2026年10月28日, つくば国際会議場）
        </li>
        <li>
        <u>石井浩平</u>, 春山潤, 杉野修,
        <br>
        "Allen-Heine-Cardona理論の拡張とバンドギャップ補正への適用",
        <br>
        物性研究所スパコン共同利用・CCMS合同研究会「計算物質科学の新展開」.
        <br>
        （2022年5月12日, オンライン）
        </li>
        <li>
        <u>石井浩平</u>, 春山潤, 杉野修,
        <br>
        "電子・マルチフォノン相互作用の取り込みに向けた第一原理計算手法の開発",
        <br>
        日本物理学会2021年秋季大会.
        <br>
        （2021年9月21日, オンライン）
        </li>
        <li>
        <u>石井浩平</u>, 春山潤, 杉野修,
        <br>
        "電子・フォノン相互作用によるバンドギャップ補正における選択則",
        <br>
        物性研究所スパコン共同利用・CCMS合同研究会「計算物質科学の新展開2020」.
        <br>
        （2020年12月21日, オンライン）
        </li>
        <li>
        <u>Kohei Ishii</u>, Yoshifumi Noguchi, and Osamu Sugino,
        <br>
        "Self-consistent GW+BSE calculation on small molecules",
        <br>
        The International Summer WorkShop 2018 on First-Principles Electronic Structure Calculations in ISSP.
        <br>
        （2018年7月11日, 東京大学物性研究所）
        </li>
        </ol>
        </div>`
    }
}
