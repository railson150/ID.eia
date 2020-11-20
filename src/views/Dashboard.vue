<template>
  <div class="dashboard">
    <Sidebar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'

export default {
  name : 'Home',

  components : {
    Sidebar
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
.dashboard {
  display: flex;
}
.content {
  background: #F6F6F8;
  width: calc(100vw - 65px);
  height: 100vh;
}
</style>