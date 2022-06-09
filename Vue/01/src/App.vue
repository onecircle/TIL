<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <TplDemo /> -->
    <!-- <ComputedDemo /> -->
    <!-- <WatchDemo /> -->
    <ComponentsDemo />
  </div>
</template>

<script>
// import TplDemo from './components/BaseUse/TplDemo'
// import ComputedDemo from './components/BaseUse/ComputedDemo'
// import WatchDemo from './components/BaseUse/WatchDemo'
import ComponentsDemo from './components/ComponentsDemo'

export default {
  name: 'App',
  components: {
    // TplDemo,
    // ComputedDemo,
    // WatchDemo,
    ComponentsDemo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
