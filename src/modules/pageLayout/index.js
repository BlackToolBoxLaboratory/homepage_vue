import { registerPlugins, vueUse } from '@/utils/plugins'

import Page from './page'
import Section from './section'
import Divider from './divider'

const InstallList = {
  Page,
  Section,
  Divider
}

const install = (Vue) => {
  if (install.installed) {
    /* istanbul ignore next */
    return
  }
  install.installed = true

  registerPlugins(Vue, InstallList)
}

install.installed = false

const componentsInstaller = {
  install: install
}

vueUse(componentsInstaller)

export default componentsInstaller
