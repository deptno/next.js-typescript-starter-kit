const trash = require("trash");

module.exports = {
    webpack         : function (config) {
        config.module.rules.push({
            test: /\.p?css$/,
            use: [
                {
                    loader: 'emit-file-loader', options: {
                    name: 'dist/[path][name].[ext]'
                }
                },
                {
                    loader: 'skeleton-loader', options: {
                        procedure   : function (stylesheet) {
                            trash(this._module.userRequest + ".json")
                            return "exports.default = '" + stylesheet + "';"
                        }, cacheable: false
                    }
                },
                'postcss-loader'
            ]
        });
        return config
    }, exportPathMap: function () {
        return {
            '/': {page: '/'}
        }
    }
}
