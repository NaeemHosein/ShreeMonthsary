const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const galleryDirs = {
  her: path.join(rootDir, 'gallery', 'her'),
  him: path.join(rootDir, 'gallery', 'me'),
  us: path.join(rootDir, 'gallery', 'us'),
  herPortrait: path.join(rootDir, 'gallery', 'her-portrait'),
  himPortrait: path.join(rootDir, 'gallery', 'me-portrait')
};

const validExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg', '.bmp', '.avif']);

function getImagesFromDir(dirPath, category) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    return [];
  }
  const files = fs.readdirSync(dirPath);
  return files
    .filter(file => {
      const ext = path.extname(file).toLowerCase();
      return validExtensions.has(ext);
    })
    .map(file => {
      const relPath = `gallery/${category === 'him' ? 'me' : category}/${file}`;
      const nameWithoutExt = path.basename(file, path.extname(file))
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());
      return {
        id: `auto-${category}-${file}`,
        src: relPath,
        title: nameWithoutExt,
        who: category,
        fav: false,
        added: Date.now()
      };
    });
}

function getPortraitImage(dirPath, folderName) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    return "";
  }
  const files = fs.readdirSync(dirPath).filter(file => {
    const ext = path.extname(file).toLowerCase();
    return validExtensions.has(ext);
  });
  if (files.length > 0) {
    return `gallery/${folderName}/${files[0]}`;
  }
  return "";
}

function syncGallery() {
  console.log('🌸 Syncing Shreeya & Naeem Gallery & Portraits...');

  const herPhotos = getImagesFromDir(galleryDirs.her, 'her');
  const himPhotos = getImagesFromDir(galleryDirs.him, 'him');
  const usPhotos = getImagesFromDir(galleryDirs.us, 'us');

  const herPortrait = getPortraitImage(galleryDirs.herPortrait, 'her-portrait');
  const himPortrait = getPortraitImage(galleryDirs.himPortrait, 'me-portrait');

  const allPhotos = [...herPhotos, ...himPhotos, ...usPhotos];

  const outputContent = `// Auto-generated gallery & portrait manifest for Shreio
// Created on ${new Date().toLocaleString()}
const AUTO_GALLERY_PHOTOS = ${JSON.stringify(allPhotos, null, 2)};
const AUTO_PORTRAITS = {
  her: ${JSON.stringify(herPortrait)},
  him: ${JSON.stringify(himPortrait)}
};
`;

  const outputPath = path.join(rootDir, 'js', 'gallery-data.js');
  fs.writeFileSync(outputPath, outputContent, 'utf8');

  console.log(`✨ Success! Found ${herPhotos.length} photos of Shreeya (her), ${himPhotos.length} photos of Naeem (me).`);
  if (herPortrait) console.log(`📸 Shreeya's portrait loaded from: ${herPortrait}`);
  if (himPortrait) console.log(`📸 Naeem's portrait loaded from: ${himPortrait}`);
  console.log(`📁 Gallery data updated at ${outputPath}`);
}

syncGallery();
