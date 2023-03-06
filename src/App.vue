<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: 'btb-app'
}
</script>

<style lang="scss">
@import "@/assets/style/index.scss";

#app {
  background-color: $color-gray-lll;
}
</style>
