<template>
  <div class="clientes">
      <Header />
      <Buscar />
  </div>
</template>

<script>
import Header from '../components/Header'
import Buscar from '../components/Buscar'

export default {
  components: {
    Header,
    Buscar
  }

}
</script>

<style scoped>
  .clientes {
    height: 100%;
    width: 100%;
  }
</style>