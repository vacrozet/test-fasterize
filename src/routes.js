const upload = require('./modules/upload/routes');
const resize = require('./modules/resize/routes');
const image = require('./modules/image/routes');

module.exports = [...upload, ...resize, ...image];
