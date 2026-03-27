import fs from 'fs';

const html = fs.readFileSync('framer.html', 'utf8');

const tests = [
  "Alt\\+Shift",
  "Engaging cognitive processes",
  "Using creative processes",
  "Blending cognitive science",
  "Technology and AI Companies",
  "Mental Health Professionals",
  "Research Organizations",
  "Cultural and Design Institutions",
  "Educational Institutions"
];

let res = {};

for (const t of tests) {
  const tPlain = t.replace(/\\/g, '');
  const index = html.indexOf(tPlain);
  if (index !== -1) {
    const windowStart = Math.max(0, index - 2000);
    const windowEnd = Math.min(html.length, index + 2000);
    const context = html.substring(windowStart, windowEnd);
    
    const urls = [...context.matchAll(/https:\/\/framerusercontent\.com\/images\/[^" )]+/g)].map(m => m[0]);
    res[tPlain] = [...new Set(urls)].map(u => u.split('/').pop());
  }
}

console.log(JSON.stringify(res, null, 2));
