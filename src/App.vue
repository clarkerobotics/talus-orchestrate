<template>
  <div id="app">
    <Controls />
    <Simulator />
  </div>
</template>

<script>
import Controls from './components/Controls'
import Simulator from './components/Simulator'

export default {
  name: 'App',
  components: {
    Controls,
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
  /* display: flex; */
  height: 100vh;
  position: fixed;
}
</style>
