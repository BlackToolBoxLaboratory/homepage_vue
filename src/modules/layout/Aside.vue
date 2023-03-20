<template>
  <div class="module-layout-aside">
    <btb-vue-list class="aside_menu" :dataList="translatedMenu" collapseEnable :activeID="currentActiveID"
      @clickEntry="clickEntry" />
  </div>
</template>

<script lang="ts">
import type { ListItemObj } from '@blacktoolbox/vue-list'

import { defineComponent, ref, computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";

import MENU from "@/assets/definitions/menuList";
import { ROUTE } from "@/assets/definitions/constants";
import { translate } from "@/utils/functions";

import { useLanguageStore } from '@/store/lang';

export default defineComponent({
  name: "module-layout-aside",
  emits: ["clickEntry"],
  setup(props, { emit }) {
    const route = useRoute();

    const langStore = useLanguageStore();
    const { langIndex } = storeToRefs(langStore);

    const activeID = ref("");

    const currentActiveID = computed(()=>{
      return activeID.value;
    });

    const translatedMenu = computed(() => {
      let result: any[] = [];
      if (langIndex.value) {
        result = MENU.map((entry) => {
          return translateMenuRecursive(entry);
        });
      }
      return result;
    });

    const translateMenuRecursive = (obj: ListItemObj) => {
      let result = {
        ...obj,
        title: obj.langIndex ? translate(langIndex.value, obj.langIndex) : obj.title,
      };

      if (obj.children) {
        result.children = obj.children.map((entry) => {
          return translateMenuRecursive(entry);
        });
      }
      return result
    }

    const _getRouteID = () => {
      let result = Object.keys(ROUTE).find((key) => {
        return (ROUTE as Record<string, string>)[key] === route.path;
      }) || ''
      return result;
    }

    const clickEntry = (event: ListItemObj) => {
      if ((ROUTE as Record<string, string>)[event.id] !== route.path) {
        emit("clickEntry");
      }
    }

    onMounted(() => {
      if (route.name) {
        activeID.value = _getRouteID();
      }
    });

    watch(
      () => route.path,
      () => {
        activeID.value = _getRouteID();
      }
    )

    return {
      activeID,

      currentActiveID,
      translatedMenu,
      langStore,

      clickEntry
    };
  },
});
</script>

<style lang="scss">
.module-layout-aside {
  .btb-vue-list {
    @include padding-x(1rem);
    color: $color-gray-lll;

    .container_entry {
      @include padding-sm-y;
      cursor: pointer;

      &.entry-active,
      &:hover {
        color: $color-primary;
      }
    }
  }
}
</style>
