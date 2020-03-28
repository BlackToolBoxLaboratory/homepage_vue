<template>
  <module-page class="btb-pkg-list-basic">
    <module-page-head title="List" :btnList="env.btnList" @clickBtn="openLink"/>
    <module-section>
      <!-- <template #content="slotProps"> -->
      <template #head>
        <div class="page_version">
          Version: {{env.varsion}}
        </div>
        <div class="page_releaseDate">
          Release Date: {{env.releaseDate}}
        </div>
      </template>
      <p>
        This module of list based on VueJS can do the help to make a list or mane component to our page. Normally it is a list make. But with some trigger action it can be a menu maker for route redirection or other feature we need.
      </p>
    </module-section>
    <module-section>
      <template #head>
        <div class="page_version">
          INSTALLATION
        </div>
      </template>
      <module-pre>
<pre>
$ npm install --save @blacktoolbox/vue-list

<code class="pre_notice">// create a plugin for vue to use list</code>
import Vue from 'vue'

import BTBList from '@blacktoolbox/vue-list'
import '@blacktoolbox/vue-list/lib/index.css'

Vue.use(BTBList)
</pre>
      </module-pre>
    </module-section>
    <module-section>
      <template #head>
        <div class="page_version">
          APPLICATION
        </div>
      </template>
      {{'<btb-vue-list :listdata="translatedmenu" collapseEnable @clickEntry="clickEntry" :activeID="currentActiveID"/>'}}
    </module-section>
  </module-page>
</template>

<script>
export default {
  name: 'btb-pkg-list-basic',
  data () {
    return {
      env: {
        varsion: '1.1.0',
        releaseDate: 'Feb. 7, 2020',
        btnList: [
          { id: 'github', fa: ['fab', 'github'], url: 'https://github.com/BlackToolBoxLaboratory/vue-list' },
          { id: 'npm', fa: ['fab', 'npm'], url: 'https://www.npmjs.com/package/@blacktoolbox/vue-list' }
        ]
      }
    }
  },
  methods: {
    openLink: function (link) {
      window.open(link.url)
    }
  }
}
</script>

<style lang="scss">

</style>
