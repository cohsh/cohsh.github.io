function loadTop() {
    page = 'top'
    loadSidebar()
    if (lang === 'en') {
        document.getElementById('main').innerHTML = `<div>
        <dl>
        <dt>Name</dt>
        <dd>Kohei Ishii</dd>
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
        <h2>Links</h2>
        <ul>
        <li><a href="https://orcid.org/0000-0002-6343-1647">ORCID</a></li>
            <li><a href="https://scholar.google.com/citations?user=QR65JkUAAAAJ">Google Scholar</a></li>
            <li><a href="https://github.com/cohsh">GitHub</a></li>
            <li><a href="https://cohsh.github.io/blog/">Blog</a></li>
            <li><a href="https://x.com/cohsh_">X</a></li>
        </ul>
        </div>`
    } else if (lang === 'ja') {
        document.getElementById('main').innerHTML = `<div>
        <dl>
        <dt>名前</dt>
        <dd>石井浩平</dd>
        <dt>所属</dt>
        <dd>東京大学大学院理学系研究科<br>物理学専攻博士課程</dd>
        <dt>研究室</dt>
        <dd>物性研究所<a href="https://sugino.issp.u-tokyo.ac.jp">杉野研究室</a></dd>
            <dt>メール</dt>
        <dd>kishii [.at.] issp.u-tokyo.ac.jp</dd>
        </dl>

        <h2>リンク</h2>
        <ul>
        <li><a href="https://orcid.org/0000-0002-6343-1647">ORCID</a></li>
        <li><a href="https://scholar.google.com/citations?user=QR65JkUAAAAJ">Google Scholar</a></li>
            <li><a href="https://github.com/cohsh">GitHub</a></li>
            <li><a href="https://cohsh.github.io/blog/">Blog</a></li>
            <li><a href="https://x.com/cohsh_">X</a></li>
            </ul>
        </div>`
    }
}
