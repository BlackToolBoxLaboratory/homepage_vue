<template>
  <module-page class="btb-pkg-list-basic">
    <module-page-head title="List" :btnList="env.btnList" @clickBtn="openLink" />
    <module-section>
      <template #head>
        {{ `Version: ${env.version}` }} <br />
        {{ `Release Date: ${env.updated}` }}
      </template>
      <p>
        {{ env.description }}
      </p>
    </module-section>
    <module-section>
      <template #head>
        {{ 'INSTALLATION' }}
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
        {{ 'RENDER' }}
      </template>
      <module-pre>
        <pre>
  {{ exampleRender }}
  </pre>
      </module-pre>
    </module-section>
    <module-section>
      <template #head>
        {{ 'PARAMETERS' }}
      </template>
      <module-block>
        <template #title>
          {{ 'Basic' }}
        </template>
        <btb-vue-table class="page_table block_item" :headData="tableHeadArr_property" :bodyData="tableBodyArr_basic"
          xScrollable />
      </module-block>
      <module-block>
        <template #title>
          {{ 'entryObj' }}
        </template>
        <module-pre class="block_item">
          <pre>
  {{ exampleEntryObj }}
  </pre>
        </module-pre>
        <btb-vue-table class="page_table block_item" :headData="tableHeadArr_property" :bodyData="tableBodyArr_entry"
          xScrollable />
      </module-block>
      <module-block>
        <template #title>
          {{ 'slots' }}
        </template>
        <btb-vue-table class="page_table block_item" :headData="tableHeadArr_slot" :bodyData="tableBodyArr_slot"
          xScrollable />
      </module-block>
    </module-section>
    <module-section>
      <template #head>
        {{ 'NODE TREE' }}
      </template>
      <btb-vue-list class="page_node_tree" :dataList="nodeTree" />
      <p>
        {{ 'Note: The layer count is counted base on 0.' }}
      </p>
    </module-section>
  </module-page>
</template>

<script lang="ts">
import packageObj from '@/assets/definitions/packageObj'

const _exampleRender = `<btb-vue-list 
        :dataList=" Array " 
        :defaultActiveID=" String "
        :activeID=" String "
        :collapseEnable=" Boolean "
        @clickEntry=" function(entryObj){} "
        @toggleCollapsed=" function(entryObj){} "/>`

const _exampleEntryObj = `entryObj = {
        id: '',
        title: '',
        defaultCollapsed: false,
        children: [...]
}`

const _nodeTree = [
  {
    id: 'list',
    title: '<div> .btb-vue-list',
    children: [
      {
        id: 'layer',
        title: '<ul> .btb-vue-list-layer .layer-[layer count]',
        children: [
          {
            id: 'container',
            title: '<li> .layer-container .layer-[layer count]',
            children: [
              {
                id: 'entry',
                title: '<div> .container_entry .entry-[id] .entry-active',
                children: [
                  {
                    id: 'title',
                    title: '<div> .entry_title'
                  },
                  {
                    id: 'collapseBtn',
                    title: '<div> .entry_collapseBtn .collapseBtn-default',
                    children: [
                      {
                        id: 'arrow',
                        title: '<div> .collapseBtn_arrow'
                      }
                    ]
                  }
                ]
              },
              {
                id: 'sublayer',
                title: '<div>.list_sublayer',
                children: [
                  {
                    id: 'next',
                    title: '<ul>.btb-vue-list-layer.layer-[layer count + 1]'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]

export default {
  name: 'btb-pkg-list-basic',
  setup() {
    return {
      env: {
        version: packageObj.list.version,
        updated: packageObj.list.updated,
        description: packageObj.list.description,
        btnList: [
          { id: 'github', fa: ['fab', 'github'], url: 'https://github.com/BlackToolBoxLaboratory/vue-list' },
          { id: 'npm', fa: ['fab', 'npm'], url: 'https://www.npmjs.com/package/@blacktoolbox/vue-list' }
        ]
      },
      exampleRender: _exampleRender,
      exampleEntryObj: _exampleEntryObj,
      tableHeadArr_property: [
        { name: 'Property Name', index: 'title' },
        { name: 'Type', index: 'type' },
        { name: 'Default', index: 'default' },
        { name: 'Notice', index: 'notice' }
      ],
      tableHeadArr_slot: [
        { name: 'Name', index: 'title' },
        { name: 'Props', index: 'props' },
        { name: 'Notice', index: 'notice' }
      ],
      tableBodyArr_basic: [
        { title: 'dataList', type: 'Array', default: '[]', notice: 'List of entryObj.' },
        { title: 'collapseEnable', type: 'Boolean', default: 'false', notice: 'Enable collapse feature.' },
        { title: 'defaultActiveID', type: 'String', default: 'undefined', notice: 'Default active entry\'s ID.' },
        { title: 'activeID (v-model)', type: 'String', default: 'undefined', notice: 'Active entry\'s ID which is v-model\'s value.' },
        { title: 'styleObj', type: 'Object', default: 'undefined', notice: 'Specific style object, where key is spacific class name, value is style object. Please refer to Node Tree.' },
        { title: '@clickEntry', type: '$Emit', default: 'function(entryObj){}', notice: 'List entry\'s onClick function.' },
        { title: '@toggleCollapsed', type: '$Emit', default: 'function(entryObj){}', notice: 'List entry\'s onToggle function.' }
      ],
      tableBodyArr_entry: [
        { title: 'id', type: 'String', default: 'undefined', notice: 'Identity of entry' },
        { title: 'title', type: 'String', default: '\'\'', notice: 'Show name of entry.' },
        { title: 'defaultCollapsed', type: 'String', default: 'undefined', notice: 'Default value to collapsed of extend.' },
        { title: 'children', type: 'Array', default: '[]', notice: 'sublist' }
      ],
      tableBodyArr_slot: [
        { title: '[ id of entryObj ]', props: '-', notice: 'Slot for customized entry.' }
      ],
      nodeTree: _nodeTree
    }
  }
}
</script>

<style lang="scss"></style>
