<template>
  <header>
    <div class="header">      
      <div class="rota">
        <span>Home / Clientes</span>
      </div>
      <div class="logo">
        <img src='../assets/logo.svg' alt="Logo">
      </div>      
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scopped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px; 
  border-bottom: #DBDBDB solid 1px;
}
.rota {
  font: normal normal normal 15px/20px Open Sans;
  letter-spacing: 0px;
  color: #2E2E2E;
}
.logo img{
  width: 97px;
  height: 35px;
}

</style>