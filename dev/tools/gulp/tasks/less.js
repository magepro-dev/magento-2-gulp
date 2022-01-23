const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const loggers = require('../loggers');
const paths = require('../paths');

const less = async () => {
    if (!paths.theme) return false;

    const sources = paths.sources[paths.theme].less;

    loggers.task('LESS compilation', sources, 'source(s)');

    return gulp
        .src(sources, {
            allowEmpty: true
        })
        .pipe(plugins.sourcemaps.init())
        .pipe(
            // eslint-disable-next-line no-console
            plugins.less().on('error', error => console.log(error))
        )
        .pipe(plugins.sourcemaps.write(''))
        .pipe(gulp.dest(paths.sources[paths.theme].css))
        .pipe(plugins.livereload());
};

module.exports = less;
