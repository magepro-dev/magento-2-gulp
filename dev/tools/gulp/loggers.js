const color = require('gulp-color');

module.exports = {
    specifyTheme(themes) {
        // eslint-disable-next-line no-console
        console.log(
            color('Need to specify theme!', 'RED'),
            color('\nAvailable theme(s):', 'WHITE'),
            color(`\n${Object.keys(themes).join(', ')}`, 'GREEN')
        );
    },

    task(task, source, targetArray) {
        const target = targetArray ?? 'theme(s)';

        // eslint-disable-next-line no-console
        console.log(
            color('Running gulp task', 'WHITE'),
            color(`${task}`, 'CYAN'),
            color(`for ${source.length} ${target}:`, 'WHITE')
        );

        for (const key in source) {
            if (!source.hasOwnProperty(key)) continue;

            // eslint-disable-next-line no-console
            console.log(color(source[key], 'MAGENTA'));
        }
    },

    help() {
        // eslint-disable-next-line no-console
        console.log(
            color('Available commands:\n', 'YELLOW'),
            color('help', 'GREEN'),
            color('- Display this help message\n', 'WHITE'),
            color('clean', 'GREEN'),
            color('--themeName', 'CYAN'),
            color('- Remove cached files (pub/static/*, var/*)\n', 'WHITE'),
            color('exec', 'GREEN'),
            color('--themeName', 'CYAN'),
            color('- Republishes symlinks to the source files\n', 'WHITE'),
            color('less', 'GREEN'),
            color('--themeName', 'CYAN'),
            color('- Compile LESS to CSS\n', 'WHITE'),
            color('watch', 'GREEN'),
            color('--themeName', 'CYAN'),
            color('- Watch for *.less files\n', 'WHITE'),
            color('watch', 'GREEN'),
            color('--themeName', 'CYAN'),
            color('--docker', 'CYAN'),
            color('- Watch for *.less files in a docker container\n', 'WHITE'),
            color('[default]', 'MAGENTA'),
            color('- Run command: help\n', 'WHITE')
        );
    }
};
