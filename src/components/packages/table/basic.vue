<template>
  <module-page class="btb-pkg-table-basic">
    <module-page-head title="Table" :btnList="btnList" @clickBtn="openLink" />
    <module-section>
      <template #head>
        {{ `Version: ${version}` }} <br />
        {{ `Release Date: ${updated}` }}
      </template>
      <p>
        {{ description }}
      </p>
    </module-section>
    <module-section>
      <template #head>
        {{ "INSTALLATION" }}
      </template>
      <module-pre>
        <pre>
    $ npm install --save @blacktoolbox/vue-table

    import Vue from 'vue'

    import BTBTable from '@blacktoolbox/vue-table'
    import '@blacktoolbox/vue-table/lib/index.css'

    Vue.use(BTBTable)
            </pre>
      </module-pre>
    </module-section>
    <module-section>
      <template #head>
        {{ "RENDER" }}
      </template>
      <module-pre>
        <pre>{{ exampleRender }}
          </pre>
      </module-pre>
    </module-section>
    <module-section>
      <template #head>
        {{ "PARAMETERS" }}
      </template>
      <btb-vue-table class="page_table block_item" :headData="tableHeadArr_property" :bodyData="tableBodyArr_basic" />
      <module-block>
        <template #title>
          {{ "TableHeadObj" }}
        </template>
        <module-pre class="block_item">
          <pre>{{ exampleHeadObj }}</pre>
        </module-pre>
        <btb-vue-table class="page_table block_item" :headData="tableHeadArr_entry" :bodyData="tableBodyArr_head" />
      </module-block>
      <module-block>
        <template #title>
          {{ "TableBodyObj" }}
        </template>
        <module-pre class="block_item">
          <pre>{{ exampleDataObj }}</pre>
        </module-pre>
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
          {{ "slotObj" }}
        </template>
        <p>To vue, We can replace the default node with bodyObj.id by $slot. However we need the prefix to specify which
          node we want to customized th or td.</p>
        <module-pre class="block_item">
          <pre>{{ preSlotObj }}</pre>
        </module-pre>
        <btb-vue-table class="page_table block_item" :headData="tableHeadArr_entry" :bodyData="tableBodyArr_slot" />
      </module-block>
    </module-section>
    <module-section>
      <template #head>
        {{ "NODE TREE" }}
      </template>
      <module-block>
        <template #title>
          {{ "List Mode" }}
        </template>
        <btb-vue-list class="page_node_tree" :dataList="nodeTree_list" />
        <p>
          {{ "Note: The data order is counted base on 0." }}
        </p>
      </module-block>
      <module-block>
        <template #title>
          {{ "Info Mode" }}
        </template>
        <btb-vue-list class="page_node_tree" :dataList="nodeTree_info" />
        <p>
          {{ "Note: The data order is counted base on 0." }}
        </p>
      </module-block>
      <module-block>
        <template #title>
          {{ "Compare Mode" }}
        </template>
        <btb-vue-list class="page_node_tree" :dataList="nodeTree_compare" />
        <p>
          {{ "Note: The data order is counted base on 0." }}
        </p>
      </module-block>
    </module-section>
  </module-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import packageObj from "@/assets/definitions/packageObj";

import { openLink } from "../../../utils/functions";

const _exampleRender = `<btb-vue-table
        :headData=" Array of TableHeadObj" 
        :bodyData=" Array of TableBodyObj"
        :mode=" String "
        :identity=" String "
        :emptyText= " String "
        :styleObj= " Object "
        @clickTh=" (TableHeadObj) => {} "
        @clickTd=" (TableBodyObj, TableHeadObj) => {} "/>`;

const _exampleHeadObj = `TableHeadObj = {
        id: '',
        name: ''
}`;
const _exampleDataObj = `dataObj = {
        [ TableHeadObj.id ] : ''
}`;

const _preStyleObj = `styleObj = {
        [ className ]: { inline CSS }
}`;
const _preSlotObj = `slotObj = {
        [ th-\${ headObj.id \} ] : '',
        [ td-\${ headObj.id \} ] : '',
        [ td-empty ] : '',
        [ info-empty ] : ''
}`;

const _nodeTree_list = [
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

const _nodeTree_info = [
  {
    id: "table",
    title: "<div> .btb-vue-table"
  }
];
const _nodeTree_compare = [
  {
    id: "table",
    title: "<div> .btb-vue-table"
  }
];

export default defineComponent({
  name: "btb-pkg-list-basic",
  setup() {
    return {
      version: packageObj.table.version,
      updated: packageObj.table.updated,
      description: packageObj.table.description,
      btnList: [
        {
          id: "github",
          fa: ["fab", "github"],
          url: "https://github.com/BlackToolBoxLaboratory/vue-table",
        },
        {
          id: "npm",
          fa: ["fab", "npm"],
          url: "https://www.npmjs.com/package/@blacktoolbox/vue-table",
        },
      ],
      exampleRender: _exampleRender,
      exampleHeadObj: _exampleHeadObj,
      exampleDataObj: _exampleDataObj,
      preStyleObj: _preStyleObj,
      preSlotObj: _preSlotObj,
      tableHeadArr_property: [
        { name: "Property Name", id: "title" },
        { name: "Type", id: "type" },
        { name: "Default", id: "default" },
        { name: "Notice", id: "notice" },
      ],
      tableHeadArr_entry: [
        { name: 'Name', id: 'title' },
        { name: 'Type', id: 'type' },
        { name: 'Notice', id: 'notice' },
      ],
      tableBodyArr_basic: [
        {
          title: "headData",
          type: "Array",
          default: "[]",
          notice: "List of TableHeadObj.",
        },
        {
          title: "bodyData",
          type: "Array",
          default: "[]",
          notice: "List of TableBodyObj",
        },
        {
          title: "mode",
          type: "String",
          default: "'list'",
          notice: "Value in list, info or compare.",
        },
        {
          title: "identity",
          type: "String",
          default: "'id'",
          notice: "Identity of data.",
        },
        {
          title: "emptyText",
          type: "String",
          default: "'Empty'",
          notice: "Showing text when data is empty.",
        },
        {
          title: "styleObj",
          type: "Object",
          default: "undefined",
          notice:
            "Specific style object, where key is spacific class name, value is style object. Please refer to Node Tree.",
        },
        {
          title: "@clickTh",
          type: "$Emit",
          default: "(TableHeadObj) => {}",
          notice: "Table head's click function.",
        },
        {
          title: "@clickTd",
          type: "$Emit",
          default: "(TableBodyObj, TableHeadObj) => {}",
          notice: "Table data's click function.",
        },
      ],
      tableBodyArr_head: [
        {
          title: "id",
          type: "String",
          default: "undefined",
          notice:
            "As an identity to column and also an index to key name of dataObj",
        },
        {
          title: "name",
          type: "String",
          default: "undefined",
          notice: "The name of table's head.",
        },
      ],
      tableBodyArr_slot: [
        {
          title: '[ th-${ headObj.id } ]',
          type: 'String || Node',
          notice: 'Slot for customized entry. Here is the example for slot if used. The porps will be entry corresponding the id.',
        },
        {
          title: '[ td-${ headObj.id } ]',
          type: 'String || Node',
          notice: 'Slot for customized entry. Here is the example for slot if used. The porps will be entry corresponding the id.',
        },
        {
          title: '[ td-empty ]',
          type: 'String || Node',
          notice: 'Slot for showing text when data is empty. This is for mode \'list\' and \'compare\'',
        },
        {
          title: '[ info-empty ]',
          type: 'String || Node',
          notice: 'Slot for showing text when data is empty. This is for mode \'info\'',
        },
      ],
      tableBodyArr_body: [
        {
          title: "id",
          type: "String",
          default: "undefined",
          notice: "Identity of entry",
        },
        {
          title: "title",
          type: "String",
          default: "''",
          notice: "Show name of entry.",
        },
        { title: "children", type: "Array", default: "[]", notice: "sublist" },
      ],
      nodeTree_list: _nodeTree_list,
      nodeTree_info: _nodeTree_info,
      nodeTree_compare: _nodeTree_compare,

      openLink
    };
  },
})
</script>

<style lang="scss"></style>
