<template>
  <header class="module-layout-head">
    <div class="head_logo">
      <div class="logo_content">BV</div>
    </div>
    <div class="head_title">
      <div class="title_main hidden-down-md">Black Tool Box Laboratory</div>
      <div class="title_main hidden-up-md">BTB Lab.</div>
      <div class="title_sub">For Vue</div>
    </div>
    <a
      className="head_item item-org"
      href="https://blacktoolboxlaboratory.github.io/"
      target="_blank"
      rel="noreferrer"
    >
      <fai class="header_button" :icon="['fas', 'building']" fixed-width />
    </a>
    <a className="head_item item-home" :href="homeUrl">
      <fai class="header_button" :icon="['fas', 'home']" fixed-width />
    </a>
    <div class="head_item">
      <fai class="header_button" :icon="['fas', 'globe']" fixed-width />
    </div>
    <div class="head_item">
      <fai
        class="header_button"
        :icon="['fas', 'bars']"
        fixed-width
        @click="toggleMenu"
      />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

import ROUTE from "../../assets/definitions/constants/routeName.json";

export default defineComponent({
  name: "module-layout-head",
  setup(props, { emit }) {
    const homeUrl = computed<string>(() => {
      return `/vue/#${ROUTE["ABOUT"]}`;
    });

    const toggleMenu = () => {
      emit("toggleMenu");
    };
    return {
      homeUrl,

      toggleMenu,
    };
  },
});
</script>

<style lang="scss">
.module-layout-head {
  @include padding-sm;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: $color-black;

  .head_logo {
    @include margin-sm;
    @include radius-md;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $color-primary;
    flex-shrink: 0;

    .logo_content {
      @include font-3xl-b;
      color: $color-black;
    }
  }

  .head_title {
    @include margin-sm;
    flex-grow: 1;

    .title_main {
      @include font-lg-b;
      color: $color-primary;
    }

    .title_sub {
      color: $color-gray-ll;
    }
  }

  .head_item {
    @include margin-md;
    @include font-lg;
    flex-shrink: 0;

    .header_button {
      color: $color-gray-ll;
      cursor: pointer;

      &:hover {
        color: $color-gray-lll;
      }
    }
  }
}
</style>
