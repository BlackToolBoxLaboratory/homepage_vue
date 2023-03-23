<template>
  <module-page class="btb-app-languages">
    <module-page-head :title="translate(langIndex, 'application.validator.name')" :btnList="packageInfo.linkList"
      @clickBtn="openLink" />
    <module-section>
      <template #head>
        {{ `${translate(langIndex, 'application.version_colon')}${packageInfo.version}` }}<br />
        {{ `${translate(langIndex, 'application.release_colon')}${packageInfo.updated}` }}
      </template>
      <p>
        {{ translate(langIndex, 'application.validator.description') }}
      </p>
    </module-section>
    <module-section>
      <template #head>
        {{ translate(langIndex, 'application.section.installation') }}
      </template>
      <p>
        {{ translate(langIndex, 'application.validator.installation.description') }}
        <a className="inline-link" href="https://blacktoolboxlaboratory.github.io/javascript/#/packages/validator"
          target="_blank" rel="noreferrer">
          <fai :icon="['fas', 'external-link-alt']" fixedWidth size="xs" />
          <span>{{ translate(langIndex, 'application.validator.installation.linkName') }}</span>
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
        {{ translate(langIndex, 'application.section.result') }}
      </template>
      <p>
        {{ translate(langIndex, 'application.validator.result') }}
      </p>
      <module-pre>
        <pre>{{ preResult }}</pre>
      </module-pre>
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

const preInstall = `$ npm install --save @blacktoolbox/prototype-validator`;

const preInitializaer = `import Validator from '@blacktoolbox/prototype-validator';

const validator = new Validator();

const rules = {
        'event' : [
                {
                        rule    : 'strLength|min:2',
                        message : 'Username length required 2 at least.'
                }
        ],
}

validator.init(rules);

validator.stats(); // Show all status
validator.stats('event'); // Show event's status only

validator.reset(); // clean all status of event to null

validator.validate('event', value) // to check the value by the rule of event
`;

const preResult = `validator.stats('event') = {
        message = '';
        status = null;
}`;

export default defineComponent({
  name: "btb-app-validator",
  setup() {
    const langStore = useLanguageStore();
    const { langIndex } = storeToRefs(langStore);

    return {
      packageInfo,
      preInstall,
      preInitializaer,
      preResult,

      langIndex,
      translate,
      openLink
    }
  }
});
</script>

<style lang="scss"></style>
