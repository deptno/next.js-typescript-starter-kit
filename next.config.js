const {exportPathMap} = require('nextjs-export-path-map')
const trash = require('trash')

module.exports = {
    webpack(config) {
        if (process.env.ANALYZE) {
            config.plugins.push(new BundleAnalyzerPlugin({
                analyzerMode: 'server',
                analyzerPort: 8888,
                openAnalyzer: true
            }))
        }
        config.module.rules.push({
            test: /\.p?css$/,
            use: [
                {
                    loader: 'emit-file-loader',
                    options: {
                        name: 'dist/[path][name].[ext]'
                    }
                },
                {
                    loader: 'skeleton-loader',
                    options: {
                        procedure   : function (stylesheet) {
                            trash(this._module.userRequest + '.json')
                            return 'exports.default = \'' + stylesheet + '\';'
                        }, cacheable: false
                    }
                },
                'postcss-loader'
            ]
        })
        return config
    },
    exportPathMap: exportPathMap.bind(null, path.join(__dirname, 'pages'))
}
