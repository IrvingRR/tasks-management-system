<script>
import { mapState } from 'vuex'
  export default {
    name: 'App',
    computed: {
      ...mapState(['tasks'])
    }
  }
</script>

<template>
  {{ tasks }}
  <component :is="$route.meta.layout">
    <RouterView />
  </component>
</template>

<style scoped>

</style>
