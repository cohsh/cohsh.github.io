function loadSidebar() {
    setColor()
    if (lang === 'en') {
        document.getElementById('sidebar').innerHTML = `<ul class="side">
        <li id="top" style="background-color:` + colors[0] + `"><a href="javascript:loadTop()">Top</a></li>
        <li id="research" style="background-color:` + colors[1] + `"><a href="javascript:loadResearch()">Research</a></li>
        <li id="cv" style="background-color:` +  colors[2] + `"><a href="javascript:loadCV()">CV</a></li>
        <li id="publication" style="background-color:` + colors[3] + `"><a href="javascript:loadPublication()">Publication</a></li>
        <li id="presentation" style="background-color:` + colors[4] + `"><a href="javascript:loadPresentation()">Presentation</a></li>
        </ul>`
    } else if (lang === 'ja') {
        document.getElementById('sidebar').innerHTML = `<ul class="side">
        <li id="top" style="background-color:` + colors[0] + `"><a href="javascript:loadTop()">トップ</a></li>
        <li id="research" style="background-color:` + colors[1] + `"><a href="javascript:loadResearch()">研究</a></li>
        <li id="cv" style="background-color:` +  colors[2] + `"><a href="javascript:loadCV()">略歴</a></li>
        <li id="publication" style="background-color:` + colors[3] + `"><a href="javascript:loadPublication()">論文</a></li>
        <li id="presentation" style="background-color:` + colors[4] + `"><a href="javascript:loadPresentation()">講演</a></li>
        </ul>`
    }
}

function setColor() {
    colors = ['', '', '', '', '']
    if (page === 'top') {
        colors[0] = '#DAEAD0'
    } else if (page === 'research') {
        colors[1] = '#DAEAD0'
    } else if (page === 'cv') {
        colors[2] = '#DAEAD0'
    } else if (page === 'publication') {
        colors[3] = '#DAEAD0'
    } else if (page === 'presentation') {
        colors[4] = '#DAEAD0'
    }
}
