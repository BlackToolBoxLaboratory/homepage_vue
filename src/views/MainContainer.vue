<template>
  <BTBLayout>
    <router-view />
  </BTBLayout>
</template>

<script>
import BTBLayout from '@/components/layout/index.vue'

export default {
  name: 'btb-main-container',
  components: {
    BTBLayout
  }
}
</script>
