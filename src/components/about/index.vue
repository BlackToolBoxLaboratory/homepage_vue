<template>
  <module-page class="btb-about">
    <module-section class="about_title grid-row direction-column align-items-center">
      <img class="title_image" :src="require('@/assets/images/BTB_Vue.png')" alt="BTB_Vue">
      <h1 class="title_main hidden-down-md">Black Tool Box Laboratory</h1>
      <h1 class="title_main hidden-up-md">BTB Lab.</h1>
      <p class="title_sub">For Vue</p>
    </module-section>
    <module-section>
      <span>
        I aim to develope some useful and simple UI components for front-end development. And here all of packages are made with Vue. For hoping to let user handle the customized layout easier and more concentrate. They are designed with basic logic for high degrees of freedom of customization and low dependency. While using, if you find some questions, bugs or issues. Or having some great ideas. Please feel free to let me know.
      </span>
    </module-section>
    <module-section class="grid-row justify-content-center">
      <a href="mailto://vannoel0628@gmail.com" target="_blank">
        <FAI :icon="['far', 'envelope']" fixed-width />
        <span>vannoel0628@gmail.com</span>
      </a>
    </module-section>
    <module-divider/>
    <module-section class="grid-row justify-content-center">
      <span>If you like all the works in BTB Lab. Please </span>
      <a href="https://www.paypal.me/vannoel0628" target="_blank">
        <FAI :icon="['fab', 'paypal']" fixed-width />
        <span>buy me a coffee</span>
      </a>
      <span>. </span>
    </module-section>
    <module-divider/>
    <template v-for="entry in packageObj">
      <div :key="entry.name">
        <template v-if="entry.name!=='List'">
        <module-divider/>
        </template>
        <module-section class="about_package">
          <BTBPackage :info="entry" @redirectRoute="redirectRoute" />
        </module-section>
      </div>
    </template>
  </module-page>
</template>

<script>
import BTBPackage from './package.vue'

import packageObj from '@/assets/definitions/packageObj'

export default {
  name: 'btb-about',
  components: {
    BTBPackage
  },
  computed: {
    packageObj () {
      return packageObj
    }
  }
}
</script>

<style lang="scss">
.btb-about{
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
