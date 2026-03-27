import fs from 'fs';

const html = fs.readFileSync('framer.html', 'utf8');

const tests = [
  "Alt\\+Shift",
  "Hourglass",
  "Epicurious",
  "Quotient",
  "Interlock",
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
  const regex = new RegExp(`.{0,500}${t}.{0,500}`, 'g');
  const matches = [...html.matchAll(regex)];
  if (matches.length > 0) {
    const urls = [...matches[0][0].matchAll(/https:\/\/framerusercontent\.com\/images\/[^" )]+/g)].map(m => m[0]);
    res[t.replace(/\\/g, '')] = [...new Set(urls)].map(u => u.split('/').pop());
  }
}

fs.writeFileSync('map_result.json', JSON.stringify(res, null, 2));
