<template>
  <div class="module-page-head">
    <div class="head_title">
      {{$props.title}}
    </div>
    <template v-for="btn in $props.btnList">
      <div :class="['head_btn', `btn-${btn.id}`]" :key="btn.id" @click="clickBtn(btn)">
        <FAI :icon="btn.fa" fixed-width />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'module-page-head',
  props: {
    title: {
      type: String,
      default: ''
    },
    btnList: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  methods: {
    clickBtn: function (btn) {
      this.$emit('clickBtn', btn)
    }
  }
}
</script>

<style lang="scss">
.module-page-head {
  margin-bottom: 0.5rem;

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
    color: $color-gray-d;
    margin-left: 0.5rem;
    cursor: pointer;

    &.btn-github:hover {
      color: $color-github;
    }
    &.btn-npm:hover {
      color: $color-npm;
    }
  }
}
</style>
