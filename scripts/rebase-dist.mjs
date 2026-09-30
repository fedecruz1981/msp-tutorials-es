const { readFileSync, writeFileSync, readdirSync, statSync } = require('node:fs');
const { join, extname } = require('node:path');

const out = process.argv[2] || 'dist';
const BASE = process.env.BASE_PREFIX || '/msp-tutorials-es';
const SKIP = new RegExp('^\\/(msp-tutorials-es(?:/|\\?|\\$)|/|#|\\?|\\/)');

function walk(d) {
  for (const e of readdirSync(d)) {
    const p = join(d, e);
    if (statSync(p).isDirectory()) walk(p);
    else if (extname(p) === '.html') {
      const before = readFileSync(p, 'utf8');
      const after = before.replace(/(src|href)="\/(?!msp-tutorials-es(?:\/|\?|$)|\/|#|\?)([^"]+)"/g, (m, a, u) => a + '="' + BASE + '/' + u + '"');
      if (after !== before) { writeFileSync(p, after, 'utf8'); }
    }
  }
}
walk(out);
console.error('rebase-dist done');
