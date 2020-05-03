<template>
  <module-page class="btb-pkg-list-example">
    <module-page-head title="List" :btnList="env.btnList" @clickBtn="openLink"/>
    <module-section>
      <!-- <template #content="slotProps"> -->
    <template #head>
      {{`Version: ${env.version}`}} <br/>
      {{`Release Date: ${env.updated}`}}
    </template>
      <p>
        {{'Here I would like to show you some example of list.'}}
      </p>
    </module-section>
    <module-section>
    <template #head>
      {{'LIST'}}
    </template>
      <module-block>
      <template #title>
        {{'Example'}}
      </template>
        <btb-vue-list :listdata="listData"/>
      </module-block>
      <module-block>
      <template #title>
        {{'Render'}}
      </template>
        <module-pre>
<pre>
{{exampleRender_list}}
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
  { id: 't1', title: 'Tree: 1', children: [
    { id: 't11', title: 'Tree: 1-1' },
    { id: 't12', title: 'Tree: 1-2', children: [
      { id: 't121', title: 'Tree: 1-2-1' },
      { id: 't122', title: 'Tree: 1-2-2' }
    ]},
    { id: 't13', title: 'Tree: 1-3' }
  ]},
  { id: 't2', title: 'Tree: 2', children: [
    { id: 't21', title: 'Tree: 2-1' },
    { id: 't22', title: 'Tree: 2-2' }
  ]}
]
</pre>
        </module-pre>
      </module-block>
    </module-section>
    <module-section>
    <template #head>
      {{'MENU'}}
    </template>
      <module-block>
      <template #title>
        {{'Example'}}
      </template>
        <btb-vue-list :listdata="menuData" collapseEnable/>
      </module-block>
      <module-block>
      <template #title>
        {{'Render'}}
      </template>
        <module-pre>
<pre>
{{exampleRender_menu}}
</pre>
        </module-pre>
      </module-block>
      <module-block>
      <template #title>
        {{'listData'}}
      </template>
        <module-pre>
<pre>
const menuData = [
  { id: 'm1', title: 'Menu: 1', children: [
    { id: 't11', title: 'Menu: 1-1' },
    { id: 't12', title: 'Menu: 1-2' }
  ]},
  { id: 'm2', title: 'Menu: 2', children: [
    { id: 't21', title: 'Menu: 2-1' },
    { id: 't22', title: 'Menu: 2-2' },
    { id: 't23', title: 'Menu: 2-3' }
  ]}
]
</pre>
        </module-pre>
      </module-block>
    </module-section>
  </module-page>
</template>

<script>
import packageObj from '@/assets/definitions/packageObj'

const _exampleRender_list = '<btb-vue-list :listdata="listData"/>'

const _listData = [
  {
    id: 't1',
    title: 'Layer: 1',
    children: [
      { id: 't11', title: 'Layer: 1-1' },
      {
        id: 't12',
        title: 'Layer: 1-2',
        children: [
          { id: 't121', title: 'Layer: 1-2-1' },
          { id: 't122', title: 'Layer: 1-2-2' }
        ]
      },
      { id: 't13', title: 'Layer: 1-3' }
    ]
  },
  {
    id: 't2',
    title: 'Layer: 2',
    children: [
      {
        id: 't21',
        title: 'Layer: 2-1'
      },
      { id: 't22', title: 'Layer: 2-2' }
    ]
  }
]

const _exampleRender_menu = '<btb-vue-list :listdata="menuData" collapseEnable/>'

const _menuData = [
  {
    id: 'm1',
    title: 'Menu: 1',
    children: [
      { id: 't11', title: 'Menu: 1-1' },
      { id: 't12', title: 'Menu: 1-2' }
    ]
  },
  {
    id: 'm2',
    title: 'Menu: 2',
    children: [
      { id: 't21', title: 'Menu: 2-1' },
      { id: 't22', title: 'Menu: 2-2' },
      { id: 't23', title: 'Menu: 2-3' }
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
      exampleRender_list: _exampleRender_list,
      listData: _listData,
      exampleRender_menu: _exampleRender_menu,
      menuData: _menuData
    }
  }
}
</script>

<style lang="scss">

</style>
