<template>
  <div class="btb-layout">
    <BTBHead class="layout_head" @togglePageMenu="togglePageMenu()"/>
    <div :class="['layout_body', { 'aside-hidden' : env.isHidden}]">
      <div class="body_container">
        <div class="container_content">
          <router-view />
        </div>
        <BTBFoot class="container_foot"/>
      </div>
      <BTBAside class="body_aside" />
    </div>
  </div>
</template>

<script>
import BTBHead from '@/components/layout/head.vue'
import BTBAside from '@/components/layout/aside.vue'
import BTBFoot from '@/components/layout/foot.vue'

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
  methods: {
    togglePageMenu: function () {
      this.env.isHidden = !this.env.isHidden
    }
  }
}
</script>

<style lang="scss">
$aside-width: 300px;

.btb-layout {
  height: 100vh;
  width: 100%;
  overflow-x: hidden;

  .layout_head {
    flex-shrink: 0;
  }
  .layout_body {
    position: relative;
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    background-color: $color-gray-dd;
    height: calc(100% - 4rem);

    .body_container {
      @include transition(margin-right);
      background-color: $color-gray-lll;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      overflow: auto;
      margin-right: 0;
      @include media-breakpoint-up-md {
        margin-right: $aside-width;
      }

      .container_content {
        flex-grow: 1;
      }
      .container_foot {
        flex-shrink: 0;
      }
    }
    .body_aside {
      @include transition(right);
      position: absolute;
      width: $aside-width;
      flex-shrink: 0;
      background-color: $color-mask;
      top: 0;
      right: 0;
      bottom: 0;

      @include media-breakpoint-up-md {
        background-color: $color-gray-dd;
      }
    }

    &.aside-hidden {
      .body_container {
        margin-right: 0;
      }
      .body_aside {
        right: -100%;
      }
    }
  }
}
</style>
