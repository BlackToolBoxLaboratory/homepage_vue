'use strict'

// const path = require('path');

module.exports = {
  publicPath: '/vue/',
  runtimeCompiler: true,
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/style/mixins.scss"; @import "@/assets/style/variables.scss";'
      }
    }
  }
}
