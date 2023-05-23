# proformajs-vue3-perform-neutralino

An example usage of proformajs-vue3-perform using [Neutrolino](https://neutralino.js.org//)

The original component work for this project can be found at https://gitlab.com/openclinical/proformajs-vue3

---

This template should help get you started building standalone PRO<i>formajs</i>-Vue3 project with [Neutrolino](https://neutralino.js.org//).

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Project Setup

```sh
npm install
npm run build
neu update
```

## Debug standalone application using [Neutrolino](https://neutralino.js.org//)

In `neutralino.config.json`,

```json
"modes": {
    "window": {
        "enableInspector": true,
    }
}
```

In terminal,
```sh
neu run
```

## Package and distributio

1. Create distrubtion using make command.

In folder

```sh
neu build
```

Or, in zip file

```sh
neu build --release
```

2. The executables should be output to `out` folder under the root folder of the project.
