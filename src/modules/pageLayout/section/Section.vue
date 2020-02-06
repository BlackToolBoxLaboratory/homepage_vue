<template>
  <div class="module-section">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'module-section'
}
</script>

<style lang="scss">
.module-section {

  & + .module-section {
    margin: 1.5rem 0 0;
  }
}
</style>
