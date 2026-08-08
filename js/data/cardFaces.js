/* Gallery metadata for the new Kaz-Dahrum card roster. Gameplay copy lives in
   the data packs; this file only describes each illustrated face. */
const face = (id,label,context,quote) => ({id,label,context,quote});
const card = (slug,title,first,second) => ({slug,title,faces:[first,second]});

export const CARD_ARCHETYPES = [
  card('oathbound-shield','The Oathbound Shield',
    face('candlelit','Torchlit','A shield-bearer holds the narrow bridge while the Crew crosses behind them.','No one crosses this dark alone.'),
    face('guttered','Bloodied','The shield is planted in a broken ward circle, protecting an empty space where someone used to stand.','The oath remains after the oathbreaker is gone.')),
  card('rift-scholar','The Rift Scholar',
    face('candlelit','Measured','A spellbook floats over a brass instrument as the scholar maps a seam in reality.','Every impossible door has a grammar.'),
    face('guttered','Unbound','Wild magic pours through the scholar’s hands, illuminating a second set of eyes behind them.','The spell did exactly what I asked.')),
  card('delver-rogue','The Delver Rogue',
    face('candlelit','Watching','A rogue kneels beside a pressure plate, one hand raised to stop the party before the click.','The safest treasure is the trap you noticed.'),
    face('guttered','Gone','A single lantern swings above an open pit while the rogue’s shadow slips through a locked door.','If the vault wanted me dead, it should have locked better.')),
  card('ashen-acolyte','The Ashen Acolyte',
    face('candlelit','Consecrated','An acolyte raises a cracked holy symbol over a wounded adventurer as ash falls like snow.','The last miracle is always for someone else.'),
    face('guttered','Forbidden','A dark radiance answers from beneath the altar, offering power to anyone willing to name its price.','Faith is a door. I brought the wrong key.')),
  card('beastwarden','The Beastwarden',
    face('candlelit','Listening','A ranger rests a hand against a stone beast while its eyes soften in the torchlight.','The monsters know which way is home.'),
    face('guttered','Hunting','A beastwarden follows claw marks through an unstable corridor as something large follows behind.','I never said the beast was mine.')),
  card('clockwork-tinkerer','The Clockwork Tinkerer',
    face('candlelit','Repairing','A tinkerer rebuilds a tiny guardian from brass scraps while the ruin’s gears turn overhead.','Give me one minute and a worse idea.'),
    face('guttered','Rewriting','A crown of gears opens around the tinkerer’s head as every vault guardian turns in unison.','The machine remembers who taught it fear.'))
  ,card('gravebound-knight','The Gravebound Knight',
    face('candlelit','Vigilant','A black-armored knight keeps watch over a wounded companion while pale hands claw up through the floor.','The dead keep better faith than kings.'),
    face('guttered','Risen','The knight’s visor opens on a face that is not quite alive as a legion gathers behind the shield.','Stand. The march is not over.'))
  ,card('blood-ledger','The Blood Ledger',
    face('candlelit','Negotiating','A pact-broker writes names into a leather ledger while a candle burns with blood-red wax.','Every promise has a number.'),
    face('guttered','Collected','The ledger hangs open above a circle of bound shadows, each signature dripping from the page.','You already agreed. You simply forgot.'))
  ,card('feral-hexblade','The Feral Hexblade',
    face('candlelit','Sheathed','A scarred sellsword holds a whispering black blade low while an enemy lays down their weapon.','Mercy is a sharper test.'),
    face('guttered','Unleashed','The sword drinks the torchlight as its wielder charges through a storm of spectral faces.','It remembers every throat.' ))
  ,card('plague-alchemist','The Plague Alchemist',
    face('candlelit','Measured','A masked alchemist offers a silver vial to a fevered adventurer beside a careful row of bottles.','The dose is not the cure.'),
    face('guttered','Contagion','Green vapor blooms from the alchemist’s gloves as figures collapse behind a sealed door.','The vault will carry it for me.'))
  ,card('masked-usurper','The Masked Usurper',
    face('candlelit','Claimant','A masked noble stands before a sealed throne, offering a gauntlet to the expedition instead of a hand.','Kneel now, and no one needs to bleed.'),
    face('guttered','Crowned','The mask splits into a crown of iron teeth while every statue in the chamber turns to face its ruler.','The throne was waiting for my name.'))
  ,card('void-shepherd','The Void Shepherd',
    face('candlelit','Binding','A robed warlock holds a chain of starlight around a small rift while the Crew passes behind them.','The dark obeys whoever names it.'),
    face('guttered','Unchained','A towering silhouette leans through the opened rift as the shepherd releases the last link.','Choose who the abyss remembers.'))
];

export const CARD_VICTIMS = [
  card('star-metal-seal','The Star-Metal Seal',
    face('mourning','Sealed','A cold relic rests in a stone cradle beneath the Black Gate, untouched by centuries of dust.','Carry me out, and the door comes with me.'),
    face('die-nacht','Awakened','The seal floats above a widening crack, its engraved star burning through the dark.','I was never meant to keep them in.')),
  card('living-silver-map','The Living Silver Map',
    face('mourning','Unfurled','A silver map is spread across a dead cartographer’s table, its corridors still unfinished.','The route is safe if you do not follow it.'),
    face('die-nacht','Rewritten','The map draws a new room around the expedition while a hand appears in the margin.','I have charted where you will die.')),
  card('black-crystal-keystone','The Black Crystal Keystone',
    face('mourning','Dormant','A black crystal sits inside a broken ward, swallowing every color but candlelight.','Repair the seal, and ask what it protected.'),
    face('die-nacht','Breached','The crystal opens like an eye as arcane weather pours through the chamber.','The ward was a promise, not a wall.')),
  card('brass-command-crown','The Brass Command Crown',
    face('mourning','Sleeping','An ancient crown rests on a clockwork throne surrounded by kneeling guardians.','Rule the ruin, and it will call you its own.'),
    face('die-nacht','Worn','The crown locks around a living brow while bronze soldiers turn toward the surface.','Obedience is the first thing it teaches.')),
  card('clockwork-heart','The Clockwork Heart',
    face('mourning','Counting','A bronze heart ticks inside the citadel’s engine, each beat moving a hundred hidden locks.','You arrived on the count it was waiting for.'),
    face('die-nacht','Waking','The heart beats through the floor as the entire ruin inhales around it.','The countdown was never to zero.')),
  card('nameless-fragment','The Nameless Fragment',
    face('mourning','Below','A warm shard of impossible stone rests on black steps that have no beginning.','You have carried me farther than anyone ever has.'),
    face('die-nacht','Remembering','The fragment reflects each survivor with a different face, all of them looking homeward.','The dark does not want the relic. It wants a witness.'))
];

const VICTIM_BY_HOOK = {
  'black-gate':'star-metal-seal',
  'lost-cartographers':'living-silver-map',
  'broken-ward':'black-crystal-keystone',
  'rival-expedition':'brass-command-crown',
  'clockwork-heart':'clockwork-heart',
  'below-the-below':'nameless-fragment'
};

export function victimCardForHook(hook){
  const slug = VICTIM_BY_HOOK[hook?.id];
  return CARD_VICTIMS.find(item=>item.slug===slug) || null;
}

function roleKey(value){
  return String(value||'').toLowerCase().normalize('NFKD').replace(/[’']/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
}
export function archetypeCardForRole(role){
  const slug=roleKey(role).replace(/^the-/,'');
  return CARD_ARCHETYPES.find(item=>item.slug===slug) || null;
}
export function pairedCardStem(style,item,sideIndex){
  const faceId=item.faces[sideIndex]?.id || item.faces[0].id;
  const suffix=style==='tarot' ? '-vault-woodcut-v1' : '-v1';
  return `${item.slug}-${faceId}${suffix}`;
}
