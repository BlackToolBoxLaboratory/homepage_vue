<template>
  <module-page class="btb-pkg-popover-example-align">
    <module-page-head :title="translate(langIndex, 'package.popover.example.align.title')" :btnList="packageInfo.linkList"
      @clickBtn="openLink" />
    <module-section>
      <template #head>
        {{ `${translate(langIndex, 'package.version_colon')}${packageInfo.version}` }}<br />
        {{ `${translate(langIndex, 'package.release_colon')}${packageInfo.updated}` }}
      </template>
      <p>
        {{ translate(langIndex, 'package.popover.example.align.description') }}
      </p>
    </module-section>
    <module-section>
      <template #head>
        {{ translate(langIndex, 'package.section.example') }}
      </template>
      <module-block>
        <template #title>
          {{ translate(langIndex, 'package.popover.example.vertical') }}
        </template>
        <div class="align_vertical">
          <btb-vue-popover position="top" align="begin">
            <template #trigger>
              <button>Begin</button>
            </template>

            Example: Begin
          </btb-vue-popover>
          <btb-vue-popover position="top" align="center">
            <template #trigger>
              <button>Center</button>
            </template>

            Example: Center
          </btb-vue-popover>
          <btb-vue-popover position="top" align="end">
            <template #trigger>
              <button>End</button>
            </template>

            Example: End
          </btb-vue-popover>
        </div>
      </module-block>
      <module-block>
        <template #title>
          {{ translate(langIndex, 'package.popover.example.horizontal') }}
        </template>
        <div class="align_horizontal">
          <btb-vue-popover position="left" align="begin">
            <template #trigger>
              <button>Begin</button>
            </template>

            Example: Begin
          </btb-vue-popover>
          <btb-vue-popover position="left" align="center">
            <template #trigger>
              <button>Center</button>
            </template>

            Example: Center
          </btb-vue-popover>
          <btb-vue-popover position="left" align="end">
            <template #trigger>
              <button>End</button>
            </template>

            Example: End
          </btb-vue-popover>
        </div>
      </module-block>
    </module-section>
    <module-section>
      <template #head>
        {{ translate(langIndex, 'package.section.sourceCode') }}
      </template>
      <module-pre>
        <pre>{{ preRender }}</pre>
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

const preRender = `<btb-vue-popover position="top" align="begin">
        <template #trigger>
                <button>Begin</button>
        </template>

        Example: Begin
</btb-vue-popover>

<btb-vue-popover position="top" align="center">
        <template #trigger>
                <button>Center</button>
        </template>

        Example: Center
</btb-vue-popover>

<btb-vue-popover position="top" align="end">
        <template #trigger>
                <button>End</button>
        </template>

        Example: End
</btb-vue-popover>

<btb-vue-popover position="left" align="begin">
        <template #trigger>
                <button>Begin</button>
        </template>

        Example: Begin
</btb-vue-popover>

<btb-vue-popover position="left" align="center">
        <template #trigger>
                <button>Center</button>
        </template>

        Example: Center
</btb-vue-popover>

<btb-vue-popover position="left" align="end">
        <template #trigger>
                <button>End</button>
        </template>

        Example: End
</btb-vue-popover>
`;

export default defineComponent({
  name: "btb-pkg-popover-example-align",
  setup() {
    const langStore = useLanguageStore();
    const { langIndex } = storeToRefs(langStore);

    return {
      packageInfo,
      preRender,

      langIndex,
      translate,
      openLink
    };
  },
});
</script>

<style lang="scss">
.btb-pkg-popover-example-align {
  .align_vertical {
    display: flex;
    column-gap: 1rem;
  }
  .align_horizontal { 
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }
}
</style>