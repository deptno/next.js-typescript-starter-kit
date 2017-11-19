const path            = require('path')
const {exportPathMap} = require('nextjs-export-path-map')

module.exports = {
  webpack(config) {
    if (process.env.ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true
        })
      )
    }
    return config
  },
  exportPathMap: exportPathMap.bind(null, path.join(__dirname, 'pages')),
}
