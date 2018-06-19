const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin')
const withCSS         = require('@zeit/next-css')

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {loader: require.resolve('babel-loader')},
      'awesome-typescript-loader?configFileName=tsconfig.storybook.json'
    ]
  })

  config.plugins.push(new TSDocgenPlugin())
  config.resolve.extensions.push('.ts', '.tsx')
  config.module.rules = config.module.rules.filter(rule => !rule.test.toString().includes('css$'))

  return withCSS({cssModules: true}).webpack(config, {defaultLoaders: {}})
}
