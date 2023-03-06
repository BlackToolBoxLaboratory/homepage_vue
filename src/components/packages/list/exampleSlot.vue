<template>
  <module-page class="btb-pkg-list-example-slot">
    <module-page-head title="Example - Slot" :btnList="env.btnList" @clickBtn="openLink"/>
    <module-section>
    <template #head>
      {{`Version: ${env.version}`}} <br/>
      {{`Release Date: ${env.updated}`}}
    </template>
      <p>
        {{'Sometimes we may want to show the entry from the list by button, input, icon, ... etc. Then we can ultilize this feature about customized slot. To the example as following, I show you how to customized the entry which ID is b2. For the package of list, every single ID corresponding to listdata could be customized by slot.'}}
      </p>
    </module-section>
    <module-section>
    <template #head>
      {{'EXAMPLE'}}
    </template>
      <btb-vue-list :dataList="listData" >
      <template #b2>
        {{'Branch 2 customized by slot'}}
      </template>
      </btb-vue-list>
    </module-section>
    <module-section>
    <template #head>
      {{'CONFIGURATION'}}
    </template>
      <module-block>
      <template #title>
        {{'Render'}}
      </template>
        <module-pre>
<pre>
{{exampleRender}}
</pre>
        </module-pre>
      </module-block>
      <module-block>
      <template #title>
        {{'listData'}}
      </template>
        <module-pre>
<pre>
const listData = [
        { id: 'b1', title: 'Branch: 1', children: [
                { id: 'l11', title: 'Leaf: 1-1' },
                { id: 'b12', title: 'Branch: 1-2', children: [
                        { id: 'l121', title: 'Leaf: 1-2-1' },
                        { id: 'l122', title: 'Leaf: 1-2-2' }
                ]},
                { id: 'l13', title: 'Leaf: 1-3' }
        ]},
        { id: 'b2', title: 'Branch: 2', children: [
                { id: 'l21', title: 'Leaf: 2-1' },
                { id: 'l22', title: 'Leaf: 2-2' }
        ]}
]
</pre>
        </module-pre>
      </module-block>
    </module-section>
  </module-page>
</template>

<script lang="ts">
import packageObj from '@/assets/definitions/packageObj'

const _exampleRender = `<btb-vue-list :dataList="listData"/>
      <template #b2>
              {{'Branch 2 customized by slot'}}
      </template>
</btb-vue-list>`

const _listData = [
  {
    id: 'b1',
    title: 'Branch: 1',
    children: [
      { id: 'l11', title: 'Leaf: 1-1' },
      {
        id: 'b12',
        title: 'Branch: 1-2',
        children: [
          { id: 'l121', title: 'Leaf: 1-2-1' },
          { id: 'l122', title: 'Leaf: 1-2-2' }
        ]
      },
      { id: 'l13', title: 'Leaf: 1-3' }
    ]
  },
  {
    id: 'b2',
    title: 'Branch: 2',
    children: [
      {
        id: 'l21',
        title: 'Leaf: 2-1'
      },
      { id: 'l22', title: 'Leaf: 2-2' }
    ]
  }
]

export default {
  name: 'btb-pkg-list-example',
  data () {
    return {
      env: {
        version: packageObj.list.version,
        updated: packageObj.list.updated,
        btnList: [
          { id: 'github', fa: ['fab', 'github'], url: 'https://github.com/BlackToolBoxLaboratory/vue-list' },
          { id: 'npm', fa: ['fab', 'npm'], url: 'https://www.npmjs.com/package/@blacktoolbox/vue-list' }
        ]
      },
      exampleRender: _exampleRender,
      listData: _listData
    }
  }
}
</script>

<style lang="scss">

</style>
