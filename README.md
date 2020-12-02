# FoundryVTT en Galego

Galician translation of core FoundryVTT and other systems and modules.

## Module translations included

- **FoundryVTT Core**: 0.7.7
- **[FateX](https://github.com/anvil-vtt/FateX)**: 0.8.0
- **[X-Card](https://github.com/Sk1mble/XCard)**: 0.0.4
- **[Popcorn](https://github.com/Sk1mble/Popcorn)**: 1.2.0

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

### License

The content in this repository is covered by a [CC-BY 4.0 license](https://creativecommons.org/licenses/by/4.0/)
(do what you want with it as long as you add a line saying where you got it from.)

