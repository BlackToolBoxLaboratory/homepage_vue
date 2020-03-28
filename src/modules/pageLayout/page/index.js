import Page from './Page.vue'
import PageHead from './PageHead.vue'

Page.install = function (Vue) {
  Vue.component(Page.name, Page)
  Vue.component(PageHead.name, PageHead)
}

export default Page
