# Galician language for Foundry Virtual Tabletop

* **Author**: Xurxo Diz Pico [Discord: xurxodiz#5885]
* **Version**: 0.7.7.2
* **Foundry VTT compatibility**: 0.7.7

## Links to translation

* Github: https://github.com/xurxodiz/foundryvtt-gl
* Manifest: https://github.com/xurxodiz/foundryvtt-gl/raw/master/module.json

## Description

Galician language translations for Foundry VTT modules. In progress.

Install manually as any other module. It's not in the browser yet.

To enable it, in your world, go to Game Settings > Manage modules and enable the `FoundryVTT Galego` module.

Afterwards, in your world, go to Game Settings > Configure Settings and change the Language to Galego.

## Contributing

- Every FoundryVTT package has a JSON file with the strings needed to localize it.
- Add new files for modules inside an appropriately named folder in the `i18n` directory.
- Then use [i18n-editor](https://github.com/andi34/i18n-editor) to open that folder and add a `gl` locale.
- The editor will show you the original English and (empty) Galician keys side by side.
- Translate the keys by filling the `gl` textbox for each one.
- Once done, run `make combine` in the root folder to integrate your additions (you will need [gulp](https://gulpjs.com/docs/en/getting-started/quick-start))
- Create a new branch, add the new and changed files, commit, push & pull-request.
- Pat yourself in the back! Castelao would be proud.

## Notes

The `i18n` is kept even after files are "done" so when new versions of modules are released,
we can paste the new English file over and have diffs, and have the editor warn about missing keys.
It also provides us with a quick way of reviewing translations and making comparisons.

Those files are not included in the release archives, so you won't have them take space
in your server anyway if you install this through the zip file or the official browser.

## Acknowledgements

Big thank you to the [Russian translation project](https://github.com/Phenomen/foundry-vtt-ru),
as the setup with the different folders and gulp pipeline was shameslessly ripped off from them :)
