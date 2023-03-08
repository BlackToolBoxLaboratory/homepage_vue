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
        I aim to develope some useful and simple UI components for front-end
        development. And here all of packages are made For Vue. For hoping to
        let user handle the customized layout easier and more concentrate. They
        are designed with basic logic for high degrees of freedom of
        customization and low dependency. While using, if you find some
        questions, bugs or issues. Or having some great ideas. Please feel free
        to let me know.
      </span>
    </module-section>
    <module-section class="grid-row justify-content-center">
      <a href="mailto:vannoel@conman.org" target="_blank">
        <fai :icon="['far', 'envelope']" fixed-width />
        <span>vannoel@conman.org</span>
      </a>
    </module-section>
    <module-divider />
    <template v-for="entry in packageObj" :key="entry.name">
      <template v-if="entry.name !== 'List'">
        <module-divider />
      </template>
      <module-section class="about_package">
        <BTBPackage :info="entry" />
      </module-section>
    </template>
  </module-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BTBPackage from "./package.vue";

import logo from "@/assets/images/BTB_Vue.png";

import PACKAGE from "@/assets/definitions/packageObj";

export default defineComponent({
  name: "btb-about",
  components: {
    BTBPackage,
  },
  setup() {
    return {
      packageObj: PACKAGE,
      logo,
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
