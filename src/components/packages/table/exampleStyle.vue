<template>
  <module-page class="btb-pkg-table-example-style">
    <module-page-head :title="translate(langIndex, 'package.table.example.style.title')" :btnList="packageInfo.linkList"
      @clickBtn="openLink" />
    <module-section>
      <template #head>
        {{ `${translate(langIndex, 'package.version_colon')}${packageInfo.version}` }}<br />
        {{ `${translate(langIndex, 'package.release_colon')}${packageInfo.updated}` }}
      </template>
      <p>
        {{ translate(langIndex, 'package.table.example.style.description') }}
      </p>
    </module-section>
    <module-section>
      <template #head>
        {{ translate(langIndex, 'package.section.example') }}
      </template>
      <btb-vue-table class="table_sample" :headData="headData" :bodyData="bodyData" :styleObj="styleObj" mode="compare"/>
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
      <module-block>
        <template #title>
          {{ "styleObj" }}
        </template>
        <module-pre>
          <pre>{{ preStyleObj }}</pre>
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
  }, {
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

const styleObj = {
  'btb-vue-table-compare': {
    'box-shadow': '0 15px 30px -10px rgba(92, 101, 107, 0.15)',
    'background-color': '#ffffff'
  },
  'tr_th': {
    'padding': '0.25rem 0.5rem',
    'width': '100px',
    'background-color': '#b8dec9'
  },
  'tr_td': {
    'padding': '0.25rem 0.5rem',
    'width': '100px',
    'text-align': 'center',
    'border-left': '2px solid #b8dec9'
  }
};

const preRender = `<btb-vue-table 
        :headData="headData" 
        :bodyData="bodyData"
        :styleObj="styleObj"
        mode="comapre"
/>`

const preHeadData = `const headData = [
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
        }, {
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

const preStyleObj = `const styleObj = {
  'btb-vue-table-compare' : {
          'box-shadow' : '0 15px 30px -10px rgba(92, 101, 107, 0.15)',
          'background-color' : '#ffffff'
  },
  'tr_th' : {
          'padding' : '0.25rem 0.5rem',
          'width' : '100px',
          'background-color' : '#b8dec9'
  },
  'tr_td' : {
          'padding' : '0.25rem 0.5rem',
          'width' : '100px',
          'text-align' : 'center',
          'border-left' : '2px solid #b8dec9'
  }
};`;

export default defineComponent({
  name: "btb-pkg-table-example-style",
  setup() {
    const langStore = useLanguageStore();
    const { langIndex } = storeToRefs(langStore);

    return {
      packageInfo,
      preRender,
      preHeadData,
      preBodyData,
      preStyleObj,
      headData,
      bodyData,
      styleObj,

      langIndex,
      translate,
      openLink
    };
  },
});
</script>

<style lang="scss"></style>