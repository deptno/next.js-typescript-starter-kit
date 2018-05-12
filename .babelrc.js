const env      = {
  'process.env.NODE_ENV': process.env.NODE_ENV
}
module.exports = {
  presets: ['next/babel'],
  plugins: [['transform-define-file', env]]
}


