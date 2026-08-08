import fs from 'node:fs';
import { ARCHETYPES, CARD_ARCHETYPES, CARD_VICTIMS, HOOKS, OMENS, pairedCardStem, victimCardForHook } from '../js/data/index.js';
import { artAssetAvailable } from '../js/ui/art.js';
import { slugify } from '../js/engine/utils.js';

const styles = ['painterly', 'tarot'];
const errors = [];
const roleSlug = role => role.toLowerCase().replace(/^the /, '').replaceAll(' ', '-');
const fileExists = (style, category, key) => fs.existsSync(`art/images/${style}/${category}/${key}`);

for (const style of styles) {
  for (const archetype of ARCHETYPES) {
    const card = CARD_ARCHETYPES.find(item => item.slug === roleSlug(archetype.role));
    if (!card) {
      errors.push(`${style} archetype data mapping: ${archetype.role}`);
      continue;
    }
    for (let side = 0; side < 2; side++) {
      const key = `${pairedCardStem(style, card, side)}.png`;
      if (!artAssetAvailable(style, 'archetypes', key) || !fileExists(style, 'archetypes', key)) {
        errors.push(`${style} archetype: ${key}`);
      }
    }
  }

  for (const hook of HOOKS) {
    if (!artAssetAvailable(style, 'hooks', hook.id) || !fileExists(style, 'hooks', `${hook.id}.png`)) {
      errors.push(`${style} hook: ${hook.id}`);
    }
    const relic = victimCardForHook(hook);
    if (!relic) {
      errors.push(`relic mapping: ${hook.id}`);
      continue;
    }
    for (let side = 0; side < 2; side++) {
      const key = `${pairedCardStem(style, relic, side)}.png`;
      if (!artAssetAvailable(style, 'victims', key) || !fileExists(style, 'victims', key)) {
        errors.push(`${style} relic: ${key}`);
      }
    }
  }

  for (const omen of OMENS) {
    const key = slugify(omen.title);
    if (!artAssetAvailable(style, 'omens', key) || !fileExists(style, 'omens', `${key}.png`)) {
      errors.push(`${style} omen: ${key}`);
    }
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`PASS: ${ARCHETYPES.length} adventurers x 2 faces x ${styles.length} styles; ${HOOKS.length} hooks; ${OMENS.length} omens; ${CARD_VICTIMS.length} relics x 2 faces x ${styles.length} styles.`);
