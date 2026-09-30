export const BASE = '/msp-tutorials-es';

export function rebase(p = '') {
  if (p.startsWith('/') && !p.startsWith('//')) return BASE + p;
  return p;
}