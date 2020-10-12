<template>
  <div class="home">
    <div class="navi">
    <button @click="logout" id="logout">SALIR</button> <br>
    </div>
     <h1 >Bienvenido</h1>
    <img alt="Welcome logo" src="../assets/welcome.gif">
    
   
  </div>
</template>

<script>
// @ is an alias to /src

import firebase from 'firebase'
export default {
  name: 'Home',
  components: {

  },
  methods:{
    logout(){
      firebase.auth().signOut()
        .then(()=>{
          this.$router.push('/')
        }).catch(function(error){
          alert(error)
        })
    }
  }
}
</script>

<style scoped>
  home{
    display:flex;
    flex-direction:column;
  }
  #logout{
    width:120px;
    font-size:20px;
    border-radius:15px;
    background-color:pink;
    margin-bottom:50px;
    margin-left:80% ;
    margin-top:20px
  }
  #logout:hover{
    background-color:blue;
    color:white;
  }
  h1{
    color:Green;
    margin-top:100px;
    font-size:100px;
    border-radius:50px;
  }
  img{
    border-radius:200px;
  }
  .navi{
      background-color:grey;
  }
</style>