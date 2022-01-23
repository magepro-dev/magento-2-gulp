const commands = require('./constants/commands');
const folders = require('./constants/folders');
const themes = require('../grunt/configs/local-themes');
const getTheme = require('./theme');

const theme = getTheme();

const cleanPaths = [];
const execPaths = [];
const sources = {};

if (theme && themes.hasOwnProperty(theme)) {
    const lessPath = `${folders.PUB_STATIC}/${themes[theme].area}/${themes[theme].name}/${themes[theme].locale}`;
    const lessFiles = [];
    const cssSrc = [];

    for (const file in themes[theme].files) {
        // eslint-disable-next-line max-depth
        if (!themes[theme].files.hasOwnProperty(file)) continue;

        lessFiles.push(`${lessPath}/${themes[theme].files[file]}.${themes[theme].dsl}`);
        cssSrc.push(`${lessPath}/${themes[theme].files[file]}.css`);
    }

    sources[theme] = {
        css: `${lessPath}/${folders.CSS_FOLDER}`,
        less: lessFiles,
        cssSrc,
        watch: `${lessPath}/${folders.WATCH_FILES}`
    };

    execPaths.push(
        `${commands.EXECUTION_FILE} ${commands.EXEC_COMMAND} --locale='${themes[theme].locale}' --area='${
            themes[theme].area
        }' --theme='${themes[theme].name}' ${themes[theme].files.join(' ')}`
    );

    cleanPaths.push(`${folders.PUB_STATIC}/${themes[theme].area}/${themes[theme].name}/**`);
}

module.exports = {
    theme,
    execPaths,
    cleanPaths,
    sources
};
