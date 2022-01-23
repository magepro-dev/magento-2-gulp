const themes = require('../grunt/configs/local-themes');
const loggers = require('./loggers');

module.exports = () => {
    const flag = '--';
    const theme = process.argv.find(arg => arg.match(flag))?.replace(flag, '');

    if (!theme && !themes.hasOwnProperty(theme)) {
        return loggers.specifyTheme(themes);
    }

    return theme;
};
