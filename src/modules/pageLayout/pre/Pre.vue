<template>
  <div class="module-pre">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'module-pre'
}
</script>

<style lang="scss">
.module-pre {
  padding: 0.5rem 1rem;
  background-color: $color-gray-ll;
  overflow: auto;

  pre {
    margin: 0;
  }

  .pre_notice {
    color: $color-gray-l;
  }
  .pre_typeof {
    color: $color-primary;
    background-color: $color-gray-ddd;
    padding: 0 .5rem;
  }
}
</style>
