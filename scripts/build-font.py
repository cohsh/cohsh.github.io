#!/usr/bin/env python3
"""Build a subset of Noto Sans JP containing only the characters this site uses.

The site is generated as static HTML, so the set of characters it can ever
display is known ahead of time. That makes it possible to ship a single small
woff2 instead of the 124 unicode-range subsets Google Fonts would serve.

Usage:  npm run font        (or: python3 scripts/build-font.py)
Requires: pip install fonttools brotli
"""

import glob
import json
import os
import re
import sys
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_DIR = os.path.join(ROOT, '.font-src')
SRC_TTF = os.path.join(SRC_DIR, 'NotoSansJP[wght].ttf')
SRC_URL = 'https://github.com/google/fonts/raw/main/ofl/notosansjp/NotoSansJP%5Bwght%5D.ttf'
OFL_URL = 'https://github.com/google/fonts/raw/main/ofl/notosansjp/OFL.txt'
OUT_WOFF2 = os.path.join(ROOT, 'fonts', 'NotoSansJP-Thin-subset.woff2')
OUT_CHARSET = os.path.join(ROOT, 'fonts', 'subset-charset.txt')
OUT_OFL = os.path.join(ROOT, 'fonts', 'OFL.txt')

# css/style.css renders the whole site at font-weight:100, so a single static
# instance is enough. Keeping the variable wght axis would triple the file size.
WEIGHT = 100

# The built pages are the authoritative list of what the site can display,
# so read those rather than the data files. Run `npm run build` first.
def generated_pages():
    pages = []
    for dirpath, dirnames, filenames in os.walk(ROOT):
        dirnames[:] = [d for d in dirnames
                       if d not in ('node_modules', '.git', '.font-src', 'scripts', 'data', 'css')]
        if 'index.html' in filenames:
            pages.append(os.path.join(dirpath, 'index.html'))
    return sorted(pages)


# Characters that appear in the site's own content.
def content_chars():
    pages = generated_pages()
    if not pages:
        sys.exit('no generated pages found — run `npm run build` first')

    chars = set()
    for path in pages:
        with open(path, encoding='utf-8') as f:
            # Drop tags (and with them <style>/<meta> attributes) to keep only
            # the text that is actually painted.
            text = re.sub(r'<(script|style)[^>]*>.*?</\1>', '', f.read(), flags=re.S | re.I)
            chars |= set(re.sub(r'<[^>]*>', '', text))
    return {c for c in chars if c.isprintable() and not c.isspace()}


# Headroom so that adding ordinary kana text later does not need a rebuild.
# Only new kanji require regenerating the subset.
def safety_chars():
    chars = set(chr(c) for c in range(0x20, 0x7F))          # ASCII
    chars |= set(chr(c) for c in range(0x3040, 0x30FF))     # ひらがな・カタカナ
    chars |= set('、。「」『』（）〔〕・ー―…‥※§〜／＼％＆＃＠　')
    chars |= set('０１２３４５６７８９')
    chars |= set('ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ')
    return chars


def download(url, path, label):
    if os.path.exists(path):
        return
    os.makedirs(os.path.dirname(path), exist_ok=True)
    print(f'downloading {label} ...')
    urllib.request.urlretrieve(url, path)


def main():
    try:
        from fontTools import varLib
        from fontTools.ttLib import TTFont
        from fontTools.varLib import instancer
        from fontTools.subset import Subsetter, Options
        import brotli  # noqa: F401  (required for woff2 output)
    except ImportError:
        sys.exit('fonttools and brotli are required: pip install fonttools brotli')

    download(SRC_URL, SRC_TTF, 'Noto Sans JP')
    download(OFL_URL, OUT_OFL, 'OFL.txt')

    content = content_chars()
    charset = content | safety_chars()
    text = ''.join(sorted(charset))

    font = TTFont(SRC_TTF)
    font = instancer.instantiateVariableFont(font, {'wght': WEIGHT}, inplace=True)

    options = Options()
    options.flavor = 'woff2'
    options.hinting = False
    options.desubroutinize = True
    options.layout_features = ['kern', 'liga', 'palt']
    subsetter = Subsetter(options=options)
    subsetter.populate(text=text)
    subsetter.subset(font)
    font.flavor = 'woff2'
    font.save(OUT_WOFF2)

    with open(OUT_CHARSET, 'w', encoding='utf-8') as f:
        f.write(text)

    # Verify nothing the site actually displays was left out.
    missing = [c for c in sorted(content) if ord(c) not in TTFont(OUT_WOFF2).getBestCmap()]
    if missing:
        sys.exit(f'ERROR: {len(missing)} characters missing from the subset: {"".join(missing)}')

    size = os.path.getsize(OUT_WOFF2)
    print(f'{OUT_WOFF2}: {size:,} bytes ({size / 1024:.0f} KB), '
          f'{len(charset)} characters ({len(content)} from content)')


if __name__ == '__main__':
    main()
