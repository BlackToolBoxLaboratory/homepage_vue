<template>
  <div class="btb-layout-aside">
    <btb-vue-list :listdata="translatedmenu" collapseEnable @clickEntry="clickEntry" :defaultActiveID="currentActiveID"/>
  </div>
</template>

<script>
import MENU from '@/assets/definitions/menu.js'

export default {
  name: 'btb-layout-aside',
  props: {
    test: Array
  },
  computed: {
    translatedmenu () {
      const result = MENU
      // TODO: for translate language of menu title
      return result
    },
    currentActiveID () {
      return ''
    }
  },
  // mounted () {
  //   console.log('123')
  // },
  // updated () {
  //   console.log('456')
  // },
  methods: {
    clickEntry: function (entry) {
      if (this.$route.name !== entry.pathname) {
        this.$router.push({ name: entry.pathname })
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
