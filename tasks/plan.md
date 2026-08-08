# Implementation Plan: Realms & Ruin Redesign

## Overview

Rework the existing browser game from a gothic murder-mystery shell into a D&D-compatible tactical expedition through the Under-Vaults of Kaz-Dahrum. The architecture remains dependency-free and browser-first, but the player-facing vocabulary, card data, scene prompts, act closes, gallery, and art all move to the Job/Crew, Righteous/Ruthless, and Ordered/Chaotic design axes.

## Architecture decisions

- Preserve the local hotseat, optional Firebase room sync, save/load, chronicle, and gallery flows.
- Keep the current internal `victim` state key temporarily as a compatibility seam; all UI and new content call it the **relic** or **vault prize**.
- Keep the existing three-act scene engine and replace its content packs with new card contracts.
- Use one canonical card roster for gameplay and gallery metadata so missing art never breaks play.
- Generate original art in a consistent illustrated card style; do not reuse the copied mystery card imagery as new game content.

## Phases

### Phase 1: Content contract

- Replace tones with the three expedition pressures: Job, Crew, and Ruin State.
- Replace hooks with six contracts in Kaz-Dahrum.
- Replace archetypes with six D&D-style expedition roles and duality prompts.
- Replace omens, scenes, secret reveals, act closes, and epilogue prompts.

### Phase 2: UI vocabulary and state presentation

- Rename visible murder-mystery labels to expedition language.
- Add Job/Crew/Ordered/Chaotic indicators to the table hub and chronicle.
- Update rules overlay and onboarding copy.

### Phase 3: Original card art

- Generate role, contract, omen, and relic art in the selected card style.
- Update gallery metadata and asset paths.
- Remove legacy source-art references from the new roster.

### Phase 4: Verification and release

- Run the local browser smoke test through Act I and gallery interactions.
- Run the live interaction probe after GitHub Pages deployment.
- Confirm local hotseat and online entry still load without console errors.

## Risks and mitigations

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Existing engine assumes three tone names | High | Introduce explicit state labels while preserving compatibility adapters during migration. |
| Large card replacement breaks setup or online sync | High | Replace one data pack at a time and run smoke tests after each pack. |
| Art generation creates inconsistent card identities | Medium | Maintain a slug/roster manifest and use one fixed prompt style. |
| Old copied assets remain discoverable | Medium | Make the new roster authoritative and remove legacy references after the new art lands. |
