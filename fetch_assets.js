import fs from 'fs';
import https from 'https';
import path from 'path';

const url = 'https://cogniredesign.framer.website/';
const outHtmlPath = path.join(process.cwd(), 'framer.html');

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    fs.writeFileSync(outHtmlPath, data);
    console.log('Saved framer.html, length:', data.length);
    
    // Extract Image URLs
    const imgUrls = [...data.matchAll(/https:\/\/framerusercontent\.com\/images\/[a-zA-Z0-9_-]+\.(png|jpg|jpeg|webp|gif)/g)].map(m => m[0]);
    const uniqueImgUrls = [...new Set(imgUrls)];
    console.log('Found image URLs:', uniqueImgUrls.length);
    
    fs.writeFileSync('images.json', JSON.stringify(uniqueImgUrls, null, 2));
    
    // Extract Icons/SVGs
    // It's harder with raw HTML, let's just save the file and let the agent parse it.
  });
}).on('error', (err) => {
  console.log('Error:', err.message);
});
