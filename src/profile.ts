function loadProfile() {
    page = 'profile'
    loadSidebar()
    if (lang === 'en') {
        document.getElementById('main').innerHTML = `<div>
        <h2>Profile</h2>
        <dl>
        <dt>Name</dt>
        <dd>Kohei Ishii</dd>
        <dt>Position</dt>
        <dd>Ph.D. Student</dd>
        <dt>Affiliation</dt>
        <dd>Department of Physics, Graduate School of Science,<br>
        The University of Tokyo, Japan</dd>
        <dt>Research Theme</dt>
        <dd>Development of first-principles calculation methods for electron-phonon interactions</dd>
        <dt>Hobbies</dt>
        <dd>painting, drawing, photography, cooking, reading, coffee</dd>
        </dl>
        <h2>Link</h2>
        <ul>
            <li><a href="https://x.com/cohsh_">X</a> (research)</li>
            <li><a href="https://x.com/cohsh_t">X</a> (hobbies)</li>
            <li><a href="https://www.instagram.com/cohsh_">Instagram</a> (painting and drawing)</li>
            <li><a href="https://www.instagram.com/cohsh_t">Instagram</a> (photography)</li>
        </ul>
        </div>`
    } else if (lang === 'ja') {
        document.getElementById('main').innerHTML = `<div>
        <h2>プロフィール</h2>
        <dl>
        <dt>名前</dt>
        <dd>石井浩平</dd>
        <dt>所属</dt>
        <dd>東京大学大学院理学系研究科<br>物理学専攻博士課程</dd>
        <dt>研究テーマ</dt>
        <dd>電子・フォノン相互作用の第一原理計算手法の開発</dd>
        <dt>趣味</dt>
        <dd>絵、写真、料理、読書、珈琲</dd>
        </dl>
        <h2>リンク</h2>
        <ul>
            <li><a href="https://x.com/cohsh_">X</a>（研究）</li>
            <li><a href="https://x.com/cohsh_t">X</a>（趣味）</li>
            <li><a href="https://www.instagram.com/cohsh_">Instagram</a>（絵）</li>
            <li><a href="https://www.instagram.com/cohsh_t">Instagram</a>（写真）</li>
        </ul>
        </div>`
    }
}
