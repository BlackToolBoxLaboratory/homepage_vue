<template>
  <module-page class="btb-pkg-list-example-style">
    <module-page-head
      title="Example - Style"
      :btnList="btnList"
      @clickBtn="openLink"
      />
    <module-section>
      <template #head>
        {{ `Version: ${version}` }} <br />
        {{ `Release Date: ${updated}` }}
      </template>
      <p>
        {{
          "Here is going to show you about how to use the styleObj and the example v-model of activeID. The activeID is used to mark focused entry. Then we can modify the style by the styleObj with using the node class name directly."
        }}
      </p>
    </module-section>
    <module-section>
      <template #head>
        {{ "EXAMPLE" }}
      </template>
      <p class="example_activeID">
        {{ `Active ID: ${activeID}` }}
      </p>
      <btb-vue-list
        :dataList="listData"
        v-model:activeID="activeID"
        :styleObj="styleObj"
      />
    </module-section>
    <module-section>
      <template #head>
        {{ "SOURCE CODE" }}
      </template>
      <module-pre>
        <pre>{{ exampleRender }}</pre>
      </module-pre>
      <module-block>
        <template #title>
          {{ "listData" }}
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
          {{ "styleObj" }}
        </template>
        <module-pre>
          <pre>
const _styleObj = {
        'container_entry': {
                cursor: 'pointer'
        },
        'entry-active': {
                'background-color': '#41b883'
        }
}
</pre
          >
        </module-pre>
      </module-block>
    </module-section>
  </module-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import packageObj from "@/assets/definitions/packageObj";

import { openLink } from "../../../utils/functions";

const _exampleRender = `<btb-vue-list 
        v-model:activeID="activeID"
        :dataList="listData"
        :styleObj="styleObj"/>`;

const _listData = [
  {
    id: "b1",
    title: "Branch: 1",
    children: [
      { id: "l11", title: "Leaf: 1-1" },
      {
        id: "b12",
        title: "Branch: 1-2",
        children: [
          { id: "l121", title: "Leaf: 1-2-1" },
          { id: "l122", title: "Leaf: 1-2-2" },
        ],
      },
      { id: "l13", title: "Leaf: 1-3" },
    ],
  },
  {
    id: "b2",
    title: "Branch: 2",
    children: [
      {
        id: "l21",
        title: "Leaf: 2-1",
      },
      { id: "l22", title: "Leaf: 2-2" },
    ],
  },
];

const _styleObj = {
  container_entry: {
    cursor: "pointer",
  },
  "entry-active": {
    "background-color": "#41b883",
  },
};

export default defineComponent({
  name: "btb-pkg-list-example",
  data() {
    const activeID = ref('l13')
    return {
      version: packageObj.list.version,
      updated: packageObj.list.updated,
      btnList: [
        {
          id: "github",
          fa: ["fab", "github"],
          url: "https://github.com/BlackToolBoxLaboratory/vue-list",
        },
        {
          id: "npm",
          fa: ["fab", "npm"],
          url: "https://www.npmjs.com/package/@blacktoolbox/vue-list",
        },
      ],
      exampleRender: _exampleRender,
      listData: _listData,
      styleObj: _styleObj,
      activeID,

      openLink
    };
  },
});
</script>

<style lang="scss">
.btb-pkg-list-example {
  .example_activeID {
    margin-bottom: 1rem;
  }
}
</style>
