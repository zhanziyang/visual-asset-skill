#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const EXCLUDED_DIRS = new Set([
  '.git', '.next', '.nuxt', '.output', '.turbo', '.vercel',
  'build', 'coverage', 'dist', 'node_modules', 'vendor'
]);

const MEDIUM_BY_EXTENSION = new Map([
  ['.png', 'raster_image'], ['.jpg', 'raster_image'],
  ['.jpeg', 'raster_image'], ['.webp', 'raster_image'],
  ['.avif', 'raster_image'], ['.gif', 'motion_asset'],
  ['.svg', 'vector_image'],
  ['.mp4', 'video'], ['.webm', 'video'], ['.mov', 'video'],
  ['.m4v', 'video'],
  ['.riv', 'motion_asset'], ['.lottie', 'motion_asset'],
  ['.glb', '3d'], ['.gltf', '3d'], ['.obj', '3d'],
  ['.fbx', '3d'], ['.usdz', '3d'],
  ['.woff', 'font'], ['.woff2', 'font'], ['.ttf', 'font'],
  ['.otf', 'font'],
  ['.mp3', 'audio'], ['.wav', 'audio'], ['.ogg', 'audio'],
  ['.aac', 'audio'], ['.m4a', 'audio']
]);

function parseArgs(argv) {
  const args = [...argv];
  const root = path.resolve(args.shift() || process.cwd());
  let output = null;
  for (let i = 0; i < args.length; i += 1) {
    if (args[i] === '--output' && args[i + 1]) {
      output = path.resolve(args[i + 1]);
      i += 1;
    }
  }
  return { root, output };
}

function semanticGuess(relativePath, medium) {
  const value = relativePath.toLowerCase();
  const has = (...terms) => terms.some((term) => value.includes(term));

  if (has('logo', 'wordmark', 'brand', 'badge', 'partner', 'press', 'app-icon')) {
    return 'brand_asset';
  }
  if (has('screenshot', 'screen-shot', 'screen_', 'dashboard', 'product-ui', 'app-ui')) {
    return 'product_ui';
  }
  if (has('avatar', 'portrait', 'headshot', 'testimonial', 'team-', 'founder')) {
    return 'person_identity';
  }
  if (has('iphone', 'macbook', 'device', 'mockup', 'browser-frame', 'window-frame')) {
    return 'device_mockup';
  }
  if (has('diagram', 'workflow', 'architecture', 'ecosystem', 'flowchart')) {
    return 'diagram';
  }
  if (has('chart', 'graph', 'heatmap', 'timeline', 'data-viz')) {
    return 'data_visualization';
  }
  if (has('illustration', 'artwork', 'mascot', 'character')) {
    return 'illustration';
  }
  if (has('/icon/', '/icons/', 'icon-', '-icon', 'glyph', 'symbol-')) {
    return 'iconography';
  }
  if (has('texture', 'noise', 'grain', 'pattern', 'paper')) {
    return 'decorative_texture';
  }
  if (has('product-render', 'packaging', 'hardware', 'object-render')) {
    return 'product_object';
  }
  if (medium === 'video') return 'video';
  if (medium === 'motion_asset') return 'motion_graphic';
  if (medium === '3d') return 'spatial_3d';
  if (medium === 'font') return 'typography';
  if (medium === 'audio') return 'audio';
  if (medium === 'raster_image') return 'photography_or_raster';
  if (medium === 'vector_image') return 'vector_graphic';
  return 'unknown';
}

async function hashFile(filePath) {
  const data = await fs.readFile(filePath);
  return createHash('sha256').update(data).digest('hex');
}

async function walk(root, current = root, results = []) {
  const entries = await fs.readdir(current, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith('.') && entry.name !== '.well-known') {
      if (entry.isDirectory()) continue;
    }
    const absolute = path.join(current, entry.name);
    if (entry.isDirectory()) {
      if (!EXCLUDED_DIRS.has(entry.name)) {
        await walk(root, absolute, results);
      }
      continue;
    }

    const extension = path.extname(entry.name).toLowerCase();
    const medium = MEDIUM_BY_EXTENSION.get(extension);
    if (!medium) continue;

    const stat = await fs.stat(absolute);
    const relative = path.relative(root, absolute).split(path.sep).join('/');
    results.push({
      path: relative,
      extension,
      bytes: stat.size,
      medium,
      semantic_guess: semanticGuess(relative, medium),
      sha256: await hashFile(absolute),
      source: { type: 'existing_project' }
    });
  }
  return results;
}

async function main() {
  const { root, output } = parseArgs(process.argv.slice(2));
  process.stderr.write(`Scanning assets under ${root}\n`);
  const stat = await fs.stat(root).catch(() => null);
  if (!stat?.isDirectory()) {
    throw new Error(`Project root is not a directory: ${root}`);
  }

  const assets = await walk(root);
  assets.sort((a, b) => a.path.localeCompare(b.path));

  const counts = assets.reduce((acc, item) => {
    acc[item.medium] = (acc[item.medium] || 0) + 1;
    return acc;
  }, {});

  const report = {
    version: '1.0',
    project_root: root,
    scanned_at: new Date().toISOString(),
    count: assets.length,
    counts_by_medium: counts,
    assets
  };

  const json = `${JSON.stringify(report, null, 2)}\n`;
  if (output) {
    await fs.mkdir(path.dirname(output), { recursive: true });
    await fs.writeFile(output, json, 'utf8');
    process.stderr.write(`Wrote inventory to ${output}\n`);
  }
  process.stdout.write(json);
}

main().catch((error) => {
  process.stderr.write(`${error.message}\n`);
  process.exitCode = 1;
});
