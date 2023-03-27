<template>
  <module-page class="btb-pkg-table-example-list">
    <module-page-head :title="translate(langIndex, 'package.table.example.list.title')" :btnList="packageInfo.linkList"
      @clickBtn="openLink" />
    <module-section>
      <template #head>
        {{ `${translate(langIndex, 'package.version_colon')}${packageInfo.version}` }}<br />
        {{ `${translate(langIndex, 'package.release_colon')}${packageInfo.updated}` }}
      </template>
      <p>
        {{ translate(langIndex, 'package.table.example.list.description') }}
      </p>
    </module-section>
    <module-section>
      <template #head>
        {{ translate(langIndex, 'package.section.example') }}
      </template>
      <btb-vue-table class="table_sample" :headData="headData" :bodyData="bodyData" />
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
  { name: 'Device 1', devType: 'phone', osType: 'ios', ipAddr: '192.168.0.50', macAddr: 'B4:A2:07:44:55:2A', traffic: '0 MB / 0 KB', status: 0, statusDesc: 'Disconnected' },
  { name: 'Device 2', devType: 'switch', osType: 'linux', ipAddr: '192.168.0.37', macAddr: '7E:EF:02:44:AE:25', traffic: '2.7 MB / 263 KB', status: 1, statusDesc: 'Connected' },
  { name: 'Device 3', devType: 'ap', osType: 'linux', ipAddr: '192.168.0.121', macAddr: 'EF:2B:15:44:32:B4', traffic: '0 MB / 0 KB', status: 2, statusDesc: 'Locked' },
  { name: 'Device 4', devType: 'phone', osType: 'android', ipAddr: '192.168.0.9', macAddr: 'F5:22:33:44:55:35', traffic: '0 MB / 0 KB', status: 0, statusDesc: 'Disconnected' },
  { name: 'Device 5', devType: 'ap', osType: 'linux', ipAddr: '192.168.0.27', macAddr: '7E:EF:B2:44:28:3B', traffic: '1.3 MB / 725 KB', status: 1, statusDesc: 'Connected' },
  { name: 'Device 6', devType: 'pc', osType: 'windows', ipAddr: '192.168.0.11', macAddr: '11:22:24:44:5E:90', traffic: '0 MB / 0 KB', status: 2, statusDesc: 'Locked' },
  { name: 'Device 7', devType: 'phone', osType: 'ios', ipAddr: '192.168.0.6', macAddr: '11:FF:33:44:55:A3', traffic: '1.2 MB / 45 KB', status: 1, statusDesc: 'Connected' },
  { name: 'Device 8', devType: 'pc', osType: 'linux', ipAddr: '192.168.0.3', macAddr: 'B2:FE:B8:44:55:6D', traffic: '4.8 MB / 3.7 MB', status: 1, statusDesc: 'Connected' },
  { name: 'Device 9', devType: 'pc', osType: 'windows', ipAddr: '192.168.0.18', macAddr: 'E4:AA:74:44:38:E1', traffic: '0 MB / 0 KB', status: 2, statusDesc: 'Locked' },
  { name: 'Device 10', devType: 'switch', osType: 'linux', ipAddr: '192.168.0.245', macAddr: 'E2:BA:33:44:48:AB', traffic: '0 MB / 0 KB', status: 0, statusDesc: 'Disconnected' }
];

const preRender = `<btb-vue-table 
        :headData="headData" 
        :bodyData="bodyData"
/>`

const preHeadData = `const headData = [
        {name : 'Name', id : 'name'},
        {name : 'Type', id : 'devType'},
        {name : 'OS', id : 'osType'},
        {name : 'IP', id : 'ipAddr'},
        {name : 'MAC', id : 'macAddr'},
        {name : 'Traffic(tx / rx)', id : 'traffic'},
        {name : 'Statue', id : 'statusDesc'}
];`;

const preBodyData = `const bodyData = [
        {name : 'Device 1', devType : 'phone', osType : 'ios', ipAddr : '192.168.0.50', macAddr : 'B4:A2:07:44:55:2A', traffic : '0 MB / 0 KB', status : 0, statusDesc : 'Disconnected'},
        {name : 'Device 2', devType : 'switch', osType : 'linux', ipAddr : '192.168.0.37', macAddr : '7E:EF:02:44:AE:25', traffic : '2.7 MB / 263 KB', status : 1, statusDesc : 'Connected'},
        {name : 'Device 3', devType : 'ap', osType : 'linux', ipAddr : '192.168.0.121', macAddr : 'EF:2B:15:44:32:B4', traffic : '0 MB / 0 KB', status : 2, statusDesc : 'Locked'},
        {name : 'Device 4', devType : 'phone', osType : 'android',  ipAddr : '192.168.0.9', macAddr : 'F5:22:33:44:55:35', traffic : '0 MB / 0 KB', status : 0, statusDesc : 'Disconnected'},
        {name : 'Device 5', devType : 'ap', osType : 'linux', ipAddr : '192.168.0.27', macAddr : '7E:EF:B2:44:28:3B', traffic : '1.3 MB / 725 KB', status : 1, statusDesc : 'Connected'},
        {name : 'Device 6', devType : 'pc', osType : 'windows', ipAddr : '192.168.0.11', macAddr : '11:22:24:44:5E:90', traffic : '0 MB / 0 KB', status : 2, statusDesc : 'Locked'},
        {name : 'Device 7', devType : 'phone', osType : 'ios', ipAddr : '192.168.0.6', macAddr : '11:FF:33:44:55:A3', traffic : '1.2 MB / 45 KB', status : 1, statusDesc : 'Connected'},
        {name : 'Device 8', devType : 'pc', osType : 'linux', ipAddr : '192.168.0.3', macAddr : 'B2:FE:B8:44:55:6D', traffic : '4.8 MB / 3.7 MB', status : 1, statusDesc : 'Connected'},
        {name : 'Device 9', devType : 'pc', osType : 'windows',  ipAddr : '192.168.0.18', macAddr : 'E4:AA:74:44:38:E1', traffic : '0 MB / 0 KB', status : 2, statusDesc : 'Locked'},
        {name : 'Device 10', devType : 'switch', osType : 'linux', ipAddr : '192.168.0.245', macAddr : 'E2:BA:33:44:48:AB', traffic : '0 MB / 0 KB', status : 0, statusDesc : 'Disconnected'}
];`

export default defineComponent({
  name: "btb-pkg-table-example-list",
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
