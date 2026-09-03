import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { promisify } from 'node:util';
import test from 'node:test';

const execFileAsync = promisify(execFile);
const script = path.resolve('skills/asset-aware-web-design/scripts/validate-manifest.mjs');

async function runValidator(manifest, root) {
  const manifestPath = path.join(root, 'asset-manifest.json');
  await fs.writeFile(manifestPath, JSON.stringify(manifest));
  try {
    const result = await execFileAsync(process.execPath, [script, manifestPath, '--project-root', root]);
    return { code: 0, stdout: result.stdout };
  } catch (error) {
    return { code: error.code, stdout: error.stdout };
  }
}

test('validator accepts a valid owned product asset', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'asset-manifest-'));
  await fs.mkdir(path.join(root, 'public', 'assets'), { recursive: true });
  await fs.writeFile(path.join(root, 'public', 'assets', 'hero.webp'), 'asset');

  const manifest = {
    version: '1.0',
    project: 'example',
    assets: [{
      id: 'hero-product',
      semantic_type: 'product_ui',
      medium: 'screenshot',
      role: ['primary_visual'],
      file: 'public/assets/hero.webp',
      source: { type: 'existing_project' },
      authenticity: 'factual',
      license: { status: 'owned' },
      production_status: 'production',
      selection_reason: ['Actual product UI']
    }]
  };

  const result = await runValidator(manifest, root);
  assert.equal(result.code, 0);
  assert.equal(JSON.parse(result.stdout).valid, true);
});

test('validator rejects AI-generated brand assets in production', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'asset-manifest-'));
  await fs.writeFile(path.join(root, 'logo.svg'), '<svg/>');

  const manifest = {
    version: '1.0',
    project: 'example',
    assets: [{
      id: 'brand-logo',
      semantic_type: 'brand_asset',
      medium: 'vector_image',
      role: ['brand_identity'],
      file: 'logo.svg',
      source: { type: 'ai_generation' },
      authenticity: 'factual',
      license: { status: 'owned' },
      production_status: 'production',
      selection_reason: ['Generated approximation']
    }]
  };

  const result = await runValidator(manifest, root);
  const output = JSON.parse(result.stdout);
  assert.notEqual(result.code, 0);
  assert.equal(output.valid, false);
  assert.ok(output.errors.some((error) => error.includes('may not be AI-generated')));
});
