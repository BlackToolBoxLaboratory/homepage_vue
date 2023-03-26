<template>
  <module-page class="btb-pkg-popover-basic">
    <module-page-head :title="translate(langIndex, 'package.popover.name')" :btnList="packageInfo.linkList"
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
        <pre>{{ exampleRender }}</pre>
      </module-pre>
    </module-section>
    <module-section>
      <template #head>
        {{ translate(langIndex, 'package.section.parameters') }}
      </template>
      <btb-vue-table class="page_table block_item" :headData="tableHeadArr_property" :bodyData="tableBodyArr_basic">
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
          {{ "styleObj" }}
        </template>
        <p> {{ translate(langIndex, 'package.table.parameters.styleObj') }}</p>
        <module-pre class="block_item">
          <pre>{{ preStyleObj }}</pre>
        </module-pre>
      </module-block>
      <module-block>
        <template #title>
          {{ "$emit" }}
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
          {{ "$slots" }}
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
        {{ "NODE TREE" }}
      </template>
      <module-block>
        <template #title>
          {{ translate(langIndex, 'package.table.nodeTree.list') }}
        </template>
        <btb-vue-list class="page_node_tree" :dataList="nodeTree_list" />
        <p>
          {{ translate(langIndex, 'package.table.nodeTree.notice') }}
        </p>
      </module-block>
      <module-block>
        <template #title>
          {{ translate(langIndex, 'package.table.nodeTree.info') }}
        </template>
        <btb-vue-list class="page_node_tree" :dataList="nodeTree_info" />
        <p>
          {{ translate(langIndex, 'package.table.nodeTree.notice') }}
        </p>
      </module-block>
      <module-block>
        <template #title>
          {{ translate(langIndex, 'package.table.nodeTree.compare') }}
        </template>
        <btb-vue-list class="page_node_tree" :dataList="nodeTree_compare" />
        <p>
          {{ translate(langIndex, 'package.table.nodeTree.notice') }}
        </p>
      </module-block>
    </module-section>
  </module-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";

import { translate, translate_type } from '@/utils/functions';
import { useLanguageStore } from '@/store/lang';

import { openLink } from "../../../utils/functions";

import packageInfo from "./packageInfo";

const preInstall = `$ npm install --save @blacktoolbox/vue-popover

import Vue from 'vue'

import BtbPopoverComponents from '@blacktoolbox/vue-popover'
import '@blacktoolbox/vue-popover/lib/index.css'

Vue.use(BtbPopoverComponents)`;

const exampleRender = `<btb-vue-popover
        :id=" String " 
        v-model:state=" Boolean "
        :position = " String "
        :align = " String "
        :withArrow = " Boolean "
        :autoDetect = " Boolean "
        :styleObj= " Object "
        @update:state = " function( state ){} "
        @toggle = " function( state ){} "
        @show = " function( ){} "
        @hide = " function( ){} "
>
        <template #trigger></template>
        <template #default></template>
</btb-vue-popover`;

const preStyleObj = `styleObj = {
        [ class ]: { inline CSS }
}`;

const tableHeadArr_property = [
  { name: "Property Name", id: "title" },
  { name: "Type", id: "type" },
  { name: "Default", id: "default" },
  { name: "Notice", id: "notice" },
];

const tableHeadArr_entry = [
  { name: 'Name', id: 'title' },
  { name: 'Type', id: 'type' },
  { name: 'Notice', id: 'notice' },
];

const tableBodyArr_basic = [
  {
    title: "id",
    type: "package.paramType.string",
    default: "randomCreated",
    notice: "package.popover.property.id",
  },
  {
    title: "state",
    type: "package.paramType.boolean",
    default: "undefined",
    notice: "package.popover.property.state",
  },
  {
    title: "position",
    type: "package.paramType.string",
    default: "'bottom'",
    notice: "package.popover.property.position",
  },
  {
    title: "align",
    type: "package.paramType.string",
    default: "'begin'",
    notice: "package.popover.property.align",
  },
  {
    title: "withArrow",
    type: "package.paramType.boolean",
    default: "true",
    notice: "package.popover.property.withArrow",
  },
  {
    title: "autoDetect",
    type: "package.paramType.boolean",
    default: "true",
    notice: "package.popover.property.autoDetect",
  },
  {
    title: "styleObj",
    type: "package.paramType.object",
    default: "undefined",
    notice: "package.popover.property.styleObj",
  },
];

const tableBodyArr_head = [
  {
    title: "id",
    type: "package.paramType.string",
    default: "undefined",
    notice: "package.table.entryObj.id",
  },
  {
    title: "name",
    type: "package.paramType.string",
    default: "undefined",
    notice: "package.table.entryObj.name",
  },
];

const tableHeadArr_emit = [
  { name: "Name", id: "title" },
  { name: "Props", id: "props" },
  { name: "Notice", id: "notice" },
]
const tableBodyArr_emit = [
  {
    title: "@update:state",
    props: "( state )=>{}",
    notice: "package.popover.emit.updatestate",
  },
  {
    title: "@toggle",
    props: "( state )=>{}",
    notice: "package.popover.emit.toggle",
  },
  {
    title: "@show",
    props: "( )=>{}",
    notice: "package.popover.emit.show",
  },
  {
    title: "@hide",
    props: "( )=>{}",
    notice: "package.popover.emit.hide",
  },
]

const tableHeadArr_slot = [
  { name: "Name", id: "title" },
  { name: "Props", id: "props" },
  { name: "Notice", id: "notice" },
]

const tableBodyArr_slot = [
  {
    title: 'default',
    props: "",
    notice: "package.popover.slotObj.default",
  },
  {
    title: 'trigger',
    props: "",
    notice: "package.popover.slotObj.trigger",
  },
];

const tableBodyArr_body = [
  {
    title: "id",
    type: "package.paramType.string",
    default: "undefined",
    notice: "Identity of entry",
  },
  {
    title: "title",
    type: "package.paramType.string",
    default: "''",
    notice: "Show name of entry.",
  },
  { title: "children", type: "package.paramType.array", default: "[]", notice: "sublist" },
];

const nodeTree_list = [
  {
    id: "table",
    title: "<div> .btb-vue-table",
    children: [
      {
        id: "container",
        title: "<table> .btb-vue-table-list",
        children: [
          {
            id: "head",
            title: "<thead> .list_head",
            children: [
              {
                id: "head_tr",
                title: "<tr> .head_tr",
                children: [
                  {
                    id: "tr_th",
                    title: "<th> .tr_th .th-[column id]",
                  },
                ],
              },
            ],
          },
          {
            id: "body",
            title: "<tbody> .list_body",
            children: [
              {
                id: "body_tr",
                title: "<tr> .body_tr .tr-[data order]",
                children: [
                  {
                    id: "tr_td",
                    title: "<td> .tr_td .td-[column id]",
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

const nodeTree_info = [
  {
    id: "table",
    title: "<div> .btb-vue-table",
    children: [
      {
        id: "container",
        title: "<div> .btb-vue-table-info",
        children: [
          {
            id: "table",
            title: "<table> .info_table .table-[data order]",
            children: [
              {
                id: "body",
                title: "<tbody> .table_body",
                children: [
                  {
                    id: "tr",
                    title: "<tr> .body_tr",
                    children: [
                      {
                        id: "th",
                        title: "<th> .tr_th .th-[column id]",
                      },
                      {
                        id: "td",
                        title: "<th> .tr_td .td-[column id]",
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
  }
];
const nodeTree_compare = [
  {
    id: "table",
    title: "<div> .btb-vue-table",
    children: [
      {
        id: "container",
        title: "<table> .btb-vue-table-compare",
        children: [
          {
            id: "table",
            title: "<tbody> .compare_body",
            children: [
              {
                id: "tr",
                title: "<tr> .body_tr",
                children: [
                  {
                    id: "th",
                    title: "<th> .tr_th .th-[column id]",
                  },
                  {
                    id: "td",
                    title: "<td> .tr_td .th-[column id] .th-[data order]",
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

export default defineComponent({
  name: "btb-pkg-list-basic",
  setup() {
    const langStore = useLanguageStore();
    const { langIndex } = storeToRefs(langStore);

    return {
      packageInfo,
      preInstall,
      exampleRender,

      preStyleObj,

      tableHeadArr_property,
      tableHeadArr_entry,
      tableHeadArr_emit,
      tableHeadArr_slot,

      tableBodyArr_basic,
      tableBodyArr_head,
      tableBodyArr_emit,
      tableBodyArr_slot,
      tableBodyArr_body,

      nodeTree_list,
      nodeTree_info,
      nodeTree_compare,

      langIndex,
      translate,
      translate_type,
      openLink
    };
  },
})
</script>

<style lang="scss"></style>
