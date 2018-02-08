const path            = require('path')
const withTypescript  = require('@zeit/next-typescript')
const withCSS         = require('@zeit/next-css')
const {exportPathMap} = require('nextjs-export-path-map')

module.exports = withTypescript(
  withCSS({
    webpack(config) {
      if (process.env.ANALYZE) {
        config.plugins.push(new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true
        }))
      }
      return config
    },
    cssModules: true,
    exportPathMap: exportPathMap.bind(null, path.join(__dirname, 'pages')),
  })
)
