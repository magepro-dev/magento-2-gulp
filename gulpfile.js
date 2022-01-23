const requireDir = require('require-dir');
const tasks = requireDir('dev/tools/gulp/tasks');

exports.clean = tasks.clean;
exports.exec = tasks.exec;
exports.less = tasks.less;
exports.watch = tasks.watch;
exports.help = tasks.help;
exports.default = tasks.help;
