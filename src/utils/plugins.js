export const registerPlugins = (Vue, VuePlugins = {}) => {
  for (const plugin in VuePlugins) {
    if (plugin && VuePlugins[plugin]) {
      Vue.use(VuePlugins[plugin])
    }
  }
}

export const vueUse = (VuePlugin) => {
  /*
    istanbul ignore next,
    Auto installation only occurs if window.Vue exists
  */
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VuePlugin)
  }
}
