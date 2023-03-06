<template>
  <div class="module-layout-aside">
    <btb-vue-list class="aside_menu" :dataList="translatedmenu" collapseEnable
      :activeID="currentActiveID" />
  </div>
</template>

<script lang="ts">
import type { RouteList } from '@/assets/definitions/menuList';

import { defineComponent, ref, computed, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import MENU from '@/assets/definitions/menuList';

export default defineComponent({
  name: 'module-layout-aside',
  emits: ['clickEntry'],
  setup(props, { emit }) {
    const route = useRoute();
    const router = useRouter();

    // const getRouteIDFromName = (routename: string) => {
    //   return this.getRouteIDFromName_Recursive(routename, MENU) || ''
    // }

    // const getRouteIDFromName_Recursive = (routename: string, source: RouteList[]) => {
    //   let result = ''
    //   source.find((route) => {
    //     if (route.children) {
    //       result = this.getRouteIDFromName_Recursive(routename, route.children)
    //       if (result.length !== 0) {
    //         return true
    //       }
    //     } else {
    //       if (route.routename === routename) {
    //         result = route.id
    //         return true
    //       }
    //     }
    //     return false
    //   })
    //   return result
    // }

    const activeID = ref('');

    const currentActiveID = computed({
      get: () => {
        return activeID.value
      },
      set: (newRoute: string) => {
        console.log('newRoute', newRoute)
        // activeID.value = getRouteIDFromName(newRoute.name)
      }
    })

    const translatedmenu = computed(() => {
      const result = MENU
      // TODO: for translate language of menu title
      return result
    })

    onMounted(()=>{
      if(route.name) {
        activeID.value = route.name as string;
      }
    })

    // watch(
    //   () => route,
    //   (newRoute, oldRoute) => {
    //     console.log('newRoute',newRoute)
    //     // if(newRoute.name) {
    //     //   activeID.value = newRoute.name
    //     // }
    //   }
    // )

    return {
      activeID,

      currentActiveID,
      translatedmenu,
    }
  }
})
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
