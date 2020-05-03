<template>
  <div class="module-divider">
    <div class="divider_line"></div>
    <FAI class="divider_icon" :icon="['fas', 'tools']" fixed-width />
    <FAI class="divider_icon" :icon="['fas', 'tools']" fixed-width />
    <FAI class="divider_icon" :icon="['fas', 'tools']" fixed-width />
    <FAI class="divider_icon" :icon="['fas', 'tools']" fixed-width />
    <FAI class="divider_icon" :icon="['fas', 'tools']" fixed-width />
    <FAI class="divider_icon" :icon="['fas', 'tools']" fixed-width />
    <FAI class="divider_icon" :icon="['fas', 'tools']" fixed-width />
    <div class="divider_line"></div>
  </div>
</template>

<script>
export default {
  name: 'module-divider'
}
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
