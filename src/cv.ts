function loadCV() {
    page = 'cv'
    loadSidebar()
    if (lang === 'en') {
        document.getElementById('main').innerHTML = `<div>
        <h2>CV</h2>
        <h3>Education</h3>
        <dl>
        <dt>April 2020 - Present</dt>
        <dd>Ph.D. Course, Department of Physics, Graduate School of Science, The University of Tokyo</dd>
        <dt>April 2017 - March 2020</dt>
        <dd>Master Course, Department of Physics, Graduate School of Science, The University of Tokyo</dd>
        <dt>April 2015 - March 2017</dt>
        <dd>Department of Physics, Faculty of Science, The University of Tokyo</dd>
        <dt>April 2013 - March 2015</dt>
        <dd>College of Arts and Sciences, The University of Tokyo</dd>
        <dt>April 2009 - March 2012</dt>
        <dd>Saitama Prefectural Ohmiya High School (Science and Mathematics Department)</dd>
        </dl>

        <h3>Funding</h3>
        <dl>
        <dt>October 2021 - Present</dt>
        <dd>JST SPRING, Grant Number JPMJSP2108</dd>
        </dl>
        </div>`
    } else if (lang === 'ja') {
        document.getElementById('main').innerHTML = `<div>
        <h2>略歴</h2>
        <h3>学歴</h3>
        <dl>
        <dt>2020年4月 - 現在</dt>
        <dd>東京大学<br>大学院理学系研究科<br>物理学専攻博士課程</dd>
        <dt>2017年4月 - 2020月3月</dt>
        <dd>東京大学<br>大学院理学系研究科<br>物理学専攻修士課程</dd>
        <dt>2015年4月 - 2017年3月</dt>
        <dd>東京大学　理学部物理学科</dd>
        <dt>2013年4月 - 2015年3月</dt>
        <dd>東京大学教養学部（前期課程）理科二類</dd>
        <dt>2009月4月 - 2012月3月</dt>
        <dd>埼玉県立大宮高等学校（理数科）</dd>
        </dl>

        <h3>研究費</h3>
        <dl>
        <dt>2021年10月 - 現在</dt>
        <dd>JST SPRING, Grant Number JPMJSP2108</dd>
        </dl>
        </div>`
    }    
}
