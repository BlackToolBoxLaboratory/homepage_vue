<template>
  <div class="btb_layout">
    <BTBHead class="layout_head" @togglePageMenu="togglePageMenu()"/>
    <div :class="['layout_body', { 'aside-hidden' : env.isCollapsed}]">
      <div class="body_container">
        <div class="container_content">
          <router-view />
        </div>
        <BTBFoot class="container_foot"/>
      </div>
      <BTBAside class="body_aside"/>
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
        isCollapsed: true
      }
    }
  },
  methods: {
    togglePageMenu: function () {
      this.env.isCollapsed = !this.env.isCollapsed;
    }
  }
}
</script>

<style lang="scss">
.btb_layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  width: 100%;

  .layout_head {
    flex-shrink: 0;
  }
  .layout_body {
    flex-grow: 1;
    display: flex;
    flex-direction: row;

    .body_container {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      overflow: auto;

      .container_content {
        flex-grow: 1;
      }
      .container_foot {
        flex-shrink: 0;
      }
    }
    .body_aside {
      width: 300px;
      flex-shrink: 0;
    }
  }
}
</style>