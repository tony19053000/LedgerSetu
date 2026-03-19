const sharp = require('sharp');
const path = require('path');

const SRC = '/home/aayush/Downloads/ChatGPT Image Mar 20, 2026, 01_44_43 AM.png';
const PUB = '/home/aayush/your-project-name/public';

const targets = [
  { out: `${PUB}/logo/256.png`, size: 256 },
  { out: `${PUB}/logo/512.png`, size: 512 },
  { out: `${PUB}/logo/1024.png`, size: 1024 },
  { out: `${PUB}/apple-touch-icon.png`, size: 180 },
  { out: `${PUB}/android-chrome-192x192.png`, size: 192 },
  { out: `${PUB}/android-chrome-512x512.png`, size: 512 },
  { out: `${PUB}/favicon-32x32.png`, size: 32 },
  { out: `${PUB}/favicon-16x16.png`, size: 16 },
  { out: `${PUB}/macos-dock-icon.png`, size: 256 },
];

(async () => {
  for (const t of targets) {
    await sharp(SRC).resize(t.size, t.size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } }).png().toFile(t.out);
    console.log(`✅ ${path.basename(t.out)} (${t.size}x${t.size})`);
  }
  // favicon.ico - generate as 48x48 png (browsers accept png favicons)
  await sharp(SRC).resize(48, 48, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } }).png().toFile(`${PUB}/favicon.ico`);
  console.log('✅ favicon.ico (48x48)');
  console.log('All done!');
})();
