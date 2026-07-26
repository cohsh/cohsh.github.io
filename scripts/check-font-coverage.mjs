// Warn when the site gained characters that fonts/NotoSansJP-Thin-subset.woff2
// does not cover. Those characters would silently fall back to a system font.
// Run `npm run font` to regenerate the subset.
//
// This mirrors content_chars() in scripts/build-font.py, and compares against
// fonts/subset-charset.txt rather than parsing the woff2, so that an ordinary
// build needs no Python.

import { readFileSync, readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))

const texts = []
const walk = (node) => {
    if (typeof node === 'string') texts.push(node)
    else if (Array.isArray(node)) node.forEach(walk)
    else if (node && typeof node === 'object') Object.values(node).forEach(walk)
}

for (const name of readdirSync(join(root, 'data')).sort()) {
    if (name.endsWith('.json')) walk(JSON.parse(readFileSync(join(root, 'data', name), 'utf8')))
}
texts.push(readFileSync(join(root, 'index.html'), 'utf8'))
for (const name of readdirSync(join(root, 'src')).sort()) {
    if (name.endsWith('.ts')) texts.push(readFileSync(join(root, 'src', name), 'utf8'))
}

const used = new Set()
for (const text of texts) {
    for (const char of text.replace(/<[^>]*>/g, '')) {
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

console.log(`font subset covers all ${used.size} characters in use`)
