<template>
  <div class="container">
    <img class="logo" src="../assets/logo.svg" alt="">
    <form @submit.prevent="login">
      <input type="text" name="login" id="login" placeholder="Login" v-model="user.login">
      <input type="password" name="senha" id="senha" placeholder="Senha" v-model="user.pass">
      <button id="entrar">Entrar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      user:{
        
      },
      response:''
      
    }
  },
  methods:{
    login(){
      axios.post('https://ideiativadaservice.azurewebsites.net/Auth' ,this.user)
      .then((res)=>{
        this.response = res
        // console.log(this.response)
        if (this.response.status == 200) {
           localStorage.setItem('token', this.response.data.token)
            this.$router.push({ name: 'Client' })
        }
      })
      .catch(function(error){
        console.log(error)
      });
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
  .container {
    display: flex;
    flex-direction: column;
    width: 90vw;
    max-width: 380px;
  }
  input{
    width: 100%;
    height: 53px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 23px;
    opacity: 1;
    font: 400 16px/22px Open Sans;
    color: #7E7E7E;
    border: none;
    outline: 0;
    margin-bottom: 13px;
    text-align: center

  }
  #entrar{
    width: 100%;
    height: 53px;
    font: 600 18px/22px Open Sans;
    color: #fff;
    background: #FBBD0E 0% 0% no-repeat padding-box;
    border-radius: 27px;
    border: none;
    outline: 0;
    cursor: pointer
  }
  .logo{
    width: 100%;
    margin-bottom: 58px;
  }
  body{
      background: #FFDE84;
      -webkit-animation: colorchange 15s 3s ease-in-out alternate none running infinite; 
      animation: colorchange 15s 3s ease-in-out alternate none running infinite;
    }
    @-webkit-keyframes colorchange {
     0%  {background: #FFDE84;}
    25%  {background: #46CCFF ;}
    50%  {background: #B656FF ;}
    75%  {background: #FF6565 ;}
    100% {background: #1AD96D ;}
    }
    @keyframes colorchange {
     0%  {background: #FFDE84;}
    25%  {background: #46CCFF ;}
    50%  {background: #B656FF ;}
    75%  {background: #FF6565 ;}
    100% {background: #1AD96D ;}
    }
</style>