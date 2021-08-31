let keys = {};
try {
  keys = require('./config/keys.dev');
} catch(e) {
  keys = require('./config/keys');
}
module.exports = keys;