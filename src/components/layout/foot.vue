<template>
  <div class="btb-foot">
    <div class="foot_navbar">
      <a class="navbar_linkBtn linkBtn-paypal" href="https://www.paypal.me/vannoel0628" target="_blank">
        <FAI :icon="['fab', 'paypal']" fixed-width/>
      </a>
      <a class="navbar_linkBtn linkBtn-github" href="https://github.com/BlackToolBoxLaboratory" target="_blank">
        <FAI :icon="['fab', 'github']" fixed-width/>
      </a>
      <a class="navbar_linkBtn linkBtn-npm" href="https://www.npmjs.com/org/blacktoolbox" target="_blank">
        <FAI :icon="['fab', 'npm']" fixed-width/>
      </a>
      <a class="navbar_linkBtn linkBtn-linkedin" href="https://www.linkedin.com/company/black-tool-box-laboratory/" target="_blank">
        <FAI :icon="['fab', 'linkedin']" fixed-width/>
      </a>
      <a class="navbar_linkBtn linkBtn-wordpress" href="https://vannoel0628.wordpress.com/" target="_blank">
        <FAI :icon="['fab', 'wordpress']" fixed-width/>
      </a>
      <a class="navbar_linkBtn linkBtn-email" href="mailto://vannoel0628@gmail.com" target="_blank">
        <FAI :icon="['far', 'envelope']" fixed-width/>
      </a>
    </div>

    <footer class="foot_copyright">
      Copyright © Black Tool Box Laboratory. All rights reserved.
    </footer>

  </div>  
</template>

<script>
export default {
  name: 'btb-foot',
}
</script>

<style lang="scss">
.btb-foot{
  .foot_navbar {
    @include font-xl;
    @include padding-x(1rem);
    @include padding-y(0.5rem);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: $color-gray-ll;

    .navbar_linkBtn {

      &.linkBtn-paypal:hover {
        color: $color-paypal;
      }
      &.linkBtn-github:hover {
        color: $color-github;
      }
      &.linkBtn-npm:hover {
        color: $color-npm;
      }
      &.linkBtn-linkedin:hover {
        color: $color-linkedin;
      }
      &.linkBtn-wordpress:hover {
        color: $color-wordpress;
      }
      &.linkBtn-email:hover {
        color: $color-email;
      }

      & + .navbar_linkBtn {
        margin-left: 1rem;
      }
    }
  }

  .foot_copyright {
    @include font-sm;
    @include padding-sm;
    color: $color-gray-lll;
    background-color: $color-gray-ddd;
    text-align: center;
  }
}
</style>