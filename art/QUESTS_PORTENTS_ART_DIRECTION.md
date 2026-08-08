# Quests & Portents — art direction

This replaces the prototype-facing names **Hook** and **Omen** while preserving their card roles. The art should make the card playable before it makes the setting legible: a player should be able to point at one detail and say what it might mean.

## Visual grammar

### Quests

Quest art is a threshold, destination, or impossible invitation. Compose it as a story someone can enter: a path, doorway, ruin, witness, or landmark with one unresolved visual question. Keep the focal subject clear and leave quiet space for the printed title and rules text.

### Portents

Portent art is object-led. Show one sign, artifact, gesture, or reflection that can plausibly become a blessing, warning, cost, or coincidence. Do not label the valence in the image. Warm light, living growth, and open composition can suggest help; occlusion, repetition, blood-red accents, and closed forms can suggest danger; mixing both keeps the card useful.

## Two styles

**Painterly / Dungeon Oil** — moody desaturated oil painting, thick visible brushwork, dramatic chiaroscuro, Victorian dark fantasy, wet stone, tarnished brass, moss, smoke, selective amber or blood-red light, tactile atmosphere, no text, no border, no modern objects.

**Tarot / Vault Woodcut** — gothic tarot-card illustration, symmetrical ceremonial composition, bold flat fields, fine metallic linework, antique parchment and black-green palette, restrained brass and crimson accents, symbolic geometry, no readable text, no border typography, no modern objects.

## File convention

Use `art/images/<style>/<category>/<slug>.png` with `<style>` set to `painterly` or `tarot` and `<category>` set to `quests` or `portents`. Quest art is portrait `3:4`; Portent art is square `1:1`.

## Quest prompt sheet

For each row, append the style block above to the subject prompt.

| Card | Subject prompt |
|---|---|
| The Relic Beneath the Black Gate | A black iron gate half-buried in ash, a relic glowing in the darkness below its threshold, one narrow path leading in, distant figures watching from the rain. |
| The Cartographers Who Went Below | A ruined survey camp at the mouth of a descending stair, maps pinned to dead trees, one freshly drawn line continuing beneath the earth, lanterns left burning. |
| The Ward That Should Not Fail | A city wall covered in protective sigils, one sigil cracking while a calm pale light presses from the other side, defenders holding their ground in the foreground. |
| The Other Company | Two lines of footprints crossing in a forest of white birch, one set belonging to the party and the other too large and too deliberate, a campfire burning where nobody stands. |
| The Heart That Counts Down | A colossal brass heart suspended in a ruined chamber, a visible pendulum inside it, four chains running toward four different doors, one door already open. |
| The Depth That Was Buried | A collapsed mine or stair revealed by a landslide, old masonry beneath fresh earth, a warm light far below, roots and bones framing the descent. |

## Portent prompt sheet

For each row, append the style block above to the subject prompt. Keep the named object dominant and the secondary clue small but readable.

| Card | Subject prompt |
|---|---|
| A Gear That Turns Against the Clock | A tarnished brass gear turning backward inside a stopped clock, one tiny green shoot growing through its teeth. |
| A Star-Metal Shard | A jagged silver meteor shard embedded in black soil, reflecting a sky with one unfamiliar star. |
| A Lantern With Two Flames | An old lantern with two flames, one warm gold and one cold blue, casting shadows in opposite directions. |
| A Chain Still Attached to the Wall | A broken iron chain whose final link remains sunk into a wall, the loose end pointing toward an unseen doorway. |
| A Rival's Broken Signet | A cracked signet ring in a shallow pool, its reflection whole and worn by a different hand. |
| Sand Running Upward | A glass vessel where black sand climbs instead of falls, forming the outline of a small hand against the glass. |
| A Helm With No Face Inside | An empty battered helm facing the viewer, a faint breath fogging its interior from within. |
| A Map of Rooms That Move | A folded map whose drawn rooms overlap and shift, one red route leaving the map and entering the tabletop shadow. |
| A Ward Written in Bloodless Ink | A pale ward symbol written on dark stone, visible only where moonlight touches it, with a second unfinished stroke beside it. |
| A Coin From No Known Kingdom | A black-gold coin showing a two-faced sovereign on one side and an open door on the other. |
| A Second Shadow | A lone figure's shadow splitting into two, one shadow reaching toward safety and the other toward a waiting hand. |
| A Spell With No Caster | A ribbon of luminous symbols hovering over an empty chair, the chair's shadow occupied by someone unseen. |
| A Crown of Sleeping Brass | A small brass crown resting on velvet, tiny closed eyes worked into its metal and a single warm spark beneath it. |
| A Name Beneath Your Name | A wet parchment or nameplate with one familiar name scratched away and a second name visible underneath. |
| A Field Dressing Already Used | A blood-marked bandage folded around a clean unused needle, beside a trail that disappears into fog. |
| A Door That Opens Into the Same Room | A narrow door standing open inside the room it leads to, with a second version of the object visible beyond it. |
| A Falling Ember Under Stone | A single red ember drifting beneath a transparent slab of rock, lighting a root or vein that runs toward the viewer. |
| A Scale With One Side Missing | An antique balance scale with one pan absent, the remaining pan holding a feather and a small dark tooth. |

## Prototype assets

The first paired set is wired into the live prototype:

- `quests/the-drowned-bell` — a drowned chapel threshold, rendered in Painterly and Tarot.
- `portents/the-bells-debt` — a suspended bell and reflected face, rendered in Painterly and Tarot.

The style switch changes the same card identity, not the card's meaning. That lets playtesting isolate whether the visual language changes interpretation without changing the mechanic.
