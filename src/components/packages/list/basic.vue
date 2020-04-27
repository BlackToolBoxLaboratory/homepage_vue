<template>
  <module-page class="btb-pkg-list-basic">
    <module-page-head title="List" :btnList="env.btnList" @clickBtn="openLink"/>
    <module-section>
      <!-- <template #content="slotProps"> -->
    <template #head>
      Version: {{env.varsion}} <br/>
      Release Date: {{env.releaseDate}}
    </template>
      <p>
        This module of list based on VueJS can do the help to make a list or mane component to our page. Normally it is a list make. But with some trigger action it can be a menu maker for route redirection or other feature we need.
      </p>
    </module-section>
    <module-section>
    <template #head>
      INSTALLATION
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
      RENDER
    </template>
      <module-pre>
<pre>
{{exampleRender}}
</pre>
      </module-pre>
    </module-section>
    <module-section>
    <template #head>
      APPLICATION
    </template>
      <btb-vue-table class="page_table" :headData="tableHeadArr" :bodyData="tableBodyArr" xScrollable />
      <p>
        Notice:
      </p>
      <module-pre>
<pre>
{{exampleListdata}}
</pre>
      </module-pre>
    </module-section>
  </module-page>
</template>

<script>
const _exampleRender = `<btb-vue-list 
        :listdata="translatedmenu" 
        :defaultActiveID="defaultActiveID"
        :activeID="currentActiveID"
        collapseEnable 
        @clickEntry="clickEntry"
        @toggleCollapsed="toggleCollapsed"/>`

const _exampleListdata = `entryObj = {
        id: '',
        title: '',
        defaultCollapsed: false,
        children: [...]
}, ...`

export default {
  name: 'btb-pkg-list-basic',
  data () {
    return {
      env: {
        varsion: '1.1.1',
        releaseDate: 'Apr. 27, 2020',
        btnList: [
          { id: 'github', fa: ['fab', 'github'], url: 'https://github.com/BlackToolBoxLaboratory/vue-list' },
          { id: 'npm', fa: ['fab', 'npm'], url: 'https://www.npmjs.com/package/@blacktoolbox/vue-list' }
        ]
      },
      exampleRender: _exampleRender,
      exampleListdata: _exampleListdata,
      tableHeadArr: [
        { name: 'Property Name', index: 'title' },
        { name: 'Type', index: 'type' },
        { name: 'Default', index: 'default' },
        { name: 'Notice', index: 'notice' }
      ],
      tableBodyArr: [
        { title: 'listdata', type: 'Array', default: '[]', notice: 'List of data in format of entryObj' },
        { title: '- id', type: 'String', default: 'undefined', notice: 'Identity of entry' },
        { title: '- title', type: 'String', default: '\'\'', notice: 'Show name of entry.' },
        { title: '- defaultCollapsed', type: 'String', default: 'undefined', notice: 'Default value to collapsed of extend.' },
        { title: '- children', type: 'Array', default: '[]', notice: 'sublist' },
        { title: 'collapseEnable', type: 'Boolean', default: 'false', notice: 'Enable collapse feature' },
        { title: 'defaultActiveID', type: 'String', default: 'undefined', notice: 'Default active entry\'s ID.' },
        { title: 'activeID', type: 'String', default: 'undefined', notice: 'Active entry\'s ID.' },
        { title: '@clickEntry', type: 'Emit Function', default: 'function(entryObj){}', notice: 'List entry\'s onClick function.' },
        { title: '@toggleCollapsed', type: 'Emit Function', default: 'function(entryObj){}', notice: 'List entry\'s onToggle function.' }
      ]
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
