import fs from 'fs';
import https from 'https';
import path from 'path';

const imagesDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });

const imgUrls = JSON.parse(fs.readFileSync('images.json', 'utf8'));

imgUrls.forEach((url, i) => {
  const filename = url.split('/').pop();
  const dest = path.join(imagesDir, filename);
  const file = fs.createWriteStream(dest);
  https.get(url, (res) => {
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Downloaded:', filename);
    });
  }).on('error', (err) => {
    fs.unlink(dest, () => {});
    console.log('Error downloading', filename, err.message);
  });
});

// Extract SVGs and fonts info
const html = fs.readFileSync('framer.html', 'utf8');

const svgs = [...html.matchAll(/<svg[^>]*>[\s\S]*?<\/svg>/g)].map(m => m[0]);
console.log('Found SVGs:', svgs.length);
fs.writeFileSync('svgs.json', JSON.stringify(svgs.slice(0, 50), null, 2));

const fonts = [...html.matchAll(/font-family: ?"([^"\\]+)"/g)].map(m => m[1]);
console.log('Fonts:', [...new Set(fonts)]);
