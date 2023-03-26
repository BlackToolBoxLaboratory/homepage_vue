<template>
  <module-page class="btb-pkg-list-example-list">
    <module-page-head :title="translate(langIndex, 'package.list.example.list.title')" :btnList="packageInfo.linkList"  @clickBtn="openLink"/>
    <module-section>
      <template #head>
        {{ `${translate(langIndex, 'package.version_colon')}${packageInfo.version}` }}<br />
        {{ `${translate(langIndex, 'package.release_colon')}${packageInfo.updated}` }}
      </template>
      <p>
        {{ translate(langIndex, 'package.list.example.list.description')}}
      </p>
    </module-section>
    <module-section>
      <template #head>
        {{ translate(langIndex, 'package.section.example') }}
      </template>
      <btb-vue-list :dataList="listData" />
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
          {{ "listData" }}
        </template>
        <module-pre>
          <pre> {{ preListData }}</pre>
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

const exampleRender = '<btb-vue-list :dataList="listData"/>';

const preListData = `const listData = [
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
]`;


const listData = [
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

export default defineComponent({
  name: "btb-pkg-list-example-list",
  setup() {
    const langStore = useLanguageStore();
    const { langIndex } = storeToRefs(langStore);

    return {
      packageInfo,
      exampleRender,
      preListData,
      listData,

      langIndex,
      translate,
      openLink
    };
  },
});
</script>

<style lang="scss"></style>
