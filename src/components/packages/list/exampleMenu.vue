<template>
  <module-page class="btb-pkg-list-example-menu">
    <module-page-head
      title="Example - Menu"
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
          "When we enable the collapseEnable with datalist, we will get a simple menu to use. And it will trigger the @toggleCollapsed event function while clicked for Collapsing or Expending. Every entry can be active status after being clicked. Surely it will trigger the @clickEntry event function too. Also use the v-model to listen the value from activeID"
        }}
      </p>
    </module-section>
    <module-section>
      <template #head>
        {{ "EXAMPLE" }}
      </template>
      <btb-vue-list :dataList="menuData" collapseEnable />
    </module-section>
    <module-section>
      <template #head>
        {{ "SOURCE CODE" }}
      </template>
        <module-pre>
          <pre>{{ exampleRender }}</pre
          >
        </module-pre>
      <module-block>
        <template #title>
          {{ "menuData" }}
        </template>
        <module-pre>
          <pre>
const menuData = [
        { id: 'f1', title: 'Folder: 1', children: [
                { id: 't11', title: 'Menu: 1-1' },
                { id: 't12', title: 'Menu: 1-2' }
        ]},
        { id: 'f2', title: 'Folder: 2', defaultCollapsed: true, children: [
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

<script lang="ts">
import { defineComponent } from "vue";

import packageObj from "@/assets/definitions/packageObj";

import { openLink } from "../../../utils/functions";

const _exampleRender = '<btb-vue-list :dataList="menuData" collapseEnable/>';

const _menuData = [
  {
    id: "f1",
    title: "Folder: 1",
    children: [
      { id: "t11", title: "Menu: 1-1" },
      { id: "t12", title: "Menu: 1-2" },
    ],
  },
  {
    id: "f2",
    title: "Folder: 2",
    defaultCollapsed: true,
    children: [
      { id: "t21", title: "Menu: 2-1" },
      { id: "t22", title: "Menu: 2-2" },
      { id: "t23", title: "Menu: 2-3" },
    ],
  },
];

export default defineComponent({
  name: "btb-pkg-list-example",
  setup() {
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
      menuData: _menuData,

      openLink
    };
  },
})
</script>

<style lang="scss"></style>
