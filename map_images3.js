import fs from 'fs';

const html = fs.readFileSync('framer.html', 'utf8');

function findImages(keyword) {
  const tPlain = keyword.replace(/\\/g, '');
  const index = html.indexOf(tPlain);
  if (index !== -1) {
    const windowStart = Math.max(0, index - 2000);
    const windowEnd = Math.min(html.length, index + 2000);
    const context = html.substring(windowStart, windowEnd);
    const urls = [...context.matchAll(/https:\/\/framerusercontent\.com\/images\/[^" )]+/g)].map(m => m[0]);
    const imgs = [...new Set(urls)].map(u => u.split('/').pop().split('?')[0]);
    return imgs.filter(i => i.endsWith('.png') || i.endsWith('.jpg') || i.endsWith('.webp'));
  }
  return [];
}

const ce1 = findImages("Engaging cognitive processes");
const ce2 = findImages("Using creative processes");
const ce3 = findImages("Blending cognitive science");

console.log("Creative Engineering 1:", ce1);
console.log("Creative Engineering 2:", ce2);
console.log("Creative Engineering 3:", ce3);

const ww1 = findImages("Technology and AI Companies");
const ww2 = findImages("Educational Institutions");
const ww3 = findImages("Mental Health Professionals");
const ww4 = findImages("Artists and Creative Practitioners");
const ww5 = findImages("Research Organizations");
const ww6 = findImages("Cultural and Design Institutions");

console.log("Work With:", ww1, ww2, ww3, ww4, ww5, ww6);

const hero = findImages("Alt+Shift");
console.log("Hero:", hero);

