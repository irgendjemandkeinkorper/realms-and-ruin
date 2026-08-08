# Spec: Realms & Ruin

## Objective

Create a playable, original tactical fantasy dungeon-crawl game for 1–6 storytellers. A session should support a shared descent through a dangerous ruined citadel, make cooperation and betrayal mechanically visible, and resolve in three escalating acts.

### Initial success criteria

- A group can create or choose characters and begin an expedition without a facilitator inventing missing core rules.
- The Job, Crew, Righteous/Ruthless, and Ordered/Chaotic axes each change play rather than serving as flavor text.
- A complete three-act scenario fits a 20–40 minute-per-player session.
- A playtest facilitator can run one encounter, one exploration scene, and one consequence scene from repository materials alone.
- The first public draft clearly separates original material from compatibility guidance for d20 fantasy games.

## Intended format

The first release is a tabletop rules-and-adventure document, not a digital application. Markdown is the source format so the rules can later be exported to PDF or a virtual tabletop format.

## Project structure

```text
docs/       Core rules, setting, encounters, and facilitator guidance
tasks/      Ordered implementation and playtest checklist
README.md   Project orientation
SPEC.md     Scope and acceptance criteria
```

## Testing strategy

Rules are verified through structured playtests rather than automated software tests:

- rules audit: every mechanic has a trigger, procedure, and outcome;
- solo procedure test: one facilitator can resolve a scene without guessing;
- group playtest: 2, 4, and 6 storyteller configurations;
- pacing test: record time spent in each act and identify stalled procedures;
- choice test: confirm both sides of each axis create attractive decisions.

Playtest reports belong in `docs/playtests/` once the first rules draft exists.

## Boundaries

- **Always:** keep mechanics original, define terms before using them, document consequences, and preserve the three-act structure.
- **Ask first:** adding third-party art, adopting a specific commercial rules license, publishing a final SRD compatibility claim, or expanding into a digital product.
- **Never:** reproduce another game’s protected text, illustrations, names, or distinctive presentation; include secrets or credentials; treat compatibility as endorsement.

## Open questions

- Should the rules use a fully independent d20 chassis or a clearly labeled compatibility layer?
- Are “storytellers” the players, the facilitators, or a deliberately shared role?
- What is the intended default tone boundary for body horror and corruption?
- Is the first release a scenario packet, a standalone game, or both?
