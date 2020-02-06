<template>
  <div class="btb-about-package grid-row">
    <div class="grid-col grid-col-md-3">
      <div class="package_title">{{ $props.info.name }}</div>
      <FAI class="package_link" :icon="['fas', 'link']" fixed-width @click="redirectRoute($props.info.pathname)"/>
    </div>
    <div class="grid-col grid-col-md">
      <span class="package_description">{{ $props.info.description }}</span>
      <div class="package_version">Version {{ $props.info.version }}</div>
      <div class="package_updated">Updated: {{ $props.info.updated }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'btb-about-package',
  props: {
    info: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  methods: {
    redirectRoute: function (pathname) {
      this.$emit('redirectRoute', pathname)
    }
  }
}
</script>

<style lang="scss">
.btb-about-package{
  .package_title {
    @include font-md-b;
    display: inline-block;
  }
  .package_link {
    margin-left: 0.5rem;
    color: $color-gray;
    cursor: pointer;

    &:hover{
      color: $color-primary;
    }
  }
  .package_version,
  .package_updated {
    @include margin-sm-y;
    color: $color-gray-l;
  }
}
</style>
