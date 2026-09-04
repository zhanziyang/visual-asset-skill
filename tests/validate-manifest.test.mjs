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

test('validator accepts a design placeholder with an unchecked license', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'asset-manifest-'));
  await fs.mkdir(path.join(root, 'public', 'assets'), { recursive: true });
  await fs.writeFile(path.join(root, 'public', 'assets', 'hero-placeholder.webp'), 'asset');

  const manifest = {
    version: '1.0',
    project: 'example',
    assets: [{
      id: 'hero-placeholder',
      semantic_type: 'photography',
      medium: 'raster_image',
      role: ['primary_visual'],
      file: 'public/assets/hero-placeholder.webp',
      source: {
        type: 'web',
        provider: 'source-site',
        url: 'https://source.example/item'
      },
      authenticity: 'representational',
      license: { status: 'unknown' },
      production_status: 'placeholder',
      treatment: {
        strategy: 'editorial_reframe',
        implementation: 'runtime',
        operations: ['responsive focal crop', 'runtime tonal overlay']
      },
      selection_reason: ['Visual direction placeholder']
    }]
  };

  const result = await runValidator(manifest, root);
  assert.equal(result.code, 0);
  assert.equal(JSON.parse(result.stdout).valid, true);
});

test('validator rejects integrated photography without an art-direction record', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'asset-manifest-'));
  await fs.writeFile(path.join(root, 'hero.jpg'), 'asset');

  const manifest = {
    version: '1.0',
    project: 'example',
    assets: [{
      id: 'untreated-hero',
      semantic_type: 'photography',
      medium: 'raster_image',
      role: ['primary_visual'],
      file: 'hero.jpg',
      source: { type: 'user_library' },
      authenticity: 'representational',
      license: { status: 'owned' },
      production_status: 'production',
      selection_reason: ['Primary lifestyle photograph']
    }]
  };

  const result = await runValidator(manifest, root);
  const output = JSON.parse(result.stdout);
  assert.notEqual(result.code, 0);
  assert.ok(output.errors.some((error) => error.includes('treatment is required')));
});

test('validator also requires art direction for integrated raster illustration', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'asset-manifest-'));
  await fs.writeFile(path.join(root, 'story.png'), 'asset');

  const manifest = {
    version: '1.0',
    project: 'example',
    assets: [{
      id: 'story-illustration',
      semantic_type: 'illustration',
      medium: 'raster_image',
      role: ['storytelling'],
      file: 'story.png',
      source: { type: 'user_library' },
      authenticity: 'illustrative',
      license: { status: 'owned' },
      production_status: 'production',
      selection_reason: ['Primary story image']
    }]
  };

  const result = await runValidator(manifest, root);
  const output = JSON.parse(result.stdout);
  assert.notEqual(result.code, 0);
  assert.ok(output.errors.some((error) => error.includes('treatment is required')));
});

test('validator accepts a deliberate clean-evidence photography treatment', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'asset-manifest-'));
  await fs.writeFile(path.join(root, 'evidence.jpg'), 'asset');

  const manifest = {
    version: '1.0',
    project: 'example',
    assets: [{
      id: 'clean-evidence-photo',
      semantic_type: 'photography',
      medium: 'raster_image',
      role: ['evidence'],
      file: 'evidence.jpg',
      source: { type: 'existing_project' },
      authenticity: 'factual',
      license: { status: 'owned' },
      production_status: 'production',
      treatment: {
        strategy: 'clean_evidence',
        implementation: 'runtime',
        operations: ['focal crop', 'technical contrast normalization']
      },
      selection_reason: ['Preserves factual clarity while fitting the evidence layout']
    }]
  };

  const result = await runValidator(manifest, root);
  assert.equal(result.code, 0);
  assert.equal(JSON.parse(result.stdout).valid, true);
});

test('validator requires a preserved source for derived photography', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'asset-manifest-'));
  await fs.writeFile(path.join(root, 'hero-treated.webp'), 'asset');

  const manifest = {
    version: '1.0',
    project: 'example',
    assets: [{
      id: 'derived-hero',
      semantic_type: 'photography',
      medium: 'raster_image',
      role: ['primary_visual'],
      file: 'hero-treated.webp',
      source: { type: 'user_library' },
      authenticity: 'representational',
      license: { status: 'owned' },
      production_status: 'production',
      treatment: {
        strategy: 'tonal_grade',
        implementation: 'derived_asset',
        operations: ['image-specific tonal grade']
      },
      selection_reason: ['Creates the intended hero atmosphere']
    }]
  };

  const result = await runValidator(manifest, root);
  const output = JSON.parse(result.stdout);
  assert.notEqual(result.code, 0);
  assert.ok(output.errors.some((error) => error.includes('treatment.source_file is required')));
});

test('validator protects factual photography when treatment can change meaning', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'asset-manifest-'));
  await fs.writeFile(path.join(root, 'source.jpg'), 'asset');
  await fs.writeFile(path.join(root, 'treated.webp'), 'asset');

  const manifest = {
    version: '1.0',
    project: 'example',
    assets: [{
      id: 'annotated-factual-photo',
      semantic_type: 'photography',
      medium: 'raster_image',
      role: ['evidence'],
      file: 'treated.webp',
      source: { type: 'official', url: 'https://example.com/photo' },
      authenticity: 'factual',
      license: { status: 'official_permitted' },
      production_status: 'production',
      treatment: {
        strategy: 'diagrammatic_overlay',
        implementation: 'mixed',
        source_file: 'source.jpg',
        operations: ['diagrammatic overlay']
      },
      selection_reason: ['Adds explanatory labels to factual evidence']
    }]
  };

  const result = await runValidator(manifest, root);
  const output = JSON.parse(result.stdout);
  assert.notEqual(result.code, 0);
  assert.ok(output.errors.some((error) => error.includes('truth_constraints is required')));
});

test('validator accepts iconography rendered as 3d', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'asset-manifest-'));
  await fs.mkdir(path.join(root, 'public', 'assets', 'icons'), { recursive: true });
  await fs.writeFile(path.join(root, 'public', 'assets', 'icons', 'feature-orbit.glb'), 'asset');

  const manifest = {
    version: '1.0',
    project: 'example',
    assets: [{
      id: 'feature-orbit-icon',
      semantic_type: 'iconography',
      medium: '3d',
      role: ['brand_identity'],
      file: 'public/assets/icons/feature-orbit.glb',
      source: { type: 'stock', provider: 'example-library' },
      authenticity: 'illustrative',
      license: { status: 'unknown' },
      production_status: 'placeholder',
      selection_reason: ['A spatial icon fits the sparse tactile brand system']
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
