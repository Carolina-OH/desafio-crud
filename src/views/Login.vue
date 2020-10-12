<template>
  <div class="container">
    <form>
      <h1>Login</h1><br>
      <label for="">Usuario </label>
      <input type="text" placeholder="Usuario" v-model="user" id="email"> <br><br><br>
      <label for="">Contraseña </label>
      <input type="password" v-model="pass" id="password"> <br><br> <br>
      <button @click.prevent="login">Ingresar</button>
    </form>
    <br>
    <br>
    <img alt="bad logo" src="../assets/badpart.gif">
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'component-name',
  // props: {},
  data: function(){
    return {
      user:'',
      pass:'',
    }
  },
  // computed: {},
  methods: {
    // -- Metodos
    login(){
      
      firebase.auth().signInWithEmailAndPassword(this.user, this.pass)
        .then((resp)=>{
          console.log(resp,'result')
          this.$router.push('/home')
        })
        .catch(function(error){
          let errorCode = error.code;
          let errorMessage = error.message;
          console.log(errorCode,errorMessage)
        })
    }
  },
  // components: {},
}
</script>

<style scoped>
 form{
  margin: 5%;
  border:1px solid purple;
  width:250px;
  text-align:center;
  padding:20px;
 }
  img{
    border-radius:15px;
    width:500px;
    margin-bottom:20px;
  }
  .container{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
</style>