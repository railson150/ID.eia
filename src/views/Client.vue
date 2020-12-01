<template>
  <div class="clientes">
      <Header />
      <Buscar />

  </div>
</template>

<script>
import Header from '../components/Header'
import Buscar from '../components/Buscar'

import axios from 'axios';
export default {
  components: {
    Header,
    Buscar
  },
  methods: {
    clients(){
      const token = localStorage.getItem('token');
      axios.get('https://ideiativadaservice.azurewebsites.net/api/client/',{
        headers:{
          'Authorization':`Bearer ${token}`
        }
      })
      .then((res)=>{
        console.log(res);
      })
      .catch((error)=>{
        console.log(error )
      })
    }
  },
  beforeMount() {
    this.clients();
  },

}
</script>

<style scoped>
  .clientes {
    height: 100%;
    width: 100%;
  }
</style>