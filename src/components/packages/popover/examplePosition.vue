<template>
  <module-page class="btb-pkg-popover-example-position">
    <module-page-head :title="translate(langIndex, 'package.popover.example.position.title')"
      :btnList="packageInfo.linkList" @clickBtn="openLink" />
    <module-section>
      <template #head>
        {{ `${translate(langIndex, 'package.version_colon')}${packageInfo.version}` }}<br />
        {{ `${translate(langIndex, 'package.release_colon')}${packageInfo.updated}` }}
      </template>
      <p>
        {{ translate(langIndex, 'package.popover.example.position.description') }}
      </p>
    </module-section>
    <module-section>
      <template #head>
        {{ translate(langIndex, 'package.section.example') }}
      </template>
      <div class="position_example">
        <btb-vue-popover position="left">
          <template #trigger>
            <button>Left</button>
          </template>

          Example: Left
        </btb-vue-popover>
        <btb-vue-popover position="top">
          <template #trigger>
            <button>Top</button>
          </template>

          Example: Top
        </btb-vue-popover>
        <btb-vue-popover position="bottom">
          <template #trigger>
            <button>Bottom</button>
          </template>

          Example: Bottom
        </btb-vue-popover>
        <btb-vue-popover position="right">
          <template #trigger>
            <button>Right</button>
          </template>

          Example: Right
        </btb-vue-popover>
      </div>
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

const preRender = `<btb-vue-popover position="left">
        <template #trigger>
                <button>Left</button>
        </template>

        Example: Left
</btb-vue-popover>

<btb-vue-popover position="top">
        <template #trigger>
                  <button>Top</button>
        </template>

        Example: Top
</btb-vue-popover>

<btb-vue-popover position="bottom">
        <template #trigger>
                <button>Bottom</button>
        </template>

        Example: Bottom
</btb-vue-popover>

<btb-vue-popover position="right">
        <template #trigger>
                <button>Right</button>
        </template>

        Example: Right
</btb-vue-popover>
`;

export default defineComponent({
  name: "btb-pkg-popover-example-position",
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
.btb-pkg-popover-example-position {
  .position_example {
    display: flex;
    column-gap: 1rem;
  }
}
</style>