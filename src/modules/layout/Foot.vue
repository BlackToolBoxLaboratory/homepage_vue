<template>
  <div class="module-layout-foot">
    <div class="foot_navbar">
      <a
        class="navbar_linkBtn linkBtn-github"
        href="https://github.com/BlackToolBoxLaboratory"
        target="_blank"
      >
        <fai :icon="['fab', 'github']" fixed-width />
      </a>
      <a
        class="navbar_linkBtn linkBtn-npm"
        href="https://www.npmjs.com/org/blacktoolbox"
        target="_blank"
      >
        <fai :icon="['fab', 'npm']" fixed-width />
      </a>
      <a
        class="navbar_linkBtn linkBtn-linkedin"
        href="https://www.linkedin.com/company/black-tool-box-laboratory/"
        target="_blank"
      >
        <fai :icon="['fab', 'linkedin']" fixed-width />
      </a>
      <a
        class="navbar_linkBtn linkBtn-email"
        href="mailto:vannoel@cogman.org"
        target="_blank"
      >
        <fai :icon="['far', 'envelope']" fixed-width />
      </a>
    </div>

    <footer class="foot_copyright">
      Copyright © Black Tool Box Laboratory. All rights reserved.
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "module-layout-foot",
});
</script>

<style lang="scss">
.module-layout-foot {
  .foot_navbar {
    @include font-xl;
    @include padding-x(1rem);
    @include padding-y(0.5rem);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $color-gray-l;

    .navbar_linkBtn {
      @include font-lg;
      color: $color-gray-d;

      &.linkBtn-paypal:hover {
        color: $color-paypal;
      }
      &.linkBtn-github:hover {
        color: $color-github;
      }
      &.linkBtn-npm:hover {
        color: $color-npm;
      }
      &.linkBtn-linkedin:hover {
        color: $color-linkedin;
      }
      &.linkBtn-wordpress:hover {
        color: $color-wordpress;
      }
      &.linkBtn-email:hover {
        color: $color-email;
      }

      & + .navbar_linkBtn {
        margin-left: 1rem;
      }
    }
  }

  .foot_copyright {
    @include font-xs;
    @include padding-md;
    color: $color-gray-lll;
    background-color: $color-gray-ddd;
    text-align: center;
  }
}
</style>
