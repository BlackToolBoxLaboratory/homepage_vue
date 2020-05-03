<template>
  <div class="module-block">
    <template v-if="$slots.title">
      <div class="block_title">
        <slot name="title"/>
      </div>
    </template>
    <div class="block_body">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'module-block'
}
</script>

<style lang="scss">
.module-block {
  .block_title {
    @include font-lg-b;
    @include margin-lg-y;
  }
  .block_body {
    @include margin-lg-l;
  }

  .block_item {
    & + .block_item {
      @include margin-lg-t;
    }
  }
}
</style>
