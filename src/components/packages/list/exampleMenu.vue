<template>
  <module-page class="btb-pkg-list-example-menu">
    <module-page-head
      title="Example - Menu"
      :btnList="env.btnList"
      />
      <!-- @clickBtn="openLink" -->
    <module-section>
      <template #head>
        {{ `Version: ${env.version}` }} <br />
        {{ `Release Date: ${env.updated}` }}
      </template>
      <p>
        {{
          "When we enable the collapseEnable with datalist, we will get a simple menu to use. And it will trigger the @toggleCollapsed event function while clicked for Collapsing or Expending. Every entry can be active status after being clicked. Surely it will trigger the @clickEntry event function too. Besides for a menu, it can tag one as defaultActiveID. Also use the v-model to listen the value from activeID"
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
        {{ "CONFIGURATION" }}
      </template>
      <module-block>
        <template #title>
          {{ "Render" }}
        </template>
        <module-pre>
          <pre
            >{{ exampleRender }}
</pre
          >
        </module-pre>
      </module-block>
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
</pre
          >
        </module-pre>
      </module-block>
    </module-section>
  </module-page>
</template>

<script lang="ts">
import packageObj from "@/assets/definitions/packageObj";

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

export default {
  name: "btb-pkg-list-example",
  data() {
    return {
      env: {
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
      },
      exampleRender: _exampleRender,
      menuData: _menuData,
    };
  },
};
</script>

<style lang="scss"></style>
