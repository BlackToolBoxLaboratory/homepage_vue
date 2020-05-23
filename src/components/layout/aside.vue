<template>
  <div class="btb-layout-aside">
    <btb-vue-list :dataList="translatedmenu" collapseEnable @clickEntry="clickEntry" :activeID="currentActiveID"/>
  </div>
</template>

<script>
import MENU from '@/assets/definitions/menu.js'

export default {
  name: 'btb-layout-aside',
  data () {
    return {
      env: {
        activeID: this.getRouteIDFromName(this.$route.name)
      }
    }
  },
  computed: {
    translatedmenu () {
      const result = MENU
      // TODO: for translate language of menu title
      return result
    },
    currentActiveID: {
      get: function () {
        return this.env.activeID
      },
      set: function (newRoute) {
        this.env.activeID = this.getRouteIDFromName(newRoute.name)
      }
    }
  },
  watch: {
    $route: function (newRoute, olrRoute) {
      this.currentActiveID = newRoute
    }
  },
  methods: {
    getRouteIDFromName: function (routename) {
      return this.getRouteIDFromName_Recursive(routename, MENU) || ''
    },
    getRouteIDFromName_Recursive: function (routename, source) {
      let result = ''
      source.find((route) => {
        if (route.children) {
          result = this.getRouteIDFromName_Recursive(routename, route.children)
          if (result.length !== 0) {
            return true
          }
        } else {
          if (route.routename === routename) {
            result = route.id
            return true
          }
        }
        return false
      })
      return result
    },
    clickEntry: function (entry) {
      if (this.$route.name !== entry.routename) {
        this.$router.push({ name: entry.routename })
        this.$emit('clickEntry')
      }
    }
  }
}
</script>

<style lang="scss">
.btb-layout-aside {
  @include padding-y(1rem);

  .btb-vue-list {
    @include padding-x(1rem);
    color: $color-gray-ll;

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
