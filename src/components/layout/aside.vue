<template>
  <div class="btb-aside">
    <btb-vue-list :listdata="translatedmenu"/>
  </div>
</template>

<script>
import MENU from '@/assets/definitions/menu.js'

export default {
  name: 'btb-aside',
  props: {
    test: Array
  },
  computed: {
    translatedmenu () {
      const result = MENU
      // TODO: for translate language of menu title
      return result
    }
  }
}
</script>
