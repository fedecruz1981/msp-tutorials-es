import { BASE } from './lib/urls.mjs';

function walk(node) {
  if (!node || typeof node !== 'object') return;
  if (node.type === 'element' && node.properties) {
    for (const attr of ['src', 'href']) {
      const v = node.properties[attr];
      if (typeof v === 'string' && v.startsWith('/') && !v.startsWith('//')) {
        node.properties[attr] = BASE + v;
      }
    }
  }
  if (Array.isArray(node.children)) {
    for (const child of node.children) walk(child);
  }
}

export default function rehypeRebase() {
  return walk;
}