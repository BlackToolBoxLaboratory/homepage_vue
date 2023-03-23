<template>
  <module-page class="btb-pkg-list-basic">
    <module-page-head :title="translate(langIndex, 'package.list.name')" :btnList="packageInfo.linkList"
      @clickBtn="openLink" />
    <module-section>
      <template #head>
        {{ `${translate(langIndex, 'package.version_colon')}${packageInfo.version}` }}<br />
        {{ `${translate(langIndex, 'package.release_colon')}${packageInfo.updated}` }}
      </template>
      <p>
        {{ translate(langIndex, packageInfo.description) }}
      </p>
    </module-section>
    <module-section>
      <template #head>
        {{ translate(langIndex, 'package.section.installation') }}
      </template>
      <module-pre>
        <pre>{{ preInstall }}</pre>
      </module-pre>
    </module-section>
    <module-section>
      <template #head>
        {{ translate(langIndex, 'package.section.render') }}
      </template>
      <module-pre>
        <pre>{{ preRender }}</pre>
      </module-pre>
    </module-section>
    <module-section>
      <template #head>
        {{ translate(langIndex, 'package.section.parameters') }}
      </template>
      <btb-vue-table class="page_table block_item" :headData="tableHeadArr_property" :bodyData="tableBodyArr_basic"
        identity="title">
        <template #th-title>
          {{ translate(langIndex, 'package.property.title') }}
        </template>
        <template #th-type>
          {{ translate(langIndex, 'package.property.type') }}
        </template>
        <template #th-default>
          {{ translate(langIndex, 'package.property.default') }}
        </template>
        <template #th-notice>
          {{ translate(langIndex, 'package.property.notice') }}
        </template>
        <template #td-type="{ data, column }">
          {{ translate_type(langIndex, data, column) }}
        </template>
        <template #td-notice="{ data }">
          {{ translate(langIndex, data.notice) }}
        </template>
      </btb-vue-table>
      <module-block>
        <template #title>
          {{ "ListItemObj" }}
        </template>
        <module-pre class="block_item">
          <pre>{{ preEntryObj }}</pre>
        </module-pre>
        <btb-vue-table class="page_table block_item" :headData="tableHeadArr_property" :bodyData="tableBodyArr_entry"
          xScrollable>
          <template #th-title>
            {{ translate(langIndex, 'package.property.title') }}
          </template>
          <template #th-type>
            {{ translate(langIndex, 'package.property.type') }}
          </template>
          <template #th-default>
            {{ translate(langIndex, 'package.property.default') }}
          </template>
          <template #th-notice>
            {{ translate(langIndex, 'package.property.notice') }}
          </template>
          <template #td-type="{ data, column }">
            {{ translate_type(langIndex, data, column) }}
          </template>
          <template #td-notice="{ data }">
            {{ translate(langIndex, data.notice) }}
          </template>
        </btb-vue-table>
      </module-block>
      <module-block>
        <template #title>
          {{ "styleObj" }}
        </template>
        <p>Any className in this module could add inline CSS by styleObj.</p>
        <module-pre class="block_item">
          <pre>{{ preStyleObj }}</pre>
        </module-pre>
      </module-block>
      <module-block>
        <template #title>
          {{ "emit" }}
        </template>
        <btb-vue-table class="page_table block_item" :headData="tableHeadArr_emit" :bodyData="tableBodyArr_emit"
          xScrollable>
          <template #th-title>
            {{ translate(langIndex, 'package.property.title') }}
          </template>
          <template #th-props>
            {{ translate(langIndex, 'package.property.props') }}
          </template>
          <template #th-notice>
            {{ translate(langIndex, 'package.property.notice') }}
          </template>
          <template #td-notice="{ data }">
            {{ translate(langIndex, data.notice) }}
          </template>
        </btb-vue-table>
      </module-block>
      <module-block>
        <template #title>
          {{ "slots" }}
        </template>
        <btb-vue-table class="page_table block_item" :headData="tableHeadArr_slot" :bodyData="tableBodyArr_slot"
          xScrollable>
          <template #th-title>
            {{ translate(langIndex, 'package.property.title') }}
          </template>
          <template #th-props>
            {{ translate(langIndex, 'package.property.props') }}
          </template>
          <template #th-notice>
            {{ translate(langIndex, 'package.property.notice') }}
          </template>
          <template #td-notice="{ data }">
            {{ translate(langIndex, data.notice) }}
          </template>
        </btb-vue-table>
      </module-block>
    </module-section>
    <module-section>
      <template #head>
        {{ translate(langIndex, 'package.section.nodeTree') }}
      </template>
      <btb-vue-list class="page_node_tree" :dataList="nodeTree" />
      <p>
        {{ translate(langIndex, 'package.list.nodeTree.notice') }}
      </p>
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

const preInstall = `$ npm install --save @blacktoolbox/vue-list

import Vue from 'vue'

import BtbListComponents from '@blacktoolbox/vue-list'
import '@blacktoolbox/vue-list/lib/index.css'

Vue.use(BtbListComponents)`;

const preRender = `<btb-vue-list 
        :dataList=" Array " 
        :activeID=" String "
        :collapseEnable=" Boolean "
        :styleObj=" Object "
        @clickEntry=" function(ListItemObj){} "
        @toggleCollapsed=" function(ListItemObj){} "/>`;

const preEntryObj = `ListItemObj = {
        id: '',
        title: '',
        href: '',
        defaultCollapsed: false,
        children: [...]
}`;

const preStyleObj = `styleObj = {
        [ className ]: { inline CSS }
}`;

const tableHeadArr_property = [
  { name: "Property Name", id: "title" },
  { name: "Type", id: "type" },
  { name: "Default", id: "default" },
  { name: "Notice", id: "notice" },
];

const tableBodyArr_basic = [
  {
    title: "dataList",
    type: "package.paramType.array",
    default: "[]",
    notice: "package.list.property.dataList",
  },
  {
    title: "collapseEnable",
    type: "package.paramType.boolean",
    default: "false",
    notice: "package.list.property.collapseEnable",
  },
  {
    title: "activeID ( v-model )",
    type: "package.paramType.string",
    default: "undefined",
    notice: "package.list.property.activeID",
  },
  {
    title: "styleObj",
    type: "package.paramType.object",
    default: "undefined",
    notice: "package.list.property.styleObj",
  },
];

const tableBodyArr_entry = [
  {
    title: "id",
    type: "package.paramType.string",
    default: "undefined",
    notice: "package.list.entryObj.id",
  },
  {
    title: "title",
    type: "package.paramType.string",
    default: "''",
    notice: "package.list.entryObj.title",
  },
  {
    title: "href",
    type: "package.paramType.string",
    default: "''",
    notice: "package.list.entryObj.href",
  },
  {
    title: "defaultCollapsed",
    type: "package.paramType.string",
    default: "undefined",
    notice: "package.list.entryObj.defaultCollapsed",
  },
  { title: "children", type: "package.paramType.array", default: "[]", notice: "package.list.entryObj.children" },
]

const tableHeadArr_emit = [
  { name: "Name", id: "title" },
  { name: "Props", id: "props" },
  { name: "Notice", id: "notice" },
]
const tableBodyArr_emit = [
  {
    title: "@clickEntry",
    props: "( ListItemObj )=>{}",
    notice: "package.list.emit.clickEntry",
  },
  {
    title: "@toggleCollapsed",
    props: "( ListItemObj )=>{}",
    notice: "package.list.emit.toggleCollapsed",
  },
]
const tableHeadArr_slot = [
  { name: "Name", id: "title" },
  { name: "Props", id: "props" },
  { name: "Notice", id: "notice" },
]
const tableBodyArr_slot = [
  {
    title: "[ id of ListItemObj ]",
    props: "item: ListItemObj",
    notice: "package.list.slotObj.entryObj",
  },
]

const nodeTree = [
  {
    id: "list",
    title: "<div> .btb-vue-list",
    children: [
      {
        id: "layer",
        title: "<ul> .btb-vue-list-layer .layer-[layer count]",
        children: [
          {
            id: "container",
            title: "<li> .layer_container",
            children: [
              {
                id: "entry",
                title: "<div> .container_entry .entry-[id] .entry-active .entry-collapsable",
                children: [
                  {
                    id: "title",
                    title: "<div> .entry_title",
                  },
                  {
                    id: "collapseBtn",
                    title: "<div> .entry_collapseBtn .collapseBtn-default .collapseBtn-on",
                    children: [
                      {
                        id: "arrow",
                        title: "<div> .collapseBtn_arrow",
                      },
                    ],
                  },
                ],
              },
              {
                id: "sublayer",
                title: "<div>.list_sublayer",
                children: [
                  {
                    id: "next",
                    title: "<ul>.btb-vue-list-layer .layer-[layer count + 1]",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default defineComponent({
  name: "btb-pkg-list-basic",
  setup() {
    const langStore = useLanguageStore();
    const { langIndex } = storeToRefs(langStore);

    const translate_type = (lang: string, data: Record<string, any>, column: Record<string, any>) => {
      const sep = data[column.id].split('||');
      let result = '';
      if (sep.length > 0) {
        result = sep
          .map((item: string) => {
            return translate(langIndex.value, item);
          })
          .join(' || ');
      } else {
        result = data[column.id] === 'useRef' ? 'useRef' : translate(langIndex.value, data[column.id]);
      }
      return result;
    }

    return {
      packageInfo,
      preInstall,
      preRender,
      tableHeadArr_property,
      tableBodyArr_basic,

      preEntryObj,
      tableBodyArr_entry,
      preStyleObj,

      tableHeadArr_emit,
      tableBodyArr_emit,
      tableHeadArr_slot,
      tableBodyArr_slot,
      nodeTree,

      langIndex,
      translate,
      translate_type,
      openLink
    };
  },
});
</script>

<style lang="scss"></style>
