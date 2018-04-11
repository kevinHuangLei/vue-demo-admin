<template>
  <div id="app">
    <content-view></content-view>
  </div>
</template>

<script>
  import contentView from '@/components/contentView'
export default {
  name: 'App',
  components: {
    contentView
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
