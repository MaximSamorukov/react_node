if (process.env.NONE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}

