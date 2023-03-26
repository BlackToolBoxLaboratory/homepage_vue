<template>
  <module-page class="btb-about">
    <module-section class="about_title">
      <img class="title_image" :src="logo" alt="BTB_Vue" />
      <h1 class="title_main hidden-down-md">Black Tool Box Laboratory</h1>
      <h1 class="title_main hidden-up-md">BTB Lab.</h1>
      <p class="title_sub">For Vue</p>
    </module-section>
    <module-section>
      <span>
        {{ translate(langIndex, 'about.description') }}
      </span>
    </module-section>
    <module-section class="grid-row justify-content-center">
      <a href="mailto:vannoel@conman.org" target="_blank">
        <fai :icon="['far', 'envelope']" fixed-width />
        <span>vannoel@conman.org</span>
      </a>
    </module-section>
    <module-divider />
    <template v-for="entry, key in packageObj" :key="entry.name">
      <template v-if="key !== 'list'">
        <module-divider />
      </template>
      <module-section class="about_package">
        <BTBPackage :info="entry"/>
      </module-section>
    </template>
  </module-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";

import BTBPackage from "./package.vue";

import logo from "@/assets/images/BTB_Vue.png";
import PACKAGE from "@/assets/definitions/packageObj";
import { translate } from '@/utils/functions';

import { useLanguageStore } from '@/store/lang';

export default defineComponent({
  name: "btb-about",
  components: {
    BTBPackage,
  },
  setup() {
    const langStore = useLanguageStore();
    const { langIndex } = storeToRefs(langStore);

    return {
      packageObj: PACKAGE,
      logo,

      langIndex,
      translate
    };
  },
});
</script>

<style lang="scss">
.btb-about {
  .about_title {
    .section_body {
      text-align: center;
    }

    .title_image {
      @include margin-lg-y;
    }

    .title_main {
      @include margin-sm-y;
      @include font-xl;
    }

    .title_sub {
      @include margin-sm-y;
      color: $color-gray;
    }
  }
}
</style>
