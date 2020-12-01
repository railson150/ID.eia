<template>
  <div class="buscar">
    <input type="text" placeholder="Busca">
    <router-link class="button" to="/clientes/new">+ Novo Cliente</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scopped>
.buscar {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.buscar input {
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 10px;
  width: 722px;
  height: 38px;
  font: normal normal 300 15px/20px Open Sans;
  letter-spacing: 0px;
  color: #2E2E2E;
  outline: 0;
  border: none;
  padding: 5px;
}
.buscar .button {
  display: flex;
  width: 222px;
  height: 45px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  font: normal normal 600 15px/20px Open Sans;
  background: #FBBD0E 0% 0% no-repeat padding-box;
  border-radius: 10px;
  outline: 0;
  border: none;
}
</style>