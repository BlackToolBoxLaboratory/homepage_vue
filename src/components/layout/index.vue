<template>
  <div class="btb-layout" ref="body">
    <BTBHead class="layout_head" @toggleMenu="toggleMenu()"/>
    <div class="layout_content">
      <router-view />
    </div>
    <BTBFoot class="layout_foot"/>
    <BTBAside :class="['layout_aside', { 'aside-hidden' : env.isHidden}]" @clickEntry="clickEntry"/>
  </div>
</template>

<script>
import BTBHead from './head.vue'
import BTBAside from './aside.vue'
import BTBFoot from './foot.vue'

const SIZE_MD = 768

export default {
  name: 'btb-layout',
  components: {
    BTBHead,
    BTBAside,
    BTBFoot
  },
  data () {
    return {
      env: {
        isHidden: false
      }
    }
  },
  watch: {
    $route: function (newRoute, oldRoute) {
      this.$refs.body.scrollTop = 0
    }
  },
  created () {
    if (window.innerWidth < SIZE_MD) {
      this.env.isHidden = true
    }
  },
  methods: {
    clickEntry: function () {
      if (window.innerWidth < SIZE_MD) {
        this.env.isHidden = true
      }
    },
    toggleMenu: function () {
      this.env.isHidden = !this.env.isHidden
    }
  }
}
</script>

<style lang="scss">
$aside-width: 300px;

.btb-layout {
  padding-top: 4rem;
  overflow-x: hidden;
  position: relative;

  .layout_head {
    position: fixed;
    top: 0;
    z-index: 1;
  }
  .layout_content {
    @include transition(margin-right);
    display: flex;
    padding: 1rem;
    min-height: 100vh;
    @include media-breakpoint-up-md {
      padding: 0;
    }
  }
  .layout_aside {
    @include transition(right);
    position: fixed;
    overflow: auto;
    width: $aside-width;
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
