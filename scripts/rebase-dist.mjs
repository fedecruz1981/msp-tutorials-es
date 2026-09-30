import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const out = process.argv[2] || 'dist';
const BASE = process.env.BASE_PREFIX || '/msp-tutorials-es';

function walk(d) {
  for (const e of readdirSync(d)) {
    const p = join(d, e);
    if (statSync(p).isDirectory()) walk(p);
    else if (extname(p) === '.html') {
      const before = readFileSync(p, 'utf8');
      let after = before;
      after = after.replace(/(src|href)="\/(?!msp-tutorials-es(?:\/|\?|$)|\/|#|\?)([^"]+)"/g, (m, a, u) => a + '="' + BASE + '/' + u + '"');
      after = after.replace(/(src|href)="\/(msp-tutorials-es)\/(msp-tutorials-es)([^"]*)"/g, (m, a, b1, b2, rest) => a + '="/msp-tutorials-es' + rest + '"');
      if (after !== before) {
        writeFileSync(p, after, 'utf8');
      }
    }
  }
}
walk(out);
console.error('rebase-dist done');