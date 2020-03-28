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
    margin: 1.5rem 0 0;
  }

  .section_head {
    @include font-sm-b;
    @include border-solid-b(1px);
    border-color: $color-gray-l;
    color: $color-gray-l;
    margin-bottom: 1rem;
    padding-bottom: 0.25rem;
  }
  .section_body {
    margin-left: 1rem;
  }
}
</style>
