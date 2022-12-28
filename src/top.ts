function loadTop() {
    page = 'top'
    loadSidebar()
    if (lang === 'en') {
        document.getElementById('main').innerHTML = `<div>
        <h2>Profile</h2>
        <dl>
        <dt>Position</dt>
        <dd>Ph.D. Student</dd>
        <dt>Affiliation</dt>
        <dd>Department of Physics, Graduate School of Science,<br>
        The University of Tokyo, Japan</dd>
        <dt>Group</dt>
        <dd><a href="https://sugino.issp.u-tokyo.ac.jp">Sugino Group</a>, The Institute for Solid State Physics (ISSP)</dd>
                <dt>Mail</dt>
            <dd>kishii [.at.] issp.u-tokyo.ac.jp</dd>
        </dl>
        <h2>Link</h2>
        <ul>
        <li><a href="https://scholar.google.com/citations?user=QR65JkUAAAAJ">Google Scholar</a></li>
            <li><a href="https://github.com/cohsh">GitHub</a></li>
            <li><a href="https://twitter.com/cohsh_">Twitter</a></li>
            </ul>
        </div>`
    } else if (lang === 'ja') {
        document.getElementById('main').innerHTML = `<div>
        <h2>プロフィール</h2>
        <dl>
        <dt>所属</dt>
        <dd>東京大学　大学院理学系研究科　物理学専攻　博士課程</dd>
        <dd>物性研究所（ISSP）　<a href="https://sugino.issp.u-tokyo.ac.jp">杉野研究室</a></dd>
            <dt>メール</dt>
        <dd>kishii [.at.] issp.u-tokyo.ac.jp</dd>
        </dl>

        <h2>リンク</h2>
        <ul>
        <li><a href="https://scholar.google.com/citations?user=QR65JkUAAAAJ">Google Scholar</a></li>
            <li><a href="https://github.com/cohsh">GitHub</a></li>
            <li><a href="https://twitter.com/cohsh_">Twitter</a></li>
            </ul>
        </div>`
    }
}
