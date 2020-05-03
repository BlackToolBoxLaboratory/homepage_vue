<template>
  <div class="module-section">
    <template v-if="$slots.head">
      <div class="section_head">
        <slot name="head"/>
      </div>
    </template>
    <div class="section_body">
      <slot/>
    </div>
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
    @include margin-t(1.5rem);
  }

  .section_head {
    @include font-sm-b;
    @include border-solid-b(1px);
    @include margin-lg-b;
    @include padding-sm-b;
    border-color: $color-gray-l;
    color: $color-gray-l;
  }
  .section_body {
    @include margin-lg-l;
  }
}
</style>
