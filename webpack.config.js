const path = require('path');
const ENTRY_PATH = path.resolve(__dirname, 'client', 'src')
const OUTPUT_PATH = path.resolve(__dirname, 'client', 'dist')

module.exports = {
  entry: `${ENTRY_PATH}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: OUTPUT_PATH
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: '/(node_modules)/',
        include: ENTRY_PATH,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  }
}