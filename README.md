# Realms & Ruin

*A subterranean descent in three acts—told together, one torch at a time.*

Realms & Ruin is an original tactical high-fantasy dungeon-crawl game for 1–6 storytellers. It is designed for 20–40 minutes of play per participant and uses familiar d20 fantasy roleplaying conventions while defining its own setting, terminology, scenarios, and rules.

## Project status

This repository now includes the full dependency-free browser game shell, local hotseat flow, optional Firebase multiplayer flow, art gallery, save/load, chronicle export, and the living game design specification. The first content milestone is a playable three-act descent through the Under-Vaults of Kaz-Dahrum.

## Design pillars

- **The Job vs. the Crew:** every expedition weighs the patron’s objective against the people who must survive it.
- **Righteous vs. Ruthless:** meaningful choices trade moral duty for immediate tactical advantage—or immediate efficiency for lasting corruption.
- **Ordered vs. Chaotic:** the dungeon itself shifts between clockwork precision and unstable magical entropy.
- **Three-act descent:** each session escalates from exploration, to fracture, to consequence.

## Contents

- [Play the game](index.html) — browser entry point
- `js/` — game engine, scene flow, data, and optional online sync
- `css/` — game styling
- `art/` — card art and generation prompts
- `scripts/` — smoke tests and art utilities
- [Game design](docs/game-design.md) — current rules direction, setting, and play loop
- [Project spec](SPEC.md) — scope, success criteria, and development boundaries
- [Roadmap](tasks/todo.md) — the next playtestable increments

## Run locally

The game is a dependency-free static site. Serve the repository over HTTP because browser ES modules do not load from `file://`:

```sh
python3 -m http.server 8080
```

Then open <http://localhost:8080/>.

GitHub Pages deploys automatically from `main` through `.github/workflows/pages.yml`.

## License

The rules text and original setting material in this repository are released under the [Creative Commons Attribution 4.0 International license](LICENSE). Any third-party game-system compatibility references remain the property of their respective owners.
