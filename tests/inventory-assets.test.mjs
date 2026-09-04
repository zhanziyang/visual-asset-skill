import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { promisify } from 'node:util';
import test from 'node:test';

const execFileAsync = promisify(execFile);
const script = path.resolve('skills/asset-aware-web-design/scripts/inventory-assets.mjs');

test('inventory classifies common project assets', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'asset-inventory-'));
  await fs.mkdir(path.join(root, 'public', 'assets'), { recursive: true });
  await fs.writeFile(path.join(root, 'public', 'assets', 'logo.svg'), '<svg/>');
  await fs.writeFile(path.join(root, 'public', 'assets', 'dashboard-screenshot.png'), 'png');
  await fs.writeFile(path.join(root, 'public', 'assets', 'demo.webm'), 'video');
  await fs.mkdir(path.join(root, 'public', 'assets', 'icons'), { recursive: true });
  await fs.writeFile(path.join(root, 'public', 'assets', 'icons', 'navigation-arrow.svg'), '<svg/>');
  await fs.writeFile(path.join(root, 'public', 'assets', 'icons', 'feature-orbit.glb'), '3d');

  const { stdout } = await execFileAsync(process.execPath, [script, root]);
  const report = JSON.parse(stdout);

  assert.equal(report.count, 5);
  const byPath = new Map(report.assets.map((asset) => [asset.path, asset]));
  assert.equal(byPath.get('public/assets/logo.svg').semantic_guess, 'brand_asset');
  assert.equal(byPath.get('public/assets/dashboard-screenshot.png').semantic_guess, 'product_ui');
  assert.equal(byPath.get('public/assets/demo.webm').medium, 'video');
  assert.equal(byPath.get('public/assets/icons/navigation-arrow.svg').semantic_guess, 'iconography');
  assert.equal(byPath.get('public/assets/icons/feature-orbit.glb').semantic_guess, 'iconography');
  assert.equal(byPath.get('public/assets/icons/feature-orbit.glb').medium, '3d');
});
