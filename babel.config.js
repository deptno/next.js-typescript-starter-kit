module.exports = (api) => {
  api.cache(true)
  return {
    presets: [],
    plugins: [
      '@babel/proposal-class-properties',
      '@babel/proposal-object-rest-spread',
    ]
  }
}
