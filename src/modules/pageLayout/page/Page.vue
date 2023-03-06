<template>
  <div class="module-page">
    <slot/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'module-page'
})
</script>

<style lang="scss">
.module-page {
  width: 100%;
  margin: 0 auto;

  @include media-breakpoint-up-md {
    @include padding-y(1rem);
    width: 60%;
  }
}
</style>
