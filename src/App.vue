<template>
  <div id="app">
    <v-player></v-player>
  </div>
</template>

<script>
import player from './components/Player'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },components: {
    'v-player': player
  }
}
</script>
<style>
</style>
