const path = require('path')

const indyVdrShared = require('../indy-vdr-shared/package.json')

module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
          [indyVdrShared.name]: path.join(__dirname, '../indy-vdr-shared', indyVdrShared.source),
        },
      },
    ],
  ],
}
