const wba = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
  },
  mini: {},
  h5: {
    webpackChain (chain) {
      chain.plugin('analyzer')
        .use(wba, [])
    },
  }
}
