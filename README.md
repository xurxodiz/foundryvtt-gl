# FoundryVTT en Galego

Galician translation of core FoundryVTT and other systems and modules.

## Translations included

### Core

- **FoundryVTT Core**: 0.8.7

### Systems

- **[DnD 5e](https://gitlab.com/foundrynet/dnd5e)**: 1.3.3
- **[FateX](https://github.com/anvil-vtt/FateX)**: 0.11.3
- **[Simple Worldbuilding System](https://gitlab.com/foundrynet/worldbuilding)**: 0.40

**Tip**: a Galician translation for the [Savage Worlds](https://gitlab.com/peginc/savage-worlds-adventure-edition)
system (as well as for its compendiums and decks) can currently be found included in the
[Spanish translation module](https://gitlab.com/jvir/foundryvtt-swade-es). You are welcome to help port them here!

### Modules

- **[Better Roll Tables](https://github.com/ultrakorne/better-rolltables)**: 1.6.7
- **[Compendium Folders](https://github.com/earlSt1/vtt-compendium-folders)**: 2.2.44
- **[DF Scene Enhancement](https://github.com/flamewave000/dragonflagon-fvtt/tree/master/df-scene-enhance)**: 3.4.0
- **[Entity Tiles](https://github.com/xurxodiz/foundryvtt-entity-tiles)**: 0.1.6
- **[Fate Aspect Tracker](https://github.com/Galdormin/FoundryVTT-Fate-Aspect-Tracker)**: 0.6.0
- **[GM Screen](https://github.com/ElfFriend-DnD/foundryvtt-gmScreen)**: 2.6.0
- **[Lancer Initiative](https://github.com/BoltsJ/lancer-initiative)**: 0.5.1
- **[Moar folders](https://github.com/KayelGee/moar-folders)**: 1.1.0
- **[Party Resources](https://github.com/davelens/fvtt-party-resources)**: 1.2.2
- **[PDFoundry](https://github.com/Djphoenix719/PDFoundry)**: 0.8.3
- **[Pings](https://gitlab.com/foundry-azzurite/pings)**: 1.2.12
- **[Popcorn](https://github.com/Sk1mble/Popcorn)**: 1.2.2
- **[Ready Set Go!](https://github.com/crash1115/ready-check)**: 1.2.2
- **[Theatre](https://github.com/League-of-Foundry-Developers/fvtt-module-theatre)**: 1.16.2
- **[X-Card](https://github.com/Sk1mble/XCard)**: 0.0.7

## Installation

Available in the integrated module browser, or manually using
[the manifest URL](https://github.com/xurxodiz/foundryvtt-gl/releases/latest/download/module.json).

To enable it in your world, go to `Game Settings > Manage modules` and enable the `FoundryVTT en Galego` module,
then go to `Game Settings > Configure Settings` and change the `Language` to `Galego`.

You can also set it as the default language for Foundry in `Settings > Default language`. Restart needed.

## Contributing

- Every FoundryVTT package has a JSON file with the strings needed to localize it.
- Add new files for modules inside an appropriately named folder in the `i18n` directory (see existing examples)
- Then use [i18n-editor](https://github.com/andi34/i18n-editor) to open that folder and add a `gl` locale.
- The editor will show you the original English and (empty) Galician keys side by side.
- Translate the keys by filling the `gl` textbox for each one.
- Once done, run `make combine` in the root folder to integrate your additions
	- The first time you do, make sure you install [npm](https://www.npmjs.com/) and [gulp](https://gulpjs.com/docs/en/getting-started/quick-start))
	before and run `npm install` in the root folder to get the rest of the dependencies
- Create a new branch, add the new and changed files, commit, push & pull-request.
- Pat yourself in the back! Castelao would be proud.

Contributing to this repo entails accepting that the content provided will fall under the global
license applied to this repo (see further below).

### Notes

The `i18n` is kept even after files are "done" so when new versions of modules are released,
we can paste the new English file over and have diffs, and have the editor warn about missing keys.
It also provides us with a quick way of reviewing translations and making comparisons.

Those files are not included in the release archives, so you won't have them take space
in your server anyway if you install this through the zip file or the official browser.

## Acknowledgements

Big thank you to the [Russian translation project](https://github.com/Phenomen/foundry-vtt-ru),
as the setup with the different folders and gulp pipeline was shameslessly ripped off from them :)

Tip of the hat to [FateX](https://github.com/anvil-vtt/FateX), as I took the Github workflows for releases from that project!

### Contributors

- Xurxo Diz Pico [Discord: xurxodiz#5885]
- A comunidade das [Irmandades do Dado](https://irmandadesdodado.fala.gal/)

### License

The content in this repository is covered by a [CC-BY 4.0 license](https://creativecommons.org/licenses/by/4.0/)
(do what you want with it as long as you add a line saying where you got it from.)
