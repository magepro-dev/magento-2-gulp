# Getting Started

## Check for Node and NPM

Make sure that you've installed Node and NPM before attempting to install gulp (supports gulp `4.x.x`).<br/>
For gulp `3.x.x` use [~1.4.0](https://github.com/bobmotor/magento-2-gulp/tree/v1.4.1) version.
```shell
node -v
npm -v
```

## Install Gulp globally

```shell
npm i -g gulp
```

## Project integration

### Composer

1. Add the repository's path to the `composer.json`

```json
"repositories": [
    {
      "type": "github",
      "url": "https://github.com/magepro-dev/magento-2-gulp"
    }
]
```

2. Run

```shell
composer require --dev magepro-dev/magento-2-gulp
```

3. Rename the following files in your project root directory:<br/>`package.json.example` to `package.json`
4. Install modules listed as dependencies in the `package.json`:

```shell
npm i
```
or
```shell
yarn
```

### Manually

1. Copy source files to your project dir.
2. Rename the following files in your project dir:<br/>`package.json.example` to `package.json`
3. Install modules listed as dependencies in the `package.json`:

```shell
npm i
```
or
```shell
yarn
```

## Configuration

Copy the content of `themes.js` into the `local-themes.js` and add your theme configuration in the `dev/tools/grunt/configs/` directory.

```
module.exports = {
    ...
    <Theme>: {
        area: 'frontend|adminhtml',
        name: '<Vendor>/<Theme>',
        locale: locale,
        files: [
            'css/styles-m',
            'css/styles-l',
        ],
        dsl: 'less'
    }
    ...
}
```

Example:

```
module.exports = {
    ...
    themeName: {
        area: 'frontend',
        name: 'Package/themeName',
        locale: 'en_US',
        files: [
            'css/styles-m',
            'css/styles-l'
        ],
        dsl: 'less'
    }
    ...
}
```

## How to use

In a project root dir run `gulp [command] --[themeName] --[argument]`

Available commands:

<table>
    <thead>
        <tr>
            <td><strong>Command</strong></td>
            <td><strong>Arguments</strong></td>
            <td><strong>Description</strong></td>
        </tr>
    </thead>
    <tr>
        <td>help</td>
        <td></td>
        <td>Display this help message</td>
    </tr>
    <tr>
        <td>clean</td>
        <td><i>--themeName</i></td>
        <td>Remove cached files (pub/static/**, var/**)</td>
    </tr>
    <tr>
        <td>exec</td>
        <td><i>--themeName</i></td>
        <td>Republishes symlinks to the source files</td>
    </tr>
    <tr>
        <td>less</td>
        <td><i>--themeName</i></td>
        <td>Compile LESS to CSS</td>
    </tr>
    <tr>
        <td rowspan="2">watch</td>
        <td><i>--themeName</i></td>
        <td>Watch for *.less files</td>
    </tr>
    <tr>
        <td><i>--themeName --docker</i></td>
        <td>Watch for *.less files in a docker container</td>
    </tr>
</table>

See commands:
```shell
gulp help
```

Compile styles:
```shell
gulp clean --themeName && gulp exec --themeName && gulp less --themeName
```

Run watcher:
```shell
gulp watch --themeName
gulp watch --themeName --docker
```

The argument `--docker` enables the option `usePolling: true` for the gulp watcher. Read more [here](https://gulpjs.com/docs/en/api/watch/). 

### Scripts
See short scripts in the `package.json.example`.

Example:
```shell
"gulp": "gulp clean --themeName && gulp exec --themeName && gulp less --themeName && gulp watch --themeName"
"gulp:docker": "gulp clean --themeName && gulp exec --themeName && gulp less --themeName && gulp watch --themeName --docker"
```

Run the script:
```shell
npm run [scriptName]
```
or
```shell
yarn [scriptName]
```

Example:
```shell
npm run gulp
npm run gulp:docker
```

#### Note:
`themeName` is a key of exported object in the file:
```shell
dev/tools/grunt/configs/local-themes.js
```

Replace it everywhere for npm scripts.