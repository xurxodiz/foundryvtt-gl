# Galician language for Foundry Virtual Tabletop

    WARNING: this module is not ready for use yet, do not install!

* **Author**: Xurxo Diz Pico [Discord: xurxodiz#5885]
* **Version**: 0.7.6.1
* **Foundry VTT compatibility**: 0.7.6

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
- Once a file is translated, copy it into the `source` folder.
- Then, run [`gulp`](https://gulpjs.com/docs/en/getting-started/quick-start) in the root directory so the `combined.json` resulting file is merged.
- Create a new branch, commit, push & pull-request.
- Pat yourself in the back! Castelao would be proud.


## Notes

The `i18n` is kept even after files are "done" so when new versions of modules are released,
we can paste the new English file over and have diffs, and have the editor warn about missing keys.

It also provides us with a quick way of reviewing translations and making comparisons.

## Acknowledgements

Big thank you to the [Russian translation project](https://github.com/Phenomen/foundry-vtt-ru),
as the setup with the different folders and gulp pipeline was shameslessly ripped off from them :)
