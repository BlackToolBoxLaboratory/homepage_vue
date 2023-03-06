<template>
  <div class="module-divider">
    <div class="divider_line"></div>
    <fai class="divider_icon" :icon="['fas', 'tools']" fixed-width />
    <fai class="divider_icon" :icon="['fas', 'tools']" fixed-width />
    <fai class="divider_icon" :icon="['fas', 'tools']" fixed-width />
    <fai class="divider_icon" :icon="['fas', 'tools']" fixed-width />
    <fai class="divider_icon" :icon="['fas', 'tools']" fixed-width />
    <fai class="divider_icon" :icon="['fas', 'tools']" fixed-width />
    <fai class="divider_icon" :icon="['fas', 'tools']" fixed-width />
    <div class="divider_line"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'module-divider'
})
</script>

<style lang="scss">
.module-divider {
  @include margin-md-y;
  @include opacity-50;
  display: flex;
  flex-direction: row;
  align-items: center;

  .divider_line {
    @include margin-x(0.25rem);
    @include border-dashed-b(1px);
    border-color: $color-gray;
    width: 100%;
    height: 1px;
    flex-grow: 1;
  }

  .divider_icon {
    @include margin-x(0.25rem);
    @include font-xs;
    flex-shrink: 0;
  }
}
</style>
