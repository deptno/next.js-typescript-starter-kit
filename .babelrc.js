const env      = {
  'process.env.NODE_ENV': process.env.NODE_ENV
}
module.exports = {
  presets: ['next/babel', '@zeit/next-typescript/babel'],
  plugins: [['transform-define', env]]
}


