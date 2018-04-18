const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'api.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'api',
  },
  mode: 'development',
};
