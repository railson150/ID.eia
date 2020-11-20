<template>
  <div class="sidebar" :class="{'show': showSidebar}">
    <div class="user">
      <img src="../assets/icone.svg">
      <span :class="{'show-names': showSidebar}">Usuário</span>
    </div>
    <div class="menu-items">
      <router-link to="/clientes" class="rota" active-class="active">
        <div class="link-container">
          <img src="../assets/icon_clientes.svg">
          <span style="color: #f2bc12">Clientes</span>
        </div>
      </router-link>
      <router-link to="/projetos" class="rota" active-class="active">
        <div class="link-container">
          <img src="../assets/icone.svg">
          <span>Projetos</span>
        </div>
      </router-link>
      <router-link to="/configuracao" class="rota" active-class="active">
        <div class="link-container">
          <img src="../assets/icon_games.svg">
          <span>Configuração Games</span>
        </div>
      </router-link>
      <router-link to="/" class="rota" active-class="active">
        <div class="link-container">
          <img src="../assets/icon_sair.svg">
          <span>Sair</span>
        </div>
      </router-link>
    </div>
    <div class="bottom-control">
      <img src="../assets/icone-expand.svg" @click="showNav" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      showSidebar: false,
      showLink: false
    }
  },
  methods: {
    showNav() {
      if(this.showSidebar) {
        this.showLink = false;
        setTimeout(() => {
          this.showSidebar = false;
        }, 500);
      }
      else {
        this.showSidebar = true;
        setTimeout(() => {
          this.showLink = true;
        }, 500)
      }     
    }
  }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
  .sidebar {
    display: flex;
    flex-direction: column;
    width: 250px !important;
    padding: 10px;
    min-height: calc(100vh - 20px);
    background-color: #fff;
    border-width: 0 1px 0 0;
    transition: all .5s ease-in-out;
    box-shadow: 0px 10px 10px #6A74C929;
  }
 .show {
    width: 266px;
  }
  .show-names {
    display: initial;
  }
  .rota {
    text-decoration: none;
  }
  .link-container {
    display: flex;
    align-items: center;
    padding-left: 15px;
  }
  .menu-items span {
    margin-left: 15px;
    font: normal normal 600 15px/20px Open Sans;
    color: #9F9F9F;
  }
  .user {
    display: flex;
    align-items: center;
    font: normal normal bold 15px/20px Open Sans;
    color: #2E2E2E;
    text-transform: uppercase;
    padding: 23px 0 23px 15px;
    margin-bottom: 53px;
    border-bottom: #f6f6f8 solid 1px;
    box-sizing: border-box;
  }
  .user span {
    margin-left: 15px;
  } 
  .menu-items {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  }
  .menu-items > * {
    margin-bottom: 53px;
  }
  .bottom-control {
    align-self: center;
    cursor: pointer;
    position: absolute;
    bottom: 50px;
  }
  .bottom-control img {
    width: 8.5px;
  }
</style>