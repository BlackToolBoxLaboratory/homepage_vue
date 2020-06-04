<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'btb-app'
}
</script>

<style lang="scss">
@import "@/assets/style/index.scss";
#app {
  height: 100%;
  background-color: $color-gray-lll;
}
</style>
