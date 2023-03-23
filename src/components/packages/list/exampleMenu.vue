<template>
  <module-page class="btb-pkg-list-example-menu">
    <module-page-head :title="translate(langIndex, 'package.list.example.menu.title')" :btnList="packageInfo.linkList"
      @clickBtn="openLink" />
    <module-section>
      <template #head>
        {{ `${translate(langIndex, 'package.version_colon')}${packageInfo.version}` }}<br />
        {{ `${translate(langIndex, 'package.release_colon')}${packageInfo.updated}` }}
      </template>
      <p>
        {{ translate(langIndex, 'package.list.example.menu.description') }}
      </p>
    </module-section>
    <module-section>
      <template #head>
        {{ translate(langIndex, 'package.section.example') }}
      </template>
      <btb-vue-list :dataList="menuData" collapseEnable />
    </module-section>
    <module-section>
      <template #head>
        {{ translate(langIndex, 'package.section.sourceCode') }}
      </template>
      <module-pre>
        <pre>{{ exampleRender }}</pre>
      </module-pre>
      <module-block>
        <template #title>
          {{ "menuData" }}
        </template>
        <module-pre>
          <pre>{{ preMenuData }}</pre>
        </module-pre>
      </module-block>
    </module-section>
  </module-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";

import { translate } from '@/utils/functions';
import { useLanguageStore } from '@/store/lang';

import { openLink } from "../../../utils/functions";

import packageInfo from "./packageInfo";

const exampleRender = '<btb-vue-list :dataList="menuData" collapseEnable/>';

const preMenuData = `const menuData = [
        { id: 'f1', title: 'Folder: 1', children: [
                { id: 't11', title: 'Menu: 1-1' },
                { id: 't12', title: 'Menu: 1-2' }
        ]},
        { id: 'f2', title: 'Folder: 2', defaultCollapsed: true, children: [
                { id: 't21', title: 'Menu: 2-1' },
                { id: 't22', title: 'Menu: 2-2' },
                { id: 't23', title: 'Menu: 2-3' }
        ]}
]`;


const menuData = [
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
    const langStore = useLanguageStore();
    const { langIndex } = storeToRefs(langStore);

    return {
      packageInfo,
      exampleRender,
      preMenuData,
      menuData,

      langIndex,
      translate,
      openLink
    };
  },
})
</script>

<style lang="scss"></style>
