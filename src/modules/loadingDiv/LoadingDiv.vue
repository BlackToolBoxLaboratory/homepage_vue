<template>
  <div class="module-loading">
    <fai
      class="loading_spinner"
      :icon="['fas', 'spinner']"
      fixedWidth
      spin
      pulse
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "module-loading",
});
</script>

<style lang="scss">
.module-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;

  .loading_spinner {
    font-size: 2rem;
    color: $color-loading;
  }
}
</style>
