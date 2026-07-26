// Warn when the generated pages contain characters that
// fonts/NotoSansJP-Thin-subset.woff2 does not cover. Those characters would
// silently fall back to a system font.  Run `npm run font` to regenerate.
//
// This mirrors content_chars() in scripts/build-font.py, and compares against
// fonts/subset-charset.txt rather than parsing the woff2, so that an ordinary
// build needs no Python.

import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const SKIP = new Set(['node_modules', '.git', '.font-src', 'scripts', 'data', 'css', 'fonts', 'posts'])

const pages = []
const walk = (dir) => {
    for (const name of readdirSync(dir).sort()) {
        if (SKIP.has(name)) continue
        const path = join(dir, name)
        if (statSync(path).isDirectory()) walk(path)
        else if (name === 'index.html') pages.push(path)
    }
}
walk(root)

if (pages.length === 0) {
    console.error('no generated pages found — run `npm run build` first')
    process.exit(1)
}

const used = new Set()
for (const path of pages) {
    const text = readFileSync(path, 'utf8')
        .replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gi, '')
        .replace(/<[^>]*>/g, '')
    for (const char of text) {
        if (char.trim() !== '') used.add(char)
    }
}

const covered = new Set(readFileSync(join(root, 'fonts', 'subset-charset.txt'), 'utf8'))
const missing = [...used].filter((c) => !covered.has(c)).sort()

if (missing.length > 0) {
    console.error(`\nfont subset is missing ${missing.length} character(s): ${missing.join('')}`)
    console.error('run `npm run font` to regenerate fonts/NotoSansJP-Thin-subset.woff2\n')
    process.exit(1)
}

console.log(`font subset covers all ${used.size} characters across ${pages.length} pages`)
