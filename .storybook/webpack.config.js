const path             = require('path')
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js')

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env)

  config.module.rules.push({
    test: /\.tsx?$/,
    include: path.resolve(__dirname, '..'),
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve('babel-loader')
      },
      {
        loader: require.resolve('ts-loader')
      }
    ]
  })
  config.resolve.extensions.push('.ts', '.tsx')

  return config
}

