<template>
  <module-page class="btb-pkg-table-basic">
    <module-page-head
      title="Table"
      :btnList="env.btnList"
      />
      <!-- @clickBtn="openLink" -->
    <module-section>
      <template #head>
        {{ `Version: ${env.version}` }} <br />
        {{ `Release Date: ${env.updated}` }}
      </template>
      <p>
        {{ env.description }}
      </p>
    </module-section>
    <module-section>
      <template #head>
        {{ "INSTALLATION" }}
      </template>
      <module-pre>
        <pre>
$ npm install --save @blacktoolbox/vue-table

<code class="pre_notice">// create a plugin for vue to use table</code>
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
        <pre
          >{{ exampleRender }}
</pre
        >
      </module-pre>
    </module-section>
    <module-section>
      <template #head>
        {{ "PARAMETERS" }}
      </template>
      <module-block>
        <template #title>
          {{ "Basic" }}
        </template>
        <btb-vue-table
          class="page_table block_item"
          :headData="tableHeadArr_property"
          :bodyData="tableBodyArr_basic"
          xScrollable
        />
      </module-block>
      <module-block>
        <template #title>
          {{ "headObj" }}
        </template>
        <module-pre class="block_item">
          <pre
            >{{ exampleEntryObj }}
</pre
          >
        </module-pre>
        <btb-vue-table
          class="page_table block_item"
          :headData="tableHeadArr_property"
          :bodyData="tableBodyArr_head"
          xScrollable
        />
      </module-block>
      <module-block>
        <template #title>
          {{ "dataObj" }}
        </template>
        <p>
          {{
            "It's avaliable to use original data or revised data. But the key name need to be corresponding to id of headObj from headData."
          }}
        </p>
      </module-block>
    </module-section>
    <module-section>
      <template #head>
        {{ "NODE TREE" }}
      </template>
      <btb-vue-list class="page_node_tree" :dataList="nodeTree" />
      <p>
        {{ "Note: The data order is counted base on 0." }}
      </p>
    </module-section>
  </module-page>
</template>

<script lang="ts">
import packageObj from "@/assets/definitions/packageObj";

const _exampleRender = `<btb-vue-table
        :headData=" Array " 
        :bodyData=" Array " 
        :bodyWidth=" String || Number"
        :xScrollable=" Boolean "/>`;

const _exampleEntryObj = `entryObj = {
        index: '',
        name: ''
}`;

const _nodeTree = [
  {
    id: "table",
    title: "<div> .btb-vue-table .table-x-scrollable",
    children: [
      {
        id: "container",
        title: "<table> .table_container",
        children: [
          {
            id: "head",
            title: "<thead> .container_head",
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
            title: "<tbody> .container_body",
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

export default {
  name: "btb-pkg-list-basic",
  data() {
    return {
      env: {
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
      },
      exampleRender: _exampleRender,
      exampleEntryObj: _exampleEntryObj,
      tableHeadArr_property: [
        { name: "Property Name", index: "title" },
        { name: "Type", index: "type" },
        { name: "Default", index: "default" },
        { name: "Notice", index: "notice" },
      ],
      tableBodyArr_basic: [
        {
          title: "headData",
          type: "Array",
          default: "[]",
          notice: "List of headObj.",
        },
        {
          title: "bodyData",
          type: "Array",
          default: "[]",
          notice: "List of dataObj",
        },
        {
          title: "bodyWidth",
          type: "String || Number",
          default: "undefined",
          notice: "Width of table.",
        },
        {
          title: "xScrollable",
          type: "Boolean",
          default: "undefined",
          notice: "Active's table x scroll bar..",
        },
      ],
      tableBodyArr_head: [
        {
          title: "index",
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
        {
          title: "defaultCollapsed",
          type: "String",
          default: "undefined",
          notice: "Default value to collapsed of extend.",
        },
        { title: "children", type: "Array", default: "[]", notice: "sublist" },
      ],
      nodeTree: _nodeTree,
    };
  },
};
</script>

<style lang="scss"></style>
