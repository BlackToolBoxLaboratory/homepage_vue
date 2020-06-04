<template>
  <module-page class="btb-pkg-list-example">
    <module-page-head title="Example - Style" :btnList="env.btnList" @clickBtn="openLink"/>
    <module-section>
    <template #head>
      {{`Version: ${env.version}`}} <br/>
      {{`Release Date: ${env.updated}`}}
    </template>
      <p>
        {{'Here is going to show you about how to use the styleObj and the example of defaultActiveID and v-model of activeID. The activeID is used to mark focused entry, but also allowed to used defaultActiveID to mark entry as default in the begin. Then we can modify the style by the styleObj with using the node class name directly.'}}
      </p>
    </module-section>
    <module-section>
    <template #head>
      {{'EXAMPLE'}}
    </template>
      <p class="example_activeID">
        {{`Active ID: ${activeID}`}}
      </p>
      <btb-vue-list :dataList="listData" v-model="activeID" :defaultActiveID="defaultActiveID" :styleObj="styleObj"/>
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
        {{'defaultActiveID'}}
      </template>
        <module-pre>
<pre>
const defaultActiveID = 'l13'
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
      <module-block>
      <template #title>
        {{'styleObj'}}
      </template>
        <module-pre>
<pre>
const _styleObj = {
        'container_entry': {
                cursor: 'pointer'
        },
        'entry-active': {
                'background-color': '#b8dec9'
        }
}
</pre>
        </module-pre>
      </module-block>
    </module-section>
  </module-page>
</template>

<script>
import packageObj from '@/assets/definitions/packageObj'

const _exampleRender = `<btb-vue-list 
        v-model="activeID"
        :dataList="listData"
        :defaultActiveID="defaultActiveID" 
        :styleObj="styleObj"/>`

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

const _styleObj = {
  container_entry: {
    cursor: 'pointer'
  },
  'entry-active': {
    'background-color': '#b8dec9'
  }
}

const _defaultActiveID = 'l13'

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
      listData: _listData,
      styleObj: _styleObj,
      defaultActiveID: _defaultActiveID,
      activeID: ''
    }
  }
}
</script>

<style lang="scss">
.btb-pkg-list-example {
  .example_activeID {
    margin-bottom: 1rem;
  }
}
</style>
