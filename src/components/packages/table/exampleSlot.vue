<template>
  <module-page class="btb-pkg-table-example-slot">
    <module-page-head :title="translate(langIndex, 'package.table.example.slot.title')" :btnList="packageInfo.linkList"
      @clickBtn="openLink" />
    <module-section>
      <template #head>
        {{ `${translate(langIndex, 'package.version_colon')}${packageInfo.version}` }}<br />
        {{ `${translate(langIndex, 'package.release_colon')}${packageInfo.updated}` }}
      </template>
      <p>
        {{ translate(langIndex, 'package.table.example.slot.description') }}
      </p>
    </module-section>
    <module-section>
      <template #head>
        {{ translate(langIndex, 'package.section.example') }}
      </template>
      <btb-vue-table class="table_sample" :headData="headData" :bodyData="bodyData" mode="compare">
        <template #th-name>
          Device Name
        </template>
        <template #th-ipAddr>
          <span>
            {{ 'IP Link ' }}
            <fai :icon="['fas', 'external-link-alt']" fixedWidth />
          </span>
        </template>
        <template #td-ipAddr="{ data, column }">
          <a :href="`http://${data[column.id]}`" target="_blank" rel="noreferrer">
            {{ data[column.id] }}
          </a>
        </template>
      </btb-vue-table>
    </module-section>
    <module-section>
      <template #head>
        {{ translate(langIndex, 'package.section.sourceCode') }}
      </template>
      <module-pre>
        <pre>{{ preRender }}</pre>
      </module-pre>
      <module-block>
        <template #title>
          {{ "headData" }}
        </template>
        <module-pre>
          <pre>{{ preHeadData }}</pre>
        </module-pre>
      </module-block>
      <module-block>
        <template #title>
          {{ "bodyData" }}
        </template>
        <module-pre>
          <pre>{{ preBodyData }}</pre>
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

const headData = [
  { name: 'Name', id: 'name' },
  { name: 'Type', id: 'devType' },
  { name: 'OS', id: 'osType' },
  { name: 'IP', id: 'ipAddr' },
  { name: 'MAC', id: 'macAddr' },
  { name: 'Traffic(tx / rx)', id: 'traffic' },
  { name: 'Statue', id: 'statusDesc' }
];

const bodyData = [
  {
    name: 'Device 1',
    devType: 'phone',
    osType: 'ios',
    ipAddr: '192.168.0.50',
    macAddr: 'B4:A2:07:44:55:2A',
    traffic: '1.7 MB / 45 KB',
    status: 0,
    statusDesc: 'Disconnected'
  },
  {
    name: 'Device 2',
    devType: 'notebook',
    osType: 'windows',
    ipAddr: '192.168.0.52',
    macAddr: 'B4:A2:07:44:DD:FF',
    traffic: '4.8 MB / 27 KB',
    status: 0,
    statusDesc: 'Disconnected'
  }
];

const preRender = `<btb-vue-table 
        :headData="headData" 
        :bodyData="bodyData"
        mode="compare"
>
        <template #th-name>
                Device Name
        </template>
        <template #th-ipAddr>
                <span>
                        {{ 'IP Link ' }}
                        <fai :icon="['fas', 'external-link-alt']" fixedWidth />
                </span>
        </template>
        <template #td-ipAddr="{ data, column }">
                <a :href="\`http://\${data[column.id]}\`" target="_blank" rel="noreferrer">
                        \{\{ data[column.id] \}\}
                </a>
        </template>
</btb-vue-table>`;

const preHeadData = `const headDate = [
        {name : 'Name', id : 'name' },
        {name : 'Type', id : 'devType' },
        {name : 'OS', id : 'osType' },
        {name : 'IP', id : 'ipAddr' },
        {name : 'MAC', id : 'macAddr' },
        {name : 'Traffic(tx / rx)', id : 'traffic' },
        {name : 'Statue', id : 'statusDesc'}
];`;

const preBodyData = `const bodyData = [
  {
    name : 'Device 1',  
    devType : 'phone',   
    osType : 'ios',      
    ipAddr : '192.168.0.50',   
    macAddr : 'B4:A2:07:44:55:2A', 
    traffic : '1.7 MB / 45 KB', 
    status : 0, 
    statusDesc : 'Disconnected'
  },
  {
    name : 'Device 2',  
    devType : 'notebook',   
    osType : 'windows',      
    ipAddr : '192.168.0.52',   
    macAddr : 'B4:A2:07:44:DD:FF', 
    traffic : '4.8 MB / 27 KB', 
    status : 0, 
    statusDesc : 'Disconnected'
  }
];`;

export default defineComponent({
  name: "btb-pkg-table-example-slot",
  setup() {
    const langStore = useLanguageStore();
    const { langIndex } = storeToRefs(langStore);

    return {
      packageInfo,
      preRender,
      preHeadData,
      preBodyData,
      headData,
      bodyData,

      langIndex,
      translate,
      openLink
    };
  },
});
</script>

<style lang="scss"></style>