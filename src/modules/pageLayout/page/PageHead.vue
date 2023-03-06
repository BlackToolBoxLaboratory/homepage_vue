<template>
  <div class="module-page-head">
    <div class="head_title">
      {{ $props.title }}
    </div>
    <template v-for="btn in $props.btnList" :key="btn.id">
      <div :class="['head_btn', `btn-${btn.id}`]" @click="clickBtn(btn)">
        <fai :icon="btn.fa" fixed-width />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'module-page-head',
  props: {
    title: {
      type: String,
      default: ''
    },
    btnList: {
      type: Array as PropType<any[]>,
      default: function () {
        return []
      }
    }
  },
  setup(props, { emit }) {
    const clickBtn = (btn: any) => {
      emit('clickBtn', btn)
    }

    return {
      clickBtn
    }
  }
})
</script>

<style lang="scss">
.module-page-head {
  @include margin-md-b;

  .head_title,
  .head_btn {
    display: inline-block;
    vertical-align: middle;
  }

  .head_title {
    @include font-xl-b;

    @include media-breakpoint-up-md {
      @include font-3xl-b;
    }
  }

  .head_btn {
    @include font-lg;
    @include margin-md-l;
    color: $color-gray;
    cursor: pointer;

    &.btn-github:hover {
      color: $color-github;
    }

    &.btn-npm:hover {
      color: $color-npm;
    }
  }
}</style>
