<template>
  <div class="module-layout" ref="body">
    <module-layout-head class="layout_head" @toggleMenu="toggleMenu()" />
    <div class="layout_content">
      <slot />
    </div>
    <module-layout-foot class="layout_foot" />
    <module-layout-aside
      :class="['layout_aside', { 'aside-hidden': isHidden }]"
      @clickEntry="clickEntry"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { GRID } from '../../assets/definitions/constants';

const SIZE_MD = 768;

export default defineComponent({
  name: "module-layout",
  setup() {
    const isHidden = ref(window.innerWidth < GRID.MD);

    const toggleMenu = () => {
      isHidden.value = !isHidden.value;
    };
    const clickEntry = () => {
      if (window.innerWidth < SIZE_MD) {
        isHidden.value = true;
      }
    };

    return {
      isHidden,

      toggleMenu,
      clickEntry,
    };
  },
});
</script>

<style lang="scss">
$aside-width: 300px;

.module-layout {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .layout_head {
    flex-shrink: 0;
    position: sticky;
    top: 0;
    z-index: 1;
  }
  .layout_content {
    @include transition(margin-right);
    flex-grow: 1;
    display: flex;
    padding: 1rem;
    @include media-breakpoint-up-md {
      padding: 0;
    }
  }
  .layout_aside {
    @include transition(right);
    position: fixed;
    overflow: auto;
    width: $aside-width;
    flex-shrink: 0;
    background-color: $color-mask-d;
    top: 4rem;
    right: 0;
    bottom: 0;

    &.aside-hidden {
      right: -100%;
    }

    @include media-breakpoint-up-md {
      background-color: $color-mask-l;
    }
  }
}
</style>
