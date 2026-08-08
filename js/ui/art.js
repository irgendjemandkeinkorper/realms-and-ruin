import { esc, slugify } from '../engine/utils.js';
import { State } from '../engine/state.js';
import { archetypeCardForRole, pairedCardStem } from '../data/cardFaces.js';

export const ART_STYLES = [
  {id:'painterly', label:'Dungeon Oil', note:'Warm torchlight, deep violet stone, hand-painted texture, and gilded relic detail.'},
  {id:'tarot', label:'Vault Woodcut', note:'High-contrast ink engraving, cross-hatching, and restrained ember-red accents.'}
];

const ART_EXTS = ['jpg','jpeg','png','webp'];

/* Generated assets are intentionally opt-in. A missing card illustration
   should reveal the designed fallback panel without making the browser chase
   four dead URLs for every card face. Add a key here as new art lands. */
const READY_ART = new Set([
  'painterly/archetypes/oathbound-shield-candlelit-v1.png',
  'painterly/archetypes/oathbound-shield-guttered-v1.png',
  'painterly/archetypes/rift-scholar-candlelit-v1.png',
  'painterly/archetypes/rift-scholar-guttered-v1.png',
  'painterly/archetypes/delver-rogue-candlelit-v1.png',
  'painterly/archetypes/delver-rogue-guttered-v1.png',
  'painterly/archetypes/ashen-acolyte-candlelit-v1.png',
  'painterly/archetypes/ashen-acolyte-guttered-v1.png',
  'painterly/archetypes/beastwarden-candlelit-v1.png',
  'painterly/archetypes/beastwarden-guttered-v1.png',
  'painterly/archetypes/clockwork-tinkerer-candlelit-v1.png',
  'painterly/archetypes/clockwork-tinkerer-guttered-v1.png',
  'painterly/victims/star-metal-seal-mourning-v1.png',
  'painterly/victims/star-metal-seal-die-nacht-v1.png',
  'painterly/victims/living-silver-map-mourning-v1.png',
  'painterly/victims/living-silver-map-die-nacht-v1.png',
  'painterly/victims/black-crystal-keystone-mourning-v1.png',
  'painterly/victims/black-crystal-keystone-die-nacht-v1.png',
  'painterly/victims/brass-command-crown-mourning-v1.png',
  'painterly/victims/brass-command-crown-die-nacht-v1.png',
  'painterly/victims/clockwork-heart-mourning-v1.png',
  'painterly/victims/clockwork-heart-die-nacht-v1.png',
  'painterly/victims/nameless-fragment-mourning-v1.png',
  'painterly/victims/nameless-fragment-die-nacht-v1.png',
  'tarot/archetypes/gravebound-knight-candlelit-vault-woodcut-v1.png',
  'tarot/archetypes/gravebound-knight-guttered-vault-woodcut-v1.png',
  'tarot/archetypes/blood-ledger-candlelit-vault-woodcut-v1.png',
  'tarot/archetypes/blood-ledger-guttered-vault-woodcut-v1.png',
  'tarot/archetypes/feral-hexblade-candlelit-vault-woodcut-v1.png',
  'tarot/archetypes/feral-hexblade-guttered-vault-woodcut-v1.png',
  'tarot/archetypes/plague-alchemist-candlelit-vault-woodcut-v1.png',
  'tarot/archetypes/plague-alchemist-guttered-vault-woodcut-v1.png',
  'tarot/archetypes/masked-usurper-candlelit-vault-woodcut-v1.png',
  'tarot/archetypes/masked-usurper-guttered-vault-woodcut-v1.png',
  'tarot/archetypes/void-shepherd-candlelit-vault-woodcut-v1.png',
  'tarot/archetypes/void-shepherd-guttered-vault-woodcut-v1.png',
  'tarot/archetypes/oathbound-shield-candlelit-vault-woodcut-v1.png',
  'tarot/archetypes/oathbound-shield-guttered-vault-woodcut-v1.png',
  'tarot/archetypes/rift-scholar-candlelit-vault-woodcut-v1.png',
  'tarot/archetypes/rift-scholar-guttered-vault-woodcut-v1.png',
  'tarot/archetypes/delver-rogue-candlelit-vault-woodcut-v1.png',
  'tarot/archetypes/delver-rogue-guttered-vault-woodcut-v1.png',
  'tarot/archetypes/ashen-acolyte-candlelit-vault-woodcut-v1.png',
  'tarot/archetypes/ashen-acolyte-guttered-vault-woodcut-v1.png',
  'tarot/archetypes/beastwarden-candlelit-vault-woodcut-v1.png',
  'tarot/archetypes/beastwarden-guttered-vault-woodcut-v1.png',
  'tarot/archetypes/clockwork-tinkerer-candlelit-vault-woodcut-v1.png',
  'tarot/archetypes/clockwork-tinkerer-guttered-vault-woodcut-v1.png'
]);

/* The live Kaz-Dahrum roster is generated into the project with stable
   extensionless keys for single-face cards and paired stems for two-face
   cards. Keep this list explicit so the gallery never probes unrelated
   archival Bleakwood Vale images that happen to share a folder. */
for (const style of ['painterly','tarot']) {
  for (const id of ['black-gate','lost-cartographers','broken-ward','rival-expedition','clockwork-heart','below-the-below']) {
    READY_ART.add(`${style}/hooks/${id}`);
  }
  for (const slug of [
    'a-gear-that-turns-against-the-clock','a-star-metal-shard','a-lantern-with-two-flames',
    'a-chain-still-attached-to-the-wall','a-rivals-broken-signet','sand-running-upward',
    'a-helm-with-no-face-inside','a-map-of-rooms-that-move','a-ward-written-in-bloodless-ink',
    'a-coin-from-no-known-kingdom','a-second-shadow','a-spell-with-no-caster',
    'a-crown-of-sleeping-brass','a-name-beneath-your-name','a-field-dressing-already-used',
    'a-door-that-opens-into-the-same-room','a-falling-ember-under-stone','a-scale-with-one-side-missing'
  ]) READY_ART.add(`${style}/omens/${slug}`);
}
for (const slug of ['disgraced-alienist','opium-addled-poet','veiled-widow','defrocked-priest','resurrection-man','inspector-yard','mediums-apprentice','heir-in-exile','mudlark','undertakers-daughter','blind-fortune-teller']) {
  READY_ART.add(`painterly/archetypes/${slug}-candlelit-v1.png`);
  READY_ART.add(`painterly/archetypes/${slug}-guttered-v1.png`);
}
for (const slug of ['oathbound-shield','rift-scholar','delver-rogue','ashen-acolyte','beastwarden','clockwork-tinkerer','gravebound-knight','blood-ledger','feral-hexblade','plague-alchemist','masked-usurper','void-shepherd']) {
  READY_ART.add(`painterly/archetypes/${slug}-candlelit-v1.png`);
  READY_ART.add(`painterly/archetypes/${slug}-guttered-v1.png`);
}
for (const slug of ['star-metal-seal','living-silver-map','black-crystal-keystone','brass-command-crown','clockwork-heart','nameless-fragment']) {
  READY_ART.add(`tarot/victims/${slug}-mourning-v1.png`);
  READY_ART.add(`tarot/victims/${slug}-die-nacht-v1.png`);
}

export function artAssetAvailable(style, category, key){
  return READY_ART.has(`${normalizeArtStyle(style)}/${category}/${key}`);
}

export function normalizeArtStyle(style){
  return ART_STYLES.some(s=>s.id===style) ? style : 'painterly';
}

export function currentArtStyle(G=State.G){
  return normalizeArtStyle(G?.artStyle);
}

export function artPath(style, category, key){
  return `art/images/${normalizeArtStyle(style)}/${category}/${key}`;
}

function artImageHTML(path, alt){
  if(/\.(?:jpe?g|png|webp)$/i.test(path)){
    return `<img loading="lazy" src="${path}" data-base="${path}" data-exts="" onerror="gameArtImgError(this)" alt="${esc(alt)}">`;
  }
  return `<img loading="lazy" src="${path}.${ART_EXTS[0]}" data-base="${path}" data-exts="${ART_EXTS.slice(1).join(',')}" onerror="gameArtImgError(this)" alt="${esc(alt)}">`;
}

export function gameArtImgError(img){
  const exts = (img.dataset.exts||'').split(',').filter(Boolean);
  if(exts.length){
    const next = exts.shift();
    img.dataset.exts = exts.join(',');
    img.src = `${img.dataset.base}.${next}`;
    return;
  }
  img.closest('.game-art')?.classList.add('missing');
  img.remove();
}

export function gameArtHTML(category, key, alt, opts={}){
  const style = normalizeArtStyle(opts.style ?? currentArtStyle());
  const classes = ['game-art', opts.className||''].filter(Boolean).join(' ');
  const image = artAssetAvailable(style,category,key) ? artImageHTML(artPath(style,category,key),alt) : '';
  return `<div class="${classes}">
    <div class="game-art-fallback"><span>${esc(opts.fallback||alt)}</span></div>
    ${image}
  </div>`;
}

export function archetypeArtHTML(a, sideIdx, opts={}){
  const style = normalizeArtStyle(opts.style ?? currentArtStyle());
  const item = archetypeCardForRole(a.role);
  if(item){
    const face = item.faces[sideIdx] || item.faces[0];
    return gameArtHTML('archetypes',`${pairedCardStem(style,item,sideIdx)}.png`,`${item.title}, ${face.label}`,{...opts,style});
  }
  const side = sideIdx===0 ? 'front' : 'turned';
  return gameArtHTML('archetypes',`${slugify(a.role)}--${side}`,`${a.role}, Side ${sideIdx===0?'I':'II'}`,{...opts,style});
}

export function omenArtHTML(o, opts={}){
  return gameArtHTML('omens',slugify(o.title),o.title,{...opts,fallback:opts.fallback||o.glyph});
}

export function hookArtHTML(hook, opts={}){
  return gameArtHTML('hooks',hook.id,hook.title,opts);
}

export function victimArtHTML(hook, opts={}){
  return gameArtHTML('victims',hook.id,`The relic from ${hook.title}`,opts);
}

/* Used during both local and online creation. The currently selected
   Contract supplies a meaningful preview in each style; no option is
   preselected unless the caller explicitly provides one. */
export function artStylePickerHTML(hookId, name, selected=null){
  return `<fieldset class="art-style-picker">
    <legend>Choose this expedition’s card style</legend>
    <p>The choice is locked for this expedition so every card shares one visual language.</p>
    <div class="art-style-options">
      ${ART_STYLES.map(style=>`<label class="art-style-option">
        <input type="radio" name="${esc(name)}" value="${style.id}" ${selected===style.id?'checked':''} required>
        <span class="art-style-choice">
          ${gameArtHTML('hooks',hookId,style.label,{style:style.id,className:'art-style-preview',fallback:style.label})}
          <span class="art-style-copy"><strong>${style.label}</strong><small>${style.note}</small><em>Choose this style</em></span>
        </span>
      </label>`).join('')}
    </div>
    <p class="art-style-error" id="${esc(name)}-error" aria-live="polite"></p>
  </fieldset>`;
}
