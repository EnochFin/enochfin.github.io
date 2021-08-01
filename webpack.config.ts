import path = require('path');
import ESLintPlugin from 'eslint-webpack-plugin';

const options = {
  extensions: ['ts'],
};

module.exports = {
  plugins: [new ESLintPlugin(options)],
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
