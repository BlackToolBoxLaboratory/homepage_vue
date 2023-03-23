<template>
  <module-page class="btb-app-languages">
    <module-page-head :title="translate(langIndex, 'application.languages.name')" :btnList="packageInfo.linkList"
      @clickBtn="openLink" />
    <module-section>
      <template #head>
        {{ `${translate(langIndex, 'application.version_colon')}${packageInfo.version}` }}<br />
        {{ `${translate(langIndex, 'application.release_colon')}${packageInfo.updated}` }}
      </template>
      <p>
        {{ translate(langIndex, 'application.languages.description') }}
      </p>
    </module-section>
    <module-section>
      <template #head>
        {{ translate(langIndex, 'application.section.installation') }}
      </template>
      <p>
        {{ translate(langIndex, 'application.languages.installation.description') }}
        <a className="inline-link" href="https://blacktoolboxlaboratory.github.io/javascript/#/packages/languages"
          target="_blank" rel="noreferrer">
          <fai :icon="['fas', 'external-link-alt']" fixedWidth size="xs" />
          <span>{{ translate(langIndex, 'application.languages.installation.linkName') }}</span>
        </a>
      </p>
      <module-pre>
        <pre>{{ preInstall }}</pre>
      </module-pre>
    </module-section>
    <module-section>
      <template #head>
        {{ translate(langIndex, 'application.section.initializer') }}
      </template>
      <p>
        {{ translate(langIndex, 'application.languages.initializer') }}
      </p>
      <module-pre>
        <pre>{{ preInitializaer }}</pre>
      </module-pre>
    </module-section>
    <module-section>
      <template #head>
        {{ translate(langIndex, 'application.section.impletement') }}
      </template>
      <p>
        {{ translate(langIndex, 'application.languages.impletement') }}
      </p>
      <module-pre>
        <pre>{{ preImplement }}</pre>
      </module-pre>
    </module-section>
    <module-section>
      <template #head>
        {{ translate(langIndex, 'application.section.trigger') }}
      </template>
      <p>
        {{ translate(langIndex, 'application.languages.trigger.description') }}
      </p>
      <module-block>
        <template #title>
          {{ "Ref" }}
        </template>
        <p>
          {{ translate(langIndex, 'application.languages.trigger.ref') }}
        </p>
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

const preInstall = `$ npm install --save @blacktoolbox/prototype-languages`;

const preInitializaer = `import { initializer } from '@blacktoolbox/prototype-languages';

import en from '@src/assets/languages/en.js';
import zh from '@src/assets/languages/zh.js';

initializer([
        { index : 'en', label : 'Eglish', dictionary : en },
        { index : 'zh', label : '繁體中文', dictionary : zh }
]);`;

const preImplement = `import Language from '@blacktoolbox/prototype-languages';

const lang = new Language()`;

export default defineComponent({
  name: "btb-app-languages",
  setup() {
    const langStore = useLanguageStore();
    const { langIndex } = storeToRefs(langStore);

    return {
      packageInfo,
      preInstall,
      preInitializaer,
      preImplement,

      langIndex,
      translate,
      openLink
    }
  }
});
</script>

<style lang="scss"></style>
