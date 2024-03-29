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
    <a class="head_item item-org" href="https://blacktoolboxlaboratory.github.io/" target="_blank" rel="noreferrer">
      <fai class="header_button" :icon="['fas', 'building']" fixed-width />
    </a>
    <a class="head_item item-home" :href="homeUrl">
      <fai class="header_button" :icon="['fas', 'home']" fixed-width />
    </a>
    <div class="head_item">
      <btb-vue-popover class="head_langPopover" v-model:state="showPopover">
        <template #trigger>
          <fai class="header_button" :icon="['fas', 'globe']" fixed-width />
        </template>

        <btb-vue-list :dataList="langList" :activeID="currentActiveID" @clickEntry="switchLang" />
      </btb-vue-popover>
    </div>
    <div class="head_item">
      <fai class="header_button" :icon="['fas', 'bars']" fixed-width @click="toggleMenu" />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { storeToRefs } from "pinia";

import { lang } from '@/plugins/btblab-prototype-languages';
import ROUTE from "@/assets/definitions/constants/routeName.json";

import { useLanguageStore } from '@/store/lang';

export default defineComponent({
  name: "module-layout-head",
  setup(props, { emit }) {
    const showPopover = ref(false);

    const langStore = useLanguageStore();
    const { langIndex: currentActiveID } = storeToRefs(langStore);

    const homeUrl = computed<string>(() => {
      return `/vue/#${ROUTE["ABOUT"]}`;
    });

    const langList = computed(() => {
      return lang.menu().map((entry: Record<string, any>) => {
        return {
          ...entry,
          id: entry.index,
          title: entry.label,
        };
      }) || [];
    });

    const toggleMenu = () => {
      emit("toggleMenu");
    };
    const switchLang = (event: Record<string, any>) => {
      lang.set(event.index);
      currentActiveID.value = event.index;
      showPopover.value = false;
    }
    return {
      showPopover,
      langStore,
      currentActiveID,
      homeUrl,
      langList,

      toggleMenu,
      switchLang
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

  .head_langPopover {
    .popover_content {
      @include padding-md-x;
      white-space: nowrap;
    }

    .layer_container {
      @include padding-md-x;
      @include padding-sm-y;
      @include font-sm;
      cursor: pointer;
      color: $color-gray-l;
    }

    .container_entry {

      &.entry-active,
      &:hover {
        color: $color-gray-ddd;
      }
    }
  }
}
</style>
