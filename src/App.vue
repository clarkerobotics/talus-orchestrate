<template>
  <div id="app">
    <Controls />
    <Simulator />
    <Menu />
  </div>
</template>

<script>
import Controls from '@/components/Controls'
import Menu from '@/components/Menu'
import Simulator from '@/components/Simulator'

export default {
  name: 'App',
  components: {
    Controls,
    Menu,
    Simulator,
  }
}
</script>

<style>
@import './scss/main.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  position: fixed;
}
</style>
