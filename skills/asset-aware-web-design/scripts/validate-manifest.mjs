#!/usr/bin/env node

import { promises as fs } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const SEMANTIC_TYPES = new Set([
  'product_ui', 'product_object', 'person_identity', 'brand_asset',
  'photography', 'illustration', 'video', 'motion_graphic', 'diagram',
  'data_visualization', 'device_mockup', 'spatial_3d',
  'decorative_texture', 'procedural_visual', 'typography', 'audio'
]);

const MEDIA = new Set([
  'raster_image', 'vector_image', 'screenshot', 'video',
  'motion_asset', 'code_rendered', 'procedural', '3d', 'font', 'audio'
]);

const SOURCE_TYPES = new Set([
  'existing_project', 'user_library', 'official', 'web', 'stock',
  'ai_generation', 'code_generated'
]);

const AUTHENTICITY = new Set([
  'factual', 'representational', 'illustrative', 'decorative'
]);

const PRODUCTION_STATUS = new Set([
  'production', 'placeholder', 'reference_only'
]);

const LICENSE_STATUS = new Set([
  'owned', 'official_permitted', 'permitted_commercial_use',
  'public_domain', 'open_source', 'attribution_required', 'unknown',
  'not_applicable'
]);

function parseArgs(argv) {
  const args = [...argv];
  const manifest = args.shift();
  let projectRoot = process.cwd();
  for (let i = 0; i < args.length; i += 1) {
    if (args[i] === '--project-root' && args[i + 1]) {
      projectRoot = path.resolve(args[i + 1]);
      i += 1;
    }
  }
  return {
    manifest: manifest ? path.resolve(manifest) : null,
    projectRoot
  };
}

function pushIf(condition, target, message) {
  if (condition) target.push(message);
}

async function main() {
  const { manifest, projectRoot } = parseArgs(process.argv.slice(2));
  if (!manifest) throw new Error('Usage: validate-manifest.mjs <manifest.json> [--project-root <path>]');

  const raw = await fs.readFile(manifest, 'utf8');
  const data = JSON.parse(raw);
  const errors = [];
  const warnings = [];

  pushIf(typeof data.version !== 'string', errors, 'Top-level version must be a string.');
  pushIf(typeof data.project !== 'string' || !data.project.trim(), errors, 'Top-level project is required.');
  pushIf(!Array.isArray(data.assets), errors, 'Top-level assets must be an array.');

  const ids = new Set();
  const assets = Array.isArray(data.assets) ? data.assets : [];

  for (const [index, asset] of assets.entries()) {
    const at = `assets[${index}]`;
    pushIf(!asset || typeof asset !== 'object', errors, `${at} must be an object.`);
    if (!asset || typeof asset !== 'object') continue;

    pushIf(typeof asset.id !== 'string' || !asset.id, errors, `${at}.id is required.`);
    if (typeof asset.id === 'string') {
      pushIf(ids.has(asset.id), errors, `${at}.id duplicates ${asset.id}.`);
      ids.add(asset.id);
    }

    pushIf(!SEMANTIC_TYPES.has(asset.semantic_type), errors, `${at}.semantic_type is invalid.`);
    pushIf(!MEDIA.has(asset.medium), errors, `${at}.medium is invalid.`);
    pushIf(!Array.isArray(asset.role) || asset.role.length === 0, errors, `${at}.role must be a non-empty array.`);
    pushIf(typeof asset.file !== 'string' || !asset.file, errors, `${at}.file is required.`);
    pushIf(!asset.source || !SOURCE_TYPES.has(asset.source.type), errors, `${at}.source.type is invalid.`);
    pushIf(!AUTHENTICITY.has(asset.authenticity), errors, `${at}.authenticity is invalid.`);
    pushIf(!asset.license || !LICENSE_STATUS.has(asset.license.status), errors, `${at}.license.status is invalid.`);
    pushIf(!PRODUCTION_STATUS.has(asset.production_status), errors, `${at}.production_status is invalid.`);
    pushIf(!Array.isArray(asset.selection_reason) || asset.selection_reason.length === 0, errors, `${at}.selection_reason must be a non-empty array.`);

    const sourceType = asset.source?.type;
    const production = asset.production_status === 'production';
    const licenseStatus = asset.license?.status;

    pushIf(
      production && licenseStatus === 'unknown',
      errors,
      `${at} is production but has an unknown license.`
    );
    pushIf(
      production && ['web', 'stock', 'official'].includes(sourceType) && !asset.source?.url,
      errors,
      `${at} uses an external production source but has no source.url.`
    );
    pushIf(
      asset.semantic_type === 'brand_asset' && sourceType === 'ai_generation',
      errors,
      `${at} is a brand asset and may not be AI-generated.`
    );
    pushIf(
      asset.semantic_type === 'product_ui' && asset.authenticity === 'factual' && sourceType === 'ai_generation',
      errors,
      `${at} is factual Product UI and may not be AI-generated.`
    );
    pushIf(
      asset.semantic_type === 'person_identity' && asset.authenticity === 'factual' && sourceType === 'ai_generation',
      errors,
      `${at} is a factual identity and may not be AI-generated.`
    );
    pushIf(
      asset.semantic_type === 'video' && sourceType === 'ai_generation' && asset.production_status !== 'placeholder',
      errors,
      `${at} is generated video and must be marked placeholder in v1.`
    );
    pushIf(
      asset.semantic_type === 'data_visualization' && asset.authenticity === 'factual' && !asset.data_source,
      warnings,
      `${at} is factual data visualization but does not record data_source.`
    );

    if (typeof asset.file === 'string' && !asset.file.includes('://')) {
      const absolute = path.resolve(projectRoot, asset.file);
      const exists = await fs.stat(absolute).then(() => true).catch(() => false);
      pushIf(!exists, errors, `${at}.file does not exist under project root: ${asset.file}`);
    }
  }

  const result = {
    valid: errors.length === 0,
    manifest,
    project_root: projectRoot,
    asset_count: assets.length,
    errors,
    warnings
  };

  process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  if (errors.length > 0) process.exitCode = 1;
}

main().catch((error) => {
  process.stderr.write(`${error.message}\n`);
  process.exitCode = 1;
});
