const del = require('del');
const folders = require('../constants/folders');
const loggers = require('../loggers');
const paths = require('../paths');

const clean = async () => {
    const files = [...folders.CACHED_FILES, ...paths.cleanPaths];

    loggers.task('clean', files, 'source(s)');

    // eslint-disable-next-line no-console
    await del(files).catch(error => console.log(error));
};

module.exports = clean;
