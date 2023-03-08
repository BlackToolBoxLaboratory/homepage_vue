<template>
  <div class="btb-about-package grid-row">
    <div class="grid-col-md-3">
      <div class="package_title">{{ props.info.name }}</div>
      <fai
        class="package_link"
        :icon="['fas', 'link']"
        fixed-width
        @click="redirectRoute"
      />
    </div>
    <div class="grid-col-md">
      <div class="package_description">{{ props.info.description }}</div>
      <div class="package_version">Version {{ props.info.version }}</div>
      <div class="package_updated">Updated: {{ props.info.updated }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import type { PropType } from "vue";
import type { PackageItem } from "@/assets/definitions/packageObj";

export default defineComponent({
  name: "btb-about-package",
  props: {
    info: {
      type: Object as PropType<PackageItem>,
      default: () => {
        return {};
      },
    },
  },
  setup(props, { emit }) {
    const redirectRoute = () => {
      emit("redirectRoute", props.info.routename);
    };

    return {
      props,
      redirectRoute,
    };
  },
});
</script>

<style lang="scss">
.btb-about-package {
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

    &:hover {
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
