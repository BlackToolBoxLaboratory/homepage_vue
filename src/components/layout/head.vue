<template>
  <header class="btb-head">
    <div class="head_logo">
      <div class="logo_content">
        BV
      </div>
    </div>
    <div class="head_title">
      <div class="title_main hidden-down-md">
        Black Tool Box Laboratory
      </div>
      <div class="title_main hidden-up-md">
        BTB Lab.
      </div>
      <div class="title_sub">
        For Vue.js
      </div>
    </div>
    <div class="head_item">
      <FAI class="header_button" :icon="['fas', 'home']" fixed-width @click="redirectHomepage"/>
    </div>
    <div class="head_item">
      <FAI class="header_button" :icon="['fas', 'globe']" fixed-width/>
    </div>
    <div class="head_item">
      <FAI class="header_button" :icon="['fas', 'bars']" fixed-width @click="togglePageMenu"/>
    </div>
  </header>
</template>

<script>
export default {
  name: 'btb-head',
  methods: {
    redirectHomepage: function () {
      location.href = `${location.origin}/vue/`
    },
    togglePageMenu: function () {
      this.$emit('togglePageMenu')
    }
  }
}
</script>

<style lang="scss">
.btb-head {
  @include padding-sm;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: $color-black;

  .head_logo {
    @include margin-sm;
    @include radius-md;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $color-primary;
    flex-shrink: 0;

    .logo_content {
      @include font-3xl-b;
      color: $color-black;
    }
  }

  .head_title {
    @include margin-sm;
    flex-grow: 1;

    .title_main {
      @include font-lg-b;
      color: $color-primary;
    }
    .title_sub {
      color: $color-gray-ll;
    }
  }

  .head_item {
    @include margin-md;
    @include font-lg;
    flex-shrink: 0;

    .header_button {
      color: $color-gray-ll;
      cursor: pointer;

      &:hover {
        color: $color-gray-lll;
      }
    }
  }
}
</style>
