<template>
  <div class="btb-about-package grid-row">
    <div class="grid-col-md-3">
      <div class="package_title">{{ $props.info.name }}</div>
      <FAI class="package_link" :icon="['fas', 'link']" fixed-width @click="redirectRoute($props.info.routename)"/>
    </div>
    <div class="grid-col-md">
      <div class="package_description">{{ $props.info.description }}</div>
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
  }
}
</script>

<style lang="scss">
.btb-about-package{
  .package_title {
    @include font-md-b;
    display: inline-block;

    @include media-breakpoint-down-md {
      @include font-lg-b;
    }
  }

  .package_description {
    @include media-breakpoint-down-md {
      margin-top: 0.5rem;
    }
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
