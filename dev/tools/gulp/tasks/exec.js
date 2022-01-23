const gulpExec = require('exec-queue');
const loggers = require('../loggers');
const paths = require('../paths');

const exec = async () => {
    loggers.task('exec', paths.execPaths);

    paths.execPaths.map(execOptions => {
        gulpExec(`${execOptions}`, (err, stdout, stderr) => {
            // eslint-disable-next-line no-console
            console.log(stdout);
            // eslint-disable-next-line no-console
            console.log(stderr);
        });
    });
};

module.exports = exec;
