<template>
  <div class="module-pre">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "module-pre",
});
</script>

<style lang="scss">
.module-pre {
  @include margin-lg-y;
  @include padding-md-y;
  @include padding-lg-x;
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
    @include padding-md-x;
    color: $color-primary;
    background-color: $color-gray-ddd;
  }
}
</style>
