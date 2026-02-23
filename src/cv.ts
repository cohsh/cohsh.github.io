function loadCV() {
    page = 'cv'
    loadSidebar()
    if (lang === 'en') {
        document.getElementById('main').innerHTML = `<div>
        <h2>Curriculum Vitae</h2>
        <h3>Employment</h3>
        <dl>
        <dt>April 2025 - Present</dt>
        <dd>Project Researcher,<br>Division of Data-Integrated Materials Science, Social Cooperation Research Departments, The Institute for Solid State Physics, The University of Tokyo</dd>
        </dl>
        <h3>Education</h3>
        <dl>
        <dt>April 2020 - March 2025</dt>
        <dd>Ph.D. Course, Department of Physics, Graduate School of Science, The University of Tokyo</dd>
        <dt>April 2017 - March 2020</dt>
        <dd>Master Course, Department of Physics, Graduate School of Science, The University of Tokyo</dd>
        <dt>April 2015 - March 2017</dt>
        <dd>Department of Physics, Faculty of Science, The University of Tokyo</dd>
        <dt>April 2013 - March 2015</dt>
        <dd>College of Arts and Sciences, The University of Tokyo</dd>
        <dt>April 2009 - March 2012</dt>
        <dd>Science and Mathematics Department, Saitama Prefectural Omiya High School</dd>
        </dl>
        <h3>Funding</h3>
        <dl>
        <dt>October 2021 - March 2023</dt>
        <dd>JST SPRING, Grant Number JPMJSP2108</dd>
        </dl>
        <h3>Organizing</h3>
        <dl>
        <dt>February 2-4, 2026</dt>
        <dd>Organizer, "MateriAI 2025: Utilization of AI technology in the field of computational materials science"</dd>
        </dl>
        </div>`
    } else if (lang === 'ja') {
        document.getElementById('main').innerHTML = `<div>
        <h2>略歴</h2>
        <h3>職歴</h3>
        <dl>
        <dt>2025年4月 - 現在</dt>
        <dd>東京大学物性研究所 社会連携研究部門 データ統合型材料物性研究部門<br>特任研究員</dd>
        </dl>
        <h3>学歴</h3>
        <dl>
        <dt>2020年4月 - 2025年3月</dt>
        <dd>東京大学大学院理学系研究科<br>物理学専攻（博士課程）</dd>
        <dt>2017年4月 - 2020年3月</dt>
        <dd>東京大学大学院理学系研究科<br>物理学専攻（修士課程）</dd>
        <dt>2015年4月 - 2017年3月</dt>
        <dd>東京大学理学部物理学科</dd>
        <dt>2013年4月 - 2015年3月</dt>
        <dd>東京大学教養学部（前期課程）理科二類</dd>
        <dt>2009年4月 - 2012年3月</dt>
        <dd>埼玉県立大宮高等学校（理数科）</dd>
        </dl>
        <h3>研究費</h3>
        <dl>
        <dt>2021年10月 - 2023年3月</dt>
        <dd>JST SPRING, Grant Number JPMJSP2108</dd>
        </dl>
        <h3>運営</h3>
        <dl>
        <dt>2026年2月2日-4日</dt>
        <dd>「MateriAI 2025 〜 計算物質科学分野におけるAI技術の活用」世話人</dd>
        </dl>
        </div>`
    }    
}
