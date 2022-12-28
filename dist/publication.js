function loadPublication() {
    page = 'publication';
    loadSidebar();
    if (lang === 'en') {
        document.getElementById('main').innerHTML = "<div>\n        <h2>Publication</h2>\n        <ol reversed>\n        <li>\n        S. Yamada, Y. Noguchi, <u>K. Ishii</u>, D. Hirose, O. Sugino, and K. Ohno,<br>\n        \"Development of the Bethe-Salpeter method considering second-order corrections for a GW electron-hole interaction kernel\",<br>\n            [<a href=\"https://journals.aps.org/prb/abstract/10.1103/PhysRevB.106.045113\">Phys. Rev. B 106, 045113</a>]\n            </li>\n        <li>\n        <u>K. Ishii</u>, J. Haruyama, and O. Sugino,<br>\n        \"Optical representation of thermal nuclear fluctuation effect on band-gap renormalization\",<br>\n        [<a href=\"https://journals.aps.org/prb/abstract/10.1103/PhysRevB.104.245144\">Phys. Rev. B 104, 245144</a>], [<a href=\"https://arxiv.org/abs/2108.07384\">arXiv</a>]\n            </li>\n        </ol>\n        </div>";
    }
    else if (lang === 'ja') {
        document.getElementById('main').innerHTML = "<div>\n        <h2>\u539F\u8457\u8AD6\u6587</h2>\n        <ol reversed>\n        <li>\n        S. Yamada, Y. Noguchi, <u>K. Ishii</u>, D. Hirose, O. Sugino, and K. Ohno,<br>\n        \"Development of the Bethe-Salpeter method considering second-order corrections for a GW electron-hole interaction kernel\",<br>\n            [<a href=\"https://journals.aps.org/prb/abstract/10.1103/PhysRevB.106.045113\">Phys. Rev. B 106, 045113</a>]\n            </li>\n        <li>\n        <u>K. Ishii</u>, J. Haruyama, and O. Sugino,<br>\n        \"Optical representation of thermal nuclear fluctuation effect on band-gap renormalization\",<br>\n        [<a href=\"https://journals.aps.org/prb/abstract/10.1103/PhysRevB.104.245144\">Phys. Rev. B 104, 245144</a>], [<a href=\"https://arxiv.org/abs/2108.07384\">arXiv</a>]\n            </li>\n        </ol>\n        </div>";
    }
}
