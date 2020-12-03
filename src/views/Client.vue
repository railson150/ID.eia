
<template>
  <div class="clientes">
      <Header />
      <Buscar />
      <div class="main">
        <div class="filtro">
          <p>Filtro</p>
          <select name="ramo" id="ramo">
            <option value="" selected disabled>Ramo</option>
            <option value="">Ramo 1</option>
            <option value="">Ramo 2</option>
            <option value="">Ramo 3</option>
          </select>
          <select name="porte" id="porte">
            <option value="" selected disabled>Porte</option>
            <option value="pequeno">Pequeno</option>
            <option value="medio">Médio</option>
            <option value="grande">Grande</option>
          </select>
          <select name="status" id="status">
            <option value="ativo" selected>Ativo</option>
            <option value="inativo">Inativo</option>
          </select>
        </div>
        <div class="lista">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Criação</th>
                <th>Ramo</th>
                <th>Região</th>
                <th>Numero Func.</th>
                <th>Ativo</th>

              </tr>
            </thead>
            <tbody>
              <tr v-for="(client, index) in clients" :key="index">
                <td>{{client.CompanyName}}</td>
                <td mask="dd/mm/yyyy">{{client.CreatedAt}}</td>
                <td>{{client.Industry.Name}}</td>
                <td>{{client.State}}</td>
                <td>{{client.EmployeesNumber}}</td>
                <td>{{client.Status}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button @click="clientsGet">
          btn
        </button>
      </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import Buscar from '../components/Buscar'

import {mask} from 'vue-the-mask'
import axios from 'axios';
export default {
  components: {
    Header,
    Buscar
  },
  data() {
    return {
      clients:[]
    }
  },
  directives: {mask},
  methods: {
    clientsGet(){
      const token = localStorage.getItem('token');
      axios.get('https://ideiativadaservice.azurewebsites.net/api/client/',{
        headers:{
          'Authorization':`Bearer ${token}`
        }
      })
      .then((res)=>{
        this.clients = res.data.Data;
        console.log(this.clients);
        
      })
      .catch((error)=>{
        console.log(error )
      })
    }
  },
  beforeMount() {
    this.clientsGet();
  },
  

}
</script>

<style scoped>
  .clientes {
    height: 100%;
    width: 100%;
  }
  .clientes  .filtro {
    padding-left: 20px;
  }
  .clientes .filtro select {
    margin-right: 30px;
    width: 220px;
    height: 38px;
    box-shadow: 0px 3px 6px #0000001A;
    border-radius: 10px;
    outline: 0;
    padding-left: 5px;
    color: #2E2E2E;
  }
  .clientes .filtro p {
    margin-bottom: 5px;
    font: normal normal 300 15px/20px Open Sans;
    letter-spacing: 0px;
    color: #414141;
  }
  table {
    margin: 30px;
    text-align: center;
  }
</style>