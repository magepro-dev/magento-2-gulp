const gulp = require('gulp');
const livereload = require('gulp-livereload');
const loggers = require('../loggers');
const paths = require('../paths');

const watch = async () => {
    if (!paths.theme) return false;

    loggers.task('Watching LESS', Object.keys(paths.sources));

    livereload.listen();
    gulp.watch(
        paths.sources[paths.theme].watch,
        { usePolling: !!process.argv.find(arg => arg.match('--docker')) },
        gulp.series('less')
    );
};

module.exports = watch;
