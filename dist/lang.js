function setLangJa() {
    document.getElementById('lang').innerHTML = "<h4>\n    <a href='javascript:setLangEn()'>English</a> / \u65E5\u672C\u8A9E\n    </h4>";
    lang = 'ja';
    reload();
}
function setLangEn() {
    document.getElementById('lang').innerHTML = "<h4>\n    English / <a href='javascript:setLangJa()'>\u65E5\u672C\u8A9E</a>\n    </h4>";
    lang = 'en';
    reload();
}
function reload() {
    if (page === 'top') {
        loadTop();
    }
    else if (page === 'profile') {
        loadProfile();
    }
    else if (page === 'research') {
        loadResearch();
    }
    else if (page === 'cv') {
        loadCV();
    }
    else if (page === 'publication') {
        loadPublication();
    }
    else if (page === 'presentation') {
        loadPresentation();
    }
}
