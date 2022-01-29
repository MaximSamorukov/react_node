if (process.env.NONE_ENV === 'production') {
  module.exports = require('./prod.js');
} else {
  module.exports = require('./dev.js');
}

