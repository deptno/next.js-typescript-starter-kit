const path = require('path')
const glob = require('glob')

module.exports = [
  {
    test: /\.css$/,
    use: [
      'babel-loader',
      'raw-loader',
      'postcss-loader'
    ]
  },
  {
    test: /\.s(a|c)ss$/,
    use: [
      'babel-loader',
      'raw-loader',
      'postcss-loader',
      {
        loader: 'sass-loader',
        options: {
          includePaths: ['styles/*', 'node_modules']
            .map((d) => path.join(__dirname, d))
            .map((g) => glob.sync(g))
            .reduce((a, c) => a.concat(c), [])
        }
      }
    ]
  },
  {
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
  }
]