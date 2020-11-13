<template>
  <div id="app">
    <Sidebar />
    <Login />
  </div>
</template>

<script>
import Login from './views/Login.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Login,
    Sidebar
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
