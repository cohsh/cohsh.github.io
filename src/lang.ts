function setLangJa() {
    document.getElementById('lang').innerHTML = `<h4>
    <a href='javascript:setLangEn()'>English</a> / 日本語
    </h4>`
    lang = 'ja'
    reload()
}

function setLangEn() {
    document.getElementById('lang').innerHTML = `<h4>
    English / <a href='javascript:setLangJa()'>日本語</a>
    </h4>`
    lang = 'en'
    reload()
}

function reload() {
    if (page === 'top') {
        loadTop()
    } else if (page === 'profile') {
        loadProfile()
    } else if (page === 'research') {
        loadResearch()
    } else if (page === 'cv') {
        loadCV()
    } else if (page === 'publication') {
        loadPublication()
    } else if (page === 'presentation') {
        loadPresentation()
    }
}
