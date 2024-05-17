function loadSidebar() {
    setColor();
    if (lang === 'en') {
        document.getElementById('sidebar').innerHTML = "<ul class=\"side\">\n        <li id=\"top\" style=\"background-color:" + colors[0] + "\"><a href=\"javascript:loadTop()\">Top</a></li>\n        <li id=\"profile\" style=\"background-color:" + colors[1] + "\"><a href=\"javascript:loadProfile()\">Profile</a></li>\n        <li id=\"research\" style=\"background-color:" + colors[2] + "\"><a href=\"javascript:loadResearch()\">Research</a></li>\n        <li id=\"cv\" style=\"background-color:" + colors[3] + "\"><a href=\"javascript:loadCV()\">CV</a></li>\n        <li id=\"publication\" style=\"background-color:" + colors[4] + "\"><a href=\"javascript:loadPublication()\">Publication</a></li>\n        <li id=\"presentation\" style=\"background-color:" + colors[5] + "\"><a href=\"javascript:loadPresentation()\">Presentation</a></li>\n        </ul>";
    }
    else if (lang === 'ja') {
        document.getElementById('sidebar').innerHTML = "<ul class=\"side\">\n        <li id=\"top\" style=\"background-color:" + colors[0] + "\"><a href=\"javascript:loadTop()\">\u30C8\u30C3\u30D7</a></li>\n        <li id=\"profile\" style=\"background-color:" + colors[1] + "\"><a href=\"javascript:loadProfile()\">\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB</a></li>\n        <li id=\"research\" style=\"background-color:" + colors[2] + "\"><a href=\"javascript:loadResearch()\">\u7814\u7A76</a></li>\n        <li id=\"cv\" style=\"background-color:" + colors[3] + "\"><a href=\"javascript:loadCV()\">\u7565\u6B74</a></li>\n        <li id=\"publication\" style=\"background-color:" + colors[4] + "\"><a href=\"javascript:loadPublication()\">\u8AD6\u6587</a></li>\n        <li id=\"presentation\" style=\"background-color:" + colors[5] + "\"><a href=\"javascript:loadPresentation()\">\u8B1B\u6F14</a></li>\n        </ul>";
    }
}
function setColor() {
    colors = ['', '', '', '', '', ''];
    if (page === 'top') {
        colors[0] = '#DAEAD0';
    }
    else if (page === 'profile') {
        colors[1] = '#DAEAD0';
    }
    else if (page === 'research') {
        colors[2] = '#DAEAD0';
    }
    else if (page === 'cv') {
        colors[3] = '#DAEAD0';
    }
    else if (page === 'publication') {
        colors[4] = '#DAEAD0';
    }
    else if (page === 'presentation') {
        colors[5] = '#DAEAD0';
    }
}
