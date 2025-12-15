import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');
const images = [
    'below-zero-dashboard.png',
    'below-zero-site.png',
    'cynthia-site.png',
    'jesus-bw.png'
];

async function optimizeImages() {
    console.log('Starting image optimization...');

    for (const image of images) {
        const inputPath = path.join(publicDir, image);
        const outputPath = path.join(publicDir, image.replace('.png', '.webp'));

        if (fs.existsSync(inputPath)) {
            try {
                await sharp(inputPath)
                    .resize({ width: 1200, withoutEnlargement: true }) // Resize to max 1200px width
                    .webp({ quality: 80 }) // Convert to WebP with 80% quality
                    .toFile(outputPath);

                console.log(`✅ Optimized: ${image} -> ${path.basename(outputPath)}`);
            } catch (error) {
                console.error(`❌ Error optimizing ${image}:`, error);
            }
        } else {
            console.warn(`⚠️ File not found: ${image}`);
        }
    }

    console.log('Optimization complete!');
}

optimizeImages();
